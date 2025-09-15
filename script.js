// TAB SWITCH + TYPEWRITER
document.querySelectorAll(".tab-link").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        // remove active
        document.querySelectorAll(".tab-link").forEach(l => l.classList.remove("active"));
        document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));

        // activate clicked tab + content
        this.classList.add("active");
        const targetId = this.getAttribute("href").substring(1);
        const targetContent = document.getElementById(targetId);
        targetContent.classList.add("active");

        // run typewriter on all h2 inside new tab
        targetContent.querySelectorAll("h2").forEach(h2 => {
            runTypewriterEffect(h2);
        });
    });
});

// THEME TOGGLE
function toggleTheme() {
    const theme = document.getElementById("theme-style");
    if (theme.getAttribute("href") === "style.css") {
        theme.setAttribute("href", "dark.css");
    } else {
        theme.setAttribute("href", "style.css");
    }
}

// SCROLL TO TOP
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// RESUME DOWNLOAD
function downloadResume() {
    const link = document.createElement("a");
    link.href = "resume.pdf";     // path to your file
    link.download = "resume.pdf"; // file name after download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// PROJECT FILTER
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

// TYPEWRITER EFFECT
function runTypewriterEffect(element, speed = 80) {
    const text = element.getAttribute("data-text") || element.textContent;
    element.setAttribute("data-text", text);
    element.textContent = "";

    let i = 0;
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// RUN TYPEWRITER ON INITIAL LOAD
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".tab-content.active h2").forEach(h2 => {
        runTypewriterEffect(h2);
    });
});
