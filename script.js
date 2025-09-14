document.querySelectorAll(".tab-link").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelectorAll(".tab-link").forEach(l => l.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
    this.classList.add("active");
    const targetId = this.getAttribute("href").substring(1);
    document.getElementById(targetId).classList.add("active");
  });
});


function toggleTheme() {
  const theme = document.getElementById("theme-style");
  if (theme.getAttribute("href") === "style.css") {
    theme.setAttribute("href", "dark.css");
  } else {
    theme.setAttribute("href", "style.css");
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function downloadResume() {
  const link = document.createElement("a");
  link.href = "resume.pdf";     // path to your file
  link.download = "resume.pdf"; // file name after download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function filterProjects(inputId = "projectSearch") {
    const input = document.getElementById(inputId);
    if (!input) return;

    const filter = input.value.toLowerCase();
    const tab = input.closest(".tab-content");
    const projects = tab.querySelectorAll(".projectContent");

    projects.forEach(project => {
        const text = project.textContent.toLowerCase();
        project.style.display = text.includes(filter) ? "" : "none";
    });
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".tab-content.active h2").forEach(h2 => {
        runTypewriterEffect(h2);
    });
});

document.querySelectorAll(".tab-link").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        document.querySelectorAll(".tab-link").forEach(l => l.classList.remove("active"));
        document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));

        this.classList.add("active");
        const targetId = this.getAttribute("href").substring(1);
        const targetContent = document.getElementById(targetId);
        targetContent.classList.add("active");

        targetContent.querySelectorAll("h2").forEach(h2 => {
            runTypewriterEffect(h2);
        });
    });
});
