import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { SiteFooter } from "@/components/site-footer"
import { getAllPosts } from "@/lib/blog"

export const metadata: Metadata = {
  title: "MBBS Abroad Blog — Fees, FMGE Data & Country Guides | Abroad Visions",
  description: "Honest, data-backed guides on MBBS abroad for Indian students. Country-wise fees, FMGE pass rates, education loans and more.",
  alternates: { canonical: "https://abroadvisions.com/blog" },
}

export default function BlogIndexPage() {
  const posts = getAllPosts()

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-3xl px-4 pb-24 pt-32">
          <h1 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
            MBBS Abroad — Guides & Insights
          </h1>
          <p className="mt-3 text-base text-muted-foreground">
            Honest, data-backed articles to help Indian families make the right decision.
          </p>

          <div className="mt-12 flex flex-col gap-10">
            {posts.map((post) => (
              <article key={post.slug} className="border-b border-border pb-10">
                <p className="text-xs text-muted-foreground mb-2">
                  {new Date(post.date).toLocaleDateString("en-IN", {
                    day: "numeric", month: "long", year: "numeric",
                  })}
                  {" · "}
                  {post.readingTime}
                </p>
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-xl font-semibold text-foreground hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                </Link>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-3 inline-block text-sm font-medium text-accent hover:underline"
                >
                  Read guide →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
