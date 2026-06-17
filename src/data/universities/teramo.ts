import type { University } from "../schema";

export const teramo: University = {
  id: "teramo",
  name: "University of Teramo",
  shortName: "UniTE",
  city: "Teramo",
  region: "Abruzzo",
  officialWebsite: "https://www.unite.it/",
  group: "A",
  scores: { difficulty: 3, scholarship: 8, visa: 8 },
  status: "complete",
  aliases: ["unite", "teramo university"],
  summary: "A welcoming university in Abruzzo with straightforward admission, World Bank–based fee tiers, and strong scholarship support from ADSU.",

  programs: [
    { name: "Bachelor of Science in Biotechnology", level: "Bachelor", taughtIn: "English", applicationLink: "https://teramouniversity.jotform.com/261472332447860", testRequired: "Not mandatory (OFAs assigned if below threshold)", notes: "Students can enrol without passing the test, but OFAs will be charged" },
    { name: "Bachelor of Science in Business Management", level: "Bachelor", taughtIn: "English", applicationLink: "https://teramouniversity.jotform.com/261554488408062", testRequired: "Not mandatory (OFAs assigned if below threshold)", notes: "Students can enrol without passing the test, but OFAs will be charged" },
    { name: "Master of Science in Reproductive Biotechnologies", level: "Master", taughtIn: "English", applicationLink: "https://teramouniversity.jotform.com/261472841465865", testRequired: "Mandatory pre-assessment", notes: "Lessons start January 7, 2027" },
    { name: "Master of Science in Food Science and Technology", level: "Master", taughtIn: "English", applicationLink: "https://teramouniversity.jotform.com/261472035057857", testRequired: "Mandatory pre-assessment", notes: "Specific curricular requirements (see Teaching Course Regulation)" },
  ],

  languageRequirements: {
    english: {
      minLevel: "B2 (CEFR)",
      acceptedCerts: [
        { name: "Cambridge English Language Assessment" },
        { name: "City and Guilds (Pitman)" },
        { name: "Edexcel / Pearson" },
        { name: "IELTS", minScore: "B2" },
        { name: "TOEFL", minScore: "B2" },
        { name: "ETS" },
        { name: "TCL" },
        { name: "LanguageCert" },
      ],
      moiAccepted: true,
      notes: "Native English speakers and students who obtained their qualifying diploma/degree in English are exempt — a Medium of Instruction (MOI) document from the awarding institution is required instead.",
    },
    italian: {
      minLevel: "B2 (CEFR)",
      acceptedCerts: [
        { name: "PLIDA" },
        { name: "CILS" },
        { name: "CELI" },
        { name: "Certit" },
        { name: "Cecol" },
      ],
      testIfNoCert: true,
      notes: "Applicants who do not hold one of the accepted certificates must sit a language proficiency test administered by UniTe. Test dates and procedures are published on the relevant degree programme's webpage.",
    },
  },

  academicRequirements: {
    bachelorYearsOfSchooling: "Minimum 12 years of prior schooling",
    masterRequirements: "Bachelor's degree (or equivalent) plus a minimum of 15 years of schooling overall",
    gapFilling: [
      "Completion of 1–2 years of academic studies (with transcript of records)",
      "A post-secondary qualification from a non-university institution",
      "A Foundation Course certificate issued by an Italian university",
    ],
    notes: "Where the national school system provides fewer than 12 years of education, applicants must provide evidence of one of the gap-filling options listed. The Single-Cycle Degree in Veterinary Medicine follows a specific national procedure.",
  },

  admissionProcess: {
    euOrResidentInItaly: [
      { title: "Register on UniTE Online Secretariat", detail: "https://segreteriaonline.unite.it/ — upload required documentation." },
      { title: "Verification of academic qualifications", detail: "Master's programmes only: the Department Secretariat verifies qualifications." },
      { title: "Register for and pass the admission test", detail: "Master's programmes only." },
      { title: "Verification of Italian language proficiency", detail: "For programmes taught in Italian — assessed by the Department Committee." },
      { title: "Complete the enrolment application" },
      { title: "Receive student identification number" },
    ],
    nonEuResidingAbroad: [
      { title: "Step 1 — Application submission", detail: "Complete the online application form for your chosen degree programme and upload all required documents (passport main page, diploma, transcript, English certificate or MOI, syllabus recommended for Master's)." },
      { title: "Step 2 — Document Verification", detail: "The International Welcome Service verifies completeness, validity of the foreign qualification, and compliance with academic and language requirements. Bachelor applicants receive acceptance/conditional/non-acceptance; Master applicants forwarded to Degree Programme Director for admission test procedures. A pre-assessment test is required but not mandatory before Bachelor enrolment; mandatory for Master's." },
      { title: "Step 3 — Language Proficiency Test (Italian-taught programmes only)", detail: "The Departmental Committee organises language proficiency tests where necessary." },
      { title: "Step 4 — Pre-enrolment on Universitaly and Visa Request", detail: "Register on the Universitaly portal, complete the pre-enrolment application, wait for University validation, then apply for a study visa at the Italian diplomatic-consular representation in your country. The Embassy may request a Letter of Pre-acceptance." },
      { title: "Step 5 — Applying for an Entry Visa", detail: "Demonstrate: sufficient financial means (€10,179.85 per year), suitable accommodation in Italy, adequate health insurance. Fingerprint collection is mandatory for national visas from 11 January 2025." },
      { title: "Step 6 — Enrolment at UniTe", detail: "After obtaining the visa, register on UniTE Online Secretariat, activate university credentials, and pay fees within established deadlines. The International Welcome Service supports students throughout." },
    ],
    notes: "Remote preliminary evaluation has no deadline. Non-EU students residing abroad must pre-enrol via Universitaly (the only official free portal) and apply for a national study visa Type D.",
  },

  documents: {
    admission: [
      "Passport main page",
      "High school diploma (or equivalent) — for Bachelor's programmes",
      "High school diploma (or equivalent) AND degree certificate — for Master's programmes",
      "Transcript of records (list of exams/subjects taken with grades)",
      "English certificate (minimum B2 CEFR) or Medium of Instruction (MOI) certificate",
      "Syllabus (recommended for Master's programmes)",
      "Curriculum vitae (recommended for some programmes)",
    ],
    enrolment: [
      "Valid passport (with visa for non-EU citizens)",
      "All documents from the admission stage",
      "Proof of request for the issuance of a residence permit valid for university matriculation",
      "Italian tax code (codice fiscale) — can be obtained before arriving from the Italian consulate, or in Italy at the local Agenzia delle Entrate",
    ],
    notes: "The receipt of the residence permit application (not the permit itself) is accepted as proof of legal stay while waiting.",
  },

  deadlines: [
    { what: "Remote preliminary evaluation", until: "No deadline" },
    { what: "Universitaly application and VISA request (single courses, Bachelor's, Master's)", from: "April 2026", until: "November 30, 2026" },
    { what: "Registration to competitive examinations for Master's with national limited enrolment", notes: "Check the course's call for applications" },
    { what: "Enrolment to Bachelor's degree programmes open to all applicants", from: "July 1, 2026", until: "November 5, 2026", notes: "Late enrolments allowed with payment of a late fee" },
    { what: "Enrolment to Master's degree programmes open to all applicants", from: "July 1, 2026", until: "November 5, 2026" },
  ],

  tuitionFees: {
    fixedFeeByGroup: [
      { group: "Group A — Low-income countries (World Bank)", total: "€50", instalments: "€50 (single payment)" },
      { group: "Group B — Middle-income countries (World Bank)", total: "€300", instalments: "4 × €75" },
      { group: "Group C — High-income countries (World Bank)", total: "€600", instalments: "4 × €150" },
    ],
    regionalTax: "€140 (paid with the first instalment)",
    stampDuty: "€16 (paid with the first instalment)",
    iseeOption: "If the student submits a valid ISEE-U (Equivalent Economic Situation Indicator for university financial aid), the tuition fees will be calculated solely based on the value resulting from it, and the fixed-rate contribution will not apply.",
    notes: "Algeria's World Bank classification determines the fee group — check Annex 2 (Allegato 2) of Tuition fees for the full country list. Students with political refugee status and/or subsidiary protection are exempt from paying the comprehensive contribution (COA).",
  },

  scholarships: [
    {
      name: "ADSU Teramo Scholarships",
      provider: "ADSU — Azienda per il Diritto agli Studi Universitari (Teramo)",
      type: "Regional (income + merit)",
      link: "http://www.adsuteramo.it",
      notes: "Scholarships, grants for accommodation costs, extraordinary grants for study purposes, honour grants for outstanding final dissertations, transport services, cultural/sports/recreational activities, services for disabled students, exemption from regional fees, international mobility support, and refectory services.",
    },
    {
      name: "Italian Government Scholarships (MAECI)",
      provider: "Italian Ministry of Foreign Affairs (MAECI)",
      type: "Government — for non-EU students",
      link: "https://www.esteri.it/en/",
      notes: "Contact the Italian diplomatic representation or consult the Ministry's website under Opportunities > Scholarship/Grants > For foreign citizens.",
    },
  ],

  visaAndArrival: {
    financialProof: "€10,179.85 per year. Must derive from lawful and traceable sources, preferably personal; alternatively from the student's family unit (relatives up to the fourth degree). Where permitted in the country of origin, revolving bank accounts and blocked accounts held in the student's name are the preferred forms.",
    accommodation: "Suitable accommodation within Italian national territory must be proven. A mere application for, or eligibility to obtain, accommodation in a university residence does NOT constitute valid documentation for this purpose.",
    healthInsurance: "Adequate health insurance coverage for medical treatment and hospitalisation is required (Article 39, paragraph 3, Legislative Decree No. 286/1998). Must be demonstrated when applying for a residence permit.",
    residencePermit: "Must be requested within 8 working days of arrival in Italy at the local Questura (Ufficio stranieri / Immigration Office). The receipt of application serves as proof of legal stay while waiting. Can also be submitted via post offices. EU citizens must register with the local civil records office instead.",
    taxCode: "The Italian tax code (codice fiscale) can be obtained before arriving in Italy at the Italian consular-diplomatic representation, or in Italy at the local Agenzia delle Entrate (Revenue Agency). Required to open a bank account or sign contracts.",
    notes: "Fingerprint collection is mandatory for national visas (Type D) from January 11, 2025 (ref. Legislative Decree 145/2024).",
  },

  importantNotes: [
    "The pre-assessment/admission test result does NOT block enrolment for Bachelor's programmes — students may enrol even without passing, but Additional Learning Requirements (OFAs) will be assigned to complete in year 1.",
    "For Master's programmes, a positive pre-assessment test IS mandatory.",
    "Fingerprint collection is mandatory for national visas (Type D) from January 11, 2025.",
    "The Universitaly portal is the only official, free pre-enrolment channel — no other portals are recognized.",
    "The admission letter / pre-acceptance letter does not guarantee a visa — the Italian diplomatic-consular mission has exclusive jurisdiction over visa decisions and also assesses migration risk (D.I. 850/2011, art. 4, para. 2).",
  ],
};
