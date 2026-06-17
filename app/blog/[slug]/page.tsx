import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getPostBySlug } from "@/lib/blog"
import { Navbar } from "@/components/navbar"
import { SiteFooter } from "@/components/site-footer"
import { Clock, Tag, ArrowLeft } from "lucide-react"
import Link from "next/link"
export const dynamic = 'force-dynamic'
import { MbbsKyrgyzstanFees2025 } from "@/components/blog/posts/mbbs-kyrgyzstan-fees-2025"
import { FmgePassRatesCountry2024 } from "@/components/blog/posts/fmge-pass-rates-country-2024"
import { MbbsAbroadCostComparison2025 } from "@/components/blog/posts/mbbs-abroad-cost-comparison-2025"
import { EducationLoanMbbsAbroad2025 } from "@/components/blog/posts/education-loan-mbbs-abroad-2025"
import { IsMbbsAbroadWorthIt2025 } from "@/components/blog/posts/is-mbbs-abroad-worth-it"

const postComponents: Record<string, React.ComponentType> = {
  "mbbs-in-kyrgyzstan-fees-2025": MbbsKyrgyzstanFees2025,
  "fmge-pass-rates-by-country-2024": FmgePassRatesCountry2024,
  "mbbs-abroad-cost-comparison-2025": MbbsAbroadCostComparison2025,
  "education-loan-mbbs-abroad-2025": EducationLoanMbbsAbroad2025,
  "is-mbbs-abroad-worth-it": IsMbbsAbroadWorthIt2025,
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  return {
    title: `${post.title} | Abroad Visions`,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: {
      canonical: `https://abroadvisions.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://abroadvisions.com/blog/${post.slug}`,
      siteName: "Abroad Visions",
      type: "article",
      publishedTime: post.date,
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const PostContent = postComponents[slug]
  if (!PostContent) notFound()

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-3xl px-4 pb-24 pt-32">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
          >
            <ArrowLeft className="size-4" />
            All guides
          </Link>

          <div className="mt-8">
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-2.5 py-1 font-medium text-accent">
                <Tag className="size-3" />
                {post.category}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="size-3" />
                {post.readingTime}
              </span>
              <span>
                {new Date(post.date).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>

            <h1 className="mt-4 font-display text-3xl font-semibold leading-snug text-foreground sm:text-4xl">
              {post.title}
            </h1>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              {post.excerpt}
            </p>

            <div className="mt-4 flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
                AV
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Abroad Visions Team</p>
                <p className="text-xs text-muted-foreground">MBBS Abroad Counsellors, Dehradun</p>
              </div>
            </div>
          </div>

          <hr className="my-8 border-border" />

          <PostContent />
        </div>
      </main>
      <SiteFooter />
    </>
  )
}