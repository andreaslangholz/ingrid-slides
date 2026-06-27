  let slides = document.querySelectorAll('.slide');
  const counter = document.getElementById('counter');
  const progress = document.getElementById('progress');
  let current = 0;

  window.refreshSlides = () => {
    slides = document.querySelectorAll('.deck > .slide');
    if (current >= slides.length) current = slides.length - 1;
  };


  function show(i) {
    slides.forEach(s => s.classList.remove('active'));
    slides[i].classList.add('active');
    counter.textContent = `${i + 1} / ${slides.length}`;
    progress.style.width = `${((i + 1) / slides.length) * 100}%`;
    current = i;
  }

  function next() { if (current < slides.length - 1) show(current + 1); }
  function prev() { if (current > 0) show(current - 1); }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') { e.preventDefault(); next(); }
    if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); prev(); }
    if (e.key === 'Home') { show(0); }
    if (e.key === 'End') { show(slides.length - 1); }
    if (e.key === 'p' || e.key === 'P') { e.preventDefault(); downloadPDF(); }
  });

  function downloadPDF() {
    const originalTitle = document.title;
    document.title = 'deck';
    window.print();
    setTimeout(() => { document.title = originalTitle; }, 1000);
  }

  let touchStartX = 0;
  let touchStartY = 0;
  const SWIPE_THRESHOLD = 50;

  document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  }, { passive: true });

  document.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].screenX - touchStartX;
    const dy = e.changedTouches[0].screenY - touchStartY;
    if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dy) > Math.abs(dx)) return;
    if (dx < 0) next();
    else prev();
  }, { passive: true });

  const isEmbed = new URLSearchParams(window.location.search).has('embed');

  show(0);

  // Hide header/footer/progress on full-bleed cover slide
  const _coverSlide = document.querySelector('.ig-cover-ppt');
  if (_coverSlide) {
    const _toggleCover = () =>
      document.body.classList.toggle('ig-cover-active', _coverSlide.classList.contains('active'));
    new MutationObserver(_toggleCover).observe(_coverSlide, { attributes: true, attributeFilter: ['class'] });
    _toggleCover();
  }

  // Hide header/footer/progress on agenda slide
  const _agendaSlide = document.querySelector('.ig-agenda');
  if (_agendaSlide) {
    const _toggleAgenda = () =>
      document.body.classList.toggle('ig-agenda-active', _agendaSlide.classList.contains('active'));
    new MutationObserver(_toggleAgenda).observe(_agendaSlide, { attributes: true, attributeFilter: ['class'] });
    _toggleAgenda();
  }

  // Hide header/footer/progress on dark gradient cover slide
  const _darkGradSlide = document.querySelector('.ig-dark-grad-cover');
  if (_darkGradSlide) {
    const _toggleDarkGrad = () =>
      document.body.classList.toggle('ig-dark-grad-active', _darkGradSlide.classList.contains('active'));
    new MutationObserver(_toggleDarkGrad).observe(_darkGradSlide, { attributes: true, attributeFilter: ['class'] });
    _toggleDarkGrad();
  }

  // Hide header/footer/progress on business-models full-bleed slide
  const _bmSlide = document.querySelector('.ig-business-models');
  if (_bmSlide) {
    const _toggleBm = () =>
      document.body.classList.toggle('ig-business-models-active', _bmSlide.classList.contains('active'));
    new MutationObserver(_toggleBm).observe(_bmSlide, { attributes: true, attributeFilter: ['class'] });
    _toggleBm();
  }

  // Hide header/footer/progress on closing slide
  const _closingSlide = document.querySelector('.ig-closing');
  if (_closingSlide) {
    const _toggleClosing = () =>
      document.body.classList.toggle('ig-closing-active', _closingSlide.classList.contains('active'));
    new MutationObserver(_toggleClosing).observe(_closingSlide, { attributes: true, attributeFilter: ['class'] });
    _toggleClosing();
  }
