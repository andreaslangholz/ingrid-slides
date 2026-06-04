#!/usr/bin/env python3
"""Deterministic quality checks for bundled plugins.

Checks performed:

SKILL.md
  - Frontmatter present with `name` and `description`.
  - `description` includes a "Use when" clause.
  - `description` is at least 60 characters.

plugin.json
  - Required keys: `name`, `version`, `description`, `author`.
  - `author.name` is a first name only (no spaces).
  - `author.githubHandle` present, no `@` prefix.
  - Plugin version matches the entry in `.claude-plugin/marketplace.json`.

Exit codes: 0 on pass, 1 on any failure.
"""

from __future__ import annotations

import argparse
import json
import re
import sys
from dataclasses import dataclass, field
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
PLUGINS_DIR = REPO_ROOT / "plugins"
MARKETPLACE_JSON = REPO_ROOT / ".claude-plugin" / "marketplace.json"

MIN_DESCRIPTION_LENGTH = 60
USE_WHEN_RE = re.compile(r"\b(use when|Use when)\b", re.IGNORECASE)
FRONTMATTER_RE = re.compile(r"^---\s*\n(.*?)\n---\s*(?:\n|$)", re.DOTALL)


@dataclass
class Finding:
    path: str
    rule: str
    message: str
    severity: str = "error"


@dataclass
class Report:
    findings: list[Finding] = field(default_factory=list)

    def add(self, *args, **kwargs) -> None:
        self.findings.append(Finding(*args, **kwargs))

    @property
    def has_errors(self) -> bool:
        return any(f.severity == "error" for f in self.findings)


def parse_frontmatter(text: str) -> dict | None:
    """Parse minimal YAML frontmatter (key: value, folded multi-line)."""
    match = FRONTMATTER_RE.match(text)
    if not match:
        return None
    body = match.group(1)
    result: dict[str, str] = {}
    current_key: str | None = None
    for raw in body.splitlines():
        if not raw.strip():
            continue
        if raw[:1] in (" ", "\t") and current_key is not None:
            result[current_key] = (result[current_key] + " " + raw.strip()).strip()
            continue
        if ":" not in raw:
            continue
        key, _, value = raw.partition(":")
        current_key = key.strip()
        result[current_key] = value.strip()
    return result


def load_marketplace_versions() -> dict[str, str]:
    with MARKETPLACE_JSON.open() as f:
        data = json.load(f)
    versions: dict[str, str] = {}
    for entry in data.get("plugins", []):
        source = entry.get("source", "")
        if source.startswith("./plugins/"):
            versions[entry["name"]] = entry.get("version", "")
    return versions


def check_plugin_json(plugin_dir: Path, marketplace_versions: dict[str, str], report: Report) -> None:
    plugin_json = plugin_dir / ".claude-plugin" / "plugin.json"
    rel = plugin_json.relative_to(REPO_ROOT)
    if not plugin_json.exists():
        report.add(str(rel), "plugin-json-missing", "plugin.json not found")
        return

    with plugin_json.open() as f:
        try:
            data = json.load(f)
        except json.JSONDecodeError as exc:
            report.add(str(rel), "plugin-json-invalid", f"invalid JSON: {exc}")
            return

    for key in ("name", "version", "description", "author"):
        if not data.get(key):
            report.add(str(rel), "plugin-json-required", f"missing required key '{key}'")

    author = data.get("author") or {}
    author_name = (author.get("name") or "").strip()
    if not author_name:
        report.add(str(rel), "author-name-missing", "author.name is required")
    elif " " in author_name:
        report.add(
            str(rel),
            "author-name-format",
            f"author.name '{author_name}' should be a first name only (no spaces)",
        )

    handle = (author.get("githubHandle") or "").strip()
    if not handle:
        report.add(str(rel), "author-handle-missing", "author.githubHandle is required")
    elif handle.startswith("@"):
        report.add(str(rel), "author-handle-format", f"author.githubHandle '{handle}' must not start with '@'")

    name = data.get("name")
    version = data.get("version")
    if name and version:
        mp_version = marketplace_versions.get(name)
        if mp_version is None:
            report.add(str(rel), "marketplace-missing", f"plugin '{name}' not registered in marketplace.json")
        elif mp_version != version:
            report.add(str(rel), "version-out-of-sync", f"version '{version}' != marketplace.json '{mp_version}'")


def check_skill_md(skill_md: Path, report: Report) -> None:
    rel = skill_md.relative_to(REPO_ROOT)
    text = skill_md.read_text()
    frontmatter = parse_frontmatter(text)
    if frontmatter is None:
        report.add(str(rel), "skill-frontmatter-missing", "SKILL.md is missing YAML frontmatter")
        return

    if not frontmatter.get("name"):
        report.add(str(rel), "skill-name-missing", "frontmatter is missing 'name'")
    description = frontmatter.get("description") or ""
    if not description:
        report.add(str(rel), "skill-description-missing", "frontmatter is missing 'description'")
        return

    if len(description) < MIN_DESCRIPTION_LENGTH:
        report.add(
            str(rel),
            "skill-description-short",
            f"description is {len(description)} chars; need at least {MIN_DESCRIPTION_LENGTH}",
        )

    if not USE_WHEN_RE.search(description):
        report.add(
            str(rel),
            "skill-description-no-trigger",
            "description must include a 'Use when …' clause",
        )


def check_plugin(plugin_dir: Path, marketplace_versions: dict[str, str], report: Report) -> None:
    check_plugin_json(plugin_dir, marketplace_versions, report)

    skills_dir = plugin_dir / "skills"
    if skills_dir.is_dir():
        for skill_md in sorted(skills_dir.rglob("SKILL.md")):
            check_skill_md(skill_md, report)


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--plugin", action="append", help="Only validate named plugin(s)")
    parser.add_argument("--json", action="store_true", help="Machine-readable JSON output")
    args = parser.parse_args()

    report = Report()
    marketplace_versions = load_marketplace_versions()

    plugin_dirs = sorted(p for p in PLUGINS_DIR.iterdir() if p.is_dir())
    if args.plugin:
        wanted = set(args.plugin)
        plugin_dirs = [p for p in plugin_dirs if p.name in wanted]

    for plugin_dir in plugin_dirs:
        check_plugin(plugin_dir, marketplace_versions, report)

    if args.json:
        payload = [
            {"path": f.path, "rule": f.rule, "message": f.message, "severity": f.severity}
            for f in report.findings
        ]
        print(json.dumps(payload, indent=2))
    else:
        if not report.findings:
            print("✓ All plugins valid.")
        else:
            for finding in report.findings:
                marker = "✗" if finding.severity == "error" else "!"
                print(f"{marker} {finding.path}: [{finding.rule}] {finding.message}")
            errors = sum(1 for f in report.findings if f.severity == "error")
            print(f"\n{errors} error(s) found.")

    return 1 if report.has_errors else 0


if __name__ == "__main__":
    sys.exit(main())
