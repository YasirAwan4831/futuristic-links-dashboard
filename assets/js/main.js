"use strict";

/* =====================================================
   GLOBAL DATA (SINGLE SOURCE OF TRUTH)
===================================================== */
const DATA = {
  theme: "dark",
  profile: {
    name: "Muhammad Yasir",
    title: "Full-Stack Web Developer",
    tagline: "Building modern, animated & interactive web experiences"
  },
  links: [
    { name: "LinkedIn", url: "https://linkedin.com/in/yasirawan4831", icon: "fa-brands fa-linkedin-in", color: "#0A66C2" },
    { name: "GitHub", url: "https://github.com/YasirAwan4831", icon: "fa-brands fa-github", color: "#ffffff" },
    { name: "LeetCode", url: "https://leetcode.com/u/YasirAwan4831", icon: "fa-solid fa-code", color: "#FFA116" },
    { name: "Stack Overflow", url: "https://stackoverflow.com/users/31822196/yasirawan4831", icon: "fa-brands fa-stack-overflow", color: "#F58025" },
    { name: "Portfolio", url: "https://yasirawan4831.github.io", icon: "fa-solid fa-globe", color: "#00eaff" },
    { name: "Kaggle", url: "https://kaggle.com/yasirawan4831", icon: "fa-brands fa-kaggle", color: "#20BEFF" },
    { name: "Dev.to", url: "https://forem.com/yasirawan4831", icon: "fa-brands fa-dev", color: "#ffffff" },
    { name: "Medium", url: "https://medium.com/@YasirAwan4831", icon: "fa-brands fa-medium", color: "#ffffff" },
    { name: "X (Twitter)", url: "https://x.com/YasirAwan4831", icon: "fa-brands fa-x-twitter", color: "#ffffff" }
  ]
};

/* =====================================================
   HELPERS
===================================================== */
const app = document.getElementById("app");
const themeBtn = document.getElementById("theme-toggle");

const el = (tag, cls, html) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html) e.innerHTML = html;
  return e;
};

/* =====================================================
   AI BACKGROUND (CANVAS – FUTURISTIC)
===================================================== */
function initAIBackground() {
  const canvas = document.createElement("canvas");
  canvas.id = "ai-bg";
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");
  let w, h, particles = [];

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  class Particle {
    constructor() {
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      this.vx = (Math.random() - 0.5) * 0.5;
      this.vy = (Math.random() - 0.5) * 0.5;
      this.r = 1.6;
    }
    move() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > w) this.vx *= -1;
      if (this.y < 0 || this.y > h) this.vy *= -1;
    }
    draw() {
      ctx.fillStyle = "#00ffff";
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function init(count = 90) {
    particles = [];
    for (let i = 0; i < count; i++) particles.push(new Particle());
  }

  function connect() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 130) {
          ctx.strokeStyle = `rgba(0,255,255,${1 - d / 130})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach(p => { p.move(); p.draw(); });
    connect();
    requestAnimationFrame(animate);
  }

  init();
  animate();
}

/* =====================================================
   PROFILE
===================================================== */
function renderProfile() {
  const s = el("section", "profile");
  s.append(
    el("h1", null, DATA.profile.name),
    el("h3", null, DATA.profile.title),
    el("p", null, DATA.profile.tagline)
  );
  app.appendChild(s);
}

/* =====================================================
   LINKS GRID (3 PER ROW)
===================================================== */
function renderLinks() {
  const grid = el("section", "links-grid");

  DATA.links.forEach(link => {
    const card = el("a", "link-card");
    card.href = link.url;
    card.target = "_blank";

    card.innerHTML = `
      <i class="${link.icon}" style="color:${link.color}"></i>
      <span>${link.name}</span>
    `;

    /* Hover + click animation */
    card.addEventListener("mouseenter", () =>
      gsap.to(card, { y: -8, scale: 1.05, duration: 0.3 })
    );
    card.addEventListener("mouseleave", () =>
      gsap.to(card, { y: 0, scale: 1, duration: 0.3 })
    );
    card.addEventListener("mousedown", () =>
      gsap.to(card, { scale: 0.95, duration: 0.1 })
    );
    card.addEventListener("mouseup", () =>
      gsap.to(card, { scale: 1.05, duration: 0.1 })
    );

    grid.appendChild(card);
  });

  app.appendChild(grid);
}

/* =====================================================
   THEME TOGGLE
===================================================== */
function initTheme() {
  themeBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`;

  themeBtn.onclick = () => {
    DATA.theme = DATA.theme === "dark" ? "light" : "dark";
    document.body.classList.toggle("light");

    themeBtn.innerHTML =
      DATA.theme === "dark"
        ? `<i class="fa-solid fa-moon"></i>`
        : `<i class="fa-solid fa-sun"></i>`;

    gsap.from(themeBtn, { rotate: 180, scale: 0.6, duration: 0.4 });
  };
}



/* =====================================================
   INIT (SINGLE ENTRY POINT)
===================================================== */
document.addEventListener("DOMContentLoaded", () => {
  initAIBackground();
  renderProfile();
  renderLinks();
  initTheme();
  animateEntry();
});
