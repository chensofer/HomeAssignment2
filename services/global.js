function toggleMenu() {
  const navList = document.querySelector(".main-nav ul");
  if (navList.className.includes("active")) {
    navList.classList.remove("active");
  } else {
    navList.classList.add("active");
  }
}

function toggleDarkMode() {
  const body = document.body;
  const darkModeToggle = document.getElementById("dark-mode-toggle");

  if (body.className.includes("dark-mode")) {
    body.classList.remove("dark-mode");
    darkModeToggle.innerHTML = "🌙";
  } else {
    body.classList.add("dark-mode");
    darkModeToggle.innerHTML = "☀️";
  }
}
