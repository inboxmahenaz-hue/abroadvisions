import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "MBBS in Kazakhstan 2025-26 — Fees, Top Universities & Admission | Abroad Visions",
  description:
    "Complete guide to MBBS in Kazakhstan for Indian students. NMC-approved universities, total fees ₹25–38 lakh, strong clinical training, modern campuses. Honest advice.",
  keywords: [
    "MBBS in Kazakhstan",
    "MBBS in Kazakhstan fees for Indian students",
    "MBBS in Kazakhstan fees in rupees",
    "NMC approved universities in Kazakhstan",
    "MBBS in Kazakhstan 2025",
    "Kazakh National Medical University fees",
    "West Kazakhstan State Medical University fees",
    "best country for MBBS abroad Indian students",
  ],
  alternates: { canonical: "https://abroadvisions.com/mbbs-in-kazakhstan" },
  openGraph: {
    title: "MBBS in Kazakhstan 2025-26 — Fees, Top Universities & Admission",
    description: "NMC-approved MBBS in Kazakhstan. Total cost ₹25–38 lakh. Modern campuses with strong clinical training.",
    url: "https://abroadvisions.com/mbbs-in-kazakhstan",
    siteName: "Abroad Visions",
    type: "article",
  },
}

const universities = [
  { name: "Kazakh National Medical University", city: "Almaty", established: "1930", highlight: "Kazakhstan's leading medical university with modern infrastructure", fmge: "Strong" },
  { name: "West Kazakhstan State Medical University", city: "Aktobe", established: "1957", highlight: "Well-equipped teaching hospitals, growing Indian student community", fmge: "Above average" },
]

const faqs = [
  { q: "Is MBBS from Kazakhstan valid in India?", a: "Yes — provided the university is on the NMC approved list. After completing MBBS in Kazakhstan, Indian students must clear FMGE (or the forthcoming NExT exam) to practise medicine in India." },
  { q: "What is the total cost of MBBS in Kazakhstan?", a: "The all-inclusive total cost for MBBS in Kazakhstan ranges from ₹25 lakh to ₹38 lakh. This includes tuition, hostel, food, and annual return travel." },
  { q: "Why choose Kazakhstan for MBBS?", a: "Kazakhstan offers modern university infrastructure with well-equipped teaching hospitals, strong clinical training, and two intake windows per year for flexibility." },
  { q: "What NEET score is needed for MBBS in Kazakhstan?", a: "NEET qualification is mandatory. The minimum is 50th percentile for general category (40th for reserved categories)." },
  { q: "How long is MBBS in Kazakhstan?", a: "MBBS in Kazakhstan is 5 years of academic study plus 1 year of compulsory clinical internship — 6 years total." },
  { q: "When is the intake for MBBS in Kazakhstan?", a: "Kazakhstan offers two intake windows — June and September — giving families flexibility in planning the admission timeline." },
]

export default function MbbsKazakhstanPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <section className="mx-auto max-w-4xl px-4 pb-12 pt-32">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent mb-4">
            🇰🇿 Strong Clinical Training
          </div>
          <h1 className="font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
            MBBS in Kazakhstan for Indian Students — 2025-26 Guide
          </h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Kazakhstan offers modern campuses and strong clinical training with total costs from ₹25 lakh. Two intake windows give families flexibility in planning.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="https://wa.me/919084676999?text=Hi%20Abroad%20Visions%2C%20I%20want%20to%20know%20more%20about%20MBBS%20in%20Kazakhstan" className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white hover:bg-accent/90 transition-colors">
              Get Free Counselling
            </a>
            <Link href="/mbbs-university-finder?country=Kazakhstan" className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-colors">
              View All Kazakhstan Universities
            </Link>
          </div>
        </section>

        <section className="bg-muted/40 py-10">
          <div className="mx-auto max-w-4xl px-4">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { label: "Total Cost", value: "₹25–38 Lakh" },
                { label: "Duration", value: "5+1 Years" },
                { label: "Medium", value: "English" },
                { label: "Intake", value: "Jun / Sep" },
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
            <h2 className="text-2xl font-semibold text-foreground mb-6">Why MBBS in Kazakhstan?</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "Modern Infrastructure", body: "Kazakh universities feature modern campuses with well-equipped teaching hospitals — a strong foundation for clinical exposure." },
                { title: "Two Intake Windows", body: "June and September intakes give families flexibility in planning the admission timeline." },
                { title: "Strong Clinical Training", body: "Kazakhstan's medical universities place heavy emphasis on hands-on clinical training from early years." },
                { title: "Indian Food Available", body: "Indian food options are available in major university cities, easing the cultural transition." },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-border p-5">
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-2">MBBS in Kazakhstan — Total Fee Breakdown</h2>
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
                    { item: "Tuition Fees", perYear: "₹2.8 – 4.2L", total: "₹16.8 – 25.2L" },
                    { item: "Hostel / Accommodation", perYear: "₹85K – 1.2L", total: "₹5.1 – 7.2L" },
                    { item: "Food", perYear: "₹60K – 90K", total: "₹3.6 – 5.4L" },
                    { item: "Return Travel (India)", perYear: "₹40K – 55K", total: "₹2.4 – 3.3L" },
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
                    <td className="px-4 py-3 text-accent">₹25 – 38 Lakh</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">* Exact costs depend on university chosen and lifestyle. We provide a written itemised breakdown before you commit.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-2">Top NMC-Approved Universities in Kazakhstan</h2>
            <p className="text-muted-foreground mb-6 text-sm">University selection matters most for a strong FMGE outcome. Here are the institutions we work with.</p>
            <div className="space-y-4">
              {universities.map((uni) => (
                <div key={uni.name} className="rounded-xl border border-border p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-base font-semibold text-foreground">🇰🇿 {uni.name}</span>
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
              <Link href="/mbbs-university-finder?country=Kazakhstan" className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline">
                View all Kazakhstan universities in the finder →
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-6">Eligibility for MBBS in Kazakhstan</h2>
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
            <h2 className="text-2xl font-semibold text-foreground mb-2">Is Kazakhstan the right choice for your child?</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto text-sm">Share your NEET score and budget. We'll tell you honestly whether Kazakhstan makes sense for your family.</p>
            <a href="https://wa.me/919084676999?text=Hi%20Abroad%20Visions%2C%20I%20want%20free%20counselling%20for%20MBBS%20in%20Kazakhstan" className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent/90 transition-colors">
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
                { name: "Kyrgyzstan", href: "/mbbs-in-kyrgyzstan" },
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
