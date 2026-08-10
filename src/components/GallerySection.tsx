import React from 'react';
import { useApp } from '../context/AppContext';

import imgReception from '../assets/images/hospital_reception_lounge_1785329455512.jpeg';
import imgPatientRoom from '../assets/images/mint_patient_room_1785329467311.jpeg';
import imgDoubleWard from '../assets/images/double_patient_ward_1785329479047.jpeg';
import imgVipLounge from '../assets/images/vip_leather_lounge_1785329488100.jpeg';
import imgPeachBedroom from '../assets/images/warm_peach_bedroom_1785329503368.jpeg';
import imgSingleSuite from '../assets/images/single_patient_suite_1785329514429.jpeg';

export const GallerySection: React.FC = () => {
  const { t, language } = useApp();

  const galleryItems = [
    {
      img: imgReception,
      caption: language === 'ar' ? 'صالة الاستقبال الرئيسية ومكاتب الاستقبال (Arabia Surgicare)' : 'Main Reception Lounge & Reception Desk (Arabia Surgicare)'
    },
    {
      img: imgPatientRoom,
      caption: language === 'ar' ? 'غرف إقامة المرضى الفردية الفاخرة المجهزة بالكامل' : 'Deluxe Fully Equipped Patient Private Suite'
    },
    {
      img: imgDoubleWard,
      caption: language === 'ar' ? 'جناح الملاحظة والإقامة المزود بستائر الخصوصية الطبية' : 'Patient Double Care Ward with Privacy Dividers'
    },
    {
      img: imgVipLounge,
      caption: language === 'ar' ? 'صالة استراحة كبار الزوار والانتظار الفاخرة' : 'VIP Executive Visitors Waiting Lounge'
    },
    {
      img: imgPeachBedroom,
      caption: language === 'ar' ? 'غرف الإقامة الهادئة المجهزة لإشراف الرعاية المستمرة' : 'Quiet Patient Recovery Bedroom'
    },
    {
      img: imgSingleSuite,
      caption: language === 'ar' ? 'أجنحة المرضى المنفردة المصممة لأقصى درجات الراحة والأمان' : 'Single Patient Care Room Designed for Comfort & Safety'
    }
  ];

  return (
    <section id="gallery-section" className="bg-slate-100/80 border-t border-b border-slate-200/60 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 space-y-2">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900">{t('galleryTitle')}</h2>
          <p className="text-slate-500 text-sm max-w-xl mx-auto">{t('galleryDesc')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-2.5 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="overflow-hidden rounded-xl aspect-[4/3] bg-slate-100">
                <img
                  src={item.img}
                  alt={item.caption}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <p className="text-center font-bold text-xs text-slate-700 py-2.5 px-2">{item.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

