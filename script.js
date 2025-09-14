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

function filterProjects() {
    const input = document.getElementById("projectSearch");
    const filter = input.value.toLowerCase();
    const projects = document.querySelectorAll(".projectContent");

    projects.forEach(project => {
        // get the first <p> inside each projectContent = project title
        const title = project.querySelector("p").textContent.toLowerCase();

        if (title.includes(filter)) {
            project.style.display = "";
        } else {
            project.style.display = "none";
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const headings = document.querySelectorAll("h2");

    headings.forEach(h2 => {
        const text = h2.textContent;
        h2.textContent = ""; 
        let i = 0;

        function typeWriter() {
            if (i < text.length) {
                h2.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 80); 
            }
        }

        typeWriter();
    });
});