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
    "Operációs csoportvezető",
    "Junior team lead",
    "Csoportvezető-helyettes"
  ],
  it: [
    "Junior IT support",
    "IT üzemeltetési támogató",
    "Service Desk munkatárs"
  ],
  db: [
    "Junior adatbázis-adminisztrátor",
    "SQL támogatás",
    "Adatbázis üzemeltetési támogató"
  ],
};

const profileConfig = {
  operations: {
    btnLabel: "Operáció",
    targetType: "operációs",
    cv: "doc/Magyar_Gyula_CV_Operations.pdf",
    ml: "doc/Magyar_Gyula_ML_Operations.pdf"
  },
  supervisor: {
    btnLabel: "Csoportvezető",
    targetType: "csoportvezetői",
    cv: "doc/Magyar_Gyula_CV_Supervisor.pdf",
    ml: "doc/Magyar_Gyula_ML_Supervisor.pdf"
  },
  it: {
    btnLabel: "IT támogatás",
    targetType: "IT-támogatási",
    cv: "doc/Magyar_Gyula_CV_ITSupport.pdf",
    ml: "doc/Magyar_Gyula_ML_ITSupport.pdf"
  },
  db: {
    btnLabel: "DB üzemeltetés",
    targetType: "adatbázis-üzemeltetési",
    cv: "doc/Magyar_Gyula_CV_DB.pdf",
    ml: "doc/Magyar_Gyula_ML_DB.pdf"
  }
};

function startTyped(profileKey = "operations") {
  const strings = typedMap[profileKey] || typedMap.operations;

  if (typedInstance) {
    typedInstance.destroy();
    typedInstance = null;
  }

  typedInstance = new Typed(".typed", {
    strings,
    typeSpeed: 55,
    backSpeed: 35,
    backDelay: 1200,
    loop: true,
    showCursor: false
  });
}

function setProfile(profileKey) {
  const cfg = profileConfig[profileKey] || profileConfig.operations;

  // 1) felirat: "Célzott ... pozíciók" (ha van targetType)
  const targetTypeEl = document.getElementById("targetType");
  if (targetTypeEl) targetTypeEl.textContent = cfg.targetType;

  // 2) aktív profil felirat: "Aktív profil: ..."
  const activeLabelEl = document.getElementById("activeProfileLabel");
  if (activeLabelEl) activeLabelEl.textContent = cfg.btnLabel;

  // 3) gomb kijelölés
  document.querySelectorAll(".profile-tab").forEach(btn => {
    btn.classList.toggle("is-active", btn.dataset.profile === profileKey);
  });

  // 4) CV + ML linkek (HOME)
  const cv1 = document.getElementById("cvLink");
  const ml1 = document.getElementById("mlLink");
  if (cv1) cv1.href = cfg.cv;
  if (ml1) ml1.href = cfg.ml;

  // 5) CV + ML linkek (CV szekció)
  const cv2 = document.getElementById("cvLink2");
  const ml2 = document.getElementById("mlLink2");
  if (cv2) cv2.href = cfg.cv;
  if (ml2) ml2.href = cfg.ml;

  // 6) typed
  startTyped(profileKey);

  // 7) mentés
  localStorage.setItem("mg_profile", profileKey);

  document.querySelectorAll(".activeProfileLabelClone").forEach(el => {
    el.textContent = cfg.btnLabel;
  });

  document.querySelectorAll(".profile-tab").forEach(btn => {
    const active = btn.dataset.profile === profileKey;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-selected", active ? "true" : "false");
    btn.setAttribute("tabindex", active ? "0" : "-1");
  });
}

// init + események
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".profile-tab").forEach(btn => {
    btn.addEventListener("click", () => setProfile(btn.dataset.profile));
  });

  const saved = localStorage.getItem("mg_profile") || "operations";
  setProfile(saved);
});

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
// --- End Phone request modal ---