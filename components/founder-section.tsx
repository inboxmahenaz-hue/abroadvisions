import { Reveal } from "./reveal"
import { SectionHeading } from "./section-heading"
import { ShieldCheck, GraduationCap, Users } from "lucide-react"

const credentials = [
  {
    icon: GraduationCap,
    text: "10+ years in international medical admissions",
  },
  {
    icon: Users,
    text: "Personally guided 200+ students to MBBS abroad",
  },
  {
    icon: ShieldCheck,
    text: "Verified FMGE outcome tracking since 2018",
  },
]

export function FounderSection() {
  return (
    <section id="founder" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Who We Are"
          title="Built by someone who has seen both sides."
          description="Abroad Visions was founded after watching too many families get misled by commission-driven consultants. Our founder has personally tracked FMGE outcomes, visited partner universities, and turned those insights into this advisory."
        />

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-1 lg:gap-16">
          {/* Bio & credentials */}
          <Reveal delay={100}>
            <div className="mx-auto max-w-3xl">
              <blockquote className="border-l-2 border-accent pl-5 text-lg leading-relaxed text-muted-foreground italic">
                "I started Abroad Visions because I was tired of seeing bright students end up at universities
                with 15% FMGE pass rates — universities that paid consultants the highest commission. That
                needed to change."
              </blockquote>

              <div className="mt-8 space-y-4">
                {credentials.map((c) => (
                  <div key={c.text} className="flex items-center gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <c.icon className="size-5" />
                    </div>
                    <p className="text-sm font-medium text-foreground">{c.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-2xl border border-border bg-card p-6">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  <span className="font-semibold text-foreground">Our promise:</span> Every family that
                  contacts us gets a completely honest assessment — including when MBBS abroad is{" "}
                  <em>not</em> the right choice for their child. We would rather lose a client than
                  send a student to the wrong university.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
