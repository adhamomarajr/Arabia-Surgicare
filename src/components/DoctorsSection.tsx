import React from 'react';
import { useApp } from '../context/AppContext';
import { Doctor } from '../types';
import {
  Stethoscope,
  Bone,
  Baby,
  HeartPulse,
  UserRound,
  Brain,
  Sparkles,
  Radio,
  Activity,
  Smile,
  MessageSquare,
  Clock,
  GraduationCap,
  Award,
  Check,
  UserCheck,
  Calendar,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Stethoscope,
  Bone,
  Baby,
  HeartPulse,
  UserRound,
  Brain,
  Sparkles,
  Radio,
  Activity,
  Smile,
};

export const DoctorsSection: React.FC = () => {
  const {
    t,
    language,
    specialties,
    activeSpecialtyId,
    setActiveSpecialtyId,
    doctors,
    setBookingModalDoctor
  } = useApp();

  // Find current active specialty
  const activeSpecialty = specialties.find((s) => s.id === activeSpecialtyId) || specialties[0];

  // Filter doctors for the currently active specialty
  const activeDoctors = doctors.filter((doc) => doc.specialtyId === activeSpecialty.id);

  const handleBookWhatsApp = (doctor: Doctor) => {
    setBookingModalDoctor(doctor);
  };

  return (
    <section id="doctors-sidebar-section" className="max-w-7xl mx-auto px-4 py-16">
      {/* Section Header */}
      <div className="text-center mb-12 space-y-3">
        <span className="bg-purple-100 text-purple-900 border border-purple-200 text-xs font-black px-4 py-1.5 rounded-full inline-flex items-center gap-1.5 shadow-2xs">
          <Sparkles className="h-3.5 w-3.5 text-purple-600" />
          <span>{t('docSecBadge')}</span>
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">{t('docSecTitle')}</h2>
        <p className="text-slate-600 text-sm max-w-2xl mx-auto leading-relaxed">{t('docSecDesc')}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* SIDEBAR NAVIGATION (6 SPECIALTIES TABS) */}
        <aside className="lg:col-span-4 bg-white border border-slate-200 rounded-3xl p-5 shadow-xs lg:sticky lg:top-24">
          <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-100">
            <h3 className="font-black text-slate-900 text-sm tracking-tight">{t('sidebarTitle')}</h3>
            <span className="text-xs bg-purple-50 text-purple-800 border border-purple-200 font-bold px-2.5 py-0.5 rounded-full">
              {specialties.length} {language === 'ar' ? 'تخصصات' : 'Specialties'}
            </span>
          </div>

          <div className="space-y-2.5">
            {specialties.map((spec) => {
              const IconComp = ICON_MAP[spec.icon] || Stethoscope;
              const isActive = spec.id === activeSpecialtyId;
              const specDoctorCount = doctors.filter((d) => d.specialtyId === spec.id).length;

              return (
                <button
                  key={spec.id}
                  onClick={() => setActiveSpecialtyId(spec.id)}
                  className={`w-full text-start p-3.5 rounded-2xl text-xs font-bold transition-all duration-200 flex items-center justify-between cursor-pointer border ${
                    isActive
                      ? 'bg-slate-900 text-white border-slate-900 shadow-md shadow-slate-900/10'
                      : 'bg-slate-50/80 hover:bg-purple-50/80 text-slate-700 border-slate-200/80 hover:border-purple-300/80'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`h-9 w-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isActive ? 'bg-purple-600 text-white shadow-xs' : 'bg-white text-purple-700 border border-slate-200/80'
                      }`}
                    >
                      <IconComp className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="leading-tight font-black">{spec.name[language]}</p>
                      <p
                        className={`text-[10px] mt-0.5 font-medium ${
                          isActive ? 'text-slate-300' : 'text-slate-500'
                        }`}
                      >
                        {specDoctorCount} {t('doctorsCountSuffix')}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0">
                    {language === 'ar' ? (
                      <ChevronLeft className={`h-4 w-4 ${isActive ? 'text-purple-300' : 'text-slate-400'}`} />
                    ) : (
                      <ChevronRight className={`h-4 w-4 ${isActive ? 'text-purple-300' : 'text-slate-400'}`} />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </aside>

        {/* DOCTORS WORKSPACE FOR SELECTED SPECIALTY */}
        <main className="lg:col-span-8 space-y-6">
          {/* Active Specialty Banner */}
          <div className="bg-slate-900 text-white p-6 sm:p-7 rounded-3xl shadow-xs border border-slate-800 space-y-2 bg-grid-dark relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-purple-600/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center justify-between relative z-10">
              <span className="text-xs bg-purple-950 text-purple-200 px-3 py-1 rounded-full border border-purple-800/80 font-bold">
                {language === 'ar' ? 'التخصص المحدد' : 'Selected Specialty'}
              </span>
              <span className="text-xs font-bold text-amber-400">
                {activeDoctors.length} {language === 'ar' ? 'أطباء في هذا التخصص' : 'Doctors in this Specialty'}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white relative z-10">
              {activeSpecialty.name[language]}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal relative z-10 max-w-2xl">
              {activeSpecialty.description[language]}
            </p>
          </div>

          {/* Doctors List */}
          {activeDoctors.length === 0 ? (
            <div className="bg-white p-12 rounded-3xl border border-slate-200 text-center space-y-3 shadow-2xs">
              <UserCheck className="h-12 w-12 text-slate-300 mx-auto" />
              <p className="text-slate-700 font-bold text-sm">
                {language === 'ar'
                  ? 'لا يوجد أطباء مضافون حالياً في هذا التخصص.'
                  : 'No doctors currently assigned to this specialty.'}
              </p>
              <p className="text-xs text-slate-400">
                {language === 'ar'
                  ? 'يمكنك إضافة طبيب جديد من لوحة التحكم.'
                  : 'You can add a new doctor from the Admin Panel.'}
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {activeDoctors.map((doc) => (
                <div
                  key={doc.id}
                  className="bg-white rounded-3xl border border-slate-200/90 shadow-2xs hover:border-purple-300/80 hover:shadow-md transition-all duration-300 overflow-hidden p-6 space-y-5"
                >
                  {/* Doctor Profile Header */}
                  <div className="flex flex-col md:flex-row gap-5 items-start md:items-center">
                    {/* Doctor Photo */}
                    <div className="relative shrink-0 mx-auto md:mx-0">
                      <img
                        src={
                          doc.image ||
                          'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80'
                        }
                        alt={doc.name[language]}
                        referrerPolicy="no-referrer"
                        className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-cover border-2 border-slate-100 shadow-sm"
                      />
                      <span
                        className={`absolute -bottom-2 -right-2 text-[10px] font-bold px-2.5 py-0.5 rounded-full border shadow-2xs ${
                          doc.available
                            ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                            : 'bg-slate-100 text-slate-600 border-slate-200'
                        }`}
                      >
                        {doc.available ? t('availableNow') : t('busyNow')}
                      </span>
                    </div>

                    {/* Doctor Info */}
                    <div className="space-y-2 flex-grow text-center md:text-start">
                      <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                        <h4 className="text-lg sm:text-xl font-black text-slate-900">
                          {doc.name[language]}
                        </h4>
                        <span className="text-xs bg-purple-50 text-purple-800 border border-purple-200/80 font-bold px-2.5 py-0.5 rounded-full">
                          {doc.experienceYears} {t('experienceYears')}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm font-bold text-purple-700 leading-snug">
                        {doc.title[language]}
                      </p>

                      <p className="text-xs text-slate-600 leading-relaxed font-normal max-w-xl">
                        {doc.bio[language]}
                      </p>
                    </div>
                  </div>

                  {/* Qualifications & Timing Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 border-t border-slate-100">
                    <div className="bg-slate-50/80 p-3.5 rounded-2xl border border-slate-200/80 space-y-1">
                      <div className="flex items-center gap-1.5 text-slate-900 text-xs font-bold">
                        <GraduationCap className="h-4 w-4 text-purple-600 shrink-0" />
                        <span>{t('educationLabel')}</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">
                        {doc.education[language]}
                      </p>
                    </div>

                    <div className="bg-purple-50/50 p-3.5 rounded-2xl border border-purple-100 space-y-1">
                      <div className="flex items-center gap-1.5 text-purple-950 text-xs font-bold">
                        <Clock className="h-4 w-4 text-purple-600 shrink-0" />
                        <span>{t('timingsLabel')}</span>
                      </div>
                      <p className="text-xs text-purple-950 font-bold leading-relaxed">
                        {doc.timing[language]}
                      </p>
                    </div>
                  </div>

                  {/* Achievements List */}
                  {doc.achievements && doc.achievements[language] && doc.achievements[language].length > 0 && (
                    <div className="space-y-2 pt-1">
                      <p className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                        <Award className="h-4 w-4 text-amber-500 shrink-0" />
                        <span>{t('achievementsLabel')}</span>
                      </p>
                      <ul className="space-y-1 text-xs text-slate-600">
                        {doc.achievements[language].map((ach, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="h-4 w-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
                              ✓
                            </span>
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Specializations / Focus Tags */}
                  {doc.specializations && doc.specializations[language] && doc.specializations[language].length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {doc.specializations[language].map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] bg-slate-100 text-slate-700 font-medium px-2.5 py-1 rounded-lg border border-slate-200/80"
                        >
                          • {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* WhatsApp Appointment Booking Button */}
                  <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-xs text-slate-500 font-medium text-center sm:text-start">
                      {language === 'ar'
                        ? 'احجز استشارتك مباشرة وسيقوم فريق الاستقبال بتأكيد الموعد'
                        : 'Book directly and reception will confirm your appointment instantly'}
                    </p>

                    <button
                      onClick={() => handleBookWhatsApp(doc)}
                      className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs px-6 py-3 rounded-2xl transition-all shadow-md shadow-emerald-600/20 flex items-center justify-center gap-2 cursor-pointer border-0 active:scale-95"
                    >
                      <MessageSquare className="h-4 w-4" />
                      <span>{t('bookWaBtn')}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </section>
  );
};
