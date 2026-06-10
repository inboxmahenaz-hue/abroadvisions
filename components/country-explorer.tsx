"use client"

import { useState } from "react"
import { ArrowUpRight, Clock, Languages, CalendarDays, Check } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { countries, whatsappLink, type Country } from "@/lib/data"
import { cn } from "@/lib/utils"

type Filter = "all" | "budget" | "fmge" | "muslim"

const filters: { key: Filter; label: string }[] = [
  { key: "all", label: "All countries" },
  { key: "fmge", label: "Best FMGE" },
  { key: "budget", label: "Lowest budget" },
  { key: "muslim", label: "Muslim-friendly" },
]

const toneStyles: Record<Country["badgeTone"], string> = {
  accent: "bg-accent/10 text-accent",
  success: "bg-success/15 text-success",
  neutral: "bg-secondary text-secondary-foreground",
}

function matches(c: Country, f: Filter) {
  if (f === "all") return true
  if (f === "muslim") return c.muslimFriendly
  if (f === "budget") return c.costMinL <= 30
  if (f === "fmge") return ["nepal", "uzbekistan", "armenia"].includes(c.slug)
  return true
}

export function CountryExplorer() {
  const [filter, setFilter] = useState<Filter>("all")
  const list = countries.filter((c) => matches(c, filter))

  return (
    <section id="countries" className="relative bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Country Explorer"
            title={
              <>
                Seven countries. One{" "}
                <span className="text-accent">right choice</span> for your family.
              </>
            }
            description="Each destination suits a different priority — FMGE safety, budget, culture, language. Filter honestly and compare what is right for your child."
          />

          <Reveal delay={120} className="flex flex-wrap gap-2">
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

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 3) * 80}>
              <article className="group flex h-full flex-col rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-[0_24px_50px_-24px_rgb(0,0,0,0.25)]">
                <div className="flex items-start justify-between">
                  <span className="text-4xl" aria-hidden="true">
                    {c.flag}
                  </span>
                  <span
                    className={cn(
                      "rounded-full px-2.5 py-1 text-[11px] font-semibold",
                      toneStyles[c.badgeTone],
                    )}
                  >
                    {c.badge}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
                  {c.name}
                </h3>
                <p className="text-sm text-muted-foreground">{c.tagline}</p>

                <div className="mt-5 grid grid-cols-2 gap-3 rounded-2xl bg-secondary/60 p-4">
                  <div>
                    <p className="font-display text-lg font-semibold text-success">{c.fmge}</p>
                    <p className="text-[11px] text-muted-foreground">{c.fmgeNote}</p>
                  </div>
                  <div>
                    <p className="font-display text-lg font-semibold text-foreground">
                      ₹{c.costMinL}–{c.costMaxL}L
                    </p>
                    <p className="text-[11px] text-muted-foreground">Total cost</p>
                  </div>
                </div>

                <ul className="mt-5 space-y-2">
                  {c.highlights.slice(0, 3).map((h) => (
                    <li key={h} className="flex gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1.5 border-t border-border pt-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="size-3.5" /> {c.duration}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Languages className="size-3.5" /> {c.language.split(" / ")[0]}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="size-3.5" /> {c.intake}
                  </span>
                </div>

                <a
                  href={whatsappLink(`Hi Abroad Visions, I'd like to know more about MBBS in ${c.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center justify-center gap-1.5 rounded-xl border border-border bg-background py-2.5 text-sm font-semibold text-foreground transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground"
                >
                  Ask about {c.name}
                  <ArrowUpRight className="size-4" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
