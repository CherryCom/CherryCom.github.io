document.querySelectorAll(".tab-link").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    // remove active from all links and contents
    document.querySelectorAll(".tab-link").forEach(l => l.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));

    // add active to clicked link and matching content
    this.classList.add("active");
    const targetId = this.getAttribute("href").substring(1);
    document.getElementById(targetId).classList.add("active");
  });
});


function toggleTheme() {
  const theme = document.getElementById("theme-style");
  if (theme.getAttribute("href") === "light.css") {
    theme.setAttribute("href", "dark.css");
  } else {
    theme.setAttribute("href", "style.css");
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}