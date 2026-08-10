import React, { createContext, useContext, useState, useEffect } from 'react';
import { Doctor, Specialty, Language } from '../types';
import { INITIAL_DOCTORS, INITIAL_SPECIALTIES, TRANSLATIONS } from '../data/initialData';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  activeSpecialtyId: string;
  setActiveSpecialtyId: (id: string) => void;
  doctors: Doctor[];
  specialties: Specialty[];
  currentView: 'main' | 'admin';
  setCurrentView: (view: 'main' | 'admin') => void;
  isAdminLoggedIn: boolean;
  loginAdmin: (password: string) => boolean;
  logoutAdmin: () => void;
  bookingModalDoctor: Doctor | null;
  setBookingModalDoctor: (doctor: Doctor | null) => void;
  addDoctor: (doctor: Doctor) => void;
  updateDoctor: (doctor: Doctor) => void;
  deleteDoctor: (doctorId: string) => void;
  t: (key: keyof typeof TRANSLATIONS['ar']) => string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');
  const [activeSpecialtyId, setActiveSpecialtyId] = useState<string>(() => {
    return INITIAL_SPECIALTIES[0]?.id || 'plastic-surgery';
  });
  const [currentView, setCurrentView] = useState<'main' | 'admin'>('main');
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(false);
  const [bookingModalDoctor, setBookingModalDoctor] = useState<Doctor | null>(null);

  // Load doctors from localStorage or initial list
  const [doctors, setDoctors] = useState<Doctor[]>(() => {
    try {
      const saved = localStorage.getItem('arabia_hospital_doctors_v3');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error('Error loading doctors from localStorage', e);
    }
    return INITIAL_DOCTORS;
  });

  // Save doctors to localStorage when modified
  useEffect(() => {
    try {
      localStorage.setItem('arabia_hospital_doctors_v3', JSON.stringify(doctors));
    } catch (e) {
      console.error('Error saving doctors to localStorage', e);
    }
  }, [doctors]);

  // Sync document HTML dir attribute for RTL/LTR language support
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const loginAdmin = (password: string): boolean => {
    if (password === 'admin' || password === '123456') {
      setIsAdminLoggedIn(true);
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdminLoggedIn(false);
  };

  const addDoctor = (newDoc: Doctor) => {
    setDoctors((prev) => [newDoc, ...prev]);
  };

  const updateDoctor = (updatedDoc: Doctor) => {
    setDoctors((prev) => prev.map((doc) => (doc.id === updatedDoc.id ? updatedDoc : doc)));
  };

  const deleteDoctor = (doctorId: string) => {
    setDoctors((prev) => prev.filter((doc) => doc.id !== doctorId));
  };

  const t = (key: keyof typeof TRANSLATIONS['ar']): string => {
    const langDict = TRANSLATIONS[language] || TRANSLATIONS.ar;
    return langDict[key] || TRANSLATIONS.ar[key] || key;
  };

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        activeSpecialtyId,
        setActiveSpecialtyId,
        doctors,
        specialties: INITIAL_SPECIALTIES,
        currentView,
        setCurrentView,
        isAdminLoggedIn,
        loginAdmin,
        logoutAdmin,
        bookingModalDoctor,
        setBookingModalDoctor,
        addDoctor,
        updateDoctor,
        deleteDoctor,
        t,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
