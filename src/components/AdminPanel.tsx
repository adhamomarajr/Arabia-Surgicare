import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Doctor } from '../types';
import { ShieldCheck, Plus, Trash2, Save, LogOut, ArrowRight, ArrowLeft, UserPlus, CheckCircle, Lock } from 'lucide-react';

export const AdminPanel: React.FC = () => {
  const {
    t,
    language,
    doctors,
    specialties,
    isAdminLoggedIn,
    loginAdmin,
    logoutAdmin,
    addDoctor,
    updateDoctor,
    deleteDoctor,
    setCurrentView,
  } = useApp();

  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [selectedDoctorId, setSelectedDoctorId] = useState<string>(doctors[0]?.id || 'new');
  const [successMsg, setSuccessMsg] = useState('');

  // Form State
  const emptyDoctor: Doctor = {
    id: `doc-${Date.now()}`,
    specialtyId: 'general-surgery',
    name: { ar: '', en: '' },
    title: { ar: '', en: '' },
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
    experienceYears: 10,
    available: true,
    whatsapp: '201118573813',
    timing: { ar: 'السبت والأربعاء 5:00 م', en: 'Sat & Wed 5:00 PM' },
    education: { ar: 'دكتوراه الجراحة العامة والمناظير', en: 'MD Surgery' },
    bio: { ar: 'استشاري متميز بخبرة طويلة', en: 'Consultant physician' },
    achievements: { ar: ['إجراء أكثر من 1000 عملية ناجحة'], en: ['Over 1000 successful surgeries'] },
    specializations: { ar: ['جراحة عامة', 'مناظير'], en: ['General Surgery', 'Laparoscopy'] },
  };

  const [formData, setFormData] = useState<Doctor>(doctors[0] || emptyDoctor);

  const handleSelectDoctor = (id: string) => {
    setSelectedDoctorId(id);
    if (id === 'new') {
      setFormData({
        ...emptyDoctor,
        id: `doc-${Date.now()}`,
      });
    } else {
      const found = doctors.find((d) => d.id === id);
      if (found) {
        setFormData(JSON.parse(JSON.stringify(found)));
      }
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const success = loginAdmin(password);
    if (!success) {
      setLoginError(true);
    } else {
      setLoginError(false);
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.ar || !formData.name.en) {
      alert(language === 'ar' ? 'الرجاء إدخال اسم الطبيب باللغتين' : 'Please enter doctor name in both languages');
      return;
    }

    const existing = doctors.some((d) => d.id === formData.id);
    if (existing) {
      updateDoctor(formData);
    } else {
      addDoctor(formData);
    }

    setSuccessMsg(t('adminSuccessMsg'));
    setTimeout(() => setSuccessMsg(''), 4000);
  };

  const handleDelete = () => {
    if (selectedDoctorId === 'new') return;

    if (
      window.confirm(
        language === 'ar' ? 'هل أنت تأكد من رغبتك في حذف هذا الطبيب؟' : 'Are you sure you want to delete this doctor?'
      )
    ) {
      deleteDoctor(formData.id);
      handleSelectDoctor('new');
      setSuccessMsg(language === 'ar' ? 'تم حذف الطبيب بنجاح' : 'Doctor deleted successfully');
      setTimeout(() => setSuccessMsg(''), 4000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between font-['Cairo']">
      {/* Admin Header */}
      <div className="bg-slate-900 py-4 px-6 border-b border-slate-800 flex justify-between items-center sticky top-0 z-30">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-purple-600 flex items-center justify-center text-white font-bold text-lg">
            🎛️
          </div>
          <div>
            <h2 className="font-black text-white text-sm sm:text-base">{t('adminTitle')}</h2>
            <p className="text-[11px] text-purple-400">Arabia Surgicare Hospital Management</p>
          </div>
        </div>

        <button
          onClick={() => setCurrentView('main')}
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition cursor-pointer border-0 flex items-center gap-2"
        >
          <span>{language === 'ar' ? 'العودة للموقع الرئيسي' : 'Return to Main Site'}</span>
          {language === 'ar' ? <ArrowLeft className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
        </button>
      </div>

      <div className="max-w-6xl mx-auto w-full p-4 sm:p-6 flex-grow">
        {/* LOGIN SCREEN IF NOT LOGGED IN */}
        {!isAdminLoggedIn ? (
          <div className="max-w-md mx-auto my-12 bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-2xl space-y-5 animate-fade-in">
            <div className="text-center space-y-2">
              <div className="h-12 w-12 rounded-2xl bg-purple-900/60 text-purple-400 flex items-center justify-center mx-auto border border-purple-700">
                <Lock className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-black text-white">{t('adminLoginRequired')}</h3>
              <p className="text-xs text-slate-400">{t('hospitalName')}</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1.5">
                  {t('adminPasswordLabel')}
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="admin"
                  className="w-full text-xs bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-600"
                />
              </div>

              {loginError && (
                <p className="text-xs text-red-400 font-bold text-center">
                  {language === 'ar'
                    ? 'رمز المرور غير صحيح! (استخدم admin)'
                    : 'Incorrect password! (Use admin)'}
                </p>
              )}

              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs py-3.5 rounded-xl transition cursor-pointer border-0 shadow-md"
              >
                {t('adminLoginBtn')}
              </button>
            </form>
          </div>
        ) : (
          /* DASHBOARD PANEL IF LOGGED IN */
          <div className="space-y-6 animate-fade-in">
            {/* Top Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-slate-900 p-4 rounded-2xl border border-slate-800">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-green-400" />
                <span className="text-xs font-bold text-purple-300">
                  {language === 'ar'
                    ? 'نظام إدارة الكادر الطبي والتخصصات الفائقة'
                    : 'Medical Staff & Specialty Management System'}
                </span>
              </div>

              <button
                onClick={logoutAdmin}
                className="bg-red-600/20 hover:bg-red-600 text-red-400 hover:text-white border border-red-500/30 text-xs font-bold px-3.5 py-2 rounded-xl transition cursor-pointer flex items-center gap-1.5"
              >
                <LogOut className="h-3.5 w-3.5" />
                <span>{t('adminLogout')}</span>
              </button>
            </div>

            {/* Main Form Box */}
            <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 space-y-6">
              {/* Doctor Selection Header */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-4 border-b border-slate-800">
                <div className="space-y-1">
                  <h3 className="text-sm font-black text-purple-400">
                    {language === 'ar' ? 'إدارة وتعديل بيانات الأطباء' : 'Edit Doctor Information'}
                  </h3>
                  <p className="text-xs text-slate-400">{t('adminDoctorSelectLabel')}</p>
                </div>

                <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                  <select
                    value={selectedDoctorId}
                    onChange={(e) => handleSelectDoctor(e.target.value)}
                    className="text-xs bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-purple-600 font-bold"
                  >
                    <option value="new">➕ {t('adminAddDoctor')}</option>
                    {doctors.map((doc) => (
                      <option key={doc.id} value={doc.id}>
                        {doc.name[language] || doc.name.ar} ({specialties.find((s) => s.id === doc.specialtyId)?.name[language]})
                      </option>
                    ))}
                  </select>

                  <button
                    onClick={() => handleSelectDoctor('new')}
                    className="bg-green-600 hover:bg-green-700 text-white font-bold text-xs px-3.5 py-2 rounded-xl transition cursor-pointer border-0 flex items-center gap-1.5"
                  >
                    <Plus className="h-4 w-4" />
                    <span>{t('adminAddDoctor')}</span>
                  </button>

                  {selectedDoctorId !== 'new' && (
                    <button
                      onClick={handleDelete}
                      className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-3.5 py-2 rounded-xl transition cursor-pointer border-0 flex items-center gap-1.5"
                    >
                      <Trash2 className="h-4 w-4" />
                      <span>{t('adminDeleteDoctor')}</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Edit Form */}
              <form onSubmit={handleSave} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 mb-1">
                      الاسم باللغة العربية
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name.ar}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          name: { ...formData.name, ar: e.target.value },
                        })
                      }
                      className="w-full text-xs bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 mb-1">
                      Name in English
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name.en}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          name: { ...formData.name, en: e.target.value },
                        })
                      }
                      className="w-full text-xs bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 mb-1">
                      اللقب العلمي والوظيفة (عربي)
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.title.ar}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          title: { ...formData.title, ar: e.target.value },
                        })
                      }
                      className="w-full text-xs bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 mb-1">
                      Medical Title (English)
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.title.en}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          title: { ...formData.title, en: e.target.value },
                        })
                      }
                      className="w-full text-xs bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-purple-400 mb-1">
                      تعيين التخصص بالعيادة (1 من 6 تخصصات)
                    </label>
                    <select
                      value={formData.specialtyId}
                      onChange={(e) => setFormData({ ...formData, specialtyId: e.target.value })}
                      className="w-full text-xs bg-slate-950 border border-purple-500 rounded-xl px-3.5 py-2.5 text-white font-bold"
                    >
                      {specialties.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.name[language]}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 mb-1">
                      رابط صورة الطبيب (Photo URL)
                    </label>
                    <input
                      type="text"
                      value={formData.image}
                      onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                      className="w-full text-xs bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 mb-1">
                      حالة التواجد بالحجز
                    </label>
                    <select
                      value={formData.available ? 'true' : 'false'}
                      onChange={(e) =>
                        setFormData({ ...formData, available: e.target.value === 'true' })
                      }
                      className="w-full text-xs bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white"
                    >
                      <option value="true">متاح لاستقبال الحجوزات</option>
                      <option value="false">غير متاح حالياً</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 mb-1">
                      مواعيد العيادة (عربي)
                    </label>
                    <input
                      type="text"
                      value={formData.timing.ar}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          timing: { ...formData.timing, ar: e.target.value },
                        })
                      }
                      className="w-full text-xs bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 mb-1">
                      Working Hours (English)
                    </label>
                    <input
                      type="text"
                      value={formData.timing.en}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          timing: { ...formData.timing, en: e.target.value },
                        })
                      }
                      className="w-full text-xs bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 mb-1">
                      المؤهلات والشهادات (عربي)
                    </label>
                    <input
                      type="text"
                      value={formData.education.ar}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          education: { ...formData.education, ar: e.target.value },
                        })
                      }
                      className="w-full text-xs bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 mb-1">
                      Education (English)
                    </label>
                    <input
                      type="text"
                      value={formData.education.en}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          education: { ...formData.education, en: e.target.value },
                        })
                      }
                      className="w-full text-xs bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 mb-1">
                      نبذة وسيرة ذاتية (عربي)
                    </label>
                    <textarea
                      rows={2}
                      value={formData.bio.ar}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          bio: { ...formData.bio, ar: e.target.value },
                        })
                      }
                      className="w-full text-xs bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 mb-1">
                      Biography (English)
                    </label>
                    <textarea
                      rows={2}
                      value={formData.bio.en}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          bio: { ...formData.bio, en: e.target.value },
                        })
                      }
                      className="w-full text-xs bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 mb-1">
                      سنوات الخبرة (أرقام)
                    </label>
                    <input
                      type="number"
                      value={formData.experienceYears}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          experienceYears: parseInt(e.target.value) || 0,
                        })
                      }
                      className="w-full text-xs bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 mb-1">
                      رقم واتساب الحجز (WhatsApp Direct)
                    </label>
                    <input
                      type="text"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="w-full text-xs bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 mb-1">
                      الإنجازات والجوائز (عربي - افصل بينها بفاصلة ,)
                    </label>
                    <textarea
                      rows={2}
                      value={formData.achievements.ar?.join(', ')}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          achievements: {
                            ...formData.achievements,
                            ar: e.target.value.split(',').map((s) => s.trim()).filter(Boolean),
                          },
                        })
                      }
                      className="w-full text-xs bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 mb-1">
                      Achievements (English - comma separated)
                    </label>
                    <textarea
                      rows={2}
                      value={formData.achievements.en?.join(', ')}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          achievements: {
                            ...formData.achievements,
                            en: e.target.value.split(',').map((s) => s.trim()).filter(Boolean),
                          },
                        })
                      }
                      className="w-full text-xs bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs py-3.5 rounded-xl transition cursor-pointer border-0 shadow-lg flex items-center justify-center gap-2 mt-2"
                >
                  <Save className="h-4 w-4" />
                  <span>{t('adminSaveBtn')}</span>
                </button>
              </form>

              {successMsg && (
                <div className="p-3 bg-green-900/60 border border-green-700 text-green-300 text-xs font-bold rounded-xl text-center flex items-center justify-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>{successMsg}</span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <footer className="bg-slate-900 py-4 px-6 border-t border-slate-800 text-center text-xs text-slate-500">
        لوحة إدارة المستشفى العربية للجراحة © 2026
      </footer>
    </div>
  );
};
