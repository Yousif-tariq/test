// Admin CMS Standalone Bundle - أساسات المشاعر المحدودة

(function() {
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

  // --- 2. Initial Store Data ---
  const initialServicesList = [
    {
      id: 'service-01',
      number: '01',
      title: 'أنظمة الأمان والمراقبة',
      titleEn: 'Security & Surveillance Systems',
      category: 'الأمن والحماية',
      iconName: 'cctv_security',
      shortDescription: 'أنظمة متقدمة لحماية المنشآت ومراقبتها ورفع مستوى الأمن والسلامة',
      fullDescription: 'نقدم منظومات مراقبة أمنية متكاملة تعتمد على كاميرات الذكاء الاصطناعي فائقة الدقة (AI CCTV) مع خوادم التسجيل وإدارة الفيديو VMS، والتعرف التلقائي على الوجوه والمركبات، والإنذار المبكر للأحداث في الوقت الفعلي.',
      features: ['كاميرات فائقة الدقة 4K و PTZ', 'تحليلات الفيديو بالذكاء الاصطناعي (AI Analytics)', 'خوادم إدارة وتسجيل الفيديو VMS / NVR', 'الرؤية الليلية المتقدمة والتصوير الحراري', 'غرف عمليات ومراقبة مركزية 24/7'],
      applications: ['المنشآت التجارية والمكاتب', 'المشاريع الحكومية والخاصة', 'الأبراج والمجمعات الذكية'],
      technologies: ['AI CCTV', 'VMS', 'NVR', 'Thermal Imaging', 'ANPR'],
      imagePath: 'img/JUST.jpg'
    },
    {
      id: 'service-02',
      number: '02',
      title: 'أنظمة التحكم بالدخول والخروج',
      titleEn: 'Access Control & Biometrics',
      category: 'الأمن وإدارة الوصول',
      iconName: 'access_control',
      shortDescription: 'حلول متكاملة لإدارة الدخول والخروج والتحكم في صلاحيات الوصول',
      fullDescription: 'منظومة متطورة لإدارة وتدقيق الوصول للمنشآت الحيوية والمكاتب عبر بوابات إلكترونية ذكية، وقارئات البصمة الحيوية وبصمة الوجه، والبطاقات المشفرة RFID، مع ربط مباشر بقواعد البيانات وسجلات الحضور المركزية.',
      features: ['بوابات أمنية دوارة وبوابات ذراعية ذكية', 'قارئات البصمة ثلاثية الأبعاد والتعرف على الوجه', 'بطاقات ذكية مشفرة وتصاريح دخول رقمية', 'أقفال كهرومغناطيسية وأنظمة إقفال آمنة', 'تقارير فورية وتتبع صلاحيات الأفراد'],
      applications: ['المقرات الإدارية والشركات', 'المستودعات والمنشآت الحيوية', 'المجمعات السكنية'],
      technologies: ['Biometrics', 'Facial Recognition', 'RFID', 'Speed Gates', 'Magnetic Locks'],
      imagePath: 'img/JUST.jpg'
    },
    {
      id: 'service-03',
      number: '03',
      title: 'أنظمة الإنذار والاتصالات',
      titleEn: 'Intrusion Alarm & Public Comms',
      category: 'الإنذار والاتصالات',
      iconName: 'intrusion_alarm',
      shortDescription: 'حلول إنذار واتصالات متقدمة للمنشآت والمرافق',
      fullDescription: 'أنظمة إنذار مبكر لرصد التسلل وكشف الحركة والكسر للمحيط الأمني، مدمجة مع شبكات النداء العام (PA System) واتصالات الطوارئ الصوتية لتأمين المنشآت وحماية الأصول على مدار الساعة.',
      features: ['حساسات حركة محيطية وليزرية متقدمة', 'لوحات إنذار مركزية مع إشعارات فورية', 'أنظمة النداء العام والتوجيه الصوتي PA', 'أجهزة انتركم طوارئ مرئية ومقاومة للتخريب', 'تكامل فوري مع غرف العمليات والمراقبة'],
      applications: ['المرافق الحكومية والحيوية', 'المصانع والمستودعات', 'الأبراج السكنية والتجارية'],
      technologies: ['PIR Sensors', 'Laser Perimeter', 'Public Address', 'Emergency Intercom', 'Alarm Panels'],
      imagePath: 'img/TECHNOLGY.jpg'
    },
    {
      id: 'service-04',
      number: '04',
      title: 'إنذار الحريق',
      titleEn: 'Fire Alarm & Detection Systems',
      category: 'السلامة وحماية الأرواح',
      iconName: 'fire_alarm',
      shortDescription: 'أنظمة كشف وإنذار الحريق لحماية الأشخاص والممتلكات',
      fullDescription: 'نصمم وننفذ أحدث أنظمة كشف وإنذار الحريق المعنونة (Addressable Fire Alarm Systems) المعتمدة دولياً، والتي تضمن الكشف السريع عن الدخان والحرارة وتفعيل خطط الإخلاء التلقائي والربط مع أنظمة الإطفاء والتهوية.',
      features: ['لوحات تحكم معنونة فائقة الدقة والاعتمادية', 'كواشف دخان وحرارة وكواشف بصرية متطورة', 'أجراس وسرينات إنذار صوتية ومرئية قوية', 'ربط آلي مع أنظمة التكييف والمصاعد والإطفاء', 'لوحات تكرار ومراقبة مركزية'],
      applications: ['جميع أنواع المنشآت والمباني', 'الفنادق والمستشفيات', 'المجمعات السكنية والصناعية'],
      technologies: ['Addressable Panels', 'Smoke/Heat Detectors', 'Audio-Visual Strobes', 'HVAC Shutdown', 'UL/FM Listed'],
      imagePath: 'img/TECHNOLGY.jpg'
    },
    {
      id: 'service-05',
      number: '05',
      title: 'الشبكات والاتصالات',
      titleEn: 'Networking & Telecom Infrastructure',
      category: 'البنية التحتية الرقمية',
      iconName: 'networks_telecom',
      shortDescription: 'تصميم وتنفيذ البنية التحتية للشبكات وأنظمة الاتصالات',
      fullDescription: 'تأسيس بنية تحتية رقمية متكاملة تشمل تمديد كابلات الألياف الضوئية (Fiber Optics) وشبكات Cat6/Cat6A المعتمدة، وتجهيز غرف الخوادم (Data Centers & Racks)، وتوزيع شبكات الواي فاي المؤسسية فائقة السرعة.',
      features: ['شبكات الألياف الضوئية والكابلات الهيكلية المنظمة', 'سيرفرات وكبائن راك مع أنظمة إدارة الكابلات', 'شبكات Wi-Fi 6 و Wi-Fi 7 للمؤسسات الكبرى', 'سويتشات وروترات صناعية وإدارية متقدمة', 'حلول جدران الحماية والأمان السيبراني للشبكات'],
      applications: ['المقرات الإدارية والشركات', 'مراكز البيانات Data Centers', 'الأبراج والمستشفيات'],
      technologies: ['Fiber Optics', 'Structured Cabling', 'Enterprise Wi-Fi 6/7', 'Cisco/Aruba Switches', 'Server Racks'],
      imagePath: 'img/TECHNOLGY.jpg'
    },
    {
      id: 'service-06',
      number: '06',
      title: 'الأنظمة الذكية والصوتيات',
      titleEn: 'Smart Acoustics & Sound Systems',
      category: 'الصوتيات الذكية',
      iconName: 'smart_audio',
      shortDescription: 'حلول الأنظمة الذكية والصوتية للمباني والمنشآت',
      fullDescription: 'حلول هندسية صوتية شاملة لتوزيع الصوت الاحترافي متعدد المناطق (Multi-Zone Audio) للمباني، المساجد، القاعات، والمجمعات التجارية، مع معالجات رقمية DSP وأجهزة ميكروفونات ومكبرات عالية النقاوة.',
      features: ['توزيع صوتي متعدد القنوات والمناطق', 'معالجات صوتية رقمية متطورة DSP', 'سماعات سقفية وجدارية احترافية عالية الدقة', 'مصفوفات ميكروفونات لاسلكية وأنظمة مؤتمرات', 'تحكم رقمي بالصوت عبر شاشات لمس وتطبيقات'],
      applications: ['المراكز التجارية والمولات', 'المساجد وقاعات الاحتفالات', 'المقرات الإدارية'],
      technologies: ['DSP Processors', 'Multi-Zone Matrix', 'Commercial Speakers', 'Wireless Microphones', 'Acoustic Tuning'],
      imagePath: 'img/JUST.jpg'
    },
    {
      id: 'service-07',
      number: '07',
      title: 'السنترال',
      titleEn: 'IP-PBX & Telephony Systems',
      category: 'الاتصالات المؤسسية',
      iconName: 'ip_pbx',
      shortDescription: 'أنظمة الاتصالات الهاتفية وإدارة الاتصالات الداخلية',
      fullDescription: 'حلول سنترالات IP-PBX الحديثة للشركات والمؤسسات، توفر اتصالات موحدة عبر بروتوكول الإنترنت VoIP، وإدارة ذكية للمكالمات، وربط الفروع، والرد الآلي IVR، والتكامل مع أنظمة خدمة العملاء.',
      features: ['سنترالات IP-PBX محلية وسحابية عالية الاعتمادية', 'هواتف مكتبية IP وهواتف تنفيذية بشاشات لمس', 'نظام الرد الآلي التفاعلي IVR وتوزيع المكالمات', 'ربط الفروع والمكاتب المتعددة بشبكة موحدة', 'تسجيل المكالمات وتقارير أداء الاتصالات'],
      applications: ['الشركات والمؤسسات الكبرى', 'الفنادق والمنتجعات', 'مراكز الاتصال Call Centers'],
      technologies: ['VoIP', 'IP-PBX', 'SIP Trunk', 'IVR System', 'Unified Communications'],
      imagePath: 'img/TECHNOLGY.jpg'
    },
    {
      id: 'service-08',
      number: '08',
      title: 'إدارة المباني BMS',
      titleEn: 'Building Management Systems (BMS)',
      category: 'الأنظمة الذكية والأتمتة',
      iconName: 'bms_systems',
      shortDescription: 'أنظمة إدارة ومراقبة المباني والتحكم في الأنظمة المختلفة مركزيًا',
      fullDescription: 'منظومات BMS مركزية لأتمتة ومراقبة كافة مرافق المبنى تشمل التحكم في وحدات التكييف والتهوية HVAC، ومراقبة استهلاك الطاقة والمياه، والتحكم بالإضاءة الذكية، وجدولة التشغيل لتقليل التكاليف التشغيلية.',
      features: ['لوحة تحكم وتحكم مركزي موحد للمبنى', 'أتمتة وحدات التكييف والتهوية الميكانيكية HVAC', 'مراقبة استهلاك الطاقة وتوليد تقارير الكفاءة', 'جدولة تلقائية للإضاءة والأجهزة لتقليل الهدر', 'استشعار الأعطال والصيانة التنبؤية الفورية'],
      applications: ['الأبراج التجارية والمكتبية', 'المستشفيات والمراكز الطبية', 'المدن والمشاريع الذكية'],
      technologies: ['BMS Controllers', 'HVAC Integration', 'BACnet/Modbus', 'Energy Metering', 'SCADA'],
      imagePath: 'img/TECHNOLGY.jpg'
    },
    {
      id: 'service-09',
      number: '09',
      title: 'المنازل الذكية',
      titleEn: 'Smart Home Automation',
      category: 'الأتمتة السكنية',
      iconName: 'smart_home',
      shortDescription: 'حلول متقدمة للتحكم والإدارة الذكية داخل المنازل',
      fullDescription: 'تحويل المنازل والفلل إلى بيئات ذكية بالكامل تتيح التحكم المركزي في الإضاءة، الستائر الكهربائية، التكييف، الترفيه الصوتي، وكاميرات الأمان من خلال شاشات لمس حائطية وتطبيقات الهواتف والأوامر الصوتية.',
      features: ['سيناريوهات ذكية مخصصة (الوصول، المغادرة، النوم)', 'تحكم كامل بالإضاءة والستائر والمناخ', 'تكامل مع الأوامر الصوتية وشاشات الحائط الذكية', 'حساسات ذكية للحركة والحرارة وترشيد الطاقة', 'تأمين المداخل والأبواب بأقفال ذكية متصلة'],
      applications: ['الفلل والقصور السكنية', 'الشقق الفاخرة', 'المجمعات السكنية المغلقة'],
      technologies: ['KNX', 'Zigbee', 'Smart Relays', 'Touch Panels', 'Voice Control'],
      imagePath: 'img/JUST.jpg'
    },
    {
      id: 'service-10',
      number: '10',
      title: 'الأنظمة المرئية والصوتية',
      titleEn: 'Audiovisual & Meeting Solutions',
      category: 'العرض والاجتماعات الذكية',
      iconName: 'audiovisual',
      shortDescription: 'حلول متكاملة للأنظمة المرئية والصوتية للمشاريع والمنشآت',
      fullDescription: 'تجهيز قاعات المؤتمرات وغرف الاجتماعات الذكية بأحدث شاشات العرض التفاعلية وجدران الفيديو (Video Walls)، وأنظمة المؤتمرات المرئية عن بُعد (Video Conferencing)، وحلول العرض اللاسلكي المتقدمة.',
      features: ['شاشات عرض تفاعلية 4K وجدران فيديو LED', 'أنظمة المؤتمرات المرئية الذكية مع تتبع المتحدث', 'أنظمة مشاركة الشاشة والعرض اللاسلكي الفوري', 'أنظمة تحكم مركزي بالقاعة عبر شاشات لمس مخصصة', 'عزل صوتي وتجهيز هندسي متكامل للقاعات'],
      applications: ['غرف مجالس الإدارة والاجتماعات', 'قاعات التدريب والمؤتمرات', 'غرف التحكم والمراقبة'],
      technologies: ['Video Walls', 'Interactive Displays', 'Zoom/Teams Rooms', 'Wireless Presentation', 'Crestron Control'],
      imagePath: 'img/IT TEAM.jpg'
    }
  ];

  const initialEcosystemNodes = [
    { id: 'node-sec', title: 'الأمن والمراقبة الذكية', role: 'الرصد والتحليل الفوري AI', icon: 'cctv_security', connectedTo: ['node-acc', 'node-bms'], metric: '99.9% دقة التعرف', description: 'تكامل كاميرات الذكاء الاصطناعي مع بوابات الدخول ونظام BMS للإنذار المبكر والتتبع اللحظي.' },
    { id: 'node-acc', title: 'التحكم بالدخول والهوية', role: 'إدارة الوصول والتصاريح', icon: 'access_control', connectedTo: ['node-sec', 'node-fire'], metric: '0.2s سرعة الاستجابة', description: 'بوابات ذكية وقارئات بيومترية تفتح تلقائياً في حالات الطوارئ وتغلق في أوقات الحظر.' },
    { id: 'node-fire', title: 'إنذار وكشف الحريق', role: 'حماية الأرواح والمنشأة', icon: 'fire_alarm', connectedTo: ['node-acc', 'node-bms', 'node-comms'], metric: 'معتمد UL/FM', description: 'ربط مباشر مع أنظمة التكييف لإيقاف سحب الدخان وفتح مسارات الإخلاء وتشغيل النداء الصوتي العام.' },
    { id: 'node-net', title: 'البنية التحتية والشبكات', role: 'العمود الفقري للبيانات', icon: 'networks_telecom', connectedTo: ['node-sec', 'node-acc', 'node-bms', 'node-pbx'], metric: '10 Gbps سرعة النقل', description: 'شبكات ألياف ضوئية فائقة الاستقرار تغذي كافة الأجهزة والخوادم بقدرة تشغيل مستمرة 24/7.' },
    { id: 'node-bms', title: 'إدارة المباني BMS', role: 'الأتمتة وكفاءة الطاقة', icon: 'bms_systems', connectedTo: ['node-sec', 'node-fire', 'node-net'], metric: '35% وفر تشغيلي', description: 'لوحة تحكم موحدة تتيح مراقبة واستهلاك الطاقة والتحكم بالمناخ والإضاءة تلقائياً.' },
    { id: 'node-pbx', title: 'الاتصالات والسنترال IP', role: 'التواصل والربط المؤسسي', icon: 'ip_pbx', connectedTo: ['node-net'], metric: 'VoIP الموحد', description: 'سنترال سحابي ومحلي متكامل لربط المكاتب وغرف العمليات وهواتف الطوارئ الصوتية.' }
  ];

  const initialWhyUsData = [
    { id: 'why-1', title: 'ريادة وخبرة هندسية معتمدة', subtitle: 'معايير عالمية', badge: 'خبرة وموثوقية', icon: 'shield_check', span: 2, description: 'فريق هندسي متخصص في تصميم وتوريد وتنفيذ كافة الأنظمة الأمنية والذكية للمنشآت الحيوية والتجارية بدقة وإتقان واحترافية متناهية.' },
    { id: 'why-2', title: 'تكامل رقمي موحد 100%', subtitle: 'Single Ecosystem', badge: 'أنظمة متجانسة', icon: 'network_nodes', span: 1, description: 'نضمن ترابط جميع الأنظمة (مراقبة، دخول، حريق، شبكات، BMS) للعمل معاً بسلاسة تامة دون أية فجوات تشغيلية.' },
    { id: 'why-3', title: 'تقنيات الذكاء الاصطناعي', subtitle: 'AI Driven Security', badge: 'حلول استباقية', icon: 'cpu', span: 1, description: 'توظيف كاميرات AI CCTV وخوارزميات التعرف على الأنماط والوجوه والمركبات لرفع كفاءة الحماية والتنبؤ بالأحداث.' },
    { id: 'why-4', title: 'دعم فني وصيانة وقائية 24/7', subtitle: 'جاهزية قصوى', badge: 'استجابة فورية', icon: 'sparkles', span: 2, description: 'عقود صيانة معتمدة، استجابة سريعة، ودعم هندسي على مدار الساعة لضمان استمرارية عمل المنظومات دون انقطاع.' }
  ];

  const initialSectorsData = [
    { id: 'sec-gov', title: 'المشاريع الحكومية والجهات الرسمية', subtitle: 'Government & Public Sector', tag: 'أمان فائق واعتمادية', icon: 'shield_check', imagePath: 'img/JUST.jpg', description: 'أنظمة أمن ومراقبة معتمدة مع تحكم بالدخول عالي التشفير وغرف عمليات مركزية تلبي أعلى المعايير الأمنية.', highlights: ['غرف عمليات ومراقبة مركزية 24/7', 'بوابات أمنية مطابقة للمواصفات الحكومية', 'بنية تحتية مشفرة للشبكات والاتصالات'] },
    { id: 'sec-corp', title: 'الأبراج والمقرات الإدارية والشركات', subtitle: 'Commercial & Corporate Towers', tag: 'كفاءة تشغيلية ذكية', icon: 'layers', imagePath: 'img/TECHNOLGY.jpg', description: 'حلول أتمتة متكاملة تشمل إدارة المباني BMS، والسنترال السحابي، والتحكم بالطاقة والإضاءة والتكييف.', highlights: ['توفير استهلاك الطاقة بنسبة تصل إلى 35%', 'أنظمة حضور وانصراف وتحكم بالوصول', 'شبكات فايبر فائقة السرعة وواي فاي مؤسسي'] },
    { id: 'sec-hotel', title: 'القطاع الفندقي والضيافة', subtitle: 'Hotels & Hospitality', tag: 'تجربة ضيافة فاخرة', icon: 'sparkles', imagePath: 'img/IT TEAM.jpg', description: 'منظومات صوتيات ومرئيات ذكية لقاعات الاحتفالات وغرف النزلاء مع إدارة متقدمة للتكييف والإضاءة.', highlights: ['حلول صوتيات ذكية متعددة المناطق DSP', 'أنظمة قاعات المؤتمرات والاجتماعات الذكية', 'أنظمة إنذار حريق وإخلاء صوتي معتمدة'] },
    { id: 'sec-res', title: 'المجمعات السكنية والفلل الذكية', subtitle: 'Smart Residential Communities', tag: 'رفاهية وأمان مستمر', icon: 'cpu', imagePath: 'img/JUST.jpg', description: 'أتمتة المنازل الذكية (Smart Home) مع كاميرات محيطية وأقفال ذكية وتحكم كامل عبر تطبيقات الهواتف.', highlights: ['سيناريوهات ذكية للإنارة والتكييف والستائر', 'اتصال أمني مباشر وإنتركم مرئي ذكي', 'تحكم صوتي وتطبيقات ذكية مخصصة'] }
  ];

  const initialIndicatorsData = [
    { id: 'ind-1', title: 'أنظمة معتمدة عالمياً', badge: 'CERTIFIED', icon: 'shield_check', description: 'مطابقة لأحدث معايير السلامة والجودة واللوائح الهندسية المعتمدة.' },
    { id: 'ind-2', title: 'تكامل وتشغيل موحد', badge: 'INTEGRATED', icon: 'network_nodes', description: 'ترابط رقمي شامل يجمع كافة الأنظمة الأمنية في منصة إدارة مركزية.' },
    { id: 'ind-3', title: 'جاهزية ودعم 24/7', badge: 'RELIABLE', icon: 'sparkles', description: 'استجابة سريعة وصيانة وقائية وتصحيحية لضمان استمرارية التشغيل.' },
    { id: 'ind-4', title: 'كفاءة واستدامة المنشآت', badge: 'SMART BMS', icon: 'cpu', description: 'أتمتة متقدمة تساهم في خفض تكاليف الطاقة ورفع الكفاءة التشغيلية.' }
  ];

  const initialPillarsData = [
    { icon: 'shield_check', title: 'الأمان والموثوقية', description: 'نلتزم بأعلى معايير الحماية الهندسية المعتمدة لضمان أمان المنشآت وسلامة الأفراد.' },
    { icon: 'network_nodes', title: 'التكامل الرقمي', description: 'نوحد جميع الأنظمة الأمنية والذكية لتعمل معاً بكفاءة وتجانس تام.' },
    { icon: 'cpu', title: 'التقنيات الحديثة', description: 'نعتمد على أحدث حلول الذكاء الاصطناعي، إنترنت الأشياء (IoT)، والأتمتة المتقدمة.' },
    { icon: 'layers', title: 'الجودة والاستدامة', description: 'نقدم حلولاً هندسية قابلة للتوسع وتدوم طويلاً مع ترشيد استهلاك الطاقة والموارد.' }
  ];

  const initialUsers = [
    { id: 'usr-1', name: 'مدير النظام', email: 'admin@asasat.sa', role: 'super_admin', roleTitle: 'المدير العام للنظام (Super Admin)', status: 'active', lastLogin: 'نشط الآن', createdAt: '2026-01-01' }
  ];

  const initialMediaItems = [
    { id: 'med-logo', name: 'LOGO.jpeg', path: 'img/LOGO.jpeg', type: 'image', sizeKB: 125.7, dimensions: '2216 × 1084', usedIn: ['Navbar', 'Footer', 'Modals', 'Site Settings'], uploadedAt: '2026-08-12 10:00' },
    { id: 'med-video', name: 'BG_VEDIO.mp4', path: 'img/BG_VEDIO.mp4', type: 'video', sizeKB: 5146.9, dimensions: '1920 × 1080', usedIn: ['Hero Section Background Video'], uploadedAt: '2026-08-12 10:00' },
    { id: 'med-it-team', name: 'IT TEAM.jpg', path: 'img/IT TEAM.jpg', type: 'image', sizeKB: 4688.2, dimensions: '5472 × 3648', usedIn: ['About Us Section', 'Engineering Profile'], uploadedAt: '2026-08-12 10:00' },
    { id: 'med-tech', name: 'TECHNOLGY.jpg', path: 'img/TECHNOLGY.jpg', type: 'image', sizeKB: 999.6, dimensions: '5120 × 2880', usedIn: ['Integrated Ecosystem', 'Network Services'], uploadedAt: '2026-08-12 10:00' },
    { id: 'med-just', name: 'JUST.jpg', path: 'img/JUST.jpg', type: 'image', sizeKB: 1703.8, dimensions: '6000 × 3376', usedIn: ['Sectors & Applications', 'Smart Buildings'], uploadedAt: '2026-08-12 10:00' },
    { id: 'med-footer-bg', name: 'FOTER BG.jpg', path: 'img/FOTER BG.jpg', type: 'image', sizeKB: 645.3, dimensions: '6003 × 2001', usedIn: ['CTA Section Background'], uploadedAt: '2026-08-12 10:00' },
    { id: 'med-icon-svg', name: 'ICON.svg', path: 'img/ICON.svg', type: 'svg', sizeKB: 5.7, dimensions: '960 × 493', usedIn: ['System Vector Graphics', 'Indicators'], uploadedAt: '2026-08-12 10:00' }
  ];

  const initialIcons = [
    { id: 'ico-1', name: 'cctv_security', serviceName: 'أنظمة الأمان والمراقبة', category: 'الأمن والحماية', path: 'src/icons/serviceIcons.ts', usage: 'كاميرات AI CCTV وخوادم VMS', status: 'active' },
    { id: 'ico-2', name: 'access_control', serviceName: 'أنظمة التحكم بالدخول والخروج', category: 'الأمن وإدارة الوصول', path: 'src/icons/serviceIcons.ts', usage: 'بوابات وقارئات البصمة والوجه', status: 'active' },
    { id: 'ico-3', name: 'intrusion_alarm', serviceName: 'أنظمة الإنذار والاتصالات', category: 'الإنذار والاتصالات', path: 'src/icons/serviceIcons.ts', usage: 'كشف التسلل والنداء العام PA', status: 'active' },
    { id: 'ico-4', name: 'fire_alarm', serviceName: 'إنذار الحريق', category: 'السلامة وحماية الأرواح', path: 'src/icons/serviceIcons.ts', usage: 'كواشف معنونة وإخلاء تلقائي', status: 'active' },
    { id: 'ico-5', name: 'networks_telecom', serviceName: 'الشبكات والاتصالات', category: 'البنية التحتية الرقمية', path: 'src/icons/serviceIcons.ts', usage: 'ألياف ضوئية وسيرفرات Wi-Fi 6/7', status: 'active' },
    { id: 'ico-6', name: 'smart_audio', serviceName: 'الأنظمة الذكية والصوتيات', category: 'الصوتيات الذكية', path: 'src/icons/serviceIcons.ts', usage: 'توزيع صوتي متعدد المناطق DSP', status: 'active' },
    { id: 'ico-7', name: 'ip_pbx', serviceName: 'السنترال', category: 'الاتصالات المؤسسية', path: 'src/icons/serviceIcons.ts', usage: 'سنترالات IP-PBX وهواتف VoIP', status: 'active' },
    { id: 'ico-8', name: 'bms_systems', serviceName: 'إدارة المباني BMS', category: 'الأنظمة الذكية والأتمتة', path: 'src/icons/serviceIcons.ts', usage: 'تحكم مركزي بالطاقة وتكييف HVAC', status: 'active' },
    { id: 'ico-9', name: 'smart_home', serviceName: 'المنازل الذكية', category: 'الأتمتة السكنية', path: 'src/icons/serviceIcons.ts', usage: 'أتمتة الإضاءة والتكييف والستائر', status: 'active' },
    { id: 'ico-10', name: 'audiovisual', serviceName: 'الأنظمة المرئية والصوتية', category: 'العرض والاجتماعات', path: 'src/icons/serviceIcons.ts', usage: 'غرف اجتماعات ذكية وشاشات LED', status: 'active' }
  ];

  function getInitialCMSData() {
    return {
      settings: {
        siteName: 'أساسات المشاعر المحدودة',
        companyName: 'أساسات المشاعر المحدودة',
        companyNameEn: 'Asasat Al-Mashaer Co. Ltd.',
        tagline: 'حلول تقنية متكاملة لحماية وإدارة المنشآت الذكية',
        logoPath: 'img/LOGO.jpeg',
        faviconPath: 'img/LOGO.jpeg',
        primaryColor: '#0066ff',
        secondaryColor: '#0284c7',
        themePreference: 'light',
        metaTitle: 'أساسات المشاعر المحدودة | حلول تقنية متكاملة لحماية وإدارة المنشآت الذكية',
        metaDescription: 'شركة أساسات المشاعر المحدودة - ريادة واحترافية في تصميم وتنفيذ أنظمة الأمان والمراقبة، التحكم بالدخول، إنذار الحريق، الشبكات والاتصالات، وإدارة المباني الذكية BMS.',
        keywords: 'أساسات المشاعر, أنظمة أمنية, مراقبة AI CCTV, إنذار حريق, تحكم بالدخول, شبكات ألياف ضوئية, سنترال IP-PBX, إدارة المباني BMS, منازل ذكية, صوتيات ومرئيات',
        ogImage: 'img/LOGO.jpeg'
      },
      navigation: [
        { id: 'nav-1', label: 'الرئيسية', url: '#hero', order: 1, isActive: true },
        { id: 'nav-2', label: 'من نحن', url: '#about', order: 2, isActive: true },
        { id: 'nav-3', label: 'خدماتنا وحلولنا', url: '#services', order: 3, isActive: true },
        { id: 'nav-4', label: 'الحلول المتكاملة', url: '#ecosystem', order: 4, isActive: true },
        { id: 'nav-5', label: 'لماذا نحن', url: '#why-us', order: 5, isActive: true },
        { id: 'nav-6', label: 'القطاعات', url: '#sectors', order: 6, isActive: true },
        { id: 'nav-7', label: 'تواصل معنا', url: '#contact', order: 7, isActive: true }
      ],
      hero: {
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
        ],
        isActive: true
      },
      stats: initialIndicatorsData,
      about: {
        badge: 'من نحن — نبذة عن الشركة',
        title: 'شريككم الاستراتيجي في بناء',
        titleHighlight: 'المنظومات التقنية الذكية',
        leadText: 'تُعد شركة أساسات المشاعر المحدودة رائدة في تقديم الحلول والأنظمة التقنية المتكاملة للمنشآت الذكية، البنية التحتية للشبكات، أنظمة الأمان والمراقبة، التحكم بالدخول، وإدارة المباني BMS.',
        subtitle: 'نعمل وفق أعلى معايير الجودة العالمية لنضمن لعملائنا في القطاعات التجارية، الإدارية، والحكومية بيئة تشغيلية ذكية، آمنة، ومستدامة تمتاز بأعلى درجات الكفاءة والموثوقية.',
        imagePath: 'img/IT TEAM.jpg',
        floatingBadgeText: 'فريق هندسي وتقني متخصص',
        imageOverlayTitle: 'خبرة هندسية موثوقة',
        imageOverlaySubtitle: 'كفاءة عالية في تنفيذ المشاريع الكبرى',
        pillars: initialPillarsData,
        vision: 'أن نكون الخيار الهندسي الأول في المملكة والمنطقة في مجال تصميم وتنفيذ البنى التحتية والأنظمة الذكية المتكاملة.',
        mission: 'تمكين عملائنا بأعلى درجات الأمان والكفاءة التشغيلية عبر دمج أحدث تقنيات الأتمتة والذكاء الاصطناعي في بيئة متجانسة.',
        values: ['الريادة الهندسية', 'الموثوقية والأمان', 'الالتزام بأعلى معايير الجودة', 'الابتكار المستمر'],
        isActive: true
      },
      services: initialServicesList,
      solutions: initialEcosystemNodes,
      whyUs: initialWhyUsData,
      sectors: initialSectorsData,
      cta: {
        badge: 'ابدأ مشروعك معنا اليوم',
        titlePrefix: 'هل تبحث عن',
        titleHighlight: 'حل تقني وهندسي متكامل لمشروعك؟',
        description: 'فريق مهندسينا ومستشارينا على أتم الاستعداد لدراسة متطلبات منشأتك، وتصميم وتوريد وتركيب أحدث المنظومات الأمنية والذكية بأعلى معايير الجودة العالمية.',
        buttonText: 'اطلب دراسة واستشارة لمشروعك',
        buttonUrl: '#contact',
        bgImagePath: 'img/FOTER BG.jpg',
        isActive: true
      },
      contact: {
        phone: '+966 12 550 0000',
        email: 'info@asasat.sa',
        whatsapp: '+966 50 000 0000',
        address: 'المملكة العربية السعودية — الرياض / مكة المكرمة',
        workingHours: 'الأحد - الخميس: 8:00 ص - 5:00 م (الدعم الفني 24/7)',
        socialLinks: {
          linkedin: 'https://linkedin.com/company/asasat-sa',
          twitter: 'https://x.com/asasat_sa'
        },
        isActive: true
      },
      footer: {
        logoPath: 'img/LOGO.jpeg',
        brandName: 'أساسات المشاعر المحدودة',
        brandNameEn: 'Asasat Al-Mashaer Co. Ltd.',
        brandDesc: 'نصمم وننفذ أحدث منظومات المراقبة والأمان، التحكم بالدخول، إنذار الحريق، البنية التحتية للشبكات والاتصالات، وإدارة المباني الذكية BMS بأعلى المعايير الهندسية.',
        copyrightText: '© 2026 أساسات المشاعر المحدودة — جميع الحقوق محفوظة',
        featuredServices: ['أنظمة الأمان والمراقبة', 'التحكم بالدخول والخروج', 'أنظمة إنذار الحريق', 'البنية التحتية للشبكات', 'إدارة المباني BMS', 'المنازل الذكية والصوتيات'],
        isActive: true
      },
      media: initialMediaItems,
      icons: initialIcons
    };
  }

  // --- 2.5 XSS Sanitization & Security ---
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

  // --- 3. AuthService & CMSStore (PostgreSQL Backend & JWT) ---
  const STORE_KEY = 'asasat_cms_store_v3';
  const AUTH_TOKEN_KEY = 'asasat_jwt_token';
  const AUTH_USER_KEY = 'asasat_admin_user';

  const AuthService = {
    currentUser: null,
    token: null,
    init() {
      try {
        this.token = localStorage.getItem(AUTH_TOKEN_KEY);
        const stored = localStorage.getItem(AUTH_USER_KEY);
        if (stored && this.token) this.currentUser = JSON.parse(stored);
        else {
          this.currentUser = null;
          this.token = null;
        }
      } catch (e) {
        this.currentUser = null;
        this.token = null;
      }
    },
    getToken() {
      if (!this.token) this.token = localStorage.getItem(AUTH_TOKEN_KEY);
      return this.token;
    },
    getAuthHeaders() {
      const token = this.getToken();
      return {
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {})
      };
    },
    async login(email, pass) {
      try {
        const res = await fetch('/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: email.trim(), password: pass.trim() })
        });
        const result = await res.json();
        if (res.ok && result.success && result.token) {
          this.token = result.token;
          this.currentUser = result.user;
          localStorage.setItem(AUTH_TOKEN_KEY, result.token);
          localStorage.setItem(AUTH_USER_KEY, JSON.stringify(result.user));
          return { success: true, message: result.message, user: result.user };
        } else {
          return { success: false, message: result.message || 'بيانات الدخول غير صحيحة.' };
        }
      } catch (err) {
        return { success: false, message: 'تعذر الاتصال بالخادم. يرجى التحقق من اتصال الشبكة.' };
      }
    },
    async validateSession() {
      const token = this.getToken();
      if (!token) {
        this.logout();
        return false;
      }
      try {
        const res = await fetch('/api/auth/me', { headers: this.getAuthHeaders() });
        if (res.ok) {
          const result = await res.json();
          if (result.success && result.user) {
            this.currentUser = result.user;
            localStorage.setItem(AUTH_USER_KEY, JSON.stringify(result.user));
            return true;
          }
        }
        this.logout();
        return false;
      } catch (e) {
        return this.currentUser !== null;
      }
    },
    async logout() {
      const token = this.getToken();
      if (token) {
        try {
          await fetch('/api/auth/logout', { method: 'POST', headers: this.getAuthHeaders() });
        } catch (e) {}
      }
      this.currentUser = null;
      this.token = null;
      localStorage.removeItem(AUTH_TOKEN_KEY);
      localStorage.removeItem(AUTH_USER_KEY);
    },
    getCurrentUser() {
      if (!this.currentUser) this.init();
      return this.currentUser;
    },
    isAuthenticated() {
      return this.getToken() !== null && this.getCurrentUser() !== null;
    }
  };

  const CMSStore = {
    state: null,
    listeners: [],
    init() {
      if (this.state) return;
      try {
        const stored = localStorage.getItem(STORE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored);
          if (parsed.draft && parsed.published) {
            this.state = parsed;
          } else {
            this.resetLocal();
          }
        } else {
          this.resetLocal();
        }
      } catch (e) {
        this.resetLocal();
      }
      this.syncWithServer();
    },
    resetLocal() {
      const data = getInitialCMSData();
      const now = '2026-08-12 10:25';
      this.state = {
        draft: JSON.parse(JSON.stringify(data)),
        published: JSON.parse(JSON.stringify(data)),
        isDraftDirty: false,
        lastSavedAt: now,
        lastPublishedAt: now,
        currentVersion: 'v1.0.0',
        users: initialUsers,
        activityLogs: [
          { id: 'act-1', timestamp: '2026-08-12 10:00', userId: 'usr-1', userName: 'مدير النظام', userRole: 'super_admin', actionType: 'publish', section: 'النظام العام', details: 'اعتماد ونشر المنظومة الرقمية الموحدة لشركة أساسات المشاعر المحدودة (v1.0.0)' },
          { id: 'act-2', timestamp: '2026-08-12 10:15', userId: 'usr-1', userName: 'مدير النظام', userRole: 'super_admin', actionType: 'update', section: 'الواجهة والهوية', details: 'ضبط وضوح فيديو الخلفية واعتماد عناصر الهوية البصرية الفاخرة' },
          { id: 'act-3', timestamp: '2026-08-12 10:30', userId: 'usr-1', userName: 'مدير النظام', userRole: 'super_admin', actionType: 'security', section: 'أمان الإدارة', details: 'تفعيل بروتوكول الدخول الآمن للمسؤول العام وإلغاء الحسابات التجريبية' }
        ],
        revisions: [
          { id: 'rev-v1', version: 'v1.0.0', timestamp: '2026-08-12 10:00', authorName: 'مدير النظام (Super Admin)', summary: 'الإصدار المعتمد والمنشور رسمياً لكافة الحلول والأنظمة والوسائط', snapshot: JSON.parse(JSON.stringify(data)) }
        ]
      };
      this.persist();
    },
    async syncWithServer() {
      if (!AuthService.isAuthenticated()) return;
      try {
        const res = await fetch('/api/admin/cms/state', { headers: AuthService.getAuthHeaders() });
        if (res.ok) {
          const result = await res.json();
          if (result.success && result.state) {
            this.state = {
              ...this.state,
              ...result.state,
              draft: sanitizeObject(result.state.draft),
              published: sanitizeObject(result.state.published)
            };
            this.persist();
            this.notify();
          }
        }
      } catch (e) {
        console.warn('Backend sync in progress...');
      }
    },
    getState() {
      this.init();
      const defaultState = getInitialCMSData();
      if (!this.state) this.resetLocal();
      if (!this.state.draft) this.state.draft = defaultState;
      if (!this.state.published) this.state.published = defaultState;
      if (!Array.isArray(this.state.activityLogs)) this.state.activityLogs = [];
      if (!Array.isArray(this.state.revisions)) this.state.revisions = [];
      if (!Array.isArray(this.state.users)) this.state.users = initialUsers;
      return this.state;
    },
    getDraft() {
      const state = this.getState();
      const defaultData = getInitialCMSData();
      const draft = state.draft || defaultData;
      // Ensure all standard arrays exist
      if (!Array.isArray(draft.services)) draft.services = defaultData.services;
      if (!Array.isArray(draft.sectors)) draft.sectors = defaultData.sectors;
      if (!Array.isArray(draft.media)) draft.media = defaultData.media;
      if (!Array.isArray(draft.icons)) draft.icons = defaultData.icons;
      if (!Array.isArray(draft.whyUs)) draft.whyUs = defaultData.whyUs;
      if (!Array.isArray(draft.solutions)) draft.solutions = defaultData.solutions;
      if (!Array.isArray(draft.stats)) draft.stats = defaultData.stats;
      if (!Array.isArray(draft.navigation)) draft.navigation = defaultData.navigation;
      if (!draft.hero) draft.hero = defaultData.hero;
      if (!draft.about) draft.about = defaultData.about;
      if (!draft.cta) draft.cta = defaultData.cta;
      if (!draft.contact) draft.contact = defaultData.contact;
      if (!draft.footer) draft.footer = defaultData.footer;
      if (!draft.settings) draft.settings = defaultData.settings;
      return draft;
    },
    getPublished() {
      const state = this.getState();
      return state.published || getInitialCMSData();
    },
    isDraftDirty() {
      this.init();
      return Boolean(this.state?.isDraftDirty);
    },
    async updateDraft(section, data, details) {
      this.init();
      const cleanData = sanitizeObject(data);
      this.state.draft[section] = JSON.parse(JSON.stringify(cleanData));
      this.state.isDraftDirty = true;
      this.state.lastSavedAt = new Date().toLocaleString('ar-SA', { hour12: false });
      this.logActivity('update', section, details);
      this.persist();
      this.notify();

      try {
        const res = await fetch(`/api/admin/cms/draft/${section}`, {
          method: 'PUT',
          headers: AuthService.getAuthHeaders(),
          body: JSON.stringify({ data: cleanData, details })
        });
        const result = await res.json();
        if (res.ok && result.success) {
          if (result.lastSavedAt) this.state.lastSavedAt = result.lastSavedAt;
          this.persist();
        }
      } catch (err) {}
    },
    async publish(summary) {
      this.init();
      const user = AuthService.getCurrentUser();
      const authorName = user ? user.name : 'مسؤول النظام';
      const now = new Date().toLocaleString('ar-SA', { hour12: false });
      const prevVer = this.state.currentVersion || 'v1.0.0';
      const num = parseInt(prevVer.replace(/[^\d]/g, ''), 10) + 1;
      const newVersion = `v1.0.${num}`;

      try {
        const res = await fetch('/api/admin/cms/publish', {
          method: 'POST',
          headers: AuthService.getAuthHeaders(),
          body: JSON.stringify({ summary })
        });
        const result = await res.json();
        if (res.ok && result.success) {
          const finalVer = result.version || newVersion;
          this.state.published = JSON.parse(JSON.stringify(this.state.draft));
          this.state.isDraftDirty = false;
          this.state.lastPublishedAt = result.lastPublishedAt || now;
          this.state.lastSavedAt = result.lastPublishedAt || now;
          this.state.currentVersion = finalVer;
          await this.syncWithServer();
          this.persist();
          this.notify();
          return { success: true, version: finalVer, message: result.message };
        }
      } catch (err) {}

      // Local fallback
      this.state.published = JSON.parse(JSON.stringify(this.state.draft));
      this.state.isDraftDirty = false;
      this.state.lastPublishedAt = now;
      this.state.currentVersion = newVersion;
      this.persist();
      this.notify();
      return { success: true, version: newVersion };
    },
    async discardDraft() {
      this.init();
      try {
        await fetch('/api/admin/cms/discard', { method: 'POST', headers: AuthService.getAuthHeaders() });
      } catch (e) {}
      this.state.draft = JSON.parse(JSON.stringify(this.state.published));
      this.state.isDraftDirty = false;
      this.persist();
      this.notify();
    },
    async restoreRevision(revId) {
      this.init();
      try {
        const res = await fetch(`/api/admin/cms/restore/${revId}`, { method: 'POST', headers: AuthService.getAuthHeaders() });
        if (res.ok) {
          await this.syncWithServer();
          return true;
        }
      } catch (e) {}
      const rev = this.state.revisions.find(r => r.id === revId);
      if (!rev || !rev.snapshot) return false;
      this.state.draft = JSON.parse(JSON.stringify(rev.snapshot));
      this.state.published = JSON.parse(JSON.stringify(rev.snapshot));
      this.state.isDraftDirty = false;
      this.persist();
      this.notify();
      return true;
    },
    async reset() {
      try {
        await fetch('/api/admin/cms/reset', { method: 'POST', headers: AuthService.getAuthHeaders() });
        await this.syncWithServer();
      } catch (e) {
        this.resetLocal();
        this.notify();
      }
    },
    async createUser(userData) {
      try {
        const res = await fetch('/api/admin/users', {
          method: 'POST',
          headers: AuthService.getAuthHeaders(),
          body: JSON.stringify(userData)
        });
        const result = await res.json();
        if (res.ok && result.success) {
          await this.syncWithServer();
          return { success: true, message: result.message };
        }
        return { success: false, message: result.message || 'فشل إنشاء المستخدم.' };
      } catch (e) {
        return { success: false, message: 'تعذر الاتصال بالخادم.' };
      }
    },
    async deleteUser(userId) {
      try {
        const res = await fetch(`/api/admin/users/${userId}`, {
          method: 'DELETE',
          headers: AuthService.getAuthHeaders()
        });
        const result = await res.json();
        if (res.ok && result.success) {
          await this.syncWithServer();
          return { success: true, message: result.message };
        }
        return { success: false, message: result.message || 'فشل حذف المستخدم.' };
      } catch (e) {
        return { success: false, message: 'تعذر الاتصال بالخادم.' };
      }
    },
    inquiries: [],
    async fetchInquiries() {
      if (!AuthService.isAuthenticated()) return [];
      try {
        const res = await fetch('/api/admin/inquiries', { headers: AuthService.getAuthHeaders() });
        if (res.ok) {
          const result = await res.json();
          if (result.success && Array.isArray(result.inquiries)) {
            this.inquiries = result.inquiries;
            return this.inquiries;
          }
        }
      } catch (e) {}
      return this.inquiries || [];
    },
    async updateInquiryStatus(id, status, notes) {
      try {
        const res = await fetch(`/api/admin/inquiries/${id}`, {
          method: 'PATCH',
          headers: AuthService.getAuthHeaders(),
          body: JSON.stringify({ status, notes })
        });
        const result = await res.json();
        if (res.ok && result.success) {
          await this.fetchInquiries();
          this.notify();
          return { success: true, message: result.message };
        }
        return { success: false, message: result.message || 'فشل تحديث الطلب.' };
      } catch (e) {
        return { success: false, message: 'تعذر الاتصال بالخادم.' };
      }
    },
    async deleteInquiry(id) {
      try {
        const res = await fetch(`/api/admin/inquiries/${id}`, {
          method: 'DELETE',
          headers: AuthService.getAuthHeaders()
        });
        const result = await res.json();
        if (res.ok && result.success) {
          await this.fetchInquiries();
          this.notify();
          return { success: true, message: result.message };
        }
        return { success: false, message: result.message || 'فشل حذف الطلب.' };
      } catch (e) {
        return { success: false, message: 'تعذر الاتصال بالخادم.' };
      }
    },
    logActivity(actionType, section, details) {
      this.init();
      const user = AuthService.getCurrentUser();
      const log = {
        id: `act-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
        timestamp: new Date().toLocaleString('ar-SA', { hour12: false }),
        userId: user ? user.id : 'usr-system',
        userName: user ? user.name : 'النظام الآلي',
        userRole: user ? user.role : 'super_admin',
        actionType,
        section,
        details
      };
      this.state.activityLogs.unshift(log);
      if (this.state.activityLogs.length > 50) this.state.activityLogs.pop();
    },
    subscribe(fn) {
      this.listeners.push(fn);
      return () => {
        this.listeners = this.listeners.filter(l => l !== fn);
      };
    },
    persist() {
      try {
        localStorage.setItem(STORE_KEY, JSON.stringify(this.state));
      } catch (e) {
        console.error('LocalStorage write error:', e);
      }
    },
    notify() {
      this.listeners.forEach(fn => fn());
    }
  };

  // --- 4. UI Components: Toast & Confirm Modal ---
  function showToast(message, type = 'success') {
    let container = document.getElementById('admin-toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'admin-toast-container';
      container.className = 'admin-toast-container';
      document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = `admin-toast ${type}`;
    const iconName = type === 'success' ? 'check' : type === 'error' ? 'close' : 'sparkles';
    toast.innerHTML = `
      <span style="color: var(--admin-${type === 'error' ? 'danger' : type === 'info' ? 'info' : 'success'});">
        ${getIcon(iconName)}
      </span>
      <span>${message}</span>
    `;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  function showConfirmModal(opts) {
    const existing = document.getElementById('admin-confirm-modal');
    if (existing) existing.remove();
    const backdrop = document.createElement('div');
    backdrop.id = 'admin-confirm-modal';
    backdrop.className = 'admin-modal-backdrop active';
    backdrop.innerHTML = `
      <div class="admin-modal-box" style="max-width: 480px;">
        <div class="admin-modal-header">
          <h3 style="font-size: 1.25rem; font-weight: 800;">${opts.title}</h3>
          <button class="action-icon-btn" id="confirm-modal-close-x">${getIcon('close')}</button>
        </div>
        <p style="font-size: 0.95rem; color: var(--admin-text-muted); line-height: 1.7; margin-bottom: 2rem;">
          ${opts.message}
        </p>
        <div class="admin-modal-footer">
          <button class="admin-btn admin-btn-secondary" id="confirm-modal-cancel">${opts.cancelText || 'إلغاء'}</button>
          <button class="admin-btn ${opts.isDanger ? 'admin-btn-danger' : 'admin-btn-primary'}" id="confirm-modal-ok">${opts.confirmText || 'تأكيد العملية'}</button>
        </div>
      </div>
    `;
    document.body.appendChild(backdrop);
    const close = () => backdrop.remove();
    document.getElementById('confirm-modal-close-x').addEventListener('click', close);
    document.getElementById('confirm-modal-cancel').addEventListener('click', close);
    document.getElementById('confirm-modal-ok').addEventListener('click', () => {
      close();
      opts.onConfirm();
    });
  }

  function openSearchModal(onSelectRoute) {
    const existing = document.getElementById('admin-search-modal');
    if (existing) existing.remove();
    const backdrop = document.createElement('div');
    backdrop.id = 'admin-search-modal';
    backdrop.className = 'admin-modal-backdrop active';
    backdrop.innerHTML = `
      <div class="admin-modal-box" style="max-width: 600px; padding: 1.5rem;">
        <div style="display: flex; align-items: center; gap: 0.8rem; border-bottom: 1px solid var(--admin-border); padding-bottom: 1rem; margin-bottom: 1rem;">
          <span style="color: var(--admin-primary);">${getIcon('sparkles')}</span>
          <input type="text" id="admin-global-search-input" placeholder="ابحث عن خدمة، صورة، قسم، إعداد، أو مستخدم..." style="flex: 1; border: none; outline: none; font-size: 1.1rem; font-family: var(--admin-font); background: transparent; color: var(--admin-text-main);" autofocus />
          <button class="action-icon-btn" id="search-modal-close">${getIcon('close')}</button>
        </div>
        <div id="search-results-list" style="max-height: 360px; overflow-y: auto; display: flex; flex-direction: column; gap: 0.5rem;">
          <div style="padding: 1.5rem; text-align: center; color: var(--admin-text-muted); font-size: 0.9rem;">
            اكتب كلمة البحث للوصول الفوري لأي عنصر في لوحة التحكم...
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(backdrop);
    const input = document.getElementById('admin-global-search-input');
    const resultsContainer = document.getElementById('search-results-list');
    const close = () => backdrop.remove();
    document.getElementById('search-modal-close').addEventListener('click', close);

    const draft = CMSStore.getDraft();
    const searchItems = [
      ...draft.services.map(s => ({ title: s.title, subtitle: `خدمة رقم ${s.number} • ${s.category}`, route: 'services', type: 'خدمة' })),
      ...draft.sectors.map(s => ({ title: s.title, subtitle: s.subtitle, route: 'sectors', type: 'قطاع' })),
      ...draft.whyUs.map(w => ({ title: w.title, subtitle: w.subtitle, route: 'why-us', type: 'ميزة' })),
      ...draft.solutions.map(n => ({ title: n.title, subtitle: n.role, route: 'solutions', type: 'منظومة' })),
      ...draft.media.map(m => ({ title: m.name, subtitle: `${m.dimensions || m.type} • ${m.sizeKB} KB`, route: 'media', type: 'وسائط' })),
      { title: 'إعدادات قسم الهيرو (Hero Section)', subtitle: 'تعديل العنوان، الفيديو، والأزرار', route: 'hero', type: 'قسم' },
      { title: 'إدارة قسم من نحن (About Us)', subtitle: 'نبذة عن الشركة، الرؤية، والركائز', route: 'about', type: 'قسم' },
      { title: 'إعدادات الموقع و SEO', subtitle: 'اسم الموقع، الألوان، والكلمات المفتاحية', route: 'settings', type: 'إعدادات' },
      { title: 'بيانات التواصل والمقر', subtitle: 'الهاتف، البريد، وموقع المقر', route: 'contact', type: 'تواصل' },
      { title: 'إدارة المستخدمين والرتب', subtitle: 'الصلاحيات، الجلسات، والحسابات', route: 'users', type: 'مستخدمون' }
    ];

    input.addEventListener('input', () => {
      const q = input.value.trim().toLowerCase();
      if (!q) {
        resultsContainer.innerHTML = `<div style="padding: 1.5rem; text-align: center; color: var(--admin-text-muted); font-size: 0.9rem;">اكتب كلمة البحث للوصول الفوري لأي عنصر...</div>`;
        return;
      }
      const filtered = searchItems.filter(item => item.title.toLowerCase().includes(q) || item.subtitle.toLowerCase().includes(q) || item.type.toLowerCase().includes(q));
      if (filtered.length === 0) {
        resultsContainer.innerHTML = `<div style="padding: 1.5rem; text-align: center; color: var(--admin-text-muted); font-size: 0.9rem;">لم يتم العثور على نتائج.</div>`;
        return;
      }
      resultsContainer.innerHTML = filtered.map(item => `
        <div class="search-result-item" data-route="${item.route}" style="padding: 0.8rem 1rem; border-radius: var(--radius-sm); background: var(--admin-surface-subtle); display: flex; align-items: center; justify-content: space-between; cursor: pointer;">
          <div>
            <div style="font-weight: 700; font-size: 0.95rem; color: var(--admin-text-main);">${item.title}</div>
            <div style="font-size: 0.8rem; color: var(--admin-text-muted);">${item.subtitle}</div>
          </div>
          <span style="font-size: 0.72rem; font-weight: 700; padding: 0.2rem 0.6rem; border-radius: var(--radius-full); background: var(--admin-primary-soft); color: var(--admin-primary);">${item.type}</span>
        </div>
      `).join('');
      resultsContainer.querySelectorAll('.search-result-item').forEach(el => {
        el.addEventListener('click', () => {
          const r = el.getAttribute('data-route');
          if (r) {
            close();
            onSelectRoute(r);
          }
        });
      });
    });
  }

  // --- 5. Views Rendering & Setup ---
  function renderSidebar(currentRoute) {
    const user = AuthService.getCurrentUser() || { name: 'مسؤول النظام', roleTitle: 'مدير عام' };
    const menuSections = [
      {
        title: 'نظرة عامة',
        routes: [
          { id: 'dashboard', label: 'لوحة القيادة الرئيسية', icon: 'layers' },
          { id: 'inquiries', label: 'طلبات الاستشارات والعملاء', icon: 'mail', badge: (CMSStore.inquiries && CMSStore.inquiries.filter(i => i.status === 'new').length > 0) ? `جديد (${CMSStore.inquiries.filter(i => i.status === 'new').length})` : '' }
        ]
      },
      {
        title: 'إدارة محتوى الموقع',
        routes: [
          { id: 'hero', label: 'قسم الهيرو (Hero)', icon: 'sparkles' },
          { id: 'about', label: 'من نحن والرسالة', icon: 'shield_check' },
          { id: 'services', label: 'إدارة الخدمات (10)', icon: 'cpu', badge: '10' },
          { id: 'solutions', label: 'خريطة الأنظمة (Ecosystem)', icon: 'network_nodes' },
          { id: 'why-us', label: 'لماذا أساسات المشاعر', icon: 'sparkles' },
          { id: 'sectors', label: 'القطاعات والتطبيقات', icon: 'layers' },
          { id: 'stats', label: 'المؤشرات الهندسية', icon: 'shield_check' },
          { id: 'cta', label: 'قسم الدعوة للتواصل (CTA)', icon: 'phone' },
          { id: 'contact', label: 'معلومات الاتصال والمقر', icon: 'location' },
          { id: 'navigation', label: 'القائمة العلوية (Navbar)', icon: 'layers' },
          { id: 'footer', label: 'إدارة الفوتر والحقوق', icon: 'shield_check' }
        ]
      },
      {
        title: 'الوسائط والأصول',
        routes: [
          { id: 'media', label: 'مكتبة الوسائط والملفات', icon: 'layers', badge: 'Assets' },
          { id: 'icons', label: 'مدير الأيقونات والـ CSV', icon: 'cpu' }
        ]
      },
      {
        title: 'النظام والتحكم',
        routes: [
          { id: 'settings', label: 'إعدادات الموقع و SEO', icon: 'layers' },
          { id: 'users', label: 'المستخدمون والصلاحيات', icon: 'shield_check' },
          { id: 'activity', label: 'سجل النشاطات الحي', icon: 'sparkles' },
          { id: 'revisions', label: 'النسخ السابقة والمراجعات', icon: 'cpu' }
        ]
      }
    ];

    let menuHtml = '';
    menuSections.forEach(section => {
      menuHtml += `<div class="sidebar-section-title">${section.title}</div>`;
      section.routes.forEach(r => {
        const isActive = currentRoute === r.id;
        menuHtml += `
          <a class="sidebar-nav-item ${isActive ? 'active' : ''}" data-route="${r.id}" href="#${r.id}">
            <span class="sidebar-nav-icon">${getIcon(r.icon)}</span>
            <span style="flex: 1;">${r.label}</span>
            ${r.badge ? `<span style="font-size: 0.72rem; padding: 0.15rem 0.5rem; border-radius: var(--radius-full); background: ${isActive ? 'var(--admin-primary)' : 'var(--admin-surface-hover)'}; color: ${isActive ? '#fff' : 'var(--admin-text-muted)'}; font-weight: 700;">${r.badge}</span>` : ''}
          </a>
        `;
      });
    });

    return `
      <aside class="admin-sidebar" id="admin-sidebar">
        <div class="sidebar-header">
          <img src="img/LOGO.jpeg" alt="شعار أساسات المشاعر" class="sidebar-logo" />
          <div style="display: flex; flex-direction: column;">
            <span class="sidebar-brand-name">لوحة التحكم CMS</span>
            <span style="font-size: 0.72rem; color: var(--admin-primary); font-weight: 700; font-family: var(--admin-font-latin);">ASASAT CMS v2.0</span>
          </div>
        </div>
        <div class="sidebar-nav-container">${menuHtml}</div>
        <div class="sidebar-footer">
          <div class="sidebar-user-card">
            <div class="sidebar-user-avatar">${user.name.charAt(0)}</div>
            <div class="sidebar-user-info">
              <span class="sidebar-user-name">${user.name}</span>
              <span class="sidebar-user-role">${user.roleTitle}</span>
            </div>
          </div>
          <button class="action-icon-btn danger" id="admin-logout-btn" title="تسجيل الخروج">${getIcon('close')}</button>
        </div>
      </aside>
    `;
  }

  function renderTopbar() {
    const isDirty = CMSStore.isDraftDirty();
    return `
      <header class="admin-topbar">
        <div class="topbar-left-tools">
          <button class="topbar-mobile-toggle" id="admin-mobile-toggle" aria-label="فتح القائمة">${getIcon('layers')}</button>
          <button class="topbar-search-btn" id="topbar-search-trigger">${getIcon('sparkles')}<span>بحث سريع في الموقع... (Ctrl + K)</span></button>
        </div>
        <div class="topbar-right-tools">
          <div class="topbar-status-badge ${isDirty ? 'status-badge-dirty' : 'status-badge-published'}">
            <span style="width: 8px; height: 8px; border-radius: 50%; background: currentColor;"></span>
            <span>${isDirty ? 'مسودة غير منشورة' : 'النسخة المنشورة متطابقة'}</span>
          </div>
          <button class="admin-btn admin-btn-secondary" id="admin-preview-btn" title="معاينة الموقع مع تعديلات المسودة">${getIcon('layers')}<span>معاينة الموقع</span></button>
          ${isDirty ? `<button class="admin-btn admin-btn-secondary" id="admin-discard-btn" title="إلغاء المسودة والعودة للمنشور"><span>تراجع</span></button>` : ''}
          <button class="admin-btn admin-btn-primary" id="admin-publish-btn" title="نشر التعديلات لزوار الموقع">${getIcon('sparkles')}<span>نشر التغييرات</span></button>
          <button class="theme-toggle-btn" id="admin-theme-toggle" title="تبديل الثيم">${getIcon('cpu')}</button>
        </div>
      </header>
    `;
  }

  // --- 6. Admin App Router & Init ---
  const AdminApp = {
    root: null,
    async init() {
      AuthService.init();
      CMSStore.init();

      if (AuthService.isAuthenticated()) {
        await AuthService.validateSession();
        await CMSStore.syncWithServer();
        await CMSStore.fetchInquiries();
      }

      this.root = document.getElementById('admin-app');
      window.addEventListener('hashchange', () => this.render());
      window.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
          e.preventDefault();
          openSearchModal((route) => {
            window.location.hash = `#${route}`;
          });
        }
      });

      CMSStore.subscribe(() => {
        const topbarEl = document.querySelector('.admin-topbar');
        if (topbarEl && AuthService.isAuthenticated()) {
          topbarEl.outerHTML = renderTopbar();
          this.wireTopbar();
        }
      });

      // Start Real-Time Inquiries & State Polling (Every 3 seconds)
      let prevInquiryIds = new Set((CMSStore.inquiries || []).map(i => i.id));
      setInterval(async () => {
        if (!AuthService.isAuthenticated()) return;
        try {
          const inqs = await CMSStore.fetchInquiries();
          if (Array.isArray(inqs)) {
            const currentIds = new Set(inqs.map(i => i.id));
            const newInquiries = inqs.filter(i => !prevInquiryIds.has(i.id));
            if (newInquiries.length > 0) {
              prevInquiryIds = currentIds;
              const firstNew = newInquiries[0];
              showToast(`🔔 طلب استشارة جديد ورد الآن من: ${firstNew.name} (${firstNew.service})`);
              const currentRoute = window.location.hash.replace(/^#/, '') || 'dashboard';
              if (currentRoute === 'inquiries' || currentRoute === 'dashboard') {
                this.render();
              } else {
                // Update sidebar badge
                const sidebarEl = document.getElementById('admin-sidebar');
                if (sidebarEl) sidebarEl.outerHTML = renderSidebar(currentRoute);
                this.wireSidebar();
              }
            }
          }
        } catch (e) {}
      }, 3000);

      this.render();
    },

    render() {
      if (!this.root) this.root = document.getElementById('admin-app');
      if (!this.root) return;

      if (!AuthService.isAuthenticated()) {
        this.renderLogin();
        return;
      }

      const hash = window.location.hash.replace(/^#/, '') || 'dashboard';
      const valid = ['dashboard', 'inquiries', 'hero', 'about', 'services', 'solutions', 'why-us', 'sectors', 'stats', 'cta', 'contact', 'navigation', 'footer', 'media', 'icons', 'settings', 'users', 'activity', 'revisions'];
      const route = valid.includes(hash) ? hash : 'dashboard';

      let viewHtml = '';
      if (route === 'dashboard') viewHtml = this.renderDashboard();
      else if (route === 'inquiries') viewHtml = this.renderInquiries();
      else if (route === 'hero') viewHtml = this.renderHero();
      else if (route === 'about') viewHtml = this.renderAbout();
      else if (route === 'services') viewHtml = this.renderServices();
      else if (route === 'solutions') viewHtml = this.renderSolutions();
      else if (route === 'why-us') viewHtml = this.renderWhyUs();
      else if (route === 'sectors') viewHtml = this.renderSectors();
      else if (route === 'stats') viewHtml = this.renderStats();
      else if (route === 'cta') viewHtml = this.renderCTA();
      else if (route === 'contact') viewHtml = this.renderContact();
      else if (route === 'navigation') viewHtml = this.renderNavigation();
      else if (route === 'footer') viewHtml = this.renderFooter();
      else if (route === 'media') viewHtml = this.renderMedia();
      else if (route === 'icons') viewHtml = this.renderIcons();
      else if (route === 'settings') viewHtml = this.renderSettings();
      else if (route === 'users') viewHtml = this.renderUsers();
      else if (route === 'activity') viewHtml = this.renderActivity();
      else if (route === 'revisions') viewHtml = this.renderRevisions();

      this.root.innerHTML = `
        <div class="admin-layout">
          ${renderSidebar(route)}
          <div class="admin-main-wrapper">
            ${renderTopbar()}
            <main id="admin-view-mount">${viewHtml}</main>
          </div>
        </div>
      `;

      this.wireSidebar();
      this.wireTopbar();
      this.wireCurrentView(route);
    },

    renderLogin() {
      this.root.innerHTML = `
        <div style="min-height: 100vh; width: 100vw; display: flex; align-items: center; justify-content: center; background: #f8fafc; padding: 1.5rem;">
          <div class="admin-card" style="max-width: 460px; width: 100%; padding: 2.5rem; border-radius: var(--radius-lg); box-shadow: var(--admin-shadow-modal); background: #ffffff;">
            <div style="text-align: center; margin-bottom: 1.8rem;">
              <img src="img/LOGO.jpeg" alt="أساسات المشاعر" style="height: 58px; margin: 0 auto 1.2rem auto; border-radius: 8px; padding: 4px 12px; background: #ffffff; border: 1px solid var(--admin-border);" />
              <h2 style="font-size: 1.55rem; font-weight: 900; color: var(--admin-text-main); margin-bottom: 0.4rem;">تسجيل دخول لوحة الإدارة</h2>
              <p style="font-size: 0.88rem; color: var(--admin-text-muted);">شركة أساسات المشاعر المحدودة — نظام الإدارة والتحكم الآمن</p>
            </div>

            <!-- Quick Demo Credentials Box -->
            <div style="margin-bottom: 1.5rem; padding: 0.85rem 1rem; border-radius: var(--radius-sm); background: rgba(0, 102, 255, 0.05); border: 1px dashed rgba(0, 102, 255, 0.4); display: flex; justify-content: space-between; align-items: center;">
              <div style="font-size: 0.82rem; color: var(--admin-text-main); line-height: 1.6;">
                <div><span style="color: var(--admin-text-muted);">البريد:</span> <strong style="font-family: var(--admin-font-latin); direction: ltr; display: inline-block;">admin@asasat.sa</strong></div>
                <div><span style="color: var(--admin-text-muted);">كلمة المرور:</span> <strong style="font-family: var(--admin-font-latin); direction: ltr; display: inline-block;">Admin@123456</strong></div>
              </div>
              <button type="button" id="fill-demo-creds-btn" class="admin-btn admin-btn-secondary" style="font-size: 0.78rem; padding: 0.4rem 0.8rem; font-weight: 700;">
                ${getIcon('sparkles')}
                <span>تعبئة تلقائية</span>
              </button>
            </div>

            <form id="admin-login-form">
              <div class="admin-form-group" style="margin-bottom: 1.2rem;">
                <label class="admin-label" for="login-email" style="font-weight: 700; margin-bottom: 0.4rem; display: block;">البريد الإلكتروني للادمن</label>
                <input type="email" id="login-email" class="admin-input" value="admin@asasat.sa" placeholder="admin@asasat.sa" autocomplete="username" required style="direction: ltr; text-align: left;" />
              </div>
              <div class="admin-form-group" style="margin-bottom: 1.5rem;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
                  <label class="admin-label" for="login-password" style="font-weight: 700; display: block; margin: 0;">كلمة المرور</label>
                  <button type="button" id="toggle-password-btn" style="background: none; border: none; font-size: 0.78rem; color: var(--admin-primary); cursor: pointer; font-weight: 600; font-family: var(--admin-font);">إظهار كلمة المرور</button>
                </div>
                <input type="password" id="login-password" class="admin-input" value="Admin@123456" placeholder="••••••••" autocomplete="current-password" required style="direction: ltr; text-align: left;" />
              </div>
              <div id="login-error-msg" style="display: none; padding: 0.8rem; border-radius: var(--radius-sm); background: var(--admin-danger-soft); color: var(--admin-danger); font-size: 0.85rem; font-weight: 700; margin-bottom: 1.2rem; text-align: center; line-height: 1.5;"></div>
              <button type="submit" id="admin-login-btn" class="admin-btn admin-btn-primary" style="width: 100%; padding: 0.85rem; font-size: 1rem; font-weight: 700; border-radius: var(--radius-sm); justify-content: center; gap: 0.6rem;">
                ${getIcon('shield_check')}
                <span>دخول آمن للوحة التحكم</span>
              </button>
            </form>
            <div style="margin-top: 2rem; padding: 0.85rem 1rem; border-radius: var(--radius-sm); background: #f8fafc; border: 1px solid var(--admin-border); display: flex; align-items: center; gap: 0.75rem; text-align: right;">
              <div style="color: var(--admin-primary); flex-shrink: 0; width: 20px; height: 20px; display: flex; align-items: center; justify-content: center;">
                ${getIcon('shield_check')}
              </div>
              <span style="font-size: 0.76rem; color: var(--admin-text-muted); font-weight: 600; line-height: 1.5;">
                بوابة مؤمنة بالكامل بتشفير Bcrypt وجلسات JWT و Rate-Limiting لحماية المنظومة.
              </span>
            </div>
          </div>
        </div>
      `;

      const form = document.getElementById('admin-login-form');
      const submitBtn = document.getElementById('admin-login-btn');
      const err = document.getElementById('login-error-msg');
      const emailInput = document.getElementById('login-email');
      const passInput = document.getElementById('login-password');
      const autoFillBtn = document.getElementById('fill-demo-creds-btn');
      const togglePassBtn = document.getElementById('toggle-password-btn');

      autoFillBtn?.addEventListener('click', () => {
        if (emailInput) emailInput.value = 'admin@asasat.sa';
        if (passInput) passInput.value = 'Admin@123456';
        showToast('تمت تعبئة بيانات الدخول.');
      });

      togglePassBtn?.addEventListener('click', () => {
        if (passInput) {
          const isPass = passInput.type === 'password';
          passInput.type = isPass ? 'text' : 'password';
          if (togglePassBtn) togglePassBtn.textContent = isPass ? 'إخفاء كلمة المرور' : 'إظهار كلمة المرور';
        }
      });

      form?.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = emailInput?.value || '';
        const pass = passInput?.value || '';

        if (err) err.style.display = 'none';
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = `<span>جاري التحقق والمصادقة...</span>`;
        }

        try {
          const res = await AuthService.login(email, pass);
          if (res.success) {
            showToast(res.message);
            await CMSStore.syncWithServer();
            window.location.hash = '#dashboard';
            AdminApp.render();
          } else {
            if (err) {
              err.textContent = res.message;
              err.style.display = 'block';
            }
          }
        } catch (error) {
          if (err) {
            err.textContent = 'حدث خطأ في الاتصال بالخادم، يرجى المحاولة لاحقاً.';
            err.style.display = 'block';
          }
        } finally {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = `${getIcon('shield_check')}<span>دخول آمن للوحة التحكم</span>`;
          }
        }
      });
    },

    renderDashboard() {
      const state = CMSStore.getState() || {};
      const draft = CMSStore.getDraft() || getInitialCMSData();
      const isDirty = CMSStore.isDraftDirty();
      const logs = Array.isArray(state.activityLogs) ? state.activityLogs : [];
      const recent = logs.slice(0, 6).map(log => `
        <div style="display: flex; align-items: flex-start; gap: 1rem; padding: 0.9rem 0; border-bottom: 1px solid var(--admin-border);">
          <div style="width: 36px; height: 36px; border-radius: 8px; background: var(--admin-primary-soft); color: var(--admin-primary); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">${getIcon('sparkles')}</div>
          <div style="flex: 1;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.2rem;">
              <span style="font-weight: 700; font-size: 0.92rem; color: var(--admin-text-main);">${log.userName || log.user || 'المسؤول'}</span>
              <span style="font-size: 0.75rem; color: var(--admin-text-muted); font-family: var(--admin-font-latin);">${log.timestamp || ''}</span>
            </div>
            <div style="font-size: 0.85rem; color: var(--admin-text-muted);"><span style="font-weight: 600; color: var(--admin-primary);">${log.section || 'النظام'}:</span> ${log.details || ''}</div>
          </div>
        </div>
      `).join('');

      const servicesCount = Array.isArray(draft.services) ? draft.services.length : 10;
      const sectorsCount = Array.isArray(draft.sectors) ? draft.sectors.length : 6;
      const mediaCount = Array.isArray(draft.media) ? draft.media.length : 7;
      const currentVersion = state.currentVersion || 'v1.0.0';
      const inqList = CMSStore.inquiries || [];
      const newInqCount = inqList.filter(i => i.status === 'new').length;

      return `
        <div class="admin-view-content">
          <div class="view-header">
            <div class="view-title-wrap">
              <h1>لوحة القيادة الرئيسية</h1>
              <p class="view-subtitle">نظرة عامة على حالة الموقع والمحتوى والأنشطة والطلبات الواردة</p>
            </div>
            <div style="display: flex; gap: 0.8rem;">
              <a href="#inquiries" class="admin-btn admin-btn-primary">${getIcon('mail')}<span>طلبات الاستشارات (${inqList.length})</span></a>
              <a href="index.html" target="_blank" class="admin-btn admin-btn-secondary">${getIcon('layers')}<span>زيارة الموقع المباشر</span></a>
            </div>
          </div>
          <div class="dashboard-stats-grid">
            <div class="metric-card" onclick="location.hash='#inquiries'" style="cursor: pointer; border: 1px solid rgba(0, 102, 255, 0.2);">
              <div class="metric-icon-box" style="background: rgba(0, 102, 255, 0.08); color: var(--admin-primary);">${getIcon('mail')}</div>
              <div class="metric-info">
                <span class="metric-value" style="display: flex; align-items: center; gap: 0.5rem;">
                  <span>${inqList.length}</span>
                  ${newInqCount > 0 ? `<span style="font-size: 0.75rem; padding: 0.15rem 0.5rem; border-radius: 99px; background: rgba(16, 185, 129, 0.15); color: var(--admin-success); font-weight: 800;">${newInqCount} جديد</span>` : ''}
                </span>
                <span class="metric-label">طلبات الاستشارات الواردة</span>
              </div>
            </div>
            <div class="metric-card" onclick="location.hash='#services'" style="cursor: pointer;">
              <div class="metric-icon-box" style="background: rgba(16, 185, 129, 0.08); color: var(--admin-success);">${getIcon('cpu')}</div>
              <div class="metric-info"><span class="metric-value">${servicesCount}</span><span class="metric-label">الخدمات الفعالة</span></div>
            </div>
            <div class="metric-card" onclick="location.hash='#sectors'" style="cursor: pointer;">
              <div class="metric-icon-box" style="background: rgba(245, 158, 11, 0.08); color: var(--admin-warning);">${getIcon('layers')}</div>
              <div class="metric-info"><span class="metric-value">${sectorsCount}</span><span class="metric-label">القطاعات ومجالات التطبيق</span></div>
            </div>
            <div class="metric-card">
              <div class="metric-icon-box" style="background: rgba(2, 132, 199, 0.08); color: var(--admin-info);">${getIcon('shield_check')}</div>
              <div class="metric-info"><span class="metric-value">${currentVersion}</span><span class="metric-label">الإصدار المنشور</span></div>
            </div>
          </div>
          <div class="admin-card">
            <div class="admin-card-header"><h2 class="admin-card-title">${getIcon('sparkles')}<span>اختصارات الإدارة والتحكم</span></h2></div>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem;">
              <button class="admin-btn admin-btn-secondary" onclick="location.hash='#inquiries'" style="padding: 1.2rem 1rem; border-radius: var(--radius-md); flex-direction: column; gap: 0.6rem; height: auto;"><div class="quick-action-icon" style="width: 44px; height: 44px; border-radius: 10px; background: rgba(0, 102, 255, 0.08); display: flex; align-items: center; justify-content: center; color: var(--admin-primary);">${getIcon('mail')}</div><span style="font-weight: 700;">طلبات الاستشارات</span></button>
              <button class="admin-btn admin-btn-secondary" onclick="location.hash='#services'" style="padding: 1.2rem 1rem; border-radius: var(--radius-md); flex-direction: column; gap: 0.6rem; height: auto;"><div class="quick-action-icon" style="width: 44px; height: 44px; border-radius: 10px; background: rgba(16, 185, 129, 0.08); display: flex; align-items: center; justify-content: center; color: var(--admin-success);">${getIcon('cpu')}</div><span style="font-weight: 700;">إدارة الخدمات</span></button>
              <button class="admin-btn admin-btn-secondary" onclick="location.hash='#hero'" style="padding: 1.2rem 1rem; border-radius: var(--radius-md); flex-direction: column; gap: 0.6rem; height: auto;"><div class="quick-action-icon" style="width: 44px; height: 44px; border-radius: 10px; background: rgba(2, 132, 199, 0.08); display: flex; align-items: center; justify-content: center; color: var(--admin-info);">${getIcon('sparkles')}</div><span style="font-weight: 700;">تعديل الهيرو</span></button>
              <button class="admin-btn admin-btn-secondary" onclick="location.hash='#media'" style="padding: 1.2rem 1rem; border-radius: var(--radius-md); flex-direction: column; gap: 0.6rem; height: auto;"><div class="quick-action-icon" style="width: 44px; height: 44px; border-radius: 10px; background: rgba(245, 158, 11, 0.08); display: flex; align-items: center; justify-content: center; color: var(--admin-warning);">${getIcon('layers')}</div><span style="font-weight: 700;">مكتبة الوسائط</span></button>
              <button class="admin-btn admin-btn-secondary" onclick="location.hash='#contact'" style="padding: 1.2rem 1rem; border-radius: var(--radius-md); flex-direction: column; gap: 0.6rem; height: auto;"><div class="quick-action-icon" style="width: 44px; height: 44px; border-radius: 10px; background: rgba(139, 92, 246, 0.08); display: flex; align-items: center; justify-content: center; color: #8b5cf6;">${getIcon('phone')}</div><span style="font-weight: 700;">بيانات الاتصال</span></button>
            </div>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1.3fr; gap: 1.8rem;">
            <div class="admin-card">
              <div class="admin-card-header"><h3 class="admin-card-title">${getIcon('shield_check')}<span>حالة النشر والجاهزية</span></h3></div>
              <div style="display: flex; flex-direction: column; gap: 1.2rem;">
                <div style="padding: 1rem; border-radius: var(--radius-sm); background: ${isDirty ? 'var(--admin-warning-soft)' : 'var(--admin-success-soft)'}; border: 1px solid ${isDirty ? 'rgba(245, 158, 11, 0.2)' : 'rgba(16, 185, 129, 0.2)'};">
                  <div style="font-weight: 800; color: ${isDirty ? 'var(--admin-warning)' : 'var(--admin-success)'}; margin-bottom: 0.3rem;">${isDirty ? 'توجد تعديلات قيد المسودة غير منشورة' : 'جميع البيانات منشورة ومتطابقة مع الموقع المباشر'}</div>
                  <div style="font-size: 0.85rem; color: var(--admin-text-muted);">${isDirty ? 'قم بالمعاينة ثم اضغط نشر التغييرات.' : 'الموقع يعمل بأحدث نسخة معتمدة.'}</div>
                </div>
                <div style="font-size: 0.88rem; color: var(--admin-text-muted); display: flex; flex-direction: column; gap: 0.5rem;">
                  <div style="display: flex; justify-content: space-between;"><span>آخر حفظ للمسودة:</span><strong style="color: var(--admin-text-main); font-family: var(--admin-font-latin);">${state.lastSavedAt || '2026-08-12 10:00'}</strong></div>
                  <div style="display: flex; justify-content: space-between;"><span>آخر نشر رسمي:</span><strong style="color: var(--admin-text-main); font-family: var(--admin-font-latin);">${state.lastPublishedAt || '2026-08-12 10:00'}</strong></div>
                  <div style="display: flex; justify-content: space-between;"><span>رقم الإصدار الحالي:</span><strong style="color: var(--admin-primary); font-family: var(--admin-font-latin);">${currentVersion}</strong></div>
                </div>
              </div>
            </div>
            <div class="admin-card">
              <div class="admin-card-header"><h3 class="admin-card-title">${getIcon('sparkles')}<span>سجل آخر النشاطات</span></h3><a href="#activity" style="font-size: 0.82rem; font-weight: 700; color: var(--admin-primary);">عرض الكل</a></div>
              <div style="display: flex; flex-direction: column;">${recent || '<p style="text-align: center; color: var(--admin-text-muted); padding: 1.5rem;">لا توجد نشاطات مسجلة.</p>'}</div>
            </div>
          </div>
        </div>
      `;
    },

    renderInquiries() {
      const list = CMSStore.inquiries || [];
      const newCount = list.filter(i => i.status === 'new').length;
      const contactedCount = list.filter(i => i.status === 'contacted').length;
      const completedCount = list.filter(i => i.status === 'completed').length;

      const rows = list.map((inq) => {
        return `
          <tr data-inquiry-id="${inq.id}">
            <td style="font-weight: 800; font-family: var(--admin-font-latin); color: var(--admin-primary); width: 60px;">#${inq.id}</td>
            <td>
              <div style="font-weight: 800; font-size: 0.95rem; color: var(--admin-text-main); margin-bottom: 0.2rem;">${inq.name}</div>
              <div style="font-size: 0.78rem; color: var(--admin-text-muted);">${inq.projectType || inq.project_type || 'منشأة عامة'}</div>
            </td>
            <td>
              <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.25rem;">
                <a href="tel:${inq.phone}" style="font-family: var(--admin-font-latin); direction: ltr; font-weight: 700; color: var(--admin-primary); font-size: 0.88rem; text-decoration: none;">${inq.phone}</a>
                <a href="https://wa.me/${(inq.phone || '').replace(/[^0-9]/g, '')}" target="_blank" title="محادثة واتساب" style="font-size: 0.75rem; color: #10b981; font-weight: 800; background: rgba(16,185,129,0.1); padding: 0.1rem 0.4rem; border-radius: 4px; text-decoration: none;">واتساب</a>
              </div>
              ${inq.email ? `<a href="mailto:${inq.email}" style="font-family: var(--admin-font-latin); font-size: 0.8rem; color: var(--admin-text-muted); text-decoration: none;">${inq.email}</a>` : '<span style="font-size: 0.75rem; color: var(--admin-text-muted);">بدون بريد</span>'}
            </td>
            <td>
              <span style="font-size: 0.85rem; font-weight: 700; color: var(--admin-text-main);">${inq.service}</span>
            </td>
            <td>
              <div style="font-size: 0.85rem; color: var(--admin-text-muted); max-width: 260px; line-height: 1.4;">${inq.notes || '—'}</div>
            </td>
            <td style="font-size: 0.8rem; font-family: var(--admin-font-latin); color: var(--admin-text-muted);">${inq.createdAt || inq.created_at || ''}</td>
            <td>
              <select class="admin-select inquiry-status-select" data-id="${inq.id}" style="padding: 0.35rem 0.6rem; font-size: 0.82rem; font-weight: 700; border-radius: var(--radius-sm);">
                <option value="new" ${inq.status === 'new' ? 'selected' : ''}>طلب جديد 🟢</option>
                <option value="contacted" ${inq.status === 'contacted' ? 'selected' : ''}>تم التواصل 🔵</option>
                <option value="completed" ${inq.status === 'completed' ? 'selected' : ''}>مكتمل 🟣</option>
                <option value="cancelled" ${inq.status === 'cancelled' ? 'selected' : ''}>ملغي ⚪</option>
              </select>
            </td>
            <td style="text-align: center; width: 60px;">
              <button class="action-icon-btn danger delete-inquiry-btn" data-id="${inq.id}" data-name="${inq.name}" title="حذف الطلب">${getIcon('close')}</button>
            </td>
          </tr>
        `;
      }).join('');

      return `
        <div class="admin-view-content">
          <div class="view-header">
            <div class="view-title-wrap">
              <h1>طلبات الاستشارات وعروض الأسعار (${list.length})</h1>
              <p class="view-subtitle">استعراض وإدارة كافة طلبات العملاء الواردة من الموقع العام فورياً</p>
            </div>
            <button class="admin-btn admin-btn-secondary" id="refresh-inquiries-btn">
              ${getIcon('sparkles')}
              <span>تحديث القائمة الحية</span>
            </button>
          </div>

          <div class="dashboard-stats-grid" style="margin-bottom: 1.5rem;">
            <div class="metric-card">
              <div class="metric-icon-box" style="background: rgba(0, 102, 255, 0.08); color: var(--admin-primary);">${getIcon('mail')}</div>
              <div class="metric-info"><span class="metric-value">${list.length}</span><span class="metric-label">إجمالي الطلبات</span></div>
            </div>
            <div class="metric-card">
              <div class="metric-icon-box" style="background: rgba(16, 185, 129, 0.08); color: var(--admin-success);">${getIcon('sparkles')}</div>
              <div class="metric-info"><span class="metric-value">${newCount}</span><span class="metric-label">طلبات جديدة</span></div>
            </div>
            <div class="metric-card">
              <div class="metric-icon-box" style="background: rgba(2, 132, 199, 0.08); color: var(--admin-info);">${getIcon('phone')}</div>
              <div class="metric-info"><span class="metric-value">${contactedCount}</span><span class="metric-label">تم التواصل</span></div>
            </div>
            <div class="metric-card">
              <div class="metric-icon-box" style="background: rgba(139, 92, 246, 0.08); color: #8b5cf6;">${getIcon('shield_check')}</div>
              <div class="metric-info"><span class="metric-value">${completedCount}</span><span class="metric-label">طلبات منجزة</span></div>
            </div>
          </div>

          <div class="admin-card" style="padding: 0; overflow: hidden;">
            <div style="padding: 1rem 1.5rem; border-bottom: 1px solid var(--admin-border); display: flex; justify-content: space-between; align-items: center; background: var(--admin-surface-subtle);">
              <input type="text" id="inquiries-search-input" class="admin-input" placeholder="بحث باسم العميل، الخدمة، أو رقم الهاتف..." style="max-width: 380px;" />
              <span style="font-size: 0.82rem; color: var(--admin-text-muted); font-weight: 600;">تحديث لحظي مباشر 🟢</span>
            </div>
            <div style="overflow-x: auto;">
              <table class="admin-table" id="inquiries-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>العميل والمنشأة</th>
                    <th>بيانات الاتصال</th>
                    <th>الخدمة المطلوبة</th>
                    <th>ملاحظات وتفاصيل الطلب</th>
                    <th>تاريخ الإرسال</th>
                    <th>حالة الطلب</th>
                    <th style="text-align: center;">حذف</th>
                  </tr>
                </thead>
                <tbody>
                  ${rows || '<tr><td colspan="8" style="text-align: center; padding: 2.5rem; color: var(--admin-text-muted);">لا توجد طلبات استشارات واردة حتى الآن.</td></tr>'}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `;
    },

    renderHero() {
      const hero = CMSStore.getDraft().hero;
      const feats = hero.features.map((f, i) => `
        <div class="form-row-2" style="margin-bottom: 0.8rem;">
          <input type="text" class="admin-input hero-feat-icon" data-index="${i}" value="${f.icon}" placeholder="اسم الأيقونة" />
          <input type="text" class="admin-input hero-feat-text" data-index="${i}" value="${f.text}" placeholder="نص الميزة" />
        </div>
      `).join('');

      return `
        <div class="admin-view-content">
          <div class="view-header">
            <div class="view-title-wrap">
              <h1>إدارة قسم الهيرو (Hero Section)</h1>
              <p class="view-subtitle">تعديل النصوص، العناوين، الفيديو الخلفي، وأزرار الدعوة</p>
            </div>
            <button class="admin-btn admin-btn-primary" id="save-hero-btn">${getIcon('sparkles')}<span>حفظ التعديلات كمسودة</span></button>
          </div>
          <div class="admin-card">
            <form id="hero-edit-form">
              <div class="admin-form-group">
                <label class="admin-label">نص مؤشر الحالة العلوي</label>
                <input type="text" id="hero-status-pill" class="admin-input" value="${hero.statusPill}" required />
              </div>
              <div class="form-row-2">
                <div class="admin-form-group">
                  <label class="admin-label">اسم الشركة / بادئة العنوان</label>
                  <input type="text" id="hero-title-prefix" class="admin-input" value="${hero.titlePrefix}" required />
                </div>
                <div class="admin-form-group">
                  <label class="admin-label">العنوان الرئيسي الملوّن</label>
                  <input type="text" id="hero-title-highlight" class="admin-input" value="${hero.titleHighlight}" required />
                </div>
              </div>
              <div class="admin-form-group">
                <label class="admin-label">الوصف التمهيدي</label>
                <textarea id="hero-desc" class="admin-textarea" required>${hero.description}</textarea>
              </div>
              <div class="form-row-2">
                <div class="admin-form-group">
                  <label class="admin-label">مسار فيديو الخلفية</label>
                  <input type="text" id="hero-video-path" class="admin-input" value="${hero.videoPath}" />
                </div>
                <div class="admin-form-group">
                  <label class="admin-label">صورة الغلاف البديلة (Poster Image)</label>
                  <input type="text" id="hero-poster-path" class="admin-input" value="${hero.posterPath}" />
                </div>
              </div>
              <div class="form-row-2">
                <div class="admin-form-group">
                  <label class="admin-label">نص الزر الرئيسي</label>
                  <input type="text" id="hero-btn1-text" class="admin-input" value="${hero.primaryBtnText}" />
                </div>
                <div class="admin-form-group">
                  <label class="admin-label">رابط الزر الرئيسي</label>
                  <input type="text" id="hero-btn1-url" class="admin-input" value="${hero.primaryBtnUrl}" />
                </div>
              </div>
              <div class="form-row-2">
                <div class="admin-form-group">
                  <label class="admin-label">نص الزر الثانوي</label>
                  <input type="text" id="hero-btn2-text" class="admin-input" value="${hero.secondaryBtnText}" />
                </div>
                <div class="admin-form-group">
                  <label class="admin-label">رابط الزر الثانوي</label>
                  <input type="text" id="hero-btn2-url" class="admin-input" value="${hero.secondaryBtnUrl}" />
                </div>
              </div>
              <div class="admin-form-group" style="margin-top: 1.5rem;">
                <label class="admin-label">شريط المميزات السريعة (4 مميزات)</label>
                ${feats}
              </div>
            </form>
          </div>
        </div>
      `;
    },

    renderAbout() {
      const about = CMSStore.getDraft().about;
      const pillars = about.pillars.map((p, i) => `
        <div style="background: var(--admin-surface-subtle); border: 1px solid var(--admin-border); border-radius: var(--radius-sm); padding: 1rem; margin-bottom: 1rem;">
          <div class="form-row-2">
            <div class="admin-form-group"><label class="admin-label">عنوان الركيزة</label><input type="text" class="admin-input pillar-title-input" value="${p.title}" /></div>
            <div class="admin-form-group"><label class="admin-label">الأيقونة</label><input type="text" class="admin-input pillar-icon-input" value="${p.icon}" /></div>
          </div>
          <div class="admin-form-group" style="margin-bottom: 0;"><label class="admin-label">الوصف</label><textarea class="admin-textarea pillar-desc-input" style="min-height: 50px;">${p.description}</textarea></div>
        </div>
      `).join('');

      return `
        <div class="admin-view-content">
          <div class="view-header">
            <div class="view-title-wrap">
              <h1>إدارة قسم من نحن والرسالة</h1>
              <p class="view-subtitle">تعديل النبذة، الركائز، والصورة التعريفية</p>
            </div>
            <button class="admin-btn admin-btn-primary" id="save-about-btn">${getIcon('sparkles')}<span>حفظ التعديلات</span></button>
          </div>
          <div style="display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 2rem;">
            <div class="admin-card">
              <div class="form-row-2">
                <div class="admin-form-group"><label class="admin-label">شارة القسم</label><input type="text" id="about-badge" class="admin-input" value="${about.badge}" /></div>
                <div class="admin-form-group"><label class="admin-label">مسار الصورة</label><input type="text" id="about-image-path" class="admin-input" value="${about.imagePath}" /></div>
              </div>
              <div class="form-row-2">
                <div class="admin-form-group"><label class="admin-label">العنوان الرئيسي</label><input type="text" id="about-title" class="admin-input" value="${about.title}" /></div>
                <div class="admin-form-group"><label class="admin-label">العنوان الملون</label><input type="text" id="about-title-highlight" class="admin-input" value="${about.titleHighlight}" /></div>
              </div>
              <div class="admin-form-group"><label class="admin-label">النص التمهيدي (Lead)</label><textarea id="about-lead" class="admin-textarea">${about.leadText}</textarea></div>
              <div class="admin-form-group"><label class="admin-label">الوصف الإضافي</label><textarea id="about-subtitle" class="admin-textarea">${about.subtitle}</textarea></div>
              <div class="form-row-2">
                <div class="admin-form-group"><label class="admin-label">الرؤية</label><textarea id="about-vision" class="admin-textarea" style="min-height: 60px;">${about.vision || ''}</textarea></div>
                <div class="admin-form-group"><label class="admin-label">الرسالة</label><textarea id="about-mission" class="admin-textarea" style="min-height: 60px;">${about.mission || ''}</textarea></div>
              </div>
            </div>
            <div class="admin-card">
              <div class="admin-card-header"><h3 class="admin-card-title">${getIcon('cpu')}<span>الركائز الهندسية الأربع</span></h3></div>
              <div>${pillars}</div>
            </div>
          </div>
        </div>
      `;
    },

    renderServices() {
      const services = CMSStore.getDraft().services;
      const rows = services.map((s, idx) => `
        <tr data-id="${s.id}">
          <td style="font-weight: 800; font-family: var(--admin-font-latin); color: var(--admin-primary); width: 50px;">#${s.number}</td>
          <td style="width: 50px;"><div style="width: 34px; height: 34px; border-radius: 6px; background: rgba(0, 102, 255, 0.08); display: flex; align-items: center; justify-content: center; color: var(--admin-primary);">${getIcon(s.iconName)}</div></td>
          <td><div style="font-weight: 800; font-size: 0.95rem;">${s.title}</div><div style="font-size: 0.78rem; color: var(--admin-text-muted); font-family: var(--admin-font-latin);">${s.titleEn || ''}</div></td>
          <td><span style="font-size: 0.8rem; font-weight: 700; padding: 0.2rem 0.6rem; border-radius: var(--radius-full); background: var(--admin-surface-subtle);">${s.category}</span></td>
          <td style="font-size: 0.85rem; color: var(--admin-text-muted); max-width: 250px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${s.shortDescription}</td>
          <td style="width: 140px;">
            <div class="table-actions">
              <button class="action-icon-btn move-up-btn" data-index="${idx}" title="نقل للأعلى" ${idx === 0 ? 'disabled style="opacity: 0.3;"' : ''}>↑</button>
              <button class="action-icon-btn move-down-btn" data-index="${idx}" title="نقل للأسفل" ${idx === services.length - 1 ? 'disabled style="opacity: 0.3;"' : ''}>↓</button>
              <button class="action-icon-btn edit-service-btn" data-id="${s.id}" title="تعديل">${getIcon('sparkles')}</button>
              <button class="action-icon-btn danger delete-service-btn" data-id="${s.id}" data-title="${s.title}" title="حذف">${getIcon('close')}</button>
            </div>
          </td>
        </tr>
      `).join('');

      return `
        <div class="admin-view-content">
          <div class="view-header">
            <div class="view-title-wrap">
              <h1>إدارة الخدمات والحلول الهندسية (${services.length})</h1>
              <p class="view-subtitle">إضافة، تعديل، حذف، وترتيب الخدمات المعروضة</p>
            </div>
            <button class="admin-btn admin-btn-primary" id="add-service-btn">${getIcon('sparkles')}<span>إضافة خدمة جديدة</span></button>
          </div>
          <div class="admin-card" style="padding: 0; overflow: hidden;">
            <div class="admin-table-container">
              <table class="admin-table">
                <thead><tr><th>#</th><th>الأيقونة</th><th>اسم الخدمة</th><th>التصنيف</th><th>الوصف المختصر</th><th>الإجراءات</th></tr></thead>
                <tbody>${rows}</tbody>
              </table>
            </div>
          </div>
        </div>
      `;
    },

    renderSolutions() {
      const nodes = CMSStore.getDraft().solutions;
      const html = nodes.map((node, i) => `
        <div style="background: var(--admin-surface-subtle); border: 1px solid var(--admin-border); border-radius: var(--radius-sm); padding: 1.2rem; margin-bottom: 1rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.8rem;">
            <strong style="color: var(--admin-primary);">النظام #${i + 1}: ${node.title}</strong>
            <span style="font-size: 0.78rem; font-family: var(--admin-font-latin); font-weight: 700; color: var(--admin-primary);">${node.metric}</span>
          </div>
          <div class="form-row-3">
            <div class="admin-form-group"><label class="admin-label">اسم المنظومة</label><input type="text" class="admin-input eco-title-input" data-index="${i}" value="${node.title}" /></div>
            <div class="admin-form-group"><label class="admin-label">الاختصاص</label><input type="text" class="admin-input eco-role-input" data-index="${i}" value="${node.role}" /></div>
            <div class="admin-form-group"><label class="admin-label">المؤشر</label><input type="text" class="admin-input eco-metric-input" data-index="${i}" value="${node.metric}" /></div>
          </div>
          <div class="form-row-2">
            <div class="admin-form-group"><label class="admin-label">الأيقونة</label><input type="text" class="admin-input eco-icon-input" data-index="${i}" value="${node.icon}" /></div>
            <div class="admin-form-group"><label class="admin-label">الروابط المتصلة (مفصولة بفواصل)</label><input type="text" class="admin-input eco-conn-input" data-index="${i}" value="${node.connectedTo.join(', ')}" /></div>
          </div>
          <div class="admin-form-group" style="margin-bottom: 0;"><label class="admin-label">الوصف التقني</label><textarea class="admin-textarea eco-desc-input" data-index="${i}" style="min-height: 50px;">${node.description}</textarea></div>
        </div>
      `).join('');

      return `
        <div class="admin-view-content">
          <div class="view-header">
            <div class="view-title-wrap">
              <h1>إدارة خريطة الأنظمة (Technology Ecosystem)</h1>
              <p class="view-subtitle">تعديل العقد ومؤشرات الأداء والتكامل</p>
            </div>
            <button class="admin-btn admin-btn-primary" id="save-solutions-btn">${getIcon('sparkles')}<span>حفظ التعديلات</span></button>
          </div>
          <div class="admin-card">
            <div class="admin-card-header"><h3 class="admin-card-title">${getIcon('network_nodes')}<span>عقد الأنظمة (${nodes.length})</span></h3></div>
            <div>${html}</div>
          </div>
        </div>
      `;
    },

    renderWhyUs() {
      const items = CMSStore.getDraft().whyUs;
      const html = items.map((w, i) => `
        <div style="background: var(--admin-surface-subtle); border: 1px solid var(--admin-border); border-radius: var(--radius-sm); padding: 1.2rem; margin-bottom: 1rem;">
          <div class="form-row-3">
            <div class="admin-form-group"><label class="admin-label">العنوان</label><input type="text" class="admin-input why-title-input" value="${w.title}" /></div>
            <div class="admin-form-group"><label class="admin-label">العنوان الفرعي</label><input type="text" class="admin-input why-subtitle-input" value="${w.subtitle}" /></div>
            <div class="admin-form-group"><label class="admin-label">الشارة (Badge)</label><input type="text" class="admin-input why-badge-input" value="${w.badge}" /></div>
          </div>
          <div class="form-row-2">
            <div class="admin-form-group"><label class="admin-label">الأيقونة</label><input type="text" class="admin-input why-icon-input" value="${w.icon}" /></div>
            <div class="admin-form-group"><label class="admin-label">اتساع البطاقة</label><select class="admin-select why-span-input"><option value="1" ${w.span === 1 ? 'selected' : ''}>عمود واحد</option><option value="2" ${w.span === 2 ? 'selected' : ''}>عمودان عريضان</option></select></div>
          </div>
          <div class="admin-form-group" style="margin-bottom: 0;"><label class="admin-label">الوصف</label><textarea class="admin-textarea why-desc-input" style="min-height: 50px;">${w.description}</textarea></div>
        </div>
      `).join('');

      return `
        <div class="admin-view-content">
          <div class="view-header">
            <div class="view-title-wrap"><h1>إدارة قسم لماذا أساسات المشاعر</h1><p class="view-subtitle">تعديل بطاقات شبكة Bento والمزايا</p></div>
            <button class="admin-btn admin-btn-primary" id="save-why-btn">${getIcon('sparkles')}<span>حفظ التعديلات</span></button>
          </div>
          <div class="admin-card">${html}</div>
        </div>
      `;
    },

    renderSectors() {
      const sectors = CMSStore.getDraft().sectors;
      const html = sectors.map((s, i) => `
        <div style="background: var(--admin-surface-subtle); border: 1px solid var(--admin-border); border-radius: var(--radius-sm); padding: 1.2rem; margin-bottom: 1rem;">
          <div class="form-row-3">
            <div class="admin-form-group"><label class="admin-label">اسم القطاع</label><input type="text" class="admin-input sector-title-input" value="${s.title}" /></div>
            <div class="admin-form-group"><label class="admin-label">الاسم الإنجليزي</label><input type="text" class="admin-input sector-sub-input" value="${s.subtitle}" /></div>
            <div class="admin-form-group"><label class="admin-label">الشارة</label><input type="text" class="admin-input sector-tag-input" value="${s.tag}" /></div>
          </div>
          <div class="form-row-2">
            <div class="admin-form-group"><label class="admin-label">الأيقونة</label><input type="text" class="admin-input sector-icon-input" value="${s.icon}" /></div>
            <div class="admin-form-group"><label class="admin-label">مسار الصورة</label><input type="text" class="admin-input sector-img-input" value="${s.imagePath}" /></div>
          </div>
          <div class="admin-form-group"><label class="admin-label">الوصف</label><textarea class="admin-textarea sector-desc-input" style="min-height: 50px;">${s.description}</textarea></div>
          <div class="admin-form-group" style="margin-bottom: 0;"><label class="admin-label">الحلول المميزة (سطر لكل حل)</label><textarea class="admin-textarea sector-high-input" style="min-height: 50px;">${s.highlights.join('\n')}</textarea></div>
        </div>
      `).join('');

      return `
        <div class="admin-view-content">
          <div class="view-header">
            <div class="view-title-wrap"><h1>إدارة القطاعات ومجالات التطبيق</h1><p class="view-subtitle">تعديل الحلول المخصصة للقطاعات</p></div>
            <button class="admin-btn admin-btn-primary" id="save-sectors-btn">${getIcon('sparkles')}<span>حفظ التعديلات</span></button>
          </div>
          <div class="admin-card">${html}</div>
        </div>
      `;
    },

    renderStats() {
      const stats = CMSStore.getDraft().stats;
      const html = stats.map(st => `
        <div style="background: var(--admin-surface-subtle); border: 1px solid var(--admin-border); border-radius: var(--radius-sm); padding: 1.2rem; margin-bottom: 1rem;">
          <div class="form-row-3">
            <div class="admin-form-group"><label class="admin-label">عنوان المؤشر</label><input type="text" class="admin-input stat-title-input" value="${st.title}" /></div>
            <div class="admin-form-group"><label class="admin-label">الشارة</label><input type="text" class="admin-input stat-badge-input" value="${st.badge}" /></div>
            <div class="admin-form-group"><label class="admin-label">الأيقونة</label><input type="text" class="admin-input stat-icon-input" value="${st.icon}" /></div>
          </div>
          <div class="admin-form-group" style="margin-bottom: 0;"><label class="admin-label">الوصف</label><textarea class="admin-textarea stat-desc-input" style="min-height: 50px;">${st.description}</textarea></div>
        </div>
      `).join('');

      return `
        <div class="admin-view-content">
          <div class="view-header">
            <div class="view-title-wrap"><h1>إدارة المؤشرات الهندسية</h1><p class="view-subtitle">تعديل مؤشرات الجودة والاعتمادية</p></div>
            <button class="admin-btn admin-btn-primary" id="save-stats-btn">${getIcon('sparkles')}<span>حفظ التعديلات</span></button>
          </div>
          <div class="admin-card">${html}</div>
        </div>
      `;
    },

    renderCTA() {
      const cta = CMSStore.getDraft().cta;
      return `
        <div class="admin-view-content">
          <div class="view-header">
            <div class="view-title-wrap"><h1>إدارة قسم الدعوة للتواصل (CTA)</h1><p class="view-subtitle">تعديل الرسالة وأزرار التحفيز</p></div>
            <button class="admin-btn admin-btn-primary" id="save-cta-btn">${getIcon('sparkles')}<span>حفظ التعديلات</span></button>
          </div>
          <div class="admin-card">
            <div class="form-row-2">
              <div class="admin-form-group"><label class="admin-label">الشارة</label><input type="text" id="cta-badge" class="admin-input" value="${cta.badge}" /></div>
              <div class="admin-form-group"><label class="admin-label">مسار صورة الخلفية</label><input type="text" id="cta-bg-image" class="admin-input" value="${cta.bgImagePath}" /></div>
            </div>
            <div class="form-row-2">
              <div class="admin-form-group"><label class="admin-label">بادئة العنوان</label><input type="text" id="cta-title-prefix" class="admin-input" value="${cta.titlePrefix}" /></div>
              <div class="admin-form-group"><label class="admin-label">العنوان الملون</label><input type="text" id="cta-title-highlight" class="admin-input" value="${cta.titleHighlight}" /></div>
            </div>
            <div class="admin-form-group"><label class="admin-label">نص الوصف</label><textarea id="cta-desc" class="admin-textarea">${cta.description}</textarea></div>
            <div class="form-row-2">
              <div class="admin-form-group"><label class="admin-label">نص الزر</label><input type="text" id="cta-btn-text" class="admin-input" value="${cta.buttonText}" /></div>
              <div class="admin-form-group"><label class="admin-label">رابط الزر</label><input type="text" id="cta-btn-url" class="admin-input" value="${cta.buttonUrl}" /></div>
            </div>
          </div>
        </div>
      `;
    },

    renderContact() {
      const contact = CMSStore.getDraft().contact;
      return `
        <div class="admin-view-content">
          <div class="view-header">
            <div class="view-title-wrap"><h1>إدارة معلومات التواصل والمقر</h1><p class="view-subtitle">تعديل الهواتف، البريد، والعنوان</p></div>
            <button class="admin-btn admin-btn-primary" id="save-contact-btn">${getIcon('sparkles')}<span>حفظ التعديلات</span></button>
          </div>
          <div class="admin-card">
            <div class="form-row-2">
              <div class="admin-form-group"><label class="admin-label">رقم الهاتف / خط الاستشارات</label><input type="text" id="contact-phone" class="admin-input" value="${contact.phone}" /></div>
              <div class="admin-form-group"><label class="admin-label">البريد الإلكتروني</label><input type="email" id="contact-email" class="admin-input" value="${contact.email}" /></div>
            </div>
            <div class="form-row-2">
              <div class="admin-form-group"><label class="admin-label">رقم الواتساب</label><input type="text" id="contact-whatsapp" class="admin-input" value="${contact.whatsapp || ''}" /></div>
              <div class="admin-form-group"><label class="admin-label">ساعات العمل</label><input type="text" id="contact-hours" class="admin-input" value="${contact.workingHours}" /></div>
            </div>
            <div class="admin-form-group"><label class="admin-label">العنوان الجغرافي</label><input type="text" id="contact-address" class="admin-input" value="${contact.address}" /></div>
          </div>
        </div>
      `;
    },

    renderNavigation() {
      const links = CMSStore.getDraft().navigation;
      const rows = links.map((l, i) => `
        <tr>
          <td style="font-weight: 800; font-family: var(--admin-font-latin); color: var(--admin-primary); width: 60px;">#${i + 1}</td>
          <td><input type="text" class="admin-input nav-label-input" value="${l.label}" style="padding: 0.4rem 0.8rem;" /></td>
          <td><input type="text" class="admin-input nav-url-input" value="${l.url}" style="padding: 0.4rem 0.8rem; font-family: var(--admin-font-latin);" /></td>
          <td style="width: 100px; text-align: center;"><label class="admin-switch"><input type="checkbox" class="nav-active-input" ${l.isActive ? 'checked' : ''} /><span class="switch-slider"></span></label></td>
        </tr>
      `).join('');

      return `
        <div class="admin-view-content">
          <div class="view-header">
            <div class="view-title-wrap"><h1>إدارة القائمة العلوية (Navbar)</h1><p class="view-subtitle">تعديل الروابط وتفعيلها</p></div>
            <button class="admin-btn admin-btn-primary" id="save-nav-btn">${getIcon('sparkles')}<span>حفظ التعديلات</span></button>
          </div>
          <div class="admin-card" style="padding: 0; overflow: hidden;">
            <table class="admin-table">
              <thead><tr><th>#</th><th>اسم الرابط</th><th>المسار / الـ ID</th><th style="text-align: center;">تفعيل</th></tr></thead>
              <tbody>${rows}</tbody>
            </table>
          </div>
        </div>
      `;
    },

    renderFooter() {
      const footer = CMSStore.getDraft().footer;
      return `
        <div class="admin-view-content">
          <div class="view-header">
            <div class="view-title-wrap"><h1>إدارة تذييل الموقع (Footer)</h1><p class="view-subtitle">تعديل الشعار، النبذة، والحقوق</p></div>
            <button class="admin-btn admin-btn-primary" id="save-footer-btn">${getIcon('sparkles')}<span>حفظ التعديلات</span></button>
          </div>
          <div class="admin-card">
            <div class="form-row-2">
              <div class="admin-form-group"><label class="admin-label">مسار الشعار</label><input type="text" id="footer-logo" class="admin-input" value="${footer.logoPath}" /></div>
              <div class="admin-form-group"><label class="admin-label">الاسم بالإنجليزية</label><input type="text" id="footer-brand-en" class="admin-input" value="${footer.brandNameEn}" /></div>
            </div>
            <div class="admin-form-group"><label class="admin-label">النبذة المختصرة</label><textarea id="footer-brand-desc" class="admin-textarea">${footer.brandDesc}</textarea></div>
            <div class="admin-form-group"><label class="admin-label">نص الحقوق (Copyright)</label><input type="text" id="footer-copyright" class="admin-input" value="${footer.copyrightText}" /></div>
            <div class="admin-form-group"><label class="admin-label">الخدمات السريعة (سطر لكل خدمة)</label><textarea id="footer-services-list" class="admin-textarea" style="min-height: 80px;">${(footer.featuredServices || []).join('\n')}</textarea></div>
          </div>
        </div>
      `;
    },

    renderMedia() {
      const media = CMSStore.getDraft().media;
      const cards = media.map(m => `
        <div class="media-item-card">
          <div class="media-preview-box">
            ${m.type === 'video' ? `<video src="${m.path}" muted loop autoplay playsinline style="width: 100%; height: 100%; object-fit: cover;"></video>` : `<img src="${m.path}" alt="${m.name}" loading="lazy" />`}
          </div>
          <div class="media-card-body">
            <div class="media-file-name">${m.name}</div>
            <div class="media-file-meta"><span>${m.dimensions || m.type.toUpperCase()}</span> • <span>${m.sizeKB} KB</span></div>
            <div style="display: flex; flex-wrap: wrap; gap: 0.3rem; margin-top: 0.4rem;">${m.usedIn.map(u => `<span class="media-used-badge">${u}</span>`).join('')}</div>
            <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 0.8rem; padding-top: 0.6rem; border-top: 1px solid var(--admin-border);">
              <button class="admin-btn admin-btn-secondary copy-media-path-btn" data-path="${m.path}" style="padding: 0.3rem 0.6rem; font-size: 0.75rem;">نسخ المسار</button>
              <button class="action-icon-btn danger delete-media-btn" data-id="${m.id}" data-name="${m.name}">${getIcon('close')}</button>
            </div>
          </div>
        </div>
      `).join('');

      return `
        <div class="admin-view-content">
          <div class="view-header">
            <div class="view-title-wrap"><h1>مكتبة الوسائط والملفات (${media.length})</h1><p class="view-subtitle">استعراض ورفع وتتبع ملفات المشروع</p></div>
            <label class="admin-btn admin-btn-primary" style="cursor: pointer;">${getIcon('sparkles')}<span>رفع ملف وسائط جديد</span><input type="file" id="media-upload-input" accept="image/*,video/*" style="display: none;" /></label>
          </div>
          <div class="media-grid">${cards}</div>
        </div>
      `;
    },

    renderIcons() {
      const icons = CMSStore.getDraft().icons;
      const html = icons.map(ico => `
        <div class="admin-card" style="padding: 1.5rem; display: flex; flex-direction: column; justify-content: space-between; margin-bottom: 0;">
          <div>
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
              <div style="width: 48px; height: 48px; border-radius: 12px; background: rgba(0, 102, 255, 0.08); display: flex; align-items: center; justify-content: center; color: var(--admin-primary);">${getIcon(ico.name)}</div>
              <span style="font-size: 0.75rem; font-weight: 700; padding: 0.2rem 0.6rem; border-radius: var(--radius-full); background: var(--admin-surface-subtle);">${ico.category}</span>
            </div>
            <h4 style="font-size: 1.05rem; font-weight: 800; margin-bottom: 0.3rem;">${ico.serviceName}</h4>
            <div style="font-size: 0.78rem; color: var(--admin-primary); font-family: var(--admin-font-latin); font-weight: 700; margin-bottom: 0.6rem;">${ico.name}</div>
            <p style="font-size: 0.85rem; color: var(--admin-text-muted); line-height: 1.5;">${ico.usage}</p>
          </div>
          <div style="margin-top: 1.2rem; padding-top: 0.8rem; border-top: 1px solid var(--admin-border); display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 0.75rem; color: var(--admin-text-dim); font-family: var(--admin-font-latin);">${ico.path}</span>
            <button class="admin-btn admin-btn-secondary copy-icon-id-btn" data-id="${ico.name}" style="padding: 0.3rem 0.6rem; font-size: 0.75rem;">نسخ الاسم</button>
          </div>
        </div>
      `).join('');

      return `
        <div class="admin-view-content">
          <div class="view-header">
            <div class="view-title-wrap"><h1>مدير الأيقونات وبيانات CSV (${icons.length})</h1><p class="view-subtitle">استعراض الأيقونات التفاعلية المربوطة بالخدمات</p></div>
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem;">${html}</div>
        </div>
      `;
    },

    renderSettings() {
      const set = CMSStore.getDraft().settings;
      return `
        <div class="admin-view-content">
          <div class="view-header">
            <div class="view-title-wrap"><h1>إعدادات الموقع و SEO</h1><p class="view-subtitle">تعديل الهوية، الألوان، والكلمات المفتاحية</p></div>
            <button class="admin-btn admin-btn-primary" id="save-settings-btn">${getIcon('sparkles')}<span>حفظ التعديلات</span></button>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
            <div class="admin-card">
              <div class="admin-card-header"><h3 class="admin-card-title">${getIcon('layers')}<span>الهوية والشعار</span></h3></div>
              <div class="admin-form-group"><label class="admin-label">اسم الموقع</label><input type="text" id="set-site-name" class="admin-input" value="${set.siteName}" /></div>
              <div class="form-row-2">
                <div class="admin-form-group"><label class="admin-label">اسم الشركة (عربي)</label><input type="text" id="set-company-name" class="admin-input" value="${set.companyName}" /></div>
                <div class="admin-form-group"><label class="admin-label">اسم الشركة (English)</label><input type="text" id="set-company-en" class="admin-input" value="${set.companyNameEn}" /></div>
              </div>
              <div class="admin-form-group"><label class="admin-label">الشعار اللفظي (Tagline)</label><input type="text" id="set-tagline" class="admin-input" value="${set.tagline}" /></div>
              <div class="form-row-2">
                <div class="admin-form-group"><label class="admin-label">مسار الشعار</label><input type="text" id="set-logo" class="admin-input" value="${set.logoPath}" /></div>
                <div class="admin-form-group"><label class="admin-label">الأيقونة (Favicon)</label><input type="text" id="set-favicon" class="admin-input" value="${set.faviconPath}" /></div>
              </div>
            </div>
            <div class="admin-card">
              <div class="admin-card-header"><h3 class="admin-card-title">${getIcon('sparkles')}<span>تحسين محركات البحث SEO</span></h3></div>
              <div class="admin-form-group"><label class="admin-label">عنوان الصفحة (Meta Title)</label><input type="text" id="set-meta-title" class="admin-input" value="${set.metaTitle}" /></div>
              <div class="admin-form-group"><label class="admin-label">الوصف (Meta Description)</label><textarea id="set-meta-desc" class="admin-textarea" style="min-height: 80px;">${set.metaDescription}</textarea></div>
              <div class="admin-form-group"><label class="admin-label">الكلمات المفتاحية</label><textarea id="set-meta-keywords" class="admin-textarea" style="min-height: 60px;">${set.keywords}</textarea></div>
            </div>
          </div>
        </div>
      `;
    },

    renderUsers() {
      const users = CMSStore.getState().users || [];
      const rows = users.map((u, i) => `
        <tr>
          <td style="font-weight: 800; font-family: var(--admin-font-latin); color: var(--admin-primary); width: 60px;">#${i + 1}</td>
          <td><div style="display: flex; align-items: center; gap: 0.8rem;"><div style="width: 36px; height: 36px; border-radius: 50%; background: var(--admin-primary-soft); color: var(--admin-primary); display: flex; align-items: center; justify-content: center; font-weight: 800;">${u.name.charAt(0)}</div><div><div style="font-weight: 800;">${u.name}</div><div style="font-size: 0.8rem; color: var(--admin-text-muted); font-family: var(--admin-font-latin);">${u.email}</div></div></div></td>
          <td><span style="font-size: 0.82rem; font-weight: 700; padding: 0.25rem 0.8rem; border-radius: var(--radius-full); background: ${u.role === 'super_admin' ? 'rgba(0, 102, 255, 0.1)' : 'var(--admin-surface-subtle)'}; color: ${u.role === 'super_admin' ? 'var(--admin-primary)' : 'var(--admin-text-main)'}; border: 1px solid var(--admin-border);">${u.roleTitle}</span></td>
          <td style="font-size: 0.82rem; color: var(--admin-text-muted); font-family: var(--admin-font-latin);">${u.lastLogin || 'لم يسجل دخول'}</td>
          <td><span style="font-size: 0.78rem; font-weight: 700; padding: 0.2rem 0.6rem; border-radius: var(--radius-full); background: var(--admin-success-soft); color: var(--admin-success);">${u.status === 'active' ? 'نشط' : 'معطل'}</span></td>
          <td style="text-align: left; width: 80px;">
            ${u.role !== 'super_admin' ? `
              <button class="action-icon-btn delete-user-btn" data-id="${u.id}" data-name="${u.name}" title="حذف المستخدم" style="color: var(--admin-danger);">
                ${getIcon('close')}
              </button>
            ` : `<span style="font-size: 0.75rem; color: var(--admin-text-muted);">أساسي</span>`}
          </td>
        </tr>
      `).join('');

      return `
        <div class="admin-view-content">
          <div class="view-header">
            <div class="view-title-wrap">
              <h1>المستخدمون والصلاحيات (${users.length})</h1>
              <p class="view-subtitle">إدارة حسابات مسؤولي النظام المشفرة بـ Bcrypt وصلاحيات الوصول (RBAC)</p>
            </div>
            <button class="admin-btn admin-btn-primary" id="add-user-modal-btn">
              ${getIcon('sparkles')}
              <span>إضافة مستخدم جديد</span>
            </button>
          </div>
          <div class="admin-card" style="padding: 0; overflow: hidden;">
            <table class="admin-table">
              <thead><tr><th>#</th><th>المستخدم</th><th>الرتبة</th><th>آخر نشاط</th><th>الحالة</th><th>إجراءات</th></tr></thead>
              <tbody>${rows}</tbody>
            </table>
          </div>
        </div>
      `;
    },

    renderActivity() {
      const logs = CMSStore.getState().activityLogs;
      const rows = logs.map((log, i) => `
        <tr>
          <td style="font-weight: 800; font-family: var(--admin-font-latin); color: var(--admin-primary); width: 60px;">#${i + 1}</td>
          <td style="font-size: 0.85rem; font-family: var(--admin-font-latin); color: var(--admin-text-muted); width: 170px;">${log.timestamp}</td>
          <td><div style="font-weight: 700;">${log.userName}</div><div style="font-size: 0.75rem; color: var(--admin-text-muted);">${log.userRole}</div></td>
          <td><span style="font-size: 0.8rem; font-weight: 700; padding: 0.2rem 0.6rem; border-radius: var(--radius-full); background: var(--admin-primary-soft); color: var(--admin-primary);">${log.section}</span></td>
          <td style="font-size: 0.9rem;">${log.details}</td>
        </tr>
      `).join('');

      return `
        <div class="admin-view-content">
          <div class="view-header">
            <div class="view-title-wrap"><h1>سجل النشاطات والعمليات الحي (${logs.length})</h1><p class="view-subtitle">تتبع زمني لكافة عمليات الحفظ والنشر</p></div>
          </div>
          <div class="admin-card" style="padding: 0; overflow: hidden;">
            <table class="admin-table">
              <thead><tr><th>#</th><th>التاريخ والوقت</th><th>المستخدم</th><th>القسم</th><th>التفاصيل</th></tr></thead>
              <tbody>${rows || '<tr><td colspan="5" style="text-align: center; padding: 2rem;">لا توجد نشاطات.</td></tr>'}</tbody>
            </table>
          </div>
        </div>
      `;
    },

    renderRevisions() {
      const revs = CMSStore.getState().revisions;
      const cur = CMSStore.getState().currentVersion;
      const rows = revs.map(r => `
        <tr>
          <td style="font-weight: 800; font-family: var(--admin-font-latin); color: var(--admin-primary); width: 80px;">${r.version}</td>
          <td style="font-size: 0.85rem; font-family: var(--admin-font-latin); color: var(--admin-text-muted); width: 170px;">${r.timestamp}</td>
          <td style="font-weight: 700;">${r.authorName}</td>
          <td style="font-size: 0.9rem;">${r.summary}</td>
          <td style="width: 140px; text-align: center;">
            ${r.version === cur ? `<span style="font-size: 0.8rem; font-weight: 800; color: var(--admin-success); background: var(--admin-success-soft); padding: 0.25rem 0.7rem; border-radius: var(--radius-full);">النسخة النشطة</span>` : `<button class="admin-btn admin-btn-secondary restore-rev-btn" data-id="${r.id}" data-ver="${r.version}" style="padding: 0.35rem 0.8rem; font-size: 0.8rem;">استعادة</button>`}
          </td>
        </tr>
      `).join('');

      return `
        <div class="admin-view-content">
          <div class="view-header">
            <div class="view-title-wrap"><h1>النسخ السابقة والمراجعات (Revisions)</h1><p class="view-subtitle">استعادة الإصدارات السابقة بنقرة زر</p></div>
          </div>
          <div class="admin-card" style="padding: 0; overflow: hidden;">
            <table class="admin-table">
              <thead><tr><th>الإصدار</th><th>التاريخ</th><th>المسؤول</th><th>ملخص التعديلات</th><th style="text-align: center;">الإجراء</th></tr></thead>
              <tbody>${rows}</tbody>
            </table>
          </div>
        </div>
      `;
    },

    wireSidebar() {
      document.getElementById('admin-logout-btn')?.addEventListener('click', () => {
        showConfirmModal({
          title: 'تسجيل الخروج',
          message: 'هل أنت متأكد من تسجيل الخروج؟',
          confirmText: 'تسجيل الخروج',
          onConfirm: () => {
            AuthService.logout();
            showToast('تم تسجيل الخروج بنجاح.');
            this.render();
          }
        });
      });
      document.getElementById('admin-mobile-toggle')?.addEventListener('click', () => {
        document.getElementById('admin-sidebar')?.classList.toggle('open');
      });
    },

    wireTopbar() {
      document.getElementById('topbar-search-trigger')?.addEventListener('click', () => {
        openSearchModal((route) => {
          window.location.hash = `#${route}`;
        });
      });
      document.getElementById('admin-preview-btn')?.addEventListener('click', () => {
        window.open('index.html?preview=true', '_blank');
      });
      document.getElementById('admin-discard-btn')?.addEventListener('click', () => {
        showConfirmModal({
          title: 'التراجع عن المسودة',
          message: 'هل أنت متأكد من إلغاء المسودة والعودة للنسخة المنشورة حالياً؟',
          confirmText: 'تراجع عن المسودة',
          isDanger: true,
          onConfirm: async () => {
            await CMSStore.discardDraft();
            showToast('تم التراجع عن المسودة بنجاح.');
            this.render();
          }
        });
      });
      document.getElementById('admin-publish-btn')?.addEventListener('click', () => {
        showConfirmModal({
          title: 'نشر التغييرات على الموقع العام',
          message: 'سيتم تطبيق كافة التعديلات في المسودة مباشرة لزوار الموقع وحفظها في قاعدة البيانات.',
          confirmText: 'تأكيد ونشر الآن',
          onConfirm: async () => {
            const res = await CMSStore.publish();
            if (res.success) {
              showToast(`تم نشر التغييرات بنجاح بالنسخة (${res.version})!`);
              this.render();
            } else {
              showToast(res.message || 'فشل النشر', 'error');
            }
          }
        });
      });
      document.getElementById('admin-theme-toggle')?.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        showToast('تم تبديل المظهر.');
      });
    },

    wireCurrentView(route) {
      const refresh = () => this.render();

      if (route === 'hero') {
        document.getElementById('save-hero-btn')?.addEventListener('click', () => {
          const pill = document.getElementById('hero-status-pill').value;
          const prefix = document.getElementById('hero-title-prefix').value;
          const highlight = document.getElementById('hero-title-highlight').value;
          const desc = document.getElementById('hero-desc').value;
          const video = document.getElementById('hero-video-path').value;
          const poster = document.getElementById('hero-poster-path').value;
          const b1Text = document.getElementById('hero-btn1-text').value;
          const b1Url = document.getElementById('hero-btn1-url').value;
          const b2Text = document.getElementById('hero-btn2-text').value;
          const b2Url = document.getElementById('hero-btn2-url').value;

          const featIcons = document.querySelectorAll('.hero-feat-icon');
          const featTexts = document.querySelectorAll('.hero-feat-text');
          const features = Array.from(featIcons).map((el, i) => ({
            icon: el.value.trim() || 'shield_check',
            text: featTexts[i]?.value.trim() || ''
          }));

          CMSStore.updateDraft('hero', {
            statusPill: pill, titlePrefix: prefix, titleHighlight: highlight, description: desc, videoPath: video, posterPath: poster, primaryBtnText: b1Text, primaryBtnUrl: b1Url, secondaryBtnText: b2Text, secondaryBtnUrl: b2Url, features, isActive: true
          }, 'تم تحديث قسم الهيرو');
          showToast('تم حفظ قسم الهيرو كمسودة بنجاح.');
        });
      } else if (route === 'about') {
        document.getElementById('save-about-btn')?.addEventListener('click', () => {
          const badge = document.getElementById('about-badge').value;
          const imagePath = document.getElementById('about-image-path').value;
          const title = document.getElementById('about-title').value;
          const titleHighlight = document.getElementById('about-title-highlight').value;
          const leadText = document.getElementById('about-lead').value;
          const subtitle = document.getElementById('about-subtitle').value;
          const vision = document.getElementById('about-vision').value;
          const mission = document.getElementById('about-mission').value;

          const titleEls = document.querySelectorAll('.pillar-title-input');
          const iconEls = document.querySelectorAll('.pillar-icon-input');
          const descEls = document.querySelectorAll('.pillar-desc-input');
          const pillars = Array.from(titleEls).map((el, i) => ({
            icon: iconEls[i]?.value.trim() || 'shield_check',
            title: el.value.trim(),
            description: descEls[i]?.value.trim() || ''
          }));

          const cur = CMSStore.getDraft().about;
          CMSStore.updateDraft('about', { ...cur, badge, imagePath, title, titleHighlight, leadText, subtitle, vision, mission, pillars }, 'تم تحديث قسم من نحن');
          showToast('تم حفظ قسم من نحن بنجاح.');
        });
      } else if (route === 'services') {
        const openEditor = (service) => {
          const isNew = !service;
          const draft = CMSStore.getDraft();
          const cur = service ? JSON.parse(JSON.stringify(service)) : {
            id: `service-${Date.now()}`,
            number: String(draft.services.length + 1).padStart(2, '0'),
            title: '', titleEn: '', category: 'الأمن والحماية', iconName: 'cctv_security', shortDescription: '', fullDescription: '', features: ['ميزة هندسية أولى', 'ميزة هندسية ثانية'], applications: ['المشاريع الحكومية والخاصة'], technologies: ['Smart AI'], imagePath: 'img/JUST.jpg'
          };
          const iconOpts = Object.keys(serviceIcons).map(k => `<option value="${k}" ${cur.iconName === k ? 'selected' : ''}>${k}</option>`).join('');

          const modal = document.createElement('div');
          modal.className = 'admin-modal-backdrop active';
          modal.innerHTML = `
            <div class="admin-modal-box" style="max-width: 800px;">
              <div class="admin-modal-header"><h2 style="font-size: 1.3rem; font-weight: 800;">${isNew ? 'إضافة خدمة جديدة' : `تعديل: ${cur.title}`}</h2><button class="action-icon-btn" id="svc-close-btn">${getIcon('close')}</button></div>
              <form id="svc-modal-form">
                <div class="form-row-3">
                  <div class="admin-form-group"><label class="admin-label">رقم الترتيب</label><input type="text" id="modal-svc-num" class="admin-input" value="${cur.number}" required /></div>
                  <div class="admin-form-group"><label class="admin-label">التصنيف</label><input type="text" id="modal-svc-cat" class="admin-input" value="${cur.category}" required /></div>
                  <div class="admin-form-group"><label class="admin-label">الأيقونة</label><select id="modal-svc-ico" class="admin-select">${iconOpts}</select></div>
                </div>
                <div class="form-row-2">
                  <div class="admin-form-group"><label class="admin-label">اسم الخدمة (عربي)</label><input type="text" id="modal-svc-title" class="admin-input" value="${cur.title}" required /></div>
                  <div class="admin-form-group"><label class="admin-label">الاسم بالإنجليزية</label><input type="text" id="modal-svc-en" class="admin-input" value="${cur.titleEn}" required /></div>
                </div>
                <div class="admin-form-group"><label class="admin-label">الوصف القصير</label><textarea id="modal-svc-short" class="admin-textarea" style="min-height: 60px;" required>${cur.shortDescription}</textarea></div>
                <div class="admin-form-group"><label class="admin-label">الوصف الكامل</label><textarea id="modal-svc-full" class="admin-textarea" style="min-height: 80px;" required>${cur.fullDescription}</textarea></div>
                <div class="admin-form-group"><label class="admin-label">المميزات (سطر لكل ميزة)</label><textarea id="modal-svc-feats" class="admin-textarea" style="min-height: 70px;">${(cur.features || []).join('\n')}</textarea></div>
                <div class="admin-modal-footer">
                  <button type="button" class="admin-btn admin-btn-secondary" id="svc-cancel-btn">إلغاء</button>
                  <button type="submit" class="admin-btn admin-btn-primary">${isNew ? 'إضافة الخدمة' : 'حفظ التعديلات'}</button>
                </div>
              </form>
            </div>
          `;
          document.body.appendChild(modal);
          const close = () => modal.remove();
          document.getElementById('svc-close-btn').addEventListener('click', close);
          document.getElementById('svc-cancel-btn').addEventListener('click', close);
          document.getElementById('svc-modal-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const updated = {
              ...cur,
              number: document.getElementById('modal-svc-num').value.trim(),
              category: document.getElementById('modal-svc-cat').value.trim(),
              iconName: document.getElementById('modal-svc-ico').value,
              title: document.getElementById('modal-svc-title').value.trim(),
              titleEn: document.getElementById('modal-svc-en').value.trim(),
              shortDescription: document.getElementById('modal-svc-short').value.trim(),
              fullDescription: document.getElementById('modal-svc-full').value.trim(),
              features: document.getElementById('modal-svc-feats').value.split('\n').map(s => s.trim()).filter(Boolean)
            };
            let list = [...draft.services];
            if (isNew) list.push(updated);
            else list = list.map(s => s.id === cur.id ? updated : s);
            CMSStore.updateDraft('services', list, isNew ? `إضافة خدمة (${updated.title})` : `تعديل خدمة (${updated.title})`);
            showToast('تم حفظ الخدمة بنجاح.');
            close();
            refresh();
          });
        };

        document.getElementById('add-service-btn')?.addEventListener('click', () => openEditor(null));
        document.querySelectorAll('.edit-service-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            const s = CMSStore.getDraft().services.find(x => x.id === id);
            if (s) openEditor(s);
          });
        });
        document.querySelectorAll('.delete-service-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            const title = btn.getAttribute('data-title');
            showConfirmModal({
              title: 'تأكيد الحذف',
              message: `هل أنت متأكد من حذف خدمة "${title}" من المسودة؟`,
              confirmText: 'نعم، احذف الخدمة',
              isDanger: true,
              onConfirm: () => {
                const list = CMSStore.getDraft().services.filter(s => s.id !== id);
                CMSStore.updateDraft('services', list, `حذف خدمة (${title})`);
                showToast('تم حذف الخدمة بنجاح.');
                refresh();
              }
            });
          });
        });
        document.querySelectorAll('.move-up-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const idx = parseInt(btn.getAttribute('data-index'), 10);
            if (idx > 0) {
              const list = [...CMSStore.getDraft().services];
              const temp = list[idx];
              list[idx] = list[idx - 1];
              list[idx - 1] = temp;
              list.forEach((item, i) => { item.number = String(i + 1).padStart(2, '0'); });
              CMSStore.updateDraft('services', list, 'إعادة ترتيب الخدمات للأعلى');
              refresh();
            }
          });
        });
        document.querySelectorAll('.move-down-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const idx = parseInt(btn.getAttribute('data-index'), 10);
            const list = [...CMSStore.getDraft().services];
            if (idx < list.length - 1) {
              const temp = list[idx];
              list[idx] = list[idx + 1];
              list[idx + 1] = temp;
              list.forEach((item, i) => { item.number = String(i + 1).padStart(2, '0'); });
              CMSStore.updateDraft('services', list, 'إعادة ترتيب الخدمات للأسفل');
              refresh();
            }
          });
        });
      } else if (route === 'solutions') {
        document.getElementById('save-solutions-btn')?.addEventListener('click', () => {
          const titles = document.querySelectorAll('.eco-title-input');
          const roles = document.querySelectorAll('.eco-role-input');
          const metrics = document.querySelectorAll('.eco-metric-input');
          const icons = document.querySelectorAll('.eco-icon-input');
          const conns = document.querySelectorAll('.eco-conn-input');
          const descs = document.querySelectorAll('.eco-desc-input');
          const cur = CMSStore.getDraft().solutions;
          const updated = Array.from(titles).map((el, i) => ({
            id: cur[i]?.id || `node-${i + 1}`,
            title: el.value.trim(),
            role: roles[i]?.value.trim() || '',
            metric: metrics[i]?.value.trim() || '',
            icon: icons[i]?.value.trim() || 'cpu',
            connectedTo: (conns[i]?.value || '').split(',').map(s => s.trim()).filter(Boolean),
            description: descs[i]?.value.trim() || ''
          }));
          CMSStore.updateDraft('solutions', updated, 'تحديث خريطة الأنظمة');
          showToast('تم حفظ خريطة الأنظمة بنجاح.');
        });
      } else if (route === 'why-us') {
        document.getElementById('save-why-btn')?.addEventListener('click', () => {
          const titles = document.querySelectorAll('.why-title-input');
          const subs = document.querySelectorAll('.why-subtitle-input');
          const badges = document.querySelectorAll('.why-badge-input');
          const icons = document.querySelectorAll('.why-icon-input');
          const spans = document.querySelectorAll('.why-span-input');
          const descs = document.querySelectorAll('.why-desc-input');
          const cur = CMSStore.getDraft().whyUs;
          const updated = Array.from(titles).map((el, i) => ({
            id: cur[i]?.id || `why-${i + 1}`,
            title: el.value.trim(),
            subtitle: subs[i]?.value.trim() || '',
            badge: badges[i]?.value.trim() || '',
            icon: icons[i]?.value.trim() || 'shield_check',
            span: parseInt(spans[i]?.value || '1', 10),
            description: descs[i]?.value.trim() || ''
          }));
          CMSStore.updateDraft('whyUs', updated, 'تحديث قسم لماذا نحن');
          showToast('تم حفظ بطاقات لماذا نحن بنجاح.');
        });
      } else if (route === 'sectors') {
        document.getElementById('save-sectors-btn')?.addEventListener('click', () => {
          const titles = document.querySelectorAll('.sector-title-input');
          const subs = document.querySelectorAll('.sector-sub-input');
          const tags = document.querySelectorAll('.sector-tag-input');
          const icons = document.querySelectorAll('.sector-icon-input');
          const imgs = document.querySelectorAll('.sector-img-input');
          const descs = document.querySelectorAll('.sector-desc-input');
          const highs = document.querySelectorAll('.sector-high-input');
          const cur = CMSStore.getDraft().sectors;
          const updated = Array.from(titles).map((el, i) => ({
            id: cur[i]?.id || `sector-${i + 1}`,
            title: el.value.trim(),
            subtitle: subs[i]?.value.trim() || '',
            tag: tags[i]?.value.trim() || '',
            icon: icons[i]?.value.trim() || 'layers',
            imagePath: imgs[i]?.value.trim() || 'img/JUST.jpg',
            description: descs[i]?.value.trim() || '',
            highlights: (highs[i]?.value || '').split('\n').map(s => s.trim()).filter(Boolean)
          }));
          CMSStore.updateDraft('sectors', updated, 'تحديث قسم القطاعات');
          showToast('تم حفظ القطاعات بنجاح.');
        });
      } else if (route === 'stats') {
        document.getElementById('save-stats-btn')?.addEventListener('click', () => {
          const titles = document.querySelectorAll('.stat-title-input');
          const badges = document.querySelectorAll('.stat-badge-input');
          const icons = document.querySelectorAll('.stat-icon-input');
          const descs = document.querySelectorAll('.stat-desc-input');
          const cur = CMSStore.getDraft().stats;
          const updated = Array.from(titles).map((el, i) => ({
            id: cur[i]?.id || `stat-${i + 1}`,
            title: el.value.trim(),
            badge: badges[i]?.value.trim() || '',
            icon: icons[i]?.value.trim() || 'shield_check',
            description: descs[i]?.value.trim() || ''
          }));
          CMSStore.updateDraft('stats', updated, 'تحديث المؤشرات الهندسية');
          showToast('تم حفظ المؤشرات بنجاح.');
        });
      } else if (route === 'cta') {
        document.getElementById('save-cta-btn')?.addEventListener('click', () => {
          const badge = document.getElementById('cta-badge').value;
          const bgImagePath = document.getElementById('cta-bg-image').value;
          const titlePrefix = document.getElementById('cta-title-prefix').value;
          const titleHighlight = document.getElementById('cta-title-highlight').value;
          const description = document.getElementById('cta-desc').value;
          const buttonText = document.getElementById('cta-btn-text').value;
          const buttonUrl = document.getElementById('cta-btn-url').value;
          CMSStore.updateDraft('cta', { badge, bgImagePath, titlePrefix, titleHighlight, description, buttonText, buttonUrl, isActive: true }, 'تحديث قسم CTA');
          showToast('تم حفظ قسم الدعوة للتواصل بنجاح.');
        });
      } else if (route === 'contact') {
        document.getElementById('save-contact-btn')?.addEventListener('click', () => {
          const phone = document.getElementById('contact-phone').value;
          const email = document.getElementById('contact-email').value;
          const whatsapp = document.getElementById('contact-whatsapp').value;
          const workingHours = document.getElementById('contact-hours').value;
          const address = document.getElementById('contact-address').value;
          CMSStore.updateDraft('contact', { phone, email, whatsapp, workingHours, address, socialLinks: {}, isActive: true }, 'تحديث معلومات التواصل');
          showToast('تم حفظ معلومات التواصل بنجاح.');
        });
      } else if (route === 'navigation') {
        document.getElementById('save-nav-btn')?.addEventListener('click', () => {
          const labels = document.querySelectorAll('.nav-label-input');
          const urls = document.querySelectorAll('.nav-url-input');
          const actives = document.querySelectorAll('.nav-active-input');
          const cur = CMSStore.getDraft().navigation;
          const updated = Array.from(labels).map((el, i) => ({
            id: cur[i]?.id || `nav-${i + 1}`,
            label: el.value.trim(),
            url: urls[i]?.value.trim() || '#',
            order: i + 1,
            isActive: actives[i]?.checked ?? true
          }));
          CMSStore.updateDraft('navigation', updated, 'تحديث روابط القائمة العلوية');
          showToast('تم حفظ القائمة بنجاح.');
        });
      } else if (route === 'footer') {
        document.getElementById('save-footer-btn')?.addEventListener('click', () => {
          const logoPath = document.getElementById('footer-logo').value;
          const brandNameEn = document.getElementById('footer-brand-en').value;
          const brandDesc = document.getElementById('footer-brand-desc').value;
          const copyrightText = document.getElementById('footer-copyright').value;
          const featuredServices = document.getElementById('footer-services-list').value.split('\n').map(s => s.trim()).filter(Boolean);
          const cur = CMSStore.getDraft().footer;
          CMSStore.updateDraft('footer', { ...cur, logoPath, brandNameEn, brandDesc, copyrightText, featuredServices }, 'تحديث الفوتر');
          showToast('تم حفظ الفوتر بنجاح.');
        });
      } else if (route === 'media') {
        const upload = document.getElementById('media-upload-input');
        upload?.addEventListener('change', () => {
          if (upload.files && upload.files[0]) {
            const file = upload.files[0];
            const reader = new FileReader();
            reader.onload = (e) => {
              const isVideo = file.type.startsWith('video');
              const isSvg = file.type.includes('svg');
              const item = {
                id: `med-${Date.now()}`,
                name: file.name,
                path: e.target.result,
                type: isVideo ? 'video' : isSvg ? 'svg' : 'image',
                sizeKB: parseFloat((file.size / 1024).toFixed(1)),
                dimensions: isVideo ? 'Video MP4' : 'Uploaded Image',
                usedIn: ['Media Library'],
                uploadedAt: new Date().toLocaleString('ar-SA', { hour12: false })
              };
              const draft = CMSStore.getDraft();
              CMSStore.updateDraft('media', [item, ...draft.media], `رفع ملف وسائط (${file.name})`);
              showToast(`تم رفع "${file.name}" بنجاح.`);
              refresh();
            };
            reader.readAsDataURL(file);
          }
        });
        document.querySelectorAll('.copy-media-path-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const p = btn.getAttribute('data-path');
            navigator.clipboard.writeText(p).then(() => showToast('تم نسخ مسار الملف.')).catch(() => showToast(`المسار: ${p}`));
          });
        });
        document.querySelectorAll('.delete-media-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            const name = btn.getAttribute('data-name');
            showConfirmModal({
              title: 'حذف ملف وسائط',
              message: `هل أنت متأكد من حذف "${name}"؟`,
              confirmText: 'نعم، احذف الملف',
              isDanger: true,
              onConfirm: () => {
                const list = CMSStore.getDraft().media.filter(m => m.id !== id);
                CMSStore.updateDraft('media', list, `حذف ملف وسائط (${name})`);
                showToast('تم حذف الملف بنجاح.');
                refresh();
              }
            });
          });
        });
      } else if (route === 'icons') {
        document.querySelectorAll('.copy-icon-id-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            navigator.clipboard.writeText(id).then(() => showToast(`تم نسخ اسم الأيقونة: "${id}"`));
          });
        });
      } else if (route === 'settings') {
        document.getElementById('save-settings-btn')?.addEventListener('click', () => {
          const siteName = document.getElementById('set-site-name').value;
          const companyName = document.getElementById('set-company-name').value;
          const companyNameEn = document.getElementById('set-company-en').value;
          const tagline = document.getElementById('set-tagline').value;
          const logoPath = document.getElementById('set-logo').value;
          const faviconPath = document.getElementById('set-favicon').value;
          const metaTitle = document.getElementById('set-meta-title').value;
          const metaDescription = document.getElementById('set-meta-desc').value;
          const keywords = document.getElementById('set-meta-keywords').value;
          const cur = CMSStore.getDraft().settings;
          CMSStore.updateDraft('settings', { ...cur, siteName, companyName, companyNameEn, tagline, logoPath, faviconPath, metaTitle, metaDescription, keywords }, 'تحديث إعدادات الموقع و SEO');
          showToast('تم حفظ إعدادات الموقع بنجاح.');
        });
      } else if (route === 'users') {
        document.getElementById('add-user-modal-btn')?.addEventListener('click', () => {
          const modal = document.createElement('div');
          modal.className = 'admin-modal-backdrop active';
          modal.innerHTML = `
            <div class="admin-modal-box" style="max-width: 520px;">
              <div class="admin-modal-header">
                <h2 style="font-size: 1.3rem; font-weight: 800;">إضافة مستخدم جديد</h2>
                <button class="action-icon-btn" id="new-user-close-btn">${getIcon('close')}</button>
              </div>
              <form id="new-user-form">
                <div class="admin-form-group" style="margin-bottom: 1.1rem;">
                  <label class="admin-label">الاسم الكامل</label>
                  <input type="text" id="new-user-name" class="admin-input" placeholder="م. خالد العتيبي" required />
                </div>
                <div class="admin-form-group" style="margin-bottom: 1.1rem;">
                  <label class="admin-label">البريد الإلكتروني</label>
                  <input type="email" id="new-user-email" class="admin-input" placeholder="khalid@asasat.sa" required style="direction: ltr; text-align: left;" />
                </div>
                <div class="admin-form-group" style="margin-bottom: 1.1rem;">
                  <label class="admin-label">كلمة المرور (سيتم تشفيرها بـ Bcrypt)</label>
                  <input type="password" id="new-user-pass" class="admin-input" placeholder="••••••••" required minlength="6" style="direction: ltr; text-align: left;" />
                </div>
                <div class="admin-form-group" style="margin-bottom: 1.5rem;">
                  <label class="admin-label">الرتبة والصلاحية</label>
                  <select id="new-user-role" class="admin-select">
                    <option value="editor">محرر محتوى (Content Editor)</option>
                    <option value="admin">مسؤول نظام (System Admin)</option>
                    <option value="super_admin">مدير عام (Super Admin)</option>
                  </select>
                </div>
                <div class="admin-modal-footer">
                  <button type="button" class="admin-btn admin-btn-secondary" id="new-user-cancel-btn">إلغاء</button>
                  <button type="submit" class="admin-btn admin-btn-primary">إنشاء وتشفير الحساب</button>
                </div>
              </form>
            </div>
          `;
          document.body.appendChild(modal);
          const close = () => modal.remove();
          document.getElementById('new-user-close-btn').addEventListener('click', close);
          document.getElementById('new-user-cancel-btn').addEventListener('click', close);

          document.getElementById('new-user-form').addEventListener('submit', async (e) => {
            e.preventDefault();
            const name = document.getElementById('new-user-name').value.trim();
            const email = document.getElementById('new-user-email').value.trim();
            const password = document.getElementById('new-user-pass').value;
            const role = document.getElementById('new-user-role').value;
            const roleTitle = role === 'super_admin' ? 'مدير عام' : role === 'admin' ? 'مسؤول نظام' : 'محرر محتوى';

            const res = await CMSStore.createUser({ name, email, password, role, roleTitle });
            if (res.success) {
              showToast(res.message);
              close();
              refresh();
            } else {
              showToast(res.message, 'error');
            }
          });
        });

        document.querySelectorAll('.delete-user-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            const name = btn.getAttribute('data-name');
            showConfirmModal({
              title: 'تأكيد حذف المستخدم',
              message: `هل أنت متأكد من رغبتك في حذف حساب "${name}" نهائياً من النظام؟`,
              confirmText: 'نعم، احذف المستخدم',
              isDanger: true,
              onConfirm: async () => {
                const res = await CMSStore.deleteUser(id);
                if (res.success) {
                  showToast(res.message);
                  refresh();
                } else {
                  showToast(res.message, 'error');
                }
              }
            });
          });
        });
      } else if (route === 'revisions') {
        document.querySelectorAll('.restore-rev-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            const ver = btn.getAttribute('data-ver');
            showConfirmModal({
              title: `استعادة النسخة (${ver})`,
              message: `هل أنت متأكد من استعادة النسخة (${ver})؟ سيتم تطبيقها في قاعدة البيانات فوراً.`,
              confirmText: 'استعادة النسخة الآن',
              isDanger: true,
              onConfirm: async () => {
                const ok = await CMSStore.restoreRevision(id);
                if (ok) {
                  showToast(`تمت استعادة النسخة (${ver}) بنجاح.`);
                  refresh();
                } else {
                  showToast('تعذر استعادة النسخة.', 'error');
                }
              }
            });
          });
        });
      } else if (route === 'inquiries') {
        document.getElementById('refresh-inquiries-btn')?.addEventListener('click', async () => {
          showToast('جاري تحديث قائمة الاستشارات...');
          await CMSStore.fetchInquiries();
          refresh();
        });

        document.getElementById('inquiries-search-input')?.addEventListener('input', (e) => {
          const q = e.target.value.toLowerCase().trim();
          const rows = document.querySelectorAll('#inquiries-table tbody tr');
          rows.forEach(r => {
            const text = r.textContent.toLowerCase();
            r.style.display = text.includes(q) ? '' : 'none';
          });
        });

        document.querySelectorAll('.inquiry-status-select').forEach(sel => {
          sel.addEventListener('change', async () => {
            const id = sel.getAttribute('data-id');
            const newStatus = sel.value;
            const res = await CMSStore.updateInquiryStatus(id, newStatus);
            if (res.success) {
              showToast('تم تحديث حالة طلب الاستشارة بنجاح.');
              refresh();
            } else {
              showToast(res.message || 'فشل التحديث', 'error');
            }
          });
        });

        document.querySelectorAll('.delete-inquiry-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            const name = btn.getAttribute('data-name');
            showConfirmModal({
              title: 'حذف طلب استشارة',
              message: `هل أنت متأكد من حذف طلب الاستشارة المقدم من "${name}"؟`,
              confirmText: 'نعم، احذف الطلب',
              isDanger: true,
              onConfirm: async () => {
                const res = await CMSStore.deleteInquiry(id);
                if (res.success) {
                  showToast('تم حذف الطلب بنجاح.');
                  refresh();
                } else {
                  showToast(res.message || 'فشل الحذف', 'error');
                }
              }
            });
          });
        });
      }
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => AdminApp.init());
  } else {
    AdminApp.init();
  }
})();
