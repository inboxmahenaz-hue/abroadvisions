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
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}
