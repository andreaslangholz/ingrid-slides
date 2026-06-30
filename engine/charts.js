/* ============================================================
   Charts  — canvas[data-chart][data-src]
     data-chart : bar | line | pie | doughnut | scatter
     data-src   : path to a CSV or XLSX file in data/
   CSV format  : first row = headers, first col = labels
   XLSX format : same convention, first sheet used
   Diagrams — pre.mermaid
     Write standard Mermaid syntax inside a <pre class="mermaid">
     block. Theme is auto-synced to the deck's design system.
   ============================================================ */
(() => {

  /* ---------- Mermaid ---------- */
  if (window.mermaid) {
    mermaid.initialize({
      startOnLoad: false,
      theme: 'base',
      themeVariables: {
        primaryColor: '#ffffff',
        primaryTextColor: '#1a1a1a',
        primaryBorderColor: '#d5d5d0',
        lineColor: '#6b6b65',
        secondaryColor: '#f5f5f3',
        tertiaryColor: '#e0e0db',
        background: 'transparent',
        mainBkg: '#ffffff',
        nodeBorder: '#d5d5d0',
        clusterBkg: '#f5f5f3',
        edgeLabelBackground: '#f5f5f3',
        fontFamily: "'Plus Jakarta Sans', Aptos, system-ui, sans-serif",
        fontSize: '14px'
      }
    });
    // Don't run eagerly — slides are display:none on load, giving Mermaid zero dimensions.
    // Lazy render happens in the show() hook below on first activation.
  }

  /* ---------- Charts ---------- */
  if (!window.Chart) return;

  Chart.defaults.font.family = "'Plus Jakarta Sans', Aptos, system-ui, sans-serif";
  Chart.defaults.color = '#6b6b65';

  const PALETTE = ['#AA73FA', '#5FA4FA', '#F8898C', '#FFCD96', '#4C92E9', '#EE686C'];

  /* Lazy-load SheetJS only when an xlsx/xls file is requested */
  let xlsxPromise = null;
  function getXLSX() {
    if (window.XLSX) return Promise.resolve(window.XLSX);
    if (xlsxPromise) return xlsxPromise;
    xlsxPromise = new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = 'https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js';
      s.onload = () => resolve(window.XLSX);
      s.onerror = () => reject(new Error('Failed to load XLSX library'));
      document.head.appendChild(s);
    });
    return xlsxPromise;
  }

  function parseCSV(text) {
    const rows = [];
    for (const line of text.trim().split('\n')) {
      if (!line.trim()) continue;
      const row = [];
      let field = '', inQ = false;
      for (let i = 0; i < line.length; i++) {
        const c = line[i];
        if (c === '"') { inQ = !inQ; continue; }
        if (c === ',' && !inQ) { row.push(field.trim()); field = ''; continue; }
        field += c;
      }
      row.push(field.trim());
      rows.push(row);
    }
    return rows;
  }

  async function loadData(src) {
    /* Inline data: data-src="#my-id" reads from <script type="text/csv" id="my-id"> */
    if (src.startsWith('#')) {
      const el = document.querySelector(src);
      if (!el) throw new Error(`No element found for ${src}`);
      return parseCSV(el.textContent);
    }
    /* Remote/local-server path: fetch() */
    const ext = src.split('.').pop().toLowerCase();
    const res = await fetch(src);
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
    if (['xlsx', 'xls'].includes(ext)) {
      const XLSX = await getXLSX();
      const buf = await res.arrayBuffer();
      const wb = XLSX.read(buf, { type: 'array' });
      const ws = wb.Sheets[wb.SheetNames[0]];
      return XLSX.utils.sheet_to_json(ws, { header: 1 });
    }
    return parseCSV(await res.text());
  }

  async function loadFromFile(file) {
    const ext = file.name.split('.').pop().toLowerCase();
    if (['xlsx', 'xls'].includes(ext)) {
      const XLSX = await getXLSX();
      const buf = await file.arrayBuffer();
      const wb = XLSX.read(buf, { type: 'array' });
      const ws = wb.Sheets[wb.SheetNames[0]];
      return XLSX.utils.sheet_to_json(ws, { header: 1 });
    }
    return parseCSV(await file.text());
  }

  function toChartData(rows, type) {
    const headers = rows[0];
    const data = rows.slice(1);
    const labels = data.map(r => r[0]);
    const isRound = ['pie', 'doughnut'].includes(type);
    if (isRound) {
      return {
        labels,
        datasets: [{ data: data.map(r => +r[1]), backgroundColor: PALETTE, borderWidth: 0 }]
      };
    }
    return {
      labels,
      datasets: headers.slice(1).map((label, i) => ({
        label,
        data: data.map(r => +r[i + 1]),
        backgroundColor: PALETTE[i % PALETTE.length],
        borderColor: PALETTE[i % PALETTE.length],
        borderWidth: type === 'line' ? 2 : 0,
        fill: false,
        tension: 0.35,
        pointRadius: type === 'line' ? 3 : 0,
        barPercentage: 0.65
      }))
    };
  }

  function chartOptions(type, seriesCount) {
    const isRound = ['pie', 'doughnut'].includes(type);
    return {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: isRound || seriesCount > 1,
          position: 'bottom',
          labels: { padding: 20, boxWidth: 10, boxHeight: 10, font: { size: 12 } }
        },
        tooltip: {
          backgroundColor: '#1a1a1a',
          padding: 10,
          cornerRadius: 6,
          titleFont: { size: 12, weight: '500' },
          bodyFont: { size: 12 }
        }
      },
      scales: isRound ? {} : {
        x: { grid: { display: false }, border: { display: false }, ticks: { font: { size: 12 } } },
        y: { grid: { color: '#e0e0db' }, border: { display: false }, ticks: { maxTicksLimit: 6, font: { size: 12 } } }
      }
    };
  }

  const instances = new Map();

  async function initChart(canvas) {
    const type = canvas.dataset.chart;
    const src = canvas.dataset.src;
    if (!src) return;
    try {
      const rows = await loadData(src);
      const seriesCount = rows[0].length - 1;
      const ch = new Chart(canvas, {
        type,
        data: toChartData(rows, type),
        options: chartOptions(type, seriesCount)
      });
      instances.set(canvas, ch);
    } catch (e) {
      console.warn('[chart]', src, e.message);
      canvas.closest('.chart-wrap')?.insertAdjacentHTML('afterend',
        `<p style="color:#a0a09a;font-size:.8rem;margin-top:.5rem">Could not load ${src}: ${e.message}</p>`);
    }
  }

  /* Initialise any chart canvas that has no instance yet — e.g. a slide
     inserted via the editor's ＋Add-slide picker, or a gallery preview built
     after page load. Exposed so non-deck pages (the template gallery) can
     render their dynamically-built canvases too. */
  function renderPending(root) {
    (root || document).querySelectorAll('canvas[data-chart]').forEach(c => {
      if (!instances.get(c) && c.dataset.src) initChart(c);
    });
  }
  window.renderCharts = renderPending;

  /* Hook show() to resize charts + lazy-render mermaid when a slide activates */
  const _show = window.show;
  window.show = (i) => {
    if (_show) _show(i);
    // rAF lets display:flex apply before we measure canvas dimensions
    requestAnimationFrame(() => {
      const active = document.querySelector('.slide.active');
      // Resize charts that already exist; init ones inserted after load.
      active?.querySelectorAll('canvas[data-chart]').forEach(c => {
        const inst = instances.get(c);
        if (inst) inst.resize();
        else if (c.dataset.src) initChart(c);
      });
      // Lazy mermaid: only render once, only when the slide is visible
      const unrendered = [...(active?.querySelectorAll('.mermaid:not([data-processed])') ?? [])];
      if (unrendered.length && window.mermaid) mermaid.run({ nodes: unrendered });
    });
  };

  /* Pre-fetch all chart data; rendering/sizing happens when each slide is shown */
  const canvases = [...document.querySelectorAll('canvas[data-chart]')];
  if (canvases.length) Promise.all(canvases.map(initChart));

  /* Drag-and-drop a CSV or XLSX file onto any chart canvas to reload it */
  canvases.forEach(canvas => {
    const wrap = canvas.closest('.chart-wrap') ?? canvas;
    wrap.addEventListener('dragover', e => { e.preventDefault(); wrap.style.outline = '2px dashed #a0a09a'; wrap.style.outlineOffset = '-2px'; });
    wrap.addEventListener('dragleave', () => { wrap.style.outline = ''; wrap.style.outlineOffset = ''; });
    wrap.addEventListener('drop', async e => {
      e.preventDefault();
      wrap.style.outline = ''; wrap.style.outlineOffset = '';
      const file = e.dataTransfer.files[0];
      if (!file) return;
      try {
        const rows = await loadFromFile(file);
        const ch = instances.get(canvas);
        if (ch) {
          const newData = toChartData(rows, ch.config.type);
          ch.data = newData;
          ch.update();
        } else {
          canvas.dataset.src = '';
          const seriesCount = rows[0].length - 1;
          const newCh = new Chart(canvas, { type: canvas.dataset.chart, data: toChartData(rows, canvas.dataset.chart), options: chartOptions(canvas.dataset.chart, seriesCount) });
          instances.set(canvas, newCh);
        }
      } catch(e) {
        console.warn('[chart drop]', e.message);
      }
    });
  });

})();
