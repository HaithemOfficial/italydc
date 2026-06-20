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
    // ── FEE REDUCTIONS & EXEMPTIONS ─────────────────────────────────────────
    {
      name: "ER.GO — Right-to-Study Scholarship (Emilia-Romagna)",
      provider: "ER.GO — Azienda Regionale per il Diritto agli Studi Superiori",
      type: "Regional (income + merit)",
      link: "https://www.er-go.it",
      notes:
        "Regional right-to-study authority for Emilia-Romagna. Benefits for income-eligible students: cash grant (covers living costs), university accommodation in halls of residence, free/discounted canteen meals, transport subsidies. Algerian students require the ISEE Parificato. Amounts and bando deadlines change yearly — check er-go.it. Also handles housing grants for private rentals.",
    },
    {
      name: "Fee Reduction by Economic Situation (ISEE-based)",
      provider: "Università di Bologna — via ER.GO (Emilia-Romagna)",
      type: "Regional (income-based)",
      notes:
        "Tuition fee reductions or waivers based on financial situation are offered through the Region of Emilia-Romagna via ER.GO. Requires ISEE certificate submitted by 30 Oct 2026 (or 16 Nov with €100 late fee). Full exemption possible for low-income students.",
    },
    {
      name: "Reduced Fixed Fee — Non-EU / Non-OECD / Developing Countries",
      provider: "Università di Bologna",
      type: "International student — automatic, citizenship-based",
      notes:
        "A reduced fixed tuition fee applies to citizens of particularly poor and developing countries, or of countries that are not members of both the EU and OECD. Algeria is not an OECD member — Algerian students should verify eligibility for this reduction on the UNIBO fees page (unibo.it). This can be combined with other benefits. Check the current fee table on studenti.unibo.it.",
    },
    {
      name: "Total Merit-Based Fee Exemption — First Year, Second-Cycle",
      provider: "Università di Bologna",
      type: "Internal — merit-based (on-time graduation + top marks)",
      notes:
        "Full fee exemption for students enrolling in the first year of a Master's (second-cycle) programme who graduated on time and with top marks from their Bachelor's. Eligibility criteria are published on unibo.it. Relevant for Algerian students starting a Master's directly after a strong Bachelor's result.",
    },
    {
      name: "Fee Exemption — Students with Disabilities",
      provider: "Università di Bologna",
      type: "Internal — disability-based",
      notes:
        "Full fee exemption for students with a certified civil disability of 66% or more, or certified under Law 104/92. Must submit the relevant certification to the university.",
    },
    {
      name: "Fee Exemption — Parent on Disability Pension (Law 118/1971)",
      provider: "Università di Bologna",
      type: "Internal — family-situation-based",
      notes:
        "Full fee waiver available if a parent receives a disability pension under Law 118/1971. Documentation of the pension must be submitted.",
    },
    {
      name: "Fee Exemption — Students Who Become Parents",
      provider: "Università di Bologna",
      type: "Internal — family-situation-based",
      notes:
        "Tuition fees can be waived for students who become a mother or father during the academic year. Apply through the university's student benefits office.",
    },
    {
      name: "20% Fee Reduction — Family Member Also at University",
      provider: "Università di Bologna",
      type: "Internal — family-situation-based",
      notes:
        "Students who have another family member simultaneously enrolled at an Italian university qualify for a 20% fee reduction.",
    },
    {
      name: "Fee Waiver — Members of Religious Orders",
      provider: "Università di Bologna",
      type: "Internal — special status",
      notes:
        "Permanent members of a recognised religious order who are entirely financially supported by that order may qualify for a full tuition fee waiver.",
    },
    // ── SCHOLARSHIPS ─────────────────────────────────────────────────────────
    {
      name: "\"150 Hours\" Collaboration Study Grant",
      provider: "Università di Bologna",
      type: "Internal — part-time collaboration (income + merit)",
      notes:
        "Students work approximately 150 hours per year in university services or projects in exchange for a financial grant. Combines work experience with financial support. Call published yearly on unibo.it.",
    },
    {
      name: "Study Grant for Students in Difficulty",
      provider: "Università di Bologna",
      type: "Internal — hardship-based",
      notes:
        "Scholarships for students experiencing particular personal, family, or economic difficulties. Call for applications is usually published in September. Check unibo.it in September each year.",
    },
    {
      name: "International Mobility Scholarship",
      provider: "Università di Bologna",
      type: "Internal — mobility/thesis abroad",
      notes:
        "Financial support for UNIBO students who spend a period studying or writing their thesis abroad (beyond standard Erasmus+). Check unibo.it for the annual call.",
    },
    {
      name: "Scholarships and Study Awards (General Calls)",
      provider: "Università di Bologna — various donors",
      type: "Internal/External — merit or topic-specific",
      notes:
        "Various scholarships and awards are granted throughout the year, funded by the university or external partners. Calls are published continuously on unibo.it — check regularly.",
    },
    {
      name: "MAECI Italian Government Scholarship",
      provider: "Ministry of Foreign Affairs (MAECI)",
      type: "Government — Master's / PhD / research",
      link: "https://studyinitaly.esteri.it/",
      notes:
        "Algeria is an eligible country. Mainly for Master's, PhD, and research — not Bachelor's. Check the annual call on studyinitaly.esteri.it for AY 2027/28 deadlines.",
    },
    {
      name: "Scholarship for Students from Conflict or Discriminatory-Policy Countries",
      provider: "Università di Bologna",
      type: "International student — humanitarian",
      notes:
        "UNIBO supports students enrolling from countries where conflict, discriminatory policies, or other causes make university access difficult or impossible for a significant part of the population. Check if Algeria qualifies under the current call on unibo.it.",
    },
    // ── CONCESSIONS & PERKS ──────────────────────────────────────────────────
    {
      name: "University Accommodation (ER.GO Halls of Residence)",
      provider: "ER.GO — Emilia-Romagna",
      type: "Regional — income-based housing",
      link: "https://www.er-go.it",
      notes:
        "ER.GO manages student halls of residence across UNIBO campuses (Bologna, Forlì, Rimini, Ravenna, Cesena). Income-eligible students can also receive rent grants for private accommodation. Apply through er-go.it — deadlines are set yearly.",
    },
    {
      name: "Discounted Canteen Meals",
      provider: "Università di Bologna / ER.GO",
      type: "Internal — subsidised meals",
      notes:
        "University canteens and participating restaurants offer discounted meals to UNIBO students. ER.GO scholarship holders may eat free or at reduced rates.",
    },
    {
      name: "Discounted Public Transport Passes",
      provider: "Università di Bologna",
      type: "Internal — transport subsidy",
      notes:
        "UNIBO students can purchase public transport season passes at special student prices in Bologna, Cesena, Forlì, Ravenna, and Rimini. Check unibo.it for the current procedure.",
    },
    {
      name: "Free Software Licences",
      provider: "Università di Bologna",
      type: "Internal — digital benefit",
      notes:
        "Enrolled students are eligible for free licences for: Matlab, Prezi, Stata SE, Microsoft 365, and Mathematica. Claim through the UNIBO IT services portal.",
    },
    {
      name: "Peer Tutoring Grant",
      provider: "Università di Bologna",
      type: "Internal — collaboration/tutoring",
      notes:
        "Students can apply to become paid course tutors, supporting fellow students while earning a grant and gaining teaching experience. Calls published on unibo.it.",
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

    residencePermitProcedure: {
      costs: [
        { item: "Revenue stamp (marca da bollo)", cost: "€16.00 — buy 2 if also collecting a certificate at an office (one for the form, one for the certificate)" },
        { item: "Post office payment slips", cost: "€30.46 + €40.00" },
        { item: "Insured mail (shipping the kit)", cost: "€30.00" },
        { item: "SSN registration (if not using private insurance)", cost: "€700/yr · dependants €2,000/yr · calendar year only" },
        { item: "Economic-resources proof (minimum)", cost: "€7,000.97 (2025 figure — 2026 amount still being defined)" },
      ],

      firstIssuanceSteps: [
        {
          step: "Step 1 — Prepare documents (copy everything; keep originals)",
          detail:
            "• Certificate of enrolment from Studenti Online (self-certifications NOT accepted) with a €16 revenue stamp. Bachelor's/Master's/single units: download from Studenti Online once the career is activated, or collect from the Student Administration Office on enrolment. (Professional Master: master@unibo.it · PhD: aform.udottricerca@unibo.it · non-medical specialisation: aform.specnonmed@unibo.it · medical specialisation: sam.carrieremfs@unibo.it.) If enrolment is not yet complete, print the Universitaly pre-enrolment summary to start the permit now — once you have the real certificate, send it to the Questura by PEC and bring it to the biometric appointment.\n• Health coverage: copy of private insurance or SSN registration receipt.\n• Passport copy: pages with personal data, visa, Italy entry stamp, and any other visas / entry–exit stamps (skip blank pages).\n• Economic-resources proof (min €7,000.97): visa documents, or a bank/postal statement, or an official scholarship letter showing amount and duration.\n• Accommodation proof in Italy.",
        },
        {
          step: "Step 2 — Obtain and fill in the application kit",
          detail:
            "The kit contains an envelope, forms, and a payment slip. You can get it at a Sportello Amico post office, or with campus-specific help:\n• Bologna: email ases.bolognapermit@unibo.it from your @studio.unibo.it address → within 3 working days you receive the assigned service centre and appointment. First-year students: the International Student Administration Office Bologna provides a tutor during the enrolment period.\n• Ravenna: Immigration Office, Town Council (Mon–Thu, no appointment) · or Via A. Baccarini 27, Tue morning / Thu afternoon by appointment: accoglienzastranieri@comune.ra.it.\n• Rimini: Foreign Citizens Front Office, Town Council.\n• Cesena: Cesena Town Council.\n• Forlì: Service Centre for the Integration and Inclusion of Migrants.\nOn the forms, enter Italian contact details: city, street, name on the doorbell, name on the mailbox, and your Italian mobile number.",
          warning:
            "Missing or incomplete documents can add several months to processing.",
        },
        {
          step: "Step 3 — Send the application at a Sportello Amico post office",
          detail:
            "Bring: the completed kit, a €16 revenue stamp, and your original passport. Pay the two slips (€30.46 + €40.00). Complete the insured-mail form with your Italian address and pay €30.00 for shipping. You receive: a Questura appointment date (for biometrics) and an application receipt — keep both and a copy of the receipt on you at all times as proof of application for police checks.",
          warning:
            "Sign the first page of the kit ONLY in front of the post-office operator — not before.",
        },
        {
          step: "Step 4 — Send the receipt to UNIBO",
          detail:
            "From your @studio.unibo.it email address, send the application receipt to your campus student administration office (Bologna / Cesena / Forlì / Ravenna / Rimini). They activate conditional enrolment: your career is live for 180 days — you can obtain certificates and sit exams during this window.",
        },
        {
          step: "Step 5 — Questura biometric appointment",
          detail:
            "Bring: original passport, 4 recent identical passport photos (white background), the original application-delivery receipt, and the post-office paper showing the appointment date. You receive a code to track the permit application on the State Police website (enter the code or the insured-mail number). If you are handed a document citing \"art.10 bis Legge no. 241/90\", you must supplement the file with extra documents or comments within 10 days by PEC to the relevant Questura (Bologna / Ravenna / Rimini / Forlì / Cesena).",
        },
        {
          step: "Step 6 — Collect the permit (~3–4 months after biometrics)",
          detail:
            "Check readiness on the State Police website. Bologna: book a pick-up slot online, print the booking, and bring it. Other cities: check the Questura's specific pick-up method. Keep a copy of the permit once collected.",
        },
        {
          step: "Step 7 — Send the permit copy to UNIBO",
          detail:
            "Send front and back via the Virtual Desk \"Contact us\" form or from @studio.unibo.it to your campus office. Rimini-specific email: campusrimini.internationaldesk@unibo.it.",
          warning:
            "If the permit copy is not submitted, 180 days after the permit application the career is temporarily blocked — no exams can be taken.",
        },
      ],

      ssnNotes: [
        "€700/year, voluntary, covers you only (not family), calendar year (1 Jan–31 Dec) — even for a stay shorter than one year. Dependants: €2,000/year.",
        "You can pay two years at once (e.g. 2026 + 2027 = two separate F24 payments) to cover a full academic year — especially useful for September arrivals on a 1-year study permit.",
        "Pay via F24: contribuente section (your data) → sezione regioni → region code 06 (Emilia-Romagna) · codice tributo 8846 · anno di riferimento (e.g. 2026) · importi a debito versati €700. Submit two separate F24 forms if paying two years.",
        "Payment alone does NOT activate coverage. After submitting the permit application, go to an AUSL Sportello Unico (CUP) with: passport, codice fiscale, enrolment certificate, F24 payment receipts, and the postal receipt of the permit application. Bologna CUP also requires the non-EU registration form. Choose a GP. The Health Card (tessera sanitaria) arrives by post to the address held by the Revenue Agency (Agenzia delle Entrate).",
      ],

      renewal: {
        overview:
          "Study residence permits last up to 12 months. Duration is tied to the health-insurance/SSN period and academic year — e.g. enrolled for a.y. 2026/27 means the permit can be issued at most until 31 March 2028. Programmes longer than 12 months require annual renewal. The permit cannot be renewed more than 3 years beyond the programme's normal duration (for Bachelor's / Master's / single-cycle).",
        prerequisites: [
          "Apply at least 60 days before the permit expiry date.",
          "Renewed health insurance or SSN for the new period.",
          "Enrolled in the next academic year, with exams passed and recorded on Studenti Online: at least 1 exam after the first year; at least 2 exams per year from the second year onward.",
          "OFA units, CLA Italian-language courses, partial tests, and single parts of integrated exams do NOT count toward the exam requirement.",
          "PhD students: must have been admitted by the Academic Board to the next year of the doctorate.",
        ],
        documentsNote:
          "Same document set as first issuance, plus the expiring permit. Download the enrolment certificate with passed exams from Studenti Online: Certificates and self-certifications → \"Iscrizione con esami, date e voti\" → Certified (leave 'Purpose of the certificate' empty) → Next. Affix a €16 revenue stamp. Self-certifications are NOT accepted for this certificate. The rest of the process — kit, post office (same costs), sending the receipt to UNIBO for 180-day conditional career, Questura biometrics, ~3–4 month collection, and sending the permit copy — is identical to first issuance.",
      },
    },
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
