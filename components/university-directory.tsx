"use client"

import { useMemo, useState } from "react"
import { Search, MapPin, ShieldCheck } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { universities, countries, whatsappLink } from "@/lib/data"
import { cn } from "@/lib/utils"

export function UniversityDirectory() {
  const [query, setQuery] = useState("")
  const [country, setCountry] = useState<string>("All")

  const countryOptions = ["All", ...countries.map((c) => c.name)]

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return universities.filter((u) => {
      const matchesCountry = country === "All" || u.country === country
      const matchesQuery =
        !q ||
        u.name.toLowerCase().includes(q) ||
        u.city.toLowerCase().includes(q) ||
        u.country.toLowerCase().includes(q)
      return matchesCountry && matchesQuery
    })
  }, [query, country])

  return (
    <section id="universities" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="University Directory"
          title={
            <>
              Thirty-plus universities, <span className="text-accent">vetted</span> on
              FMGE outcomes.
            </>
          }
          description="Browse NMC-approved institutions across all seven destinations. Every listing shows recognised bodies, indicative fees and FMGE performance."
        />

        {/* controls */}
        <Reveal delay={120}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by university, city or country…"
                className="w-full rounded-xl border border-border bg-card py-3 pl-10 pr-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {countryOptions.slice(0, 5).map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCountry(c)}
                  className={cn(
                    "rounded-xl border px-3.5 py-2.5 text-sm font-medium transition-all",
                    country === c
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-muted-foreground hover:text-foreground",
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* table / cards */}
        <div className="mt-8 overflow-hidden rounded-3xl border border-border bg-card">
          <div className="hidden grid-cols-[2fr_1fr_0.8fr_1fr_0.8fr] gap-4 border-b border-border bg-secondary/50 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground lg:grid">
            <span>University</span>
            <span>Location</span>
            <span>FMGE</span>
            <span>Fee / year</span>
            <span className="text-right">Action</span>
          </div>

          {filtered.length === 0 && (
            <p className="px-6 py-12 text-center text-sm text-muted-foreground">
              No universities match your search. Try a different filter.
            </p>
          )}

          <ul className="divide-y divide-border">
            {filtered.map((u, i) => (
              <Reveal as="li" key={u.name} delay={Math.min(i * 50, 300)}>
                <div className="grid grid-cols-1 gap-4 px-6 py-5 transition-colors hover:bg-secondary/30 lg:grid-cols-[2fr_1fr_0.8fr_1fr_0.8fr] lg:items-center">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xl" aria-hidden="true">{u.flag}</span>
                      <p className="font-semibold text-foreground">{u.name}</p>
                    </div>
                    <div className="mt-1.5 flex flex-wrap items-center gap-2">
                      <span className="rounded-md bg-accent/10 px-2 py-0.5 text-[11px] font-semibold text-accent">
                        {u.tag}
                      </span>
                      {u.recognised.map((r) => (
                        <span
                          key={r}
                          className="inline-flex items-center gap-1 rounded-md bg-secondary px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
                        >
                          <ShieldCheck className="size-3" /> {r}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="size-4" /> {u.city}, {u.country}
                  </p>
                  <p className="text-sm font-semibold text-success">{u.fmge}</p>
                  <p className="text-sm font-medium text-foreground">₹{u.feePerYearL}L</p>
                  <div className="lg:text-right">
                    <a
                      href={whatsappLink(`Hi Abroad Visions, please share details about ${u.name}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex rounded-lg border border-border bg-background px-3.5 py-2 text-xs font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
                    >
                      Get details
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
        <p className="mt-4 text-center text-xs text-muted-foreground">
          Indicative fees shown per year. Full transparent breakdowns shared during free counselling.
        </p>
      </div>
    </section>
  )
}
