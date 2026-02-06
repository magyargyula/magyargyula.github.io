// ===== CONSTANTS =====
const CONFIG = {
  STICKY_HEADER_OFFSET: 80,
  SECTION_OFFSET: 140,
  BOTTOM_THRESHOLD: 2,
  TYPED_SPEED: 55,
  TYPED_BACK_SPEED: 35,
  TYPED_BACK_DELAY: 1200,
  STORAGE_KEY: "mg_profile",
  LANG_KEY: "mg_language"
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

// ===== LANGUAGE SYSTEM =====
const LanguageManager = (() => {
  let currentLang = "hu";

  function getNestedValue(obj, path) {
    return path.split(".").reduce((o, k) => (o && o[k] !== undefined ? o[k] : null), obj);
  }

  function setLanguage(lang) {
    if (!TRANSLATIONS[lang]) return;
    currentLang = lang;

    const t = TRANSLATIONS[lang];

    // 1. Simple text elements
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      const value = getNestedValue(t, key);
      if (value) el.textContent = value;
    });

    // 2. HTML content elements
    document.querySelectorAll("[data-i18n-html]").forEach(el => {
      const key = el.dataset.i18nHtml;
      const value = getNestedValue(t, key);
      if (value) el.innerHTML = value;
    });

    // 3. Language button states
    document.querySelectorAll(".lang-btn").forEach(btn => {
      btn.classList.toggle("is-active", btn.dataset.lang === lang);
    });

    // 4. HTML lang attribute
    document.documentElement.lang = lang;

    // 5. Sync ProfileManager with new language
    ProfileManager.syncLanguage(lang);

    // 6. Save to localStorage
    localStorage.setItem(CONFIG.LANG_KEY, lang);
  }

  function getCurrentLang() {
    return currentLang;
  }

  function init() {
    const saved = localStorage.getItem(CONFIG.LANG_KEY) || "hu";
    setLanguage(saved);

    // Language button event listeners
    document.querySelectorAll(".lang-btn").forEach(btn => {
      btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
    });
  }

  return { setLanguage, getCurrentLang, init };
})();

// ===== PROFILE SYSTEM (Module Pattern) =====
const ProfileManager = (() => {
  let typedInstance = null;
  let currentProfile = "operations";

  function updateElement(id, property, value) {
    const element = document.getElementById(id);
    if (element) element[property] = value;
  }

  function updateProfileButtons(profileKey) {
    const lang = LanguageManager.getCurrentLang();
    const t = TRANSLATIONS[lang];

    document.querySelectorAll(".profile-tab").forEach(btn => {
      const isActive = btn.dataset.profile === profileKey;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-selected", isActive ? "true" : "false");
      btn.setAttribute("tabindex", isActive ? "0" : "-1");

      // Update button labels from translations
      const profileT = t.profiles[btn.dataset.profile];
      if (profileT) btn.textContent = profileT.btnLabel;
    });
  }

  function startTyped(profileKey = "operations") {
    const lang = LanguageManager.getCurrentLang();
    const t = TRANSLATIONS[lang];
    const profileT = t.profiles[profileKey] || t.profiles.operations;
    const strings = profileT.typed;

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
    currentProfile = profileKey;
    const lang = LanguageManager.getCurrentLang();
    const t = TRANSLATIONS[lang];
    const profileT = t.profiles[profileKey] || t.profiles.operations;
    const pdfT = t.pdf[profileKey] || t.pdf.operations;

    // Update text elements
    updateElement("targetType", "textContent", profileT.targetType);
    updateElement("activeProfileLabel", "textContent", profileT.btnLabel);

    // Update CV and ML links
    updateElement("cvLink", "href", pdfT.cv);
    updateElement("mlLink", "href", pdfT.ml);
    updateElement("cvLink2", "href", pdfT.cv);
    updateElement("mlLink2", "href", pdfT.ml);

    // Update all label clones
    document.querySelectorAll(".activeProfileLabelClone").forEach(el => {
      el.textContent = profileT.btnLabel;
    });

    // Update profile button states
    updateProfileButtons(profileKey);

    // Start typed animation
    startTyped(profileKey);

    // Save to localStorage
    localStorage.setItem(CONFIG.STORAGE_KEY, profileKey);
  }

  function syncLanguage() {
    // Re-apply current profile with new language texts
    setProfile(currentProfile);
  }

  function getCurrentProfile() {
    return currentProfile;
  }

  function init() {
    const saved = localStorage.getItem(CONFIG.STORAGE_KEY) || "operations";
    currentProfile = saved;
    // setProfile will be called by LanguageManager.init() → syncLanguage()
  }

  return {
    setProfile,
    syncLanguage,
    getCurrentProfile,
    init
  };
})();

// ===== INITIALIZATION =====
document.addEventListener("DOMContentLoaded", () => {
  // Profile tabs
  document.querySelectorAll(".profile-tab").forEach(btn => {
    btn.addEventListener("click", () => ProfileManager.setProfile(btn.dataset.profile));
  });

  // Initialize profile system (reads saved profile from localStorage)
  ProfileManager.init();

  // Initialize language system (this calls syncLanguage → setProfile)
  LanguageManager.init();

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
