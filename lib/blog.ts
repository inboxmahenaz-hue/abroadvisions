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
    title: "MBBS in Kyrgyzstan Fees 2025 — Complete Cost Breakdown for Indian Students",
    excerpt:
      "Total cost, university-wise fee tables, hostel charges, living expenses, and what nobody tells you about hidden costs. Real numbers, no fluff.",
    date: "2025-06-16",
    readingTime: "8 min read",
    category: "Country Guide",
    keywords: [
      "MBBS in Kyrgyzstan fees 2025",
      "Kyrgyzstan MBBS fees in Indian rupees",
      "MBBS Kyrgyzstan total cost",
    ],
  },
  {
    slug: "fmge-pass-rates-by-country-2024",
    title: "FMGE Pass Rates by Country 2024 — Which Countries Actually Produce Doctors Who Clear the Exam?",
    excerpt:
      "Official NBEMS data on FMGE pass rates for Russia, Georgia, Nepal, Uzbekistan, Kyrgyzstan, Philippines and more. The numbers most consultants don't show you.",
    date: "2026-06-17",
    readingTime: "10 min read",
    category: "FMGE Guide",
    keywords: [
      "FMGE pass rate by country 2024",
      "FMGE pass percentage country wise",
      "which country has best FMGE pass rate",
      "FMGE pass rate Russia Georgia Nepal",
      "MBBS abroad FMGE results",
    ],
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}
