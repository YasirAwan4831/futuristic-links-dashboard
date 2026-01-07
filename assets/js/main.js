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
  { name:"LinkedIn", url:"https://linkedin.com/in/yasirawan4831", icon:"fa-brands fa-linkedin-in", color:"#0A66C2" },
  { name:"GitHub", url:"https://github.com/YasirAwan4831", icon:"fa-brands fa-github", color:"#ffffff" },
  { name:"Portfolio", url:"https://yasirawan4831.github.io/ApexcifyTechnologys-FrontendInternship/task-2/", icon:"fa-solid fa-globe", color:"#00eaff" },
  { name:"Kaggle", url:"https://kaggle.com/yasirawan4831", icon:"fa-brands fa-kaggle", color:"#20BEFF" },
  { name:"LeetCode", url:"https://leetcode.com/u/YasirAwan4831", icon:"fa-solid fa-code", color:"#FFA116" },
  { name:"Stack Overflow", url:"https://stackoverflow.com/users/31822196/yasirawan4831", icon:"fa-brands fa-stack-overflow", color:"#F58025" },
  { name:"Dev.to", url:"https://forem.com/yasirawan4831", icon:"fa-brands fa-dev", color:"#ffffff" },
  { name:"Medium", url:"https://medium.com/@YasirAwan4831", icon:"fa-brands fa-medium", color:"#ffffff" },
  { name:"Hashnode", url:"https://hashnode.com/@YasirAwan4831", icon:"fa-brands fa-hashnode", color:"#2962FF" },
  { name:"Substack", url:"https://substack.com/@yasirwaninfo", icon:"fa-solid fa-newspaper", color:"#FF6719" },
  { name:"YouTube", url:"https://www.youtube.com/@YasirTech-t1d", icon:"fa-brands fa-youtube", color:"#FF0000" },
  { name:"X (Twitter)", url:"https://x.com/YasirAwan4831", icon:"fa-brands fa-x-twitter", color:"#ffffff" },
  { name:"Facebook", url:"https://facebook.com/profile.php?id=61575935942197", icon:"fa-brands fa-facebook", color:"#1877F2" },
  { name:"Instagram", url:"https://instagram.com/yasirawan4831", icon:"fa-brands fa-instagram", color:"#E4405F" },
  { name:"TikTok", url:"https://www.tiktok.com/@yasirawan4831?lang=en", icon:"fa-brands fa-tiktok", color:"#ef8207ff" },
  { name:"ASANI", url:"https://asani.pk/profile/yasirawan4831", icon:"fa-solid fa-briefcase", color:"#00c896" },
  { name:"Google Developer", url:"https://developers.google.com/profile/u/yasirawaninfo", icon:"fa-brands fa-google", color:"#4285F4" },
  { name:"Discord", url:"https://discord.com/users/1298290889373913149", icon:"fa-brands fa-discord", color:"#5865F2" },
  { name:"Email (Gmail)", url:"mailto:my3154831409@gmail.com", icon:"fa-solid fa-envelope", color:"#EA4335" },
  { name:"Email (Outlook)", url:"mailto:my3154831409@hotmail.com", icon:"fa-brands fa-microsoft", color:"#0078D4" }
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


// 