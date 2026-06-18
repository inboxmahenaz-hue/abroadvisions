export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  readingTime: string
  category: string
  keywords: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: "mbbs-in-kyrgyzstan-fees-2025",
    title: "MBBS in Kyrgyzstan Fees 2025–2026 — Complete Cost Breakdown for Indian Students",
    excerpt:
      "Total cost, university-wise fee tables, hostel charges, living expenses, and what nobody tells you about hidden costs. Real numbers, no fluff.",
    date: "2026-06-18",
    readingTime: "8 min read",
    category: "Country Guide",
    keywords: [
      "MBBS in Kyrgyzstan fees 2025",
      "MBBS in Kyrgyzstan fees 2026",
      "Kyrgyzstan MBBS fees in Indian rupees",
      "MBBS Kyrgyzstan total cost",
    ],
  },
  {
    slug: "fmge-pass-rates-by-country-2024",
    title: "FMGE Pass Rates by Country 2024–2025 — Which Countries Actually Produce Doctors Who Clear the Exam?",
    excerpt:
      "Official NBEMS data on FMGE pass rates for Russia, Georgia, Nepal, Uzbekistan, Kyrgyzstan, Philippines and more. The numbers most consultants don't show you.",
    date: "2026-06-18",
    readingTime: "10 min read",
    category: "FMGE Guide",
    keywords: [
      "FMGE pass rate by country 2024",
      "FMGE pass rate by country 2025",
      "FMGE pass percentage country wise",
      "which country has best FMGE pass rate",
      "FMGE pass rate Russia Georgia Nepal",
      "MBBS abroad FMGE results",
    ],
  },
  {
    slug: "mbbs-abroad-cost-comparison-2025",
    title: "MBBS Abroad Total Cost 2025–2026 — All 8 Countries Compared (Everything Included)",
    excerpt:
      "Complete all-inclusive cost breakdown for MBBS abroad in Kyrgyzstan, Uzbekistan, Russia, Georgia, Kazakhstan, Armenia, Bangladesh and Nepal. Real numbers — tuition, hostel, food, visa, and hidden costs.",
    date: "2026-06-18",
    readingTime: "12 min read",
    category: "Cost Guide",
    keywords: [
      "MBBS abroad total cost 2025",
      "MBBS abroad total cost 2026",
      "MBBS abroad fees all countries",
      "cheapest country for MBBS abroad Indian students",
      "MBBS abroad cost comparison 2025",
      "MBBS abroad fees in rupees 2025",
      "total cost of MBBS abroad including everything",
      "MBBS abroad vs private MBBS India cost",
    ],
  },
  {
    slug: "education-loan-mbbs-abroad-2025",
    title: "Education Loan for MBBS Abroad 2025–2026 — Which Banks, How Much, and How to Apply",
    excerpt:
      "SBI, Bank of Baroda, Canara Bank and more — complete guide to education loans for MBBS abroad. Loan amounts, interest rates, documents, repayment timeline, and government subsidies explained.",
    date: "2026-06-18",
    readingTime: "11 min read",
    category: "Finance Guide",
    keywords: [
      "education loan for MBBS abroad",
      "education loan for MBBS abroad 2026",
      "bank loan for MBBS abroad India",
      "SBI education loan MBBS abroad",
      "education loan for MBBS abroad without collateral",
      "MBBS abroad loan repayment",
      "which bank is best for education loan MBBS abroad",
      "education loan interest rate MBBS abroad 2025",
    ],
  },
  {
    slug: "is-mbbs-abroad-worth-it",
    title: "Is MBBS Abroad Worth It in 2025–2026? Honest Answer for Indian Families",
    excerpt:
      "The real cost comparison, FMGE truth, country-by-country verdict, and ROI calculation. For families deciding between MBBS abroad and private colleges in India.",
    date: "2026-06-18",
    readingTime: "12 min read",
    category: "Decision Guide",
    keywords: [
      "is MBBS abroad worth it",
      "is MBBS abroad worth it 2026",
      "MBBS abroad worth it 2025",
      "MBBS abroad vs private college India",
      "FMGE pass rate country wise",
      "MBBS abroad pros and cons",
      "is MBBS abroad recognised in India",
      "MBBS abroad for Indian students 2025",
    ],
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}
export function getAllPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
