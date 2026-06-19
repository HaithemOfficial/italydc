import type { University } from "../schema";

export const univpm: University = {
  id: "univpm",
  name: "Università Politecnica delle Marche",
  shortName: "UNIVPM",
  city: "Ancona",
  region: "Marche",
  officialWebsite: "https://international.univpm.it",
  group: "B",
  scores: { difficulty: 5, scholarship: 6, visa: 7 },
  status: "complete",
  aliases: ["univpm", "politecnica marche", "ancona polytechnic", "marche polytechnic"],
  summary:
    "Multi-faculty polytechnic university across 6 campuses in the Marche region. Algeria has a dedicated 4th Call window (1–31 July 2026). English-taught programmes span Engineering, Economics, Science, Medicine and Agriculture — all open to visa students. Three separate portals govern the pipeline: GOMOVEIN → Universitaly → Esse3web.",

  programs: [
    // Bachelor's
    {
      name: "Digital Economics and Business",
      level: "Bachelor",
      taughtIn: "English",
      applicationLink: "https://univpm.gomovein.com",
      notes: "Faculty of Economics. Free access. Campus: Ancona. Check entry requirements by country.",
    },
    {
      name: "Environmental Sciences and Civil Protection",
      level: "Bachelor",
      taughtIn: "English",
      applicationLink: "https://univpm.gomovein.com",
      notes: "Faculty of Science. Free access. Campus: Ancona.",
    },
    // Single-Cycle
    {
      name: "Medicine and Surgery (MedTech)",
      level: "Single-Cycle",
      taughtIn: "English",
      applicationLink: "https://univpm.gomovein.com",
      testRequired: "Restricted access — check competition notice on univpm.it for quota and test details.",
      notes: "Faculty of Medicine. Restricted access but open to visa students. Campus: Ancona.",
    },
    // Master's
    {
      name: "International Economics and Commerce",
      level: "Master",
      taughtIn: "English",
      applicationLink: "https://univpm.gomovein.com",
      notes: "Faculty of Economics. Free access. Campus: Ancona.",
    },
    {
      name: "Data Science for Finance and Economics",
      level: "Master",
      taughtIn: "English",
      applicationLink: "https://univpm.gomovein.com",
      notes: "Faculty of Economics. Free access. Campus: Ancona.",
    },
    {
      name: "Food and Beverage Innovation and Management",
      level: "Master",
      taughtIn: "English",
      applicationLink: "https://univpm.gomovein.com",
      notes: "Faculty of Agriculture. Free access. Campus: Ancona. Interview required.",
    },
    {
      name: "Biomedical Engineering",
      level: "Master",
      taughtIn: "English",
      applicationLink: "https://univpm.gomovein.com",
      notes: "Faculty of Engineering. Free access. Campus: Ancona.",
    },
    {
      name: "Environmental Engineering",
      level: "Master",
      taughtIn: "English",
      applicationLink: "https://univpm.gomovein.com",
      notes: "Faculty of Engineering. Free access. Campus: Ancona.",
    },
    {
      name: "Green Industrial Engineering",
      level: "Master",
      taughtIn: "English",
      applicationLink: "https://univpm.gomovein.com",
      notes: "Faculty of Engineering. Free access. Campus: Pesaro.",
    },
    {
      name: "Electronic Engineering",
      level: "Master",
      taughtIn: "English",
      applicationLink: "https://univpm.gomovein.com",
      notes: "Faculty of Engineering. Free access. Campus: Ancona. Also offered with double curricula (Italian + English) from the 2nd Call.",
    },
    {
      name: "Environmental Hazard and Disaster Risk Management",
      level: "Master",
      taughtIn: "English",
      applicationLink: "https://univpm.gomovein.com",
      notes: "Faculty of Science. Free access. Campus: Ancona. Interview required.",
    },
    {
      name: "Marine Biology",
      level: "Master",
      taughtIn: "English",
      applicationLink: "https://univpm.gomovein.com",
      notes: "Faculty of Science. Free access. Campus: Ancona. Interview required.",
    },
  ],

  languageRequirements: {
    english: {
      minLevel: "B2 (CEFR)",
      acceptedCerts: [
        { name: "IELTS" },
        { name: "TOEFL" },
        { name: "Cambridge" },
        { name: "Any internationally recognised B2 certificate" },
        { name: "UNIVPM CSAL proficiency test (all four competences)" },
      ],
      notes:
        "Exact accepted certificates vary by programme — verify at international.univpm.it/english-language-requirement. An expired certificate may be integrated within 45 days. Fraudulent or non-accepted certificates result in rejection.",
    },
  },

  academicRequirements: {
    bachelorYearsOfSchooling: "Minimum 12 years of total schooling required.",
    masterRequirements: "Bachelor's degree or equivalent qualification at EQF level 6 from an accredited institution.",
    gapFilling: [
      "Students with fewer than 12 years of schooling must demonstrate 1–2 integration years at a recognised HEI (foundation year or one full bachelor year = 60 ECTS), with full transcript and a statement confirming all first-year credits completed.",
    ],
    notes:
      "Possessing the stated requirements is NOT a guarantee of admission — each application is assessed individually (academic performance, prior studies, motivation, preparation). Assessment is valid only for AY 2026-27; prior assessments do not carry over. A Bachelor's transcript with grade scale must be uploaded for Master's applications. Country-specific cut-off scores may apply for Bachelor's entry.",
  },

  admissionProcess: {
    nonEuResidingAbroad: [
      {
        title: "Stage 0 — Choose your programme",
        detail:
          "Browse programmes at orienta.univpm.it/en. Confirm the programme is marked eligible for 'NON-EU (requiring VISA)'. Most restricted health-profession courses are CLOSED to visa students — the only restricted programmes open to visa students are Medicine and Surgery (MedTech) in English and Ingegneria Edile e Architettura in Italian.",
      },
      {
        title: "Stage 1 — Pre-admission application (GOMOVEIN portal)",
        detail:
          "Apply at UNIVPM.GOMOVEIN during the Algeria window: 4th Call, 1–31 July 2026. Fee: €10 per application, maximum 2 applications for different programmes. Register with your name exactly as on your passport. Answer 'Yes' to the study visa question. Complete all sections: programme choice (cannot be changed after submission), personal details, language certificates, education documents (colour, double-sided, all stamps visible), optional CV, motivation statement. Submit only when all mandatory documents are uploaded. Outcome: minimum 45 days — do not send reminders. Conversations/emails appear in the portal's Conversations section; reply via admission.support@sm.univpm.it.",
      },
      {
        title: "Stage 2 — Pre-enrolment on Universitaly (after admission)",
        detail:
          "Once pre-admitted, submit a pre-enrolment application on Universitaly (universitaly.it) for the visa. Review the ministerial circular published 30 April 2026 first (new provisions on quotas, financial and housing requirements, and mandatory embassy documents). The official pre-admission letter is issued once the Universitaly pre-enrolment is validated. Hard deadline: 30 November 2026.",
      },
      {
        title: "Stage 3 — Visa application",
        detail:
          "Present the Universitaly pre-enrolment summary to the Italian Embassy/Consulate in Algeria. Only applications validated WITHOUT conditions are accepted by the Embassy (exception: restricted-access applicants and those yet to obtain their qualification). The visa procedure and specific deadlines vary by Embassy — check directly. Visa request deadline: 30 November 2026.",
      },
      {
        title: "Stage 4 — Admission test (restricted-access programmes only)",
        detail:
          "Medicine and Surgery (MedTech) and Ingegneria Edile e Architettura require passing an admission test. Rules and deadlines are published in competition notices on univpm.it from the 3rd Call onward.",
      },
      {
        title: "Stage 5 — Enrolment / Matriculation (Esse3web portal)",
        detail:
          "Enrolment begins mid-July 2026. Register on Esse3web — name/surname/place of birth must match your passport. Fill the matriculation application, upload an ID photo (Jpeg/Bmp, ≥200 dpi, ≤400 kb, neutral background, face only), print and hand-sign the application, upload all documents (diploma + CIMEA/DoV + language certificate + Codice Fiscale + residence permit receipt + Type D visa), and pay the first installment of €156 via PagoPA after the visa is issued. Your student number is issued once documents are verified and first installment is paid. Complete matriculation by 31 January — failing to do so results in visa revocation. Activate your university email immediately after receiving your student number (all office communications go through it).",
      },
    ],
    notes:
      "UNIVPM uses three separate portals: GOMOVEIN for pre-admission (Stage 1), Universitaly for visa pre-enrolment (Stage 2), and Esse3web for final enrolment (Stage 5). Do not confuse them. Part-time option extends the degree from 3 to 6 years with reduced fees; must be kept for at least 2 years.",
  },

  documents: {
    admission: [
      "Passport (name/surname must match all forms exactly)",
      "High school diploma or Bachelor's transcript — colour, double-sided, all signatures and stamps visible; with grade scale",
      "Transcript of at least the last 2 years of high school (Bachelor's applicants)",
      "National University Entrance exam certificate if mandatory in your country",
      "Language proficiency certificate (English B2) from an internationally recognised institution",
      "Motivation statement",
      "CV (optional)",
      "If available: CIMEA Comparability statement, CIMEA Verification statement, or Declaration of Value (DoV) — speeds up verification",
      "€10 application fee (paid by credit card on GOMOVEIN, per application)",
    ],
    enrolment: [
      "Type D study visa",
      "Residence permit receipt (obtained within 8 working days of arrival)",
      "Codice Fiscale (Italian tax code)",
      "Diploma + full transcript with grade scale — original language + sworn translation into English or Italian, colour, all pages front/back with authentication stamps",
      "CIMEA Comparability statement OR ARDI correspondence statement (Lisbon-signatory countries) OR Declaration of Value from the Italian Embassy/Consulate",
      "CIMEA Verification statement OR Apostille/legalisation by the Italian Embassy/Consulate",
      "English proficiency certificate B2",
      "National entrance exam certificate if mandatory in-country",
      "ID photo: Jpeg or Bmp, ≥200 dpi, ≤400 kb, neutral background, face only",
      "Printed and hand-signed matriculation application from Esse3web",
      "First installment payment of €156 via PagoPA (after visa issued)",
    ],
    notes:
      "Withdrawal from the programme results in residence permit revocation. To change programme, apply for a transfer — not withdrawal.",
  },

  deadlines: [
    {
      what: "Algeria 4th Call — pre-admission application (GOMOVEIN)",
      from: "1 July 2026",
      until: "31 July 2026",
      notes: "Dedicated window for Algeria (and other listed countries). €10 per application, max 2. Outcome in minimum 45 days.",
    },
    {
      what: "Universitaly pre-enrolment & visa request",
      until: "30 November 2026",
      notes: "Ministerial deadline. Review the circular of 30 April 2026 before applying.",
    },
    {
      what: "Enrolment / Matriculation begins",
      from: "Mid-July 2026",
      notes: "After visa is issued. Complete by 31 January — failing to do so results in visa revocation.",
    },
    {
      what: "Matriculation completion deadline",
      until: "31 January (verify current cycle)",
      notes: "Missing this deadline results in visa revocation. Confirm exact date with the international office for 2026-27.",
    },
  ],

  tuitionFees: {
    notes:
      "Tuition fee figures for AY 2026-27 are not yet published in the available source material. The first installment at enrolment is €156 via PagoPA (verify against the current cycle). Full annual tuition and ISEE/income-band reductions are listed on univpm.it — confirm before advising clients.",
  },

  scholarships: [
    {
      name: "ERDIS Marche — Regional Right-to-Study Scholarship (DSU)",
      provider: "ERDIS Marche (Ente Regionale per il Diritto allo Studio)",
      type: "Regional (income + merit)",
      link: "https://www.erdis.it",
      notes:
        "The regional right-to-study agency for Marche. Benefits for income-eligible students: tuition waiver, cash grant, housing, free meals. Algerian students require the ISEE Parificato. Confirm current bando deadlines on erdis.it.",
    },
    {
      name: "MAECI Italian Government Scholarship",
      provider: "Ministry of Foreign Affairs (MAECI)",
      type: "Government — Master's / PhD / research",
      link: "https://studyinitaly.esteri.it/",
      notes:
        "Algeria is an eligible country. €10,800 for 9 months. Mainly for Master's, PhD, and research — not Bachelor's. Deadline: 26 March 2026 for AY 2026-27.",
    },
  ],

  visaAndArrival: {
    financialProof:
      "~€10,179.85 (standard Italian ministerial requirement). Scholarship results arrive after the visa — funds must be demonstrated at application time regardless.",
    residencePermit:
      "Must be requested within 8 working days of arrival. Required for Esse3web matriculation — upload the receipt immediately.",
    taxCode:
      "Codice Fiscale required before completing enrolment.",
    notes:
      "International Students Admission Office: Via Palestro, 60122 Ancona. Phone hours Mon–Fri 9:00–11:30, Wed also 15:00–16:30. General: +39 071 220 2238 / 2423. Support email: admission.support@sm.univpm.it (pre-admission) · student.admission@sm.univpm.it (enrolment).",
  },

  importantNotes: [
    "Algeria is in the 4th Call: 1–31 July 2026. This is the only window for Algerian students — do not apply in other calls.",
    "Application fee is €10 per application, maximum 2 applications for different programmes. Fee is non-refundable.",
    "Pre-admission outcome takes a minimum of 45 days — do not send reminders to the office.",
    "UNIVPM uses three separate portals: GOMOVEIN (pre-admission) → Universitaly (pre-enrolment / visa) → Esse3web (enrolment). Each stage requires its own registration.",
    "The programme choice in GOMOVEIN CANNOT be changed after submission.",
    "Medicine and Surgery (MedTech) is the only restricted-access English programme open to visa students — all English free-access programmes are open.",
    "Matriculation must be completed by 31 January — failing to do so results in visa revocation.",
    "Withdrawal from the programme causes the residence permit to be revoked. To change programme, apply for a transfer.",
    "Tuition fee figures for AY 2026-27 are not yet confirmed — check univpm.it before advising clients on fees.",
    "Part-time study option extends the degree from 3 to 6 years with reduced fees; must be kept for at least 2 years.",
  ],
};
