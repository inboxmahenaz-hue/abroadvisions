export type Country = {
  slug: string
  name: string
  flag: string
  tagline: string
  badge: string
  badgeTone: "accent" | "success" | "neutral"
  fmge: string
  fmgeNote: string
  costMinL: number
  costMaxL: number
  duration: string
  language: string
  intake: string
  muslimFriendly: boolean
  highlights: string[]
  summary: string
}

export const countries: Country[] = [
  {
    slug: "nepal",
    name: "Nepal",
    flag: "🇳🇵",
    tagline: "Indian curriculum, Hindi friendly",
    badge: "Highest FMGE",
    badgeTone: "success",
    fmge: "71%",
    fmgeNote: "BP Koirala 2024",
    costMinL: 35,
    costMaxL: 45,
    duration: "5.5 years",
    language: "Hindi / Nepali / English",
    intake: "Once a year",
    muslimFriendly: false,
    highlights: [
      "Indian curriculum — easiest FMGE preparation",
      "BP Koirala: 71.43% FMGE pass rate in 2024",
      "Large Indian student community",
      "Hindi and Nepali language environment",
    ],
    summary:
      "Closest to home culturally and academically. The Indian-aligned curriculum makes FMGE preparation the most natural of any destination.",
  },
  {
    slug: "uzbekistan",
    name: "Uzbekistan",
    flag: "🇺🇿",
    tagline: "Muslim country, high FMGE",
    badge: "Best Value",
    badgeTone: "accent",
    fmge: "100%",
    fmgeNote: "Tashkent Medical Academy",
    costMinL: 28,
    costMaxL: 38,
    duration: "6 years",
    language: "English",
    intake: "Sep / Oct",
    muslimFriendly: true,
    highlights: [
      "Muslim-majority country — halal food everywhere",
      "Tashkent Medical Academy: 100% FMGE",
      "Affordable fees with strong academic standards",
      "Safe and stable country",
    ],
    summary:
      "Our top recommendation for families balancing budget with FMGE outcomes. Strong academics, halal food, and a welcoming environment.",
  },
  {
    slug: "georgia",
    name: "Georgia",
    flag: "🇬🇪",
    tagline: "European standard education",
    badge: "European Quality",
    badgeTone: "neutral",
    fmge: "63–80%",
    fmgeNote: "BAU International",
    costMinL: 35,
    costMaxL: 50,
    duration: "6 years",
    language: "English",
    intake: "Sep / Feb",
    muslimFriendly: false,
    highlights: [
      "European-quality education system",
      "BAU International: 63.29% FMGE 2024",
      "English medium teaching throughout",
      "Only private universities admitted from 2026",
    ],
    summary:
      "A European-standard pathway with English-medium instruction. Suited to families prioritising international education quality.",
  },
  {
    slug: "russia",
    name: "Russia",
    flag: "🇷🇺",
    tagline: "The most established route",
    badge: "Most Established",
    badgeTone: "neutral",
    fmge: "~30%",
    fmgeNote: "Varies by university",
    costMinL: 25,
    costMaxL: 35,
    duration: "6 years",
    language: "English / Russian",
    intake: "Sep",
    muslimFriendly: false,
    highlights: [
      "Perm State Medical: 100% in select batches",
      "Largest Indian MBBS community abroad",
      "Most affordable European destination",
      "Strong science-based curriculum",
    ],
    summary:
      "The longest-running MBBS abroad route with the largest Indian community. University choice matters enormously here — we steer you to top-performing institutions only.",
  },
  {
    slug: "kyrgyzstan",
    name: "Kyrgyzstan",
    flag: "🇰🇬",
    tagline: "The lowest budget option",
    badge: "Lowest Budget",
    badgeTone: "success",
    fmge: "39%",
    fmgeNote: "KRSU — highest in country",
    costMinL: 20,
    costMaxL: 28,
    duration: "6 years",
    language: "English",
    intake: "Sep",
    muslimFriendly: true,
    highlights: [
      "Most affordable MBBS abroad destination",
      "Muslim-majority country",
      "KRSU — highest FMGE rate in country at 39.66%",
      "Recommended for tight-budget families",
    ],
    summary:
      "The most affordable route available. Best suited to budget-conscious families who select a top-performing university like KRSU.",
  },
  {
    slug: "bangladesh",
    name: "Bangladesh",
    flag: "🇧🇩",
    tagline: "Two intakes per year",
    badge: "Flexible Intake",
    badgeTone: "neutral",
    fmge: "32%",
    fmgeNote: "Average across universities",
    costMinL: 30,
    costMaxL: 40,
    duration: "5 years",
    language: "English",
    intake: "Jan / Jul",
    muslimFriendly: true,
    highlights: [
      "January and July intakes — flexible timing",
      "Muslim-majority with halal food",
      "Bengali culture — familiar for many Indian families",
      "Shorter 5-year MBBS programme",
    ],
    summary:
      "Culturally familiar with two intakes a year and a shorter programme. A practical choice for families in eastern India.",
  },
  {
    slug: "armenia",
    name: "Armenia",
    flag: "🇦🇲",
    tagline: "Emerging destination",
    badge: "Emerging",
    badgeTone: "neutral",
    fmge: "Above avg.",
    fmgeNote: "Progress Medical University",
    costMinL: 28,
    costMaxL: 36,
    duration: "6 years",
    language: "English",
    intake: "Sep",
    muslimFriendly: false,
    highlights: [
      "Progress Medical University — above-average FMGE results",
      "Lower cost than Georgia with similar standards",
      "English medium instruction",
      "Growing Indian student presence",
    ],
    summary:
      "An emerging destination offering Georgia-like standards at a lower cost. Worth considering for value-focused families.",
  },
]

export type University = {
  name: string
  country: string
  flag: string
  city: string
  fmge: string
  feePerYearL: number
  established: string
  recognised: string[]
  tag: string
}

export const universities: University[] = [
  {
    name: "Tashkent Medical Academy",
    country: "Uzbekistan",
    flag: "🇺🇿",
    city: "Tashkent",
    fmge: "100%",
    feePerYearL: 4.5,
    established: "1919",
    recognised: ["NMC", "WHO", "ECFMG"],
    tag: "Top FMGE",
  },
  {
    name: "BP Koirala Institute",
    country: "Nepal",
    flag: "🇳🇵",
    city: "Dharan",
    fmge: "71%",
    feePerYearL: 7.5,
    established: "1993",
    recognised: ["NMC", "WHO"],
    tag: "Indian Curriculum",
  },
  {
    name: "Perm State Medical University",
    country: "Russia",
    flag: "🇷🇺",
    city: "Perm",
    fmge: "Up to 100%",
    feePerYearL: 4.2,
    established: "1916",
    recognised: ["NMC", "WHO", "ECFMG"],
    tag: "Established",
  },
  {
    name: "BAU International University",
    country: "Georgia",
    flag: "🇬🇪",
    city: "Batumi",
    fmge: "63%",
    feePerYearL: 6.5,
    established: "2017",
    recognised: ["NMC", "WHO"],
    tag: "European",
  },
  {
    name: "Kyrgyz-Russian Slavic University",
    country: "Kyrgyzstan",
    flag: "🇰🇬",
    city: "Bishkek",
    fmge: "39%",
    feePerYearL: 3.5,
    established: "1993",
    recognised: ["NMC", "WHO"],
    tag: "Lowest Fee",
  },
  {
    name: "Progress Medical University",
    country: "Armenia",
    flag: "🇦🇲",
    city: "Yerevan",
    fmge: "Above avg.",
    feePerYearL: 5,
    established: "2018",
    recognised: ["NMC", "WHO"],
    tag: "Emerging",
  },
  {
    name: "Samarkand State Medical University",
    country: "Uzbekistan",
    flag: "🇺🇿",
    city: "Samarkand",
    fmge: "High",
    feePerYearL: 4,
    established: "1930",
    recognised: ["NMC", "WHO"],
    tag: "Value",
  },
  {
    name: "Tbilisi State Medical University",
    country: "Georgia",
    flag: "🇬🇪",
    city: "Tbilisi",
    fmge: "Above avg.",
    feePerYearL: 7,
    established: "1918",
    recognised: ["NMC", "WHO"],
    tag: "Reputed",
  },
]

export const timeline = [
  {
    step: "01",
    title: "Free Counselling Call",
    body: "NEET score, budget, family priorities, location preference — we map the right options in one honest conversation.",
  },
  {
    step: "02",
    title: "University Shortlist",
    body: "FMGE data, fees, Indian community, hostel quality — a personalised comparison of 2–3 best-fit universities.",
  },
  {
    step: "03",
    title: "Application & Offer Letter",
    body: "Documents, application submission, offer letter procurement — handled completely on your behalf.",
  },
  {
    step: "04",
    title: "Visa & Pre-Departure",
    body: "Student visa assistance, packing guidance, forex tips, SIM cards, emergency contacts — ready for day one.",
  },
  {
    step: "05",
    title: "Arrival & Ongoing Support",
    body: "Airport coordination, hostel check-in, bank account — and continued support throughout the MBBS programme.",
  },
]

export const stories = [
  {
    name: "Aarav Sharma",
    parent: "Guided by parents in Jaipur",
    country: "Uzbekistan 🇺🇿",
    quote:
      "We thought a doctor in the family was impossible after NEET. Abroad Visions showed us the real FMGE numbers and helped us pick Tashkent. My son is now in his third year.",
    result: "Now in Year 3 · Tashkent Medical Academy",
  },
  {
    name: "Fatima Khan",
    parent: "Student, Hyderabad",
    country: "Kyrgyzstan 🇰🇬",
    quote:
      "Budget was our biggest worry. They never pushed an expensive option — they recommended KRSU honestly and explained every rupee. No hidden charges, ever.",
    result: "Year 2 · Kyrgyz-Russian Slavic University",
  },
  {
    name: "Rohan Verma",
    parent: "Guided by parents in Pune",
    country: "Georgia 🇬🇪",
    quote:
      "What stood out was that they refused to recommend Philippines even when we asked. They explained the NMC risk clearly. That honesty is why we trusted them.",
    result: "Year 1 · BAU International University",
  },
]

export const stats = [
  { value: "7+", label: "Countries" },
  { value: "30+", label: "Universities" },
  { value: "₹0", label: "Counselling Fee" },
  { value: "NMC", label: "Approved Only" },
]

// Contact details
export const contact = {
  phone: "9084676999",
  phone2: "7417799550",
  whatsapp: "919084676999",
  website: "abroadvisions.com",
  address: "Abroad Visions, Ajmal Khan Road, Najibabad, District Bijnor, Uttar Pradesh, India, PIN 246763",
}

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${contact.whatsapp}`
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}
