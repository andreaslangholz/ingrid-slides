#!/usr/bin/env bash
# Usage: source scripts/ingrid-auth.sh
# Opens a browser Keycloak login and exports INGRID_JWT into the current shell.
# Requires: KEYCLOAK_URL, KEYCLOAK_REALM, KEYCLOAK_CLIENT_ID env vars.

_ingrid_auth() {
  local url="${KEYCLOAK_URL:?Set KEYCLOAK_URL (see .env.example)}"
  local realm="${KEYCLOAK_REALM:-master}"
  local client="${KEYCLOAK_CLIENT_ID:?Set KEYCLOAK_CLIENT_ID (see .env.example)}"

  local device_endpoint="${url}/realms/${realm}/protocol/openid-connect/auth/device"
  local token_endpoint="${url}/realms/${realm}/protocol/openid-connect/token"

  local resp
  resp=$(curl -sf -X POST "$device_endpoint" -d "client_id=${client}") || {
    echo "ingrid-auth: could not reach ${device_endpoint}" >&2
    return 1
  }

  local _py="import sys,json; d=json.load(sys.stdin)"
  local device_code user_code verify_uri interval expires_in
  device_code=$(python3 -c "${_py}; print(d['device_code'])"         <<< "$resp")
  user_code=$(python3    -c "${_py}; print(d['user_code'])"           <<< "$resp")
  verify_uri=$(python3   -c "${_py}; print(d.get('verification_uri_complete') or d['verification_uri'])" <<< "$resp")
  interval=$(python3     -c "${_py}; print(d.get('interval', 5))"     <<< "$resp")
  expires_in=$(python3   -c "${_py}; print(d.get('expires_in', 300))" <<< "$resp")

  echo "Ingrid login — opening browser..."
  echo "  Code: ${user_code}"
  echo "  URL:  ${verify_uri}"
  open "$verify_uri" 2>/dev/null || xdg-open "$verify_uri" 2>/dev/null || true

  local max=$(( expires_in / interval ))
  echo -n "Waiting"
  for _ in $(seq 1 "$max"); do
    sleep "$interval"
    echo -n "."

    local tok_resp error token
    tok_resp=$(curl -sf -X POST "$token_endpoint" \
      -d "grant_type=urn:ietf:params:oauth:grant-type:device_code" \
      -d "device_code=${device_code}" \
      -d "client_id=${client}" 2>/dev/null) || true

    error=$(python3 -c "${_py}; print(d.get('error',''))" <<< "$tok_resp" 2>/dev/null || true)
    [[ "$error" == "authorization_pending" ]] && continue
    if [[ -n "$error" ]]; then
      echo -e "\ningrid-auth: ${error}" >&2
      return 1
    fi

    token=$(python3 -c "${_py}; print(d.get('access_token',''))" <<< "$tok_resp" 2>/dev/null || true)
    if [[ -n "$token" ]]; then
      export INGRID_JWT="$token"
      echo -e "\nAuthenticated. INGRID_JWT is set for this session."
      return 0
    fi
  done

  echo -e "\ningrid-auth: timed out waiting for login." >&2
  return 1
}

_ingrid_auth "$@"
unset -f _ingrid_auth
