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

// Typed.js – profilfüggő szövegek
let typedInstance = null;

const typedMap = {
  operations: [
    "Irodai koordinátor",
    "Back office munkatárs",
    "Adminisztratív koordinátor",
    "Operációs munkatárs"
  ],
  supervisor: [
    "Csapatkoordinátor",
    "Operációs supervisor",
    "Junior team lead",
    "Műszakvezető"
  ],
  it: [
    "Junior IT support",
    "IT üzemeltetési támogató",
    "Service Desk munkatárs",
    "Adatbázis üzemeltető"
  ]
};

function startTyped(profileKey = "operations") {
  const strings = typedMap[profileKey] || typedMap.operations;

  // ha már futott, állítsuk le
  if (typedInstance) {
    typedInstance.destroy();
    typedInstance = null;
  }

  typedInstance = new Typed(".typed", {
    strings,
    typeSpeed: 55,
    backSpeed: 35,
    backDelay: 1200,
    loop: true
  });
}

// első indítás a mentett profil alapján
const savedProfile = localStorage.getItem("mg_profile") || "operations";
startTyped(savedProfile);


// ScrollReveal: contentReference[oaicite:3]{index=3}
ScrollReveal({
  distance: "30px",
  duration: 900,
  easing: "cubic-bezier(.2,.8,.2,1)",
  reset: false
});

ScrollReveal().reveal(".home-content, .section-title", { origin: "top", interval: 120 });
ScrollReveal().reveal(".home-img, .about-box, .card, .project, .contact-box", { origin: "bottom", interval: 120 });

// Profilfüggő typed szöveg és címke

const profileLabels = {
  operations: "operációs",
  supervisor: "csoportvezetői",
  it: "IT"
};

function startTyped(profileKey){
  // typed újraindítás
  if (typedInstance) typedInstance.destroy();

  typedInstance = new Typed(".typed", {
    strings: typedMap[profileKey],
    typeSpeed: 55,
    backSpeed: 35,
    backDelay: 1200,
    loop: true
  });
}

function setProfile(profileKey){
  // 1) cím frissítés
  const label = profileLabels[profileKey] || "";
  document.getElementById("targetType").textContent = label;

  // 2) gomb kijelölés
  document.querySelectorAll(".profile-tab").forEach(btn => {
    btn.classList.toggle("is-active", btn.dataset.profile === profileKey);
  });

  // 3) typed frissítés
  startTyped(profileKey);
}

// események
document.querySelectorAll(".profile-tab").forEach(btn => {
  btn.addEventListener("click", () => setProfile(btn.dataset.profile));
});

// alapértelmezett profil (pl. operations)
setProfile("operations");


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

(function () {
  const map = {
    operations: {
      cv: "doc/Magyar_Gyula_CV_Operations.pdf",
      ml: "doc/Magyar_Gyula_ML_Operations.pdf",
      roles: ["Operations / Office Coordinator", "Back Office Operations", "Administrative Support"]
    },
    supervisor: {
      cv: "doc/Magyar_Gyula_CV_Supervisor.pdf",
      ml: "doc/Magyar_Gyula_ML_Supervisor.pdf",
      roles: ["Team Coordinator", "Operations Supervisor", "Aspiring Team Lead"]
    },
    it: {
      cv: "doc/Magyar_Gyula_CV_ITSupport.pdf",
      ml: "doc/Magyar_Gyula_ML_ITSupport.pdf",
      roles: ["IT Operations Support", "Junior IT Support", "System Support (Junior)"]
    }
  };

  //  CV and ML profilváltás //
  const buttons = document.querySelectorAll(".profile-tabs [data-profile]");
  const cv1 = document.getElementById("cvLink");
  const ml1 = document.getElementById("mlLink");
  const cv2 = document.getElementById("cvLink2");
  const ml2 = document.getElementById("mlLink2");

  function setProfile(key) {
    const p = map[key] || map.operations;

    if (cv1) cv1.href = p.cv;
    if (ml1) ml1.href = p.ml;
    if (cv2) cv2.href = p.cv;
    if (ml2) ml2.href = p.ml;

    buttons.forEach(b => b.classList.toggle("is-active", b.dataset.profile === key));

    // opcionális: typed szöveg frissítése
    if (typeof startTyped === "function") startTyped(key);

    // Itt csak elmentjük localStorage-ba, hogy újratöltésnél is megmaradjon
    localStorage.setItem("mg_profile", key);
  }

  // init
  const saved = localStorage.getItem("mg_profile") || "operations";
  setProfile(saved);

  buttons.forEach(b => b.addEventListener("click", () => setProfile(b.dataset.profile)));
})();

