export interface VisaFeeRow {
  chargeType: string;
  amountEur: string;
  amountDzd: string;
}

export interface VisaData {
  keyDeadlines: {
    ay2627: string;
    ay2728: string;
    notes: string[];
  };
  financialRequirements: {
    figure1: { amount: string; description: string; source: string };
    figure2: { amount: string; description: string; source: string };
    figure3: { amount: string; description: string; source: string };
    warningNote: string;
  };
  embassyAndVfs: {
    points: string[];
  };
  documentChecklist: {
    items: { num: number; title: string; detail: string }[];
    note: string;
    officialLink: string;
  };
  permitOfStay: {
    points: string[];
    payments: string[];
  };
  vfsFees: {
    visaFees: VisaFeeRow[];
    serviceFees: VisaFeeRow[];
    notes: string[];
  };
}

export const visaData: VisaData = {
  keyDeadlines: {
    ay2627: "November 30, 2026",
    ay2728: "October 31, 2027",
    notes: [
      "These deadlines apply to standard courses: Bachelor's, Master's, First/Second-Level Academic Diploma, including single-cycle courses.",
      "For all other types (Master's programs/Doctoral/Erasmus/single courses/foundation courses): no time limits, but applications cannot be submitted after the start of teaching activities.",
      "Universities may set earlier deadlines than the ministerial dates — check each university's portal.",
      "The Universitaly portal is the only free and official pre-enrolment channel (Ministry of University and Research).",
    ],
  },
  financialRequirements: {
    figure1: {
      amount: "€10,179.85",
      description: "Must be available in the applicant's personal bank account at the time of application. Funds must come from legitimate and traceable sources, preferably personal or from the family unit (relatives up to the fourth degree). The applicant will be required to sign a consent form authorizing the Embassy to verify the authenticity of the banking documentation, actual availability of declared funds, and compliance with financial requirements.",
      source: "Italian Embassy in Algeria notice",
    },
    figure2: {
      amount: "€848.32 per month",
      description: "of the duration of the academic year (minimum). Six months of bank statements required. No third-party financial guarantees accepted.",
      source: "VFS Global Algeria — document checklist for university studies",
    },
    figure3: {
      amount: "€460.28 per month",
      description: "of the academic year.",
      source: "General visa requirements list (vistoperitalia.esteri.it)",
    },
    warningNote: "These figures appear in different official documents and apply to different aspects of the assessment. Do not treat them as interchangeable. Always confirm with the Italian Embassy in Algeria and VFS Global before advising a client.",
  },
  embassyAndVfs: {
    points: [
      "Pre-enrolment via Universitaly portal is mandatory (the only official, free portal).",
      "The Italian Embassy/diplomatic mission has exclusive authority over the visa decision.",
      "The Embassy also assesses 'migration risk' — this includes evaluating the student's socioeconomic status, quality of previous studies, and coherence of the chosen programme (D.I. 850/2011, Art. 4, para. 2).",
      "Appointments are booked through VFS Global Algeria.",
      "The Embassy will gradually open appointment slots — check the VFS Global booking portal and Embassy website regularly for new availability.",
      "The lifting of reservations or pre-enrolment validation by a university does NOT guarantee an appointment or a visa.",
    ],
  },
  documentChecklist: {
    items: [
      { num: 1, title: "Original visa application form (short-stay)", detail: "Completed and signed. Available for download (will be provided on arrival at VFS Global centre)." },
      { num: 2, title: "Biometric photograph", detail: "Recent (within 6 months), colour, 35×40mm, white background, face uncovered, ICAO standard." },
      { num: 3, title: "Original passport", detail: "Valid for at least 3 months beyond the expected date of departure from the Schengen area; containing at least two consecutive blank pages for the visa." },
      { num: 4, title: "Photocopy of passport", detail: "Copy of the biometric data page and all pages with visas and entry/exit stamps from the Schengen area; add photocopy of the previous passport if the current one was issued less than one year ago." },
      { num: 5, title: "Declaration of availability of accommodation in Italy", detail: "And funds necessary for repatriation (demonstrable via a return air ticket)." },
      { num: 6, title: "Pre-enrolment certificate in the course in Italy", detail: "Completed and signed, sent exclusively via the Universitaly portal." },
      { num: 7, title: "Photocopy of documentation related to previous studies", detail: "" },
      { num: 8, title: "Proof of financial means of subsistence", detail: "Parents' for a minor — according to the parameters defined by the Italian Ministry of Education (at least €848.32 per month of the academic year duration): proven either by (a) proof of personal or family financial means (bank statements for the last 6 months — no third-party financial guarantees accepted) or (b) economic guarantees provided by reputable Italian institutions or by foreign authorities considered reliable by the competent Italian diplomatic representation." },
      { num: 9, title: "Certificate of knowledge of the language", detail: "In which the course will be delivered (at least B2 level)." },
      { num: 10, title: "Family certificate", detail: "Indicating the father, mother, and any siblings." },
      { num: 11, title: "Evidence of parents' and (if applicable) guarantors' socio-professional situation", detail: "With a document attesting the family relationship. Photocopy." },
      { num: 12, title: "Medical insurance covering treatment and/or hospitalization", detail: "Either: (a) consular declaration confirming the right to healthcare under the partnership between Algeria and Italy, or (b) foreign insurance policy or one taken out with an Italian body, with no limitations or exceptions to costs for emergency hospitalization." },
    ],
    note: "The Embassy reserves the right to request additional documents.",
    officialLink: "https://ambalgeri.esteri.it/wp-content/uploads/2026/06/12.1-Studio_amissione-univ_IT.rev_.pdf",
  },
  permitOfStay: {
    points: [
      "Must request within 8 working days of arrival in Italy.",
      "Apply at the local Police Department – Immigration Office (Questura – Ufficio stranieri) responsible for the city of residence.",
      "Can be submitted via Post Offices (Sportello Amico) using the kit; then called to the Questura for photo/fingerprint.",
      "Required documents: original passport (copies of data page, visa, entry stamp, and all pages with visas/stamps); copy of Italian NHS (SSN) registration or health insurance; copy of documents certifying economic resources (visa application documents, bank/post account extract, or official scholarship letter); documents demonstrating accommodation availability; copy of Pre-enrollment Application at Embassy (Form A); €16 tax stamp.",
    ],
    payments: [
      "Electronic Residence Permit (PSE): €30.46",
      "Residence Permit contribution: €40",
      "Insured mail sending: €30",
    ],
  },
  vfsFees: {
    visaFees: [
      { chargeType: "Short stay", amountEur: "€90.00", amountDzd: "13,800" },
      { chargeType: "Short stay child (6–12 years)", amountEur: "€45.00", amountDzd: "6,900" },
      { chargeType: "Short stay child (0–6 years)", amountEur: "Free", amountDzd: "Free" },
      { chargeType: "Long Stay (Study)", amountEur: "€50.00", amountDzd: "7,700" },
      { chargeType: "Long Stay", amountEur: "€116.00", amountDzd: "17,800" },
    ],
    serviceFees: [
      { chargeType: "Service Fees", amountEur: "€40.00", amountDzd: "6,100" },
    ],
    notes: [
      "Fees paid in cash or by CIB credit card at the current Euro exchange rate listed above.",
      "Change without notice is possible.",
      "Visa fee exemptions: children under 6 years (short stay); student visa applicants (short stay); spouse of an Italian citizen; researchers traveling within the EU for scientific research purposes.",
      "Service fees are non-refundable if the cancellation is not processed 72 hours before the appointment day.",
      "Service charges are inclusive of VAT.",
    ],
  },
};
