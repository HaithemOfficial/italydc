export type ProfileGroup = "A" | "B" | "C";
export type DataStatus = "complete" | "placeholder";
export type DegreeLevel = "Bachelor" | "Master" | "Single-Cycle" | "PhD" | "Other";
export type TaughtLanguage = "English" | "Italian";

export interface Scores {
  difficulty: number;
  scholarship?: number;
  visa?: number;
}

export interface Program {
  name: string;
  level: DegreeLevel;
  taughtIn: TaughtLanguage;
  applicationLink?: string;
  testRequired?: string;
  notes?: string;
}

export interface LanguageCertOption {
  name: string;
  minScore?: string;
}

export interface LanguageRequirements {
  english?: {
    minLevel?: string;
    acceptedCerts: LanguageCertOption[];
    moiAccepted?: boolean;
    notes?: string;
  };
  italian?: {
    minLevel?: string;
    acceptedCerts: LanguageCertOption[];
    testIfNoCert?: boolean;
    notes?: string;
  };
}

export interface AcademicRequirements {
  bachelorYearsOfSchooling?: string;
  masterRequirements?: string;
  gapFilling?: string[];
  notes?: string;
}

export interface ProcessStep {
  title: string;
  detail?: string;
}

export interface AdmissionProcess {
  euOrResidentInItaly?: ProcessStep[];
  nonEuResidingAbroad?: ProcessStep[];
  notes?: string;
}

export interface DocumentSet {
  admission: string[];
  enrolment: string[];
  notes?: string;
}

export interface DeadlineRow {
  what: string;
  from?: string;
  until?: string;
  notes?: string;
}

export interface TuitionFees {
  fixedFeeByGroup?: { group: string; total: string; instalments?: string }[];
  iseeOption?: string;
  regionalTax?: string;
  stampDuty?: string;
  notes?: string;
}

export interface Scholarship {
  name: string;
  provider?: string;
  type?: string;
  link?: string;
  notes?: string;
}

export interface VisaAndArrival {
  financialProof?: string;
  accommodation?: string;
  healthInsurance?: string;
  residencePermit?: string;
  taxCode?: string;
  notes?: string;
}

export interface University {
  id: string;
  name: string;
  shortName?: string;
  city?: string;
  region?: string;
  officialWebsite?: string;
  group?: ProfileGroup;
  scores?: Scores;
  status: DataStatus;
  summary?: string;
  aliases?: string[];

  programs?: Program[];
  languageRequirements?: LanguageRequirements;
  academicRequirements?: AcademicRequirements;
  admissionProcess?: AdmissionProcess;
  documents?: DocumentSet;
  deadlines?: DeadlineRow[];
  tuitionFees?: TuitionFees;
  scholarships?: Scholarship[];
  visaAndArrival?: VisaAndArrival;
  importantNotes?: string[];
}
