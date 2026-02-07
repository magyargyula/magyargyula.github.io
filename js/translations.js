// ===== TRANSLATIONS =====
// Multilingual support: HU (magyar), EN (English), DE (Deutsch)

const TRANSLATIONS = {

  // ==================== MAGYAR ====================
  hu: {
    nav: {
      home: "Kezdőlap",
      about: "Rólam",
      skills: "Készségek",
      experience: "Tapasztalat",
      education: "Képzések",
      cv: "CV",
      projects: "Projektek",
      contact: "Kapcsolat"
    },

    home: {
      greeting: "Szia!",
      nameSubtitle: "vagyok",
      targetTitlePrefix: "Célzott",
      targetTitleSuffix: "pozíciók:",
      lead: "Precíz, megbízható, erősen rendszerszemléletű munkavégzés. Magas igényszint a minőségre, következetesség és felelősségvállalás. Koordináció és adminisztratív operáció többéves tapasztalattal, IT-közeli érdeklődéssel (képzések + projektek). Ügyfél- és belső kommunikáció, utánkövetés, dokumentálás.",
      activeProfile: "A kiválasztott <strong id=\"activeProfileLabel\"></strong> nézethez tartozó dokumentumok érhetők el.",
      cvBtn: "Önéletrajz (PDF)",
      mlBtn: "Motivációs levél (PDF)",
      phoneBtn: "Telefonszám kérése"
    },

    profiles: {
      operations: {
        btnLabel: "Operáció",
        targetType: "operációs",
        typed: ["Irodai koordinátor", "Back office munkatárs", "Adminisztratív koordinátor", "Operációs munkatárs"]
      },
      supervisor: {
        btnLabel: "Csoportvezető",
        targetType: "csoportvezetői",
        typed: ["Csapatkoordinátor", "Operációs csoportvezető", "Junior team lead", "Csoportvezető-helyettes"]
      },
      it: {
        btnLabel: "IT támogatás",
        targetType: "IT-támogatási",
        typed: ["Junior IT support", "IT üzemeltetési támogató", "Service Desk munkatárs"]
      },
      db: {
        btnLabel: "DB üzemeltetés",
        targetType: "adatbázis-üzemeltetési",
        typed: ["Junior adatbázis-adminisztrátor", "SQL támogatás", "Adatbázis üzemeltetési támogató"]
      }
    },

    pdf: {
      operations: { cv: "doc/Gyula_Magyar_CV_Operations_HU.pdf", ml: "doc/Gyula_Magyar_ML_Operations_HU.pdf" },
      supervisor: { cv: "doc/Gyula_Magyar_CV_Supervisor_HU.pdf", ml: "doc/Gyula_Magyar_ML_Supervisor_HU.pdf" },
      it: { cv: "doc/Gyula_Magyar_CV_IT_Support_HU.pdf", ml: "doc/Gyula_Magyar_ML_IT_Support_HU.pdf" },
      db: { cv: "doc/Gyula_Magyar_CV_Junior_DB_HU.pdf", ml: "doc/Gyula_Magyar_ML_Junior_DB_HU.pdf" }
    },

    about: {
      title: "Rólam",
      p1: "Precíz, megbízható és rendszerszemléletű Operations / Office Coordinator vagyok, többéves tapasztalattal adminisztratív és operatív területen. Erősségem a back office folyamatok támogatása, a pontos dokumentáció, valamint több párhuzamos feladat strukturált kezelése.",
      p2: "Munkám során ügyfél- és belső megkeresések kezelésével, feladatpriorizálással, utánkövetéssel és folyamatkövetéssel foglalkoztam. Fontos számomra az átlátható működés: érthető kommunikáció, határidők betartása, és a minőségi adminisztráció.",
      p3: "IT-közeli érdeklődésemet célzott képzésekkel és dokumentált projektekkel fejlesztem (üzemeltetési alapok, AD, virtualizáció, MS SQL). Középtávon csapatkoordinációs (supervisor / team lead) irányba szeretnék fejlődni, ahol a napi működés összehangolásával és a minőségi munkavégzés támogatásával járulhatok hozzá a csapat eredményességéhez. Angol nyelvtudásom A2–B1 szintű, folyamatosan fejlesztem.",
      p4: "Szabadidőmben hobbiszinten foglalkozom eszközök alap hibakeresésével és kisebb javításaival (laptop/telefon).",
      bullets: "<li><strong>Rendszerszemlélet:</strong> analitikus gondolkodás, ok-okozati hibakeresés</li><li><strong>Minőség:</strong> szabálykövetés, igényes dokumentáció, következetes működés</li><li><strong>Megbízhatóság:</strong> felelősségvállalás, határidők és prioritások kezelése</li><li><strong>Ügyfélkezelés és kommunikáció:</strong> igényfelmérés, érthető tájékoztatás, megoldásorientált konfliktuskezelés, utánkövetés</li>"
    },

    skills: {
      title: "Készségek",
      card1Title: "IT Support szemlélet",
      card1Desc: "Hibajegy-logika, pontos kérdezés, hiba behatárolása, priorizálás, visszajelzés. Hardver/asztali támogatás irány is.",
      card2Title: "Üzemeltetés – alapok (képzés)",
      card2Desc: "Windows/Linux alapismeretek, AD alapok, jogosultságkezelés szemlélet, Hyper-V alapok.",
      card3Title: "MS SQL – alapok (képzés)",
      card3Desc: "Telepítés/karbantartás alapok, mentés-visszaállítás szemlélet, alap lekérdezések (SELECT/JOIN), index/triggerek, jobok alapjai.",
      card4Title: "Koordináció & dokumentálás",
      card4Desc: "Folyamatok rendbetétele, oktatóanyag készítése, betanítás támogatása, ütemezés és kommunikáció."
    },

    experience: {
      title: "Szakmai tapasztalat",
      job1Title: "Hívás koordinátor (szenior) – Prohuman Zrt.",
      job1Desc: "Napi működés koordinálása, ügyfélkommunikáció, adminisztratív támogatás, problémák feltárása és megoldási javaslatok.",
      job1Result: "Eredmények: 95%+ teljesítményértékelés, oktatóanyag készítés (2023)",
      job2Title: "Területi képviselő – Univer Product Zrt.",
      job2Desc: "Készletoptimalizálás támogatása, riportálás, promóciók szervezése, partnerkapcsolatok kezelése multinacionális környezetben.",
      job2Result: "Eredmény: kiemelt partneri visszajelzések, értékesítési növekedés",
      job3Title: "Logisztikai munkatárs – QL Elektrocentrum Kft.",
      job3Desc: "Árubeszerzés és adminisztráció, beszerzési terv készítése és kivitelezése.",
      job3Result: "Eredmény: strukturált átalakítással jelentős hatékonyságjavulás",
      note: "(A weboldalon az IT irányt a képzések + projektek mutatják, a szakmai rutinom erősen épít a koordinációra, kereskedelmi tapasztalatomra, dokumentálásra és megbízhatóságra.)"
    },

    education: {
      title: "Képzések",
      items: "<li><strong>PROGmasters – Adatbázis üzemeltető specialista (MS SQL)</strong> (2022.04 – 2022.07)</li><li><strong>PROGmasters – Junior rendszerüzemeltető</strong> (2021.10 – 2022.04)</li><li><strong>RTV műszerész</strong> (101. sz. Ipari Szakmunkásképző) (1987 – 1989)</li><li><strong>Érettségi – mechanikai műszerész</strong> (2. sz. Ipari Szakközépiskola) (1983 – 1987)</li>",
      language: "Nyelv: magyar (anyanyelv), angol (A2 – B1 folyamatos fejlesztés)"
    },

    cvSection: {
      title: "Önéletrajz & Motivációs levél",
      cvTitle: "Önéletrajz",
      cvDesc: "A kiválasztott <strong><span class=\"activeProfileLabelClone\"></span></strong> profilhoz tartozó önéletrajz tölthető le.",
      cvBtn: "Önéletrajz (PDF)",
      mlTitle: "Motivációs levél",
      mlDesc: "A kiválasztott <strong><span class=\"activeProfileLabelClone\"></span></strong> profilhoz tartozó motivációs levél tölthető le.",
      mlBtn: "Motivációs levél (PDF)"
    },

    projects: {
      title: "Projektek (portfólió)",
      callcenterTitle: "Callcenter Asszisztens – Interaktív demó",
      callcenterDesc: "Korábbi call centeres tapasztalataim és az ott készített oktatóanyag alapján készült interaktív demó alkalmazás. Munkaerő-kölcsönző ügyeleti operátorainak nyújt döntéstámogatást: ügyfél-azonosítás, kérdésfa alapú problémamegoldás, tudásbázis, automatikus jegyzetelés és továbbítás.",
      callcenterTryBtn: "Kipróbálom",
      callcenterCta: "Hatékonyabb híváskezelés · Kevesebb stressz · Gyorsabb megoldások",
      homelabTitle: "Windows Homelab – Active Directory Domain Controller",
      homelabDesc: "Windows Server 2022 alapú labor környezet Active Directory Domain Services-szel. Felhasználók és csoportok kezelése, OU struktúra, DNS szolgáltatás konfigurálása.",
      hypervTitle: "Hyper-V Homelab – Windows Server Virtualizáció",
      hypervDesc: "Windows Server 2022 Datacenter telepítése Hyper-V környezetben. VM lifecycle management, checkpoint kezelés és disaster recovery (visszaállítás) dokumentált gyakorlata.",
      sqlTitle: "SQL Server 2025 portfólió projekt: munkaerő-kölcsönző adatbázis",
      sqlDesc: "Sémák (ref/core/ops/audit), PK/FK + indexek, view-k, tárolt eljárások, triggerek (audit + overlap védelem), timesheet és számlázás, demo adatok.",
      psTitle: "PowerShell IT Toolbox",
      psDesc: "Hasznos PowerShell scriptek IT support feladatokhoz: rendszer állapot riport (CPU, RAM, disk) és kritikus szolgáltatások ellenőrzése színkódolt kimenettel.",
      btnRepo: "Repo",
      btnDocs: "Dokumentáció",
      btnTroubleshooting: "Troubleshooting",
      btnInstallScript: "Telepítő script",
      btnDemoQueries: "Demo lekérdezések",
      btnImages: "Képek",
      ctaRepoDocScreenshots: "Megnyitás: repo + dokumentáció + screenshotok",
      ctaRepoScriptScreenshots: "Megnyitás: repo + script + képernyőképek",
      ctaRepoScriptsDocs: "Megnyitás: repo + scriptek + dokumentáció"
    },

    contact: {
      title: "Kapcsolat"
    },

    footer: {
      copyright: "Magyar Gyula • Portfólió",
      ai: "Az oldal és egyes projektek AI-asszisztált fejlesztéssel készültek (Claude, Anthropic | ChatGPT, Codex)."
    },

    modal: {
      title: "Telefonszám kérése",
      text: "A telefonszámomat nem jelenítem meg nyilvánosan. Kattints az alábbi gombra, és egy előre kitöltött e-mail megnyílik, amire válaszban elküldöm az elérhetőséget.",
      emailBtn: "E-mail megnyitása",
      cancelBtn: "Mégse",
      hint: "Tipp: ha nincs beállítva levelezőprogram a gépeden, másold ki ezt:"
    }
  },

  // ==================== ENGLISH ====================
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      experience: "Experience",
      education: "Education",
      cv: "CV",
      projects: "Projects",
      contact: "Contact"
    },

    home: {
      greeting: "Hi!",
      nameSubtitle: "here",
      targetTitlePrefix: "Target",
      targetTitleSuffix: "positions:",
      lead: "Precise, reliable, strongly system-oriented work approach. High standards for quality, consistency and responsibility. Coordination and administrative operations with years of experience, IT-related interest (courses + projects). Customer and internal communication, follow-up, documentation.",
      activeProfile: "Documents available for the selected <strong id=\"activeProfileLabel\"></strong> profile.",
      cvBtn: "CV (PDF)",
      mlBtn: "Cover Letter (PDF)",
      phoneBtn: "Request Phone Number"
    },

    profiles: {
      operations: {
        btnLabel: "Operations",
        targetType: "operations",
        typed: ["Office Coordinator", "Back Office Associate", "Administrative Coordinator", "Operations Associate"]
      },
      supervisor: {
        btnLabel: "Supervisor",
        targetType: "supervisor",
        typed: ["Team Coordinator", "Operations Team Lead", "Junior Team Lead", "Deputy Team Lead"]
      },
      it: {
        btnLabel: "IT Support",
        targetType: "IT support",
        typed: ["Junior IT Support", "IT Operations Support", "Service Desk Associate"]
      },
      db: {
        btnLabel: "DB Operations",
        targetType: "database operations",
        typed: ["Junior Database Administrator", "SQL Support", "Database Operations Support"]
      }
    },

    pdf: {
      operations: { cv: "doc/Gyula_Magyar_CV_Operations_EN.pdf", ml: "doc/Gyula_Magyar_ML_Operations_EN.pdf" },
      supervisor: { cv: "doc/Gyula_Magyar_CV_Supervisor_EN.pdf", ml: "doc/Gyula_Magyar_ML_Supervisor_EN.pdf" },
      it: { cv: "doc/Gyula_Magyar_CV_IT_Support_EN.pdf", ml: "doc/Gyula_Magyar_ML_IT_Support_EN.pdf" },
      db: { cv: "doc/Gyula_Magyar_CV_Junior_DB_EN.pdf", ml: "doc/Gyula_Magyar_ML_Junior_DB_EN.pdf" }
    },

    about: {
      title: "About Me",
      p1: "I am a precise, reliable and system-oriented Operations / Office Coordinator with years of experience in administrative and operational roles. My strengths include supporting back office processes, accurate documentation, and structured management of multiple parallel tasks.",
      p2: "In my work, I have handled customer and internal inquiries, task prioritization, follow-up and process tracking. Transparent operations are important to me: clear communication, meeting deadlines, and quality administration.",
      p3: "I develop my IT-related interests through targeted courses and documented projects (system administration basics, AD, virtualization, MS SQL). In the medium term, I would like to grow into a team coordination (supervisor / team lead) direction, where I can contribute to team effectiveness by coordinating daily operations and supporting quality work. My English level is A2–B1, continuously improving.",
      p4: "In my free time, I do basic troubleshooting and minor repairs on devices (laptop/phone) as a hobby.",
      bullets: "<li><strong>Systems thinking:</strong> analytical approach, root cause troubleshooting</li><li><strong>Quality:</strong> compliance, thorough documentation, consistent operations</li><li><strong>Reliability:</strong> accountability, deadline and priority management</li><li><strong>Customer service & communication:</strong> needs assessment, clear information, solution-oriented conflict resolution, follow-up</li>"
    },

    skills: {
      title: "Skills",
      card1Title: "IT Support Mindset",
      card1Desc: "Ticket logic, precise questioning, issue isolation, prioritization, feedback. Hardware/desktop support direction as well.",
      card2Title: "Operations – Basics (Training)",
      card2Desc: "Windows/Linux basics, AD fundamentals, permission management approach, Hyper-V basics.",
      card3Title: "MS SQL – Basics (Training)",
      card3Desc: "Installation/maintenance basics, backup-restore approach, basic queries (SELECT/JOIN), indexes/triggers, job fundamentals.",
      card4Title: "Coordination & Documentation",
      card4Desc: "Process organization, training material creation, onboarding support, scheduling and communication."
    },

    experience: {
      title: "Professional Experience",
      job1Title: "Call Coordinator (Senior) – Prohuman Zrt.",
      job1Desc: "Daily operations coordination, customer communication, administrative support, issue identification and solution proposals.",
      job1Result: "Results: 95%+ performance rating, training material creation (2023)",
      job2Title: "Territory Representative – Univer Product Zrt.",
      job2Desc: "Inventory optimization support, reporting, promotion organization, partner relationship management in a multinational environment.",
      job2Result: "Result: outstanding partner feedback, sales growth",
      job3Title: "Logistics Associate – QL Elektrocentrum Kft.",
      job3Desc: "Procurement and administration, purchase plan creation and execution.",
      job3Result: "Result: significant efficiency improvement through structured reorganization",
      note: "(On this website, the IT direction is demonstrated by courses + projects. My professional experience strongly builds on coordination, commercial background, documentation and reliability.)"
    },

    education: {
      title: "Education & Training",
      items: "<li><strong>PROGmasters – Database Operations Specialist (MS SQL)</strong> (2022.04 – 2022.07)</li><li><strong>PROGmasters – Junior System Administrator</strong> (2021.10 – 2022.04)</li><li><strong>RTV Technician</strong> (Vocational School No. 101) (1987 – 1989)</li><li><strong>Secondary School – Mechanical Instrument Maker</strong> (Technical School No. 2) (1983 – 1987)</li>",
      language: "Languages: Hungarian (native), English (A2 – B1, continuously improving)"
    },

    cvSection: {
      title: "CV & Cover Letter",
      cvTitle: "CV",
      cvDesc: "Download the CV for the selected <strong><span class=\"activeProfileLabelClone\"></span></strong> profile.",
      cvBtn: "CV (PDF)",
      mlTitle: "Cover Letter",
      mlDesc: "Download the cover letter for the selected <strong><span class=\"activeProfileLabelClone\"></span></strong> profile.",
      mlBtn: "Cover Letter (PDF)"
    },

    projects: {
      title: "Projects (Portfolio)",
      callcenterTitle: "Call Center Assistant – Interactive Demo",
      callcenterDesc: "An interactive demo application based on my previous call center experience and training materials. Provides decision support for staffing agency duty operators: client identification, decision-tree problem solving, knowledge base, automatic note-taking and forwarding.",
      callcenterTryBtn: "Try it",
      callcenterCta: "More efficient call handling · Less stress · Faster solutions",
      homelabTitle: "Windows Homelab – Active Directory Domain Controller",
      homelabDesc: "Windows Server 2022 based lab environment with Active Directory Domain Services. User and group management, OU structure, DNS service configuration.",
      hypervTitle: "Hyper-V Homelab – Windows Server Virtualization",
      hypervDesc: "Windows Server 2022 Datacenter installation in Hyper-V environment. VM lifecycle management, checkpoint management and disaster recovery documented practice.",
      sqlTitle: "SQL Server 2025 Portfolio Project: Staffing Agency Database",
      sqlDesc: "Schemas (ref/core/ops/audit), PK/FK + indexes, views, stored procedures, triggers (audit + overlap protection), timesheet and invoicing, demo data.",
      psTitle: "PowerShell IT Toolbox",
      psDesc: "Useful PowerShell scripts for IT support tasks: system health report (CPU, RAM, disk) and critical services status check with color-coded output.",
      btnRepo: "Repo",
      btnDocs: "Documentation",
      btnTroubleshooting: "Troubleshooting",
      btnInstallScript: "Install Script",
      btnDemoQueries: "Demo Queries",
      btnImages: "Images",
      ctaRepoDocScreenshots: "Open: repo + documentation + screenshots",
      ctaRepoScriptScreenshots: "Open: repo + script + screenshots",
      ctaRepoScriptsDocs: "Open: repo + scripts + documentation"
    },

    contact: {
      title: "Contact"
    },

    footer: {
      copyright: "Magyar Gyula • Portfolio",
      ai: "This website and some projects were developed with AI assistance (Claude, Anthropic | ChatGPT, Codex)."
    },

    modal: {
      title: "Request Phone Number",
      text: "I do not display my phone number publicly. Click the button below and a pre-filled email will open. I will send my contact details in reply.",
      emailBtn: "Open Email",
      cancelBtn: "Cancel",
      hint: "Tip: if no email client is configured on your device, copy this:"
    }
  },

  // ==================== DEUTSCH ====================
  de: {
    nav: {
      home: "Startseite",
      about: "Über mich",
      skills: "Fähigkeiten",
      experience: "Erfahrung",
      education: "Ausbildung",
      cv: "Lebenslauf",
      projects: "Projekte",
      contact: "Kontakt"
    },

    home: {
      greeting: "Hallo!",
      nameSubtitle: "hier",
      targetTitlePrefix: "Angestrebte",
      targetTitleSuffix: "Positionen:",
      lead: "Präzise, zuverlässige und stark systemorientierte Arbeitsweise. Hoher Qualitätsanspruch, Konsequenz und Verantwortungsbewusstsein. Koordination und administrative Tätigkeiten mit langjähriger Erfahrung, IT-nahem Interesse (Schulungen + Projekte). Kunden- und interne Kommunikation, Nachverfolgung, Dokumentation.",
      activeProfile: "Dokumente für das ausgewählte <strong id=\"activeProfileLabel\"></strong> Profil verfügbar.",
      cvBtn: "Lebenslauf (PDF)",
      mlBtn: "Motivationsschreiben (PDF)",
      phoneBtn: "Telefonnummer anfordern"
    },

    profiles: {
      operations: {
        btnLabel: "Operations",
        targetType: "Operations",
        typed: ["Bürokoordinator", "Back-Office-Mitarbeiter", "Administrativer Koordinator", "Operations-Mitarbeiter"]
      },
      supervisor: {
        btnLabel: "Teamleiter",
        targetType: "Teamleiter",
        typed: ["Teamkoordinator", "Operations-Teamleiter", "Junior Teamleiter", "Stellvertretender Teamleiter"]
      },
      it: {
        btnLabel: "IT-Support",
        targetType: "IT-Support",
        typed: ["Junior IT-Support", "IT-Betriebsunterstützung", "Service-Desk-Mitarbeiter"]
      },
      db: {
        btnLabel: "DB-Betrieb",
        targetType: "Datenbankbetriebs",
        typed: ["Junior Datenbankadministrator", "SQL-Unterstützung", "Datenbank-Betriebsunterstützung"]
      }
    },

    pdf: {
      operations: { cv: "doc/Gyula_Magyar_CV_Operations_DE.pdf", ml: "doc/Gyula_Magyar_ML_Operations_DE.pdf" },
      supervisor: { cv: "doc/Gyula_Magyar_CV_Supervisor_DE.pdf", ml: "doc/Gyula_Magyar_ML_Supervisor_DE.pdf" },
      it: { cv: "doc/Gyula_Magyar_CV_IT_Support_DE.pdf", ml: "doc/Gyula_Magyar_ML_IT_Support_DE.pdf" },
      db: { cv: "doc/Gyula_Magyar_CV_Junior_DB_DE.pdf", ml: "doc/Gyula_Magyar_ML_Junior_DB_DE.pdf" }
    },

    about: {
      title: "Über mich",
      p1: "Ich bin ein präziser, zuverlässiger und systemorientierter Operations / Office Coordinator mit langjähriger Erfahrung im administrativen und operativen Bereich. Meine Stärken sind die Unterstützung von Back-Office-Prozessen, genaue Dokumentation sowie die strukturierte Bearbeitung mehrerer paralleler Aufgaben.",
      p2: "In meiner Arbeit habe ich mich mit Kunden- und internen Anfragen, Aufgabenpriorisierung, Nachverfolgung und Prozessüberwachung beschäftigt. Transparente Abläufe sind mir wichtig: verständliche Kommunikation, Einhaltung von Fristen und qualitative Administration.",
      p3: "Mein IT-nahes Interesse entwickle ich durch gezielte Schulungen und dokumentierte Projekte (Systemadministration-Grundlagen, AD, Virtualisierung, MS SQL). Mittelfristig möchte ich mich in Richtung Teamkoordination (Supervisor / Teamleiter) entwickeln, wo ich durch die Abstimmung des Tagesgeschäfts und die Unterstützung qualitativ hochwertiger Arbeit zur Teameffektivität beitragen kann. Meine Englischkenntnisse sind auf A2–B1-Niveau, ich verbessere sie kontinuierlich.",
      p4: "In meiner Freizeit beschäftige ich mich hobbymäßig mit grundlegender Fehlersuche und kleineren Reparaturen an Geräten (Laptop/Telefon).",
      bullets: "<li><strong>Systemdenken:</strong> analytisches Denken, Ursache-Wirkungs-Fehlersuche</li><li><strong>Qualität:</strong> Regelkonformität, sorgfältige Dokumentation, konsistenter Betrieb</li><li><strong>Zuverlässigkeit:</strong> Verantwortungsbewusstsein, Termin- und Prioritätenmanagement</li><li><strong>Kundenbetreuung & Kommunikation:</strong> Bedarfsermittlung, verständliche Information, lösungsorientierte Konfliktbewältigung, Nachverfolgung</li>"
    },

    skills: {
      title: "Fähigkeiten",
      card1Title: "IT-Support-Mentalität",
      card1Desc: "Ticket-Logik, präzise Fragestellung, Fehlerisolierung, Priorisierung, Feedback. Auch Hardware-/Desktop-Support-Richtung.",
      card2Title: "Betrieb – Grundlagen (Schulung)",
      card2Desc: "Windows/Linux-Grundkenntnisse, AD-Grundlagen, Berechtigungsmanagement-Ansatz, Hyper-V-Grundlagen.",
      card3Title: "MS SQL – Grundlagen (Schulung)",
      card3Desc: "Installations-/Wartungsgrundlagen, Backup-Restore-Ansatz, Grundabfragen (SELECT/JOIN), Indizes/Trigger, Job-Grundlagen.",
      card4Title: "Koordination & Dokumentation",
      card4Desc: "Prozessorganisation, Erstellung von Schulungsmaterialien, Einarbeitungsunterstützung, Terminplanung und Kommunikation."
    },

    experience: {
      title: "Berufserfahrung",
      job1Title: "Anrufkoordinator (Senior) – Prohuman Zrt.",
      job1Desc: "Koordination des Tagesgeschäfts, Kundenkommunikation, administrative Unterstützung, Problemerkennung und Lösungsvorschläge.",
      job1Result: "Ergebnisse: 95%+ Leistungsbewertung, Erstellung von Schulungsmaterial (2023)",
      job2Title: "Gebietsvertreter – Univer Product Zrt.",
      job2Desc: "Unterstützung der Bestandsoptimierung, Berichterstattung, Organisation von Aktionen, Partnerpflege in einem multinationalen Umfeld.",
      job2Result: "Ergebnis: herausragendes Partnerfeedback, Umsatzwachstum",
      job3Title: "Logistikmitarbeiter – QL Elektrocentrum Kft.",
      job3Desc: "Beschaffung und Administration, Erstellung und Umsetzung von Einkaufsplänen.",
      job3Result: "Ergebnis: deutliche Effizienzsteigerung durch strukturierte Umgestaltung",
      note: "(Auf dieser Website wird die IT-Richtung durch Schulungen + Projekte demonstriert. Meine Berufserfahrung baut stark auf Koordination, kaufmännischem Hintergrund, Dokumentation und Zuverlässigkeit auf.)"
    },

    education: {
      title: "Ausbildung & Schulungen",
      items: "<li><strong>PROGmasters – Datenbankbetriebs-Spezialist (MS SQL)</strong> (2022.04 – 2022.07)</li><li><strong>PROGmasters – Junior Systemadministrator</strong> (2021.10 – 2022.04)</li><li><strong>RTV-Techniker</strong> (Berufsschule Nr. 101) (1987 – 1989)</li><li><strong>Abitur – Mechanischer Instrumentenbauer</strong> (Fachschule Nr. 2) (1983 – 1987)</li>",
      language: "Sprachen: Ungarisch (Muttersprache), Englisch (A2 – B1, kontinuierliche Verbesserung)"
    },

    cvSection: {
      title: "Lebenslauf & Motivationsschreiben",
      cvTitle: "Lebenslauf",
      cvDesc: "Lebenslauf für das ausgewählte <strong><span class=\"activeProfileLabelClone\"></span></strong> Profil herunterladen.",
      cvBtn: "Lebenslauf (PDF)",
      mlTitle: "Motivationsschreiben",
      mlDesc: "Motivationsschreiben für das ausgewählte <strong><span class=\"activeProfileLabelClone\"></span></strong> Profil herunterladen.",
      mlBtn: "Motivationsschreiben (PDF)"
    },

    projects: {
      title: "Projekte (Portfolio)",
      callcenterTitle: "Callcenter-Assistent – Interaktive Demo",
      callcenterDesc: "Eine interaktive Demo-Anwendung basierend auf meiner früheren Callcenter-Erfahrung und Schulungsmaterialien. Bietet Entscheidungsunterstützung für Bereitschaftsoperatoren einer Personalvermittlung: Kundenidentifikation, Entscheidungsbaum-Problemlösung, Wissensdatenbank, automatische Protokollierung und Weiterleitung.",
      callcenterTryBtn: "Ausprobieren",
      callcenterCta: "Effizientere Anrufbearbeitung · Weniger Stress · Schnellere Lösungen",
      homelabTitle: "Windows Homelab – Active Directory Domain Controller",
      homelabDesc: "Windows Server 2022 basierte Laborumgebung mit Active Directory Domain Services. Benutzer- und Gruppenverwaltung, OU-Struktur, DNS-Dienst-Konfiguration.",
      hypervTitle: "Hyper-V Homelab – Windows Server Virtualisierung",
      hypervDesc: "Windows Server 2022 Datacenter Installation in Hyper-V-Umgebung. VM-Lifecycle-Management, Checkpoint-Verwaltung und Disaster Recovery dokumentierte Praxis.",
      sqlTitle: "SQL Server 2025 Portfolio-Projekt: Personalvermittlungsdatenbank",
      sqlDesc: "Schemata (ref/core/ops/audit), PK/FK + Indizes, Views, gespeicherte Prozeduren, Trigger (Audit + Überlappungsschutz), Zeiterfassung und Rechnungsstellung, Demo-Daten.",
      psTitle: "PowerShell IT Toolbox",
      psDesc: "Nützliche PowerShell-Skripte für IT-Support-Aufgaben: Systemzustandsbericht (CPU, RAM, Festplatte) und Überprüfung kritischer Dienste mit farbcodierter Ausgabe.",
      btnRepo: "Repo",
      btnDocs: "Dokumentation",
      btnTroubleshooting: "Fehlerbehebung",
      btnInstallScript: "Installationsskript",
      btnDemoQueries: "Demo-Abfragen",
      btnImages: "Bilder",
      ctaRepoDocScreenshots: "Öffnen: Repo + Dokumentation + Screenshots",
      ctaRepoScriptScreenshots: "Öffnen: Repo + Skript + Screenshots",
      ctaRepoScriptsDocs: "Öffnen: Repo + Skripte + Dokumentation"
    },

    contact: {
      title: "Kontakt"
    },

    footer: {
      copyright: "Magyar Gyula • Portfolio",
      ai: "Diese Website und einige Projekte wurden mit KI-Unterstützung entwickelt (Claude, Anthropic | ChatGPT, Codex)."
    },

    modal: {
      title: "Telefonnummer anfordern",
      text: "Ich zeige meine Telefonnummer nicht öffentlich an. Klicken Sie auf die Schaltfläche unten und eine vorausgefüllte E-Mail wird geöffnet. Ich sende Ihnen meine Kontaktdaten als Antwort.",
      emailBtn: "E-Mail öffnen",
      cancelBtn: "Abbrechen",
      hint: "Tipp: Wenn kein E-Mail-Programm auf Ihrem Gerät eingerichtet ist, kopieren Sie dies:"
    }
  }
};
