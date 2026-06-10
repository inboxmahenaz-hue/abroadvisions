"use client"

import { Reveal } from "./reveal"
import { SectionHeading } from "./section-heading"
import { ShieldCheck, TrendingUp, FileWarning, Eye } from "lucide-react"

const pillars = [
  {
    icon: Eye,
    title: "We show you the real FMGE data",
    body: "Most consultants hide pass rates. We lead with them. Every university recommendation is backed by its actual FMGE/NExT performance — not marketing claims.",
  },
  {
    icon: ShieldCheck,
    title: "NMC-approved universities only",
    body: "We only recommend universities listed by the National Medical Commission. We will refuse to send your child somewhere their Indian licence is at risk.",
  },
  {
    icon: TrendingUp,
    title: "Outcome over commission",
    body: "We get paid the same regardless of which country you choose. That means our shortlist is built around your child's success, not our margin.",
  },
  {
    icon: FileWarning,
    title: "Transparent fees, in writing",
    body: "Tuition, hostel, food, visa — every cost itemised before you commit. No surprise charges in year two. No hidden agent fees.",
  },
]

export function FmgeSection() {
  return (
    <section id="trust" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Why Trust Us"
          title="An MBBS abroad is only worth it if you can practise in India."
          description="That single truth drives every recommendation we make. Here is how we protect your child's future — and your family's investment."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <div className="flex h-full gap-4 rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <p.icon className="size-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-card-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-8 rounded-2xl border border-accent/20 bg-accent/[0.06] p-6 text-center sm:p-8">
            <p className="mx-auto max-w-3xl text-pretty leading-relaxed text-foreground">
              <span className="font-semibold">A note for parents:</span> If a consultant promises
              guaranteed admission, zero entrance requirements, or pushes a country we have flagged as
              high-risk, walk away. Your child has worked too hard to gamble their licence.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
