// lib/data.ts
// Single source of truth for Abroad Visions homepage components.
//
// COST RANGES — reconciled June 14, 2026 (Session 7) across three sources:
//   1. Internal enriched_data.json (219 verified channel-partner entries)
//   2. Independent AI market research (CareerMarg, LeapScholar, Careers360 — June 2026)
//   3. Our own MBBS Abroad Guide PDF (already distributed to leads)
// Where sources disagreed, ranges were widened/adjusted to stay defensible
// against all three. Nepal in particular is HIGHER than our PDF guide states
// (₹50–70L vs ₹35–45L) — confirmed against a real BPKIHS entry showing a
// $70,000 total programme cost. PDF guide should be updated to match.

export type Country = {
  slug: string
  name: string
  flag: string
  tagline: string
  badge: string
  badgeTone: "accent" | "success" | "neutral"
  costMinL: number
  costMaxL: number
  duration: string
  language: string
  intake: string
  highlights: string[]
  summary: string
  filterTags: Array<"budget" | "established" | "clinical">
}

export const countries: Country[] = [
  {
    slug: "kyrgyzstan",
    name: "Kyrgyzstan",
    flag: "🇰🇬",
    tagline: "The most affordable entry into NMC-approved medicine",
    badge: "Budget Friendly",
    badgeTone: "success",
    costMinL: 18,
    costMaxL: 28,
    duration: "6 years",
    language: "English",
    intake: "Aug / Sep",
    filterTags: ["budget"],
    highlights: [
      "Most affordable NMC-approved destination available",
      "Halal food and Indian community in major university cities",
      "Select universities have strong NExT preparation focus",
    ],
    summary:
      "The right choice for budget-conscious families who refuse to compromise on NMC approval. University selection matters here more than anywhere — we shortlist only proven institutions.",
  },
  {
    slug: "uzbekistan",
    name: "Uzbekistan",
    flag: "🇺🇿",
    tagline: "Best value for quality education",
    badge: "Best Value",
    badgeTone: "accent",
    costMinL: 20,
    costMaxL: 30,
    duration: "6 years",
    language: "English",
    intake: "Sep / Oct",
    filterTags: ["budget", "established"],
    highlights: [
      "Among the most affordable NMC-approved destinations",
      "Halal food and Indian restaurants widely available",
      "Safe, stable country with a growing Indian student presence",
    ],
    summary:
      "Our most recommended destination for families balancing cost with academic quality. Strong infrastructure, English-medium teaching, and a welcoming environment for Indian students.",
  },
  {
    slug: "kazakhstan",
    name: "Kazakhstan",
    flag: "🇰🇿",
    tagline: "Strong clinical training, modern campuses",
    badge: "Strong Clinicals",
    badgeTone: "neutral",
    costMinL: 25,
    costMaxL: 38,
    duration: "5 years + 1 yr internship",
    language: "English",
    intake: "Jun / Sep",
    filterTags: ["established", "clinical"],
    highlights: [
      "Modern university infrastructure with well-equipped teaching hospitals",
      "Two intake windows — June and September",
      "Halal food widely available throughout the country",
    ],
    summary:
      "An increasingly popular destination combining solid infrastructure with strong clinical exposure. Two intake windows give families flexibility in planning.",
  },
  {
    slug: "russia",
    name: "Russia",
    flag: "🇷🇺",
    tagline: "The longest-established route abroad",
    badge: "Most Established",
    badgeTone: "neutral",
    costMinL: 22,
    costMaxL: 38,
    duration: "6 years",
    language: "English",
    intake: "Sep",
    filterTags: ["established", "clinical"],
    highlights: [
      "Largest Indian MBBS community of any destination abroad",
      "Strong science-based curriculum across top universities",
      "Wide range of universities at different price points",
    ],
    summary:
      "The most established MBBS abroad route with decades of Indian graduates. University selection is critical here — we guide families only to institutions with strong NExT preparation track records.",
  },
  {
    slug: "armenia",
    name: "Armenia",
    flag: "🇦🇲",
    tagline: "European standards, lower cost than Georgia",
    badge: "Hidden Gem",
    badgeTone: "neutral",
    costMinL: 22,
    costMaxL: 30,
    duration: "6 years",
    language: "English",
    intake: "Sep / Oct",
    filterTags: ["budget", "clinical"],
    highlights: [
      "European academic standards at fees below Georgia",
      "Progress Medical University — own hospital for clinical training",
      "Small batches mean more individual attention for students",
    ],
    summary:
      "A compact, focused destination for families who want Georgia-level academic standards without Georgia-level fees. Progress Medical University is the primary institution we work with here.",
  },
  {
    slug: "georgia",
    name: "Georgia",
    flag: "🇬🇪",
    tagline: "European standard, English medium",
    badge: "Fastest Growing",
    badgeTone: "neutral",
    costMinL: 28,
    costMaxL: 42,
    duration: "6 years",
    language: "English",
    intake: "Sep / Feb",
    filterTags: ["established", "clinical"],
    highlights: [
      "European academic framework with English-medium instruction",
      "Two intakes per year — September and February",
      "One of the safest countries in Europe by crime statistics",
    ],
    summary:
      "A premium pathway for families prioritising international education standards. Georgia offers a European academic environment with strong clinical exposure and excellent safety records.",
  },
  {
    slug: "bangladesh",
    name: "Bangladesh",
    flag: "🇧🇩",
    tagline: "Flexible intakes, familiar culture",
    badge: "Closest to Home",
    badgeTone: "neutral",
    costMinL: 30,
    costMaxL: 45,
    duration: "5 years + 1 yr internship",
    language: "English",
    intake: "Jan / Jul",
    filterTags: ["established"],
    highlights: [
      "Two intakes per year — January and July",
      "5-year programme, shorter than most other destinations",
      "Halal food widely available, culturally familiar environment",
    ],
    summary:
      "A practical option for families in eastern and northern India seeking cultural familiarity. Two intakes give flexibility if a student misses one admission cycle.",
  },
  {
    slug: "nepal",
    name: "Nepal",
    flag: "🇳🇵",
    tagline: "Indian curriculum, familiar culture",
    badge: "Indian Syllabus",
    badgeTone: "neutral",
    costMinL: 50,
    costMaxL: 70,
    duration: "5.5 years (incl. internship)",
    language: "English",
    intake: "Aug / Sep",
    filterTags: ["established", "clinical"],
    highlights: [
      "Indian-aligned curriculum — smoothest NExT preparation",
      "Hindi-speaking environment, easy family communication",
      "Established Indian student community across well-known institutes",
    ],
    summary:
      "Culturally and academically the closest option to studying in India. Total costs at reputed institutes like BPKIHS run higher than other destinations, reflecting their academic standing and infrastructure.",
  },
]

// ─── Photo base
export const PHOTO_BASE = "https://studyabroadsystem.com/storage/"

export type FeaturedUniversity = {
  id: number
  name: string
  shortName: string
  country: string
  flag: string
  city: string
  logo: string
  established: string
}

export const featuredUniversities: FeaturedUniversity[] = [
  // Russia
  {
    id: 224,
    name: "Kazan Federal University",
    shortName: "Kazan Federal",
    country: "Russia",
    flag: "🇷🇺",
    city: "Kazan",
    logo: "logos/sCgjMYtfT2zNczNGwBAI4u6UEErAiLnw1jT5sztG.jpg",
    established: "1804",
  },
  {
    id: 43,
    name: "Kazan State Medical University",
    shortName: "KSMU Kazan",
    country: "Russia",
    flag: "🇷🇺",
    city: "Kazan",
    logo: "logos/pWjwDyDktw5usreZ2VZV1r3XuHbJIVEV78ymHpPf.jpg",
    established: "1814",
  },
  {
    id: 61,
    name: "Perm State Medical University",
    shortName: "Perm State Medical",
    country: "Russia",
    flag: "🇷🇺",
    city: "Perm",
    logo: "logos/7Pr7GhBsTRyh5wrTuBwqKpIPraYoTqYH6TwyCoKA.png",
    established: "1916",
  },
  {
    id: 33,
    name: "Volgograd State Medical University",
    shortName: "Volgograd SMU",
    country: "Russia",
    flag: "🇷🇺",
    city: "Volgograd",
    logo: "logos/HFPxAIm22qPYMlE2TYg4gblJ26g5oGovJGmJIUVe.jpg",
    established: "1935",
  },
  {
    id: 88,
    name: "Orenburg State Medical University",
    shortName: "Orenburg SMU",
    country: "Russia",
    flag: "🇷🇺",
    city: "Orenburg",
    logo: "logos/4GAtEhGvl0WPXIz5KdG5Fmw1amLz1d7VNvMXhKCO.jpg",
    established: "1944",
  },
  // Uzbekistan
  {
    id: 71,
    name: "Tashkent State Medical University",
    shortName: "Tashkent SMU",
    country: "Uzbekistan",
    flag: "🇺🇿",
    city: "Tashkent",
    logo: "logos/fFxceQNILjHDk4uRT1J8Eqwbl56NE909MYUxivvg.jpg",
    established: "1919",
  },
  {
    id: 69,
    name: "Samarkand State Medical University",
    shortName: "Samarkand SMU",
    country: "Uzbekistan",
    flag: "🇺🇿",
    city: "Samarkand",
    logo: "logos/VjgA7T8gQWVd844Vayy8B2CZvs4oZzX8fj8u7xUU.jpg",
    established: "1930",
  },
  // Georgia
  {
    id: 73,
    name: "University of Georgia",
    shortName: "Univ. of Georgia",
    country: "Georgia",
    flag: "🇬🇪",
    city: "Tbilisi",
    logo: "logos/gzPLZrGHTgazxvHLBDC2hzZFZZL2aU1v9MaMXg38.jpg",
    established: "2004",
  },
  {
    id: 105,
    name: "David Tvildiani Medical University",
    shortName: "DTMU",
    country: "Georgia",
    flag: "🇬🇪",
    city: "Tbilisi",
    logo: "logos/XoGv1yqUdej13tytcJ3cgGj2c1nuLFkPaLV2kG4s.jpg",
    established: "1992",
  },
  {
    id: 221,
    name: "Tbilisi State Medical University",
    shortName: "Tbilisi State",
    country: "Georgia",
    flag: "🇬🇪",
    city: "Tbilisi",
    logo: "logos/rfnRUZRIZxhXhWaeD2F6faiLMfQQ9nw4Yv5jZZu1.jpg",
    established: "1918",
  },
  {
    id: 75,
    name: "Georgian National University SEU",
    shortName: "SEU Georgia",
    country: "Georgia",
    flag: "🇬🇪",
    city: "Tbilisi",
    logo: "logos/xfoWGvtk48smnMClAUvz7QnCUpDSTedC0OswpMoU.jpg",
    established: "2001",
  },
  // Kazakhstan
  {
    id: 115,
    name: "Kazakh National Medical University",
    shortName: "KazNMU",
    country: "Kazakhstan",
    flag: "🇰🇿",
    city: "Almaty",
    logo: "logos/QJ02KvfpxREpuuhTfLt2S2V95u573gzZeeXtrXai.jpg",
    established: "1930",
  },
  {
    id: 113,
    name: "West Kazakhstan State Medical University",
    shortName: "WKSMU",
    country: "Kazakhstan",
    flag: "🇰🇿",
    city: "Aktobe",
    logo: "logos/QkbqN2CQhoECv3731zQ9drLwqfwKrqz3zaLokNA3.jpg",
    established: "1957",
  },
  // Kyrgyzstan
  {
    id: 92,
    name: "Osh State Medical University",
    shortName: "Osh State Medical",
    country: "Kyrgyzstan",
    flag: "🇰🇬",
    city: "Osh",
    logo: "logos/XLaBe7kgZ2EsktrrlXaRORxvbQXDg1aqYAda8Go7.jpg",
    established: "1996",
  },
  {
    id: 112,
    name: "Asian Medical Institute",
    shortName: "ASMI",
    country: "Kyrgyzstan",
    flag: "🇰🇬",
    city: "Kant",
    logo: "logos/kBcnjEszZWDUBDzrL73RALx2TUz8vP39mRykekld.jpg",
    established: "2002",
  },
  // Armenia
  {
    id: 63,
    name: "Progress Medical University",
    shortName: "Progress Medical",
    country: "Armenia",
    flag: "🇦🇲",
    city: "Yerevan",
    logo: "logos/IzowDHqVhn7lT5kBhFrxx8Mq4zilnoFTgUo67OGR.jpg",
    established: "2014",
  },
  // Nepal
  {
    id: 208,
    name: "Manipal College of Medical Sciences",
    shortName: "Manipal Nepal",
    country: "Nepal",
    flag: "🇳🇵",
    city: "Pokhara",
    logo: "logos/rCYw1Jdq8XE6wsVphxQy7YLzTVV4P8YEWcgzQLl6.jpg",
    established: "1994",
  },
  {
    id: 241,
    name: "Nobel Medical College",
    shortName: "Nobel Medical",
    country: "Nepal",
    flag: "🇳🇵",
    city: "Biratnagar",
    logo: "logos/I0jozFNRCPWV8Ms3TR7wOvVhykb4ziUneHhYFaw7.png",
    established: "2004",
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
    body: "NMC approval, fees, Indian community, hostel quality — a personalised comparison of 2 to 3 best-fit universities.",
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
      "We thought a doctor in the family was impossible after NEET. Abroad Visions showed us the real numbers and helped us pick Tashkent. My son is now in his third year.",
    result: "Now in Year 3 · Tashkent Medical University",
  },
  {
    name: "Fatima Khan",
    parent: "Student, Hyderabad",
    country: "Kyrgyzstan 🇰🇬",
    quote:
      "Budget was our biggest worry. They never pushed an expensive option — they recommended honestly and explained every rupee. No hidden charges, ever.",
    result: "Year 2 · Osh State Medical University",
  },
  {
    name: "Rohan Verma",
    parent: "Guided by parents in Pune",
    country: "Georgia 🇬🇪",
    quote:
      "What stood out was that they refused to recommend certain options even when we asked. They explained the risks clearly. That honesty is why we trusted them.",
    result: "Year 1 · David Tvildiani Medical University",
  },
]

export const stats = [
  { value: "8", label: "Countries" },
  { value: "200+", label: "Universities" },
  { value: "₹0", label: "Counselling Fee" },
  { value: "NMC", label: "Approved Only" },
]

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
