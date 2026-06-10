"use client"

import { useState } from "react"
import { Reveal } from "./reveal"
import { SectionHeading } from "./section-heading"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    q: "Is an MBBS degree from abroad valid in India?",
    a: "Yes — provided the university is on the NMC (National Medical Commission) approved list. After completing your MBBS abroad, you must clear the FMGE (Foreign Medical Graduate Examination) or the forthcoming NExT exam to practise medicine in India. We recommend only NMC-approved universities.",
  },
  {
    q: "What NEET score do I need for MBBS abroad?",
    a: "For NMC-recognised MBBS abroad, NEET qualification is mandatory from 2024 onwards. The minimum qualifying score is 50th percentile for general category (40th for reserved categories). Unlike private MBBS in India, there is no high-score competition — if you are NEET-qualified, you can apply.",
  },
  {
    q: "What is the total cost including everything — not just tuition?",
    a: "We give every family an itemised breakdown covering tuition, hostel/accommodation, food, travel (to and from India each year), visa fees, and study materials. Depending on the country and university, realistic totals range from ₹20 lakh (Kyrgyzstan) to ₹50 lakh (Georgia) for the full programme. We never quote just Year 1 fees.",
  },
  {
    q: "Why do you not recommend the Philippines?",
    a: "The NMC issued an advisory in 2021 flagging compliance concerns about Philippines medical universities for Indian students. Students who completed MBBS in the Philippines have faced difficulties with FMGE registration. Until the situation is formally resolved, we will not recommend the Philippines — regardless of commission.",
  },
  {
    q: "How do you make money if counselling is free?",
    a: "Universities pay us a referral fee when a student enrolls. Critically, this fee is standardised and does not vary by country or university — so we have no financial incentive to push you toward an expensive or poorly-performing institution. Our income depends entirely on you choosing the right place and completing your degree successfully.",
  },
  {
    q: "What happens after admission — do you stay involved?",
    a: "Yes. We stay with you from application through to graduation. This includes visa assistance, pre-departure orientation, airport coordination on arrival, hostel check-in support, and a point of contact throughout your degree for any issues that arise.",
  },
  {
    q: "My child's NEET score is very low. Is there still an option?",
    a: "If your child is NEET-qualified (meets the minimum percentile), there are genuine pathways abroad. Kyrgyzstan and Bangladesh offer quality NMC-recognised MBBS at the lowest cost. We will tell you honestly whether an option makes sense, not just take your money.",
  },
  {
    q: "Can a girl study MBBS safely abroad?",
    a: "Yes. Thousands of Indian women are studying MBBS in Uzbekistan, Georgia, Nepal, and other destinations safely. We assess hostel security, presence of Indian communities, city safety records, and availability of Indian food for every recommendation. Several families in our network have specifically sent daughters — we can connect you with them for first-hand accounts.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions every parent asks."
          description="Straightforward answers — no marketing language."
        />

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 40}>
              <div className="overflow-hidden rounded-2xl border border-border bg-card">
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={openIndex === i}
                >
                  <span className="font-display text-base font-semibold text-foreground leading-snug">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={cn(
                      "size-5 shrink-0 text-muted-foreground transition-transform duration-200",
                      openIndex === i && "rotate-180"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-200",
                    openIndex === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
