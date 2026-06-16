import { CounsellingForm } from "@/components/counselling-form"
import { ShieldCheck, AlertTriangle, CheckCircle2 } from "lucide-react"

export function MbbsKyrgyzstanFees2025() {
  return (
    <article className="space-y-10 text-sm leading-relaxed text-muted-foreground [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:font-display [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mt-6 [&_h3]:mb-3 [&_p]:mb-4 [&_p]:leading-relaxed">

      {/* Intro */}
      <p>
        Kyrgyzstan has quietly become one of the most searched MBBS destinations among Indian families —
        and for good reason. With total costs ranging from <strong className="text-foreground">₹18 to ₹29 lakhs</strong> for
        the entire 6-year programme, it sits comfortably between the ultra-cheap (but risky) options and
        the well-known but pricier routes like Russia or Georgia.
      </p>
      <p>
        This guide gives you the actual numbers — tuition, hostel, living costs, and the hidden charges
        most consultants gloss over — so your family can plan without surprises.
      </p>

      {/* NMC box */}
      <div className="rounded-2xl border border-success/30 bg-success/5 p-5 flex gap-4">
        <ShieldCheck className="size-5 shrink-0 text-success mt-0.5" />
        <div>
          <p className="font-semibold text-foreground mb-1">NMC Recognition Status</p>
          <p className="text-sm text-muted-foreground">
            All universities listed in this guide are NMC-approved and WHO-recognized as of 2025.
            Students must clear FMGE / NExT to practice medicine in India after returning.
            Always verify NMC status directly before applying — lists are updated regularly.
          </p>
        </div>
      </div>

      <h2>Why Kyrgyzstan for MBBS?</h2>
      <p>
        Kyrgyzstan offers English-medium MBBS programmes at government and private universities with no
        entrance exam beyond NEET qualification. The country has an established Indian student community,
        Indian mess facilities at most campuses, and living costs that are among the lowest in Central Asia.
      </p>
      <ul className="space-y-2 pl-4 list-none">
        {[
          "No donation required at NMC-approved universities",
          "English-medium instruction — no IELTS required",
          "NEET qualification accepted (3-year-old NEET valid)",
          "September primary intake; some universities offer February intake",
          "Average living cost: USD 150–250 per month (approx. ₹12,500–₹20,800)",
          "6-year programme: 5 years academic + 1 year internship",
        ].map((point) => (
          <li key={point} className="flex items-start gap-2.5">
            <CheckCircle2 className="size-4 shrink-0 text-success mt-0.5" />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <h2>University-Wise Fee Breakdown (2025)</h2>
      <p>
        Fees are fixed in USD. The INR equivalent varies with exchange rates — always confirm
        directly with the university before paying. These are tuition-only figures; hostel and
        living costs are listed separately below.
      </p>

      {/* Fee table */}
      <div className="overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-secondary/60">
              <th className="px-4 py-3 text-left font-semibold text-foreground">University</th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">Annual Tuition (USD)</th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">Annual Tuition (₹ approx.)</th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">6-yr Total (₹ approx.)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {[
              {
                name: "Osh State Medical University",
                usd: "$3,000 – $4,000",
                inr: "₹2.5L – ₹3.3L",
                total: "₹15L – ₹20L",
              },
              {
                name: "Kyrgyz State Medical Academy (KSMA)",
                usd: "$3,200 – $4,500",
                inr: "₹2.7L – ₹3.7L",
                total: "₹16L – ₹22L",
              },
              {
                name: "International School of Medicine (ISM)",
                usd: "$4,000 – $5,000",
                inr: "₹3.3L – ₹4.1L",
                total: "₹20L – ₹25L",
              },
              {
                name: "International Higher School of Medicine (IHSM)",
                usd: "$5,500",
                inr: "₹4.6L",
                total: "₹27L – ₹29L",
              },
              {
                name: "Asian Medical Institute (ASMI)",
                usd: "$3,200 – $4,000",
                inr: "₹2.7L – ₹3.3L",
                total: "₹16L – ₹20L",
              },
            ].map((row) => (
              <tr key={row.name} className="hover:bg-secondary/40 transition-colors">
                <td className="px-4 py-3 font-medium text-foreground">{row.name}</td>
                <td className="px-4 py-3">{row.usd}</td>
                <td className="px-4 py-3">{row.inr}</td>
                <td className="px-4 py-3 font-medium text-foreground">{row.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-muted-foreground">
        * Tuition converted at approx. ₹83/USD. Exchange rate fluctuations will affect INR totals.
        Always confirm current fees directly with the university.
      </p>

      <h2>Hostel & Living Costs</h2>
      <p>
        Living costs in Kyrgyzstan are genuinely low. Most universities provide on-campus hostel
        accommodation and Indian mess facilities, which keeps daily expenses predictable for Indian families.
      </p>

      <div className="overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-secondary/60">
              <th className="px-4 py-3 text-left font-semibold text-foreground">Expense</th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">Per Year (USD)</th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">Per Year (₹ approx.)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {[
              { item: "University hostel", usd: "$600 – $1,000", inr: "₹50,000 – ₹83,000" },
              { item: "Indian mess (food)", usd: "$1,200 – $1,800", inr: "₹1L – ₹1.5L" },
              { item: "Medical insurance", usd: "$100 – $135", inr: "₹8,300 – ₹11,200" },
              { item: "Visa renewal (annual)", usd: "$50 – $100", inr: "₹4,200 – ₹8,300" },
              { item: "Personal expenses", usd: "$600 – $1,200", inr: "₹50,000 – ₹1L" },
            ].map((row) => (
              <tr key={row.item} className="hover:bg-secondary/40 transition-colors">
                <td className="px-4 py-3 font-medium text-foreground">{row.item}</td>
                <td className="px-4 py-3">{row.usd}</td>
                <td className="px-4 py-3">{row.inr}</td>
              </tr>
            ))}
            <tr className="bg-secondary/60 font-semibold">
              <td className="px-4 py-3 text-foreground">Total living (per year)</td>
              <td className="px-4 py-3 text-foreground">$2,550 – $4,235</td>
              <td className="px-4 py-3 text-foreground">₹2.1L – ₹3.5L</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Total Cost Summary (6 Years)</h2>
      <p>
        Here is what a realistic all-in budget looks like for the full 6-year programme, including
        tuition, hostel, food, insurance, and personal expenses. Flight costs are not included as
        they vary.
      </p>

      <div className="grid gap-4 sm:grid-cols-3">
        {[
          {
            label: "Budget option",
            uni: "Osh State / KSMA",
            total: "₹18 – 22 Lakhs",
            note: "Lowest tuition + basic hostel",
            tone: "text-success",
          },
          {
            label: "Mid-range",
            uni: "ISM Bishkek",
            total: "₹22 – 26 Lakhs",
            note: "Strong FMGE support + better facilities",
            tone: "text-accent",
          },
          {
            label: "Premium option",
            uni: "IHSM Bishkek",
            total: "₹26 – 30 Lakhs",
            note: "Higher tuition, structured curriculum",
            tone: "text-foreground",
          },
        ].map((opt) => (
          <div
            key={opt.label}
            className="rounded-2xl border border-border bg-card p-5"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {opt.label}
            </p>
            <p className="mt-1 text-sm font-medium text-foreground">{opt.uni}</p>
            <p className={`mt-3 font-display text-2xl font-semibold ${opt.tone}`}>
              {opt.total}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">{opt.note}</p>
          </div>
        ))}
      </div>

      <h2>FMGE Performance — What the Data Says</h2>
      <p>
        This is where families need to pay close attention. The overall FMGE June 2025 pass rate
        was <strong className="text-foreground">18.61%</strong> — meaning roughly 8 in 10 foreign
        medical graduates did not clear the exam on their first attempt.
      </p>
      <p>
        University selection matters more than country selection. Within Kyrgyzstan, FMGE performance
        varies significantly:
      </p>

      <div className="overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-secondary/60">
              <th className="px-4 py-3 text-left font-semibold text-foreground">University</th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">FMGE Pass Rate (2024)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {[
              { uni: "I.K. Akhunbaev Kyrgyz State Medical Academy (KSMA)", rate: "31.56%", good: true },
              { uni: "S. Tentishev Asian Medical Institute (ASMI)", rate: "26.27%", good: true },
              { uni: "Osh State Medical University", rate: "~20–25% (varies by batch)", good: false },
              { uni: "International School of Medicine (ISM)", rate: "~22–28% (varies by batch)", good: false },
            ].map((row) => (
              <tr key={row.uni} className="hover:bg-secondary/40 transition-colors">
                <td className="px-4 py-3 font-medium text-foreground">{row.uni}</td>
                <td className={`px-4 py-3 font-semibold ${row.good ? "text-success" : "text-muted-foreground"}`}>
                  {row.rate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-muted-foreground">
        Source: NBEMS FMGE 2024 data. Rates vary between sessions (June / December).
        Always ask the university for their latest FMGE batch-wise data before applying.
      </p>

      {/* Warning box */}
      <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-5 flex gap-4">
        <AlertTriangle className="size-5 shrink-0 text-amber-500 mt-0.5" />
        <div>
          <p className="font-semibold text-foreground mb-1">Our honest take</p>
          <p className="text-sm text-muted-foreground">
            Kyrgyzstan is a legitimate, affordable route — but the FMGE pass rates are not exceptional.
            Students who clear FMGE from Kyrgyzstan universities typically prepared seriously during
            their 5th and 6th years with dedicated coaching. Ask any university you shortlist what
            structured FMGE preparation they offer — if they cannot answer that clearly, that is a signal.
          </p>
        </div>
      </div>

      <h2>Documents Required for Admission</h2>
      <ul className="space-y-2 pl-4 list-none">
        {[
          "10th & 12th marksheets and passing certificates",
          "NEET scorecard and admit card",
          "Valid passport (minimum 18 months validity)",
          "Recent passport-size photographs",
          "Birth certificate",
          "Medical fitness certificate from a registered practitioner",
          "Police clearance certificate (required by some universities)",
          "Bank statements showing financial capacity",
        ].map((doc) => (
          <li key={doc} className="flex items-start gap-2.5">
            <CheckCircle2 className="size-4 shrink-0 text-accent mt-0.5" />
            <span>{doc}</span>
          </li>
        ))}
      </ul>

      <h2>Admission Timeline (September Intake)</h2>
      <div className="space-y-3">
        {[
          { month: "March – May", step: "Applications open. Begin counselling, shortlist universities." },
          { month: "May – June", step: "Submit documents and application forms." },
          { month: "June – July", step: "Offer letter received from university." },
          { month: "July – August", step: "Pay tuition deposit to confirm seat." },
          { month: "August", step: "Apply for Kyrgyzstan student visa (processing: 3–6 weeks)." },
          { month: "September", step: "Travel, arrival, orientation, and classes begin." },
        ].map((item, i) => (
          <div key={item.month} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                {i + 1}
              </div>
              {i < 5 && <div className="mt-1 w-px flex-1 bg-border" />}
            </div>
            <div className="pb-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">{item.month}</p>
              <p className="mt-0.5 text-sm text-foreground">{item.step}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>Is Kyrgyzstan the Right Choice for Your Child?</h2>
      <p>
        Kyrgyzstan suits students and families who need the lowest possible total cost while staying
        on an NMC-recognized pathway. It is particularly strong for students who:
      </p>
      <ul className="space-y-2 pl-4 list-none">
        {[
          "Have a NEET score that qualifies for NMC eligibility but not for a government seat in India",
          "Have a budget of ₹18–28 lakhs for the full programme",
          "Are disciplined self-studiers who will prepare seriously for FMGE",
          "Want English-medium teaching without the high fees of Georgia or Russia",
        ].map((point) => (
          <li key={point} className="flex items-start gap-2.5">
            <CheckCircle2 className="size-4 shrink-0 text-success mt-0.5" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <p>
        If your budget is slightly higher and FMGE pass rate is your top priority, also compare
        Uzbekistan (Tashkent Medical Academy achieved 100% FMGE in 2024) and Bangladesh, which
        has historically higher pass rates due to curriculum similarity with India.
      </p>

      {/* CTA */}
      <div className="rounded-2xl border border-accent/30 bg-accent/5 p-6 text-center">
        <p className="font-display text-lg font-semibold text-foreground">
          Not sure if Kyrgyzstan is the right fit?
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Tell us your NEET score, budget, and country preferences — we will give you an honest,
          data-backed recommendation at no charge. No commission pressure. No hidden agenda.
        </p>
      </div>

      {/* Counselling form embed */}
      <div id="counselling">
        <CounsellingForm />
      </div>
    </article>
  )
}
