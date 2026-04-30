"use strict";

/* =====================================================
   GLOBAL DATA  (single source of truth)
===================================================== */
const DATA = {
  theme: "dark",

  profile: {
    name:    "Muhammad Yasir",
    title:   "Full-Stack Web Developer",
    tagline: "Building modern, animated & interactive web experiences",
    avatar:  "icon/image (4).jpg",
    badges:  ["Full-Stack Developer", "Graphic Designer", "WordPress Expert", "Tech Blogger"]
  },

  links: [
    /* ── Professional ── */
    { name:"LinkedIn",        url:"https://linkedin.com/in/yasirawan4831",                     icon:"fa-brands fa-linkedin-in",   color:"#0A66C2", category:"Professional" },
    { name:"GitHub",          url:"https://github.com/YasirAwan4831",                          icon:"fa-brands fa-github",        color:"#ffffff",  category:"Professional" },
    { name:"Portfolio",       url:"https://yasirawaninfo.vercel.app/",                         icon:"fa-solid fa-globe",          color:"#00eaff",  category:"Professional" },
    
    
    /* ── Dev / Coding ── */
    { name:"Kaggle",          url:"https://kaggle.com/yasirawan4831",                          icon:"fa-brands fa-kaggle",        color:"#20BEFF",  category:"Dev" },
    { name:"LeetCode",        url:"https://leetcode.com/u/YasirAwan4831",                      icon:"fa-solid fa-code",           color:"#FFA116",  category:"Dev" },
    { name:"Stack Overflow",  url:"https://stackoverflow.com/users/31822196/yasirawan4831",    icon:"fa-brands fa-stack-overflow",color:"#F58025",  category:"Dev" },
    { name:"Hacker Rank",     url:"https://www.hackerrank.com/profile/YasirAwan4831",          icon:"fa-brands fa-hackerrank",    color:"#06f038",  category:"Dev" },
    { name:"CoderLegion",     url:"https://coderlegion.com/user/YasirAwan4831",                icon:"fa-solid fa-copyright",      color:"#8297ff",  category:"Dev" },
    { name:"Google Developer",url:"https://developers.google.com/profile/u/yasirawaninfo",     icon:"fa-brands fa-google",        color:"#4285F4",  category:"Dev" },

    /* ── Blogging / Writing ── */
    { name:"Dev.to",          url:"https://dev.to/yasirawan4831",                              icon:"fa-brands fa-dev",           color:"#ffffff",  category:"Writing" },
    { name:"Medium",          url:"https://medium.com/@YasirAwan4831",                         icon:"fa-brands fa-medium",        color:"#ffffff",  category:"Writing" },
    { name:"Hashnode",        url:"https://hashnode.com/@YasirAwan4831",                       icon:"fa-brands fa-hashnode",      color:"#2962FF",  category:"Writing" },
    { name:"Substack",        url:"https://substack.com/@yasirwaninfo",                        icon:"fa-solid fa-newspaper",      color:"#FF6719",  category:"Writing" },
    { name:"ORCID",           url:"https://orcid.org/0009-0002-8711-6868",                     icon:"fa-brands fa-orcid",         color:"#A6CE39",  category:"Professional" },


    /* ── Social / Video ── */
    { name:"YouTube",         url:"https://www.youtube.com/@YasirTech-t1d",                    icon:"fa-brands fa-youtube",       color:"#FF0000",  category:"Social" },
    { name:"X (Twitter)",     url:"https://x.com/YasirAwan4831",                               icon:"fa-brands fa-x-twitter",     color:"#ffffff",  category:"Social" },
    { name:"Instagram",       url:"https://instagram.com/yasirawan4831",                       icon:"fa-brands fa-instagram",     color:"#E4405F",  category:"Social" },
    { name:"ASANI",           url:"https://asani.pk/profile/muhammad-yasir--2",                    icon:"fa-solid fa-briefcase",      color:"#00c896",  category:"Social" },
    { name:"Facebook",        url:"https://facebook.com/profile.php?id=61575935942197",        icon:"fa-brands fa-facebook",      color:"#1877F2",  category:"Social" },
    { name:"TikTok",          url:"https://www.tiktok.com/@yasirawan4831",                     icon:"fa-brands fa-tiktok",        color:"#ebef07",  category:"Social" },
    { name:"Discord",         url:"https://discord.com/users/1298290889373913149",             icon:"fa-brands fa-discord",       color:"#5865F2",  category:"Social" },

    /* ── Contact ── */
    { name:"Portfolio",       url:"https://myasirawaninfo.vercel.app/",                         icon:"fa-solid fa-globe",          color:"#00eaff",  category:"Contact" },
    { name:"Gmail",           url:"mailto:my3154831409@gmail.com",                             icon:"fa-solid fa-envelope",       color:"#EA4335",  category:"Contact" },
    { name:"Outlook",         url:"mailto:my3154831409@hotmail.com",                           icon:"fa-brands fa-microsoft",     color:"#0078D4",  category:"Contact" }
  ]
};

/* =====================================================
   ELEMENT FACTORY
===================================================== */
const $ = id => document.getElementById(id);

function el(tag, cls, html) {
  const e = document.createElement(tag);
  if (cls)  e.className = cls;
  if (html) e.innerHTML = html;
  return e;
}

/* =====================================================
   AI PARTICLE BACKGROUND  (canvas)
===================================================== */
function initAIBackground() {
  const canvas = document.createElement("canvas");
  canvas.id = "ai-bg";
  document.body.insertBefore(canvas, document.body.firstChild);

  const ctx = canvas.getContext("2d");
  let W, H, particles = [], mouse = { x: -9999, y: -9999 };
  const PARTICLE_COUNT = 100;
  const LINK_DIST      = 140;
  const MOUSE_PUSH     = 100;

  /* Resize */
  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  /* Mouse tracking for interactive repulsion */
  window.addEventListener("mousemove", e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });
  window.addEventListener("mouseleave", () => {
    mouse.x = -9999;
    mouse.y = -9999;
  });

  /* Particle class */
  class Particle {
    constructor() { this.reset(true); }

    reset(random) {
      this.x   = random ? Math.random() * W : (Math.random() < 0.5 ? -5 : W + 5);
      this.y   = random ? Math.random() * H : Math.random() * H;
      this.vx  = (Math.random() - 0.5) * 0.55;
      this.vy  = (Math.random() - 0.5) * 0.55;
      this.r   = Math.random() * 1.2 + 0.9;
      this.opacity = Math.random() * 0.5 + 0.5;
    }

    move() {
      /* Mouse repulsion */
      const dx   = this.x - mouse.x;
      const dy   = this.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < MOUSE_PUSH) {
        const force = (MOUSE_PUSH - dist) / MOUSE_PUSH * 0.8;
        this.vx += (dx / dist) * force;
        this.vy += (dy / dist) * force;
      }

      /* Dampen velocity */
      this.vx *= 0.99;
      this.vy *= 0.99;

      /* Speed limit */
      const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
      if (speed > 1.5) { this.vx = (this.vx / speed) * 1.5; this.vy = (this.vy / speed) * 1.5; }

      this.x += this.vx;
      this.y += this.vy;

      /* Wrap edges */
      if (this.x < -10) this.x = W + 10;
      if (this.x > W + 10) this.x = -10;
      if (this.y < -10) this.y = H + 10;
      if (this.y > H + 10) this.y = -10;
    }

    draw() {
      const isLight = DATA.theme === "light";
      ctx.fillStyle = isLight
        ? `rgba(0, 122, 204, ${this.opacity * 0.7})`
        : `rgba(0, 245, 255, ${this.opacity})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  /* Connect nearby particles with lines */
  function connect() {
    const isLight = DATA.theme === "light";
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx   = particles[i].x - particles[j].x;
        const dy   = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < LINK_DIST) {
          const alpha = (1 - dist / LINK_DIST) * (isLight ? 0.35 : 0.6);
          ctx.strokeStyle = isLight
            ? `rgba(0, 122, 204, ${alpha})`
            : `rgba(0, 245, 255, ${alpha})`;
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }

  /* Init particles */
  for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());

  /* Animation loop */
  (function animate() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.move(); p.draw(); });
    connect();
    requestAnimationFrame(animate);
  })();
}

/* =====================================================
   PROFILE SECTION
===================================================== */
function renderProfile() {
  const app = $("app");
  const section = el("section", "profile");

  /* Avatar */
  const avatarWrap = el("div", "profile-avatar");
  const img = document.createElement("img");
  img.src   = DATA.profile.avatar;
  img.alt   = DATA.profile.name + " profile photo";
  img.loading = "eager";
  img.onerror = () => {
    /* Fallback: initials circle if image fails */
    avatarWrap.innerHTML = `
      <div style="
        width:100%; height:100%; display:flex; align-items:center;
        justify-content:center; font-family:var(--font-display);
        font-size:2rem; font-weight:900; color:var(--cyan);
        background:var(--bg-card);
      ">MY</div>`;
  };
  avatarWrap.appendChild(img);

  /* Name */
  const h1 = el("h1", null, DATA.profile.name);

  /* Title */
  const h3 = el("h3", null, DATA.profile.title);

  /* Tagline */
  const p = el("p", null, DATA.profile.tagline);

  /* Badges */
  const badgesRow = el("div", "profile-badges");
  DATA.profile.badges.forEach(b => {
    badgesRow.appendChild(el("span", "badge", b));
  });

  section.append(avatarWrap, h1, h3, p, badgesRow);
  app.appendChild(section);
}

/* =====================================================
   LINKS GRID
===================================================== */
function renderLinks() {
  const app  = $("app");

  /* Section label */
  const label = el("p", "section-label", "&#x2014; All Links &#x2014;");
  app.appendChild(label);

  const grid = el("section", "links-grid");
  grid.setAttribute("aria-label", "Social and professional links");

  DATA.links.forEach((link, index) => {
    const card = document.createElement("a");
    card.className = "link-card";
    card.href      = link.url;
    card.rel       = "noopener noreferrer";
    card.setAttribute("aria-label", link.name);

    /* Open external links in new tab, email in same tab */
    card.target = link.url.startsWith("mailto:") ? "_self" : "_blank";

    card.innerHTML = `
      <i class="${link.icon}" style="color:${link.color}" aria-hidden="true"></i>
      <span>${link.name}</span>
      <small class="card-tag">${link.category}</small>
    `;

    /* GSAP hover */
    card.addEventListener("mouseenter", () =>
      gsap.to(card, { y: -10, scale: 1.04, duration: 0.3, ease: "back.out(1.5)" })
    );
    card.addEventListener("mouseleave", () =>
      gsap.to(card, { y: 0, scale: 1, duration: 0.35, ease: "power2.out" })
    );
    card.addEventListener("mousedown",  () =>
      gsap.to(card, { scale: 0.96, duration: 0.1 })
    );
    card.addEventListener("mouseup",    () =>
      gsap.to(card, { scale: 1.04, duration: 0.15 })
    );

    /* Touch (mobile) */
    card.addEventListener("touchstart", () =>
      gsap.to(card, { scale: 0.97, duration: 0.1 }), { passive: true }
    );
    card.addEventListener("touchend", () =>
      gsap.to(card, { scale: 1, duration: 0.25, ease: "back.out(1.5)" }), { passive: true }
    );

    grid.appendChild(card);
  });

  app.appendChild(grid);
}

/* =====================================================
   FOOTER
===================================================== */
function renderFooter() {
  const year   = new Date().getFullYear();
  const footer = el("footer", "site-footer",
    `&copy; ${year} <a href="https://yasirawaninfo.vercel.app/" target="_blank" rel="noopener">Muhammad Yasir</a>
     &nbsp;·&nbsp; Built with <span style="color:#00f5ff">❤</span> &amp; JavaScript`
  );
  $("app").appendChild(footer);
}

/* =====================================================
   THEME TOGGLE
===================================================== */
function initTheme() {
  const btn = $("theme-toggle");

  /* Respect OS preference on first load */
if (window.matchMedia("(prefers-color-scheme: light)").matches) {
  DATA.theme = "black";
  document.body.classList.add("black");
}

  const updateIcon = () => {
    btn.innerHTML = DATA.theme === "dark"
      ? `<i class="fa-solid fa-moon"  aria-hidden="true"></i>`
      : `<i class="fa-solid fa-sun"   aria-hidden="true"></i>`;
  };
  updateIcon();

  btn.addEventListener("click", () => {
    DATA.theme = DATA.theme === "dark" ? "light" : "dark";
    document.body.classList.toggle("light");
    updateIcon();
    gsap.from(btn, { rotate: 180, scale: 0.5, duration: 0.5, ease: "back.out(2)" });

    /* Update theme-color meta for mobile browser chrome */
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = DATA.theme === "dark" ? "#000000" : "#f0f4f8";
  });
}

/* =====================================================
   SCROLL-TO-TOP
===================================================== */
function initScrollTop() {
  const btn = $("scroll-top");
  btn.innerHTML = `<i class="fa-solid fa-chevron-up" aria-hidden="true"></i>`;

  /* Show / hide on scroll */
  window.addEventListener("scroll", () => {
    if (window.scrollY > 320) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  }, { passive: true });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    gsap.from(btn, { scale: 0.7, duration: 0.4, ease: "back.out(2)" });
  });
}

/* =====================================================
   ENTRY ANIMATION  (staggered reveal)
===================================================== */
function animateEntry() {
  /* Profile elements */
  gsap.from(".profile", {
    opacity:  0,
    y:        40,
    duration: 0.9,
    ease:     "power3.out",
    delay:    0.1
  });

  /* Section label */
  gsap.from(".section-label", {
    opacity:  0,
    y:        20,
    duration: 0.6,
    ease:     "power2.out",
    delay:    0.6
  });

  /* Cards stagger */
  gsap.from(".link-card", {
    opacity:  0,
    y:        35,
    scale:    0.92,
    duration: 0.55,
    ease:     "back.out(1.4)",
    stagger:  0.055,
    delay:    0.75
  });

  /* Footer */
  gsap.from(".site-footer", {
    opacity:  0,
    duration: 0.6,
    delay:    1.8
  });

  /* Floating animation on profile h1 after load */
  gsap.to(".profile h1", {
    y:        -5,
    repeat:   -1,
    yoyo:     true,
    duration: 3,
    ease:     "sine.inOut",
    delay:    1.5
  });
}

/* =====================================================
   KEYBOARD SHORTCUT  (T = toggle theme)
===================================================== */
document.addEventListener("keydown", e => {
  if (e.key.toLowerCase() === "t" && !e.ctrlKey && !e.metaKey && !e.altKey) {
    $("theme-toggle").click();
  }
});

/* =====================================================
   INIT  (single entry point)
===================================================== */
document.addEventListener("DOMContentLoaded", () => {
  initAIBackground();
  renderProfile();
  renderLinks();
  renderFooter();
  initTheme();
  initScrollTop();
  animateEntry();
});