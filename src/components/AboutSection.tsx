import React from 'react';
import { useApp } from '../context/AppContext';
import { Award, CheckCircle2, ShieldCheck, HeartHandshake } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { t, language } = useApp();

  return (
    <section id="about-section" className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-6 relative">
        <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-xl border border-slate-200">
          <img
            src="src\assets\images\about-hospital.jpeg"
            alt="Hospital Surgical Theater"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 right-4 left-4 text-white p-2">
            <span className="bg-purple-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-md">
              {language === 'ar' ? 'غرف العمليات الميكروسكوبية' : 'Microscopic Operating Rooms'}
            </span>
          </div>
        </div>

        {/* Floating badge */}
        <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden sm:flex items-center gap-3">
          <div className="h-12 w-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-black text-xl">
            🏆
          </div>
          <div>
            <p className="font-extrabold text-slate-900 text-sm">
              {language === 'ar' ? 'الرائد الجراحي في الجيزة' : 'Leading Surgical Center'}
            </p>
            <p className="text-xs text-slate-500 font-medium">
              {language === 'ar' ? 'أكثر من 15,000 جراحة ناجحة' : '15,000+ Successful Surgeries'}
            </p>
          </div>
        </div>
      </div>

      <div className="lg:col-span-6 space-y-5">
        <span className="inline-block bg-purple-100 text-purple-800 text-xs font-black px-3.5 py-1.5 rounded-full">
          {t('historyBadge')}
        </span>

        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-snug">
          {t('historySectionTitle')}
        </h2>

        <p className="text-slate-600 text-sm md:text-base leading-relaxed">
          {t('histText')}
        </p>

        <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
          {t('aboutExtraDesc')}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="flex items-center gap-2.5 p-3 bg-purple-50/60 rounded-xl border border-purple-100/60">
            <CheckCircle2 className="h-5 w-5 text-purple-600 shrink-0" />
            <span className="text-xs font-bold text-slate-800">
              {language === 'ar' ? 'طاقم تمريض ورعاية فندقية 24/7' : '24/7 Hotel Quality Nursing & Care'}
            </span>
          </div>
          <div className="flex items-center gap-2.5 p-3 bg-purple-50/60 rounded-xl border border-purple-100/60">
            <CheckCircle2 className="h-5 w-5 text-purple-600 shrink-0" />
            <span className="text-xs font-bold text-slate-800">
              {language === 'ar' ? 'أحدث أجهزة الإيكو والمناظير 4K' : 'Latest Echo & 4K Laparoscopy Tech'}
            </span>
          </div>
          <div className="flex items-center gap-2.5 p-3 bg-purple-50/60 rounded-xl border border-purple-100/60">
            <CheckCircle2 className="h-5 w-5 text-purple-600 shrink-0" />
            <span className="text-xs font-bold text-slate-800">
              {language === 'ar' ? 'أقسام طوارئ وقسطرة مجهزة بالكامل' : 'Fully Equipped Emergency & Cath Labs'}
            </span>
          </div>
          <div className="flex items-center gap-2.5 p-3 bg-purple-50/60 rounded-xl border border-purple-100/60">
            <CheckCircle2 className="h-5 w-5 text-purple-600 shrink-0" />
            <span className="text-xs font-bold text-slate-800">
              {language === 'ar' ? 'حجز فوري عبر الواتساب والمتابعة' : 'Instant WhatsApp Booking & Follow-up'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
