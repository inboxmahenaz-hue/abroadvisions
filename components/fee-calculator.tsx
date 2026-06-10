"use client"

import { useMemo, useState } from "react"
import { Calculator, ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { countries, whatsappLink } from "@/lib/data"
import { cn } from "@/lib/utils"

// Indicative per-year breakdown in lakhs (tuition, living)
const livingPerYearL = 2.5

export function FeeCalculator() {
  const [slug, setSlug] = useState(countries[1].slug) // Uzbekistan default
  const [hostel, setHostel] = useState(true)
  const [travel, setTravel] = useState(true)

  const country = countries.find((c) => c.slug === slug)!

  const result = useMemo(() => {
    const years = parseFloat(country.duration)
    // derive a tuition figure from total range midpoint minus living/extras
    const totalMid = (country.costMinL + country.costMaxL) / 2
    const livingTotal = hostel ? livingPerYearL * years : livingPerYearL * 0.5 * years
    const travelTotal = travel ? 0.6 * years : 0
    const tuition = Math.max(totalMid - livingTotal - travelTotal, totalMid * 0.4)
    const total = tuition + livingTotal + travelTotal
    return {
      years,
      tuition: Math.round(tuition * 10) / 10,
      living: Math.round(livingTotal * 10) / 10,
      travel: Math.round(travelTotal * 10) / 10,
      total: Math.round(total * 10) / 10,
      perYear: Math.round((total / years) * 10) / 10,
    }
  }, [country, hostel, travel])

  const rows = [
    { label: `Tuition (${result.years} yrs)`, value: result.tuition },
    { label: "Hostel & living", value: result.living },
    { label: "Travel & visa", value: result.travel },
  ]

  return (
    <section id="calculator" className="bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="MBBS Fee Calculator"
          title={
            <>
              Know the <span className="text-accent">total cost</span> — before you
              decide.
            </>
          }
          description="An honest, all-in estimate including tuition, living and travel for the full programme. No surprise charges, no first-year-only tricks."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1fr] lg:gap-8">
          {/* inputs */}
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-7">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <Calculator className="size-5 text-accent" />
                Build your estimate
              </div>

              <label className="mt-6 block text-sm font-medium text-muted-foreground">
                Destination country
              </label>
              <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {countries.map((c) => (
                  <button
                    key={c.slug}
                    type="button"
                    onClick={() => setSlug(c.slug)}
                    className={cn(
                      "flex items-center gap-2 rounded-xl border px-3 py-2.5 text-sm font-medium transition-all",
                      slug === c.slug
                        ? "border-accent bg-accent/10 text-foreground"
                        : "border-border bg-background text-muted-foreground hover:text-foreground",
                    )}
                  >
                    <span aria-hidden="true">{c.flag}</span>
                    {c.name}
                  </button>
                ))}
              </div>

              <div className="mt-7 space-y-3">
                <ToggleRow
                  label="Include hostel & full living"
                  hint="Halal meal plans available in several countries"
                  checked={hostel}
                  onChange={setHostel}
                />
                <ToggleRow
                  label="Include travel & visa costs"
                  hint="Flights, student visa and forex"
                  checked={travel}
                  onChange={setTravel}
                />
              </div>
            </div>
          </Reveal>

          {/* result */}
          <Reveal delay={120}>
            <div className="flex h-full flex-col rounded-3xl border border-border bg-primary p-7 text-primary-foreground">
              <p className="text-sm text-primary-foreground/70">
                Estimated total for MBBS in {country.name}
              </p>
              <div className="mt-2 flex items-end gap-2">
                <span className="font-display text-5xl font-semibold tracking-tight">
                  ₹{result.total}L
                </span>
                <span className="mb-1.5 text-sm text-primary-foreground/70">
                  ≈ ₹{result.perYear}L / year
                </span>
              </div>

              <div className="mt-7 space-y-3">
                {rows.map((r) => (
                  <div key={r.label} className="flex items-center justify-between text-sm">
                    <span className="text-primary-foreground/80">{r.label}</span>
                    <span className="font-semibold">₹{r.value}L</span>
                  </div>
                ))}
                <div className="border-t border-primary-foreground/15 pt-3" />
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">All-in total</span>
                  <span className="font-display text-xl font-semibold">₹{result.total}L</span>
                </div>
              </div>

              <div className="mt-5 rounded-2xl bg-primary-foreground/10 p-4 text-xs leading-relaxed text-primary-foreground/80">
                Indicative estimate for planning. Compared with ₹80L–1Cr for
                private MBBS in India, that&apos;s a saving of up to{" "}
                <span className="font-semibold text-primary-foreground">
                  ₹{Math.max(80 - result.total, 0).toFixed(0)}L+
                </span>
                .
              </div>

              <a
                href={whatsappLink(
                  `Hi Abroad Visions, I used the fee calculator for ${country.name} (est. ₹${result.total}L). Please share a detailed breakdown.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-accent py-3.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.02]"
              >
                Get a detailed breakdown
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function ToggleRow({
  label,
  hint,
  checked,
  onChange,
}: {
  label: string
  hint: string
  checked: boolean
  onChange: (v: boolean) => void
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className="flex w-full items-center justify-between rounded-xl border border-border bg-background px-4 py-3 text-left transition-colors hover:bg-secondary/50"
    >
      <span>
        <span className="block text-sm font-medium text-foreground">{label}</span>
        <span className="block text-xs text-muted-foreground">{hint}</span>
      </span>
      <span
        className={cn(
          "relative h-6 w-11 shrink-0 rounded-full transition-colors",
          checked ? "bg-accent" : "bg-border",
        )}
      >
        <span
          className={cn(
            "absolute top-0.5 size-5 rounded-full bg-background shadow transition-transform",
            checked ? "translate-x-5" : "translate-x-0.5",
          )}
        />
      </span>
    </button>
  )
}
