document.addEventListener("DOMContentLoaded", () => {
  let toggleBtn = document.getElementById("themetoggle");
  let body = document.body;

  // Apply saved theme
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("darkmode");
  }

  // Toggle theme
  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("darkmode");
    localStorage.setItem("theme", body.classList.contains("darkmode") ? "dark" : "light");
  });
});
