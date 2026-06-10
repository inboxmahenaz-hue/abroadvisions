"use client"

import { Reveal } from "./reveal"
import { SectionHeading } from "./section-heading"
import { stories } from "@/lib/data"
import { Quote, CheckCircle2, Star } from "lucide-react"

export function SuccessStories() {
  return (
    <section id="stories" className="py-20 md:py-28 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Success Stories"
          title="Real families. Honest journeys."
          description="Students and parents who started their medical journey abroad with guidance they could trust."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {stories.map((s, i) => (
            <Reveal key={s.name} delay={i * 100}>
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                {/* Stars */}
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="size-4 fill-accent text-accent" aria-hidden="true" />
                  ))}
                </div>

                <Quote className="mt-3 h-6 w-6 text-primary/40" aria-hidden="true" />
                <blockquote className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-card-foreground">
                  {s.quote}
                </blockquote>
                <figcaption className="mt-5 border-t border-border pt-4">
                  <div className="flex items-center gap-3">
                    {/* Avatar initials placeholder */}
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                      {s.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <div className="font-semibold text-card-foreground">{s.name}</div>
                      <div className="text-xs text-muted-foreground">{s.parent}</div>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-sm font-medium text-primary">
                    <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>{s.result}</span>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* Social proof bar */}
        <Reveal delay={150}>
          <div className="mt-10 rounded-2xl border border-border bg-card px-6 py-5 text-center">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Want to speak with a past student or parent directly?</span>
              {" "}We can connect you with families in our network who have given us permission to make introductions.{" "}
              <a
                href="#counselling"
                className="font-medium text-accent hover:underline"
              >
                Request a reference call →
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
