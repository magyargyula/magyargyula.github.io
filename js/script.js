// év a footerben
document.getElementById("year").textContent = new Date().getFullYear();

// mobil menü
const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
  menuIcon.classList.toggle("bx-x");
});

// sticky header + active link scroll alapján
const header = document.querySelector(".header");
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 80);

  let current = "";
  sections.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 140;
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) current = id;
  });

  // ha az oldal aljára értél, mindig az utolsó szekció legyen aktív (Kapcsolat)
  const nearBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 2;
  if (nearBottom) current = sections[sections.length - 1].id;

  navLinks.forEach(a => {
    a.classList.remove("active");
    if (current && a.getAttribute("href") === `#${current}`) a.classList.add("active");
  });

  // menü zárása scroll közben mobilon
  navbar.classList.remove("active");
  menuIcon.classList.remove("bx-x");
});

// Typed.js: contentReference[oaicite:2]{index=2}
new Typed(".typed", {
  strings: [
  "Back Office irodai pozíciók",
  "IT Junior rendszerüzemeltető",
  "DB üzemeltető (MS SQL)",
  "IT support",
  "Laptop/mobiltelefon szervíz"
],
  typeSpeed: 55,
  backSpeed: 35,
  backDelay: 1200,
  loop: true
});

// ScrollReveal: contentReference[oaicite:3]{index=3}
ScrollReveal({
  distance: "30px",
  duration: 900,
  easing: "cubic-bezier(.2,.8,.2,1)",
  reset: false
});

ScrollReveal().reveal(".home-content, .section-title", { origin: "top", interval: 120 });
ScrollReveal().reveal(".home-img, .about-box, .card, .project, .contact-box", { origin: "bottom", interval: 120 });

// --- Phone request modal ---
const phoneModal = document.getElementById("phoneModal");
const phoneModalOpen = document.getElementById("phoneModalOpen");
const phoneModalClose = document.getElementById("phoneModalClose");

function openPhoneModal() {
  phoneModal.classList.add("is-open");
  phoneModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  // fókusz a bezárás gombra (accessibility)
  phoneModalClose?.focus();
}

function closePhoneModal() {
  phoneModal.classList.remove("is-open");
  phoneModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  phoneModalOpen?.focus();
}

phoneModalOpen?.addEventListener("click", openPhoneModal);
phoneModalClose?.addEventListener("click", closePhoneModal);

// katt háttérre vagy "Mégse" gombra (data-close)
phoneModal?.addEventListener("click", (e) => {
  const target = e.target;
  if (target && target.getAttribute && target.getAttribute("data-close") === "true") {
    closePhoneModal();
  }
});

// ESC bezár
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && phoneModal.classList.contains("is-open")) {
    closePhoneModal();
  }
});

