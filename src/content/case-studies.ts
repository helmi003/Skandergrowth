import type { CaseStudy } from "@/types/content";

export const caseStudies: CaseStudy[] = [
  {
    slug: "luban-el-ghazel",
    client: "Luban El Ghazel",
    industry: {
      en: "E-commerce (GCC)",
      fr: "E-commerce (CCG)",
      ar: "التجارة الإلكترونية (دول الخليج)",
    },
    market: {
      en: "Saudi Arabia · UAE · Qatar",
      fr: "Arabie saoudite · Émirats arabes unis · Qatar",
      ar: "السعودية · الإمارات · قطر",
    },
    objective: {
      en: "Expand into Gulf markets while keeping ad spend efficient and driving real purchases, not just engagement.",
      fr: "Se développer sur les marchés du Golfe tout en gardant un budget publicitaire efficace et en générant de vrais achats, pas seulement de l'engagement.",
      ar: "التوسع في أسواق الخليج مع الحفاظ على كفاءة الإنفاق الإعلاني وتحقيق مبيعات فعلية، وليس مجرد تفاعل.",
    },
    strategy: {
      en: "Strategy → Creative Testing → Optimization → Scaling, run on Meta Ads across three Gulf markets.",
      fr: "Stratégie → Tests créatifs → Optimisation → Scaling, déployée sur Meta Ads dans trois marchés du Golfe.",
      ar: "استراتيجية ← اختبار محتوى إعلاني ← تحسين ← توسع، عبر حملات Meta Ads في ثلاثة أسواق خليجية.",
    },
    platforms: ["Meta"],
    approach: {
      en: ["Strategy", "Creative Testing", "Optimization", "Scaling"],
      fr: ["Stratégie", "Tests créatifs", "Optimisation", "Scaling"],
      ar: ["استراتيجية", "اختبار المحتوى الإعلاني", "تحسين", "توسع"],
    },
    result: {
      en: "A 2.25x return on ad spend in the Saudi market, with a cost per acquisition of 36.55 SAR across 16 tracked purchases.",
      fr: "Un retour sur dépense publicitaire de 2,25x sur le marché saoudien, avec un coût d'acquisition de 36,55 SAR pour 16 achats suivis.",
      ar: "تحقيق عائد على الإنفاق الإعلاني بمقدار 2.25x في السوق السعودي، بتكلفة اكتساب عميل بلغت 36.55 ريال سعودي عبر 16 عملية شراء موثقة.",
    },
    metrics: [
      { label: { en: "ROAS", fr: "ROAS", ar: "العائد على الإنفاق" }, value: "2.25x" },
      { label: { en: "Purchases", fr: "Achats", ar: "عمليات الشراء" }, value: "16" },
      { label: { en: "CPA", fr: "CPA", ar: "تكلفة الاكتساب" }, value: "36.55 SAR" },
    ],
    evidenceImages: [
      {
        src: "/images/dashboards/meta-purchases-saudi.jpeg",
        alt: {
          en: "Meta Ads Manager dashboard showing purchase results for the Saudi Arabia campaign",
          fr: "Tableau de bord Meta Ads Manager montrant les résultats d'achats pour la campagne en Arabie saoudite",
          ar: "لوحة تحكم Meta Ads Manager تعرض نتائج المبيعات لحملة السعودية",
        },
      },
    ],
  },
  {
    slug: "sketchat-academy",
    client: "Sketchat Academy",
    industry: {
      en: "Education (Digital Fabrication)",
      fr: "Éducation (fabrication numérique)",
      ar: "التعليم (التصنيع الرقمي)",
    },
    market: { en: "Saudi Arabia", fr: "Arabie saoudite", ar: "السعودية" },
    objective: {
      en: "Generate qualified leads and build demand for a specialized academy teaching digital fabrication for models and prototypes.",
      fr: "Générer des leads qualifiés et créer de la demande pour une académie spécialisée dans la fabrication numérique de maquettes.",
      ar: "توليد عملاء محتملين مؤهلين وبناء الطلب على أكاديمية متخصصة في التصنيع الرقمي للمجسمات.",
    },
    strategy: {
      en: "Meta Ads + TikTok Ads + Retargeting, focused on engineering, architecture and design students and professionals.",
      fr: "Meta Ads + TikTok Ads + Retargeting, ciblant les étudiants et professionnels en ingénierie, architecture et design.",
      ar: "Meta Ads + TikTok Ads + إعادة استهداف، تستهدف طلاب ومهنيي الهندسة والعمارة والتصميم.",
    },
    platforms: ["Meta", "TikTok"],
    approach: {
      en: ["Lead Generation", "Audience Segmentation", "Creative Testing", "Retargeting"],
      fr: ["Génération de leads", "Segmentation d'audience", "Tests créatifs", "Retargeting"],
      ar: ["توليد العملاء المحتملين", "تقسيم الجمهور", "اختبار المحتوى الإعلاني", "إعادة الاستهداف"],
    },
    result: {
      en: "A qualified lead pipeline that converted genuine interest into real enrollment inquiries for the academy's programs.",
      fr: "Un pipeline de leads qualifiés qui a transformé l'intérêt réel en demandes d'inscription concrètes pour les programmes de l'académie.",
      ar: "بناء قناة عملاء محتملين مؤهلين تحول اهتمامهم إلى طلبات فعلية للالتحاق ببرامج الأكاديمية.",
    },
    metrics: [],
    evidenceImages: [],
  },
  {
    slug: "garo",
    client: "GARO",
    industry: {
      en: "Home Services (App)",
      fr: "Services à domicile (application)",
      ar: "خدمات الصيانة المنزلية (تطبيق)",
    },
    market: { en: "Saudi Arabia", fr: "Arabie saoudite", ar: "السعودية" },
    objective: {
      en: "Increase demand for home maintenance services — electrical, plumbing, AC, carpentry, appliances, pest control and moving — through digital campaigns driving app installs.",
      fr: "Augmenter la demande pour des services de maintenance à domicile — électricité, plomberie, climatisation, menuiserie, électroménager, désinsectisation, déménagement — via des campagnes digitales orientées installation d'application.",
      ar: "زيادة الطلب على خدمات الصيانة المنزلية (كهرباء، سباكة، تكييف، نجارة، أجهزة منزلية، مكافحة حشرات، نقل أثاث) عبر حملات رقمية توجه لتثبيت التطبيق.",
    },
    strategy: {
      en: "TikTok Ads + Google App Campaigns, with full conversion tracking through Meta Events Manager.",
      fr: "TikTok Ads + Google App Campaigns, avec un suivi complet des conversions via Meta Events Manager.",
      ar: "TikTok Ads + حملات تطبيقات Google، مع تتبع كامل للتحويلات عبر Meta Events Manager.",
    },
    platforms: ["TikTok", "Google", "Meta"],
    approach: {
      en: ["App Acquisition", "Conversion Tracking", "Creative Testing", "Optimization"],
      fr: ["Acquisition d'utilisateurs", "Suivi des conversions", "Tests créatifs", "Optimisation"],
      ar: ["اكتساب مستخدمي التطبيق", "تتبع التحويلات", "اختبار المحتوى الإعلاني", "تحسين"],
    },
    result: {
      en: "A scalable acquisition channel that turned ad spend into real, trackable service requests through the app.",
      fr: "Un canal d'acquisition scalable qui a transformé le budget publicitaire en demandes de service réelles et traçables via l'application.",
      ar: "بناء قناة اكتساب قابلة للتوسع حولت الإنفاق الإعلاني إلى طلبات صيانة فعلية وقابلة للتتبع عبر التطبيق.",
    },
    metrics: [
      { label: { en: "Active users", fr: "Utilisateurs actifs", ar: "المستخدمون النشطون" }, value: "1,259" },
      { label: { en: "Organic installs", fr: "Installations organiques", ar: "التثبيتات العضوية" }, value: "1,212" },
    ],
    evidenceImages: [
      {
        src: "/images/dashboards/meta-events-garo.jpeg",
        alt: {
          en: "Meta Events Manager showing tracked PageView events for the GARO app",
          fr: "Meta Events Manager affichant les événements PageView suivis pour l'application GARO",
          ar: "لوحة Meta Events Manager تعرض أحداث PageView المتتبعة لتطبيق GARO",
        },
      },
      {
        src: "/images/dashboards/app-analytics-garo.jpeg",
        alt: {
          en: "App analytics dashboard showing active users and installs for GARO",
          fr: "Tableau de bord d'analyse montrant les utilisateurs actifs et les installations pour GARO",
          ar: "لوحة تحليلات التطبيق تعرض المستخدمين النشطين والتثبيتات لتطبيق GARO",
        },
      },
      {
        src: "/images/dashboards/google-ads-app-promo-1.jpeg",
        alt: {
          en: "Google Ads app promotion campaign performance for GARO",
          fr: "Performance de la campagne de promotion d'application Google Ads pour GARO",
          ar: "أداء حملة الترويج للتطبيق على Google Ads لتطبيق GARO",
        },
      },
      {
        src: "/images/dashboards/tiktok-app-promo.jpeg",
        alt: {
          en: "TikTok Ads app promotion campaign: 254K impressions and 412 conversions for GARO",
          fr: "Campagne TikTok Ads de promotion d'application : 254K impressions et 412 conversions pour GARO",
          ar: "حملة ترويج التطبيق على TikTok Ads: 254 ألف ظهور و412 تحويلًا لتطبيق GARO",
        },
      },
    ],
    logo: "GARO",
  },
  {
    slug: "poterie-royale-plus",
    client: "Poterie Royale Plus",
    industry: {
      en: "E-commerce (Handcrafted Products)",
      fr: "E-commerce (produits artisanaux)",
      ar: "التجارة الإلكترونية (منتجات حرفية)",
    },
    market: { en: "Tunisia", fr: "Tunisie", ar: "تونس" },
    objective: {
      en: "Grow sales through digital ads and improve return on ad spend for a handcrafted pottery e-commerce brand.",
      fr: "Augmenter les ventes via la publicité digitale et améliorer le retour sur dépense publicitaire pour une marque e-commerce de poterie artisanale.",
      ar: "زيادة المبيعات عبر الإعلانات الرقمية وتحسين العائد على الإنفاق الإعلاني لعلامة تجارية للمنتجات الحرفية.",
    },
    strategy: {
      en: "Meta Ads + Creative Testing + Conversion Optimization, moving focus away from reach and engagement toward sales.",
      fr: "Meta Ads + Tests créatifs + Optimisation de la conversion, en déplaçant l'attention de la portée et de l'engagement vers les ventes.",
      ar: "Meta Ads + اختبار المحتوى الإعلاني + تحسين التحويل، مع التركيز على المبيعات بدل الاكتفاء بالوصول والتفاعل.",
    },
    platforms: ["Meta"],
    approach: {
      en: ["Audience Testing", "Creative Testing", "Conversion", "Scaling"],
      fr: ["Tests d'audience", "Tests créatifs", "Conversion", "Scaling"],
      ar: ["اختبار الجمهور", "اختبار المحتوى الإعلاني", "التحويل", "التوسع"],
    },
    result: {
      en: "Improved campaign performance with a direct focus on sales and return on spend, instead of reach and engagement alone.",
      fr: "Amélioration des performances des campagnes avec un focus direct sur les ventes et le retour sur investissement, plutôt que la seule portée et l'engagement.",
      ar: "تحسين أداء الحملات والتركيز على المبيعات والعائد المادي بدلًا من الاكتفاء بالتفاعل والوصول فقط.",
    },
    metrics: [],
    evidenceImages: [
      {
        src: "/images/dashboards/meta-ads-trend-store.jpeg",
        alt: {
          en: "Meta Ads Manager performance table for the store's campaign creatives",
          fr: "Tableau de performance Meta Ads Manager pour les créations publicitaires de la boutique",
          ar: "جدول أداء Meta Ads Manager للمحتوى الإعلاني الخاص بالمتجر",
        },
      },
    ],
  },
];
