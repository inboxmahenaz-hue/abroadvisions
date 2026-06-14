"use client"

import { useState } from "react"
import { ArrowUpRight, Clock, Languages, CalendarDays } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { countries, type Country } from "@/lib/data"
import { cn } from "@/lib/utils"

type Filter = "all" | "budget" | "established" | "clinical"

const filters: { key: Filter; label: string }[] = [
  { key: "all",         label: "All destinations" },
  { key: "budget",      label: "Lowest budget" },
  { key: "established", label: "Established routes" },
  { key: "clinical",    label: "Strong clinical" },
]

const toneStyles: Record<Country["badgeTone"], string> = {
  accent:  "bg-accent/10 text-accent",
  success: "bg-success/15 text-success",
  neutral: "bg-secondary text-secondary-foreground",
}

function matches(c: Country, f: Filter) {
  if (f === "all") return true
  return c.filterTags.includes(f)
}

export function CountryExplorer() {
  const [filter, setFilter] = useState<Filter>("all")
  const list = countries.filter((c) => matches(c, filter))

  return (
    <section id="countries" className="relative bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">

        {/* Header row */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Country Explorer"
            title={
              <>
                Eight countries.{" "}
                <span className="text-accent">One right choice</span> for your family.
              </>
            }
            description="Each destination suits a different priority — budget, academic standard, cultural comfort, or clinical exposure. Compare and find what fits your child."
          />

          {/* Filter pills */}
          <Reveal delay={120} className="flex flex-wrap gap-2 lg:shrink-0">
            {filters.map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => setFilter(f.key)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-all",
                  filter === f.key
                    ? "border-accent bg-accent text-accent-foreground"
                    : "border-border bg-card text-muted-foreground hover:text-foreground",
                )}
              >
                {f.label}
              </button>
            ))}
          </Reveal>
        </div>

        {/* Cards grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 4) * 60}>
              <article className="group flex h-full flex-col rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-[0_24px_50px_-24px_rgb(0,0,0,0.22)]">

                {/* Flag + badge */}
                <div className="flex items-start justify-between">
                  <span className="text-4xl leading-none" aria-hidden="true">
                    {c.flag}
                  </span>
                  <span className={cn("rounded-full px-2.5 py-1 text-[11px] font-semibold", toneStyles[c.badgeTone])}>
                    {c.badge}
                  </span>
                </div>

                {/* Name + tagline */}
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground leading-snug">
                  {c.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  {c.tagline}
                </p>

                {/* Cost range — only real data, no FMGE */}
                <div className="mt-5 rounded-2xl bg-secondary/70 px-4 py-3.5">
                  <p className="font-display text-xl font-semibold text-foreground tracking-tight">
                    ₹{c.costMinL}–{c.costMaxL}L
                  </p>
                  <p className="mt-0.5 text-[11px] text-muted-foreground">
                    Total programme cost
                  </p>
                </div>

                {/* Meta row */}
                <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1.5 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="size-3.5 shrink-0" />
                    {c.duration}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Languages className="size-3.5 shrink-0" />
                    {c.language}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="size-3.5 shrink-0" />
                    {c.intake}
                  </span>
                </div>

                {/* Spacer pushes CTA to bottom */}
                <div className="flex-1" />

                {/* CTA */}
                <a
                  href={`/mbbs-university-finder?country=${encodeURIComponent(c.name)}`}
                  className="mt-5 inline-flex items-center justify-center gap-1.5 rounded-xl border border-border bg-background py-2.5 text-sm font-semibold text-foreground transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground"
                >
                  Explore universities
                  <ArrowUpRight className="size-4" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Bottom note */}
        <Reveal delay={200}>
          <p className="mt-10 text-center text-sm text-muted-foreground">
            Not sure which country fits?{" "}
            <a
              href="https://wa.me/919084676999?text=Hi%20Abroad%20Visions%2C%20I%20need%20help%20choosing%20the%20right%20country%20for%20MBBS."
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent underline-offset-4 hover:underline"
            >
              Get a free personalised recommendation →
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
