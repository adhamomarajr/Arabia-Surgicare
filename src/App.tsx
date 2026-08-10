import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { DepartmentsGrid } from './components/DepartmentsGrid';
import { DoctorsSection } from './components/DoctorsSection';
import { AchievementsSection } from './components/AchievementsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppBookingModal } from './components/WhatsAppBookingModal';
import { AdminPanel } from './components/AdminPanel';

function MainLayout() {
  const { currentView, language } = useApp();

  if (currentView === 'admin') {
    return (
      <div dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <AdminPanel />
      </div>
    );
  }

  return (
    <div id="main-view" dir={language === 'ar' ? 'rtl' : 'ltr'} className="min-h-screen bg-slate-50 text-slate-800 flex flex-col justify-between selection:bg-purple-600 selection:text-white bg-grid-pattern">
      <div>
        <Header />
        <Hero />
        <AboutSection />
        <GallerySection />
        <DepartmentsGrid />
        <DoctorsSection />
        <AchievementsSection />
        <ContactSection />
      </div>

      <Footer />
      <WhatsAppBookingModal />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
}
