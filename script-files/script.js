const menuBtn = document.getElementById('menuBtn');
  const closeBtn = document.getElementById('closeBtn');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');

  menuBtn.addEventListener('click', () => {
    sidebar.style.right = '0';
    overlay.classList.remove('hidden');
  });

  closeBtn.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);

  function closeMenu() {
    sidebar.style.right = '-100%';
    overlay.classList.add('hidden');
  }