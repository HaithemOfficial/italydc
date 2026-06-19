import type { University } from "../schema";

export const cassino: University = {
  id: "cassino",
  name: "University of Cassino and Southern Lazio",
  shortName: "UniCAS",
  city: "Cassino",
  region: "Lazio",
  officialWebsite: "https://www.unicas.it/",
  group: "A",
  scores: { difficulty: 3, scholarship: 9, visa: 9 },
  status: "complete",
  aliases: ["unicas", "cassino university", "cassino southern lazio"],
  summary:
    "All English-taught programmes, a transparent 6-step admission process, DiSCo Lazio and MAECI scholarships, and one of the lowest fee tiers for Algerian students. A strong choice for Group A profiles.",

  programs: [
    // Bachelor's
    {
      name: "Economics and Business",
      level: "Bachelor",
      taughtIn: "English",
      applicationLink: "https://gomp.unicas.it/Login/Index?ReturnUrl=%2f",
      notes: "L-33. Min GPA 70%, math min 70%. Born 2001–2008 for 2026/27.",
    },
    {
      name: "Economics with Data Science",
      level: "Bachelor",
      taughtIn: "English",
      applicationLink: "https://gomp.unicas.it/Login/Index?ReturnUrl=%2f",
      notes: "L-33. Min GPA 70%, math min 70%. Born 2001–2008 for 2026/27.",
    },
    {
      name: "Civil and Environmental Engineering",
      level: "Bachelor",
      taughtIn: "English",
      applicationLink: "https://gomp.unicas.it/Login/Index?ReturnUrl=%2f",
      notes: "L-7. Min GPA 70%, math min 70%. Born 2001–2008 for 2026/27.",
    },
    {
      name: "Computer Engineering",
      level: "Bachelor",
      taughtIn: "English",
      applicationLink: "https://gomp.unicas.it/Login/Index?ReturnUrl=%2f",
      notes: "L-8. Min GPA 70%, math min 70%. Born 2001–2008 for 2026/27.",
    },
    {
      name: "Industrial Engineering Technology",
      level: "Bachelor",
      taughtIn: "English",
      applicationLink: "https://gomp.unicas.it/Login/Index?ReturnUrl=%2f",
      testRequired: "CEnT-S (CISIA English Test-Sciences) — non-selective orientation test; OFA assigned if below threshold",
      notes: "L-9. Min GPA 70%, math min 70%. Born 2001–2008 for 2026/27. OFA in Mathematics possible; Integrated Course in Mathematics I offered in September 2026.",
    },
    // Master's
    {
      name: "Economics and Entrepreneurship",
      level: "Master",
      taughtIn: "English",
      applicationLink: "https://gomp.unicas.it/Login/Index?ReturnUrl=%2f",
      notes: "LM-56.",
    },
    {
      name: "Global Economy and Business",
      level: "Master",
      taughtIn: "English",
      applicationLink: "https://gomp.unicas.it/Login/Index?ReturnUrl=%2f",
      notes: "LM-56.",
    },
    {
      name: "Civil and Environmental Engineering",
      level: "Master",
      taughtIn: "English",
      applicationLink: "https://gomp.unicas.it/Login/Index?ReturnUrl=%2f",
      notes: "LM-23.",
    },
    {
      name: "Mechanical Engineering",
      level: "Master",
      taughtIn: "English",
      applicationLink: "https://gomp.unicas.it/Login/Index?ReturnUrl=%2f",
      notes: "LM-33.",
    },
    {
      name: "Medical Imaging and Applications (Erasmus Mundus Joint Master — MAIA)",
      level: "Master",
      taughtIn: "English",
      applicationLink: "https://gomp.unicas.it/Login/Index?ReturnUrl=%2f",
      notes: "LM-32. Erasmus Mundus Joint Master Degree.",
    },
    {
      name: "Telecommunications Engineering",
      level: "Master",
      taughtIn: "English",
      applicationLink: "https://gomp.unicas.it/Login/Index?ReturnUrl=%2f",
      notes: "LM-27.",
    },
    {
      name: "Sport Management — Sport Events Management",
      level: "Master",
      taughtIn: "English",
      applicationLink: "https://gomp.unicas.it/Login/Index?ReturnUrl=%2f",
      notes: "LM-47. Local fixed quota — read the rules carefully before applying.",
    },
  ],

  languageRequirements: {
    english: {
      minLevel: "B2 (CEFR)",
      acceptedCerts: [
        { name: "TOEFL", minScore: "50–59 (paper-based)" },
        { name: "TOEFL iBT", minScore: "72–94" },
        { name: "TOEFL iBT (new 2026 scale)", minScore: "4" },
        { name: "Duolingo", minScore: "≥100" },
        { name: "IELTS", minScore: "5.5" },
        { name: "Pearson PTE", minScore: "≥46" },
        { name: "Oxford Test of English", minScore: ">110" },
      ],
      moiAccepted: false,
      notes:
        "MOI (Medium of Instruction) letters are NOT accepted. Certificates must be verifiable online. Although a MOI declaration may be accepted by Unicas for pre-admission, Italian Embassies typically require a valid B2-level certificate for the visa — obtaining one before applying to the Embassy is strongly recommended.",
    },
  },

  academicRequirements: {
    bachelorYearsOfSchooling: "Minimum 12 years of total schooling required (Italian standard)",
    masterRequirements: "Bachelor's degree or equivalent",
    gapFilling: [
      "Students from countries with fewer than 12 years of schooling must verify compliance with Italian requirements",
    ],
    notes:
      "Minimum overall high school GPA of 70%, with math grade not below 70%. A diploma or bachelor's degree older than 5 years will not be considered. Students must have reached the age of 18 by August 31, 2026 to enrol for 2026/27. Enrolment in 2026/27 is limited to students born between 2001 and 2008 (Economics and Business). Country-specific certificate requirements apply for Ethiopia, India, Pakistan, Bangladesh, West African countries, Kenya, Afghanistan, Kazakhstan, Kyrgyzstan, Tajikistan, and Uzbekistan — check the programme page.",
  },

  admissionProcess: {
    nonEuResidingAbroad: [
      {
        title: "Step 1 — Pre-admission (GOMP portal)",
        detail:
          "Create an account at the UNICAS Student Portal GOMP (https://gomp.unicas.it/) and submit through 'Pre-admission International Students'. Upload: high school transcript, CV, motivation letter, English certificate (B2), valid passport/ID card. Pay the €15 application fee after uploading — applications without payment are skipped in the queue. Pre-admissions for 2026/27 are open now; typical window is February–June. Evaluation takes up to 30 days (the committee analyses applications in chronological order). Incomplete applications are rejected.",
      },
      {
        title: "Step 2 — Selection committee evaluation",
        detail:
          "The selection committee evaluates based on: English certificate B2 or equivalent; overall high school GPA ≥70% with math ≥70%; diploma not older than 5 years; age ≥18 by August 31, 2026. Country-specific documents are required for some nationalities. You will be notified by email.",
      },
      {
        title: "Step 3 — Pre-enrolment on Universitaly",
        detail:
          "Once pre-admitted, register on Universitaly (https://www.universitaly.it/) and follow the instructions to apply to the Unicas programme. Apply as soon as possible — the sooner you submit, the sooner you receive a visa appointment. Ensure all document names match exactly what is on your passport. The committee will contact you through the portal if documents are missing — do not send emails.",
      },
      {
        title: "Step 4 — Unicas approves on Universitaly",
        detail:
          "Once the administration has approved your application on Universitaly, Italian Embassies can verify your admission without further communications from you.",
      },
      {
        title: "Step 5 — Visa",
        detail:
          "The Embassy evaluates your request and issues the visa. Print the PDF summary from Universitaly (this is the 'Letter of eligibility for enrollment' — no separate admission letter is sent by email), sign it, and deliver it to the Embassy. Unicas requires a Declaration of Value (DoV) or a Statement of Comparability + Verification from CIMEA for enrollment. The visa decision is the exclusive jurisdiction of the Italian diplomatic-consular mission.",
      },
      {
        title: "Step 6 — Enrollment at Unicas",
        detail:
          "After receiving the visa: (3.1) Apply for your Codice Fiscale at Agenzia delle Entrate (Via Ausonia Vecchia, Cassino) and deliver it to the International Students Administrative Office. (3.2) Go to the International Welcome Service at Rettorato, Viale dell'Università, Loc. Folcara, 03043 Cassino (FR) with your passport (with visa and entry stamp), and DoV or CIMEA Statement of Comparability + Verification. (3.3) Wait for the 'nulla osta for international students' in GOMP, then visit the International Students Administrative Office to complete enrollment and receive your student card. (3.4) Contact your Department's Didactics Office for timetable and study plan.",
      },
    ],
    notes:
      "The system does not allow any changes once the Universitaly application has been sent to the Embassy — review carefully before submitting. Do not contact the committee by email during the waiting periods.",
  },

  documents: {
    admission: [
      "High school transcript",
      "Curriculum vitae (CV)",
      "Motivation letter",
      "English language certificate (B2 or equivalent — IELTS, TOEFL, Duolingo, PTE, etc.; verifiable online; MOI not accepted)",
      "Current valid passport or identity card",
      "€15 pre-admission application fee payment",
    ],
    enrolment: [
      "Passport with visa for study and arrival stamp in Italy (or valid permit to stay)",
      "Declaration of Value (DoV) issued by the competent Italian consular section — OR — Statement of Comparability together with Statement of Verification (both issued by CIMEA)",
      "Codice Fiscale (Italian tax code, obtained at Agenzia delle Entrate in Cassino)",
      "Printed and signed PDF summary from Universitaly (Letter of eligibility for enrollment)",
    ],
    notes:
      "Statement of Comparability + Verification from CIMEA is accepted in place of the DoV. Check the Embassy directly on whether DoV is also required for the visa application.",
  },

  deadlines: [
    {
      what: "Pre-admission application (GOMP portal)",
      from: "February 2026",
      until: "June 2026 (approx.)",
      notes: "Check each programme page for the exact deadline. Early application strongly encouraged.",
    },
    {
      what: "Universitaly pre-enrolment and visa request",
      from: "End of March 2026",
      until: "November 30, 2026",
      notes: "The sooner you submit, the sooner you receive a visa appointment. Do not apply for the wrong academic year.",
    },
    {
      what: "Visa application deadline (AY 2026/27)",
      until: "November 30, 2026",
      notes: "Ministerial deadline for standard Bachelor's/Master's courses.",
    },
  ],

  tuitionFees: {
    fixedFeeByGroup: [
      {
        group: "Group A — Low and medium income (World Bank) — includes Algeria",
        total: "€600",
        instalments: "Full amount; plus €16 stamp tax and €140 regional tax",
      },
      {
        group: "Group B — Medium-high income (World Bank)",
        total: "€1,000",
        instalments: "Full amount; plus €16 stamp tax and €140 regional tax",
      },
      {
        group: "Group C — High income (World Bank)",
        total: "€1,400",
        instalments: "Full amount; plus €16 stamp tax and €140 regional tax",
      },
    ],
    regionalTax: "€140",
    stampDuty: "€16",
    notes:
      "Algeria is explicitly listed in Group A. Total fee for Algerian students: €600 + €140 + €16 = €756. Applies to non-Italian students enrolled as regular students up to one year beyond the regular programme duration. ISEE-based reduction may be available via DiSCo Lazio scholarship (full tuition waiver possible).",
  },

  scholarships: [
    {
      name: "DiSCo Lazio Scholarship",
      provider: "DiSCo Lazio — Regional Authority for Student Life",
      type: "Regional (income + merit)",
      link: "http://www.laziodisco.it/studenti/#Sezione-Attivita",
      notes:
        "Benefits for talented students from low-income families: lodging in university dormitories, fully-waived tuition fees, discounted canteen service, study grants covering living expenses, study-abroad scholarships, graduation prizes. Renewed yearly based on academic performance (exams passed + average mark). Call: https://www.unicas.it/media/wv4nj1y0/bando-diritto-allo-studio_25-26.pdf",
    },
    {
      name: "MAECI Scholarships",
      provider: "Italian Ministry of Foreign Affairs and International Cooperation (MAECI)",
      type: "Government — for non-EU students",
      link: "https://www.esteri.it/it/opportunita/borse-di-studio/",
      notes:
        "Grants for foreign citizens and Italians resident abroad. Promotes international cooperation in cultural, scientific, and technological fields.",
    },
    {
      name: "Invest Your Talent in Italy",
      provider: "Italian Government / MAECI",
      type: "Special — selected universities only",
      link: "https://investyourtalentapplication.esteri.it/SitoInvestYourTalentApplication/progetto.asp",
      notes: "Unicas is one of the few Italian universities participating in this programme.",
    },
    {
      name: "Tutorship Grants",
      provider: "University of Cassino",
      type: "Internal — yearly call",
      notes: "Calls for a variety of tutorship grants are open yearly to students.",
    },
  ],

  visaAndArrival: {
    financialProof: "€10,179.85 per year (standard Italian ministerial requirement). Funds must be lawful, traceable, and preferably personal or from family (up to the 4th degree).",
    accommodation:
      "Average cost for a bedroom in a shared apartment: approx. €220/month (including utilities and condo fees). DiSCo Lazio residences available — contact the International Office for support.",
    healthInsurance: "Required for the visa and residence permit application.",
    residencePermit:
      "Must be requested within 8 working days of arrival at the local Questura (police headquarters). Postal application available via Sportello Amico post offices.",
    taxCode:
      "Codice Fiscale obtained at Agenzia delle Entrate, Via Ausonia Vecchia, Cassino. Required before completing enrollment — deliver to the International Students Administrative Office.",
    notes:
      "International Welcome Service is located at Rettorato, Viale dell'Università, Loc. Folcara, 03043 Cassino (FR). Check office hours on the Unicas website before visiting.",
  },

  importantNotes: [
    "Algeria is explicitly in Group A — total annual fee is €756 (€600 + €140 regional tax + €16 stamp duty). DiSCo Lazio can waive tuition entirely based on income and merit.",
    "MOI (Medium of Instruction) letters are NOT accepted as English proof. Obtain an IELTS, TOEFL, Duolingo, or PTE certificate — the Embassy will require it for the visa even if Unicas accepts a MOI for pre-admission.",
    "A €15 pre-admission fee must be paid immediately after uploading documents — unpaid applications are skipped in the queue.",
    "The Universitaly application is LOCKED once submitted to the Embassy — it cannot be reopened or modified. Review all documents carefully before submitting.",
    "The 'Letter of eligibility for enrollment' is a PDF to print from the Universitaly portal — no separate email admission letter is sent.",
    "Unicas requires a Declaration of Value (DoV) OR CIMEA Statement of Comparability + Verification for enrollment. Check with the Embassy whether DoV is also required for the visa.",
    "Enrollment for 2026/27 in Economics and Business is limited to students born between 2001 and 2008.",
    "A diploma older than 5 years will not be considered for admission.",
    "The visa decision is the exclusive jurisdiction of the Italian diplomatic-consular mission. Pre-admission does not guarantee a visa, and obtaining a visa does not guarantee enrollment.",
  ],
};
