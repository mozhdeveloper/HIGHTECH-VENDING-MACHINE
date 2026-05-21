// =============================================================================
//  MOCK DATA — Swap out any of these arrays/objects with real backend data.
// =============================================================================

export const COMPANY = {
  name: "HIGHTECH VENDING MACHINE",
  tagline: "The Future of Automated Retail",
  phone: "+8618867805350",
  email: "sales@hightechvendingmachine.com",
  website: "www.hightechvendingmachine.com",
  address: "Room 1208, Building A, ZhongTech Innovation Park, Longhua District, Shenzhen, Guangdong Province, China 518109",
  whatsapp: "+8618867805350",
};

export const SOCIAL_LINKS = [
  { name: "Facebook", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "YouTube", href: "#" },
  { name: "X", href: "#" },
];

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Vending Solutions", href: "#products" },
  { label: "Smart Tech", href: "#tech" },
  { label: "News", href: "#news" },
  { label: "Contact Us", href: "#contact" },
];

// -----------------------------------------------------------------------------
// Core Expertise (Section 3)
// -----------------------------------------------------------------------------
export type Expertise = {
  icon: "Cpu" | "CreditCard" | "Settings2" | "CloudCog";
  title: string;
  description: string;
};

export const EXPERTISE: Expertise[] = [
  {
    icon: "Cpu",
    title: "Smart Vending Solutions",
    description:
      "AI-powered self-service machines for snacks, beverages, fresh meals, coffee, personal care, and specialty retail.",
  },
  {
    icon: "CreditCard",
    title: "Cashless Integration",
    description:
      "QR, NFC, card, e-wallet, and face-recognition payments — all unified in a single PCI-compliant terminal.",
  },
  {
    icon: "Settings2",
    title: "Custom Development (OEM/ODM)",
    description:
      "Fully tailored machine designs, branding, software, and franchise-ready commercial vending configurations.",
  },
  {
    icon: "CloudCog",
    title: "Cloud Management",
    description:
      "Real-time sales analytics, inventory tracking, remote diagnostics, and multi-machine fleet control from one dashboard.",
  },
];

// -----------------------------------------------------------------------------
// Product Showcase (Section 4)
// -----------------------------------------------------------------------------
export type PaymentCategory = {
  category: string;
  methods: string;
};

export type ProductModalData = {
  image: string;           // path under /images/
  model: string;
  dimensions: string;
  packedSize: string;
  voltage: string;
  ambientPower: string;
  coolingPower: string;
  heatingPower: string;
  weight: string;
  temperature: string;
  refrigerant: string;
  features: string[];
  paymentCategories: PaymentCategory[];
};

export type Product = {
  id: string;
  tag: "Hot Sell" | "New" | "Flagship" | "Eco";
  title: string;
  image: string;           // card-level product photo path
  imagePlaceholder: string;
  specs: { capacity: string; screen: string; payment: string; cooling: string };
  modal: ProductModalData;
};

const STANDARD_PAYMENTS: PaymentCategory[] = [
  {
    category: "Cash Payment",
    methods: "Bill acceptor (USD · EUR · GBP · JPY · AED · MYR · SGD · CNY) + Coin acceptor",
  },
  {
    category: "Cashless Payment",
    methods: "Visa · Mastercard · Amex · Discover · UnionPay · JCB — Tap / Insert / Swipe",
  },
  {
    category: "Mobile Pay / QR Code",
    methods: "Apple Pay · Google Pay · Samsung Pay · Alipay · WeChat Pay · PayPal · GrabPay · ShopeePay · GCash · Touch 'n Go · Boost · PayNow · QR Ph",
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "hv-60s",
    tag: "Hot Sell",
    title: "Standard 60-Lane Snack & Beverage Machine",
    image: "/images/machine-standard.jpg",
    imagePlaceholder: "Snack Master 60",
    specs: {
      capacity: "300–600 items",
      screen: "15.6 inch touchscreen",
      payment: "Cash · QR · NFC · Card",
      cooling: "2°C – 12°C refrigerated",
    },
    modal: {
      image: "/images/machine-standard.jpg",
      model: "ZG-ZL-N60-S15.6",
      dimensions: "1237 × 830 × 1965 mm",
      packedSize: "1280 × 890 × 1980 mm",
      voltage: "100–240V / 50–60Hz",
      ambientPower: "40W",
      coolingPower: "460W",
      heatingPower: "500W (optional)",
      weight: "208 kg (pre-packed 212 kg)",
      temperature: "2°C – 12°C (adjustable)",
      refrigerant: "R290 (Eco Friendly)",
      features: [
        "60 spring slots — conveyor / push slots selectable, adjustable slot size",
        "Goods-dispensing detection with immediate fault alert",
        "Integrated double-insulated explosion-proof LOW-E glass",
        "Thickened galvanised anti-rust steel body",
        "High-efficiency commercial compressor + tubular fan",
        "Heavy-load chassis with 360° mobile universal wheels",
        "Anti-theft security pickup port with reinforced lock",
        "Online monitoring system — real-time sales & data report",
      ],
      paymentCategories: STANDARD_PAYMENTS,
    },
  },
  {
    id: "hv-cool42",
    tag: "Flagship",
    title: "ChillDrink Pro — Refrigeration Beverage Tower",
    image: "/images/machine-refrigerated.jpg",
    imagePlaceholder: "ChillDrink Pro",
    specs: {
      capacity: "300–600 bottles/cans",
      screen: "21.5 inch HD touchscreen",
      payment: "Omnichannel cashless",
      cooling: "Dual-zone 2°C – 8°C",
    },
    modal: {
      image: "/images/machine-refrigerated.jpg",
      model: "ZG-ZL-N60-S21.5-REF",
      dimensions: "1237 × 830 × 1965 mm",
      packedSize: "1280 × 890 × 1980 mm",
      voltage: "100–240V / 50–60Hz",
      ambientPower: "40W",
      coolingPower: "460W",
      heatingPower: "500W (optional)",
      weight: "215 kg (pre-packed 220 kg)",
      temperature: "2°C – 8°C (dual-zone adjustable)",
      refrigerant: "R290 (Eco Friendly)",
      features: [
        "Dual independent cooling zones for beverages and snacks",
        "21.5-inch HD touchscreen interactive display",
        "Digital advertising display integration",
        "60 lanes with adjustable conveyor / push slots",
        "Smart temperature monitoring with remote alerts",
        "Energy-saving LED interior lighting",
        "Anti-theft reinforced pickup port",
        "GPRS / 4G / WiFi cloud management",
      ],
      paymentCategories: STANDARD_PAYMENTS,
    },
  },
  {
    id: "hv-fresh",
    tag: "New",
    title: "FreshLane Smart Locker Machine",
    image: "/images/machine-standard.jpg",
    imagePlaceholder: "FreshLane Locker",
    specs: {
      capacity: "36 smart lockers",
      screen: "32 inch portrait display",
      payment: "Biometric + Wallet",
      cooling: "Refrigerated lockers",
    },
    modal: {
      image: "/images/machine-standard.jpg",
      model: "ZG-FL-N36-S32",
      dimensions: "1200 × 800 × 1980 mm",
      packedSize: "1250 × 850 × 2000 mm",
      voltage: "100–240V / 50–60Hz",
      ambientPower: "50W",
      coolingPower: "480W",
      heatingPower: "N/A",
      weight: "195 kg (pre-packed 200 kg)",
      temperature: "2°C – 10°C per locker zone",
      refrigerant: "R290 (Eco Friendly)",
      features: [
        "36 individually controlled smart lockers",
        "32-inch portrait touchscreen with interactive UI",
        "Face-recognition payment compatibility",
        "QR code unlock + mobile wallet integration",
        "Remote locker assignment & inventory management",
        "Suitable for fresh meals, lunch boxes, pharmaceuticals",
        "Biometric + PIN fallback access",
        "Real-time locker occupancy dashboard",
      ],
      paymentCategories: STANDARD_PAYMENTS,
    },
  },
  {
    id: "hv-combo",
    tag: "Hot Sell",
    title: "Combo Snack & Drink Hybrid Machine",
    image: "/images/machine-capacity.jpg",
    imagePlaceholder: "Hybrid Combo 88",
    specs: {
      capacity: "300–880 items",
      screen: "21.5 inch touchscreen",
      payment: "Cash · QR · NFC · Card",
      cooling: "Cold zone + ambient",
    },
    modal: {
      image: "/images/machine-standard.jpg",
      model: "ZG-CB-N88-S21.5",
      dimensions: "1400 × 830 × 1965 mm",
      packedSize: "1450 × 890 × 1980 mm",
      voltage: "100–240V / 50–60Hz",
      ambientPower: "50W",
      coolingPower: "500W",
      heatingPower: "500W (optional)",
      weight: "230 kg (pre-packed 236 kg)",
      temperature: "Ambient + 2°C – 12°C cold zone",
      refrigerant: "R290 (Eco Friendly)",
      features: [
        "Dual-section: ambient snacks + refrigerated beverages",
        "80+ lane configuration with adjustable slot sizes",
        "21.5-inch touchscreen digital advertising display",
        "High-capacity commercial compressor",
        "Modular planogram — reconfigure product layout easily",
        "Smart detection: immediate fault notification",
        "Flexible slot widths for cans, bottles, bags, and boxes",
        "Remote cloud inventory management",
      ],
      paymentCategories: STANDARD_PAYMENTS,
    },
  },
  {
    id: "hv-coffee",
    tag: "Flagship",
    title: "Barista Bean-to-Cup Coffee Station",
    image: "/images/machine-standard.jpg",
    imagePlaceholder: "Barista BTC",
    specs: {
      capacity: "12 recipes / 800 cups",
      screen: "27 inch interactive UI",
      payment: "Cashless only",
      cooling: "Milk fridge integrated",
    },
    modal: {
      image: "/images/machine-standard.jpg",
      model: "ZG-CF-BTC-S27",
      dimensions: "800 × 750 × 1850 mm",
      packedSize: "860 × 800 × 1900 mm",
      voltage: "220–240V / 50Hz",
      ambientPower: "1800W",
      coolingPower: "150W (milk fridge)",
      heatingPower: "1800W (boiler)",
      weight: "165 kg (pre-packed 170 kg)",
      temperature: "Brewing 90–96°C · Milk 2°C – 6°C",
      refrigerant: "R134a",
      features: [
        "12 configurable coffee recipes with bean-to-cup freshness",
        "27-inch interactive touchscreen with full menu UI",
        "Integrated milk refrigeration module",
        "Cup & lid dispensing mechanism",
        "Fully automatic cleaning cycle",
        "Cashless-only design with NFC / QR / card",
        "Remote recipe management and stock monitoring",
        "Suitable for offices, hotels, and premium locations",
      ],
      paymentCategories: [
        {
          category: "Cashless Payment",
          methods: "Visa · Mastercard · Amex · UnionPay — Tap / Insert / Swipe",
        },
        {
          category: "Mobile Pay / QR Code",
          methods: "Apple Pay · Google Pay · Samsung Pay · Alipay · WeChat Pay · PayPal",
        },
      ],
    },
  },
  {
    id: "hv-eco",
    tag: "Eco",
    title: "EcoSmart Compact Outdoor Machine",
    image: "/images/machine-capacity.jpg",
    imagePlaceholder: "EcoSmart Outdoor",
    specs: {
      capacity: "300–320 items",
      screen: "15.6 inch sunlight-readable",
      payment: "Tap-to-pay · QR",
      cooling: "Energy Star certified",
    },
    modal: {
      image: "/images/machine-standard.jpg",
      model: "ZG-EC-N40-S15.6-OUT",
      dimensions: "900 × 700 × 1800 mm",
      packedSize: "950 × 750 × 1850 mm",
      voltage: "100–240V / 50–60Hz",
      ambientPower: "28W",
      coolingPower: "280W",
      heatingPower: "N/A",
      weight: "140 kg (pre-packed 145 kg)",
      temperature: "Operating -10°C – 45°C outdoor range",
      refrigerant: "R290 (Eco Friendly)",
      features: [
        "IP54-rated outdoor weatherproof enclosure",
        "Sunlight-readable 15.6-inch display (1000 nit)",
        "Operates in -10°C to 45°C ambient temperatures",
        "Anti-vandal reinforced glass and steel shell",
        "Heated door lock mechanism for cold climates",
        "40% lower energy use than standard indoor units",
        "Intelligent sleep mode with motion-sensor wake",
        "Energy Star certified — eco-friendly R290 refrigerant",
      ],
      paymentCategories: STANDARD_PAYMENTS,
    },
  },
];

// -----------------------------------------------------------------------------
// Smart Tech Highlights (Section 5)
// -----------------------------------------------------------------------------
export const TECH_FEATURES = [
  {
    icon: "Smartphone",
    title: "Omnichannel Cashless Payments",
    description:
      "QR, NFC, cards, Apple Pay, Google Pay, Alipay, WeChat Pay, and e-wallets — all in one PCI-compliant terminal.",
  },
  {
    icon: "ScanFace",
    title: "Face Recognition Payment",
    description:
      "Biometric face-scan payment compatibility for fast, contactless, ID-verified transactions at the machine.",
  },
  {
    icon: "Radio",
    title: "GPRS / 4G / WiFi Cloud Monitoring",
    description:
      "Live inventory, temperature, sales, and machine-health telemetry with remote alerts via GPRS, 4G, or WiFi.",
  },
  {
    icon: "Thermometer",
    title: "Smart Temperature Control",
    description:
      "Intelligent cooling and heating zones with remote temperature adjustment and automated anomaly detection.",
  },
  {
    icon: "Bot",
    title: "AI Customer Interaction & Advertising",
    description:
      "Personalised recommendations, multilingual UI, digital advertising display integration, and on-device AI upselling.",
  },
];

export const DASHBOARD_METRICS = [
  { label: "Today's Revenue", value: "$12,480", trend: "+18.4%" },
  { label: "Units Sold", value: "1,284", trend: "+9.1%" },
  { label: "Active Machines", value: "247 / 250", trend: "98.8%" },
  { label: "Avg. Restock Time", value: "6h 12m", trend: "-12%" },
];

export const DASHBOARD_BARS = [42, 58, 36, 72, 65, 81, 60, 74, 88, 70, 92, 84];

// -----------------------------------------------------------------------------
// Company Philosophy (Section 6)
// -----------------------------------------------------------------------------
export const PHILOSOPHY_VALUES = [
  {
    icon: "Factory",
    title: "High Manufacturing Standards",
    description:
      "ISO-certified production lines with rigorous QA on every component, ensuring durable, premium-quality machines.",
  },
  {
    icon: "Leaf",
    title: "Energy-Efficient & Reliable",
    description:
      "Low-power smart systems with intelligent sleep modes, LED lighting, and continuous performance optimisation.",
  },
  {
    icon: "Headset",
    title: "Strong After-Sales Support",
    description:
      "Remote diagnostics, on-site engineer dispatch, and a dedicated support team committed to your business success.",
  },
];

// -----------------------------------------------------------------------------
// Industries (Section 7)
// -----------------------------------------------------------------------------
export const INDUSTRIES = [
  { icon: "GraduationCap", label: "Schools & Universities" },
  { icon: "Plane", label: "Airports & Terminals" },
  { icon: "Hospital", label: "Hospitals & Clinics" },
  { icon: "Building2", label: "Office Buildings" },
  { icon: "ShoppingBag", label: "Shopping Malls" },
  { icon: "Home", label: "Condominiums" },
  { icon: "Warehouse", label: "Factories & Warehouses" },
  { icon: "BedDouble", label: "Hotels & Tourism" },
  { icon: "Dumbbell", label: "Gyms & Fitness" },
  { icon: "Landmark", label: "Government Facilities" },
];

// -----------------------------------------------------------------------------
// About Section Text (Section 6)
// -----------------------------------------------------------------------------
export const ABOUT_TEXT = {
  headline: "Built to power the future of smart self-service retail",
  description:
    "HIGHTECH VENDING MACHINE is a modern vending technology company focused on intelligent self-service retail solutions for businesses, institutions, and public spaces. We combine advanced hardware, smart payment systems, remote monitoring, and modern automation to create convenient and efficient retail experiences.",
  vision:
    "To become a leading smart vending technology brand by providing intelligent retail automation solutions that improve convenience, efficiency, and customer experience worldwide.",
  mission:
    "To help businesses grow through innovative vending technology, modern automation, and smart self-service retail systems.",
  facility: {
    title: "Smart Manufacturing Facility",
    subtitle: "Shenzhen, China · Precision-engineered for global markets",
  },
};

// -----------------------------------------------------------------------------
// News & FAQ (Section 9)
// -----------------------------------------------------------------------------
export const NEWS_ARTICLES = [
  {
    date: "May 12, 2026",
    title: "HIGHTECH unveils next-gen AI vending platform at RetailCon",
    href: "#",
  },
  {
    date: "Apr 28, 2026",
    title: "New EcoSmart Outdoor line achieves Energy Star certification",
    href: "#",
  },
  {
    date: "Apr 04, 2026",
    title: "Case study: 38% revenue lift across 120 campus deployments",
    href: "#",
  },
  {
    date: "Mar 17, 2026",
    title: "Now supporting Apple Tap to Pay and Google Wallet on iOS/Android",
    href: "#",
  },
];

export const FAQS = [
  {
    question: "How much electricity does a typical machine consume?",
    answer:
      "Our standard snack units average 1.2 kWh/day, while refrigerated models average 3.5 kWh/day. EcoSmart series can cut this by up to 40% through intelligent sleep modes and LED lighting.",
  },
  {
    question: "Are the machines weatherproof for outdoor installation?",
    answer:
      "Yes — the EcoSmart Outdoor series is rated IP54, withstands -10°C to 45°C, and includes sunlight-readable displays, anti-vandal glass, and heated locks for cold climates.",
  },
  {
    question: "Which digital wallets and payment methods are supported?",
    answer:
      "All major options: QR (WeChat, Alipay, PayNow), NFC (Apple Pay, Google Pay, Samsung Pay), contactless cards (Visa, Mastercard, Amex), and regional schemes via configurable payment modules.",
  },
  {
    question: "Can the software be customized to our brand and workflow?",
    answer:
      "Absolutely. Our OEM/ODM program covers UI theming, custom planogram logic, ERP/POS integrations, and white-labelled mobile companion apps tailored to your operations.",
  },
];
