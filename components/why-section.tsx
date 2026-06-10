import { BadgeCheck, IndianRupee, Compass, MoonStar } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"

const reasons = [
  {
    icon: BadgeCheck,
    title: "Equivalent degree, NMC recognised",
    body: "Every university we recommend appears on the NMC's approved list. Your degree is valid to practise medicine in India after clearing FMGE / NExT.",
  },
  {
    icon: IndianRupee,
    title: "Total cost ₹20–45 lakh",
    body: "Including tuition, hostel, food and travel — not just the first year. You get a transparent, full breakdown for every country.",
  },
  {
    icon: Compass,
    title: "We recommend by FMGE data — not commission",
    body: "Philippines is excluded from our recommendations because of NMC compliance risk, regardless of the commission. Your child's career comes first.",
  },
  {
    icon: MoonStar,
    title: "Muslim-friendly options available",
    body: "Uzbekistan, Kyrgyzstan and Bangladesh are Muslim-majority countries with halal food, mosques and a familiar culture.",
  },
]

const comparison = [
  { label: "Private MBBS in India", value: "₹80L – ₹1 Cr", pct: 100, tone: "bg-destructive" },
  { label: "Georgia MBBS (total)", value: "₹35 – 50L", pct: 50, tone: "bg-primary" },
  { label: "Nepal MBBS (total)", value: "₹35 – 45L", pct: 45, tone: "bg-primary" },
  { label: "Uzbekistan MBBS (total)", value: "₹28 – 38L", pct: 38, tone: "bg-accent" },
  { label: "Kyrgyzstan MBBS (total)", value: "₹20 – 28L", pct: 28, tone: "bg-success" },
]

export function WhySection() {
  return (
    <section id="why" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Why MBBS Abroad"
          title={
            <>
              A government seat is not the{" "}
              <span className="text-accent">only path</span> to an MD.
            </>
          }
          description="Over 2 lakh students appear for NEET each year and don't secure a government seat. Private MBBS in India can cost ₹80L–1 Crore. MBBS abroad is the established alternative — same NMC recognition, a fraction of the cost."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          {/* reasons */}
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 80}>
                <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgb(0,0,0,0.2)]">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <r.icon className="size-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {r.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* cost comparison */}
          <Reveal delay={120}>
            <div className="sticky top-28 rounded-3xl border border-border bg-primary p-7 text-primary-foreground">
              <h3 className="font-display text-xl font-semibold">
                Cost comparison at a glance
              </h3>
              <p className="mt-1.5 text-sm text-primary-foreground/70">
                Total programme cost, not first-year fees.
              </p>
              <div className="mt-7 space-y-5">
                {comparison.map((c, i) => (
                  <div key={c.label}>
                    <div className="flex items-baseline justify-between text-sm">
                      <span className="font-medium text-primary-foreground/90">{c.label}</span>
                      <span className="font-semibold">{c.value}</span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-primary-foreground/15">
                      <div
                        className={`h-full rounded-full ${c.tone}`}
                        style={{
                          width: `${c.pct}%`,
                          transitionDelay: `${i * 80}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-7 rounded-2xl bg-primary-foreground/10 p-4 text-sm leading-relaxed text-primary-foreground/85">
                <span className="font-semibold text-primary-foreground">FMGE / NExT:</span>{" "}
                Foreign MBBS graduates must clear FMGE (pass mark 150/300) to
                practise in India. We guide you to universities with the highest
                pass rates.
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
