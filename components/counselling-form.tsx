"use client"

import type React from "react"

import { useState } from "react"
import { Reveal } from "./reveal"
import { countries, whatsappLink, contact } from "@/lib/data"
import { Phone, MessageCircle, Send, CheckCircle2 } from "lucide-react"

export function CounsellingForm() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [neet, setNeet] = useState("")
  const [country, setCountry] = useState("")
  const [budget, setBudget] = useState("")

  const message = `Hi Abroad Visions, I'd like free MBBS counselling.
Name: ${name || "-"}
Phone: ${phone || "-"}
NEET score: ${neet || "-"}
Preferred country: ${country || "Not sure"}
Budget: ${budget || "-"}`

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer")
  }

  return (
    <section id="counselling" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm md:grid md:grid-cols-2">
          {/* Left: pitch */}
          <div className="relative bg-primary p-8 text-primary-foreground sm:p-10">
            <span className="inline-flex items-center rounded-full bg-primary-foreground/10 px-3 py-1 text-xs font-semibold">
              100% Free · No Obligation
            </span>
            <h2 className="mt-5 text-balance font-display text-3xl font-semibold leading-tight sm:text-4xl">
              Get an honest counselling call
            </h2>
            <p className="mt-4 leading-relaxed text-primary-foreground/75">
              Share your NEET score and budget. We&apos;ll map the right NMC-approved universities for your
              child — with real FMGE data and transparent costs. No pressure, no spam.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "Personalised university shortlist",
                "Real FMGE pass-rate comparison",
                "Itemised cost breakdown in writing",
                "Visa & documentation roadmap",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-primary-foreground/90">
                  <CheckCircle2 className="size-5 shrink-0 text-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${contact.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary-foreground/10 px-4 py-3 text-sm font-semibold transition-colors hover:bg-primary-foreground/20"
              >
                <Phone className="size-4" aria-hidden="true" />
                {contact.phone}
              </a>
              <a
                href={whatsappLink("Hi Abroad Visions, I'd like free MBBS counselling.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Right: form */}
          <form onSubmit={handleSubmit} className="p-8 sm:p-10">
            <Reveal>
              <div className="space-y-4">
                <Field label="Student / Parent name">
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Aarav Sharma"
                    className="form-input"
                  />
                </Field>

                <Field label="Phone / WhatsApp number">
                  <input
                    required
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="10-digit mobile number"
                    className="form-input"
                  />
                </Field>

                <div className="grid grid-cols-2 gap-4">
                  <Field label="NEET score">
                    <input
                      value={neet}
                      onChange={(e) => setNeet(e.target.value)}
                      placeholder="e.g. 320"
                      className="form-input"
                    />
                  </Field>
                  <Field label="Budget (total)">
                    <select value={budget} onChange={(e) => setBudget(e.target.value)} className="form-input">
                      <option value="">Select</option>
                      <option>Under ₹25L</option>
                      <option>₹25L – ₹35L</option>
                      <option>₹35L – ₹50L</option>
                      <option>Flexible</option>
                    </select>
                  </Field>
                </div>

                <Field label="Preferred country (optional)">
                  <select value={country} onChange={(e) => setCountry(e.target.value)} className="form-input">
                    <option value="">Not sure — guide me</option>
                    {countries.map((c) => (
                      <option key={c.slug} value={c.name}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </Field>

                <button
                  type="submit"
                  className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3.5 font-semibold text-accent-foreground transition-transform hover:scale-[1.01] active:scale-100"
                >
                  <Send className="size-4" aria-hidden="true" />
                  Send my details on WhatsApp
                </button>
                <p className="text-center text-xs text-muted-foreground">
                  Submitting opens WhatsApp with your details pre-filled. We never share your information.
                </p>
              </div>
            </Reveal>
          </form>
        </div>
      </div>
    </section>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-foreground">{label}</span>
      {children}
    </label>
  )
}
