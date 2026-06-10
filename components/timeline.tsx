import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { timeline } from "@/lib/data"

export function Timeline() {
  return (
    <section id="process" className="bg-primary py-20 text-primary-foreground sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Admission Timeline"
          title={
            <span className="text-primary-foreground">
              From NEET result to first day of MBBS — clearly.
            </span>
          }
          description="No guesswork. No pressure. A structured five-step process that has guided hundreds of families from first enquiry to a secure university admission."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          {timeline.map((t, i) => (
            <Reveal key={t.step} delay={i * 90}>
              <div className="relative h-full rounded-2xl border border-primary-foreground/15 bg-primary-foreground/[0.06] p-6 transition-colors hover:bg-primary-foreground/[0.1]">
                <span className="font-display text-3xl font-semibold text-accent">
                  {t.step}
                </span>
                <h3 className="mt-3 font-display text-base font-semibold text-primary-foreground">
                  {t.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">
                  {t.body}
                </p>
                {i < timeline.length - 1 && (
                  <span className="pointer-events-none absolute -right-3 top-9 hidden text-primary-foreground/30 lg:block">
                    →
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
