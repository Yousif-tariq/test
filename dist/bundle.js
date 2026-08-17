// Public Website Standalone Dynamic Bundle - أساسات المشاعر المحدودة

(function () {
  'use strict';

  // --- 1. SVGs & Icons ---
  const serviceIcons = {
    cctv_security: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16.7 8A3 3 0 0 0 14 6h-4a3 3 0 0 0-2.7 2L6 14h12l-1.3-6z"></path><path d="M12 14v4"></path><path d="M10 18h4"></path><circle cx="12" cy="10" r="2"></circle></svg>`,
    access_control: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path><circle cx="12" cy="16" r="1.5"></circle></svg>`,
    intrusion_alarm: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path><path d="M2 8c0-2.2 1.8-4 4-4"></path><path d="M22 8c0-2.2-1.8-4-4-4"></path></svg>`,
    fire_alarm: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 3z"></path></svg>`,
    networks_telecom: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="3"></circle><circle cx="5" cy="19" r="3"></circle><circle cx="19" cy="19" r="3"></circle><line x1="8" y1="17.5" x2="10.5" y2="7.5"></line><line x1="16" y1="17.5" x2="13.5" y2="7.5"></line></svg>`,
    smart_audio: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>`,
    ip_pbx: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`,
    bms_systems: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="9" y1="22" x2="9" y2="22.01"></line><line x1="15" y1="22" x2="15" y2="22.01"></line><line x1="9" y1="18" x2="9" y2="18.01"></line><line x1="15" y1="18" x2="15" y2="18.01"></line><line x1="9" y1="14" x2="9" y2="14.01"></line><line x1="15" y1="14" x2="15" y2="14.01"></line><line x1="9" y1="10" x2="9" y2="10.01"></line><line x1="15" y1="10" x2="15" y2="10.01"></line><line x1="9" y1="6" x2="9" y2="6.01"></line><line x1="15" y1="6" x2="15" y2="6.01"></line></svg>`,
    smart_home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline><path d="M12 2v3"></path></svg>`,
    audiovisual: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line><circle cx="12" cy="10" r="3"></circle></svg>`,
    shield_check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>`,
    sparkles: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3z"></path></svg>`,
    network_nodes: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"></circle><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="6" r="3"></circle><line x1="8.5" y1="8.5" x2="15.5" y2="15.5"></line><line x1="8.5" y1="15.5" x2="15.5" y2="8.5"></line></svg>`,
    cpu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="9" y="9" width="6" height="6"></rect><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"></path></svg>`,
    layers: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`,
    phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`,
    location: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
    mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>`,
    check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
    close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,
    arrow_left: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>`
  };

  function getIcon(name) {
    return serviceIcons[name] || serviceIcons.sparkles;
  }

  // --- 2. XSS Sanitization & Security ---
  function sanitizeHtml(input) {
    if (typeof input !== 'string') return '';
    let clean = input.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    clean = clean.replace(/<\/?(iframe|object|embed|applet|meta|link|base|form|input|button)\b[^>]*>/gi, '');
    clean = clean.replace(/javascript\s*:/gi, 'blocked:');
    clean = clean.replace(/vbscript\s*:/gi, 'blocked:');
    clean = clean.replace(/data\s*:\s*text\/html/gi, 'blocked:');
    clean = clean.replace(/\son\w+\s*=\s*(?:'[^']*'|"[^"]*"|[^\s>]+)/gi, '');
    clean = clean.replace(/expression\s*\(/gi, 'no-expr(');
    return clean;
  }

  function sanitizeObject(data) {
    if (data === null || data === undefined) return data;
    if (typeof data === 'string') return sanitizeHtml(data);
    if (Array.isArray(data)) return data.map(item => sanitizeObject(item));
    if (typeof data === 'object') {
      const cleanObj = {};
      for (const [key, value] of Object.entries(data)) {
        cleanObj[key] = sanitizeObject(value);
      }
      return cleanObj;
    }
    return data;
  }

  // --- 3. CMS Store Loader & Real-Time Sync ---
  const STORE_KEY = 'asasat_cms_store_v3';

  function getCMSData(isPreview) {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (isPreview && parsed.draft) return sanitizeObject(parsed.draft);
        if (!isPreview && parsed.published) return sanitizeObject(parsed.published);
      }
    } catch (e) {
      console.warn('Could not read CMS store, fallback to default', e);
    }
    return null;
  }

  async function fetchLiveCMSData(isPreview) {
    try {
      if (isPreview) {
        const token = localStorage.getItem('asasat_jwt_token');
        const res = await fetch('/api/admin/cms/state', {
          headers: token ? { 'Authorization': `Bearer ${token}` } : {}
        });
        if (res.ok) {
          const result = await res.json();
          if (result.success && result.state && result.state.draft) {
            return sanitizeObject(result.state.draft);
          }
        }
      } else {
        const res = await fetch('/api/cms/published');
        if (res.ok) {
          const result = await res.json();
          if (result.success && result.data) {
            return sanitizeObject(result.data);
          }
        }
      }
    } catch (err) {
      console.warn('[Asasat Public] Backend API connecting:', err);
    }
    return null;
  }

  async function publishFromPreview() {
    try {
      const token = localStorage.getItem('asasat_jwt_token');
      const res = await fetch('/api/admin/cms/publish', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { 'Authorization': `Bearer ${token}` } : {})
        },
        body: JSON.stringify({ summary: 'نشر التعديلات من شريط المعاينة المباشرة' })
      });
      const result = await res.json();
      if (res.ok && result.success) {
        return true;
      }
    } catch (e) {
      console.error(e);
    }
    return false;
  }

  // --- 3. Default Fallbacks ---
  const defaultServices = [
    {
      id: 'service-01', number: '01', title: 'أنظمة الأمان والمراقبة', titleEn: 'Security & Surveillance Systems', category: 'الأمن والحماية', iconName: 'cctv_security',
      shortDescription: 'أنظمة متقدمة لحماية المنشآت ومراقبتها ورفع مستوى الأمن والسلامة',
      fullDescription: 'نقدم منظومات مراقبة أمنية متكاملة تعتمد على كاميرات الذكاء الاصطناعي فائقة الدقة (AI CCTV) مع خوادم التسجيل وإدارة الفيديو VMS، والتعرف التلقائي على الوجوه والمركبات، والإنذار المبكر للأحداث في الوقت الفعلي.',
      features: ['كاميرات فائقة الدقة 4K و PTZ', 'تحليلات الفيديو بالذكاء الاصطناعي (AI Analytics)', 'خوادم إدارة وتسجيل الفيديو VMS / NVR', 'الرؤية الليلية المتقدمة والتصوير الحراري', 'غرف عمليات ومراقبة مركزية 24/7'],
      applications: ['المنشآت التجارية والمكاتب', 'المشاريع الحكومية والخاصة', 'الأبراج والمجمعات الذكية'],
      technologies: ['AI CCTV', 'VMS', 'NVR', 'Thermal Imaging', 'ANPR'], imagePath: 'img/JUST.jpg'
    },
    {
      id: 'service-02', number: '02', title: 'أنظمة التحكم بالدخول والخروج', titleEn: 'Access Control & Biometrics', category: 'الأمن وإدارة الوصول', iconName: 'access_control',
      shortDescription: 'حلول متكاملة لإدارة الدخول والخروج والتحكم في صلاحيات الوصول',
      fullDescription: 'منظومة متطورة لإدارة وتدقيق الوصول للمنشآت الحيوية والمكاتب عبر بوابات إلكترونية ذكية، وقارئات البصمة الحيوية وبصمة الوجه، والبطاقات المشفرة RFID، مع ربط مباشر بقواعد البيانات وسجلات الحضور المركزية.',
      features: ['بوابات أمنية دوارة وبوابات ذراعية ذكية', 'قارئات البصمة ثلاثية الأبعاد والتعرف على الوجه', 'بطاقات ذكية مشفرة وتصاريح دخول رقمية', 'أقفال كهرومغناطيسية وأنظمة إقفال آمنة', 'تقارير فورية وتتبع صلاحيات الأفراد'],
      applications: ['المقرات الإدارية والشركات', 'المستودعات والمنشآت الحيوية', 'المجمعات السكنية'],
      technologies: ['Biometrics', 'Facial Recognition', 'RFID', 'Speed Gates', 'Magnetic Locks'], imagePath: 'img/JUST.jpg'
    },
    {
      id: 'service-03', number: '03', title: 'أنظمة الإنذار والاتصالات', titleEn: 'Intrusion Alarm & Public Comms', category: 'الإنذار والاتصالات', iconName: 'intrusion_alarm',
      shortDescription: 'حلول إنذار واتصالات متقدمة للمنشآت والمرافق',
      fullDescription: 'أنظمة إنذار مبكر لرصد التسلل وكشف الحركة والكسر للمحيط الأمني، مدمجة مع شبكات النداء العام (PA System) واتصالات الطوارئ الصوتية لتأمين المنشآت وحماية الأصول على مدار الساعة.',
      features: ['حساسات حركة محيطية وليزرية متقدمة', 'لوحات إنذار مركزية مع إشعارات فورية', 'أنظمة النداء العام والتوجيه الصوتي PA', 'أجهزة انتركم طوارئ مرئية ومقاومة للتخريب', 'تكامل فوري مع غرف العمليات والمراقبة'],
      applications: ['المرافق الحكومية والحيوية', 'المصانع والمستودعات', 'الأبراج السكنية والتجارية'],
      technologies: ['PIR Sensors', 'Laser Perimeter', 'Public Address', 'Emergency Intercom', 'Alarm Panels'], imagePath: 'img/TECHNOLGY.jpg'
    },
    {
      id: 'service-04', number: '04', title: 'إنذار الحريق', titleEn: 'Fire Alarm & Detection Systems', category: 'السلامة وحماية الأرواح', iconName: 'fire_alarm',
      shortDescription: 'أنظمة كشف وإنذار الحريق لحماية الأشخاص والممتلكات',
      fullDescription: 'نصمم وننفذ أحدث أنظمة كشف وإنذار الحريق المعنونة (Addressable Fire Alarm Systems) المعتمدة دولياً، والتي تضمن الكشف السريع عن الدخان والحرارة وتفعيل خطط الإخلاء التلقائي والربط مع أنظمة الإطفاء والتهوية.',
      features: ['لوحات تحكم معنونة فائقة الدقة والاعتمادية', 'كواشف دخان وحرارة وكواشف بصرية متطورة', 'أجراس وسرينات إنذار صوتية ومرئية قوية', 'ربط آلي مع أنظمة التكييف والمصاعد والإطفاء', 'لوحات تكرار ومراقبة مركزية'],
      applications: ['جميع أنواع المنشآت والمباني', 'الفنادق والمستشفيات', 'المجمعات السكنية والصناعية'],
      technologies: ['Addressable Panels', 'Smoke/Heat Detectors', 'Audio-Visual Strobes', 'HVAC Shutdown', 'UL/FM Listed'], imagePath: 'img/TECHNOLGY.jpg'
    },
    {
      id: 'service-05', number: '05', title: 'الشبكات والاتصالات', titleEn: 'Networking & Telecom Infrastructure', category: 'البنية التحتية الرقمية', iconName: 'networks_telecom',
      shortDescription: 'تصميم وتنفيذ البنية التحتية للشبكات وأنظمة الاتصالات',
      fullDescription: 'تأسيس بنية تحتية رقمية متكاملة تشمل تمديد كابلات الألياف الضوئية (Fiber Optics) وشبكات Cat6/Cat6A المعتمدة، وتجهيز غرف الخوادم (Data Centers & Racks)، وتوزيع شبكات الواي فاي المؤسسية فائقة السرعة.',
      features: ['شبكات الألياف الضوئية والكابلات الهيكلية المنظمة', 'سيرفرات وكبائن راك مع أنظمة إدارة الكابلات', 'شبكات Wi-Fi 6 و Wi-Fi 7 للمؤسسات الكبرى', 'سويتشات وروترات صناعية وإدارية متقدمة', 'حلول جدران الحماية والأمان السيبراني للشبكات'],
      applications: ['المقرات الإدارية والشركات', 'مراكز البيانات Data Centers', 'الأبراج والمستشفيات'],
      technologies: ['Fiber Optics', 'Structured Cabling', 'Enterprise Wi-Fi 6/7', 'Cisco/Aruba Switches', 'Server Racks'], imagePath: 'img/TECHNOLGY.jpg'
    },
    {
      id: 'service-06', number: '06', title: 'الأنظمة الذكية والصوتيات', titleEn: 'Smart Acoustics & Sound Systems', category: 'الصوتيات الذكية', iconName: 'smart_audio',
      shortDescription: 'حلول الأنظمة الذكية والصوتية للمباني والمنشآت',
      fullDescription: 'حلول هندسية صوتية شاملة لتوزيع الصوت الاحترافي متعدد المناطق (Multi-Zone Audio) للمباني، المساجد، القاعات، والمجمعات التجارية، مع معالجات رقمية DSP وأجهزة ميكروفونات ومكبرات عالية النقاوة.',
      features: ['توزيع صوتي متعدد القنوات والمناطق', 'معالجات صوتية رقمية متطورة DSP', 'سماعات سقفية وجدارية احترافية عالية الدقة', 'مصفوفات ميكروفونات لاسلكية وأنظمة مؤتمرات', 'تحكم رقمي بالصوت عبر شاشات لمس وتطبيقات'],
      applications: ['المراكز التجارية والمولات', 'المساجد وقاعات الاحتفالات', 'المقرات الإدارية'],
      technologies: ['DSP Processors', 'Multi-Zone Matrix', 'Commercial Speakers', 'Wireless Microphones', 'Acoustic Tuning'], imagePath: 'img/JUST.jpg'
    },
    {
      id: 'service-07', number: '07', title: 'السنترال', titleEn: 'IP-PBX & Telephony Systems', category: 'الاتصالات المؤسسية', iconName: 'ip_pbx',
      shortDescription: 'أنظمة الاتصالات الهاتفية وإدارة الاتصالات الداخلية',
      fullDescription: 'حلول سنترالات IP-PBX الحديثة للشركات والمؤسسات، توفر اتصالات موحدة عبر بروتوكول الإنترنت VoIP، وإدارة ذكية للمكالمات، وربط الفروع، والرد الآلي IVR، والتكامل مع أنظمة خدمة العملاء.',
      features: ['سنترالات IP-PBX محلية وسحابية عالية الاعتمادية', 'هواتف مكتبية IP وهواتف تنفيذية بشاشات لمس', 'نظام الرد الآلي التفاعلي IVR وتوزيع المكالمات', 'ربط الفروع والمكاتب المتعددة بشبكة موحدة', 'تسجيل المكالمات وتقارير أداء الاتصالات'],
      applications: ['الشركات والمؤسسات الكبرى', 'الفنادق والمنتجعات', 'مراكز الاتصال Call Centers'],
      technologies: ['VoIP', 'IP-PBX', 'SIP Trunk', 'IVR System', 'Unified Communications'], imagePath: 'img/TECHNOLGY.jpg'
    },
    {
      id: 'service-08', number: '08', title: 'إدارة المباني BMS', titleEn: 'Building Management Systems (BMS)', category: 'الأنظمة الذكية والأتمتة', iconName: 'bms_systems',
      shortDescription: 'أنظمة إدارة ومراقبة المباني والتحكم في الأنظمة المختلفة مركزيًا',
      fullDescription: 'منظومات BMS مركزية لأتمتة ومراقبة كافة مرافق المبنى تشمل التحكم في وحدات التكييف والتهوية HVAC، ومراقبة استهلاك الطاقة والمياه، والتحكم بالإضاءة الذكية، وجدولة التشغيل لتقليل التكاليف التشغيلية.',
      features: ['لوحة تحكم وتحكم مركزي موحد للمبنى', 'أتمتة وحدات التكييف والتهوية الميكانيكية HVAC', 'مراقبة استهلاك الطاقة وتوليد تقارير الكفاءة', 'جدولة تلقائية للإضاءة والأجهزة لتقليل الهدر', 'استشعار الأعطال والصيانة التنبؤية الفورية'],
      applications: ['الأبراج التجارية والمكتبية', 'المستشفيات والمراكز الطبية', 'المدن والمشاريع الذكية'],
      technologies: ['BMS Controllers', 'HVAC Integration', 'BACnet/Modbus', 'Energy Metering', 'SCADA'], imagePath: 'img/TECHNOLGY.jpg'
    },
    {
      id: 'service-09', number: '09', title: 'المنازل الذكية', titleEn: 'Smart Home Automation', category: 'الأتمتة السكنية', iconName: 'smart_home',
      shortDescription: 'حلول متقدمة للتحكم والإدارة الذكية داخل المنازل',
      fullDescription: 'تحويل المنازل والفلل إلى بيئات ذكية بالكامل تتيح التحكم المركزي في الإضاءة، الستائر الكهربائية، التكييف، الترفيه الصوتي، وكاميرات الأمان من خلال شاشات لمس حائطية وتطبيقات الهواتف والأوامر الصوتية.',
      features: ['سيناريوهات ذكية مخصصة (الوصول، المغادرة، النوم)', 'تحكم كامل بالإضاءة والستائر والمناخ', 'تكامل مع الأوامر الصوتية وشاشات الحائط الذكية', 'حساسات ذكية للحركة والحرارة وترشيد الطاقة', 'تأمين المداخل والأبواب بأقفال ذكية متصلة'],
      applications: ['الفلل والقصور السكنية', 'الشقق الفاخرة', 'المجمعات السكنية المغلقة'],
      technologies: ['KNX', 'Zigbee', 'Smart Relays', 'Touch Panels', 'Voice Control'], imagePath: 'img/JUST.jpg'
    },
    {
      id: 'service-10', number: '10', title: 'الأنظمة المرئية والصوتية', titleEn: 'Audiovisual & Meeting Solutions', category: 'العرض والاجتماعات الذكية', iconName: 'audiovisual',
      shortDescription: 'حلول متكاملة للأنظمة المرئية والصوتية للمشاريع والمنشآت',
      fullDescription: 'تجهيز قاعات المؤتمرات وغرف الاجتماعات الذكية بأحدث شاشات العرض التفاعلية وجدران الفيديو (Video Walls)، وأنظمة المؤتمرات المرئية عن بُعد (Video Conferencing)، وحلول العرض اللاسلكي المتقدمة.',
      features: ['شاشات عرض تفاعلية 4K وجدران فيديو LED', 'أنظمة المؤتمرات المرئية الذكية مع تتبع المتحدث', 'أنظمة مشاركة الشاشة والعرض اللاسلكي الفوري', 'أنظمة تحكم مركزي بالقاعة عبر شاشات لمس مخصصة', 'عزل صوتي وتجهيز هندسي متكامل للقاعات'],
      applications: ['غرف مجالس الإدارة والاجتماعات', 'قاعات التدريب والمؤتمرات', 'غرف التحكم والمراقبة'],
      technologies: ['Video Walls', 'Interactive Displays', 'Zoom/Teams Rooms', 'Wireless Presentation', 'Crestron Control'], imagePath: 'img/IT TEAM.jpg'
    }
  ];

  // --- 4. Main App Controller ---
  const PublicApp = {
    currentServices: [],
    isPreview: false,

    async init() {
      const params = new URLSearchParams(window.location.search);
      this.isPreview = params.get('preview') === 'true';

      this.render();

      window.addEventListener('storage', () => {
        this.render();
      });

      // Fetch live data from REST API
      let currentKnownVersion = '';
      const syncWithBackend = async () => {
        try {
          if (this.isPreview) {
            const liveData = await fetchLiveCMSData(true);
            if (liveData) {
              const raw = localStorage.getItem(STORE_KEY);
              const currentStore = raw ? JSON.parse(raw) : {};
              currentStore.draft = liveData;
              localStorage.setItem(STORE_KEY, JSON.stringify(currentStore));
              this.render();
            }
          } else {
            const verRes = await fetch('/api/cms/version');
            if (verRes.ok) {
              const verData = await verRes.json();
              const serverVer = `${verData.version}_${verData.lastPublishedAt || ''}`;
              if (!currentKnownVersion) {
                currentKnownVersion = serverVer;
              } else if (currentKnownVersion !== serverVer) {
                currentKnownVersion = serverVer;
                const liveData = await fetchLiveCMSData(false);
                if (liveData) {
                  const raw = localStorage.getItem(STORE_KEY);
                  const currentStore = raw ? JSON.parse(raw) : {};
                  currentStore.published = liveData;
                  localStorage.setItem(STORE_KEY, JSON.stringify(currentStore));
                  this.render();
                }
              }
            }
          }
        } catch (e) {}
      };

      const liveData = await fetchLiveCMSData(this.isPreview);
      if (liveData) {
        try {
          const raw = localStorage.getItem(STORE_KEY);
          const currentStore = raw ? JSON.parse(raw) : {};
          if (this.isPreview) {
            currentStore.draft = liveData;
          } else {
            currentStore.published = liveData;
          }
          localStorage.setItem(STORE_KEY, JSON.stringify(currentStore));
        } catch (e) {}
        this.render();
      }

      // Real-time automatic polling every 3 seconds
      setInterval(syncWithBackend, 3000);
    },

    render() {
      const root = document.getElementById('app');
      if (!root) return;

      const cmsData = getCMSData(this.isPreview);

      const navLinks = cmsData?.navigation || [
        { id: 'nav-1', label: 'الرئيسية', url: '#hero', isActive: true },
        { id: 'nav-2', label: 'من نحن', url: '#about', isActive: true },
        { id: 'nav-3', label: 'خدماتنا وحلولنا', url: '#services', isActive: true },
        { id: 'nav-4', label: 'الحلول المتكاملة', url: '#ecosystem', isActive: true },
        { id: 'nav-5', label: 'لماذا نحن', url: '#why-us', isActive: true },
        { id: 'nav-6', label: 'القطاعات', url: '#sectors', isActive: true },
        { id: 'nav-7', label: 'تواصل معنا', url: '#contact', isActive: true }
      ];

      const hero = cmsData?.hero || {
        statusPill: 'منظومة متكاملة • تقنيات وحلول المنشآت الذكية والأمنية',
        titlePrefix: 'أساسات المشاعر المحدودة',
        titleHighlight: 'حلول تقنية متكاملة لحماية وإدارة المنشآت الذكية',
        description: 'نصمم وننفذ أحدث منظومات المراقبة والأمان، التحكم بالدخول، إنذار الحريق، البنية التحتية للشبكات والاتصالات، وإدارة المباني الذكية BMS بأعلى المعايير الهندسية.',
        videoPath: 'img/BG_VEDIO.mp4',
        posterPath: 'img/JUST.jpg',
        primaryBtnText: 'استكشف خدماتنا وحلولنا',
        primaryBtnUrl: '#services',
        secondaryBtnText: 'تواصل مع خبرائنا',
        secondaryBtnUrl: '#contact',
        features: [
          { icon: 'shield_check', text: 'أنظمة معتمدة عالمياً' },
          { icon: 'network_nodes', text: 'تكامل ذكي موحد 100%' },
          { icon: 'cpu', text: 'دعم فني واستجابة 24/7' },
          { icon: 'layers', text: 'بنية تحتية متطورة قابلة للتوسع' }
        ]
      };

      const about = cmsData?.about || {
        badge: 'من نحن — نبذة عن الشركة',
        title: 'شريككم الاستراتيجي في بناء',
        titleHighlight: 'المنظومات التقنية الذكية',
        leadText: 'تُعد شركة أساسات المشاعر المحدودة رائدة في تقديم الحلول والأنظمة التقنية المتكاملة للمنشآت الذكية، البنية التحتية للشبكات، أنظمة الأمان والمراقبة، التحكم بالدخول، وإدارة المباني BMS.',
        subtitle: 'نعمل وفق أعلى معايير الجودة العالمية لنضمن لعملائنا في القطاعات التجارية، الإدارية، والحكومية بيئة تشغيلية ذكية، آمنة، ومستدامة تمتاز بأعلى درجات الكفاءة والموثوقية.',
        imagePath: 'img/IT TEAM.jpg',
        floatingBadgeText: 'فريق هندسي وتقني متخصص',
        imageOverlayTitle: 'خبرة هندسية موثوقة',
        imageOverlaySubtitle: 'كفاءة عالية في تنفيذ المشاريع الكبرى',
        pillars: [
          { icon: 'shield_check', title: 'الأمان والموثوقية', description: 'نلتزم بأعلى معايير الحماية الهندسية المعتمدة لضمان أمان المنشآت وسلامة الأفراد.' },
          { icon: 'network_nodes', title: 'التكامل الرقمي', description: 'نوحد جميع الأنظمة الأمنية والذكية لتعمل معاً بكفاءة وتجانس تام.' },
          { icon: 'cpu', title: 'التقنيات الحديثة', description: 'نعتمد على أحدث حلول الذكاء الاصطناعي، إنترنت الأشياء (IoT)، والأتمتة المتقدمة.' },
          { icon: 'layers', title: 'الجودة والاستدامة', description: 'نقدم حلولاً هندسية قابلة للتوسع وتدوم طويلاً مع ترشيد استهلاك الطاقة والموارد.' }
        ]
      };

      this.currentServices = cmsData?.services || defaultServices;
      const stats = cmsData?.stats || [
        { id: 'ind-1', title: 'أنظمة معتمدة عالمياً', badge: 'CERTIFIED', icon: 'shield_check', description: 'مطابقة لأحدث معايير السلامة والجودة واللوائح الهندسية المعتمدة.' },
        { id: 'ind-2', title: 'تكامل وتشغيل موحد', badge: 'INTEGRATED', icon: 'network_nodes', description: 'ترابط رقمي شامل يجمع كافة الأنظمة الأمنية في منصة إدارة مركزية.' },
        { id: 'ind-3', title: 'جاهزية ودعم 24/7', badge: 'RELIABLE', icon: 'sparkles', description: 'استجابة سريعة وصيانة وقائية وتصحيحية لضمان استمرارية التشغيل.' },
        { id: 'ind-4', title: 'كفاءة واستدامة المنشآت', badge: 'SMART BMS', icon: 'cpu', description: 'أتمتة متقدمة تساهم في خفض تكاليف الطاقة ورفع الكفاءة التشغيلية.' }
      ];

      const solutions = cmsData?.solutions || [
        { id: 'node-sec', title: 'الأمن والمراقبة الذكية', role: 'الرصد والتحليل الفوري AI', icon: 'cctv_security', metric: '99.9% دقة التعرف', description: 'تكامل كاميرات الذكاء الاصطناعي مع بوابات الدخول ونظام BMS للإنذار المبكر والتتبع اللحظي.' },
        { id: 'node-acc', title: 'التحكم بالدخول والهوية', role: 'إدارة الوصول والتصاريح', icon: 'access_control', metric: '0.2s سرعة الاستجابة', description: 'بوابات ذكية وقارئات بيومترية تفتح تلقائياً في حالات الطوارئ وتغلق في أوقات الحظر.' },
        { id: 'node-fire', title: 'إنذار وكشف الحريق', role: 'حماية الأرواح والمنشأة', icon: 'fire_alarm', metric: 'معتمد UL/FM', description: 'ربط مباشر مع أنظمة التكييف لإيقاف سحب الدخان وفتح مسارات الإخلاء وتشغيل النداء الصوتي العام.' },
        { id: 'node-net', title: 'البنية التحتية والشبكات', role: 'العمود الفقري للبيانات', icon: 'networks_telecom', metric: '10 Gbps سرعة النقل', description: 'شبكات ألياف ضوئية فائقة الاستقرار تغذي كافة الأجهزة والخوادم بقدرة تشغيل مستمرة 24/7.' },
        { id: 'node-bms', title: 'إدارة المباني BMS', role: 'الأتمتة وكفاءة الطاقة', icon: 'bms_systems', metric: '35% وفر تشغيلي', description: 'لوحة تحكم موحدة تتيح مراقبة واستهلاك الطاقة والتحكم بالمناخ والإضاءة تلقائياً.' },
        { id: 'node-pbx', title: 'الاتصالات والسنترال IP', role: 'التواصل والربط المؤسسي', icon: 'ip_pbx', metric: 'VoIP الموحد', description: 'سنترال سحابي ومحلي متكامل لربط المكاتب وغرف العمليات وهواتف الطوارئ الصوتية.' }
      ];

      const whyUs = cmsData?.whyUs || [
        { id: 'why-1', title: 'ريادة وخبرة هندسية معتمدة', subtitle: 'معايير عالمية', badge: 'خبرة وموثوقية', icon: 'shield_check', span: 2, description: 'فريق هندسي متخصص في تصميم وتوريد وتنفيذ كافة الأنظمة الأمنية والذكية للمنشآت الحيوية والتجارية بدقة وإتقان واحترافية متناهية.' },
        { id: 'why-2', title: 'تكامل رقمي موحد 100%', subtitle: 'Single Ecosystem', badge: 'أنظمة متجانسة', icon: 'network_nodes', span: 1, description: 'نضمن ترابط جميع الأنظمة (مراقبة، دخول، حريق، شبكات، BMS) للعمل معاً بسلاسة تامة دون أية فجوات تشغيلية.' },
        { id: 'why-3', title: 'تقنيات الذكاء الاصطناعي', subtitle: 'AI Driven Security', badge: 'حلول استباقية', icon: 'cpu', span: 1, description: 'توظيف كاميرات AI CCTV وخوارزميات التعرف على الأنماط والوجوه والمركبات لرفع كفاءة الحماية والتنبؤ بالأحداث.' },
        { id: 'why-4', title: 'دعم فني وصيانة وقائية 24/7', subtitle: 'جاهزية قصوى', badge: 'استجابة فورية', icon: 'sparkles', span: 2, description: 'عقود صيانة معتمدة، استجابة سريعة، ودعم هندسي على مدار الساعة لضمان استمرارية عمل المنظومات دون انقطاع.' }
      ];

      const sectors = cmsData?.sectors || [
        { id: 'sec-gov', title: 'المشاريع الحكومية والجهات الرسمية', subtitle: 'Government & Public Sector', tag: 'أمان فائق واعتمادية', icon: 'shield_check', imagePath: 'img/JUST.jpg', description: 'أنظمة أمن ومراقبة معتمدة مع تحكم بالدخول عالي التشفير وغرف عمليات مركزية تلبي أعلى المعايير الأمنية.', highlights: ['غرف عمليات ومراقبة مركزية 24/7', 'بوابات أمنية مطابقة للمواصفات الحكومية', 'بنية تحتية مشفرة للشبكات والاتصالات'] },
        { id: 'sec-corp', title: 'الأبراج والمقرات الإدارية والشركات', subtitle: 'Commercial & Corporate Towers', tag: 'كفاءة تشغيلية ذكية', icon: 'layers', imagePath: 'img/TECHNOLGY.jpg', description: 'حلول أتمتة متكاملة تشمل إدارة المباني BMS، والسنترال السحابي، والتحكم بالطاقة والإضاءة والتكييف.', highlights: ['توفير استهلاك الطاقة بنسبة تصل إلى 35%', 'أنظمة حضور وانصراف وتحكم بالوصول', 'شبكات فايبر فائقة السرعة وواي فاي مؤسسي'] },
        { id: 'sec-hotel', title: 'القطاع الفندقي والضيافة', subtitle: 'Hotels & Hospitality', tag: 'تجربة ضيافة فاخرة', icon: 'sparkles', imagePath: 'img/IT TEAM.jpg', description: 'منظومات صوتيات ومرئيات ذكية لقاعات الاحتفالات وغرف النزلاء مع إدارة متقدمة للتكييف والإضاءة.', highlights: ['حلول صوتيات ذكية متعددة المناطق DSP', 'أنظمة قاعات المؤتمرات والاجتماعات الذكية', 'أنظمة إنذار حريق وإخلاء صوتي معتمدة'] },
        { id: 'sec-res', title: 'المجمعات السكنية والفلل الذكية', subtitle: 'Smart Residential Communities', tag: 'رفاهية وأمان مستمر', icon: 'cpu', imagePath: 'img/JUST.jpg', description: 'أتمتة المنازل الذكية (Smart Home) مع كاميرات محيطية وأقفال ذكية وتحكم كامل عبر تطبيقات الهواتف.', highlights: ['سيناريوهات ذكية للإنارة والتكييف والستائر', 'اتصال أمني مباشر وإنتركم مرئي ذكي', 'تحكم صوتي وتطبيقات ذكية مخصصة'] }
      ];

      const cta = cmsData?.cta || {
        badge: 'ابدأ مشروعك معنا اليوم',
        titlePrefix: 'هل تبحث عن',
        titleHighlight: 'حل تقني وهندسي متكامل لمشروعك؟',
        description: 'فريق مهندسينا ومستشارينا على أتم الاستعداد لدراسة متطلبات منشأتك، وتصميم وتوريد وتركيب أحدث المنظومات الأمنية والذكية بأعلى معايير الجودة العالمية.',
        buttonText: 'اطلب دراسة واستشارة لمشروعك',
        buttonUrl: '#contact',
        bgImagePath: 'img/FOTER BG.jpg'
      };

      const contact = cmsData?.contact || {
        phone: 'استشارات المشاريع والحلول المتكاملة',
        email: 'info@asasat.sa',
        address: 'المملكة العربية السعودية',
        workingHours: 'على مدار الساعة 24/7 للدعم الفني'
      };

      const footer = cmsData?.footer || {
        logoPath: 'img/LOGO.jpeg',
        brandName: 'أساسات المشاعر المحدودة',
        brandDesc: 'نصمم وننفذ أحدث منظومات المراقبة والأمان، التحكم بالدخول، إنذار الحريق، البنية التحتية للشبكات والاتصالات، وإدارة المباني الذكية BMS بأعلى المعايير الهندسية.',
        copyrightText: '© 2026 أساسات المشاعر المحدودة — جميع الحقوق محفوظة',
        featuredServices: ['أنظمة الأمان والمراقبة', 'التحكم بالدخول والخروج', 'أنظمة إنذار الحريق', 'البنية التحتية للشبكات', 'إدارة المباني BMS', 'المنازل الذكية والصوتيات']
      };

      // Preview Floating Bar
      const previewBar = this.isPreview ? `
        <div id="preview-mode-bar" style="position: fixed; top: 0; left: 0; right: 0; z-index: 99999; background: #0f172a; color: #ffffff; padding: 0.6rem 1.5rem; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 4px 20px rgba(0,0,0,0.3); font-family: var(--font-arabic);">
          <div style="display: flex; align-items: center; gap: 0.8rem;">
            <span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background: #f59e0b; animation: pulseGlow 1.5s infinite;"></span>
            <strong style="font-size: 0.92rem;">أنت الآن في وضع المعاينة المباشرة (مسودة غير منشورة)</strong>
          </div>
          <div style="display: flex; gap: 0.8rem; align-items: center;">
            <a href="admin.html" style="background: #ffffff; color: #0f172a; font-weight: 700; font-size: 0.82rem; padding: 0.35rem 0.9rem; border-radius: 99px; text-decoration: none;">العودة للوحة التحكم</a>
            <button id="preview-publish-btn" style="background: #0066ff; color: #ffffff; font-weight: 700; font-size: 0.82rem; padding: 0.35rem 0.9rem; border-radius: 99px; border: none; cursor: pointer;">نشر التغييرات الآن</button>
          </div>
        </div>
      ` : '';

      // Render Components
      const navLinksHtml = navLinks.filter(l => l.isActive).map(l => `<li><a href="${l.url}" class="nav-link">${l.label}</a></li>`).join('');
      const mobileNavHtml = navLinks.filter(l => l.isActive).map(l => `<a href="${l.url}" class="nav-link mobile-nav-link">${l.label}</a>`).join('');

      const heroFeatsHtml = (hero.features || []).map(f => `
        <div class="quick-feature-item">
          <div class="quick-feature-icon">${getIcon(f.icon)}</div>
          <span class="quick-feature-text">${f.text}</span>
        </div>
      `).join('');

      const statCardsHtml = stats.map(s => `
        <div class="stat-card">
          <div class="stat-icon-wrapper">${getIcon(s.icon)}</div>
          <div class="stat-badge">${s.badge}</div>
          <h3 class="stat-title">${s.title}</h3>
          <p class="stat-desc">${s.description}</p>
        </div>
      `).join('');

      const pillarsHtml = (about.pillars || []).map(p => `
        <div class="pillar-item">
          <div class="pillar-header">
            <div class="pillar-icon">${getIcon(p.icon)}</div>
            <h4 class="pillar-title">${p.title}</h4>
          </div>
          <p class="pillar-desc">${p.description}</p>
        </div>
      `).join('');

      const servicesCardsHtml = this.currentServices.map((s, idx) => `
        <article class="service-card" data-service-id="${s.id}" data-index="${idx}" tabindex="0" role="button">
          <div class="service-card-top">
            <div class="service-icon-box"><span class="service-svg-icon">${getIcon(s.iconName)}</span></div>
            <span class="service-number">${s.number}</span>
          </div>
          <div class="service-card-body">
            <span class="service-category-tag">${s.category}</span>
            <h3 class="service-card-title">${s.title}</h3>
            <p class="service-card-desc">${s.shortDescription}</p>
          </div>
          <div class="service-card-footer">
            <span class="service-btn-link"><span>استكشف المنظومة</span>${getIcon('arrow_left')}</span>
            <span style="font-size: 0.75rem; color: var(--blue-electric); font-family: var(--font-latin); font-weight: 700;">${s.titleEn ? s.titleEn.split(' ')[0] : 'SYS'}</span>
          </div>
        </article>
      `).join('');

      const initialEco = solutions[0] || {};
      const ecoNodesHtml = solutions.map((n, i) => `
        <button class="eco-node-btn ${i === 0 ? 'active' : ''}" data-node-id="${n.id}">
          <div class="eco-node-icon">${getIcon(n.icon)}</div>
          <span class="eco-node-title">${n.title}</span>
          <span class="eco-node-metric">${n.metric}</span>
        </button>
      `).join('');

      const whyCardsHtml = whyUs.map(w => `
        <div class="why-card ${w.span === 2 ? 'span-2' : ''}">
          <div>
            <div class="why-card-header">
              <div class="why-card-icon">${getIcon(w.icon)}</div>
              <span class="why-card-badge">${w.badge}</span>
            </div>
            <h3 class="why-card-title">${w.title}</h3>
            <div class="why-card-subtitle">${w.subtitle}</div>
            <p class="why-card-desc">${w.description}</p>
          </div>
        </div>
      `).join('');

      const initialSec = sectors[0] || {};
      const secTabsHtml = sectors.map((sec, i) => `
        <button class="sector-tab-btn ${i === 0 ? 'active' : ''}" data-sector-id="${sec.id}">${sec.title}</button>
      `).join('');

      const footerServicesHtml = (footer.featuredServices || []).map(s => `<li><a href="#services">${s}</a></li>`).join('');

      root.innerHTML = `
        ${previewBar}
        <header class="navbar" id="navbar" style="${this.isPreview ? 'top: 42px;' : ''}">
          <div class="container navbar-container">
            <a href="#hero" class="navbar-logo-link">
              <img src="img/LOGO.jpeg" alt="شعار شركة أساسات المشاعر" class="navbar-logo-img" />
              <div class="navbar-brand-info">
                <span class="navbar-brand-title">أساسات المشاعر المحدودة</span>
                <span class="navbar-brand-tag">ASASAT AL-MASHATER CO.</span>
              </div>
            </a>
            <nav><ul class="navbar-nav">${navLinksHtml}</ul></nav>
            <div class="navbar-actions">
              <button class="btn-primary" id="open-consult-btn"><span>طلب دراسة فنية</span>${getIcon('sparkles')}</button>
              <button class="mobile-toggle-btn" id="mobile-toggle-btn"><span></span><span></span><span></span></button>
            </div>
          </div>
          <div class="mobile-drawer" id="mobile-drawer">
            ${mobileNavHtml}
            <div style="margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid var(--border-subtle);">
              <button class="btn-primary" id="mobile-consult-btn" style="width: 100%;"><span>طلب دراسة فنية</span>${getIcon('sparkles')}</button>
            </div>
          </div>
        </header>

        <main>
          <!-- Hero -->
          <section class="hero-section" id="hero">
            <div class="hero-video-wrapper">
              <video class="hero-video" autoplay muted loop playsinline poster="${hero.posterPath}">
                <source src="${hero.videoPath}" type="video/mp4" />
              </video>
              <div class="hero-overlay"></div>
              <div class="hero-grid-pattern"></div>
            </div>
            <div class="bg-ambient-glow glow-top-left"></div>
            <div class="bg-ambient-glow glow-bottom-right"></div>
            <div class="container hero-content-wrapper">
              <div class="hero-status-pill"><span class="status-dot"></span><span>${hero.statusPill}</span></div>
              <h1 class="hero-title"><span>${hero.titlePrefix}</span><span class="hero-title-highlight">${hero.titleHighlight}</span></h1>
              <p class="hero-description">${hero.description}</p>
              <div class="hero-cta-group">
                <a href="${hero.primaryBtnUrl}" class="btn-primary"><span>${hero.primaryBtnText}</span>${getIcon('sparkles')}</a>
                <a href="${hero.secondaryBtnUrl}" class="btn-secondary"><span>${hero.secondaryBtnText}</span>${getIcon('phone')}</a>
              </div>
              <div class="hero-quick-features">${heroFeatsHtml}</div>
            </div>
          </section>

          <!-- Stats -->
          <section class="section-padding stats-section" id="stats">
            <div class="container"><div class="stats-grid">${statCardsHtml}</div></div>
          </section>

          <!-- About -->
          <section class="section-padding" id="about" style="background-color: #ffffff;">
            <div class="container">
              <div class="about-grid">
                <div class="about-image-column">
                  <div class="about-image-card">
                    <img src="${about.imagePath}" alt="فريق عمل شركة أساسات المشاعر" loading="lazy" />
                    <div class="about-badge-floating">${getIcon('shield_check')}<span>${about.floatingBadgeText}</span></div>
                    <div class="about-image-overlay"><div><h4 style="color: #fff; font-weight: 800; font-size: 1.1rem; margin-bottom: 0.2rem;">${about.imageOverlayTitle}</h4><p style="color: #cbd5e1; font-size: 0.85rem;">${about.imageOverlaySubtitle}</p></div></div>
                  </div>
                </div>
                <div class="about-text-column">
                  <div class="section-badge">${getIcon('sparkles')}<span>${about.badge}</span></div>
                  <h2 class="section-title"><span>${about.title}</span> <span class="text-gradient">${about.titleHighlight}</span></h2>
                  <p class="about-lead">${about.leadText}</p>
                  <p style="color: var(--text-secondary); font-size: 1rem; line-height: 1.7;">${about.subtitle}</p>
                  <div class="pillars-grid">${pillarsHtml}</div>
                </div>
              </div>
            </div>
          </section>

          <!-- Services 10 -->
          <section class="section-padding services-section" id="services">
            <div class="container">
              <div class="section-header">
                <div class="section-badge">${getIcon('sparkles')}<span>منظومة الخدمات والحلول المتكاملة</span></div>
                <h2 class="section-title"><span>10 حلول وأنظمة هندسية</span> <span class="text-gradient">لحماية وإدارة المنشآت الذكية</span></h2>
                <p class="section-subtitle">نقدم مجموعة متكاملة وشاملة من الأنظمة الأمنية والذكية المصممة وفق أعلى المعايير العالمية.</p>
              </div>
              <div class="services-grid">${servicesCardsHtml}</div>
            </div>
          </section>

          <!-- Ecosystem -->
          <section class="section-padding ecosystem-section" id="ecosystem">
            <div class="container">
              <div class="section-header">
                <div class="section-badge">${getIcon('network_nodes')}<span>التكامل والترابط الرقمي</span></div>
                <h2 class="section-title"><span>منظومة متكاملة تعمل ككيان واحد</span> <span class="text-gradient">(Integrated Ecosystem)</span></h2>
                <p class="section-subtitle">نربط جميع الأنظمة الأمنية والذكية في بيئة تشغيلية موحدة لضمان أقصى درجات الأمان والكفاءة.</p>
              </div>
              <div class="ecosystem-wrapper">
                <div class="ecosystem-visualizer-card">
                  <div style="font-size: 0.82rem; font-weight: 700; color: var(--blue-electric); margin-bottom: 1.2rem;">اضغط على أي منظومة لاستعراض دورها:</div>
                  <div class="ecosystem-nodes-grid">${ecoNodesHtml}</div>
                </div>
                <div class="ecosystem-detail-card" id="eco-detail-card">
                  <div class="eco-detail-badge">${getIcon('sparkles')}<span id="eco-detail-badge-text">${initialEco.metric}</span></div>
                  <h3 class="eco-detail-title" id="eco-detail-title">${initialEco.title}</h3>
                  <div class="eco-detail-role" id="eco-detail-role">${initialEco.role}</div>
                  <p class="eco-detail-desc" id="eco-detail-desc">${initialEco.description}</p>
                  <div style="padding-top: 1.2rem; border-top: 1px solid var(--border-subtle); display: flex; align-items: center; justify-content: space-between;">
                    <span style="font-size: 0.85rem; color: var(--text-muted);">حالة الربط:</span>
                    <span style="font-size: 0.85rem; font-weight: 700; color: var(--blue-electric); display: flex; align-items: center; gap: 0.4rem;"><span class="status-dot"></span><span>متصل بالشبكة المركزية</span></span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Why Us -->
          <section class="section-padding" id="why-us" style="background-color: #ffffff;">
            <div class="container">
              <div class="section-header">
                <div class="section-badge">${getIcon('sparkles')}<span>القيمة المضافة والمزايا</span></div>
                <h2 class="section-title"><span>لماذا يختار عملاؤنا</span> <span class="text-gradient">أساسات المشاعر المحدودة؟</span></h2>
                <p class="section-subtitle">نجمع بين الخبرة الهندسية المتراكمة والشراكات التقنية العالمية لنقدم حلولاً تتجاوز التوقعات.</p>
              </div>
              <div class="why-us-grid">${whyCardsHtml}</div>
            </div>
          </section>

          <!-- Sectors -->
          <section class="section-padding" id="sectors" style="background: var(--bg-secondary); border-top: 1px solid var(--border-subtle);">
            <div class="container">
              <div class="section-header">
                <div class="section-badge">${getIcon('layers')}<span>مجالات التطبيق والقطاعات</span></div>
                <h2 class="section-title"><span>حلول هندسية مصممة خصيصاً</span> <span class="text-gradient">لكل قطاع</span></h2>
                <p class="section-subtitle">نلبي متطلبات مختلف القطاعات الحيوية بأنظمة مخصصة تضمن الكفاءة التشغيلية وحماية الأصول.</p>
              </div>
              <div class="sectors-tabs-wrapper">${secTabsHtml}</div>
              <div class="sectors-display-grid">
                <div class="sector-image-box"><img id="sector-display-image" src="${initialSec.imagePath}" alt="${initialSec.title}" loading="lazy" /></div>
                <div class="sector-info-card">
                  <span class="sector-tag-pill" id="sector-display-tag">${initialSec.tag}</span>
                  <h3 class="sector-title" id="sector-display-title">${initialSec.title}</h3>
                  <div class="sector-subtitle" id="sector-display-subtitle">${initialSec.subtitle}</div>
                  <p class="sector-description" id="sector-display-desc">${initialSec.description}</p>
                  <div class="sector-highlights-list" id="sector-display-highlights">
                    ${(initialSec.highlights || []).map(h => `<div class="sector-highlight-item">${getIcon('check')}<span>${h}</span></div>`).join('')}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- CTA -->
          <section class="cta-section" id="contact">
            <div class="cta-bg-wrapper"><img src="${cta.bgImagePath}" alt="خلفية تواصل شركة أساسات المشاعر" class="cta-bg-img" loading="lazy" /></div>
            <div class="cta-overlay"></div>
            <div class="container" style="position: relative; z-index: 10;">
              <div class="cta-box">
                <div class="section-badge" style="background: rgba(0, 102, 255, 0.08); margin-bottom: 1.5rem;">${getIcon('sparkles')}<span>${cta.badge}</span></div>
                <h2 class="cta-title"><span>${cta.titlePrefix}</span> <span class="text-gradient">${cta.titleHighlight}</span></h2>
                <p class="cta-description">${cta.description}</p>
                <div class="cta-actions">
                  <button class="btn-primary" id="cta-consult-btn" style="padding: 0.9rem 2.2rem; font-size: 1.05rem;"><span>${cta.buttonText}</span>${getIcon('sparkles')}</button>
                  <a href="tel:+966" class="btn-secondary" style="padding: 0.9rem 2rem; font-size: 1.05rem;"><span>تواصل عبر الهاتف</span>${getIcon('phone')}</a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <!-- Footer -->
        <footer class="footer">
          <div class="container">
            <div class="footer-top-grid">
              <div class="footer-brand-col">
                <img src="${footer.logoPath}" alt="شعار أساسات المشاعر" class="footer-logo" loading="lazy" />
                <p class="footer-brand-desc">${footer.brandDesc}</p>
                <div style="margin-top: 0.5rem;"><button class="btn-primary" id="footer-consult-btn" style="padding: 0.6rem 1.4rem; font-size: 0.85rem;"><span>طلب دراسة فنية</span>${getIcon('sparkles')}</button></div>
              </div>
              <div><h4 class="footer-col-title">روابط سريعة</h4><ul class="footer-links-list">${navLinksHtml}</ul></div>
              <div><h4 class="footer-col-title">الأنظمة والحلول</h4><ul class="footer-links-list">${footerServicesHtml}</ul></div>
              <div>
                <h4 class="footer-col-title">المقر والتواصل</h4>
                <div class="footer-contact-item">${getIcon('location')}<span>${contact.address}</span></div>
                <div class="footer-contact-item">${getIcon('phone')}<span>${contact.phone}</span></div>
                <div class="footer-contact-item">${getIcon('mail')}<span>${contact.email}</span></div>
                <div class="footer-contact-item">${getIcon('shield_check')}<span>${contact.workingHours}</span></div>
              </div>
            </div>
            <div class="footer-bottom">
              <div>${footer.copyrightText}</div>
              <div style="display: flex; align-items: center; gap: 1.5rem;">
                <span>حلول هندسية وتقنية متقدمة</span>
                <a href="admin.html" style="font-size: 0.82rem; font-weight: 700; color: var(--blue-electric); text-decoration: underline;" target="_blank">لوحة التحكم Admin</a>
              </div>
            </div>
          </div>
        </footer>

        <!-- Modals -->
        <div class="service-modal-backdrop" id="service-modal-backdrop" aria-hidden="true" role="dialog">
          <div class="service-modal-container">
            <button class="service-modal-close" id="service-modal-close-btn" aria-label="إغلاق">${getIcon('close')}</button>
            <div class="service-modal-header">
              <div class="service-modal-icon" id="modal-service-icon">${getIcon('cctv_security')}</div>
              <div class="service-modal-title-wrap">
                <span class="service-modal-badge" id="modal-service-category">الأمن والحماية</span>
                <h2 class="service-modal-title" id="modal-service-title">أنظمة الأمان والمراقبة</h2>
                <span class="service-modal-title-en" id="modal-service-title-en">Security & Surveillance Systems</span>
              </div>
            </div>
            <p class="service-modal-full-desc" id="modal-service-full-desc"></p>
            <h4 class="modal-section-heading">${getIcon('sparkles')}<span>المميزات والقدرات الهندسية:</span></h4>
            <div class="service-modal-features" id="modal-service-features"></div>
            <h4 class="modal-section-heading">${getIcon('cpu')}<span>التقنيات والمعايير المستخدمة:</span></h4>
            <div class="service-modal-tech-tags" id="modal-service-tech-tags"></div>
            <div class="service-modal-actions">
              <button class="btn-secondary" id="modal-close-action-btn">إغلاق</button>
              <button class="btn-primary" id="modal-service-consult-btn"><span>طلب استشارة لهذه المنظومة</span>${getIcon('sparkles')}</button>
            </div>
          </div>
        </div>

        <div class="consult-modal-backdrop" id="consult-modal-backdrop" aria-hidden="true" role="dialog">
          <div class="consult-modal-container">
            <button class="service-modal-close" id="consult-modal-close-btn" aria-label="إغلاق">${getIcon('close')}</button>
            <div class="section-badge" style="margin-bottom: 1rem;">${getIcon('sparkles')}<span>طلب دراسة واستشارة فنية</span></div>
            <h2 style="font-size: 1.8rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.5rem;">تواصل مع خبرائنا الهندسيين</h2>
            <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 2rem;">نسعد بتقديم دراسة فنية وهندسية شاملة تلبي احتياجات منشأتكم بأعلى معايير الجودة.</p>
            <form id="consultation-form">
              <div class="form-group"><label class="form-label">الاسم الكامل / اسم الجهة *</label><input type="text" class="form-input" placeholder="أدخل اسمك أو اسم الشركة" required /></div>
              <div class="form-group"><label class="form-label">المنظومة أو الخدمة المطلوبة</label><select id="consult-service" class="form-select">${this.currentServices.map(s => `<option value="${s.title}">${s.title}</option>`).join('')}</select></div>
              <div class="form-group"><label class="form-label">رقم التواصل / البريد الإلكتروني *</label><input type="text" class="form-input" placeholder="رقم الهاتف أو البريد الإلكتروني" required /></div>
              <div class="form-group"><label class="form-label">نبذة عن المشروع</label><textarea class="form-textarea" placeholder="اذكر تفاصيل المنشأة أو المتطلبات..."></textarea></div>
              <div style="display: flex; justify-content: flex-end; margin-top: 2rem;"><button type="submit" class="btn-primary" style="width: 100%;"><span>إرسال طلب الدراسة الفنية</span>${getIcon('sparkles')}</button></div>
            </form>
            <div id="consult-success-msg" style="display: none; padding: 2rem; text-align: center; background: rgba(0, 102, 255, 0.05); border-radius: var(--radius-md); border: 1px solid var(--border-glow); margin-top: 1rem;">
              <div class="check-icon-box">${getIcon('check')}</div>
              <h4 style="font-size: 1.3rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.5rem;">تم استلام طلبكم بنجاح</h4>
              <p style="font-size: 0.95rem; color: var(--text-secondary);">شكراً لاهتمامكم بشركة أساسات المشاعر المحدودة. سيقوم فريقنا الهندسي بالتواصل معكم قريباً.</p>
            </div>
          </div>
        </div>
      `;

      this.wireEvents(solutions, sectors);
    },

    wireEvents(solutions, sectors) {
      window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 40) navbar?.classList.add('scrolled');
        else navbar?.classList.remove('scrolled');
      });

      document.getElementById('mobile-toggle-btn')?.addEventListener('click', () => {
        document.getElementById('mobile-drawer')?.classList.toggle('open');
      });

      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
          const href = anchor.getAttribute('href');
          if (!href || href === '#') return;
          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            document.getElementById('mobile-drawer')?.classList.remove('open');
            target.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });

      const openDetail = (s) => {
        const bd = document.getElementById('service-modal-backdrop');
        const iconEl = document.getElementById('modal-service-icon');
        const catEl = document.getElementById('modal-service-category');
        const titleEl = document.getElementById('modal-service-title');
        const enEl = document.getElementById('modal-service-title-en');
        const descEl = document.getElementById('modal-service-full-desc');
        const featsEl = document.getElementById('modal-service-features');
        const techEl = document.getElementById('modal-service-tech-tags');

        if (iconEl) iconEl.innerHTML = getIcon(s.iconName);
        if (catEl) catEl.textContent = s.category;
        if (titleEl) titleEl.textContent = s.title;
        if (enEl) enEl.textContent = s.titleEn || '';
        if (descEl) descEl.textContent = s.fullDescription || s.shortDescription;
        if (featsEl) featsEl.innerHTML = (s.features || []).map(f => `<div class="service-feature-item">${getIcon('check')}<span>${f}</span></div>`).join('');
        if (techEl) techEl.innerHTML = (s.technologies || []).map(t => `<span class="tech-tag">${t}</span>`).join('');

        bd?.classList.add('active');
        document.body.style.overflow = 'hidden';
      };

      const closeDetail = () => {
        document.getElementById('service-modal-backdrop')?.classList.remove('active');
        document.body.style.overflow = '';
      };

      document.querySelectorAll('.service-card').forEach(c => {
        c.addEventListener('click', () => {
          const id = c.getAttribute('data-service-id');
          const s = this.currentServices.find(x => x.id === id);
          if (s) openDetail(s);
        });
      });

      document.getElementById('service-modal-close-btn')?.addEventListener('click', closeDetail);
      document.getElementById('modal-close-action-btn')?.addEventListener('click', closeDetail);
      document.getElementById('service-modal-backdrop')?.addEventListener('click', (e) => {
        if (e.target === document.getElementById('service-modal-backdrop')) closeDetail();
      });

      const openConsult = (pre) => {
        closeDetail();
        const bd = document.getElementById('consult-modal-backdrop');
        const sel = document.getElementById('consult-service');
        const form = document.getElementById('consultation-form');
        const success = document.getElementById('consult-success-msg');
        if (form) form.style.display = 'block';
        if (success) success.style.display = 'none';
        if (sel && pre) {
          for (let i = 0; i < sel.options.length; i++) {
            if (sel.options[i].value.includes(pre) || pre.includes(sel.options[i].value)) {
              sel.selectedIndex = i;
              break;
            }
          }
        }
        bd?.classList.add('active');
        document.body.style.overflow = 'hidden';
      };

      const closeConsult = () => {
        document.getElementById('consult-modal-backdrop')?.classList.remove('active');
        document.body.style.overflow = '';
      };

      document.getElementById('open-consult-btn')?.addEventListener('click', () => openConsult());
      document.getElementById('mobile-consult-btn')?.addEventListener('click', () => {
        document.getElementById('mobile-drawer')?.classList.remove('open');
        openConsult();
      });
      document.getElementById('cta-consult-btn')?.addEventListener('click', () => openConsult());
      document.getElementById('footer-consult-btn')?.addEventListener('click', () => openConsult());
      document.getElementById('modal-service-consult-btn')?.addEventListener('click', () => {
        const title = document.getElementById('modal-service-title')?.textContent;
        openConsult(title);
      });
      document.getElementById('consult-modal-close-btn')?.addEventListener('click', closeConsult);
      document.getElementById('consult-modal-backdrop')?.addEventListener('click', (e) => {
        if (e.target === document.getElementById('consult-modal-backdrop')) closeConsult();
      });

      document.getElementById('consultation-form')?.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = sanitizeHtml(document.getElementById('consult-name')?.value || '');
        const company = sanitizeHtml(document.getElementById('consult-company')?.value || '');
        const service = sanitizeHtml(document.getElementById('consult-service')?.value || '');
        const contact = sanitizeHtml(document.getElementById('consult-contact')?.value || '');
        const notes = sanitizeHtml(document.getElementById('consult-notes')?.value || '');

        try {
          await fetch('/api/contact/consultation', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name: `${name} (${company})`,
              phone: contact,
              email: contact.includes('@') ? contact : '',
              service,
              projectType: company,
              notes
            })
          });
        } catch (err) {}

        document.getElementById('consultation-form').style.display = 'none';
        document.getElementById('consult-success-msg').style.display = 'block';
        setTimeout(() => {
          closeConsult();
        }, 3500);
      });

      // Ecosystem Click
      document.querySelectorAll('.eco-node-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.eco-node-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const id = btn.getAttribute('data-node-id');
          const node = solutions.find(n => n.id === id);
          if (node) {
            document.getElementById('eco-detail-title').textContent = node.title;
            document.getElementById('eco-detail-role').textContent = node.role;
            document.getElementById('eco-detail-desc').textContent = node.description;
            document.getElementById('eco-detail-badge-text').textContent = node.metric;
          }
        });
      });

      // Sectors Tab Click
      document.querySelectorAll('.sector-tab-btn').forEach(tab => {
        tab.addEventListener('click', () => {
          document.querySelectorAll('.sector-tab-btn').forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
          const id = tab.getAttribute('data-sector-id');
          const sec = sectors.find(s => s.id === id);
          if (sec) {
            const img = document.getElementById('sector-display-image');
            if (img) {
              img.style.opacity = '0';
              setTimeout(() => {
                img.src = sec.imagePath;
                img.style.opacity = '1';
              }, 150);
            }
            document.getElementById('sector-display-tag').textContent = sec.tag;
            document.getElementById('sector-display-title').textContent = sec.title;
            document.getElementById('sector-display-subtitle').textContent = sec.subtitle;
            document.getElementById('sector-display-desc').textContent = sec.description;
            document.getElementById('sector-display-highlights').innerHTML = (sec.highlights || []).map(h => `<div class="sector-highlight-item">${getIcon('check')}<span>${h}</span></div>`).join('');
          }
        });
      });

      if (this.isPreview) {
        document.getElementById('preview-publish-btn')?.addEventListener('click', async () => {
          const success = await publishFromPreview();
          if (success) {
            alert('تم نشر التغييرات بنجاح إلى الموقع العام وتحديث قاعدة البيانات!');
            window.location.href = 'index.html';
          } else {
            alert('يرجى تسجيل الدخول أولاً كمسؤول من لوحة التحكم لنشر التعديلات.');
            window.location.href = 'admin.html';
          }
        });
      }
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => PublicApp.init());
  } else {
    PublicApp.init();
  }
})();
