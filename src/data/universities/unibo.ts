import type { University } from "../schema";

export const unibo: University = {
  id: "unibo",
  name: "Alma Mater Studiorum – Università di Bologna",
  shortName: "UNIBO",
  city: "Bologna",
  region: "Emilia-Romagna",
  officialWebsite: "https://www.unibo.it",
  group: "B",
  scores: { difficulty: 6, scholarship: 7, visa: 7 },
  status: "complete",
  aliases: [
    "unibo",
    "bologna university",
    "alma mater",
    "alma mater studiorum",
    "university of bologna",
  ],
  summary:
    "Italy's oldest university and one of Europe's top-ranked institutions. Multi-campus: Bologna, Cesena, Forlì, Ravenna, Rimini. Every restricted programme reserves a dedicated Quota B (non-EU resident abroad) seat allocation — Algerian students always have a specific quota. Each programme runs its own Call for Applications with its own seats, deadlines, and admission method. The main portal is Studenti Online (studenti.unibo.it); Universitaly is used only for visa pre-enrolment.",

  programs: [
    // ── BACHELOR'S ──────────────────────────────────────────────────────────
    {
      name: "Business and Economics",
      level: "Bachelor",
      taughtIn: "English",
      applicationLink: "https://studenti.unibo.it",
      testRequired: "Restricted access — admission test type TBC per programme call (code 6609).",
      notes: "Code 6609. Campus: Bologna. 3 years. 250 total seats. Double/Multiple degree. Each year's call is published on studenti.unibo.it — check for the A/B quota split.",
    },
    {
      name: "Business Economics",
      level: "Bachelor",
      taughtIn: "English",
      applicationLink: "https://studenti.unibo.it",
      testRequired: "TOLC-E (restricted access, code 6611).",
      notes: "Code 6611. Campus: Rimini. 3 years. 250 total seats. Two curricula: Financial & Business Management (English) and Management dell'Ospitalità (Italian) — confirm curriculum language at enrolment. Double/Multiple degree.",
    },
    {
      name: "Economics and Finance",
      level: "Bachelor",
      taughtIn: "English",
      applicationLink: "https://studenti.unibo.it",
      testRequired: "Restricted access — admission test type TBC per programme call (code 6646).",
      notes: "Code 6646. Campus: Bologna. 3 years. 130 total seats.",
    },
    {
      name: "Economics of Tourism and Cities",
      level: "Bachelor",
      taughtIn: "English",
      applicationLink: "https://studenti.unibo.it",
      testRequired: "Restricted access — admission test type TBC per programme call (code 6645).",
      notes: "Code 6645. Campus: Rimini. 3 years. 120 total seats.",
    },
    {
      name: "Economics, Politics and Social Sciences",
      level: "Bachelor",
      taughtIn: "English",
      applicationLink: "https://studenti.unibo.it",
      testRequired: "Restricted access — admission test type TBC per programme call (code 6647).",
      notes: "Code 6647. Campus: Bologna. 3 years. 130 total seats.",
    },
    {
      name: "Management and Economics",
      level: "Bachelor",
      taughtIn: "English",
      applicationLink: "https://studenti.unibo.it",
      testRequired: "Restricted access — admission test type TBC per programme call (code 6614).",
      notes: "Code 6614. Campus: Forlì. 3 years. 80 total seats. Double/Multiple degree.",
    },
    {
      name: "European Studies",
      level: "Bachelor",
      taughtIn: "English",
      applicationLink: "https://studenti.unibo.it",
      notes: "Code 6653. Campuses: Bologna and Forlì. 3 years. OPEN ACCESS — no admission test. Joint degree. The only open-access English-taught programme in the catalogue.",
    },
    {
      name: "International Studies",
      level: "Bachelor",
      taughtIn: "English",
      applicationLink: "https://studenti.unibo.it",
      testRequired: "TOLC-E (restricted access, code 6650).",
      notes: "Code 6650. Campus: Forlì. 3 years. 180 total seats.",
    },
    {
      name: "Statistical Sciences",
      level: "Bachelor",
      taughtIn: "English",
      applicationLink: "https://studenti.unibo.it",
      testRequired: "TOLC-E (restricted access, code 6661).",
      notes: "Code 6661. Campus: Bologna. 3 years. 160 total seats. Double/Multiple degree. Three curricula: Stats and Maths (English); Bio-Demografico and Economia e Impresa may have Italian instruction — verify curriculum language. Call published on studenti.unibo.it.",
    },
    {
      name: "Building Construction Engineering",
      level: "Bachelor",
      taughtIn: "English",
      applicationLink: "https://studenti.unibo.it",
      testRequired: "Restricted access — admission test type TBC per programme call (code 6623).",
      notes: "Code 6623. Campus: Ravenna. 3 years. 250 total seats.",
    },
    {
      name: "Genomics",
      level: "Bachelor",
      taughtIn: "English",
      applicationLink: "https://studenti.unibo.it",
      testRequired: "Restricted access — admission test type TBC per programme call (code 6343).",
      notes: "Code 6343. Campus: Bologna. 3 years. 60 total seats.",
    },
    {
      name: "Biology of Human and Environmental Health",
      level: "Bachelor",
      taughtIn: "English",
      applicationLink: "https://studenti.unibo.it",
      testRequired: "Restricted access — admission test type TBC per programme call (code 5909).",
      notes: "Code 5909. Campuses: Padova and Bologna. 3 years. Joint degree. Seats TBC — check the programme's own call.",
    },
    // ── SINGLE-CYCLE ────────────────────────────────────────────────────────
    {
      name: "Medicine and Surgery",
      level: "Single-Cycle",
      taughtIn: "English",
      applicationLink: "https://studenti.unibo.it",
      testRequired: "National-level restricted access — IMAT (International Medical Admissions Test). Separate national procedure with its own deadlines.",
      notes: "Code 6264. Campus: Bologna. 6 years. 150 total seats. Qualifying programme. Follows national IMAT quota procedures — check the MUR/ministerial circular for IMAT dates.",
    },
    {
      name: "Pharmacy",
      level: "Single-Cycle",
      taughtIn: "English",
      applicationLink: "https://studenti.unibo.it",
      testRequired: "CEnT-S (CISIA English Test – Sciences). Restricted access, code 6342.",
      notes: "Code 6342. Campus: Rimini. 5 years. 100 total seats. Qualifying programme.",
    },
    {
      name: "Veterinary Medicine",
      level: "Single-Cycle",
      taughtIn: "English",
      applicationLink: "https://studenti.unibo.it",
      testRequired: "National-level restricted access — separate national procedure with its own deadlines.",
      notes: "Code 6197. Campus: Ozzano dell'Emilia. 5 years. 50 total seats. Qualifying programme. Follows national veterinary quota procedures.",
    },
    // ── MASTER'S ────────────────────────────────────────────────────────────
    {
      name: "Legal Studies (LEGS)",
      level: "Master",
      taughtIn: "English",
      applicationLink: "https://studenti.unibo.it",
      testRequired: "Selection by qualifications (curriculum evaluation) + interview in English. No TOLC test. Min score 60/100 overall, with min 25/100 on curriculum phase.",
      notes: "Code 6682. Campus: Bologna. Class LM/SC GIUR R. Attendance compulsory. 75 Quota B seats (non-EU resident abroad). €50 admission fee (non-refundable; pay once for both intakes). Two intakes per cycle — see deadlines. ⚠️ A.Y. 2026/27 registration windows have closed (Feb 2026 and May 2026). Monitor the next cycle call on studenti.unibo.it.",
    },
  ],

  languageRequirements: {
    english: {
      minLevel: "B2 (CEFR)",
      acceptedCerts: [
        { name: "TOEFL", minScore: "B2 level — exact cut-off per programme call" },
        { name: "IELTS", minScore: "B2 level — exact cut-off per programme call" },
        { name: "Cambridge (B2 First or higher)" },
        { name: "Trinity College London" },
        { name: "Degree taught entirely in English (counts as B2 proof)" },
        { name: "B2 English exam passed and shown in university transcript" },
        { name: "Native English speaker (declare in application)" },
        { name: "≥2 university courses taught in English (shown in transcript)" },
      ],
      notes:
        "Certificates must be dated on or after 1 January 2021 for LEGS and most programmes. A C1/C2 certificate adds up to 2 bonus points in LEGS Phase 1 curriculum scoring. Exact requirements and minimum scores are in each programme's own Call for Applications — always cross-check.",
    },
  },

  academicRequirements: {
    bachelorYearsOfSchooling: "Minimum 12 years of total schooling (Italian standard). Exact academic pre-requisites vary per programme call.",
    masterRequirements:
      "A bachelor's / 3-year degree or recognised foreign equivalent granting access to second-cycle programmes (EQF level 6 → access to EQF 7 in the country of issue), per the MUR Circular at universitaly.it/studenti-stranieri. For LEGS: must have graduated in an eligible degree class — legal (L-14, LMG/01, equivalent) or non-legal (L-5, L-10, L-11, L-16, L-18, L-20, L-33, L-36, L-37, L-39, L-40, L-42 and DM 509/99 equivalents). Non-legal Italian qualification requires ≥30 CFU in legal subjects.",
    gapFilling: [
      "Foreign qualification formal admissibility is verified by the International Student Administration Office AFTER the first instalment is paid and originals are submitted — not during selection. Substantive eligibility is assessed by the selection committee during the admissions phase.",
      "Sub condicione (LEGS): applicants who will graduate by 31 Dec 2026 may apply; enrolment is auto-cancelled if the degree is not obtained; the Studenti Online career is suspended until the diploma is submitted.",
    ],
    notes:
      "Pre-enrolment on Universitaly is NOT the same as admission — admission requires passing the programme's own selection. Even after admission, paid fees, and a visa, the International Student Administration Office verifies qualification eligibility and document authenticity; enrolment is not confirmed until this verification passes. UNIBO does NOT issue academic-eligibility letters for visa purposes.",
  },

  admissionProcess: {
    nonEuResidingAbroad: [
      {
        title: "Stage 1 — Apply to the programme selection (Studenti Online)",
        detail:
          "Register on Studenti Online (studenti.unibo.it) — use University credentials if you cannot get SPID (Italian digital identity) or CIE. Go to 'Admission application', select the degree type and the specific competition by programme code, upload required PDF documents, and pay the programme's admission fee (e.g. €50 for LEGS). Applications without payment are not processed. Each programme has its own window — check the specific Call for Applications on studenti.unibo.it.",
      },
      {
        title: "Stage 2 — Selection & ranking",
        detail:
          "Selection method varies by programme: qualifications + interview in English (LEGS), TOLC-E test (Business Economics, International Studies, Statistical Sciences), CEnT-S (Pharmacy), national IMAT/veterinary tests (Medicine, Veterinary Medicine), or programme-specific tests. Rankings are published only on Studenti Online — this is the sole means of legal notification. LEGS: Phase 1 curriculum (max 40, min 25 to proceed) + Phase 2 interview (max 60); eligible total ≥60/100.",
      },
      {
        title: "Stage 3 — Pay first instalment (or mono-rata)",
        detail:
          "After admission, pay the first instalment or the single-payment (mono-rata) by the call's deadline. Non-payment equals tacit renunciation regardless of reason — the place is forfeited even if you intended to enrol.",
      },
      {
        title: "Stage 4 — Pre-enrolment on Universitaly (visa)",
        detail:
          "After passing the selection (and paying the first instalment), submit a pre-enrolment on Universitaly (universitaly.it), indicating this UNIBO programme. Once offices validate your pre-enrolment, download the Universitaly summary — this is presented to the Embassy/Consulate for the visa. ⚠️ UNIBO does NOT issue academic-eligibility letters for visa purposes. ⚠️ In August, offices may close for several days; validation can be slower. If the Embassy requires unconditional validation, email the International Student Administration Office before the Embassy appointment.",
      },
      {
        title: "Stage 5 — Visa application (Embassy/Consulate in Algeria)",
        detail:
          "Apply for a Study – University Enrolment (Type D) visa. Bring: validated Universitaly pre-enrolment summary; proof of economic resources (2025 minimum: €7,000.97 — 2026 amount being defined); English language certificate; health insurance; Codice Fiscale forms if the Embassy offers the service; original qualification for translation/legalisation if required; any financial-benefit documentation. A tourism visa cannot be used for enrolment or a study residence permit.",
      },
      {
        title: "Stage 6 — Upload foreign qualification documents (Studenti Online)",
        detail:
          "In the 'Calls' section of Studenti Online, open 'Matriculation for academic year 26-27 – documents upload for international students with foreign qualifications' and upload: qualification documents + student visa copy. Documents used at admission must be translated and have authenticity/value verified where applicable. For unconditional Universitaly validation, email the International Student Administration Office — they check authenticity and value. Bologna campus office for LEGS: International Student Administration Office, Bologna.",
      },
      {
        title: "Stage 7 — Arrival in Italy: residence permit + career activation",
        detail:
          "Apply for a residence permit within 8 days of arrival. Book an appointment at the International Student Administration Office for your campus and bring ORIGINALS: qualification documents, passport, residence-permit application receipt. The office activates your academic career — download an enrolment certificate from Studenti Online. ⚠️ The career MUST be activated by 26 February 2027, or enrolment is cancelled.",
      },
      {
        title: "Stage 8 — Health coverage (SSN — National Health Service)",
        detail:
          "Register with the National Health Service: minimum €700/year on a study residence permit (calendar year only, e.g. 1 Jan–31 Dec); dependants: minimum €2,000/year. Pay via F24: region code 06 (Emilia-Romagna), codice tributo 8846, amount €700 (if scholarship income only). Then activate at an AUSL Sportello Unico (CUP) office and choose a GP.",
      },
    ],
    notes:
      "UNIBO has NO single university-wide admissions guide — each restricted programme has its own Call for Applications with its own seats, deadlines, and selection method. Always read the specific programme call on studenti.unibo.it. The two portals are: Studenti Online (admission application + enrolment) and Universitaly (visa pre-enrolment only). Login requires SPID or CIE; international students without an Italian ID use University credentials.",
  },

  documents: {
    admission: [
      "Completed CV using UNIBO's official 'CV FORM' (published with the programme notice) — required for LEGS; check the specific call for other programmes",
      "Double-sided copy of passport or ID card",
      "Residence permit copy (if already held, non-EU)",
      "Qualification documents: copy of degree/diploma translated into Italian or English granting second-cycle access + full transcript of records + Diploma Supplement where available; if not yet graduated: transcript of exams taken",
      "English proficiency evidence (certificate dated ≥ 1 Jan 2021, or English-medium degree, or B2 exam in transcript, or native speaker declaration)",
      "Request-for-adaptations form (if applicable: +30% extra time for DSA/specific disorders; +50% for civil disability/L.104 — abroad: legalized/apostilled certification + official IT/EN translation)",
      "Programme admission fee payment (e.g. €50 for LEGS — non-refundable, pay once even if applying to both intakes)",
    ],
    enrolment: [
      "Student visa (Type D Study) and passport with entry stamp",
      "Residence permit application receipt (obtained within 8 days of arrival)",
      "Original qualification documents (degree + full transcript) for verification by the International Student Administration Office",
      "Translation and authenticity/value verification of foreign qualifications (where applicable)",
      "Face photo (uploaded during Studenti Online registration step)",
      "First instalment / mono-rata payment proof (paid after admission, before enrolment)",
      "Codice Fiscale (Italian tax code)",
    ],
    notes:
      "Foreign-qualification formal admissibility is verified by the International Student Administration Office AFTER the first instalment is paid and originals are submitted — not during selection. For LEGS specifically: qualification eligibility is assessed substantively by the selection committee during Phase 1; formal admissibility (document authenticity + legal recognition) is verified post-payment.",
  },

  deadlines: [
    {
      what: "LEGS (Legal Studies) A.Y. 2026/27 — 1st intake registration",
      from: "18 December 2025",
      until: "26 February 2026",
      notes: "⚠️ CLOSED — this window has passed for 2026/27.",
    },
    {
      what: "LEGS (Legal Studies) A.Y. 2026/27 — 2nd intake registration",
      from: "9 April 2026",
      until: "14 May 2026",
      notes: "⚠️ CLOSED — this window has passed for 2026/27. Call published 18 Dec 2025.",
    },
    {
      what: "LEGS 2nd intake — ranking published",
      from: "18 June 2026",
      notes: "Enrolment window: 19–29 June 2026. Recovery: 30 Jun–6 Jul (declare) → 7–13 Jul 2026 (enrol).",
    },
    {
      what: "LEGS additional recovery",
      from: "17 July 2026",
      until: "24 July 2026",
      notes: "Final ranking published 17 Jul 2026. Enrolment: 17–24 Jul 2026.",
    },
    {
      what: "ISEE 2026 certificate submission (tuition income declaration)",
      until: "30 October 2026, 18:00",
      notes: "Submit by this date to avoid penalty. Late submission: 16 November 2026, 18:00 with €100 late fee. Failure to submit = full fee amount charged.",
    },
    {
      what: "ISEE 2026 late submission (with penalty)",
      until: "16 November 2026, 18:00",
      notes: "€100 late fee applies. If not submitted by this date, full tuition is charged.",
    },
    {
      what: "Career activation deadline (all enrolled students)",
      until: "26 February 2027",
      notes: "International Student Administration Office must activate the career by this date, or enrolment is cancelled.",
    },
    {
      what: "Bachelor's and other programme calls (§D catalogue)",
      notes: "⏳ Each programme publishes its own Call for Applications on studenti.unibo.it with individual seats, deadlines, and test dates. Check studenti.unibo.it for the A.Y. 2026/27 calls for codes: 6609, 6611, 6646, 6645, 6647, 6614, 6653, 6650, 6661, 6623, 6343, 5909, 6264, 6342, 6197.",
    },
  ],

  tuitionFees: {
    notes:
      "ISEE-based tiered fees — specific annual amounts are not yet confirmed in available source material (⏳). Key rules: full exemption for first-year students with low ISEE; ISEE certificate must be submitted by 30 Oct 2026 (or 16 Nov with €100 late fee) or full amount is charged. SSN health registration is separate: €700/year (calendar year, F24 region code 06, codice tributo 8846). LEGS admission fee: €50 non-refundable. Check the current fee table on studenti.unibo.it.",
  },

  scholarships: [
    {
      name: "ER.GO — Right-to-Study Scholarship (Emilia-Romagna)",
      provider: "ER.GO — Azienda Regionale per il Diritto agli Studi Superiori",
      type: "Regional (income + merit)",
      link: "https://www.er-go.it",
      notes:
        "Regional right-to-study authority for Emilia-Romagna. Benefits for income-eligible students: cash grant, university accommodation, free/discounted canteen. Algerian students require the ISEE Parificato. Amounts and bando deadlines change yearly — check er-go.it. Also handles accommodation requests for UNIBO students.",
    },
    {
      name: "UNIBO First-Year Fee Exemption",
      provider: "Università di Bologna",
      type: "Internal — automatic, income-based",
      notes:
        "Full tuition fee exemption for first-year students with low ISEE. Applied automatically if the ISEE certificate is submitted by the October deadline. Submit ISEE as early as possible.",
    },
    {
      name: "MAECI Italian Government Scholarship",
      provider: "Ministry of Foreign Affairs (MAECI)",
      type: "Government — Master's / PhD / research",
      link: "https://studyinitaly.esteri.it/",
      notes:
        "Algeria is an eligible country. Mainly for Master's, PhD, and research — not Bachelor's. Check the annual call on studyinitaly.esteri.it for AY 2027/28 deadlines.",
    },
  ],

  visaAndArrival: {
    financialProof:
      "2025 minimum: €7,000.97. The 2026 figure is still being defined by the Italian government — confirm the exact amount with the Italian Embassy in Algeria before the appointment.",
    accommodation:
      "ER.GO manages student residences across UNIBO campuses (Bologna, Forlì, Rimini, Ravenna, Cesena). Apply through er-go.it for accommodation — income-eligible students may receive subsidised housing.",
    healthInsurance:
      "Required for the visa application. After arrival: register with the National Health Service (SSN) — €700/year via F24 (region code 06, codice tributo 8846), then activate at an AUSL Sportello Unico (CUP) and choose a GP.",
    residencePermit:
      "Must be requested within 8 days of arrival. Required before the International Student Administration Office appointment — bring the receipt. A tourism visa cannot be used; it does not allow a study residence permit.",
    taxCode:
      "Codice Fiscale required for SSN registration and enrolment. The Embassy may offer the service; otherwise obtain at Agenzia delle Entrate in Italy.",
    notes:
      "Contacts: LEGS programme: dsg.tutorlegs@unibo.it · dsg.legs@unibo.it. Studenti Online technical support: +39 051 2080301 (Mon–Fri 09:00–13:00 & 14:00–17:00) · credenziali.studio@unibo.it. International Desk Bologna: internationaldesk@unibo.it. Disability/SLD: ases.adattamentiammissione@unibo.it. Fees & benefits: ases.contribuzionistudentesche@unibo.it. Head of procedure: Dr. Sabrina Rambaldi.",
  },

  importantNotes: [
    "UNIBO has NO single admissions guide — each restricted programme has its own Call for Applications (own seats, own deadlines, own test). Always read the specific call at studenti.unibo.it.",
    "Every restricted programme at UNIBO reserves a Quota B for non-EU residents abroad — unlike some other universities, Algerian students always have a dedicated seat allocation.",
    "Pre-enrolment on Universitaly is NOT admission. Admission requires passing the programme's selection. A visa, physical presence in Italy, or paid fees do NOT guarantee enrolment — the International Student Administration Office verifies qualification eligibility and document authenticity after payment and after originals are submitted.",
    "UNIBO does NOT issue academic-eligibility letters for visa purposes. The Universitaly pre-enrolment summary (after office validation) is the document for the Embassy.",
    "LEGS A.Y. 2026/27: both registration windows (Feb 2026 and May 2026) are closed. Monitor studenti.unibo.it for the next cycle's call. Advise clients interested in LEGS to prepare early.",
    "ISEE certificate must be submitted by 30 Oct 2026, 18:00 to avoid late fee; by 16 Nov 2026, 18:00 with €100 late fee. Missing both deadlines = full tuition charged automatically.",
    "Career activation deadline is 26 February 2027 — the International Student Administration Office must activate the career by this date or enrolment is cancelled.",
    "A non-EU student who renounces studies after arrival loses their study residence permit and must return home to restart the pre-enrolment process from scratch.",
    "SSN health registration is a separate cost: €700/year (calendar year only). Pay via F24 before activating at the AUSL office.",
    "Admission is assessed on merits per call. Obtaining an admission offer does NOT guarantee a visa; obtaining a visa does NOT guarantee enrolment. All three must succeed independently.",
  ],
};
