import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "MBBS in Bangladesh 2025-26 — Fees, Admission & Two Intakes | Abroad Visions",
  description:
    "Complete guide to MBBS in Bangladesh for Indian students. NMC-approved, total fees ₹30–45 lakh, two intakes per year, culturally familiar environment. Honest advice.",
  keywords: [
    "MBBS in Bangladesh",
    "MBBS in Bangladesh fees for Indian students",
    "MBBS in Bangladesh fees in rupees",
    "NMC approved universities in Bangladesh",
    "MBBS in Bangladesh 2025",
    "MBBS in Bangladesh admission process",
    "best country for MBBS abroad Indian students",
  ],
  alternates: { canonical: "https://abroadvisions.com/mbbs-in-bangladesh" },
  openGraph: {
    title: "MBBS in Bangladesh 2025-26 — Fees, Admission & Two Intakes",
    description: "NMC-approved MBBS in Bangladesh. Total cost ₹30–45 lakh. Two intakes per year, culturally familiar environment.",
    url: "https://abroadvisions.com/mbbs-in-bangladesh",
    siteName: "Abroad Visions",
    type: "article",
  },
}

const faqs = [
  { q: "Is MBBS from Bangladesh valid in India?", a: "Yes — provided the university is on the NMC approved list. After completing MBBS in Bangladesh, Indian students must clear FMGE (or the forthcoming NExT exam) to practise medicine in India." },
  { q: "What is the total cost of MBBS in Bangladesh?", a: "The all-inclusive total cost for MBBS in Bangladesh ranges from ₹30 lakh to ₹45 lakh. This includes tuition, hostel, food, and annual return travel." },
  { q: "Why does Bangladesh have two intakes?", a: "Bangladesh offers two intakes per year — January and July — giving flexibility if a student misses one admission cycle. The programme itself is 5 years, shorter than most other destinations." },
  { q: "What NEET score is needed for MBBS in Bangladesh?", a: "NEET qualification is mandatory. The minimum is 50th percentile for general category (40th for reserved categories)." },
  { q: "How long is MBBS in Bangladesh?", a: "MBBS in Bangladesh is 5 years of academic study plus 1 year of compulsory internship — shorter than the 6-year programmes in most other destinations." },
  { q: "Is Bangladesh culturally comfortable for Indian students?", a: "Yes. Bangladesh is a practical option for families seeking cultural familiarity — Indian food is widely available and the environment feels closer to home than most other destinations." },
]

export default function MbbsBangladeshPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <section className="mx-auto max-w-4xl px-4 pb-12 pt-32">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent mb-4">
            🇧🇩 Closest to Home
          </div>
          <h1 className="font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
            MBBS in Bangladesh for Indian Students — 2025-26 Guide
          </h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Bangladesh offers flexible intakes and a culturally familiar environment, with total costs from ₹30 lakh. A practical option for families in eastern and northern India.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="https://wa.me/919084676999?text=Hi%20Abroad%20Visions%2C%20I%20want%20to%20know%20more%20about%20MBBS%20in%20Bangladesh" className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white hover:bg-accent/90 transition-colors">
              Get Free Counselling
            </a>
            <Link href="/mbbs-university-finder?country=Bangladesh" className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-colors">
              View All Bangladesh Universities
            </Link>
          </div>
        </section>

        <section className="bg-muted/40 py-10">
          <div className="mx-auto max-w-4xl px-4">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { label: "Total Cost", value: "₹30–45 Lakh" },
                { label: "Duration", value: "5+1 Years" },
                { label: "Medium", value: "English" },
                { label: "Intake", value: "Jan / Jul" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-xl bg-background p-4 text-center shadow-sm">
                  <p className="text-xl font-bold text-foreground">{stat.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-4 py-16 space-y-16">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-6">Why MBBS in Bangladesh?</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "Two Intakes Per Year", body: "January and July intakes give flexibility if a student misses one admission cycle elsewhere." },
                { title: "Shorter Programme", body: "5-year academic programme plus 1-year internship — shorter than most other destinations at 6 years." },
                { title: "Culturally Familiar", body: "Indian food is widely available and the cultural environment feels closer to home than most destinations." },
                { title: "Geographically Close", body: "Easy and affordable travel for families, particularly from eastern and northern India." },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-border p-5">
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-2">MBBS in Bangladesh — Total Fee Breakdown</h2>
            <p className="text-muted-foreground mb-6 text-sm">All-inclusive costs for the full programme (5 years + internship). Not just Year 1 fees.</p>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-foreground">Expense</th>
                    <th className="px-4 py-3 text-left font-semibold text-foreground">Per Year</th>
                    <th className="px-4 py-3 text-left font-semibold text-foreground">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { item: "Tuition Fees", perYear: "₹3.5 – 5.5L", total: "₹21 – 33L" },
                    { item: "Hostel / Accommodation", perYear: "₹90K – 1.3L", total: "₹5.4 – 7.8L" },
                    { item: "Food", perYear: "₹65K – 95K", total: "₹3.9 – 5.7L" },
                    { item: "Travel (India)", perYear: "₹20K – 35K", total: "₹1.2 – 2.1L" },
                    { item: "Visa & Misc", perYear: "₹20K – 30K", total: "₹1.2 – 1.8L" },
                  ].map((row) => (
                    <tr key={row.item} className="hover:bg-muted/20">
                      <td className="px-4 py-3 text-foreground">{row.item}</td>
                      <td className="px-4 py-3 text-muted-foreground">{row.perYear}</td>
                      <td className="px-4 py-3 text-muted-foreground">{row.total}</td>
                    </tr>
                  ))}
                  <tr className="bg-accent/5 font-semibold">
                    <td className="px-4 py-3 text-foreground">Total</td>
                    <td className="px-4 py-3 text-foreground">—</td>
                    <td className="px-4 py-3 text-accent">₹30 – 45 Lakh</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">* Exact costs depend on university chosen and lifestyle. We provide a written itemised breakdown before you commit.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-6">Eligibility for MBBS in Bangladesh</h2>
            <div className="rounded-xl border border-border divide-y divide-border">
              {[
                { criterion: "NEET Qualification", detail: "Mandatory for all Indian students. Minimum 50th percentile (general) or 40th percentile (reserved)." },
                { criterion: "Age", detail: "Minimum 17 years as on 31st December of the admission year." },
                { criterion: "Class 12 Subjects", detail: "Physics, Chemistry, and Biology as compulsory subjects." },
                { criterion: "Class 12 Marks", detail: "Minimum 50% aggregate in PCB (40% for reserved categories)." },
                { criterion: "Passport", detail: "Valid passport required. Apply early if you don't have one." },
              ].map((row) => (
                <div key={row.criterion} className="flex flex-col sm:flex-row px-5 py-4 gap-1">
                  <p className="sm:w-48 shrink-0 text-sm font-semibold text-foreground">{row.criterion}</p>
                  <p className="text-sm text-muted-foreground">{row.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-6">Admission Process — Step by Step</h2>
            <div className="space-y-4">
              {[
                { step: "01", title: "Free Counselling Call", body: "Share your NEET score and budget. We map the right options based on FMGE data — not commission." },
                { step: "02", title: "University Shortlist", body: "A personalised comparison of 2–3 best-fit universities with itemised fee breakdowns." },
                { step: "03", title: "Application & Offer Letter", body: "We handle the entire application. Offer letter typically arrives in 2–4 weeks." },
                { step: "04", title: "Visa & Pre-Departure", body: "Student visa assistance, document checklist, packing guidance, and forex tips." },
                { step: "05", title: "Arrival Support", body: "Airport pickup coordination, hostel check-in, bank account setup, and ongoing support." },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">{item.step}</div>
                  <div>
                    <p className="font-semibold text-foreground">{item.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="rounded-xl border border-border p-5">
                  <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl bg-accent/5 border border-accent/20 p-8 text-center">
            <h2 className="text-2xl font-semibold text-foreground mb-2">Is Bangladesh the right choice for your child?</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto text-sm">Share your NEET score and budget. We'll tell you honestly whether Bangladesh makes sense for your family.</p>
            <a href="https://wa.me/919084676999?text=Hi%20Abroad%20Visions%2C%20I%20want%20free%20counselling%20for%20MBBS%20in%20Bangladesh" className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent/90 transition-colors">
              Get Free Counselling on WhatsApp
            </a>
            <p className="mt-3 text-xs text-muted-foreground">100% free · No obligation · Response within 2 hours</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-4">Compare Other Destinations</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "Russia", href: "/mbbs-in-russia" },
                { name: "Uzbekistan", href: "/mbbs-in-uzbekistan" },
                { name: "Georgia", href: "/mbbs-in-georgia" },
                { name: "Kazakhstan", href: "/mbbs-in-kazakhstan" },
                { name: "Kyrgyzstan", href: "/mbbs-in-kyrgyzstan" },
                { name: "Armenia", href: "/mbbs-in-armenia" },
                { name: "Nepal", href: "/mbbs-in-nepal" },
              ].map((c) => (
                <Link key={c.name} href={c.href} className="rounded-lg border border-border px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors">
                  MBBS in {c.name} →
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
