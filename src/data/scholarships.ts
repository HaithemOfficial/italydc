// ─────────────────────────────────────────────────────────────────────────────
// Scholarships data — all content sourced from:
//   • Scholarships_Italy_Algeria_general_guide.md  → guide.*
//   • Scholarships_DC_agent_playbook.md            → playbook.*
//
// To update content (amounts, deadlines, caps): edit this file only.
// ─────────────────────────────────────────────────────────────────────────────

export const REFERENCE_YEAR_BANNER =
  "Figures are AY 2025/26 (regional) / AY 2026/27 (MAECI) and change yearly — confirm the current bando before advising.";

// ─── GUIDE TAB ────────────────────────────────────────────────────────────────

export interface LayerRow {
  num: number;
  source: string;
  runBy: string;
  bestFor: string;
  basedOn: string;
  summary: string;
}

export interface RegionalAgency {
  region: string;
  agency: string;
  links: { label: string; url: string }[];
  note?: string;
}

export interface SourceLink {
  label: string;
  url: string;
}

export interface SourceGroup {
  layer: string;
  description: string;
  links: SourceLink[];
}

export interface GuideData {
  layers: LayerRow[];
  visaWarning: string;
  layer1: {
    title: string;
    benefits: string[];
    incomeGate: string;
    meritNote: string;
    iseeParificato: {
      intro: string;
      steps: string[];
      bottleneckWarning: string;
    };
    timingWarning: string;
    timingPoints: string[];
    steps: { num: number; text: string }[];
    documents: string[];
  };
  layer2: {
    title: string;
    intro: string;
    forms: { title: string; description: string }[];
    practicalNote: string;
  };
  layer3: {
    title: string;
    amount: string;
    duration: string;
    alsoIncludes: string[];
    levels: string;
    applyUrl: string;
    deadline: string;
    extraDocsDeadline: string;
    language: string;
    decisionNote: string;
  };
  regionalAgencies: RegionalAgency[];
  andisu: { label: string; url: string };
  keyLinks: SourceLink[];
  sources: SourceGroup[];
}

export const guideData: GuideData = {
  layers: [
    {
      num: 1,
      source: "Regional \"Right to Study\" scholarship (DSU)",
      runBy: "The regional agency of the university's region",
      bestFor: "Almost everyone, incl. 1st-year Bachelor's",
      basedOn: "Family income (ISEE) + merit",
      summary:
        "The main route. Can give free tuition + cash grant + housing + meals. Layers 1 and 2 stack for most students.",
    },
    {
      num: 2,
      source: "University's own fee reduction & scholarships",
      runBy: "Each university",
      bestFor: "Everyone (often automatic)",
      basedOn: "Country income band / ISEE / merit",
      summary:
        "Low country-band fee plus ISEE or merit reductions. Stacks on top of the regional DSU scholarship.",
    },
    {
      num: 3,
      source: "MAECI Italian Government scholarship",
      runBy: "Ministry of Foreign Affairs",
      bestFor: "Master's / PhD / research",
      basedOn: "Merit, competitive",
      summary:
        "National scholarship, mostly graduate-level. Algeria is an eligible country. Apply at studyinitaly.esteri.it.",
    },
  ],

  visaWarning:
    "No scholarship replaces the visa money. Regional results arrive in autumn, after the visa is issued. The student must still show ~€10,179.85 financial means for the visa, scholarship or not.",

  layer1: {
    title: "Layer 1 — Regional \"Right to Study\" Scholarship (DSU)",
    benefits: [
      "Full waiver of university tuition and the regional study tax",
      "A cash grant (amount depends on income and on living status: in sede / pendolare / fuori sede, the last being highest — typically a few thousand euros/year)",
      "Accommodation in a student residence or a housing contribution",
      "Free or discounted canteen meals",
      "Often international mobility top-ups",
    ],
    incomeGate:
      "The family's ISEE and ISPE must be under the regional caps. National maximum for 2025/26: ISEE €27,948.60 / ISPE €60,757.87. Regions may set lower caps (e.g. Sicily uses €22,750 / €52,000). A family can qualify in one region and be over the line in another.",
    meritNote:
      "For first-year students it's essentially income-only (some calls require a high-school average ≥ 70/100). From the 2nd year a minimum number of credits (CFU) is required to keep it.",
    iseeParificato: {
      intro:
        "Because the family's income/assets are in Algeria, the student cannot get a normal Italian ISEE and must obtain an ISEE Parificato (ISEEUP). This is calculated only at a CAF \"convenzionato\" (a tax-assistance centre partnered with the regional agency) — often free for applicants.",
      steps: [
        "Gather documents issued/legalised by the Italian Embassy/Consulate in Algeria and translated into Italian, covering: full family composition, each member's gross 2024 income (or no-income statement), property owned at 31 Dec 2024 + movable assets, and any rent paid.",
        "Take them to a CAF partnered with the relevant regional agency (free for scholarship applicants).",
        "The CAF issues the ISEE Parificato (ISEEUP) — the number the agency/university uses to judge income.",
        "Submit/upload it before the ISEEUP deadline (separate from the application deadline).",
      ],
      bottleneckWarning:
        "Start at least 6–8 weeks early — Embassy issuance + translation is the bottleneck.",
    },
    timingWarning:
      "Bandi typically open ~June and close ~July–September — before the visa. The agency lets international students apply by the main deadline, then complete documents (ISEEUP, residence permit) later under extended deadlines. The student must submit the scholarship application by the bando deadline even while still in Algeria. Missing it = no scholarship that year.",
    timingPoints: [
      "The DSU scholarship has a separate deadline from university enrolment.",
      "A student can usually apply before being fully enrolled/arrived.",
      "Bandi open ~June and close ~July–September, i.e. before the visa.",
      "International students may complete ISEEUP and residency documents under extended deadlines after arrival.",
    ],
    steps: [
      { num: 1, text: "Identify the university → region → regional agency (see directory below) and open the current bando." },
      { num: 2, text: "Register on the agency portal (international students get agency credentials; a one-time in-person \"de visu\" ID check at a partner CAF may be needed on first access)." },
      { num: 3, text: "Submit the benefits application before the deadline — even before the visa/arrival." },
      { num: 4, text: "Get the ISEE Parificato at a partner CAF using the Embassy-issued, translated documents, by its deadline." },
      { num: 5, text: "Complete the file after arrival: residence permit (or its request receipt), Italian IBAN, finalise enrolment, PEC email if required." },
      { num: 6, text: "Watch the rankings (graduatorie) on the portal — that's the official notice; no personal email is sent." },
      { num: 7, text: "Get paid — usually a first installment ~Nov–Dec, the second later and conditional on credits." },
    ],
    documents: [
      "Valid passport",
      "Codice fiscale",
      "University enrolment",
      "ISEE Parificato (ISEEUP) + Embassy-issued translated income/family/property docs",
      "Residence permit or request receipt",
      "Italian IBAN (can add before first payment)",
      "PEC email (some regions)",
    ],
  },

  layer2: {
    title: "Layer 2 — University's Own Fee Reductions & Scholarships",
    intro:
      "Separate from the regional DSU, each university sets its own help. Always check the university's \"Fees & funding / Scholarships for international students\" page.",
    forms: [
      {
        title: "Country-income-band tuition",
        description:
          "Non-EU students pay a low fixed fee set by their country's World Bank income group. Some universities charge only a few hundred euros/year for students from lower-income countries. Algeria usually lands in the lowest band.",
      },
      {
        title: "ISEE / ISEE-Parificato-based reductions",
        description:
          "Lower fees for low-income families. Uses the same ISEEUP as Layer 1.",
      },
      {
        title: "Merit / \"no-tax-area\" thresholds",
        description:
          "Automatic exemptions below an income line, plus merit awards and full fee waivers for top applicants.",
      },
      {
        title: "Welcome / international scholarships",
        description:
          "Some universities offer their own cash awards or first-year waivers for international enrollees.",
      },
    ],
    practicalNote:
      "An Algerian student often gets a low country-band fee from the university and can win the regional DSU scholarship on top — confirm both on the university's pages.",
  },

  layer3: {
    title: "Layer 3 — MAECI Italian Government Scholarship",
    amount: "€10,800",
    duration: "9-month grant, paid in 3 installments of €3,600",
    alsoIncludes: [
      "Health/accident insurance for the grant period",
      "Possible tuition exemption depending on the university (regional fees still due)",
      "€3,600 for 3-month Italian language/culture courses (separate track)",
    ],
    levels:
      "Mainly Master's, PhD, AFAM (arts/music/dance), research, and Italian language & culture. Bachelor's is generally not covered — first-degree clients should rely on Layers 1–2.",
    applyUrl: "https://studyinitaly.esteri.it/",
    deadline: "26 March 2026, 14:00 Rome time (AY 2026/27)",
    extraDocsDeadline: "1 July 2026",
    language: "B2 Italian or English, depending on the course.",
    decisionNote:
      "A winners/reserves list is published by the Italian diplomatic mission; winners accept an awarding letter.",
  },

  regionalAgencies: [
    {
      region: "Lazio",
      agency: "DiSCo Lazio",
      links: [{ label: "laziodisco.it", url: "https://laziodisco.it" }],
    },
    {
      region: "Sicily",
      agency: "ERSU (separate per city: Palermo, Catania, Messina, Enna)",
      links: [
        { label: "ersupalermo.it", url: "https://ersupalermo.it" },
        { label: "ersucatania.it", url: "https://ersucatania.it" },
        { label: "ersumessina.it", url: "https://ersumessina.it" },
      ],
    },
    {
      region: "Abruzzo",
      agency: "ADSU (per university: Teramo, Chieti-Pescara, L'Aquila)",
      links: [
        { label: "adsuteramo.it", url: "https://adsuteramo.it" },
        { label: "adsuchietipescara.it", url: "https://adsuchietipescara.it" },
      ],
    },
    {
      region: "Piedmont",
      agency: "EDISU Piemonte",
      links: [{ label: "edisu.piemonte.it", url: "https://edisu.piemonte.it" }],
    },
    {
      region: "Lombardy",
      agency: "Mostly university-managed DSU (Pavia = EDiSU Pavia)",
      links: [],
      note: "Check each university's site",
    },
    {
      region: "Liguria",
      agency: "ALISEO",
      links: [{ label: "aliseo.liguria.it", url: "https://aliseo.liguria.it" }],
    },
    {
      region: "Veneto",
      agency: "ESU (Padova / Venezia / Verona)",
      links: [
        { label: "esu.pd.it", url: "https://esu.pd.it" },
        { label: "esuvenezia.it", url: "https://esuvenezia.it" },
        { label: "esu.vr.it", url: "https://esu.vr.it" },
      ],
    },
    {
      region: "Friuli-Venezia Giulia",
      agency: "ARDIS",
      links: [{ label: "ardiss.fvg.it", url: "https://ardiss.fvg.it" }],
    },
    {
      region: "Emilia-Romagna",
      agency: "ER.GO",
      links: [{ label: "er-go.it", url: "https://er-go.it" }],
    },
    {
      region: "Tuscany",
      agency: "DSU Toscana",
      links: [{ label: "dsu.toscana.it", url: "https://dsu.toscana.it" }],
    },
    {
      region: "Umbria",
      agency: "ADISU Umbria",
      links: [{ label: "adisu.umbria.it", url: "https://adisu.umbria.it" }],
    },
    {
      region: "Marche",
      agency: "ERDIS Marche",
      links: [{ label: "erdis.it", url: "https://erdis.it" }],
    },
    {
      region: "Campania",
      agency: "ADISURC",
      links: [{ label: "adisurc.it", url: "https://adisurc.it" }],
    },
    {
      region: "Puglia",
      agency: "ADISU Puglia",
      links: [{ label: "adisupuglia.it", url: "https://adisupuglia.it" }],
    },
    {
      region: "Sardinia",
      agency: "ERSU (Cagliari / Sassari)",
      links: [{ label: "ersucagliari.it", url: "https://ersucagliari.it" }],
    },
    {
      region: "Calabria / Molise / Basilicata",
      agency: "Region/university-specific",
      links: [{ label: "ANDISU list", url: "https://www.andisu.it/homepage/enti-organismi-del-dsu/" }],
      note: "Via ANDISU list",
    },
  ],

  andisu: {
    label: "ANDISU — authoritative directory of all regional agencies",
    url: "https://www.andisu.it/homepage/enti-organismi-del-dsu/",
  },

  keyLinks: [
    { label: "ANDISU — all regional agencies", url: "https://www.andisu.it/homepage/enti-organismi-del-dsu/" },
    { label: "MAECI / Italian Government scholarship", url: "https://studyinitaly.esteri.it/" },
    { label: "MAECI scholarships (Farnesina)", url: "https://www.esteri.it/en/opportunita/borse-di-studio/" },
    { label: "Universitaly (find courses & pre-enrolment)", url: "https://www.universitaly.it/" },
    { label: "CIMEA (foreign-qualification recognition)", url: "https://www.cimea.it/EN/" },
  ],

  sources: [
    {
      layer: "Layer 1 — Regional DSU Scholarship",
      description:
        "The real source for any student is the regional agency's current bando. Workflow: find the agency → read its bando.",
      links: [
        { label: "ANDISU — finds every regional agency", url: "https://www.andisu.it/homepage/enti-organismi-del-dsu/" },
        { label: "DiSCo Lazio (primary source)", url: "https://laziodisco.it/" },
        { label: "ERSU Palermo (primary source)", url: "https://www.ersupalermo.it/" },
        { label: "ADSU Teramo (primary source)", url: "https://www.adsuteramo.it/" },
        { label: "MUR — national framework & max ISEE/ISPE thresholds", url: "https://www.mur.gov.it/it/aree-tematiche/universita/diritto-allo-studio" },
        { label: "INPS — ISEE / ISEE Parificato", url: "https://www.inps.it/" },
      ],
    },
    {
      layer: "Layer 2 — University's Own Fees & Scholarships",
      description:
        "No national source — each university's own page is the authority. Find it under students/international → \"fees & funding\" / \"tasse e contributi\" and read the university's contribution regulation (regolamento tasse) PDF.",
      links: [
        { label: "UniPa fees", url: "https://www.unipa.it/mobilita/en/new-students/tuition-fees/" },
        { label: "Cassino fees & funding", url: "https://www.unicas.it/international-unicas/why-choose-us/fees-and-fundings/" },
        { label: "Teramo fees", url: "https://www.unite.it/UniTE/Tasse" },
      ],
    },
    {
      layer: "Layer 3 — MAECI Government Scholarship",
      description:
        "Single official channel. Trust the esteri.it call over any blog or news site.",
      links: [
        { label: "Study in Italy portal (info + apply + yearly calls)", url: "https://studyinitaly.esteri.it/" },
        { label: "Call list", url: "https://studyinitaly.esteri.it/en/ListaBandi" },
        { label: "MAECI scholarships (Farnesina)", url: "https://www.esteri.it/en/opportunita/borse-di-studio/" },
        { label: "Italian Embassy in Algeria", url: "https://ambalgeri.esteri.it/" },
      ],
    },
    {
      layer: "Cross-cutting (all three)",
      description: "General portals useful regardless of which layer you are working on.",
      links: [
        { label: "Universitaly — international students, courses, pre-enrolment", url: "https://www.universitaly.it/studenti-stranieri" },
        { label: "CIMEA — qualification recognition (DOV / Statement of Comparability)", url: "https://www.cimea.it/EN/" },
      ],
    },
  ],
};

// ─── PLAYBOOK TAB ─────────────────────────────────────────────────────────────

export interface PlaybookPhaseStep {
  text: string;
  warning?: boolean;
}

export interface PlaybookPhase {
  id: string;
  title: string;
  timing: string;
  steps: PlaybookPhaseStep[];
}

export interface UniversityQuickCard {
  name: string;
  agency: string;
  region: string;
  portalUrl: string;
  portalLabel: string;
  deadline: string;
  iseeCaps: string;
  benefits: string;
  partnerCaf?: string;
  extraLinks?: { label: string; url: string }[];
}

export interface PlaybookData {
  firstConversationPoints: string[];
  trackNote: string;
  tracks: { level: string; plan: string }[];
  phases: PlaybookPhase[];
  masterDocuments: { text: string; warning?: boolean }[];
  quickCards: UniversityQuickCard[];
  maeci: {
    amount: string;
    duration: string;
    eligibleNote: string;
    levels: string;
    applyUrl: string;
    deadline: string;
    extraDocsDeadline: string;
    language: string;
  };
  killerMistakes: { num: number; text: string }[];
  agentLinks: SourceLink[];
  sources: SourceGroup[];
}

export const playbookData: PlaybookData = {
  firstConversationPoints: [
    "The main scholarship is income-based (the borsa di studio per il diritto allo studio / DSU). If the family income is low, the odds are good. It can give free tuition + a cash grant + housing + free meals.",
    "It is NOT instant and NOT guaranteed before travel. Results come out in autumn, after the visa. The client still needs the full visa money (~€10,179.85). The scholarship does not replace it.",
    "We must apply early — before you arrive in Italy. Deadlines are in summer.",
    "The slow part is the Algerian Embassy paperwork for the income certificate (ISEE Parificato). We start it immediately.",
    "Keeping the scholarship means passing exams (credits/CFU) every year.",
  ],

  trackNote: "Two scholarships exist; pick the right track:",
  tracks: [
    {
      level: "Bachelor's client",
      plan: "Regional DSU scholarship + the university's own low fee. (Primary plan.)",
    },
    {
      level: "Master's / PhD client",
      plan: "The above plus the MAECI government scholarship (separate, March deadline).",
    },
  ],

  phases: [
    {
      id: "phase-1",
      title: "Phase 1 — Qualify & Set Up",
      timing: "Day 1–3",
      steps: [
        { text: "Confirm the university and its region → find the regional agency (use the ANDISU directory link below)." },
        { text: "Open the agency's current bando and record the 4 dates: application deadline · ISEE Parificato (ISEEUP) deadline · enrolment deadline · ranking dates." },
        { text: "Rough income check: is the family ISEE/ISPE likely under the cap? (National → €27,948.60 / €60,757.87; Sicily lower at €22,750 / €52,000.) If clearly far above, set expectations honestly." },
        { text: "Note the student's level (Bachelor / Master) → decide if MAECI also applies." },
      ],
    },
    {
      id: "phase-2",
      title: "Phase 2 — Algerian Embassy Documents",
      timing: "Start IMMEDIATELY — this is the bottleneck",
      steps: [
        { text: "Family composition (full name + date of birth of every household member)" },
        { text: "Gross 2024 income of each member (or an official \"no income\" statement)", warning: false },
        { text: "Property owned as of 31 December 2024 (with surface area) + any savings/movable assets" },
        { text: "Any rent the family pays for the home" },
        { text: "Budget 6–8 weeks. Chasing these late is the #1 reason Algerian clients lose the scholarship.", warning: true },
      ],
    },
    {
      id: "phase-3",
      title: "Phase 3 — Build the ISEE Parificato (ISEEUP)",
      timing: "After Phase 2 documents are ready",
      steps: [
        { text: "Take the Embassy documents to a CAF that is partnered (\"convenzionato\") with the regional agency — the partner-CAF list appears inside the ISEEUP procedure on the agency portal. For ERSU Palermo: CAF UIL, Via Giuseppe Mancino 34, Palermo — free for applicants, tel +39 091 6572064 / WhatsApp +39 339 4726126." },
        { text: "The CAF issues the ISEE Parificato (ISEEUP) — this is the income number the agency uses." },
        { text: "Make sure it's the ISEE \"for university right-to-study benefits\" (per le prestazioni per il diritto allo studio) — an ordinary ISEE is rejected.", warning: true },
      ],
    },
    {
      id: "phase-4",
      title: "Phase 4 — Submit the Scholarship Application",
      timing: "Before the deadline — even pre-visa",
      steps: [
        { text: "Register the client on the agency portal (international students get agency credentials; a one-time in-person \"de visu\" ID check at a partner CAF may be required on first login)." },
        { text: "Complete and SEND the benefits application (richiesta benefici) before the bando deadline." },
        { text: "Add the IBAN if the client already has an Italian account (can be added later, before the first payment)." },
        { text: "Once the application is sent it may lock — double-check names match the passport exactly, and that all data is correct before sending.", warning: true },
      ],
    },
    {
      id: "phase-5",
      title: "Phase 5 — After Arrival in Italy",
      timing: "Within 8 working days of arrival",
      steps: [
        { text: "Residence permit (permesso di soggiorno): apply within 8 working days of arrival; upload the permit OR the post-office receipt to the portal." },
        { text: "Open an Italian bank account → add the IBAN to the application." },
        { text: "Finalise university enrolment (the agency cross-checks enrolment)." },
        { text: "Add a PEC email if the region requires it." },
        { text: "Upload any remaining documents before the extended international-student deadline (e.g. ERSU Palermo extended to 1 Dec for visa-delayed students; DiSCo Lazio ISEEUP by 10 Dec)." },
      ],
    },
    {
      id: "phase-6",
      title: "Phase 6 — Track the Decision & Get Paid",
      timing: "~November–December (first installment)",
      steps: [
        { text: "Monitor the rankings (graduatorie) in the client's portal area — this is the only official notification; no email is sent. Check weekly around the published ranking dates.", warning: true },
        { text: "Statuses: idoneo (eligible/winner) · escluso (excluded) · sospeso (on hold, fix the flagged issue)." },
        { text: "If wrongly excluded → file a riesame (review/appeal) through the portal within the bando's deadline." },
        { text: "Payments: usually a first installment ~Nov–Dec, the second later and conditional on credits. (Some regions pay the 1st installment in November if the file is regularised by ~30 Oct.)" },
      ],
    },
    {
      id: "phase-7",
      title: "Phase 7 — Keep It Next Year",
      timing: "Tell the client now",
      steps: [
        { text: "First-year holders must earn a minimum number of credits (CFU) by a set date (e.g. 20 CFU by 10 August in Lazio). Miss it → partial or full clawback (they may have to repay).", warning: true },
        { text: "Re-apply each year and renew the ISEEUP." },
      ],
    },
  ],

  masterDocuments: [
    { text: "Valid passport (names exactly as everywhere else)" },
    { text: "Embassy-legalised + Italian-translated: family composition · 2024 income (each member) · property at 31/12/2024 · rent", warning: false },
    { text: "ISEE Parificato (ISEEUP) — \"for diritto allo studio\"", warning: true },
    { text: "Codice fiscale" },
    { text: "University enrolment / pre-enrolment proof" },
    { text: "Residence permit or its application receipt" },
    { text: "Italian IBAN" },
    { text: "PEC email (some regions)" },
    { text: "For recognition at enrolment: DOV or CIMEA Statement of Comparability + Verification" },
  ],

  quickCards: [
    {
      name: "University of Teramo",
      agency: "ADSU Teramo",
      region: "Abruzzo",
      portalUrl: "https://www.adsuteramo.it/",
      portalLabel: "adsuteramo.it",
      deadline: "August – 15 September 2025, 13:00",
      iseeCaps: "National (€27,948.60 / €60,757.87) — confirm in bando",
      benefits:
        "No own dorms — a ~€1,500 housing contribution for fuori sede winners; from 2nd year: auto tuition + regional-tax exemption + free meals",
      extraLinks: [
        { label: "Bando page", url: "https://www.unite.it/UniTE/Home/Bando_di_concorso_2025_2026_per_borse_di_studio_ADSU" },
      ],
    },
    {
      name: "University of Palermo",
      agency: "ERSU Palermo",
      region: "Sicily",
      portalUrl: "https://studenti.ersupalermo.it/",
      portalLabel: "studenti.ersupalermo.it",
      deadline: "5 June – 22 July 2025, 14:00; docs by 10 Sep; visa-delayed extension to 1 Dec 2025",
      iseeCaps: "€22,750 / €52,000 (lower than national)",
      benefits: "Tuition exemption + dorm Oct–Jul + free meals + possible cash",
      partnerCaf: "CAF UIL, Via Giuseppe Mancino 34, Palermo (free)",
      extraLinks: [
        { label: "ERSU Palermo info", url: "https://www.ersupalermo.it/" },
        { label: "UniPa scholarships", url: "https://www.unipa.it/mobilita/new-students/scholarship-for-international-students/" },
      ],
    },
    {
      name: "University of Cassino",
      agency: "DiSCo Lazio",
      region: "Lazio",
      portalUrl: "https://laziodisco.it/",
      portalLabel: "laziodisco.it",
      deadline: "→ 22 July 2025, 12:00; ISEEUP by 10 Dec 2025; enrolled by 10 Feb 2026",
      iseeCaps: "€27,948.60 / €60,757.87",
      benefits:
        "+15% if ISEE ≤ €13,974.30 · +20% STEM women · +10% disability ≥66%",
      extraLinks: [
        { label: "International / ISEEUP docs", url: "https://laziodisco.it/studiare-nel-lazio/international/" },
      ],
    },
  ],

  maeci: {
    amount: "€10,800",
    duration: "9 months (3 installments of €3,600) + insurance + possible tuition exemption (regional fees still due)",
    eligibleNote: "Algeria is eligible.",
    levels:
      "Master's, PhD, AFAM, research, Italian language — not Bachelor's (AY 2026/27).",
    applyUrl: "https://studyinitaly.esteri.it/",
    deadline: "26 March 2026, 14:00 Rome time",
    extraDocsDeadline: "1 July 2026",
    language: "B2 Italian or English depending on course.",
  },

  killerMistakes: [
    { num: 1, text: "Starting the Embassy documents late → misses the ISEEUP deadline. (Start Phase 2 on Day 1.)" },
    { num: 2, text: "Waiting for the visa before applying → misses the summer application deadline. (Apply in Phase 4 even pre-visa.)" },
    { num: 3, text: "Submitting an ordinary ISEE instead of the ISEE for diritto allo studio → income rejected." },
    { num: 4, text: "Name mismatches vs the passport → visa/portal delays." },
    { num: 5, text: "No IBAN / no residence-permit upload → payment blocked." },
    { num: 6, text: "Not checking the portal rankings → missed deadlines, since there is no email notice." },
    { num: 7, text: "Income over the cap → not eligible (check early, region-specific caps)." },
  ],

  agentLinks: [
    { label: "Find the right regional agency (any university) — ANDISU", url: "https://www.andisu.it/homepage/enti-organismi-del-dsu/" },
    { label: "ADSU Teramo", url: "https://www.adsuteramo.it/" },
    { label: "ERSU Palermo", url: "https://www.ersupalermo.it/" },
    { label: "ERSU Palermo portal", url: "https://studenti.ersupalermo.it/" },
    { label: "DiSCo Lazio", url: "https://laziodisco.it/" },
    { label: "DiSCo Lazio — international / ISEEUP", url: "https://laziodisco.it/studiare-nel-lazio/international/" },
    { label: "MAECI scholarship (Master's/PhD)", url: "https://studyinitaly.esteri.it/" },
    { label: "MAECI scholarships (Farnesina)", url: "https://www.esteri.it/en/opportunita/borse-di-studio/" },
    { label: "Italian Embassy in Algeria", url: "https://ambalgeri.esteri.it/" },
    { label: "Universitaly (pre-enrolment / find courses)", url: "https://www.universitaly.it/" },
    { label: "CIMEA (DOV / qualification recognition)", url: "https://www.cimea.it/EN/" },
  ],

  sources: [
    {
      layer: "Layer 1 — Regional DSU Scholarship",
      description: "Find agency → read its current bando.",
      links: [
        { label: "ANDISU (find any region's agency)", url: "https://www.andisu.it/homepage/enti-organismi-del-dsu/" },
        { label: "DiSCo Lazio (primary source)", url: "https://laziodisco.it/" },
        { label: "ERSU Palermo (primary source)", url: "https://www.ersupalermo.it/" },
        { label: "ADSU Teramo (primary source)", url: "https://www.adsuteramo.it/" },
        { label: "MUR (national rules + max ISEE/ISPE caps)", url: "https://www.mur.gov.it/it/aree-tematiche/universita/diritto-allo-studio" },
        { label: "INPS (ISEE / ISEE Parificato)", url: "https://www.inps.it/" },
      ],
    },
    {
      layer: "Layer 2 — University's Own Fees & Scholarships",
      description: "The university's own page is the authority — read its regolamento tasse.",
      links: [
        { label: "UniPa fees", url: "https://www.unipa.it/mobilita/en/new-students/tuition-fees/" },
        { label: "Cassino fees & funding", url: "https://www.unicas.it/international-unicas/why-choose-us/fees-and-fundings/" },
        { label: "Teramo fees", url: "https://www.unite.it/UniTE/Tasse" },
      ],
    },
    {
      layer: "Layer 3 — MAECI Government Scholarship",
      description: "Single official channel — trust esteri.it over any blog.",
      links: [
        { label: "Study in Italy portal (info + apply + yearly calls)", url: "https://studyinitaly.esteri.it/" },
        { label: "Call list", url: "https://studyinitaly.esteri.it/en/ListaBandi" },
        { label: "MAECI scholarships", url: "https://www.esteri.it/en/opportunita/borse-di-studio/" },
        { label: "Italian Embassy in Algeria", url: "https://ambalgeri.esteri.it/" },
      ],
    },
    {
      layer: "Cross-cutting",
      description: "Portals useful for all three layers.",
      links: [
        { label: "Universitaly", url: "https://www.universitaly.it/studenti-stranieri" },
        { label: "CIMEA", url: "https://www.cimea.it/EN/" },
      ],
    },
  ],
};
