import { CMSData, CMSStoreState, AdminUser, MediaItem, IconItem } from '../types/admin';
import { indicatorsData, pillarsData, ecosystemNodes, whyUsData, sectorsData, companyData } from './staticData';

export const initialNavLinks = [
  { id: 'nav-1', label: 'الرئيسية', url: '#hero', order: 1, isActive: true },
  { id: 'nav-2', label: 'من نحن', url: '#about', order: 2, isActive: true },
  { id: 'nav-3', label: 'خدماتنا وحلولنا', url: '#services', order: 3, isActive: true },
  { id: 'nav-4', label: 'الحلول المتكاملة', url: '#ecosystem', order: 4, isActive: true },
  { id: 'nav-5', label: 'لماذا نحن', url: '#why-us', order: 5, isActive: true },
  { id: 'nav-6', label: 'القطاعات', url: '#sectors', order: 6, isActive: true },
  { id: 'nav-7', label: 'تواصل معنا', url: '#contact', order: 7, isActive: true }
];

export const initialMediaItems: MediaItem[] = [
  {
    id: 'med-logo',
    name: 'LOGO.jpeg',
    path: 'img/LOGO.jpeg',
    type: 'image',
    sizeKB: 125.7,
    dimensions: '2216 × 1084',
    usedIn: ['Navbar', 'Footer', 'Modals', 'Site Settings'],
    uploadedAt: '2026-08-12 10:00'
  },
  {
    id: 'med-video',
    name: 'BG_VEDIO.mp4',
    path: 'img/BG_VEDIO.mp4',
    type: 'video',
    sizeKB: 5146.9,
    dimensions: '1920 × 1080',
    usedIn: ['Hero Section Background Video'],
    uploadedAt: '2026-08-12 10:00'
  },
  {
    id: 'med-it-team',
    name: 'IT TEAM.jpg',
    path: 'img/IT TEAM.jpg',
    type: 'image',
    sizeKB: 4688.2,
    dimensions: '5472 × 3648',
    usedIn: ['About Us Section', 'Engineering Profile'],
    uploadedAt: '2026-08-12 10:00'
  },
  {
    id: 'med-tech',
    name: 'TECHNOLGY.jpg',
    path: 'img/TECHNOLGY.jpg',
    type: 'image',
    sizeKB: 999.6,
    dimensions: '5120 × 2880',
    usedIn: ['Integrated Ecosystem', 'Network Services'],
    uploadedAt: '2026-08-12 10:00'
  },
  {
    id: 'med-just',
    name: 'JUST.jpg',
    path: 'img/JUST.jpg',
    type: 'image',
    sizeKB: 1703.8,
    dimensions: '6000 × 3376',
    usedIn: ['Sectors & Applications', 'Smart Buildings'],
    uploadedAt: '2026-08-12 10:00'
  },
  {
    id: 'med-footer-bg',
    name: 'FOTER BG.jpg',
    path: 'img/FOTER BG.jpg',
    type: 'image',
    sizeKB: 645.3,
    dimensions: '6003 × 2001',
    usedIn: ['CTA Section Background'],
    uploadedAt: '2026-08-12 10:00'
  },
  {
    id: 'med-icon-svg',
    name: 'ICON.svg',
    path: 'img/ICON.svg',
    type: 'svg',
    sizeKB: 5.7,
    dimensions: '960 × 493',
    usedIn: ['System Vector Graphics', 'Indicators'],
    uploadedAt: '2026-08-12 10:00'
  }
];

export const initialIcons: IconItem[] = [
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

export const initialUsers: AdminUser[] = [
  {
    id: 'usr-1',
    name: 'مدير النظام',
    email: 'admin@asasat.sa',
    role: 'super_admin',
    roleTitle: 'المدير العام للنظام (Super Admin)',
    status: 'active',
    lastLogin: 'نشط الآن',
    createdAt: '2026-01-01'
  }
];

export const initialServicesList = [
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

export function getInitialCMSData(): CMSData {
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
    navigation: initialNavLinks,
    hero: {
      statusPill: 'منظومة متكاملة • تقنيات وحلول المنشآت الذكية والأمنية',
      titlePrefix: companyData.name,
      titleHighlight: companyData.tagline,
      description: companyData.subtitle,
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
    stats: indicatorsData,
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
      pillars: pillarsData,
      vision: 'أن نكون الخيار الهندسي الأول في المملكة والمنطقة في مجال تصميم وتنفيذ البنى التحتية والأنظمة الذكية المتكاملة.',
      mission: 'تمكين عملائنا بأعلى درجات الأمان والكفاءة التشغيلية عبر دمج أحدث تقنيات الأتمتة والذكاء الاصطناعي في بيئة متجانسة.',
      values: ['الريادة الهندسية', 'الموثوقية والأمان', 'الالتزام بأعلى معايير الجودة', 'الابتكار المستمر'],
      isActive: true
    },
    services: initialServicesList,
    solutions: ecosystemNodes,
    whyUs: whyUsData,
    sectors: sectorsData,
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
      brandName: companyData.name,
      brandNameEn: companyData.nameEn,
      brandDesc: companyData.subtitle,
      copyrightText: `© 2026 ${companyData.name} — جميع الحقوق محفوظة`,
      featuredServices: ['أنظمة الأمان والمراقبة', 'التحكم بالدخول والخروج', 'أنظمة إنذار الحريق', 'البنية التحتية للشبكات', 'إدارة المباني BMS', 'المنازل الذكية والصوتيات'],
      isActive: true
    },
    media: initialMediaItems,
    icons: initialIcons
  };
}

export function getInitialCMSStoreState(): CMSStoreState {
  const data = getInitialCMSData();
  const now = '2026-08-12 10:25';
  return {
    draft: JSON.parse(JSON.stringify(data)),
    published: JSON.parse(JSON.stringify(data)),
    isDraftDirty: false,
    lastSavedAt: now,
    lastPublishedAt: now,
    currentVersion: 'v1.0.0',
    users: initialUsers,
    activityLogs: [
      {
        id: 'act-init-1',
        timestamp: '2026-08-12 10:00',
        userId: 'usr-1',
        userName: 'مدير النظام',
        userRole: 'super_admin',
        actionType: 'publish',
        section: 'النظام العام',
        details: 'اعتماد ونشر المنظومة الرقمية الموحدة لشركة أساسات المشاعر المحدودة (v1.0.0)'
      },
      {
        id: 'act-init-2',
        timestamp: '2026-08-12 10:15',
        userId: 'usr-1',
        userName: 'مدير النظام',
        userRole: 'super_admin',
        actionType: 'update',
        section: 'الواجهة والهوية',
        details: 'ضبط وضوح فيديو الخلفية واعتماد عناصر الهوية البصرية الفاخرة'
      },
      {
        id: 'act-init-3',
        timestamp: '2026-08-12 10:30',
        userId: 'usr-1',
        userName: 'مدير النظام',
        userRole: 'super_admin',
        actionType: 'security',
        section: 'أمان الإدارة',
        details: 'تفعيل بروتوكول الدخول الآمن للمسؤول العام وإلغاء الحسابات التجريبية'
      }
    ],
    revisions: [
      {
        id: 'rev-v1',
        version: 'v1.0.0',
        timestamp: '2026-08-12 10:00',
        authorName: 'مدير النظام (Super Admin)',
        summary: 'الإصدار المعتمد والمنشور رسمياً لكافة الحلول والأنظمة والوسائط',
        snapshot: JSON.parse(JSON.stringify(data))
      }
    ]
  };
}
