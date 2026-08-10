export type Language = 'ar' | 'en';

export interface Doctor {
  id: string;
  specialtyId: string;
  name: {
    ar: string;
    en: string;
  };
  title: {
    ar: string;
    en: string;
  };
  image: string;
  experienceYears: number;
  available: boolean;
  whatsapp: string;
  timing: {
    ar: string;
    en: string;
  };
  education: {
    ar: string;
    en: string;
  };
  bio: {
    ar: string;
    en: string;
  };
  achievements: {
    ar: string[];
    en: string[];
  };
  specializations: {
    ar: string[];
    en: string[];
  };
}

export interface Specialty {
  id: string;
  icon: string;
  name: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
}

export interface Department {
  id: string;
  specialtyId: string;
  title: {
    ar: string;
    en: string;
  };
  desc: {
    ar: string;
    en: string;
  };
  icon: string;
  features: {
    ar: string[];
    en: string[];
  };
}
