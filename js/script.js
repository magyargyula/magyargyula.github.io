// ===== CONSTANTS =====
const CONFIG = {
  STICKY_HEADER_OFFSET: 80,
  SECTION_OFFSET: 140,
  BOTTOM_THRESHOLD: 2,
  TYPED_SPEED: 55,
  TYPED_BACK_SPEED: 35,
  TYPED_BACK_DELAY: 1200,
  STORAGE_KEY: "mg_profile"
};

// év a footerben
document.getElementById("year").textContent = new Date().getFullYear();

// mobil menü
const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");

menuIcon?.addEventListener("click", () => {
  navbar?.classList.toggle("active");
  menuIcon?.classList.toggle("bx-x");
});

// sticky header + active link scroll alapján
const header = document.querySelector(".header");
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  header?.classList.toggle("sticky", window.scrollY > CONFIG.STICKY_HEADER_OFFSET);

  let current = "";
  sections.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - CONFIG.SECTION_OFFSET;
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) current = id;
  });

  // ha az oldal aljára értél, mindig az utolsó szekció legyen aktív (Kapcsolat)
  const nearBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - CONFIG.BOTTOM_THRESHOLD;
  if (nearBottom && sections.length > 0) current = sections[sections.length - 1].id;

  navLinks.forEach(a => {
    a.classList.remove("active");
    if (current && a.getAttribute("href") === `#${current}`) a.classList.add("active");
  });

  // menü zárása scroll közben mobilon
  navbar?.classList.remove("active");
  menuIcon?.classList.remove("bx-x");
});

// ===== PROFILE SYSTEM (Module Pattern) =====
const ProfileManager = (() => {
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
    ]
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

  function updateElement(id, property, value) {
    const element = document.getElementById(id);
    if (element) element[property] = value;
  }

  function updateProfileButtons(profileKey) {
    document.querySelectorAll(".profile-tab").forEach(btn => {
      const isActive = btn.dataset.profile === profileKey;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-selected", isActive ? "true" : "false");
      btn.setAttribute("tabindex", isActive ? "0" : "-1");
    });
  }

  function startTyped(profileKey = "operations") {
    const strings = typedMap[profileKey] || typedMap.operations;

    if (typedInstance) {
      typedInstance.destroy();
      typedInstance = null;
    }

    typedInstance = new Typed(".typed", {
      strings,
      typeSpeed: CONFIG.TYPED_SPEED,
      backSpeed: CONFIG.TYPED_BACK_SPEED,
      backDelay: CONFIG.TYPED_BACK_DELAY,
      loop: true,
      showCursor: false
    });
  }

  function setProfile(profileKey) {
    const cfg = profileConfig[profileKey] || profileConfig.operations;

    // Update text elements
    updateElement("targetType", "textContent", cfg.targetType);
    updateElement("activeProfileLabel", "textContent", cfg.btnLabel);

    // Update CV and ML links
    updateElement("cvLink", "href", cfg.cv);
    updateElement("mlLink", "href", cfg.ml);
    updateElement("cvLink2", "href", cfg.cv);
    updateElement("mlLink2", "href", cfg.ml);

    // Update all label clones
    document.querySelectorAll(".activeProfileLabelClone").forEach(el => {
      el.textContent = cfg.btnLabel;
    });

    // Update profile button states
    updateProfileButtons(profileKey);

    // Start typed animation
    startTyped(profileKey);

    // Save to localStorage
    localStorage.setItem(CONFIG.STORAGE_KEY, profileKey);
  }

  function init() {
    const saved = localStorage.getItem(CONFIG.STORAGE_KEY) || "operations";
    setProfile(saved);
  }

  return {
    setProfile,
    init
  };
})();

// ===== INITIALIZATION =====
document.addEventListener("DOMContentLoaded", () => {
  // Profile tabs
  document.querySelectorAll(".profile-tab").forEach(btn => {
    btn.addEventListener("click", () => ProfileManager.setProfile(btn.dataset.profile));
  });

  // Initialize profile system
  ProfileManager.init();

  // Hero photo fallback
  const heroPhoto = document.getElementById("heroPhoto");
  const fallbackAvatar = document.getElementById("fallbackAvatar");

  if (heroPhoto && fallbackAvatar) {
    heroPhoto.addEventListener("error", () => {
      heroPhoto.style.display = "none";
      fallbackAvatar.style.display = "grid";
    });
  }
});

// ===== PHONE MODAL =====
const PhoneModal = (() => {
  const modal = document.getElementById("phoneModal");
  const openBtn = document.getElementById("phoneModalOpen");
  const closeBtn = document.getElementById("phoneModalClose");

  function open() {
    if (!modal) return;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    closeBtn?.focus();
  }

  function close() {
    if (!modal) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    openBtn?.focus();
  }

  function init() {
    openBtn?.addEventListener("click", open);
    closeBtn?.addEventListener("click", close);

    // Close on backdrop or cancel button click
    modal?.addEventListener("click", (e) => {
      if (e.target?.getAttribute?.("data-close") === "true") {
        close();
      }
    });

    // Close on ESC key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal?.classList.contains("is-open")) {
        close();
      }
    });
  }

  return { init };
})();

// Initialize phone modal
PhoneModal.init();