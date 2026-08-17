import { EcosystemNode, SectorItem, IndicatorItem, PillarItem, WhyUsItem } from '../types';

export const companyData = {
  name: 'أساسات المشاعر المحدودة',
  nameEn: 'Asasat Al-Mashaer Co. Ltd.',
  tagline: 'حلول تقنية وهندسية متكاملة لحماية وإدارة المنشآت الذكية',
  subtitle: 'ريادة في تصميم وتنفيذ البنية التحتية للشبكات، منظومات الأمان والمراقبة المتقدمة، التحكم بالدخول، إنذار الحريق، وأنظمة إدارة المباني الذكية BMS بأعلى معايير الجودة العالمية.',
  established: '2026',
  stats: [
    { label: 'حلول تقنية متكاملة', value: '10+', desc: 'تغطية شاملة لكافة المنظومات الذكية والأمنية' },
    { label: 'تكامل أنظمة موحد', value: '100%', desc: 'ترابط مركزي مباشر مع بروتوكولات BMS المعتمدة' },
    { label: 'جاهزية هندسية', value: '24/7', desc: 'دعم فني واستجابة تشغيلية متواصلة' },
    { label: 'قطاعات نخدمها', value: '6+', desc: 'حلول مخصصة للقطاع التجاري، الإداري والحكومي' }
  ]
};

export const indicatorsData: IndicatorItem[] = [
  {
    id: 'ind-1',
    title: 'حلول تقنية معتمدة',
    subtitle: 'معايير هندسية دولية',
    badge: 'Certified Solutions',
    description: 'تطبيق أحدث الأنظمة التقنية المتوافقة مع المعايير والمواصفات القياسية العالمية للأمن والسلامة.',
    icon: 'shield_check'
  },
  {
    id: 'ind-2',
    title: 'تكامل أنظمة شامل',
    subtitle: 'Technology Ecosystem',
    badge: 'System Integration',
    description: 'ربط متجانس ومركزي بين شبكات المراقبة، التحكم بالدخول، إنذار الحريق، وأنظمة إدارة المباني BMS.',
    icon: 'network_nodes'
  },
  {
    id: 'ind-3',
    title: 'تغطية لكافة القطاعات',
    subtitle: 'Cross-Sector Solutions',
    badge: 'Multi-Industry',
    description: 'تصميم حلول مخصصة تلبي المتطلبات الدقيقة للأبراج التجارية، المقرات الإدارية، والمشاريع الحيوية.',
    icon: 'layers'
  },
  {
    id: 'ind-4',
    title: 'دعم هندسي مستمر',
    subtitle: 'Technical Excellence',
    badge: 'Continuous Support',
    description: 'فريق هندسي متخصص يضمن استمرارية الأعمال وكفاءة التشغيل والصيانة الوقائية لجميع المنظومات.',
    icon: 'cpu'
  }
];

export const pillarsData: PillarItem[] = [
  {
    id: 'pil-1',
    title: 'رؤية تقنية مستدامة',
    description: 'نبتكر حلولاً رقمية ذكية تهدف إلى تقليل التكاليف التشغيلية ورفع كفاءة استهلاك الطاقة بالمنشآت.',
    icon: 'sparkles'
  },
  {
    id: 'pil-2',
    title: 'أمان وموثوقية فائقة',
    description: 'بناء دفاعات أمنية ومراقبة مشددة تعتمد على الذكاء الاصطناعي لحماية الأصول والأرواح 24/7.',
    icon: 'shield_check'
  },
  {
    id: 'pil-3',
    title: 'كفاءة هندسية معتمدة',
    description: 'فريق عمل محترف يمتلك خبرات واسعة في تصميم وتركيب وتشغيل أدق الأنظمة التقنية المعقدة.',
    icon: 'cpu'
  },
  {
    id: 'pil-4',
    title: 'تكامل موحد للمنظومات',
    description: 'ربط جميع الأنظمة الفرعية في منصة تحكم مركزية واحدة تمنح إدارة المنشأة رؤية فورية شاملة.',
    icon: 'network_nodes'
  }
];

export const ecosystemNodes: EcosystemNode[] = [
  {
    id: 'eco-sec',
    number: '01',
    title: 'أنظمة الأمان والمراقبة',
    titleEn: 'Security & Surveillance',
    role: 'الرصد البصري والتحليل الذكي',
    description: 'كاميرات AI VMS ترصد المحيط الأمني وترسل الإشارات الفورية لمنظومة التحكم المركزية.',
    connectsTo: ['eco-acc', 'eco-bms'],
    iconKey: 'cctv_security',
    metrics: 'تحليل فوري 4K'
  },
  {
    id: 'eco-acc',
    number: '02',
    title: 'التحكم بالدخول والخروج',
    titleEn: 'Access Control',
    role: 'إدارة وتدقيق صلاحيات الوصول',
    description: 'بوابات وقارئات حيوية تدير تدفق الأفراد والمركبات وتتكامل تلقائياً مع جداول الحضور وسجلات الأمان.',
    connectsTo: ['eco-fire', 'eco-net'],
    iconKey: 'access_control',
    metrics: 'استجابة < 0.2s'
  },
  {
    id: 'eco-fire',
    number: '03',
    title: 'أنظمة إنذار الحريق',
    titleEn: 'Fire Alarm & Safety',
    role: 'السلامة وحماية الأرواح',
    description: 'كواشف معنونة تتصل بنظام BMS لفتح بوابات الهروب، إيقاف التكييف، وتشغيل مراوح سحب الدخان فوراً.',
    connectsTo: ['eco-net', 'eco-bms'],
    iconKey: 'fire_alarm',
    metrics: 'معنون Addressable'
  },
  {
    id: 'eco-net',
    number: '04',
    title: 'البنية التحتية والشبكات',
    titleEn: 'Network & Backbone',
    role: 'الشريان الرقمي لنقل البيانات',
    description: 'شبكة ألياف ضوئية فائقة السرعة وسويتشات مؤسسية توفر بيئة تواصل آمنة وغير قابلة للانقطاع لكافة الأجهزة.',
    connectsTo: ['eco-bms', 'eco-smart'],
    iconKey: 'networks_telecom',
    metrics: '10Gbps+ Fiber'
  },
  {
    id: 'eco-bms',
    number: '05',
    title: 'إدارة المباني المركزية BMS',
    titleEn: 'Central BMS Hub',
    role: 'العقل المدبر والتحكم المركزي',
    description: 'المنصة الرئيسية لدمج الطاقة، التكييف، الإضاءة، وحالات الطوارئ في شاشة قيادة موحدة بالذكاء الاصطناعي.',
    connectsTo: ['eco-smart', 'eco-sec'],
    iconKey: 'bms_systems',
    metrics: 'BACnet / Modbus'
  },
  {
    id: 'eco-smart',
    number: '06',
    title: 'الأنظمة الذكية والصوتيات',
    titleEn: 'Smart Systems & AV',
    role: 'الراحة والأتمتة التفاعلية',
    description: 'أنظمة صوتية مرئية وأتمتة بيئية تتفاعل مع حضور المستخدمين لتقديم أعلى مستويات الراحة والكفاءة.',
    connectsTo: ['eco-sec'],
    iconKey: 'smart_home',
    metrics: 'أتمتة ذكية 100%'
  }
];

export const whyUsData: WhyUsItem[] = [
  {
    id: 'why-1',
    title: 'حلول هندسية متكاملة End-to-End',
    subtitle: 'من التصميم إلى التشغيل والصيانة',
    description: 'نقدم دورة حياة كاملة للمشروع بدءاً من المخططات الهندسية وتوريد أرقى المعدات العالمية وحتى البرمجة والاختبار والتسليم النهائي.',
    icon: 'shield_check',
    badge: 'تكامل شامل',
    spanCol: 2
  },
  {
    id: 'why-2',
    title: 'جودة التنفيذ والالتزام الصارم',
    subtitle: 'معايير قياسية لا تقبل المساومة',
    description: 'نلتزم بأدق كودات البناء والمواصفات الفنية العالمية مع ضمانات معتمدة على كافة التركيبات والمعدات.',
    icon: 'sparkles',
    badge: 'دقة وجودة'
  },
  {
    id: 'why-3',
    title: 'أنظمة تقنية حديثة وذكية',
    subtitle: 'مواكبة لأحدث ابتكارات الذكاء الاصطناعي',
    description: 'نعتمد منصات تدعم معالجات الحافة (Edge AI)، وبروتوكولات إنترنت الأشياء (IoT)، وتقنيات الشبكات المتقدمة Wi-Fi 6/7.',
    icon: 'cpu',
    badge: 'أحدث التقنيات'
  },
  {
    id: 'why-4',
    title: 'تكامل متجانس بين المنظومات',
    subtitle: 'منصة مركزية واحدة بدون تعقيدات',
    description: 'نوحد التحكم بأنظمة الأمان، الحريق، الشبكات، والـ BMS في بيئة تفاعلية موحدة تتيح الإشراف اللحظي وسرعة اتخاذ القرار.',
    icon: 'network_nodes',
    badge: 'تكامل مركزي'
  },
  {
    id: 'why-5',
    title: 'مرونة وقابلية عالية للتوسع المستقبلي',
    subtitle: 'بنية تحتية مهيأة للنمو والتطوير',
    description: 'نصمم الشبكات والأنظمة بهندسة معمارية نمطية (Modular Architecture) تتيح إضافة وحدات ومرافق جديدة مستقبلاً بأقل التكاليف وبدون انقطاع الخدمة.',
    icon: 'layers',
    badge: 'Scalability',
    spanCol: 2
  }
];

export const sectorsData: SectorItem[] = [
  {
    id: 'sec-commercial',
    title: 'المباني والأبراج التجارية',
    subtitle: 'Commercial Towers & Malls',
    tag: 'مجمعات وأبراج',
    description: 'منظومات أمان ومراقبة عالية الكثافة، بوابات دخول سريعة، إدارة مواقف ذكية، وتحكم مركزي بالطاقة والتكييف للمراكز والمجمعات التجارية الضخمة.',
    highlights: ['كاميرات بانورامية 360 درجة', 'بوابات دخول سريعة Speed Gates', 'ترشيد استهلاك الطاقة عبر BMS'],
    icon: 'bms_systems'
  },
  {
    id: 'sec-corporate',
    title: 'المقرات والشركات الإدارية',
    subtitle: 'Corporate Headquarters & Offices',
    tag: 'مقرات إدارية',
    description: 'بنية تحتية فائقة السرعة للشبكات، سنترالات سحابية IP-PBX، قاعات اجتماعات مرئية تفاعلية، وأنظمة تحكم بالبصمة الحيوية لتنظيم تدفق الموظفين والزوار.',
    highlights: ['غرف اجتماعات ذكية Zoom/Teams', 'سنترالات IP-PBX موحدة', 'شبكات ألياف ضوئية سريعة'],
    icon: 'networks_telecom'
  },
  {
    id: 'sec-residential',
    title: 'المنشآت السكنية والمنازل الذكية',
    subtitle: 'Residential Compounds & Smart Villas',
    tag: 'فلل ومجمعات سكنية',
    description: 'أتمتة شاملة للمنازل تشمل الإضاءة، التكييف، الستائر، الإنتركم المرئي، والأقفال الذكية، لتوفير أقصى درجات الراحة والأمان لأصحاب المنازل.',
    highlights: ['أتمتة الإضاءة والتكييف KNX', 'أقفال وبوابات ذكية', 'أنظمة صوتية متعددة الغرف'],
    icon: 'smart_home'
  },
  {
    id: 'sec-industrial',
    title: 'المصانع والمستودعات اللوجستية',
    subtitle: 'Industrial Facilities & Logistics',
    tag: 'منشآت صناعية',
    description: 'حلول مراقبة محيطية حرارية للمناطق المفتوحة، كشف مبكر للدخان في المستودعات العالية، شبكات لاسلكية متينة، وتحكم صناعي بالأبواب والبوابات الثقيلة.',
    highlights: ['كاميرات حرارية للمحيط الأمني', 'كواشف دخان شعاعية Beam Detectors', 'تغطية لاسلكية للمستودعات الضخمة'],
    icon: 'fire_alarm'
  },
  {
    id: 'sec-government',
    title: 'المرافق الحكومية والحيوية',
    subtitle: 'Government & Critical Infrastructure',
    tag: 'مرافق حيوية',
    description: 'أعلى مستويات الأمان المادي والرقمي، أنظمة تحكم بالدخول ثلاثية التشفير، غرف مراقبة وتحكم مركزية 24/7، وشبكات بيانات معزولة ومؤمنة بالكامل.',
    highlights: ['أنظمة أمان معتمدة بمستويات مشددة', 'غرف عمليات ومراقبة مركزية', 'بوابات أمنية وحواجز هيدروليكية'],
    icon: 'cctv_security'
  },
  {
    id: 'sec-smart-projects',
    title: 'مشاريع المدن الذكية والتطوير',
    subtitle: 'Smart City Projects & Developments',
    tag: 'مشاريع ذكية',
    description: 'تطبيق مفاهيم إنترنت الأشياء IoT، إدارة شبكات الإنارة الذكية، محطات المراقبة البيئية، وربط البنى التحتية المتطورة بمنصات تحكم حضرية موحدة.',
    highlights: ['منصات IoT متكاملة', 'مراقبة بيئية وإدارة طاقة', 'بنية اتصالات موحدة ومستدامة'],
    icon: 'network_nodes'
  }
];
