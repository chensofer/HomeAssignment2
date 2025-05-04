function toggleMenu() {
    const navList = document.querySelector('.main-nav ul');

    navList.classList.toggle('active');
}
  
function toggleDarkMode() {
    const body = document.body;
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'true');
        darkModeToggle.innerHTML = '☀️';
      } else {
        localStorage.setItem('darkMode', 'false');
        darkModeToggle.innerHTML = '🌙';
      }
}

window.addEventListener('DOMContentLoaded', function() {
    
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        darkModeToggle.innerHTML = '☀️';
      } else {
        darkModeToggle.innerHTML = '🌙'; 
      }
  });
  