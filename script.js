/* CONTACT FORM */
function handleSubmit(event) {
  event.preventDefault();
  document.getElementById("response").innerText =
    "Thank you! Our team will contact you shortly.";
  return false;
}

/* HERO TEXT ROTATION */
const heroTexts = [
  "AI-Enhanced Clinical Trial Site Management",
  "Intelligent Patient Recruitment Networks",
  "Accelerating Enrollment with AI",
  "Reliable & Compliant Clinical Operations"
];

let textIndex = 0;
setInterval(() => {
  document.getElementById("hero-text").innerText =
    heroTexts[textIndex % heroTexts.length];
  textIndex++;
}, 4000);

/* PATIENT RECRUITMENT NETWORK ANIMATION */
const canvas = document.getElementById("network");
const ctx = canvas.getContext("2d");

let width, height;
let nodes = [];

function resizeCanvas() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

/* Create nodes (patients/sites) */
for (let i = 0; i < 80; i++) {
  nodes.push({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.5,
    vy: (Math.random() - 0.5) * 0.5
  });
}

function animateNetwork() {
  ctx.clearRect(0, 0, width, height);

  // Draw nodes
  nodes.forEach(n => {
    ctx.beginPath();
    ctx.arc(n.x, n.y, 2.4, 0, Math.PI * 2);
    ctx.fillStyle = "#7fd1ff";
    ctx.fill();
  });

  // Draw connections
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 130) {
        ctx.strokeStyle = `rgba(127, 209, 255, ${1 - distance / 130})`;
        ctx.lineWidth = 0.6;
        ctx.beginPath();
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(nodes[j].x, nodes[j].y);
        ctx.stroke();
      }
    }
  }

  // Move nodes
  nodes.forEach(n => {
    n.x += n.vx;
    n.y += n.vy;

    if (n.x < 0 || n.x > width) n.vx *= -1;
    if (n.y < 0 || n.y > height) n.vy *= -1;
  });

  requestAnimationFrame(animateNetwork);
}

animateNetwork();


/* ABOUT TABS INTERACTION */
document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});

/* LOAD COMMON HEADER */
fetch("header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("site-header").innerHTML = data;

    // Mobile toggle
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle) {
      menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
      });
    }

document.addEventListener("DOMContentLoaded", () => {
  fetch("/Evident-AI/header.html")
    .then(response => {
      if (!response.ok) {
        throw new Error("Header not found");
      }
      return response.text();
    })
    .then(data => {
      document.getElementById("site-header").innerHTML = data;

      // Mobile menu toggle
      const menuToggle = document.getElementById("menuToggle");
      const navLinks = document.getElementById("navLinks");

      if (menuToggle) {
        menuToggle.addEventListener("click", () => {
          navLinks.classList.toggle("show");
        });
      }

      // Active link highlight
      document.querySelectorAll(".nav-links a").forEach(link => {
        if (link.href === window.location.href) {
          link.classList.add("active");
        }
      });
    })
    .catch(error => {
      console.error("Header load error:", error);
    });
});


    
    // Active page highlight
    document.querySelectorAll(".nav-links a").forEach(link => {
      if (link.href === window.location.href) {
        link.classList.add("active");
      }
    });
  });
