const button = document.getElementById("theme-toggle");

function applyTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark");
    button.textContent = "Light mode";
  } else {
    document.body.classList.remove("dark");
    button.textContent = "Dark mode";
  }
}

const saved = localStorage.getItem("theme");
applyTheme(saved === "dark" ? "dark" : "light");

button.addEventListener("click", function () {
  const isDark = document.body.classList.contains("dark");
  const newTheme = isDark ? "light" : "dark";
  applyTheme(newTheme);
  localStorage.setItem("theme", newTheme);
});