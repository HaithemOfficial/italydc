export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export interface DegreeType {
  cycle: string;
  name: string;
  duration: string;
  credits: string;
}

export interface ProfileGroupInfo {
  group: "A" | "B";
  label: string;
  description: string;
  characteristics: string[];
}

export interface ProcessData {
  profileGroups: ProfileGroupInfo[];
  tenSteps: ProcessStep[];
  italianUniversitySystem: {
    intro: string;
    cycles: { cycle: string; degrees: DegreeType[] }[];
  };
  foreignQualificationRecognition: {
    legalBasis: string;
    inPractice: string[];
    note: string;
  };
}

export const processData: ProcessData = {
  profileGroups: [
    {
      group: "A",
      label: "Group A — Accessible Universities",
      description: "Best suited for students with a Bac average between 10 and 13, or those without an English certificate, or whose primary goal is smooth admission, scholarship access, and a manageable visa process.",
      characteristics: [
        "Lower admission difficulty (score 3–5 out of 10)",
        "Strong scholarship availability (ADSU, ERSU, regional bodies)",
        "Higher visa success rate for Algerian students",
        "Clear step-by-step processes with strong international support offices",
        "World Bank or income-based fee structures — often very low for Algerian students",
        "Full or conditional admission possible without a test result",
        "Examples: University of Teramo, University of Palermo, University of Messina, University of Cassino",
      ],
    },
    {
      group: "B",
      label: "Group B — Mid-Level Universities",
      description: "Best suited for students with a Bac average of 14 or above, an English certificate (IELTS 6.0+), and a clean academic history who want to attend a more prestigious university.",
      characteristics: [
        "Moderate admission difficulty (score 6–8 out of 10)",
        "Good scholarship availability at regional and national level",
        "Solid visa success rate",
        "More competitive programmes with higher academic expectations",
        "IELTS 6.0+ or equivalent typically required for English-taught programmes",
        "Examples: University of Turin, University of Pisa, University of Padua, University of Bari",
      ],
    },
  ],
  tenSteps: [
    {
      number: 1,
      title: "Find a programme",
      description: "Search for a study programme that matches your academic background and interests. Italian universities offer Bachelor's (Laurea Triennale, 3 years), Master's (Laurea Magistrale, 2 years), and single-cycle programmes (5–6 years for Medicine, Pharmacy, Law, Architecture). Use this Explorer to find programmes taught in English or Italian.",
    },
    {
      number: 2,
      title: "Verify entry requirements",
      description: "Check the academic entry requirements for your chosen programme. For Bachelor's programmes, you generally need a minimum of 12 years of prior schooling. For Master's programmes, you need a Bachelor's degree. If you come from a country with fewer than 12 years of schooling (like Algeria with 11 years), you must cover the gap with university transcripts, a foundation course certificate, or a post-secondary qualification.",
    },
    {
      number: 3,
      title: "Italian language skills",
      description: "If your chosen programme is taught in Italian, you will need to demonstrate Italian language proficiency at B2 level (CEFR). Accepted certificates include PLIDA, CILS, CELI, and others. Some universities administer their own language test if you don't hold a certificate. English-taught programmes require an English B2 certificate (IELTS, TOEFL, Cambridge, etc.) or a Medium of Instruction (MOI) letter.",
    },
    {
      number: 4,
      title: "Check if you need a visa",
      description: "As an Algerian citizen, you will need a national study visa (Type D) to study in Italy. The visa is valid for the duration of your studies and allows you to live and study in Italy. EU/EEA citizens do not need a visa but must register with the local civil records office upon arrival.",
    },
    {
      number: 5,
      title: "Contact the institution",
      description: "Reach out to the International Students Office of your chosen university. Submit your application through the university's online portal (many have dedicated international student portals). For Group A universities, this usually means completing an online form and uploading your documents. The university will issue an Admission Letter or Letter of Pre-acceptance after reviewing your documents.",
    },
    {
      number: 6,
      title: "Start pre-enrolment on Universitaly",
      description: "Register on the Universitaly portal (www.universitaly.it) — the only official, free pre-enrolment platform of the Italian Ministry of University and Research. Upload your documents and start your pre-enrolment application. The portal forwards your application to the university and to the Italian Embassy. Note: most universities require you to have an Admission Letter before submitting to Universitaly.",
    },
    {
      number: 7,
      title: "Apply for your student visa",
      description: "Once your Universitaly application is validated, apply for your student visa at the Italian Embassy or consulate in your country. In Algeria, appointments are booked through VFS Global Algeria. You will need: financial proof (€10,179.85 or equivalent), accommodation proof, health insurance, language certificate, passport, photos, and pre-enrolment certificate from Universitaly. The visa application fee is €50 for long-stay study visas.",
    },
    {
      number: 8,
      title: "Contact the Embassy",
      description: "Monitor the Italian Embassy and VFS Global Algeria websites regularly for appointment availability. The Embassy gradually opens appointment slots — competition for slots can be high. Make sure all your documents are ready before booking. The Embassy has exclusive authority over visa decisions and assesses 'migration risk' independently of the university's admission decision.",
    },
    {
      number: 9,
      title: "Request your Permit of Stay",
      description: "Within 8 working days of arriving in Italy, you must apply for a Permit of Stay (Permesso di Soggiorno) at the local Questura (Immigration Office). You can also submit via Post Offices (Sportello Amico). The receipt of your application serves as proof of legal stay while waiting for the actual permit. Cost: approximately €100.46 (€30.46 PSE + €40 contribution + €30 mail).",
    },
    {
      number: 10,
      title: "Finalise your enrolment",
      description: "After receiving your visa and arriving in Italy, finalise your enrolment at the university. You will need to present original documents (in person at the International Students Office), pay tuition fees, and activate your student credentials. Many universities require original legalized documents at this stage, including a Declaration of Value (DoV) from the Italian consulate or a CIMEA Statement of Comparability.",
    },
  ],
  italianUniversitySystem: {
    intro: "The Italian higher education system is structured into three cycles, aligned with the Bologna Process. Understanding the cycles helps match your current qualification level to the right programme.",
    cycles: [
      {
        cycle: "First Cycle",
        degrees: [
          { cycle: "First Cycle", name: "Bachelor's Degree (Laurea Triennale)", duration: "3 years", credits: "180 ECTS" },
        ],
      },
      {
        cycle: "Second Cycle",
        degrees: [
          { cycle: "Second Cycle", name: "Master's Degree (Laurea Magistrale)", duration: "2 years", credits: "120 ECTS" },
          { cycle: "Second Cycle", name: "Single-Cycle Degree (Laurea Magistrale a Ciclo Unico)", duration: "5–6 years", credits: "300–360 ECTS" },
          { cycle: "Second Cycle", name: "Vocational Master's (Master di I livello)", duration: "1 year", credits: "60 ECTS" },
        ],
      },
      {
        cycle: "Third Cycle",
        degrees: [
          { cycle: "Third Cycle", name: "PhD (Dottorato di Ricerca)", duration: "3 years", credits: "—" },
          { cycle: "Third Cycle", name: "Specialisation Schools (Scuole di Specializzazione)", duration: "2–6 years", credits: "Varies" },
          { cycle: "Third Cycle", name: "Vocational Second Level Master (Master di II livello)", duration: "1+ year", credits: "60 ECTS" },
        ],
      },
    ],
  },
  foreignQualificationRecognition: {
    legalBasis: "The evaluation of foreign qualifications for enrollment is the exclusive responsibility of higher education institutions (Article 2 of Law 148/2002). Documentation from diplomatic representations is not mandatory and not binding.",
    inPractice: [
      "Declaration of Value (DoV) — issued by the competent Italian consular section in the applicant's country. This document certifies the level and validity of the foreign qualification in the Italian system.",
      "Statement of Comparability (Dichiarazione di Valore in Legalità) + Verification — issued by CIMEA (Centro di Informazione sulla Mobilità e le Equivalenze Accademiche). An alternative to the DoV that is increasingly accepted by Italian universities.",
      "For Master's enrolment: Diploma Supplement accompanied by a Statement of Verification from CIMEA, or ARDI (Attestato di Riconoscimento del Diploma Straniero) accompanied by a Statement of Verification from CIMEA.",
    ],
    note: "While the law does not mandate documentary proof from diplomatic representations, in practice Italian universities require one of the above documents at enrolment finalisation. Check each university's specific requirements carefully — some accept only DoV, others accept CIMEA equivalents.",
  },
};
