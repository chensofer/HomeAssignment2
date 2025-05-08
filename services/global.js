function toggleMenu() {
    const navList = document.querySelector('.main-nav ul');
    navList.classList.toggle('active');
}
  
function toggleDarkMode() {
    const body = document.body;
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        darkModeToggle.innerHTML = '☀️';
      } else {
        darkModeToggle.innerHTML = '🌙';
      }
}


  