function toggleMenu() {
  const menu = document.querySelector('.menu');
  if (!menu) return;
  const isVisible = getComputedStyle(menu).display !== 'none';
  menu.style.display = isVisible ? 'none' : 'flex';
}
