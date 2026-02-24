/* =========================
   MENU
========================= */

const nav = document.querySelector(".nav");
const navToggle = document.querySelector(".nav__toggle");

function toggleMenu() {
    nav.classList.toggle("nav--active");
}

navToggle.addEventListener("click", toggleMenu);


/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    if (loader) {
        loader.style.display = "none";
    }
});


/* =========================
   PARTICLES
========================= */

const canvas = document.querySelector(".particles");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let particles = [];

function createParticles() {
    particles = [];

    for (let i = 0; i < 70; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 1.5,
            dx: (Math.random() - 0.5) * 0.4,
            dy: (Math.random() - 0.5) * 0.4
        });
    }
}

createParticles();

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0,255,255,0.7)";
        ctx.fill();
    });

    requestAnimationFrame(animate);
}

animate();


/* =========================
   REVEAL ON SCROLL
========================= */

const reveals = document.querySelectorAll(".reveal");

function reveal() {
    reveals.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", reveal);
reveal();


/* =========================
   THEME TOGGLE
========================= */

const themeToggle = document.querySelector(".btn--theme");

if (localStorage.theme === "light") {
    document.body.classList.add("light");
    themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        localStorage.theme = "light";
        themeToggle.textContent = "☀️";
    } else {
        localStorage.theme = "dark";
        themeToggle.textContent = "🌙";
    }
});