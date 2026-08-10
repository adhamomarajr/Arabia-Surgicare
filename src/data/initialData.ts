import { Doctor, Specialty, Department } from '../types';
import docAbdallah from '../assets/images/abdallah.jpeg.jpeg';
import docAhmedFadl from '../assets/images/ahmed-fadl.jpeg.jpeg';
import docAhmedNoshy from '../assets/images/ahmed-noshy.jpeg.jpeg';
import docEhab from '../assets/images/ehab-khalil.jpeg.jpeg';
import docMohamedRefaat from '../assets/images/mohamed-refaat.jpeg.jpeg';
import docRaafat from '../assets/images/raafat-mahfouz.jpeg.jpeg';
import docMohamedRagae from '../assets/images/dr_mohamed_ragae_1785329401695.jpg';

export const INITIAL_SPECIALTIES: Specialty[] = [
  {
    id: 'plastic-surgery',
    icon: 'Sparkles',
    name: {
      ar: 'جراحة التجميل والترميم',
      en: 'Plastic & Reconstructive Surgery'
    },
    description: {
      ar: 'إصلاح تشوهات الحوادث والحروق، إعادة بناء الثدي، وعمليات التجميل وشد القوام وشفط الدهون.',
      en: 'Accident and burn deformity correction, breast reconstruction, cosmetic lifts, and abdominoplasty.'
    }
  },
  {
    id: 'radiation-oncology',
    icon: 'Radio',
    name: {
      ar: 'علاج الأورام والإشعاع',
      en: 'Radiation Oncology & Nuclear Medicine'
    },
    description: {
      ar: 'أحدث تقنيات العلاج الإشعاعي المتقدم IMRT، الجراحة الإشعاعية التجسيمية، وأورام الأطفال والبالغين.',
      en: 'Advanced IMRT radiotherapy, stereotactic radiosurgery, pediatric and adult oncology care.'
    }
  },
  {
    id: 'therapy-psychiatry',
    icon: 'Brain',
    name: {
      ar: 'الصحة النفسية والعصبية',
      en: 'Therapy & Mental Health Clinic'
    },
    description: {
      ar: 'عيادة متكاملة لعلاج التوحد، تعديل السلوك، صعوبات التعلم، فرط الحركة ADHD، والاكتئاب والقلق.',
      en: 'Comprehensive clinic for Autism Spectrum, behavior modification, ADHD, learning disorders, anxiety & depression.'
    }
  },
  {
    id: 'pain-management',
    icon: 'Activity',
    name: {
      ar: 'علاج الألم والعمود الفقري',
      en: 'Pain Management & Interventions'
    },
    description: {
      ar: 'تشخيص وعلاج الآلام الحادة والمزمنة وآلام الأورام والمفاصل بدون جراحة بتقنيات التدخل الحديثة FIPP.',
      en: 'Interventional non-surgical care for acute & chronic pain, cancer pain, joint and spine conditions.'
    }
  },
  {
    id: 'neurosurgery',
    icon: 'Brain',
    name: {
      ar: 'جراحة المخ والأعصاب والعمود الفقري',
      en: 'Neurosurgery & Spine Surgery'
    },
    description: {
      ar: 'جراحات العمود الفقري بالميكروسكوب والمنظار، استئصال الأورام، وتثبيت الفقرات التدخلي للكبار والأطفال.',
      en: 'Microscopic & endoscopic spine surgery, brain and spinal cord tumor resection, and spine fixation.'
    }
  },
  {
    id: 'dentistry',
    icon: 'Smile',
    name: {
      ar: 'طب وجراحة الأسنان',
      en: 'Dentistry & Oral Surgery'
    },
    description: {
      ar: 'رعاية أسنان متكاملة تشمل أسنان الأطفال، التجميل، الجذور، اللثة، التقويم، والتركيبات وزراعة الأسنان.',
      en: 'Full dental practice including pediatric care, cosmetic dentistry, endodontics, orthodontics, and implants.'
    }
  }
];

export const INITIAL_DOCTORS: Doctor[] = [
  // 1. Plastic Surgery
  {
    id: 'doc-refaat',
    specialtyId: 'plastic-surgery',
    name: {
      ar: 'د. محمد أحمد رفعت',
      en: 'Dr. Mohammed Ahmed Rifaat'
    },
    title: {
      ar: 'استشاري جراحة التجميل والترميم وأستاذ الجراحة بالمعهد القومي للأورام – جامعة القاهرة',
      en: 'Consultant Plastic & Reconstructive Surgeon | Professor of Surgery at NCI, Cairo University'
    },
    image: docMohamedRefaat,
    experienceYears: 24,
    available: true,
    whatsapp: '201118573813',
    timing: {
      ar: 'السبت والأربعاء: 5:00 م - 9:00 م',
      en: 'Sat & Wed: 5:00 PM - 9:00 PM'
    },
    education: {
      ar: 'أستاذ الجراحة بالمعهد القومي للأورام – جامعة القاهرة، استشاري جراحة التجميل والترميم',
      en: 'Professor of Surgery at National Cancer Institute, Cairo University'
    },
    bio: {
      ar: 'د. محمد أحمد رفعت هو استشاري جراحة التجميل والترميم، وأستاذ الجراحة بالمعهد القومي للأورام – جامعة القاهرة. يتمتع بخبرة واسعة في الجراحات الترميمية وتنسيق القوام وإعادة بناء الثدي بعد استئصال الأورام.',
      en: 'Dr. Mohammed Ahmed Rifaat is a Consultant Plastic and Reconstructive Surgeon and Professor of Surgery at the National Cancer Institute, Cairo University.'
    },
    achievements: {
      ar: [
        'أستاذ الجراحة بالمعهد القومي للأورام - جامعة القاهرة',
        'خبرة متقدمة في عمليات إعادة بناء الثدي بعد استئصال الأورام',
        'إصلاح وتنسيق التشوهات الناتجة عن الحروق والحوادث المعقدة'
      ],
      en: [
        'Professor of Surgery at National Cancer Institute - Cairo University',
        'Advanced expertise in post-mastectomy breast reconstruction',
        'Reconstruction of complex burn and accident deformities'
      ]
    },
    specializations: {
      ar: [
        'إصلاح تشوهات الوجه والرأس والرقبة الناتجة عن حوادث',
        'علاج التشوهات الخلقية وإصلاح تشوهات الحروق',
        'إعادة بناء الثدي بعد استئصال الأورام',
        'إصلاح أوتار القبض والشد الناتجة عن حوادث',
        'حقن البوتوكس وشد الوجه والرقبة',
        'شفط الدهون وشد البطن (Abdominoplasty)'
      ],
      en: [
        'Facial, head & neck deformities correction',
        'Congenital deformities & burn reconstruction',
        'Breast reconstruction after tumor removal',
        'Hand flexor & extensor tendon repair',
        'Botox injections, Face & Neck Lift',
        'Liposuction & Tummy tuck (Abdominoplasty)'
      ]
    }
  },

  // 2. Radiation Oncology
  {
    id: 'doc-ehab',
    specialtyId: 'radiation-oncology',
    name: {
      ar: 'د. إيهاب خليل',
      en: 'Dr. Ehab Khalil'
    },
    title: {
      ar: 'أستاذ واستشاري علاج الأورام بالإشعاع ورئيس قسم الأورام والطب النووي بالمعهد القومي للأورام',
      en: 'Professor & Consultant of Radiation Oncology | Chair of Radiation Oncology & Nuclear Medicine at NCI'
    },
    image: docEhab,
    experienceYears: 27,
    available: true,
    whatsapp: '201118573813',
    timing: {
      ar: 'الأحد والثلاثاء والخميس: 4:00 م - 8:00 م',
      en: 'Sun, Tue & Thu: 4:00 PM - 8:00 PM'
    },
    education: {
      ar: 'أستاذ علاج الأورام بالإشعاع والطب النووي بالمعهد القومي للأورام – جامعة القاهرة',
      en: 'Professor of Radiation Oncology & Nuclear Medicine at NCI - Cairo University'
    },
    bio: {
      ar: 'د. إيهاب خليل هو أستاذ علاج الأورام بالإشعاع، ويتمتع بخبرة طبية وأكاديمية وبحثية تمتد لأكثر من 27 عاماً في مجال الأورام والعلاج الإشعاعي. يشغل منصب رئيس قسم علاج الأورام بالإشعاع والطب النووي بالمعهد القومي للأورام – جامعة القاهرة.',
      en: 'Dr. Ehab Khalil is a Professor of Radiation Oncology and an experienced oncology specialist with more than 27 years of clinical, academic, and research experience. Chair of Radiation Oncology & Nuclear Medicine at NCI Cairo University.'
    },
    achievements: {
      ar: [
        'رئيس قسم علاج الأورام بالإشعاع والطب النووي بالمعهد القومي للأورام',
        'خبرة تزيد عن 27 عاماً في أحدث تقنيات العلاج الإشعاعي والأورام',
        'نشر العديد من الأبحاث العلمية في المجلات والدوريات الطبية العالمية'
      ],
      en: [
        'Chair of Radiation Oncology & Nuclear Medicine at NCI Cairo University',
        'Over 27 years of clinical & academic radiation oncology leadership',
        'Author of numerous published international studies in oncology & radiotherapy'
      ]
    },
    specializations: {
      ar: [
        'العلاج الإشعاعي المتقدم (IMRT)',
        'الجراحة الإشعاعية التجسيمية (Stereotactic Radiosurgery)',
        'علاج أورام الأطفال والليمفوما',
        'علاج أورام المثانة وأورام الرأس والرقبة',
        'رعاية مرضى الأورام والطب النووي'
      ],
      en: [
        'Intensity-Modulated Radiation Therapy (IMRT)',
        'Stereotactic Radiosurgery (SRS)',
        'Pediatric Oncology & Lymphoma Care',
        'Bladder Cancer & Head and Neck Oncology',
        'Nuclear Medicine & Radiotherapy Research'
      ]
    }
  },

  // 3. Therapy & Mental Health (Two Doctors)
  {
    id: 'doc-aldesoky',
    specialtyId: 'therapy-psychiatry',
    name: {
      ar: 'د. عبد الله الدسوقي',
      en: 'Dr. Abdullah Aldesoky'
    },
    title: {
      ar: 'أخصائي الصحة النفسية والعصبية للأطفال والكبار',
      en: 'Specialist of Psychiatry & Mental Health for Children & Adults'
    },
    image: docAbdallah,
    experienceYears: 12,
    available: true,
    whatsapp: '201118573813',
    timing: {
      ar: 'السبت والإثنين والأربعاء: 3:00 ع - 7:00 م',
      en: 'Sat, Mon & Wed: 3:00 PM - 7:00 PM'
    },
    education: {
      ar: 'أخصائي الصحة النفسية والعصبية، عيادة العربية للصحة النفسية والعصبية',
      en: 'Specialist of Psychiatry & Mental Health, Arabia Mental Health Clinic'
    },
    bio: {
      ar: 'د. عبد الله الدسوقي هو أخصائي صحة نفسية وعصبية للأطفال والكبار، خبير في علاج اضطراب طيف التوحد وتعديل السلوك وتنمية المهارات وإعداد برامج فردية لمساعدة الأطفال، مع ضمان خصوصية تامة في بيئة آمنة.',
      en: 'Dr. Abdullah Aldesoky is a Psychiatry & Mental Health Specialist for children and adults, expert in Autism Spectrum Disorder, behavior modification, skill development, and individualized treatment programs.'
    },
    achievements: {
      ar: [
        'تصميم برامج فردية متخصصة لعلاج التوحد وتعديل السلوك',
        'تقييم دقيق وخطط علاجية مخصصة ومتابعة أسرية مستمرة',
        'إجراء كافة الاختبارات النفسية واللغوية واختبارات الذكاء المعتمدة'
      ],
      en: [
        'Specialized individualized autism & behavior modification programs',
        'Detailed diagnostic assessment & customized family support plans',
        'Comprehensive standardized IQ, language, and behavioral testing'
      ]
    },
    specializations: {
      ar: [
        'علاج اضطراب طيف التوحد (Autism Spectrum Disorder)',
        'تعديل السلوك وتنمية المهارات الفردية',
        'علاج صعوبات التعلم وتأخر النطق',
        'علاج فرط الحركة وتشتت الانتباه (ADHD)',
        'تحسين الانتباه والتركيز والذاكرة',
        'اختبارات الذكاء، التوحد، اللغات، والقلق والدعم النفسي'
      ],
      en: [
        'Autism Spectrum Disorder Therapy',
        'Behavior Modification & Skill Development',
        'Learning Difficulties & Speech Correction',
        'ADHD & Hyperactivity Management',
        'Attention, Memory & Focus Enhancement',
        'IQ, Autism, Speech, Anxiety & Depression Testing'
      ]
    }
  },
  {
    id: 'doc-ragae',
    specialtyId: 'therapy-psychiatry',
    name: {
      ar: 'د. محمد رجائي',
      en: 'Dr. Mohamed Ragae'
    },
    title: {
      ar: 'استشاري الطب النفسي والعلاج النفسي للأطفال والكبار',
      en: 'Consultant Psychiatrist & Mental Health Specialist'
    },
    image: docMohamedRagae,
    experienceYears: 18,
    available: true,
    whatsapp: '201118573813',
    timing: {
      ar: 'الأحد والثلاثاء والخميس: 4:00 م - 8:00 م',
      en: 'Sun, Tue & Thu: 4:00 PM - 8:00 PM'
    },
    education: {
      ar: 'استشاري العلاج النفسي والاضطرابات العصبية والنفسية',
      en: 'Consultant Psychiatrist & Clinical Mental Health Specialist'
    },
    bio: {
      ar: 'د. محمد رجائي استشاري نفسي متخصص في تشخيص وعلاج الاضطرابات النفسية والسلوكية لدى الكبار والأطفال، وإجراء التقييم الدقيق ووضع الخطط العلاجية المتكاملة مع الحفاظ على الخصوصية التامة.',
      en: 'Dr. Mohamed Ragae is a Consultant Psychiatrist specializing in child and adult psychiatric evaluation, mood & anxiety disorders, and comprehensive treatment planning.'
    },
    achievements: {
      ar: [
        'خبرة طويلة في الاستشارات والعلاج النفسي السلوكي والمعرفي',
        'تقييم شامل واختبارات القلق، الاكتئاب، العند، والثقة بالنفس',
        'متابعة مستمرة وتأهيل أُسري متكامل في بيئة آمنة'
      ],
      en: [
        'Extensive background in Cognitive Behavioral Therapy (CBT)',
        'Comprehensive testing for Anxiety, Depression, & Self-Confidence',
        'Continuous family support in a confidential setting'
      ]
    },
    specializations: {
      ar: [
        'علاج الاكتئاب واضطرابات المزاج والقلق',
        'الاستشارات النفسية والسلوكية للأطفال والكبار',
        'اختبارات العند والمعارضة والتحدي',
        'اختبارات الثقة بالنفس والتقييم النفسي الشامل'
      ],
      en: [
        'Depression & Anxiety Disorders Therapy',
        'Adult & Child Psychiatric Consultation',
        'Opposition & Behavioral Challenge Testing',
        'Self-Confidence & Comprehensive Psychiatric Evaluation'
      ]
    }
  },

  // 4. Pain Management
  {
    id: 'doc-raafat',
    specialtyId: 'pain-management',
    name: {
      ar: 'أ.د. رأفت محفوظ رياض',
      en: 'Prof. Dr. Raafat Mahfouz Riad'
    },
    title: {
      ar: 'أستاذ علاج الألم بالقصر العيني والمعهد القومي للأورام والحاصل على زمالة FIPP العالمية',
      en: 'Professor of Pain Management | FIPP Fellow (World Institute of Pain)'
    },
    image: docRaafat,
    experienceYears: 25,
    available: true,
    whatsapp: '201118573813',
    timing: {
      ar: 'السبت والإثنين والخميس: 5:00 م - 9:00 م',
      en: 'Sat, Mon & Thu: 5:00 PM - 9:00 PM'
    },
    education: {
      ar: 'أستاذ علاج الألم بجامعة القاهرة والمعهد القومي للأورام، حاصل على زمالة FIPP للتدخل العلاجي للألم من المعهد العالمي للألم',
      en: 'Professor of Pain Management at Cairo Univ & NCI, FIPP Fellow from World Institute of Pain'
    },
    bio: {
      ar: 'أ.د. رأفت محفوظ رياض هو أستاذ علاج الألم، ومتخصص في تشخيص وعلاج الآلام الحادة والمزمنة لدى البالغين والأطفال. أستاذ بجامعة القاهرة والمعهد القومي للأورام وحاصل على زمالة ممارسة التدخل العلاجي للألم (FIPP) من المعهد العالمي للألم.',
      en: 'Prof. Dr. Raafat Mahfouz Riad is a Professor of Pain Management with experience in diagnosing and treating acute and chronic pain conditions in adults and children. Affiliated with Cairo University, NCI, and holds FIPP fellowship from the World Institute of Pain.'
    },
    achievements: {
      ar: [
        'حاصل على زمالة FIPP العالمية للتدخل العلاجي للألم من المعهد العالمي للألم',
        'أستاذ علاج الألم بجامعة القاهرة والمعهد القومي للأورام',
        'رائد تقنيات الحقن والتردد الحراري لعلاج آلام العمود الفقري والمفاصل بدون جراحة'
      ],
      en: [
        'Fellow of Interventional Pain Practice (FIPP) - World Institute of Pain',
        'Professor of Pain Management at Cairo University & National Cancer Institute',
        'Pioneer in non-surgical radiofrequency & interventional pain therapy'
      ]
    },
    specializations: {
      ar: [
        'تشخيص وعلاج الآلام الحادة والمزمنة لدى البالغين والأطفال',
        'علاج آلام الأورام السرطانية',
        'التدخلات العلاجية الحديثة للألم بدون جراحة (حقن وتردد حراري)',
        'علاج آلام المفاصل والعمود الفقري والانزلاق الغضروفي',
        'متابعة حالات الألم التي تحتاج خطط علاج طويلة المدى'
      ],
      en: [
        'Acute and chronic pain management (Adults & Children)',
        'Cancer-related pain management',
        'Interventional pain therapy (Injections & Radiofrequency)',
        'Joint and spine pain management',
        'Long-term pain treatment planning'
      ]
    }
  },

  // 5. Neurosurgery & Spine Surgery
  {
    id: 'doc-noshy',
    specialtyId: 'neurosurgery',
    name: {
      ar: 'د. أحمد نوشي',
      en: 'Dr. Ahmed Noshy'
    },
    title: {
      ar: 'استشاري جراحة المخ والأعصاب والعمود الفقري - دكتوراه جامعة عين شمس وعضو الجمعية الأوروبية EANS',
      en: 'Consultant of Neurosurgery & Spine Surgery | M.D. Ain Shams Univ, Member of EANS'
    },
    image: docAhmedNoshy,
    experienceYears: 18,
    available: true,
    whatsapp: '201118573813',
    timing: {
      ar: 'الأحد والثلاثاء والأربعاء: 6:00 م - 10:00 م',
      en: 'Sun, Tue & Wed: 6:00 PM - 10:00 PM'
    },
    education: {
      ar: 'دكتوراه جراحة المخ والأعصاب والعمود الفقري من كلية الطب جامعة عين شمس، عضو الجمعية الأوروبية لجراحة المخ والأعصاب',
      en: 'M.D. in Neurosurgery & Spine Surgery from Ain Shams University, Member of EANS'
    },
    bio: {
      ar: 'د. أحمد نوشي هو استشاري جراحة المخ والأعصاب والعمود الفقري، متخصص في جراحات المخ والأعصاب للكبار والأطفال، وجراحات العمود الفقري للبالغين والأطفال، واستئصال أورام المخ والفقرات، وعلاج مشاكل الأعصاب الطرفية.',
      en: 'Dr. Ahmed Noshy is a Consultant of Neurosurgery and Spine Surgery. Specialized in adult & pediatric neurosurgery, adult & pediatric spine surgery, and brain & spinal tumor resection. M.D. from Ain Shams University, Member of EANS.'
    },
    achievements: {
      ar: [
        'دكتوراه جراحة المخ والأعصاب من كلية الطب - جامعة عين شمس',
        'عضو الجمعية الأوروبية لجراحة المخ والأعصاب (EANS)',
        'عضو الجمعية المصرية لجراحة المخ والأعصاب والعمود الفقري'
      ],
      en: [
        'M.D. in Neurosurgery from Faculty of Medicine, Ain Shams University',
        'Member of the European Association of Neurosurgical Societies (EANS)',
        'Member of the Egyptian Society of Neurosurgery and Spine Surgery'
      ]
    },
    specializations: {
      ar: [
        'جراحات المخ والأعصاب للكبار والأطفال',
        'جراحات العمود الفقري للكبار والأطفال',
        'جراحات العمود الفقري محدودة التدخل لعلاج الانزلاق الغضروفي وضيق القناة القطنية',
        'تثبيت الفقرات محدودة التدخل للفقرات العنقية والظهرية والقطنية',
        'جراحات تحرير الأعصاب الطرفية',
        'استئصال أورام المخ والحبل الشوكي'
      ],
      en: [
        'Adult & Pediatric Neurosurgery',
        'Adult & Pediatric Spine Surgery',
        'Minimally invasive spine surgery for disc prolapse & lumbar canal stenosis',
        'Minimally invasive spine fixation for cervical, dorsal & lumbar spine',
        'Peripheral nerve release surgeries',
        'Brain and spinal cord tumor surgery'
      ]
    }
  },

  // 6. Dentistry & Oral Surgery
  {
    id: 'doc-sarhan',
    specialtyId: 'dentistry',
    name: {
      ar: 'د. أحمد فضل سرحان',
      en: 'Dr. Ahmed Fadl Sarhan'
    },
    title: {
      ar: 'أخصائي طب وجراحة الأسنان',
      en: 'Specialist of Dentistry & Oral Surgery'
    },
    image: docAhmedFadl,
    experienceYears: 14,
    available: true,
    whatsapp: '201118573813',
    timing: {
      ar: 'يومياً ما عدا الجمعة: 1:00 ظ - 9:00 م',
      en: 'Daily except Friday: 1:00 PM - 9:00 PM'
    },
    education: {
      ar: 'أخصائي طب وجراحة الأسنان - عيادة الهرم والجيزة',
      en: 'Specialist of Dentistry & Oral Surgery - El-Haram, Giza'
    },
    bio: {
      ar: 'د. أحمد فضل سرحان هو أخصائي طب وجراحة الأسنان بمنطقة الهرم – الجيزة. يقدم خدمات متعددة في مجال طب الأسنان تشمل أسنان الأطفال، تجميل الأسنان، علاج الجذور، علاج اللثة، جراحة الفم والوجه والفكين، والتركيبات وزراعة الأسنان.',
      en: 'Dr. Ahmed Fadl Sarhan is a dental specialist based in El-Haram, Giza. His practice covers pediatric dentistry, cosmetic dentistry, endodontics, periodontics, oral & maxillofacial surgery, orthodontics, prosthodontics, implants, and elderly care.'
    },
    achievements: {
      ar: [
        'تقديم خدمات طب وجراحة الأسنان المتكاملة بأساليب علاجية حديثة وبدون ألم',
        'خبرة واسعة في جراحة الفم والفكين وتقويم الأسنان والتركيبات الثابتة والمتحركة',
        'أحدث تقنيات زراعة الأسنان وتجميل الابتسامة'
      ],
      en: [
        'Comprehensive pain-free dental and oral surgery care',
        'Extensive expertise in oral surgery, orthodontics, and prosthodontics',
        'Advanced dental implants and smile makeover techniques'
      ]
    },
    specializations: {
      ar: [
        'أسنان الأطفال (Pediatric Dentistry)',
        'تجميل الأسنان (Cosmetic Dentistry)',
        'علاج الجذور (Endodontics) وعلاج اللثة (Periodontics)',
        'جراحة الفم والوجه والفكين',
        'تقويم الأسنان والتركيبات',
        'زراعة الأسنان وأشعة الفم',
        'علاج أسنان البالغين وكبار السن'
      ],
      en: [
        'Pediatric Dentistry & Cosmetic Dentistry',
        'Endodontics & Periodontics',
        'Oral and Maxillofacial Surgery',
        'Orthodontics & Prosthodontics',
        'Dental Implants & Oral Radiology',
        'Adult and Elderly Dental Care'
      ]
    }
  }
];

export const HOSPITAL_DEPARTMENTS: Department[] = [
  {
    id: 'dep-1',
    specialtyId: 'plastic-surgery',
    title: {
      ar: 'قسم جراحة التجميل والترميم',
      en: 'Department of Plastic & Reconstructive Surgery'
    },
    desc: {
      ar: 'جراحات ترميمية متقدمة لإصلاح تشوهات الحوادث والحروق، جراحات الثدي التخصصة، والتجميل القوامي.',
      en: 'Advanced reconstructive surgery for burn and trauma deformities, specialized breast procedures, and cosmetic reshaping.'
    },
    icon: 'Sparkles',
    features: {
      ar: ['إصلاح تشوهات الحروق والحوادث', 'إعادة بناء الثدي بعد استئصال الأورام', 'شفط الدهون وشد القوام'],
      en: ['Burn & Trauma Reconstruction', 'Post-Mastectomy Breast Reconstruction', 'Body Contouring & Liposuction']
    }
  },
  {
    id: 'dep-2',
    specialtyId: 'radiation-oncology',
    title: {
      ar: 'قسم علاج الأورام والإشعاع والطب النووي',
      en: 'Department of Radiation Oncology & Nuclear Medicine'
    },
    desc: {
      ar: 'أحدث أجهزة العلاج الإشعاعي الموجه ودقة استهداف الأورام بالجرعات الآمنة تحت إشراف نخبة أساتذة الأورام.',
      en: 'State-of-the-art targeted radiotherapy and precision tumor management directed by leading professors.'
    },
    icon: 'Radio',
    features: {
      ar: ['العلاج الإشعاعي المتقدم IMRT', 'الجراحة الإشعاعية التجسيمية SRS', 'أورام الأطفال والبالغين والطب النووي'],
      en: ['Advanced IMRT Radiotherapy', 'Stereotactic Radiosurgery SRS', 'Pediatric & Adult Oncology']
    }
  },
  {
    id: 'dep-3',
    specialtyId: 'therapy-psychiatry',
    title: {
      ar: 'قسم الصحة النفسية وتعديل السلوك',
      en: 'Department of Therapy & Mental Health'
    },
    desc: {
      ar: 'عيادة تخصصية متكاملة للتوحد، تعديل السلوك، وتنمية المهارات واختبارات الذكاء مع الحفاظ على الخصوصية التامة.',
      en: 'Integrated clinic for Autism, behavioral modification, child skill development, and psychiatric care.'
    },
    icon: 'Brain',
    features: {
      ar: ['علاج اضطراب طيف التوحد', 'تعديل السلوك وتنمية المهارات', 'اختبارات الذكاء، اللغات، وفرط الحركة ADHD'],
      en: ['Autism Spectrum Therapy', 'Behavior Modification Programs', 'Standardized IQ, ADHD & Speech Tests']
    }
  },
  {
    id: 'dep-4',
    specialtyId: 'pain-management',
    title: {
      ar: 'مركز علاج الألم والعمود الفقري',
      en: 'Pain Management & Intervention Center'
    },
    desc: {
      ar: 'تقنيات علاج الألم بدون جراحة باستخدام التردد الحراري والحقن الموجه لآلام المفاصل والعمود الفقري والأورام.',
      en: 'Non-surgical pain relief using radiofrequency and targeted injections for joints, spine, and cancer pain.'
    },
    icon: 'Activity',
    features: {
      ar: ['حقن وتردد حراري بدون جراحة FIPP', 'علاج آلام الأورام والعمود الفقري', 'علاج آلام المفاصل المزمنة'],
      en: ['FIPP Non-Surgical Interventions', 'Spine & Cancer Pain Care', 'Chronic Joint Pain Management']
    }
  },
  {
    id: 'dep-5',
    specialtyId: 'neurosurgery',
    title: {
      ar: 'مركز جراحة المخ والأعصاب والعمود الفقري',
      en: 'Neurosurgery & Spine Surgery Center'
    },
    desc: {
      ar: 'ميكروسكوبات جراحية عالية الدقة لجراحات الانزلاق الغضروفي، استئصال الأورام، وتثبيت الفقرات التدخلي.',
      en: 'High-precision surgical microscopes for disc surgery, tumor resection, and minimally invasive spine fixation.'
    },
    icon: 'Brain',
    features: {
      ar: ['جراحات الميكروسكوب والمنظار للفقرات', 'استئصال أورام المخ والحبل الشوكي', 'جراحات الأعصاب للكبار والأطفال'],
      en: ['Microscopic Spine Surgeries', 'Brain & Spinal Cord Tumor Removal', 'Adult & Pediatric Neurosurgery']
    }
  },
  {
    id: 'dep-6',
    specialtyId: 'dentistry',
    title: {
      ar: 'قسم طب وجراحة الأسنان المتكامل',
      en: 'Department of Comprehensive Dentistry'
    },
    desc: {
      ar: 'رعاية أسنان شاملة بدون ألم تشمل أسنان الأطفال، التجميل، الجذور، اللثة، التقويم، والتركيبات وزراعة الأسنان.',
      en: 'Comprehensive pain-free dental care including pediatric, cosmetic, endodontic, orthodontic, and implant procedures.'
    },
    icon: 'Smile',
    features: {
      ar: ['أسنان الأطفال والتجميل والجذور', 'جراحة الفم والفكين وتقويم الأسنان', 'زراعة الأسنان والتركيبات الثابتة'],
      en: ['Pediatric & Cosmetic Dentistry', 'Oral & Maxillofacial Surgery', 'Dental Implants & Prosthodontics']
    }
  }
];

export const TRANSLATIONS = {
  ar: {
    hospitalTitle: 'Arabia Surgicare Hospital | المستشفى العربية للجراحة',
    hospitalName: 'المستشفى العربية للجراحة',
    topAddress: '📍 المهندسين، العجوزة، الجيزة، مصر',
    topHotline: '🟢 واتساب الاستقبال: 01118573813',
    adminBtn: '🔑 لوحة التحكم',
    navAbout: 'عن المستشفى',
    navGallery: 'ألبوم الصور',
    navSpecializations: 'الأقسام الطبية',
    navDoctors: 'الأطباء والاستشاريين',
    navContact: 'اتصل بنا',
    navBookBtn: 'اختر طبيبك واحجز الآن',
    heroBadge: '| التجهيزات الجراحية الشاملة والعيادات التخصصية الفائقة',
    heroTitle: 'رعاية طبية وجراحية متكاملة',
    heroTitleHighlight: 'تقوم على الثقة والخبرة المستمرة',
    heroDesc: 'صرح طبي جراحي متكامل يقدم رعاية صحية تخصصية فائقة تحت إشراف كبار أساتذة الجامعات والاستشاريين الحاصلين على الزمالات العالمية.',
    historyBadge: 'عراقة طبية متميزة',
    historySectionTitle: 'Arabia Surgicare Hospital وتجهيزاتها الفائقة',
    histText: 'تأسست المستشفى لتقدم رعاية طبية وجراحية متخصصة تقوم على الثقة، الخبرة، والاهتمام البالغ بصحة وسلامة المرضى في منطقة المهندسين والجيزة.',
    aboutExtraDesc: 'نحن نسعى دوماً لتبني أعلى المعايير القياسية العالمية للخدمات الطبية والجراحية. المستشفى مجهزة بأفضل التقنيات التشخيصية وغرف العمليات الميكروسكوبية ذات التعقيم الفائق بنظام تدفق الهواء اللامركزي.',
    galleryTitle: 'جولة مصورة داخل أروقة المشفى',
    galleryDesc: 'نستعرض معكم أحدث التجهيزات والعيادات والأجنحة الفندقية بالمستشفى العربية للجراحة',
    specBadge: 'أقسامنا الطبية التخصصية الستة',
    specTitle: 'تخصصات المستشفى العربية الفائقة',
    specDesc: 'نقدم خدمات تشخيصية وعلاجية فائقة الدقة عبر أقسامنا الطبية الستة التي يقود كلاً منها نخبة من كبار الأطباء والاستشاريين.',
    docSecBadge: 'نخبة كبار الأطباء الاستشاريين ورؤساء الأقسام',
    docSecTitle: 'دليل التخصصات والأطباء',
    docSecDesc: 'اختر التخصص من الشريط الجانبي للاطلاع على أطباء التخصص والسيرة الذاتية الكاملة ثم احجز عبر واتساب.',
    sidebarTitle: 'تخصصات العيادات (6 أقسام)',
    doctorCount: 'طبيب',
    doctorsCountSuffix: 'أطباء متوفرون',
    bookWaBtn: 'احجز موعد عبر الواتساب',
    experienceYears: 'سنوات خبرة',
    availableNow: 'متاح للكلينك والحجز',
    busyNow: 'غير متاح حالياً',
    achievementsLabel: 'أبرز الإنجازات والاعتمادات:',
    specializationsLabel: 'مجالات التخصص الدقيق:',
    timingsLabel: 'مواعيد العيادة:',
    educationLabel: 'المؤهلات العلمية:',
    contactBadge: 'متاحون لخدمتكم 24 ساعة',
    contactTitle: 'اتصل بنا أو أرسل استفسارك',
    mapLocationTag: '📍 العنوان الجغرافي:',
    contactCardHotline: '📞 الخط الساخن المباشر والاستقبال:',
    formName: 'الاسم الكامل',
    formPhone: 'رقم الهاتف',
    formMsg: 'تفاصيل رسالتك أو استفسارك الطبي...',
    formSubmit: 'إرسال الاستفسار الآن',
    contactSuccess: 'تم إرسال استفسارك بنجاح! سيتواصل معك أحد أطبائنا الاستشاريين قريباً.',
    mapTitle: '📍 الخريطة والموقع الجغرافي الدقيق للمستشفى',
    mapInfo: 'تقع المستشفى بموقع استراتيجي لتسهيل وصول المرضى.',
    footerDesc: 'نقدم رعاية جراحية متخصصة فائقة تقوم على أسس الثقة، والخبرة الطبية الشاملة لخدمة الوطن العربي بكافة الإمكانيات.',
    waModalTitle: 'حجز موعد عيادة عبر الواتساب',
    bookingFormPatientName: 'اسم المريض بالكامل',
    bookingFormPatientPhone: 'رقم هاتف المريض',
    bookingFormDate: 'التاريخ أو اليوم المفضل',
    waSubmitBtn: 'الانتقال للواتساب وتأكيد الحجز',
    adminTitle: 'لوحة التحكم وإدارة الأطباء والتخصصات',
    adminLoginRequired: 'تسجيل الدخول للمدير والموظفين المصرح لهم',
    adminPasswordLabel: 'رمز المرور السري للمدير (افتراضي: admin)',
    adminLoginBtn: 'دخول لوحة التحكم',
    adminLogout: 'تسجيل الخروج',
    adminSaveBtn: 'حفظ وتحديث بيانات الطبيب فوراً',
    adminAddDoctor: '➕ إضافة طبيب جديد',
    adminDeleteDoctor: '🗑️ حذف الطبيب',
    adminDoctorSelectLabel: 'اختر الطبيب للتعديل أو أضف طبيباً جديداً',
    adminSuccessMsg: 'تم حفظ التغييرات وتحديث بيانات الطبيب والتخصص بنجاح!'
  },
  en: {
    hospitalTitle: 'Arabia Surgicare Hospital',
    hospitalName: 'Arabia Surgicare Hospital',
    topAddress: '📍 Mohandessin, Agouza, Giza, Egypt',
    topHotline: '🟢 Reception WhatsApp: 01118573813',
    adminBtn: '🔑 Admin Panel',
    navAbout: 'About Hospital',
    navGallery: 'Photo Gallery',
    navSpecializations: 'Medical Specialties',
    navDoctors: 'Doctors & Consultants',
    navContact: 'Contact Us',
    navBookBtn: 'Choose Doctor & Book Now',
    heroBadge: '| Advanced Surgical & Specialized Medical Care',
    heroTitle: 'Comprehensive Surgical Care',
    heroTitleHighlight: 'Built on Trust & Deep Expertise',
    heroDesc: 'A premier surgical center providing world-class medical care under the supervision of senior professors and international fellows.',
    historyBadge: 'Medical Excellence',
    historySectionTitle: 'Arabia Surgicare Hospital Facilities',
    histText: 'Established to deliver dedicated medical and surgical care rooted in safety, quality, and patient-centered excellence in Giza and Cairo.',
    aboutExtraDesc: 'We strictly adopt top international healthcare standards. Equipped with German laparoscopic suites, ultra-clean laminar airflow operating rooms, and 24/7 emergency response.',
    galleryTitle: 'Virtual Tour Inside Our Hospital',
    galleryDesc: 'Explore our state-of-the-art clinics, surgical suites, and patient care suites.',
    specBadge: 'Major Surgical Departments',
    specTitle: 'Arabia Surgicare Specialties',
    specDesc: 'Delivering precision diagnostics and surgical interventions across our 6 core medical departments led by top consultants.',
    docSecBadge: 'Senior Consultants & Department Heads',
    docSecTitle: 'Doctors Directory & Side Tabs',
    docSecDesc: 'Select a specialty from the sidebar tabs to view all consultant profiles, achievements, timings, and book via WhatsApp.',
    sidebarTitle: 'Specialties (6 Departments)',
    doctorCount: 'Doctor',
    doctorsCountSuffix: 'Doctors Available',
    bookWaBtn: 'Book Appointment via WhatsApp',
    experienceYears: 'Years Experience',
    availableNow: 'Available for Appointments',
    busyNow: 'Currently Unavailable',
    achievementsLabel: 'Key Achievements & Fellowships:',
    specializationsLabel: 'Sub-Specialties & Focus Areas:',
    timingsLabel: 'Clinic Hours & Days:',
    educationLabel: 'Education & Qualifications:',
    contactBadge: '24/7 Patient Assistance',
    contactTitle: 'Contact Us or Send Inquiry',
    mapLocationTag: '📍 Physical Address:',
    contactCardHotline: '📞 Reception Hotline & WhatsApp:',
    formName: 'Full Name',
    formPhone: 'Phone Number',
    formMsg: 'Your message or medical inquiry...',
    formSubmit: 'Send Inquiry Now',
    contactSuccess: 'Inquiry sent successfully! One of our medical advisors will reach out to you shortly.',
    mapTitle: '📍 Interactive Hospital Map & Location',
    mapInfo: 'Strategically located in Mohandessin for convenient patient access.',
    footerDesc: 'Providing specialized surgical and medical excellence built on safety, expertise, and compassionate care.',
    waModalTitle: 'Book WhatsApp Clinic Appointment',
    bookingFormPatientName: 'Patient Full Name',
    bookingFormPatientPhone: 'Patient Phone Number',
    bookingFormDate: 'Preferred Day / Date',
    waSubmitBtn: 'Proceed to WhatsApp to Confirm Booking',
    adminTitle: 'Admin Dashboard & Doctor Management',
    adminLoginRequired: 'Authorized Personnel Login',
    adminPasswordLabel: 'Admin Password (default: admin)',
    adminLoginBtn: 'Login to Dashboard',
    adminLogout: 'Logout Admin',
    adminSaveBtn: 'Save & Update Doctor Info Immediately',
    adminAddDoctor: '➕ Add New Doctor',
    adminDeleteDoctor: '🗑️ Delete Doctor',
    adminDoctorSelectLabel: 'Select Doctor to Edit or Add New',
    adminSuccessMsg: 'Doctor information saved and updated successfully!'
  }
};
