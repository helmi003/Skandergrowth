import type { Service } from "@/types/content";

export const services: Service[] = [
  {
    slug: "meta-ads",
    icon: "Share2",
    name: { en: "Meta Ads", fr: "Publicité Meta", ar: "إعلانات Meta" },
    tagline: {
      en: "Facebook & Instagram campaigns built to convert",
      fr: "Des campagnes Facebook et Instagram pensées pour convertir",
      ar: "حملات فيسبوك وإنستغرام مصممة لتحقيق التحويل",
    },
    description: {
      en: "Full-funnel Meta Ads management — from account structure and audience strategy to creative testing and scaling — built around measurable business outcomes, not vanity metrics.",
      fr: "Gestion complète des campagnes Meta Ads — structure du compte, stratégie d'audience, tests créatifs et scaling — au service de résultats business mesurables, pas de simples indicateurs de vanité.",
      ar: "إدارة متكاملة لحملات Meta Ads، من بناء هيكلة الحساب واستراتيجية الجمهور، إلى اختبار المحتوى الإعلاني والتوسع، وكل ذلك مبني على نتائج فعلية للنشاط التجاري وليس مجرد مؤشرات ظاهرية.",
    },
    problem: {
      en: "Ad spend that doesn't translate into real sales, or campaigns that plateau with no clear reason why.",
      fr: "Un budget publicitaire qui ne se traduit pas en ventes réelles, ou des campagnes qui stagnent sans raison claire.",
      ar: "إنفاق إعلاني لا يتحول إلى مبيعات فعلية، أو حملات تتوقف نتائجها عند نقطة معينة دون معرفة السبب.",
    },
    platforms: ["Meta"],
    deliverables: {
      en: [
        "Campaign & account structure",
        "Audience research and segmentation",
        "Creative testing framework",
        "Weekly performance reporting",
      ],
      fr: [
        "Structure de campagne et de compte",
        "Recherche et segmentation d'audience",
        "Cadre de test créatif",
        "Reporting hebdomadaire des performances",
      ],
      ar: [
        "هيكلة الحملات والحساب الإعلاني",
        "دراسة الجمهور المستهدف وتقسيمه",
        "إطار عمل لاختبار المحتوى الإعلاني",
        "تقارير أداء أسبوعية",
      ],
    },
    relatedCaseStudy: "luban-el-ghazel",
  },
  {
    slug: "google-ads",
    icon: "Search",
    name: { en: "Google Ads", fr: "Google Ads", ar: "إعلانات Google" },
    tagline: {
      en: "Search, Shopping & App campaigns that capture real demand",
      fr: "Des campagnes Search, Shopping et App qui captent une demande réelle",
      ar: "حملات بحث وتسوق وتطبيقات تلتقط الطلب الحقيقي في السوق",
    },
    description: {
      en: "Google Search, Shopping and App Campaigns set up for qualified traffic and tracked conversions — so every dinar or riyal spent can be traced back to a result.",
      fr: "Campagnes Google Search, Shopping et App configurées pour générer un trafic qualifié et des conversions suivies — pour que chaque dinar ou riyal dépensé soit rattaché à un résultat concret.",
      ar: "إعداد حملات Google Search وShopping وApp Campaigns لجلب زيارات مؤهلة وتحويلات قابلة للتتبع، بحيث يكون كل دينار أو ريال يُنفق مرتبطًا بنتيجة واضحة.",
    },
    problem: {
      en: "High cost-per-click with little visibility into which campaigns actually drive revenue.",
      fr: "Un coût par clic élevé sans réelle visibilité sur les campagnes qui génèrent réellement du revenu.",
      ar: "ارتفاع تكلفة النقرة دون رؤية واضحة لأي الحملات تحقق فعليًا عائدًا ماديًا.",
    },
    platforms: ["Google"],
    deliverables: {
      en: [
        "Search & Shopping campaign setup",
        "App promotion campaigns",
        "Conversion tracking configuration",
        "Ongoing bid & budget optimization",
      ],
      fr: [
        "Configuration des campagnes Search et Shopping",
        "Campagnes de promotion d'application",
        "Configuration du suivi des conversions",
        "Optimisation continue des enchères et du budget",
      ],
      ar: [
        "إعداد حملات البحث والتسوق",
        "حملات الترويج للتطبيقات",
        "إعداد أنظمة تتبع التحويلات",
        "تحسين مستمر للمزايدات والميزانية",
      ],
    },
    relatedCaseStudy: "garo",
  },
  {
    slug: "tiktok-ads",
    icon: "Music2",
    name: { en: "TikTok Ads", fr: "Publicité TikTok", ar: "إعلانات TikTok" },
    tagline: {
      en: "Native, scroll-stopping campaigns for a younger, faster audience",
      fr: "Des campagnes natives et percutantes pour une audience jeune et rapide",
      ar: "حملات إعلانية بطابع طبيعي وجذاب تناسب جمهورًا أصغر سنًا وأسرع تفاعلًا",
    },
    description: {
      en: "TikTok Ads strategy and execution — from creative angles that fit the platform to retargeting sequences that turn attention into leads and sales.",
      fr: "Stratégie et exécution TikTok Ads — des angles créatifs adaptés à la plateforme jusqu'aux séquences de retargeting qui transforment l'attention en leads et en ventes.",
      ar: "استراتيجية وتنفيذ حملات TikTok Ads، بدءًا من زوايا محتوى إعلاني تناسب طبيعة المنصة، وصولًا إلى تسلسلات إعادة الاستهداف التي تحول الانتباه إلى عملاء محتملين ومبيعات فعلية.",
    },
    problem: {
      en: "Generic ad creative that gets skipped instead of watched — and no system to bring back interested viewers.",
      fr: "Des créations publicitaires génériques que l'on passe au lieu de regarder — et aucun système pour recibler les internautes intéressés.",
      ar: "محتوى إعلاني عام يتم تجاوزه بدل مشاهدته، وغياب نظام لإعادة استهداف من أبدوا اهتمامًا سابقًا.",
    },
    platforms: ["TikTok"],
    deliverables: {
      en: [
        "Platform-native creative strategy",
        "Audience segmentation & retargeting",
        "Lead generation campaign setup",
        "Creative testing at scale",
      ],
      fr: [
        "Stratégie créative native à la plateforme",
        "Segmentation d'audience et retargeting",
        "Configuration des campagnes de génération de leads",
        "Tests créatifs à grande échelle",
      ],
      ar: [
        "استراتيجية محتوى إعلاني يناسب طبيعة المنصة",
        "تقسيم الجمهور وإعادة الاستهداف",
        "إعداد حملات لتوليد العملاء المحتملين",
        "اختبار محتوى إعلاني على نطاق واسع",
      ],
    },
    relatedCaseStudy: "sketchat-academy",
  },
  {
    slug: "performance-marketing",
    icon: "TrendingUp",
    name: {
      en: "Performance Marketing",
      fr: "Marketing à la performance",
      ar: "التسويق القائم على الأداء",
    },
    tagline: {
      en: "Strategy, funnel and creative testing — not just ad management",
      fr: "Stratégie, tunnel de conversion et tests créatifs — pas seulement de la gestion publicitaire",
      ar: "استراتيجية ومسار تحويل واختبار محتوى، وليس مجرد تشغيل إعلانات",
    },
    description: {
      en: "Campaign strategy, funnel design, creative testing and conversion rate optimization working together as one system — because ads alone don't create growth.",
      fr: "Stratégie de campagne, conception de tunnel, tests créatifs et optimisation du taux de conversion, réunis en un seul système — car la publicité seule ne suffit pas à créer de la croissance.",
      ar: "استراتيجية الحملات، وتصميم مسار التحويل، واختبار المحتوى الإعلاني، وتحسين معدلات التحويل، كلها تعمل كمنظومة واحدة، لأن الإعلانات وحدها لا تصنع النمو.",
    },
    problem: {
      en: "Campaigns that perform well but with no clear path to scale them without hurting performance.",
      fr: "Des campagnes performantes mais sans stratégie claire pour les faire grandir sans nuire à leurs résultats.",
      ar: "حملات تحقق نتائج جيدة لكن دون معرفة واضحة بكيفية توسيعها دون التأثير سلبًا على الأداء.",
    },
    platforms: ["Meta", "Google", "TikTok"],
    deliverables: {
      en: [
        "Campaign & funnel strategy",
        "Creative testing roadmap",
        "Conversion rate optimization",
        "Scaling plan once a winning formula is found",
      ],
      fr: [
        "Stratégie de campagne et de tunnel",
        "Feuille de route des tests créatifs",
        "Optimisation du taux de conversion",
        "Plan de scaling une fois la formule gagnante trouvée",
      ],
      ar: [
        "استراتيجية الحملات ومسار التحويل",
        "خطة اختبار المحتوى الإعلاني",
        "تحسين معدلات التحويل",
        "خطة توسع بعد الوصول لصيغة رابحة",
      ],
    },
  },
  {
    slug: "tracking-analytics",
    icon: "LineChart",
    name: {
      en: "Tracking & Analytics",
      fr: "Suivi & Analytics",
      ar: "التتبع والتحليلات",
    },
    tagline: {
      en: "If it isn't tracked properly, it can't be optimized",
      fr: "Ce qui n'est pas correctement suivi ne peut pas être optimisé",
      ar: "ما لا يُتتبَّع بشكل صحيح، لا يمكن تحسينه",
    },
    description: {
      en: "GA4, Google Tag Manager, Meta Pixel and TikTok Pixel set up correctly so every campaign decision is backed by accurate data, not guesswork.",
      fr: "Configuration correcte de GA4, Google Tag Manager, Meta Pixel et TikTok Pixel afin que chaque décision de campagne repose sur des données fiables, et non sur des suppositions.",
      ar: "إعداد صحيح لأنظمة GA4 وGoogle Tag Manager وMeta Pixel وTikTok Pixel، بحيث يكون كل قرار في الحملة مبنيًا على بيانات دقيقة وليس على التخمين.",
    },
    problem: {
      en: "Changing audiences or creative over and over without knowing the real reason behind weak results.",
      fr: "Changer sans cesse d'audience ou de créations publicitaires sans connaître la vraie raison des faibles résultats.",
      ar: "الاستمرار في تغيير الجمهور أو المحتوى الإعلاني دون معرفة السبب الحقيقي وراء ضعف النتائج.",
    },
    platforms: ["Meta", "Google", "TikTok"],
    deliverables: {
      en: [
        "GA4 & Google Tag Manager setup",
        "Meta Pixel & TikTok Pixel implementation",
        "Conversion event mapping",
        "Ongoing data audits",
      ],
      fr: [
        "Configuration GA4 et Google Tag Manager",
        "Implémentation du Meta Pixel et du TikTok Pixel",
        "Cartographie des événements de conversion",
        "Audits de données réguliers",
      ],
      ar: [
        "إعداد GA4 وGoogle Tag Manager",
        "تركيب Meta Pixel وTikTok Pixel",
        "ضبط أحداث التحويل",
        "مراجعة دورية للبيانات",
      ],
    },
  },
  {
    slug: "marketing-strategy",
    icon: "Compass",
    name: {
      en: "Marketing Strategy",
      fr: "Stratégie marketing",
      ar: "الاستراتيجية التسويقية",
    },
    tagline: {
      en: "Audience, offer and competitive research before a single ad runs",
      fr: "Recherche sur l'audience, l'offre et la concurrence avant même de lancer une publicité",
      ar: "دراسة الجمهور والعرض والمنافسين قبل إطلاق أي إعلان",
    },
    description: {
      en: "Audience research, competitor analysis and offer strategy — the foundation that decides whether a campaign is set up to win before the budget is even spent.",
      fr: "Recherche d'audience, analyse concurrentielle et stratégie d'offre — les fondations qui déterminent si une campagne est armée pour réussir avant même que le budget ne soit dépensé.",
      ar: "دراسة الجمهور المستهدف وتحليل المنافسين وبناء استراتيجية العرض التسويقي، وهي الأساس الذي يحدد نجاح الحملة قبل إنفاق أي ميزانية.",
    },
    problem: {
      en: "No clear offer, no defined audience, and campaigns built on assumptions instead of research.",
      fr: "Aucune offre claire, aucune audience définie, et des campagnes bâties sur des suppositions plutôt que sur des recherches.",
      ar: "غياب عرض واضح، أو جمهور محدد، وبناء الحملات على افتراضات بدل دراسة فعلية.",
    },
    platforms: ["Meta", "Google", "TikTok"],
    deliverables: {
      en: [
        "Target audience research",
        "Competitor analysis",
        "Offer strategy",
        "Go-to-market recommendations",
      ],
      fr: [
        "Recherche sur l'audience cible",
        "Analyse de la concurrence",
        "Stratégie d'offre",
        "Recommandations de mise sur le marché",
      ],
      ar: [
        "دراسة الجمهور المستهدف",
        "تحليل المنافسين",
        "بناء استراتيجية العرض",
        "توصيات لإطلاق المنتج أو الخدمة في السوق",
      ],
    },
  },
];
