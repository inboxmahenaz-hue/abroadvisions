import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getPostBySlug, blogPosts } from "@/lib/blog"
import { Navbar } from "@/components/navbar"
import { SiteFooter } from "@/components/site-footer"
import { Clock, Tag, ArrowLeft } from "lucide-react"
import Link from "next/link"

// Dynamically import post components
import { MbbsKyrgyzstanFees2025 } from "@/components/blog/posts/mbbs-kyrgyzstan-fees-2025"

const postComponents: Record<string, React.ComponentType> = {
  "mbbs-in-kyrgyzstan-fees-2025": MbbsKyrgyzstanFees2025,
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
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

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const PostContent = postComponents[params.slug]
  if (!PostContent) notFound()

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-3xl px-4 pb-24 pt-32">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
          >
            <ArrowLeft className="size-4" />
            All guides
          </Link>

          {/* Post header */}
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

          {/* Post content */}
          <PostContent />
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
