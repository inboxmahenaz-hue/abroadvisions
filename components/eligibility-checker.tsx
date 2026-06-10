"use client"

import { useState } from "react"
import { CheckCircle2, AlertCircle, ArrowRight, RotateCcw } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { whatsappLink } from "@/lib/data"
import { cn } from "@/lib/utils"

type Answers = {
  neet: string | null
  age: string | null
  pcb: string | null
  budget: string | null
}

const questions = [
  {
    key: "neet" as const,
    q: "Did you appear for NEET and qualify (score above the cut-off)?",
    options: [
      { label: "Yes, I qualified NEET", value: "qualified" },
      { label: "Appeared, below cut-off", value: "appeared" },
      { label: "Haven't appeared yet", value: "no" },
    ],
  },
  {
    key: "age" as const,
    q: "Will you be at least 17 years old by 31 December of the admission year?",
    options: [
      { label: "Yes, 17 or older", value: "yes" },
      { label: "Not yet 17", value: "no" },
    ],
  },
  {
    key: "pcb" as const,
    q: "Did you score 50%+ in Physics, Chemistry & Biology in Class 12? (40% for reserved categories)",
    options: [
      { label: "Yes, 50% or above", value: "yes" },
      { label: "Between 40–50%", value: "borderline" },
      { label: "Below 40%", value: "no" },
    ],
  },
  {
    key: "budget" as const,
    q: "What is your approximate total budget for the MBBS programme?",
    options: [
      { label: "Under ₹25 lakh", value: "low" },
      { label: "₹25–40 lakh", value: "mid" },
      { label: "₹40 lakh or more", value: "high" },
    ],
  },
]

function evaluate(a: Answers) {
  // NMC mandates NEET qualification + age + PCB marks
  if (a.neet === "no" || a.age === "no" || a.pcb === "no") {
    return {
      tone: "warn" as const,
      title: "A few things to address first",
      body: "Current NMC rules require a qualified NEET score, a minimum age of 17, and 50% in PCB (40% for reserved categories) to study MBBS abroad and practise in India. Let's talk through your specific situation — there may be a pathway, including a future NEET attempt.",
    }
  }
  if (a.neet === "appeared" || a.pcb === "borderline") {
    return {
      tone: "ok" as const,
      title: "You're likely eligible — let's confirm",
      body: "NMC accepts a qualified NEET attempt (you only need to clear the percentile cut-off, not a high score). Based on your answers you appear eligible for NMC-approved MBBS abroad. A quick counselling call will confirm and shortlist universities for you.",
    }
  }
  const budgetNote =
    a.budget === "low"
      ? "Kyrgyzstan and Russia fit comfortably within your budget."
      : a.budget === "mid"
        ? "Uzbekistan and Nepal are excellent matches for your budget and FMGE outcomes."
        : "Nepal, Georgia and Uzbekistan are all open to you, prioritising FMGE outcomes."
  return {
    tone: "good" as const,
    title: "Great news — you're eligible!",
    body: `You meet the core NMC requirements for MBBS abroad. ${budgetNote} Let's get you a personalised university shortlist based on FMGE data.`,
  }
}

export function EligibilityChecker() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Answers>({
    neet: null,
    age: null,
    pcb: null,
    budget: null,
  })

  const done = step >= questions.length
  const current = questions[step]
  const result = done ? evaluate(answers) : null

  const choose = (value: string) => {
    setAnswers((prev) => ({ ...prev, [current.key]: value }))
    setStep((s) => s + 1)
  }

  const reset = () => {
    setStep(0)
    setAnswers({ neet: null, age: null, pcb: null, budget: null })
  }

  const toneStyles = {
    good: { ring: "border-success/40", icon: CheckCircle2, color: "text-success" },
    ok: { ring: "border-success/40", icon: CheckCircle2, color: "text-success" },
    warn: { ring: "border-accent/40", icon: AlertCircle, color: "text-accent" },
  }

  return (
    <section id="eligibility" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Eligibility Checker"
          align="center"
          title={
            <>
              Can you study MBBS abroad?{" "}
              <span className="text-accent">Find out in 30 seconds.</span>
            </>
          }
          description="Answer four quick questions. We'll tell you honestly whether you meet the current NMC eligibility rules — no email required."
        />

        <Reveal delay={120}>
          <div className="mx-auto mt-12 max-w-2xl rounded-3xl border border-border bg-card p-7 sm:p-9">
            {/* progress */}
            <div className="mb-7 flex items-center gap-2">
              {questions.map((_, i) => (
                <span
                  key={i}
                  className={cn(
                    "h-1.5 flex-1 rounded-full transition-colors",
                    i < step || done ? "bg-accent" : "bg-border",
                  )}
                />
              ))}
            </div>

            {!done && current && (
              <div key={step} className="reveal reveal-in">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Question {step + 1} of {questions.length}
                </p>
                <h3 className="mt-3 text-balance font-display text-xl font-semibold text-foreground sm:text-2xl">
                  {current.q}
                </h3>
                <div className="mt-6 grid gap-3">
                  {current.options.map((o) => (
                    <button
                      key={o.value}
                      type="button"
                      onClick={() => choose(o.value)}
                      className="group flex items-center justify-between rounded-xl border border-border bg-background px-5 py-4 text-left text-sm font-medium text-foreground transition-all hover:border-accent hover:bg-accent/5"
                    >
                      {o.label}
                      <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-accent" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {done && result && (
              <div className="reveal reveal-in text-center">
                {(() => {
                  const t = toneStyles[result.tone]
                  const Icon = t.icon
                  return (
                    <div
                      className={cn(
                        "mx-auto flex size-16 items-center justify-center rounded-2xl border bg-background",
                        t.ring,
                      )}
                    >
                      <Icon className={cn("size-8", t.color)} />
                    </div>
                  )
                })()}
                <h3 className="mt-5 font-display text-2xl font-semibold text-foreground">
                  {result.title}
                </h3>
                <p className="mx-auto mt-3 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
                  {result.body}
                </p>
                <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a
                    href={whatsappLink(
                      "Hi Abroad Visions, I just used the eligibility checker and would like a free counselling call.",
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.02]"
                  >
                    Book free counselling
                    <ArrowRight className="size-4" />
                  </a>
                  <button
                    type="button"
                    onClick={reset}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                  >
                    <RotateCcw className="size-4" />
                    Start over
                  </button>
                </div>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
