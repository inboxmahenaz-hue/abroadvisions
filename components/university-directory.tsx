"use client"

import { useState } from "react"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { featuredUniversities, PHOTO_BASE, whatsappLink } from "@/lib/data"
import { cn } from "@/lib/utils"

const ALL_COUNTRIES = ["All", "Russia", "Uzbekistan", "Georgia", "Kazakhstan", "Kyrgyzstan", "Armenia", "Nepal"]

export function UniversityDirectory() {
  const [active, setActive] = useState("All")

  const filtered = active === "All"
    ? featuredUniversities
    : featuredUniversities.filter((u) => u.country === active)

  return (
    <section id="universities" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">

        <SectionHeading
          eyebrow="University Directory"
          title={
            <>
              200+ universities,{" "}
              <span className="text-accent">vetted</span> and listed.
            </>
          }
          description="NMC-approved institutions across eight destinations. Browse by country or explore the full directory for detailed profiles, fees, and intake information."
        />

        {/* Country filter pills */}
        <Reveal delay={100}>
          <div className="mt-10 flex flex-wrap gap-2">
            {ALL_COUNTRIES.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                className={cn(
                  "rounded-xl border px-3.5 py-2 text-sm font-medium transition-all",
                  active === c
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:text-foreground",
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        {/* University logo grid */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {filtered.map((u, i) => (
            <Reveal key={u.id} delay={Math.min(i * 40, 280)}>
              <a
                href={`/mbbs-university-finder/${u.id}`}
                className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-4 text-center transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_16px_40px_-16px_rgb(0,0,0,0.18)]"
              >
                {/* Logo */}
                <div className="flex h-14 w-full items-center justify-center overflow-hidden rounded-xl bg-secondary/60 px-2">
                  <img
                    src={`${PHOTO_BASE}${u.logo}`}
                    alt={`${u.shortName} logo`}
                    className="h-10 w-auto max-w-full object-contain opacity-90 transition-opacity group-hover:opacity-100"
                    loading="lazy"
                    onError={(e) => {
                      // fallback to flag emoji on broken image
                      const el = e.currentTarget
                      el.style.display = "none"
                      const parent = el.parentElement
                      if (parent && !parent.querySelector(".flag-fallback")) {
                        const span = document.createElement("span")
                        span.className = "flag-fallback text-3xl"
                        span.textContent = u.flag
                        parent.appendChild(span)
                      }
                    }}
                  />
                </div>

                {/* Name + country */}
                <div className="w-full">
                  <p className="text-xs font-semibold leading-snug text-foreground line-clamp-2">
                    {u.shortName}
                  </p>
                  <p className="mt-0.5 text-[11px] text-muted-foreground">
                    {u.flag} {u.city}
                  </p>
                </div>

                {/* Established */}
                {u.established && (
                  <p className="text-[10px] text-muted-foreground/70">
                    Est. {u.established}
                  </p>
                )}
              </a>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <Reveal delay={200}>
          <div className="mt-10 flex flex-col items-center gap-4 rounded-3xl border border-border bg-secondary/40 px-6 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <p className="font-display text-lg font-semibold text-foreground">
                Explore all 200+ universities
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Detailed profiles, fees on request, intake dates, and NMC compliance status — all in one place.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <a
                href="/mbbs-university-finder"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Open University Finder
                <ArrowRight className="size-4" />
              </a>
              <a
                href={whatsappLink("Hi Abroad Visions, I need help shortlisting the right university.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                Get a shortlist
                <ExternalLink className="size-4" />
              </a>
            </div>
          </div>
        </Reveal>

        <p className="mt-4 text-center text-xs text-muted-foreground">
          Showing {filtered.length} featured universities. Full directory of 200+ available in the University Finder.
        </p>
      </div>
    </section>
  )
}
