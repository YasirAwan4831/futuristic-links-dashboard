"use strict";

/* =====================================================
   GLOBAL DATA
===================================================== */
const DATA = {
  theme: "dark",

  profile: {
    name:    "Muhammad Yasir",
    title:   "Full-Stack Web Developer",
    tagline: "Building modern, animated & interactive web experiences",
    avatar:  "icon/image (4).png",
    badges:  ["Full-Stack Developer", "AI Automation", "SOcial Media Pro", "Data Analyst", "Tech Blogger"]
  },

  links: [
    { name:"LinkedIn",        url:"https://linkedin.com/in/yasirawan4831",                  icon:"fa-brands fa-linkedin-in",   color:"#0A66C2", category:"Professional" },
    { name:"GitHub",          url:"https://github.com/YasirAwan4831",                       icon:"fa-brands fa-github",        color:"#ffffff",  category:"Professional" },
    { name:"Portfolio",       url:"https://yasirawaninfo.vercel.app/",                      icon:"fa-solid fa-globe",          color:"#00eaff",  category:"Professional" },
    { name:"Kaggle",          url:"https://kaggle.com/yasirawan4831",                       icon:"fa-brands fa-kaggle",        color:"#20BEFF",  category:"Dev" },
    { name:"LeetCode",        url:"https://leetcode.com/u/YasirAwan4831",                   icon:"fa-solid fa-code",           color:"#FFA116",  category:"Dev" },
    { name:"Stack Overflow",  url:"https://stackoverflow.com/users/31822196/yasirawan4831", icon:"fa-brands fa-stack-overflow",color:"#F58025",  category:"Dev" },
    { name:"Hacker Rank",     url:"https://www.hackerrank.com/profile/YasirAwan4831",       icon:"fa-brands fa-hackerrank",    color:"#06f038",  category:"Dev" },
    { name:"CoderLegion",     url:"https://coderlegion.com/user/YasirAwan4831",             icon:"fa-solid fa-copyright",      color:"#8297ff",  category:"Dev" },
    { name:"Google Developer",url:"https://developers.google.com/profile/u/yasirawaninfo",  icon:"fa-brands fa-google",        color:"#4285F4",  category:"Dev" },
    { name:"Dev.to",          url:"https://dev.to/yasirawan4831",                           icon:"fa-brands fa-dev",           color:"#ffffff",  category:"Writing" },
    { name:"Medium",          url:"https://medium.com/@YasirAwan4831",                      icon:"fa-brands fa-medium",        color:"#ffffff",  category:"Writing" },
    { name:"Hashnode",        url:"https://hashnode.com/@YasirAwan4831",                    icon:"fa-brands fa-hashnode",      color:"#2962FF",  category:"Writing" },
    { name:"Substack",        url:"https://substack.com/@yasirwaninfo",                     icon:"fa-solid fa-newspaper",      color:"#FF6719",  category:"Writing" },
    { name:"ORCID",           url:"https://orcid.org/0009-0002-8711-6868",                  icon:"fa-brands fa-orcid",         color:"#A6CE39",  category:"Professional" },
    { name:"YouTube",         url:"https://www.youtube.com/@YasirTech-t1d",                 icon:"fa-brands fa-youtube",       color:"#FF0000",  category:"Social" },
    { name:"X (Twitter)",     url:"https://x.com/YasirAwan4831",                            icon:"fa-brands fa-x-twitter",     color:"#ffffff",  category:"Social" },
    { name:"Instagram",       url:"https://instagram.com/yasirawan4831",                    icon:"fa-brands fa-instagram",     color:"#E4405F",  category:"Social" },
    { name:"ASANI",           url:"https://asani.pk/profile/muhammad-yasir--2",             icon:"fa-solid fa-briefcase",      color:"#00c896",  category:"Social" },
    { name:"Facebook",        url:"https://facebook.com/profile.php?id=61575935942197",     icon:"fa-brands fa-facebook",      color:"#1877F2",  category:"Social" },
    { name:"TikTok",          url:"https://www.tiktok.com/@yasirawan4831",                  icon:"fa-brands fa-tiktok",        color:"#ebef07",  category:"Social" },
    { name:"Discord",         url:"https://discord.com/users/1298290889373913149",          icon:"fa-brands fa-discord",       color:"#5865F2",  category:"Social" },
    { name:"Portfolio 2",     url:"https://myasirawaninfo.vercel.app/",                     icon:"fa-solid fa-globe",          color:"#00eaff",  category:"Contact" },
    { name:"Gmail",           url:"mailto:my3154831409@gmail.com",                          icon:"fa-solid fa-envelope",       color:"#EA4335",  category:"Contact" },
    { name:"Outlook",         url:"mailto:my3154831409@hotmail.com",                        icon:"fa-brands fa-microsoft",     color:"#0078D4",  category:"Contact" },
    { name:"Kworkly",         url:"https://app.kworkly.com/freelancer-profile/1784619791174x238318453904174720",               icon:"fa-brands fa-k",     color:"#0078D4",  category:"Professional" },
    { name:"Portfolio-3",     url:"https://yasirawaninfodev.vercel.app/",                   icon:"fa-solid fa-globe",          color:"#07f213",  category:"Professional" },
    { name:"AI-Internship Portfolio",     url:"https://yasirawaninfo-ai.vercel.app/",       icon:"fa-solid fa-globe",          color:"#f20707",  category:"Professional" },
    { name:"Behance",     url:"https://www.behance.net/muhammadyasir206",              icon:"fa-solid fa-palette",          color:"rgba(111, 203, 99, 0.57)",  category:"Graphic" },
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
   CSS-IN-JS  — all styles injected from JS
===================================================== */
function injectStyles() {
  /* Set body bg immediately — prevents any white flash */
  document.body.style.background = "#020408";
  document.body.style.margin     = "0";
  document.body.style.padding    = "0";
  document.body.style.overflowX  = "hidden";

  const style = document.createElement("style");
  style.id = "app-styles";
  style.textContent = `

@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&family=Rajdhani:wght@400;500;600&family=Inter:wght@300;400;500;600&display=swap');

:root {
  --cyan:#00f5ff; --cyan-dim:#00c8d7; --cyan-glow:rgba(0,245,255,0.35);
  --magenta:#ff00c8; --magenta-glow:rgba(255,0,200,0.25);
  --green:#0dff7a; --green-glow:rgba(13,255,122,0.3); --amber:#ffb700;
  --bg:#020408; --bg-card:rgba(255,255,255,0.055); --bg-card-hover:rgba(255,255,255,0.10);
  --border:rgba(0,245,255,0.18); --border-hover:rgba(0,245,255,0.55);
  --text-primary:#eef2f7; --text-secondary:#a8b8c8; --text-muted:#5a7080;
  --btn-bg:rgba(255,255,255,0.06);
  --font-display:'Orbitron',sans-serif; --font-sub:'Rajdhani',sans-serif; --font-body:'Inter',sans-serif;
  --radius:20px; --radius-sm:12px; --gap:28px;
  --ease:cubic-bezier(0.25,0.46,0.45,0.94);
  --ease-bounce:cubic-bezier(0.34,1.56,0.64,1);
  --dur:0.35s; --glass:blur(18px) saturate(180%);
}

body.light {
  --bg:#f0f4f8; --bg-card:rgba(255,255,255,0.75); --bg-card-hover:rgba(255,255,255,0.95);
  --border:rgba(0,140,180,0.22); --border-hover:rgba(0,140,180,0.6);
  --text-primary:#0d1b2a; --text-secondary:#2a4560; --text-muted:#6a8090;
  --btn-bg:rgba(0,0,0,0.07); --cyan:#007acc; --cyan-glow:rgba(0,122,204,0.25);
  --green:#00a85a; --green-glow:rgba(0,168,90,0.25);
}

*,*::before,*::after { margin:0; padding:0; box-sizing:border-box; }
html { scroll-behavior:smooth; -webkit-text-size-adjust:100%; }
body {
  background:var(--bg); font-family:var(--font-body); color:var(--text-primary);
  overflow-x:hidden; line-height:1.6;
  transition:background var(--dur) var(--ease),color var(--dur) var(--ease);
}

::-webkit-scrollbar { width:6px; }
::-webkit-scrollbar-track { background:var(--bg); }
::-webkit-scrollbar-thumb { background:var(--cyan-dim); border-radius:99px; }
::-webkit-scrollbar-thumb:hover { background:var(--cyan); }

/* ── Canvas ── */
#ai-bg {
  position:fixed; inset:0; z-index:-1; pointer-events:none; opacity:0.75;
  transition:opacity var(--dur) var(--ease);
}
body.light #ai-bg { opacity:0.35; }

/* ── App ── */
#app {
  min-height:100vh; padding:100px 6% 80px;
  display:flex; flex-direction:column; align-items:center; gap:60px;
}

/* ── Profile ── */
.profile { text-align:center; max-width:720px; width:100%; }

.profile-avatar {
  width:110px; height:110px; border-radius:50%;
  margin:0 auto 22px; overflow:hidden; position:relative;
  border:3px solid var(--cyan);
  box-shadow:0 0 0 6px rgba(0,245,255,0.08),0 0 30px var(--cyan-glow),0 0 60px rgba(0,245,255,0.15);
  display:block; animation:avatarPulse 3s ease-in-out infinite;
}
.profile-avatar img { width:100%; height:100%; object-fit:cover; display:block; }

/* scan line */
.profile-avatar::after {
  content:''; position:absolute; left:0; top:0; width:100%; height:35%;
  background:linear-gradient(transparent,rgba(0,245,255,0.12),transparent);
  animation:scanLine 2.5s linear infinite;
}

.profile h1 {
  font-family:var(--font-display);
  font-size:clamp(2rem,5vw,3.6rem);
  font-weight:900; letter-spacing:2px; line-height:1.1; margin-bottom:10px;
  color:var(--text-primary); animation:glowPulse 3.5s ease-in-out infinite;
}

.profile h3 {
  font-family:var(--font-sub); font-size:clamp(1.1rem,2.5vw,1.6rem);
  font-weight:600; letter-spacing:1.5px; color:var(--green);
  text-shadow:0 0 12px var(--green-glow); text-transform:uppercase; margin-bottom:8px;
  animation:subtitleFlicker 6s ease-in-out infinite;
}

.profile p {
  font-size:clamp(0.9rem,1.8vw,1.05rem); font-weight:300;
  color:var(--text-secondary); letter-spacing:0.3px;
}

.profile-badges {
  display:flex; gap:10px; justify-content:center; flex-wrap:wrap; margin-top:18px;
}
.badge {
  font-family:var(--font-sub); font-size:0.75rem; font-weight:600;
  letter-spacing:1.5px; text-transform:uppercase; padding:5px 14px;
  border-radius:99px; border:1px solid var(--border); background:var(--bg-card);
  color:var(--cyan); backdrop-filter:var(--glass);
  animation:badgeFloat 4s ease-in-out infinite;
}
.badge:nth-child(2) { animation-delay:0.4s; }
.badge:nth-child(3) { animation-delay:0.8s; }
.badge:nth-child(4) { animation-delay:1.2s; }

/* ── Section Label ── */
.section-label {
  font-family:var(--font-display); font-size:1rem; letter-spacing:5px;
  text-transform:uppercase; color:var(--text-muted); text-align:center;
  width:100%; max-width:1100px; position:relative;
  animation:labelGlow 4s ease-in-out infinite;
}
.section-label::before,.section-label::after {
  content:''; position:absolute; top:50%;
  width:calc(50% - 80px); height:1px;
  background:linear-gradient(90deg,transparent,var(--border));
}
.section-label::before { left:0; transform:translateY(-50%); }
.section-label::after  { right:0; transform:translateY(-50%) scaleX(-1); }

/* ── Links Grid ── */
.links-grid {
  display:grid; grid-template-columns:repeat(3,1fr);
  gap:var(--gap); width:100%; max-width:1100px;
}

/* ── Link Cards ── */
.link-card {
  display:flex; flex-direction:column; align-items:center; justify-content:center;
  gap:14px; padding:32px 20px 26px; border-radius:var(--radius);
  text-decoration:none; position:relative; overflow:hidden;
  background:var(--bg-card); backdrop-filter:var(--glass); -webkit-backdrop-filter:var(--glass);
  border:1px solid var(--border);
  box-shadow:0 4px 24px rgba(0,0,0,0.3),inset 0 1px 0 rgba(255,255,255,0.06);
  transition:background var(--dur) var(--ease),border-color var(--dur) var(--ease),
             box-shadow var(--dur) var(--ease),transform var(--dur) var(--ease-bounce);
  cursor:pointer; will-change:transform;
}

/* shimmer sweep */
.link-card::before {
  content:''; position:absolute; inset:0;
  background:linear-gradient(115deg,transparent 30%,rgba(0,245,255,0.09) 50%,transparent 70%);
  transform:translateX(-100%); transition:transform 0.7s var(--ease);
  z-index:0; border-radius:inherit; pointer-events:none;
}
.link-card:hover::before { transform:translateX(100%); }

/* bottom glow line */
.link-card::after {
  content:''; position:absolute; bottom:0; left:15%; width:70%; height:2px;
  border-radius:99px; background:linear-gradient(90deg,var(--magenta),var(--cyan),var(--green));
  opacity:0; transform:scaleX(0);
  transition:opacity 0.4s var(--ease),transform 0.4s var(--ease);
}
.link-card:hover::after { opacity:1; transform:scaleX(1); }

.link-card:hover {
  background:var(--bg-card-hover); border-color:var(--border-hover);
  box-shadow:0 0 30px var(--cyan-glow),0 0 70px rgba(0,245,255,0.12),
             0 12px 40px rgba(0,0,0,0.5),inset 0 1px 0 rgba(255,255,255,0.14);
}
.link-card:focus-visible { outline:2px solid var(--cyan); outline-offset:4px; }

/* icon */
.link-card i {
  font-size:2.6rem; line-height:1; position:relative; z-index:1; display:block;
  transition:transform var(--dur) var(--ease-bounce),filter var(--dur) var(--ease);
}
.link-card:hover i {
  transform:scale(1.2) translateY(-3px) rotate(-4deg);
  filter:drop-shadow(0 0 12px currentColor);
}

/* label */
.link-card span {
  font-family:var(--font-sub); font-size:1.4rem; font-weight:600;
  letter-spacing:0.5px; color:var(--text-primary); text-align:center;
  line-height:1.3; position:relative; z-index:1;
  transition:color var(--dur) var(--ease),letter-spacing var(--dur) var(--ease);
}
.link-card:hover span { color:#17eb08; letter-spacing:1px; }

/* category tag */
.card-tag {
  font-family:var(--font-body); font-size:0.62rem; letter-spacing:1.2px;
  text-transform:uppercase; color:var(--text-muted); position:relative; z-index:1; margin-top:-4px;
}

/* ── Floating buttons ── */
#theme-toggle,#scroll-top {
  position:fixed; width:48px; height:48px; border-radius:50%;
  background:var(--btn-bg); backdrop-filter:var(--glass); -webkit-backdrop-filter:var(--glass);
  border:1px solid var(--border); color:var(--cyan);
  display:flex; align-items:center; justify-content:center;
  cursor:pointer; z-index:999; box-shadow:0 0 14px var(--cyan-glow);
  transition:background var(--dur) var(--ease),border-color var(--dur) var(--ease),
             transform var(--dur) var(--ease-bounce),box-shadow var(--dur) var(--ease);
}
#theme-toggle { top:20px; right:20px; font-size:1.1rem; animation:btnPulse 3s ease-in-out infinite; }
#theme-toggle:hover { background:rgba(0,245,255,0.12); border-color:var(--cyan); transform:rotate(25deg) scale(1.15); box-shadow:0 0 28px var(--cyan-glow); }
#theme-toggle:focus-visible { outline:2px solid var(--cyan); outline-offset:4px; }

#scroll-top {
  bottom:28px; right:20px; font-size:1rem;
  opacity:0; pointer-events:none; transform:translateY(20px);
  transition:opacity var(--dur) var(--ease),transform var(--dur) var(--ease-bounce),
             background var(--dur) var(--ease),border-color var(--dur) var(--ease),
             box-shadow var(--dur) var(--ease);
}
#scroll-top.visible { opacity:1; pointer-events:auto; transform:translateY(0); }
#scroll-top:hover { background:rgba(0,245,255,0.12); border-color:var(--cyan); transform:translateY(-5px) scale(1.12); box-shadow:0 0 28px var(--cyan-glow); }
#scroll-top:focus-visible { outline:2px solid var(--cyan); outline-offset:4px; }

/* ── Footer ── */
.site-footer {
  font-size:0.78rem; color:var(--text-muted); text-align:center;
  padding:20px 0 10px; letter-spacing:0.7px;
}
.site-footer a { color:var(--cyan); text-decoration:none; transition:opacity var(--dur) var(--ease); }
.site-footer a:hover { opacity:0.75; }

/* ── KEYFRAMES ── */

/* avatar border pulse */
@keyframes avatarPulse {
  0%,100% { box-shadow:0 0 0 6px rgba(0,245,255,0.08),0 0 30px var(--cyan-glow),0 0 60px rgba(0,245,255,0.15); }
  50%      { box-shadow:0 0 0 10px rgba(0,245,255,0.04),0 0 50px var(--cyan-glow),0 0 90px rgba(0,245,255,0.2); }
}

/* scan line on avatar */
@keyframes scanLine {
  0%   { transform:translateY(-100%); opacity:0; }
  20%  { opacity:1; }
  80%  { opacity:1; }
  100% { transform:translateY(350%); opacity:0; }
}

/* name glow pulse */
@keyframes glowPulse {
  0%,100% { text-shadow:0 0 18px var(--cyan-glow),0 0 40px var(--magenta-glow); }
  50%      { text-shadow:0 0 35px var(--cyan-glow),0 0 80px var(--magenta-glow),0 0 110px rgba(0,245,255,0.18); }
}

/* subtitle flicker */
@keyframes subtitleFlicker {
  0%,100%   { opacity:1; }
  92%        { opacity:1; }
  93%        { opacity:0.4; }
  94%        { opacity:1; }
  96%        { opacity:0.6; }
  97%        { opacity:1; }
}

/* badge floating */
@keyframes badgeFloat {
  0%,100% { transform:translateY(0); }
  50%     { transform:translateY(-4px); }
}

/* section label glow */
@keyframes labelGlow {
  0%,100% { color:var(--text-muted); }
  50%     { color:var(--cyan); text-shadow:0 0 14px var(--cyan-glow); }
}

/* theme button pulse */
@keyframes btnPulse {
  0%,100% { box-shadow:0 0 14px var(--cyan-glow); }
  50%     { box-shadow:0 0 28px var(--cyan-glow),0 0 50px rgba(0,245,255,0.15); }
}

/* card idle float — applied by JS per card */
@keyframes cardFloat {
  0%,100% { transform:translateY(0px); }
  50%     { transform:translateY(-5px); }
}

/* skeleton shimmer */
@keyframes skeleton-shine {
  0%   { background-position:-400px 0; }
  100% { background-position: 400px 0; }
}
.skeleton {
  background:linear-gradient(90deg,var(--bg-card) 25%,rgba(255,255,255,0.08) 50%,var(--bg-card) 75%);
  background-size:800px 100%; animation:skeleton-shine 1.6s infinite linear;
  border-radius:var(--radius-sm);
}

/* ── Responsive ── */
@media (max-width:960px) {
  .links-grid { grid-template-columns:repeat(2,1fr); gap:22px; }
  #app        { padding:90px 5% 70px; gap:44px; }
}
@media (max-width:600px) {
  .links-grid { grid-template-columns:repeat(2,1fr); gap:16px; }
  .link-card  { padding:22px 14px 18px; gap:10px; }
  .link-card i { font-size:2rem; }
  .link-card span { font-size:0.9rem; }
  .profile h1 { font-size:1.9rem; letter-spacing:1px; }
  .profile h3 { font-size:1rem; }
  .profile p  { font-size:0.88rem; }
  #theme-toggle,#scroll-top { width:42px; height:42px; }
}
@media (max-width:380px) {
  .links-grid { grid-template-columns:1fr; }
  .link-card  { flex-direction:row; justify-content:flex-start; gap:18px; padding:18px 20px; }
  .link-card i { font-size:1.8rem; }
}

/* ── Print ── */
@media print {
  #ai-bg,#theme-toggle,#scroll-top { display:none !important; }
  body { background:#fff; color:#000; }
  .link-card { border:1px solid #fa0707; break-inside:avoid; }
}

/* ── Reduced Motion ── */
@media (prefers-reduced-motion:reduce) {
  *,*::before,*::after {
    animation-duration:0.01ms !important;
    animation-iteration-count:1 !important;
    transition-duration:0.01ms !important;
  }
}

.sr-only {
  position:absolute; width:1px; height:1px; padding:0;
  margin:-1px; overflow:hidden; clip:rect(0,0,0,0); white-space:nowrap; border:0;
}
`;
  document.head.appendChild(style);
}

/* =====================================================
   AI PARTICLE BACKGROUND  — enhanced with colours
===================================================== */
function initAIBackground() {
  // 
  const canvas = document.createElement("canvas");
  canvas.id = "ai-bg";
  /* Inline critical styles so canvas shows regardless of CSS load timing */
  Object.assign(canvas.style, {
    position:      "fixed",
    top:           "0",
    left:          "0",
    right:         "0",
    bottom:        "0",
    width:         "100vw",
    height:        "100vh",
    zIndex:        "-1",
    pointerEvents: "none",
    opacity:       "0.85"
  });
  document.body.insertBefore(canvas, document.body.firstChild);

  const ctx = canvas.getContext("2d");
  let W, H, particles = [], mouse = { x: -9999, y: -9999 };
  const PARTICLE_COUNT = 110;
  const LINK_DIST      = 140;
  const MOUSE_PUSH     = 110;

  /* coloured particles */
  const COLORS = ["rgba(0,245,255,", "rgba(255,0,200,", "rgba(13,255,122,"];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  window.addEventListener("mousemove", e => { mouse.x = e.clientX; mouse.y = e.clientY; });
  window.addEventListener("mouseleave", () => { mouse.x = -9999; mouse.y = -9999; });

  class Particle {
    constructor() { this.reset(true); }
    reset(random) {
      this.x  = random ? Math.random() * W : (Math.random() < 0.5 ? -5 : W + 5);
      this.y  = random ? Math.random() * H : Math.random() * H;
      this.vx = (Math.random() - 0.5) * 0.5;
      this.vy = (Math.random() - 0.5) * 0.5;
      this.r  = Math.random() * 1.4 + 0.8;
      this.opacity = Math.random() * 0.5 + 0.5;
      this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
    }
    move() {
      const dx = this.x - mouse.x, dy = this.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < MOUSE_PUSH && dist > 0) {
        const force = (MOUSE_PUSH - dist) / MOUSE_PUSH * 0.85;
        this.vx += (dx / dist) * force;
        this.vy += (dy / dist) * force;
      }
      this.vx *= 0.99; this.vy *= 0.99;
      const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
      if (speed > 1.6) { this.vx = (this.vx / speed) * 1.6; this.vy = (this.vy / speed) * 1.6; }
      this.x += this.vx; this.y += this.vy;
      if (this.x < -10) this.x = W + 10;
      if (this.x > W + 10) this.x = -10;
      if (this.y < -10) this.y = H + 10;
      if (this.y > H + 10) this.y = -10;
    }
    draw() {
      const isLight = DATA.theme === "light";
      const c = isLight ? "rgba(0,122,204," : this.color;
      ctx.fillStyle = c + (this.opacity * (isLight ? 0.6 : 1)) + ")";
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function connect() {
    const isLight = DATA.theme === "light";
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < LINK_DIST) {
          const alpha = (1 - dist / LINK_DIST) * (isLight ? 0.3 : 0.55);
          ctx.strokeStyle = isLight
            ? `rgba(0,122,204,${alpha})`
            : `rgba(0,245,255,${alpha})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }

  for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());

  (function animate() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.move(); p.draw(); });
    connect();
    requestAnimationFrame(animate);
  })();
}

/* =====================================================
   PROFILE
===================================================== */
function renderProfile() {
  const app     = $("app");
  const section = el("section", "profile");

  const avatarWrap = el("div", "profile-avatar");
  const img = document.createElement("img");
  img.src     = DATA.profile.avatar;
  img.alt     = DATA.profile.name + " profile photo";
  img.loading = "eager";
  img.onerror = () => {
    avatarWrap.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;
      justify-content:center;font-family:var(--font-display);font-size:2rem;
      font-weight:900;color:var(--cyan);background:var(--bg-card);">MY</div>`;
  };
  avatarWrap.appendChild(img);

  const h1 = el("h1", null, DATA.profile.name);
  const h3 = el("h3", null, DATA.profile.title);
  const p  = el("p",  null, DATA.profile.tagline);

  const badgesRow = el("div", "profile-badges");
  DATA.profile.badges.forEach(b => badgesRow.appendChild(el("span", "badge", b)));

  section.append(avatarWrap, h1, h3, p, badgesRow);
  app.appendChild(section);
}

/* =====================================================
   LINKS GRID
===================================================== */
function renderLinks() {
  const app = $("app");
  app.appendChild(el("p", "section-label", "&#x2014;&nbsp; All Links &nbsp;&#x2014;"));

  const grid = el("section", "links-grid");
  grid.setAttribute("aria-label", "Social and professional links");

  DATA.links.forEach((link, index) => {
    const card = document.createElement("a");
    card.className = "link-card";
    card.href      = link.url;
    card.rel       = "noopener noreferrer";
    card.target    = link.url.startsWith("mailto:") ? "_self" : "_blank";
    card.setAttribute("aria-label", link.name);

    card.innerHTML = `
      <i class="${link.icon}" style="color:${link.color}" aria-hidden="true"></i>
      <span>${link.name}</span>
      <small class="card-tag">${link.category}</small>
    `;

    /* GSAP hover */
    card.addEventListener("mouseenter", () => {
      gsap.killTweensOf(card);
      gsap.to(card, { y: -12, scale: 1.05, duration: 0.35, ease: "back.out(1.8)" });
    });
    card.addEventListener("mouseleave", () => {
      gsap.killTweensOf(card);
      /* return to idle float */
      const base = parseFloat(card.dataset.floatY || "0");
      gsap.to(card, { y: base, scale: 1, duration: 0.4, ease: "power3.out" });
    });
    card.addEventListener("mousedown", () =>
      gsap.to(card, { scale: 0.95, duration: 0.1 }));
    card.addEventListener("mouseup",   () =>
      gsap.to(card, { scale: 1.05, duration: 0.15, ease: "back.out(2)" }));

    /* touch */
    card.addEventListener("touchstart", () =>
      gsap.to(card, { scale: 0.96, duration: 0.1 }), { passive: true });
    card.addEventListener("touchend", () =>
      gsap.to(card, { scale: 1, duration: 0.3, ease: "back.out(1.5)" }), { passive: true });

    grid.appendChild(card);
  });

  app.appendChild(grid);
}

/* =====================================================
   FOOTER
===================================================== */
function renderFooter() {
  const year = new Date().getFullYear();
  $("app").appendChild(el("footer", "site-footer",
    `&copy; ${year}
     <a href="https://yasirawaninfo.vercel.app/" target="_blank" rel="noopener">Muhammad Yasir</a>
     &nbsp;&middot;&nbsp; Built with <span style="color:#00f5ff;animation:glowPulse 2s ease-in-out infinite">❤</span> &amp; JavaScript`
  ));
}

/* =====================================================
   THEME TOGGLE  — always dark on load
===================================================== */
function initTheme() {
  const btn = $("theme-toggle");
  const updateIcon = () => {
    btn.innerHTML = DATA.theme === "dark"
      ? `<i class="fa-solid fa-moon" aria-hidden="true"></i>`
      : `<i class="fa-solid fa-sun"  aria-hidden="true"></i>`;
  };
  updateIcon();

  btn.addEventListener("click", () => {
    DATA.theme = DATA.theme === "dark" ? "light" : "dark";
    document.body.classList.toggle("light");
    updateIcon();
    gsap.fromTo(btn,
      { rotate: 0,   scale: 0.5 },
      { rotate: 360, scale: 1,   duration: 0.6, ease: "back.out(2)" }
    );
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

  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 320);
  }, { passive: true });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    gsap.fromTo(btn, { scale: 0.7 }, { scale: 1, duration: 0.5, ease: "elastic.out(1.2, 0.5)" });
  });
}

/* =====================================================
   ENTRY ANIMATIONS  — cinematic reveal
===================================================== */
function animateEntry() {

  /* 1 — avatar pop-in */
  gsap.from(".profile-avatar", {
    scale: 0, opacity: 0, duration: 0.8, ease: "back.out(2)", delay: 0.1
  });

  /* 2 — name slides up with glow */
  gsap.from(".profile h1", {
    opacity: 0, y: 50, skewX: -6, duration: 1, ease: "power4.out", delay: 0.5
  });

  /* 3 — title fade */
  gsap.from(".profile h3", {
    opacity: 0, y: 20, duration: 0.7, ease: "power3.out", delay: 0.85
  });

  /* 4 — tagline */
  gsap.from(".profile p", {
    opacity: 0, y: 15, duration: 0.6, ease: "power2.out", delay: 1.0
  });

  /* 5 — badges stagger */
  gsap.from(".badge", {
    opacity: 0, scale: 0.6, y: 10, duration: 0.5,
    ease: "back.out(2)", stagger: 0.1, delay: 1.15
  });

  /* 6 — section label */
  gsap.from(".section-label", {
    opacity: 0, scaleX: 0.3, duration: 0.8, ease: "power3.out", delay: 1.4
  });

  /* 7 — cards: wave stagger with rotation */
  gsap.from(".link-card", {
    opacity:  0,
    y:        60,
    scale:    0.85,
    rotateX:  15,
    duration: 0.65,
    ease:     "back.out(1.6)",
    stagger:  { amount: 1.2, from: "start" },
    delay:    1.6
  });

  /* 8 — footer */
  gsap.from(".site-footer", { opacity: 0, y: 20, duration: 0.6, delay: 2.8 });

  /* 9 — continuous: name float */
  gsap.to(".profile h1", {
    y: -7, repeat: -1, yoyo: true, duration: 3.2,
    ease: "sine.inOut", delay: 2.0
  });

  /* 10 — continuous: avatar slow rotate shimmer */
  gsap.to(".profile-avatar", {
    rotateZ: 2, repeat: -1, yoyo: true, duration: 4,
    ease: "sine.inOut", delay: 2.5
  });

  /* 11 — cards idle float (each at different phase) */
  document.querySelectorAll(".link-card").forEach((card, i) => {
    const delay  = i * 0.18;
    const floatY = -4 - Math.random() * 3;
    card.dataset.floatY = floatY;
    gsap.to(card, {
      y: floatY, repeat: -1, yoyo: true,
      duration: 2.8 + Math.random() * 1.2,
      ease: "sine.inOut", delay: 2.2 + delay
    });
  });
}

/* =====================================================
   CURSOR GLOW  — cyan dot follows mouse
===================================================== */
function initCursorGlow() {
  const dot = document.createElement("div");
  dot.id = "cursor-glow";
  Object.assign(dot.style, {
    position: "fixed", width: "20px", height: "20px",
    borderRadius: "50%", pointerEvents: "none", zIndex: "9999",
    background: "radial-gradient(circle, rgba(0,245,255,0.5) 0%, transparent 70%)",
    transform: "translate(-50%,-50%)", transition: "opacity 0.3s",
    display: "block"
  });
  document.body.appendChild(dot);

  window.addEventListener("mousemove", e => {
    gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.15, ease: "power1.out" });
  });
  window.addEventListener("mouseleave", () => { dot.style.opacity = "0"; });
  window.addEventListener("mouseenter", () => { dot.style.opacity = "1"; });
}

/* =====================================================
   KEYBOARD  T = toggle theme
===================================================== */
document.addEventListener("keydown", e => {
  if (e.key.toLowerCase() === "t" && !e.ctrlKey && !e.metaKey && !e.altKey)
    $("theme-toggle").click();
});

/* =====================================================
   INIT
===================================================== */
document.addEventListener("DOMContentLoaded", () => {
  injectStyles();
  initAIBackground();
  renderProfile();
  renderLinks();
  renderFooter();
  initTheme();
  initScrollTop();
  initCursorGlow();
  animateEntry();
});