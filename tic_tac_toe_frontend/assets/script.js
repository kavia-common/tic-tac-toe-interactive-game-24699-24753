(function () {
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');

  // Persist theme via localStorage
  const saved = localStorage.getItem('ocean-theme');
  if (saved === 'dark') root.classList.add('theme-dark');

  function setTheme(next) {
    if (next === 'dark') {
      root.classList.add('theme-dark');
    } else {
      root.classList.remove('theme-dark');
    }
    localStorage.setItem('ocean-theme', next);
  }

  if (toggle) {
    toggle.addEventListener('click', () => {
      const isDark = root.classList.contains('theme-dark');
      setTheme(isDark ? 'light' : 'dark');
    });
  }

  // Smooth scroll for same-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Keyboard focus visible
  let hadKeyboardEvent = false;
  const enableFocusStyles = () => {
    if (hadKeyboardEvent) document.body.classList.add('focus-visible');
  };
  const disableFocusStyles = () => {
    document.body.classList.remove('focus-visible');
  };
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab' || e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      hadKeyboardEvent = true;
      enableFocusStyles();
    }
  }, true);
  document.addEventListener('mousedown', () => {
    hadKeyboardEvent = false;
    disableFocusStyles();
  }, true);
})();
