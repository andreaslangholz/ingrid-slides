/* ============================================================
   Slide template library  —  single source of truth
   Used by:
     • templates/gallery.html   (browsable preview + copy HTML)
     • engine/edit.js           ("＋ Add slide" picker in edit mode)
   Add a template = add an entry below. Each `html` is a clean
   <section class="slide …">…</section> with placeholder content,
   on-brand against engine/engine.css. Editability is added
   automatically by the editor (makeEditable), so no need for
   contenteditable here.
   ============================================================ */
(function () {
  const T = [

    /* ---------------- Covers ---------------- */
    {
      id: 'cover-ppt', name: 'Cover', tag: 'Cover',
      html: `
<section class="slide ig-cover-ppt">
  <div class="cppt-hline"></div>
  <div class="cppt-vline-top"></div>
  <div class="cppt-vline-right"></div>
  <div class="cppt-logo"><img src="brand/ingrid/logos/mono-on-dark.png" alt="Ingrid"></div>
  <h1 class="cppt-title">presentation cover title</h1>
  <p class="cppt-subtitle">SUB-HEADLINE</p>
  <div class="cppt-date">JUNI 2026</div>
</section>`
    },
    {
      id: 'dark-grad-cover', name: 'Dark gradient cover', tag: 'Cover',
      html: `
<section class="slide ig-dark-grad-cover">
  <div class="dgc-logo"><img src="brand/ingrid/logos/color-on-dark.png" alt="ingrid"></div>
  <div class="dgc-headline">
    <span class="dgc-line1">making the grid</span>
    <span class="dgc-line2">intelligent</span>
  </div>
  <div class="dgc-date">JUNI 2026</div>
</section>`
    },
    {
      id: 'agenda', name: 'Agenda', tag: 'Cover',
      html: `
<section class="slide ig-agenda">
  <div class="agd-header"><div class="agd-header-brand">INGRID</div><div class="agd-header-right"></div></div>
  <div class="agd-body">
    <div class="agd-title"><h1>Agenda</h1></div>
    <div class="agd-items">
      <div class="agd-item"><span class="agd-num">01</span><span class="agd-name">Topic 1</span></div>
      <div class="agd-item"><span class="agd-num">02</span><span class="agd-name">Topic 2</span></div>
      <div class="agd-item"><span class="agd-num">03</span><span class="agd-name">Topic 3</span></div>
      <div class="agd-item"><span class="agd-num">04</span><span class="agd-name">Topic 4</span></div>
    </div>
  </div>
  <div class="agd-footer">
    <div class="agd-footer-mark"><img src="brand/ingrid/logos/mark-on-dark.png" alt="Ingrid"></div>
    <div class="agd-footnote">JUNI 2026</div>
    <div class="agd-page">2</div>
  </div>
</section>`
    },

    /* ---------------- Text ---------------- */
    {
      id: 'content-list', name: 'Content (bullets)', tag: 'Text',
      html: `
<section class="slide ig-ppt-content">
  <div class="pptc-body">
    <h1 class="pptc-headline">insert headline here</h1>
    <div class="pptc-subhead">INSERT SUBHEADLINE HERE</div>
    <ul class="pptc-list">
      <li>Click here to edit text</li>
      <li class="l2">Second level</li>
      <li class="l3">Third level</li>
      <li class="l4">Fourth level</li>
    </ul>
  </div>
</section>`
    },
    {
      id: 'two-col', name: 'Two column', tag: 'Text',
      html: `
<section class="slide">
  <div class="eyebrow">The argument</div>
  <h2>two ideas, one slide.</h2>
  <div class="pptc-subhead">THE ARGUMENT</div>
  <div class="two-col">
    <div>
      <div class="subhead">The problem</div>
      <h3 style="text-transform:none;font-weight:500;font-size:1.05rem">What's broken.</h3>
      <p style="margin-top:.5rem">Describe the situation today. Be specific. The reader should recognise their own pain.</p>
    </div>
    <div>
      <div class="subhead">The fix</div>
      <h3 style="text-transform:none;font-weight:500;font-size:1.05rem">What we built.</h3>
      <p style="margin-top:.5rem">Describe the solution. Same length and tone as the problem. Side-by-side drives the point.</p>
    </div>
  </div>
</section>`
    },
    {
      id: 'three-col', name: 'Three column', tag: 'Text',
      html: `
<section class="slide">
  <div class="eyebrow">The framework</div>
  <h2>three dimensions.</h2>
  <div class="pptc-subhead">THE FRAMEWORK</div>
  <div class="three-col">
    <div><h3>Why</h3><p>The motivation. Why this matters. Why now. The conditions that make it urgent.</p></div>
    <div><h3>How</h3><p>The mechanism. The structure. The levers you can actually pull.</p></div>
    <div><h3>What</h3><p>The outcome. What you walk away with. What changes on the other side.</p></div>
  </div>
</section>`
    },
    {
      id: 'callout', name: 'Callout', tag: 'Text',
      html: `
<section class="slide">
  <div class="eyebrow">The insight</div>
  <h2>why now.</h2>
  <div class="pptc-subhead">THE INSIGHT</div>
  <div class="callout">
    <h3>The moment</h3>
    <p>The moment lands here. <strong>The key insight in bold.</strong> Then the supporting context that explains why this is different from what came before.</p>
  </div>
</section>`
    },
    {
      id: 'cap-list', name: 'Q&A list', tag: 'Text',
      html: `
<section class="slide">
  <div class="eyebrow">What it solves</div>
  <h2>the questions you have. <span class="dim">answered.</span></h2>
  <div class="pptc-subhead">WHAT IT SOLVES</div>
  <div class="cap-list">
    <div class="cap-row"><div class="cap-q">Question one?</div><div class="cap-a">A clear, specific answer that addresses the question directly.</div></div>
    <div class="cap-row"><div class="cap-q">Question two?</div><div class="cap-a">Another concrete answer. Avoid hedging. State the reality.</div></div>
    <div class="cap-row"><div class="cap-q">Question three?</div><div class="cap-a">Keep answers parallel in length and tone. Short beats comprehensive.</div></div>
  </div>
</section>`
    },
    {
      id: 'dark-section', name: 'Section divider (dark)', tag: 'Text',
      html: `
<section class="slide ig-dark">
  <div class="eyebrow">The pivot</div>
  <h2>the moment things changed.</h2>
  <div class="pptc-subhead" style="color:rgba(255,255,255,.5)">THE PIVOT</div>
  <span class="accent-line" style="background:var(--violet)"></span>
  <p class="subtitle">Use dark slides sparingly. They mark turning points. Two or three per deck max.</p>
</section>`
    },

    /* ---------------- Data ---------------- */
    {
      id: 'stat-grid', name: 'Stat grid', tag: 'Data',
      html: `
<section class="slide">
  <div class="eyebrow">The numbers</div>
  <h2>impact you can measure.</h2>
  <div class="pptc-subhead">THE NUMBERS</div>
  <div class="stat-grid">
    <div class="stat-card"><div class="stat-label">Metric one</div><div class="stat-number">N×</div><div class="stat-desc">What this number means in context. Be specific about the baseline.</div></div>
    <div class="stat-card stat-hero"><div class="stat-label">Hero metric</div><div class="stat-number">00k</div><div class="stat-desc">The headline number. The dark card draws attention here.</div></div>
    <div class="stat-card"><div class="stat-label">Metric three</div><div class="stat-number">00%</div><div class="stat-desc">Another concrete measurement that supports the story.</div></div>
  </div>
</section>`
    },
    {
      id: 'timeline', name: 'Timeline', tag: 'Data',
      html: `
<section class="slide">
  <div class="eyebrow">The journey</div>
  <h2>how we got here.</h2>
  <div class="pptc-subhead">THE JOURNEY</div>
  <div class="timeline">
    <div class="timeline-row"><div class="timeline-year">2020</div><div class="timeline-track"><div class="timeline-dot"></div><div class="timeline-line"></div></div><div class="timeline-content"><h4>The starting point</h4><p>Where things began. The first decision that shaped everything after.</p></div></div>
    <div class="timeline-row"><div class="timeline-year">2022</div><div class="timeline-track"><div class="timeline-dot"></div><div class="timeline-line"></div></div><div class="timeline-content"><h4>Early progress</h4><p>First experiments. The lessons that shifted the direction.</p></div></div>
    <div class="timeline-row"><div class="timeline-year">2024</div><div class="timeline-track"><div class="timeline-dot"></div><div class="timeline-line"></div></div><div class="timeline-content"><h4>The inflection</h4><p>The moment things accelerated. Why the old model stopped working.</p></div></div>
    <div class="timeline-row"><div class="timeline-year">Now</div><div class="timeline-track"><div class="timeline-dot"></div></div><div class="timeline-content"><h4>Where we are</h4><p>Current state. What the next chapter looks like.</p></div></div>
  </div>
</section>`
    },
    {
      id: 'dot-flow', name: 'Process flow', tag: 'Data',
      html: `
<section class="slide">
  <div class="eyebrow">The process</div>
  <h2>how it works. <span class="dim">step by step.</span></h2>
  <div class="pptc-subhead">THE PROCESS</div>
  <div class="dot-flow">
    <div class="dot-step"><div class="dot"></div><h4>Discover</h4><p>Map the landscape and identify gaps</p></div>
    <div class="dot-step"><div class="dot"></div><h4>Define</h4><p>Frame the problem precisely</p></div>
    <div class="dot-step"><div class="dot"></div><h4>Design</h4><p>Build the right solution</p></div>
    <div class="dot-step"><div class="dot"></div><h4>Deliver</h4><p>Ship with confidence</p></div>
  </div>
</section>`
    },
    {
      id: 'stack-grid', name: 'Stack grid', tag: 'Data',
      html: `
<section class="slide">
  <div class="eyebrow">The stack</div>
  <h2>built on what <span class="dim">you already know.</span></h2>
  <div class="pptc-subhead">THE STACK</div>
  <div class="stack-grid">
    <div class="stack-card"><div class="stack-card-label">Data</div><div class="stack-tool"><span class="mark"></span>PostgreSQL</div><div class="stack-tool"><span class="mark"></span>BigQuery</div><div class="stack-tool"><span class="mark"></span>dbt</div></div>
    <div class="stack-card"><div class="stack-card-label">AI</div><div class="stack-tool"><span class="mark"></span>Claude</div><div class="stack-tool"><span class="mark"></span>Embeddings</div></div>
    <div class="stack-card"><div class="stack-card-label">Platform</div><div class="stack-tool"><span class="mark"></span>AWS</div><div class="stack-tool"><span class="mark"></span>Kubernetes</div></div>
    <div class="stack-card"><div class="stack-card-label">Interface</div><div class="stack-tool"><span class="mark"></span>React</div><div class="stack-tool"><span class="mark"></span>API Gateway</div></div>
  </div>
</section>`
    },
    {
      id: 'chart', name: 'Chart', tag: 'Data',
      html: `
<section class="slide">
  <div class="eyebrow">Performance</div>
  <h2>growth over time.</h2>
  <div class="pptc-subhead">PERFORMANCE</div>
  <div class="chart-wrap"><canvas data-chart="bar" data-src="#tpl-chart-data"></canvas></div>
  <script type="text/csv" id="tpl-chart-data">
label,value
2021,12
2022,19
2023,27
2024,41
</script>
</section>`
    },
    {
      id: 'diagram', name: 'Diagram', tag: 'Data',
      html: `
<section class="slide">
  <div class="eyebrow">Architecture</div>
  <h2>how it connects. <span class="dim">end to end.</span></h2>
  <div class="pptc-subhead">ARCHITECTURE</div>
  <div class="mermaid-wrap">
    <pre class="mermaid">flowchart LR
  A[Input] --> B{Decision}
  B -->|Yes| C[Output A]
  B -->|No| D[Output B]</pre>
  </div>
</section>`
    },

    /* ---------------- Media ---------------- */
    {
      id: 'full-image', name: 'Full-bleed image', tag: 'Media',
      html: `
<section class="slide ig-full">
  <img class="ig-full-img" src="brand/ingrid/photos/wind-turbines-sunset.jpg" alt="Wind turbines at sunset">
  <div class="ig-full-caption">
    <h2>powering an electrified future.</h2>
    <p>Ingrid Capacity · grid-scale flexibility</p>
  </div>
</section>`
    },
    {
      id: 'split', name: 'Split (text + image)', tag: 'Media',
      html: `
<section class="slide">
  <div class="eyebrow">Feature highlight</div>
  <h2>text on one side. <span class="dim">image on the other.</span></h2>
  <div class="pptc-subhead">FEATURE HIGHLIGHT</div>
  <div class="split">
    <div class="split-text">
      <h3 style="text-transform:none;font-weight:500;font-size:1.05rem">Infrastructure that thinks</h3>
      <p>Behind every connection point is software balancing supply, demand, and price in real time.</p>
      <ul class="ig-list" style="margin-top:.75rem"><li>Grid-scale battery storage</li><li>Real-time market optimisation</li><li>Built for Nordic conditions</li></ul>
    </div>
    <div class="split-image"><img src="brand/ingrid/photos/grid-tower.jpg" alt="Power grid tower"></div>
  </div>
</section>`
    },
    {
      id: 'image-cards', name: 'Image cards', tag: 'Media',
      html: `
<section class="slide">
  <div class="eyebrow">Three highlights</div>
  <h2>visual-first content.</h2>
  <div class="pptc-subhead">THREE HIGHLIGHTS</div>
  <div class="image-cards">
    <div class="image-card"><div class="image-card-frame"><img src="brand/ingrid/photos/container-snow.jpg" alt="Battery storage container in snow"></div><div class="image-card-body"><div class="image-card-title">Built for the cold</div><div class="image-card-desc">Battery sites engineered to run through Nordic winters.</div></div></div>
    <div class="image-card"><div class="image-card-frame"><img src="brand/ingrid/photos/ingrid-container.jpg" alt="Ingrid storage container on site"></div><div class="image-card-body"><div class="image-card-title">Deployed on site</div><div class="image-card-desc">Containerised storage, installed where the grid needs it.</div></div></div>
    <div class="image-card"><div class="image-card-frame"><img src="brand/ingrid/photos/site-nivala.jpg" alt="Nivala site, Finland"></div><div class="image-card-body"><div class="image-card-title">Nivala, Finland</div><div class="image-card-desc">One of the sites balancing the regional grid today.</div></div></div>
  </div>
</section>`
    },
    {
      id: 'photo-grid', name: 'Photo grid', tag: 'Media',
      html: `
<section class="slide">
  <div class="eyebrow">The work</div>
  <h2>four images. <span class="dim">one story.</span></h2>
  <div class="pptc-subhead">THE WORK</div>
  <div class="photo-grid">
    <div class="photo-grid-cell"><img src="brand/ingrid/photos/wind-turbines-sunset.jpg" alt="Wind turbines at sunset"><div class="photo-grid-label">Wind</div></div>
    <div class="photo-grid-cell"><img src="brand/ingrid/photos/grid-tower.jpg" alt="Power grid tower"><div class="photo-grid-label">The grid</div></div>
    <div class="photo-grid-cell"><img src="brand/ingrid/photos/wind-and-solar.jpg" alt="Wind and solar"><div class="photo-grid-label">Wind + solar</div></div>
    <div class="photo-grid-cell"><img src="brand/ingrid/photos/container-snow.jpg" alt="Storage container in snow"><div class="photo-grid-label">Storage</div></div>
  </div>
</section>`
    },
    {
      id: 'image-quote', name: 'Image + quote', tag: 'Media',
      html: `
<section class="slide">
  <div class="eyebrow">Testimony</div>
  <h2>a face behind the words.</h2>
  <div class="pptc-subhead">TESTIMONY</div>
  <div class="image-quote">
    <div class="image-quote-frame"><img src="brand/ingrid/photos/team-kajsa-jessica.jpg" alt="Ingrid Capacity team"></div>
    <div class="image-quote-content">
      <div class="image-quote-text">"We're not just adding storage. We're making the grid intelligent enough to use it."</div>
      <div class="image-quote-attr">Add name · Role, Ingrid Capacity</div>
    </div>
  </div>
</section>`
    },

    /* ---------------- Quote / Close ---------------- */
    {
      id: 'grad-quote', name: 'Gradient quote', tag: 'Quote',
      html: `
<section class="slide ig-grad-bg ig-quote-slide">
  <div class="eyebrow">The point</div>
  <h1>we make the grid flex, not break.</h1>
  <div class="quote-attr">Name · Role · Organisation</div>
</section>`
    },
    {
      id: 'quote-pair', name: 'Quote pair', tag: 'Quote',
      html: `
<section class="slide">
  <div class="eyebrow">Two perspectives</div>
  <h2>the debate. <span class="dim">both sides.</span></h2>
  <div class="pptc-subhead">TWO PERSPECTIVES</div>
  <div class="quote-pair">
    <div class="quote-card"><div class="quote-text">"The first perspective. A position one side holds about how things should work."</div><div class="quote-attr">Perspective A</div></div>
    <div class="quote-card quote-hero"><div class="quote-text">"The counterpoint. A contrasting view that creates tension and reveals the real question."</div><div class="quote-attr">Perspective B</div></div>
  </div>
</section>`
    },
    {
      id: 'closing', name: 'Closing', tag: 'Cover',
      html: `
<section class="slide ig-grad-bg ig-closing">
  <div class="cppt-hline"></div>
  <div class="cppt-vline-top"></div>
  <div class="cppt-vline-right"></div>
  <div style="margin:auto 0;">
    <div class="eyebrow">Thank you</div>
    <h1 style="color:var(--white)">let's get<br>to work.</h1>
    <p class="subtitle" style="color:rgba(255,255,255,.8);margin-top:1rem">contact@ingridcapacity.com</p>
  </div>
</section>`
    },

  ];

  // Normalise: trim leading/trailing whitespace on each html block.
  T.forEach(t => { t.html = t.html.trim(); });

  window.SLIDE_TEMPLATES = T;
})();
