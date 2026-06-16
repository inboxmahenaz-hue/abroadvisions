import type { Metadata } from "next"
import Link from "next/link"
import { blogPosts } from "@/lib/blog"
import { Navbar } from "@/components/navbar"
import { SiteFooter } from "@/components/site-footer"
import { ArrowUpRight, Clock, Tag } from "lucide-react"

export const metadata: Metadata = {
  title: "MBBS Abroad Blog — Honest Guides for Indian Students | Abroad Visions",
  description:
    "Fee breakdowns, FMGE data, country comparisons, and loan guides for Indian students planning MBBS abroad. Written by counsellors who track real outcomes.",
  alternates: {
    canonical: "https://abroadvisions.com/blog",
  },
}

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-4xl px-4 pb-24 pt-32">
          {/* Header */}
          <div className="mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              Abroad Visions Blog
            </span>
            <h1 className="mt-3 font-display text-4xl font-semibold text-foreground sm:text-5xl">
              Honest guides for MBBS abroad.
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              Fee breakdowns, FMGE data, country comparisons — written by counsellors who
              track real student outcomes, not commission rates.
            </p>
          </div>

          {/* Post list */}
          <div className="space-y-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_12px_30px_-12px_rgb(0,0,0,0.15)]"
              >
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
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

                <h2 className="mt-3 font-display text-xl font-semibold text-foreground leading-snug group-hover:text-accent transition-colors">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>

                <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                  Read guide
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            ))}
          </div>

          {/* Coming soon */}
          <div className="mt-10 rounded-2xl border border-dashed border-border bg-secondary/40 p-6 text-center">
            <p className="text-sm text-muted-foreground">
              More guides coming soon —{" "}
              <span className="font-medium text-foreground">
                FMGE country data, education loans, Russia vs Kyrgyzstan comparison
              </span>
              {" "}and more.
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
