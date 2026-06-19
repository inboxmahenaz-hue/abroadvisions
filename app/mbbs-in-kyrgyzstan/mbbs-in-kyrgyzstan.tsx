import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "MBBS in Kyrgyzstan 2025-26 — Fees, Top Universities & Admission | Abroad Visions",
  description:
    "Complete guide to MBBS in Kyrgyzstan for Indian students. NMC-approved universities, total fees ₹18–28 lakh — the most affordable NMC-approved destination. Honest advice.",
  keywords: [
    "MBBS in Kyrgyzstan",
    "MBBS in Kyrgyzstan fees for Indian students",
    "MBBS in Kyrgyzstan fees in rupees",
    "NMC approved universities in Kyrgyzstan",
    "MBBS in Kyrgyzstan 2025",
    "Osh State Medical University fees",
    "Asian Medical Institute fees",
    "cheapest MBBS abroad for Indian students",
  ],
  alternates: { canonical: "https://abroadvisions.com/mbbs-in-kyrgyzstan" },
  openGraph: {
    title: "MBBS in Kyrgyzstan 2025-26 — Fees, Top Universities & Admission",
    description: "NMC-approved MBBS in Kyrgyzstan. Total cost ₹18–28 lakh — the most affordable entry into NMC-approved medicine.",
    url: "https://abroadvisions.com/mbbs-in-kyrgyzstan",
    siteName: "Abroad Visions",
    type: "article",
  },
}

const universities = [
  { name: "Osh State Medical University", city: "Osh", established: "1996", highlight: "Established institution with a large Indian student community", fmge: "Strong" },
  { name: "Asian Medical Institute", city: "Kant", established: "2002", highlight: "Affordable fees with select NExT-focused preparation programmes", fmge: "Above average" },
]

const faqs = [
  { q: "Is MBBS from Kyrgyzstan valid in India?", a: "Yes — provided the university is on the NMC approved list. After completing MBBS in Kyrgyzstan, Indian students must clear FMGE (or the forthcoming NExT exam) to practise medicine in India." },
  { q: "What is the total cost of MBBS in Kyrgyzstan?", a: "The all-inclusive total cost for MBBS in Kyrgyzstan ranges from ₹18 lakh to ₹28 lakh — the most affordable NMC-approved destination available." },
  { q: "Is Kyrgyzstan a good option for low budget families?", a: "Yes. Kyrgyzstan is the right choice for budget-conscious families who refuse to compromise on NMC approval. University selection matters here more than anywhere else — we shortlist only proven institutions with strong FMGE outcomes." },
  { q: "What NEET score is needed for MBBS in Kyrgyzstan?", a: "NEET qualification is mandatory. The minimum is 50th percentile for general category (40th for reserved categories)." },
  { q: "How long is MBBS in Kyrgyzstan?", a: "MBBS in Kyrgyzstan is 6 years total, with English-medium instruction at the universities we recommend." },
  { q: "When is the intake for MBBS in Kyrgyzstan?", a: "The primary intakes are August and September every year." },
]

export default function MbbsKyrgyzstanPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <section className="mx-auto max-w-4xl px-4 pb-12 pt-32">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent mb-4">
            🇰🇬 Budget Friendly
          </div>
          <h1 className="font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
            MBBS in Kyrgyzstan for Indian Students — 2025-26 Guide
          </h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Kyrgyzstan is the most affordable NMC-approved entry into medicine, with total costs from ₹18 lakh. The right choice for budget-conscious families who refuse to compromise on recognition.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="https://wa.me/919084676999?text=Hi%20Abroad%20Visions%2C%20I%20want%20to%20know%20more%20about%20MBBS%20in%20Kyrgyzstan" className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white hover:bg-accent/90 transition-colors">
              Get Free Counselling
            </a>
            <Link href="/mbbs-university-finder?country=Kyrgyzstan" className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-colors">
              View All Kyrgyzstan Universities
            </Link>
          </div>
        </section>

        <section className="bg-muted/40 py-10">
          <div className="mx-auto max-w-4xl px-4">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { label: "Total Cost", value: "₹18–28 Lakh" },
                { label: "Duration", value: "6 Years" },
                { label: "Medium", value: "English" },
                { label: "Intake", value: "Aug / Sep" },
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
            <h2 className="text-2xl font-semibold text-foreground mb-6">Why MBBS in Kyrgyzstan?</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "Most Affordable NMC-Approved Option", body: "Kyrgyzstan offers the lowest total cost among NMC-approved MBBS abroad destinations — without compromising on recognition." },
                { title: "Established Indian Community", body: "Indian community presence is well established in major university cities like Osh and Bishkek." },
                { title: "Careful University Selection", body: "We shortlist only proven institutions with strong NExT preparation focus — university choice matters more here than anywhere else." },
                { title: "English Medium Throughout", body: "All universities we recommend teach in English, easing the transition for Indian students." },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-border p-5">
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-2">MBBS in Kyrgyzstan — Total Fee Breakdown</h2>
            <p className="text-muted-foreground mb-6 text-sm">All-inclusive costs for the full 6-year programme. Not just Year 1 fees.</p>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-foreground">Expense</th>
                    <th className="px-4 py-3 text-left font-semibold text-foreground">Per Year</th>
                    <th className="px-4 py-3 text-left font-semibold text-foreground">6 Years Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { item: "Tuition Fees", perYear: "₹2 – 3L", total: "₹12 – 18L" },
                    { item: "Hostel / Accommodation", perYear: "₹60K – 90K", total: "₹3.6 – 5.4L" },
                    { item: "Food", perYear: "₹45K – 70K", total: "₹2.7 – 4.2L" },
                    { item: "Return Travel (India)", perYear: "₹35K – 50K", total: "₹2.1 – 3L" },
                    { item: "Visa & Misc", perYear: "₹15K – 25K", total: "₹0.9 – 1.5L" },
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
                    <td className="px-4 py-3 text-accent">₹18 – 28 Lakh</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">* Exact costs depend on university chosen and lifestyle. We provide a written itemised breakdown before you commit.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-2">Top NMC-Approved Universities in Kyrgyzstan</h2>
            <p className="text-muted-foreground mb-6 text-sm">University selection matters most for a strong FMGE outcome. Here are the institutions we work with.</p>
            <div className="space-y-4">
              {universities.map((uni) => (
                <div key={uni.name} className="rounded-xl border border-border p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-base font-semibold text-foreground">🇰🇬 {uni.name}</span>
                      <span className="text-xs text-muted-foreground">· {uni.city} · Est. {uni.established}</span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{uni.highlight}</p>
                  </div>
                  <div className="shrink-0">
                    <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">FMGE: {uni.fmge}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Link href="/mbbs-university-finder?country=Kyrgyzstan" className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline">
                View all Kyrgyzstan universities in the finder →
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-6">Eligibility for MBBS in Kyrgyzstan</h2>
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
            <h2 className="text-2xl font-semibold text-foreground mb-2">Is Kyrgyzstan the right choice for your child?</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto text-sm">Share your NEET score and budget. We'll tell you honestly whether Kyrgyzstan makes sense for your family.</p>
            <a href="https://wa.me/919084676999?text=Hi%20Abroad%20Visions%2C%20I%20want%20free%20counselling%20for%20MBBS%20in%20Kyrgyzstan" className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent/90 transition-colors">
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
                { name: "Armenia", href: "/mbbs-in-armenia" },
                { name: "Bangladesh", href: "/mbbs-in-bangladesh" },
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
