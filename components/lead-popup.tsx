"use client"

import { useEffect, useState } from "react"
import { X, GraduationCap, Phone, User, BookOpen, ChevronRight } from "lucide-react"
import { whatsappLink } from "@/lib/data"

const STORAGE_KEY = "av_lead_popup_dismissed"
const DELAY_MS = 5000 // 5 seconds

export function LeadPopup() {
  const [visible, setVisible] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: "",
    phone: "",
    neetScore: "",
    targetCountry: "",
  })

  useEffect(() => {
    // Don't show if already dismissed this session
    if (sessionStorage.getItem(STORAGE_KEY)) return
    const timer = setTimeout(() => setVisible(true), DELAY_MS)
    return () => clearTimeout(timer)
  }, [])

  function dismiss() {
    sessionStorage.setItem(STORAGE_KEY, "1")
    setVisible(false)
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.name || !form.phone) return
    const msg = `Hi Abroad Visions! I'd like free MBBS counselling.%0AName: ${form.name}%0APhone: ${form.phone}${form.neetScore ? `%0ANEET Score: ${form.neetScore}` : ""}${form.targetCountry ? `%0APreferred Country: ${form.targetCountry}` : ""}`
    setSubmitted(true)
    setTimeout(() => {
      window.open(`https://wa.me/919084676999?text=${msg}`, "_blank")
      dismiss()
    }, 1200)
  }

  if (!visible) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[999] bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={dismiss}
        aria-hidden="true"
      />

      {/* Popup card */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Free MBBS counselling offer"
        className="fixed inset-x-4 bottom-0 z-[1000] mx-auto mb-4 max-w-md rounded-3xl border border-border bg-background shadow-[0_24px_60px_-12px_rgba(0,0,0,0.28)] sm:inset-x-auto sm:right-6 sm:bottom-6 sm:left-auto sm:w-[420px]"
        style={{ animation: "popupSlide 0.35s cubic-bezier(0.34,1.56,0.64,1) both" }}
      >
        <style>{`
          @keyframes popupSlide {
            from { opacity: 0; transform: translateY(28px) scale(0.95); }
            to   { opacity: 1; transform: translateY(0) scale(1); }
          }
        `}</style>

        {/* Top accent bar */}
        <div className="flex items-center justify-between rounded-t-3xl bg-gradient-to-r from-accent to-accent/80 px-5 py-3.5">
          <div className="flex items-center gap-2.5">
            <div className="flex size-8 items-center justify-center rounded-xl bg-white/20">
              <GraduationCap className="size-4 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white leading-tight">Free MBBS Counselling</p>
              <p className="text-[11px] text-white/80">We'll call you within 2 hours</p>
            </div>
          </div>
          <button
            type="button"
            onClick={dismiss}
            className="flex size-7 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30"
            aria-label="Close"
          >
            <X className="size-4" />
          </button>
        </div>

        {submitted ? (
          <div className="flex flex-col items-center gap-3 px-6 py-10 text-center">
            <div className="flex size-14 items-center justify-center rounded-full bg-green-100 text-green-600 text-2xl">
              ✓
            </div>
            <p className="font-display text-lg font-semibold text-foreground">Thank you, {form.name}!</p>
            <p className="text-sm text-muted-foreground">
              Opening WhatsApp so our counsellor can reach you right away.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-5 pb-5 pt-4">
            <p className="text-sm text-muted-foreground mb-4">
              Get a <strong className="text-foreground">free, no-obligation</strong> session with our MBBS expert — tailored to your NEET score and budget.
            </p>

            <div className="space-y-3">
              {/* Name */}
              <div className="relative">
                <User className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Student / Parent name *"
                  required
                  className="w-full rounded-xl border border-border bg-card pl-9 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40"
                />
              </div>

              {/* Phone */}
              <div className="relative">
                <Phone className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Mobile number *"
                  required
                  pattern="[6-9][0-9]{9}"
                  maxLength={10}
                  className="w-full rounded-xl border border-border bg-card pl-9 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40"
                />
              </div>

              {/* NEET Score */}
              <div className="relative">
                <BookOpen className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <input
                  type="number"
                  name="neetScore"
                  value={form.neetScore}
                  onChange={handleChange}
                  placeholder="NEET score (optional)"
                  min={0}
                  max={720}
                  className="w-full rounded-xl border border-border bg-card pl-9 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40"
                />
              </div>

              {/* Country preference */}
              <select
                name="targetCountry"
                value={form.targetCountry}
                onChange={handleChange}
                className="w-full rounded-xl border border-border bg-card px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40"
              >
                <option value="">Preferred country (optional)</option>
                <option value="Russia">Russia</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                <option value="Nepal">Nepal</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Georgia">Georgia</option>
                <option value="Armenia">Armenia</option>
                <option value="Not sure">Not sure yet</option>
              </select>
            </div>

            <button
              type="submit"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Get Free Counselling
              <ChevronRight className="size-4" />
            </button>

            <p className="mt-2.5 text-center text-[11px] text-muted-foreground">
              🔒 Your details are kept private and never shared.
            </p>
          </form>
        )}
      </div>
    </>
  )
}
