import { CounsellingForm } from "@/components/counselling-form"
import { ShieldCheck, AlertTriangle, CheckCircle2, TrendingDown, IndianRupee } from "lucide-react"
import Link from "next/link"

export function MbbsAbroadCostComparison2025() {
  return (
    <article className="space-y-10 text-sm leading-relaxed text-muted-foreground [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:font-display [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mt-6 [&_h3]:mb-3 [&_p]:mb-4 [&_p]:leading-relaxed">

      {/* Intro */}
      <p>
        Every family asking about MBBS abroad eventually asks the same question: <strong className="text-foreground">what will it actually cost — everything included?</strong> Not just year one. Not just tuition. The real number your family needs to plan for.
      </p>
      <p>
        This guide covers all 8 NMC-approved destinations we recommend — Kyrgyzstan, Uzbekistan, Kazakhstan, Russia, Armenia, Georgia, Bangladesh, and Nepal — with honest all-inclusive cost ranges for the full 6-year programme. Tuition, hostel, food, visa, insurance, travel. No surprises.
      </p>

      {/* Key stat box */}
      <div className="rounded-2xl border border-accent/30 bg-accent/5 p-5 flex gap-4">
        <IndianRupee className="size-5 shrink-0 text-accent mt-0.5" />
        <div>
          <p className="font-semibold text-foreground mb-1">The number most consultants hide</p>
          <p className="text-sm text-muted-foreground">
            Private MBBS in India costs <strong className="text-foreground">₹80 lakh to ₹2 crore</strong> at management and deemed university seats.
            The most expensive NMC-approved MBBS abroad destination on this list — Nepal — costs <strong className="text-foreground">₹50–70 lakhs total</strong>.
            Every other country costs less than half of an Indian private seat.
          </p>
        </div>
      </div>

      <h2>What "Total Cost" Actually Means</h2>
      <p>
        Most consultants and university websites quote Year 1 tuition only — sometimes as low as ₹2–3 lakhs — which makes the programme look far cheaper than it is. A 6-year MBBS abroad involves:
      </p>
      <ul className="space-y-2 pl-4 list-none">
        {[
          "Tuition fees — paid annually for 5 academic years",
          "Hostel / accommodation — on-campus or private",
          "Food — Indian mess or self-cooking (significant variation)",
          "Annual return flights to India (₹30,000–₹60,000 per trip)",
          "Student visa + annual renewal fees",
          "Medical insurance (mandatory in most countries)",
          "Personal expenses — SIM, transport, clothing, entertainment",
          "One-time costs — admission fee, document attestation, forex setup",
        ].map((point) => (
          <li key={point} className="flex items-start gap-2.5">
            <CheckCircle2 className="size-4 shrink-0 text-accent mt-0.5" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <p>
        All cost ranges in this guide include every item above. When we say ₹18–28 lakhs for Kyrgyzstan, that is the realistic all-in number for a student who lives sensibly — not just the tuition invoice.
      </p>

      <h2>All 8 Countries — Cost Comparison at a Glance</h2>
      <p>
        Sorted from lowest to highest total programme cost. All figures are for the complete 6-year programme (5 years academic + 1 year internship where applicable).
      </p>

      {/* Master comparison table */}
      <div className="overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-secondary/60">
              <th className="px-4 py-3 text-left font-semibold text-foreground">Country</th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">Total Cost (₹)</th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">Annual Tuition (USD)</th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">Duration</th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">Intake</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {[
              { country: "🇰🇬 Kyrgyzstan", total: "₹18 – 28L", tuition: "$3,000 – $5,500", duration: "6 years", intake: "Sep", best: true },
              { country: "🇺🇿 Uzbekistan", total: "₹20 – 30L", tuition: "$3,500 – $6,000", duration: "6 years", intake: "Sep / Oct", best: false },
              { country: "🇦🇲 Armenia", total: "₹22 – 30L", tuition: "$4,000 – $6,000", duration: "6 years", intake: "Sep / Oct", best: false },
              { country: "🇷🇺 Russia", total: "₹22 – 38L", tuition: "$4,000 – $7,000", duration: "6 years", intake: "Sep", best: false },
              { country: "🇰🇿 Kazakhstan", total: "₹25 – 38L", tuition: "$4,500 – $7,500", duration: "5+1 years", intake: "Jun / Sep", best: false },
              { country: "🇬🇪 Georgia", total: "₹28 – 42L", tuition: "$5,000 – $8,000", duration: "6 years", intake: "Sep / Feb", best: false },
              { country: "🇧🇩 Bangladesh", total: "₹30 – 45L", tuition: "$5,000 – $8,000", duration: "5+1 years", intake: "Jan / Jul", best: false },
              { country: "🇳🇵 Nepal", total: "₹50 – 70L", tuition: "$8,000 – $12,000", duration: "5.5 years", intake: "Aug / Sep", best: false },
            ].map((row) => (
              <tr key={row.country} className={`hover:bg-secondary/40 transition-colors ${row.best ? "bg-success/5" : ""}`}>
                <td className="px-4 py-3 font-semibold text-foreground">{row.country}</td>
                <td className={`px-4 py-3 font-bold ${row.best ? "text-success" : "text-foreground"}`}>{row.total}</td>
                <td className="px-4 py-3">{row.tuition}</td>
                <td className="px-4 py-3">{row.duration}</td>
                <td className="px-4 py-3">{row.intake}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-muted-foreground">
        * All-inclusive estimates: tuition + hostel + food + visa + insurance + travel. USD converted at approx. ₹83. Exchange rate movements affect final INR totals.
        Verify current fees directly with universities before committing.
      </p>

      <h2>Country-by-Country Breakdown</h2>
      <p>Numbers alone don't tell the full story. Here's what each destination actually offers for the price — and what to watch out for.</p>

      {/* Kyrgyzstan */}
      <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-success">Lowest Budget</p>
            <h3 className="mt-1 text-xl font-semibold text-foreground">🇰🇬 Kyrgyzstan — ₹18 to 28 Lakhs</h3>
          </div>
          <span className="rounded-full bg-success/10 px-3 py-1 text-xs font-semibold text-success">Most Affordable</span>
        </div>
        <p>The most affordable NMC-approved MBBS destination. English-medium, September intake, established Indian student community. Annual tuition ranges from $3,000 at Osh State Medical University to $5,500 at IHSM.</p>
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="rounded-xl bg-secondary/60 p-3">
            <p className="font-semibold text-foreground">Annual tuition</p>
            <p>$3,000 – $5,500 (₹2.5L – ₹4.6L)</p>
          </div>
          <div className="rounded-xl bg-secondary/60 p-3">
            <p className="font-semibold text-foreground">Annual living</p>
            <p>$2,500 – $4,200 (₹2.1L – ₹3.5L)</p>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          ⚠️ FMGE pass rates are moderate (20–31% by university). Students need serious FMGE prep in years 5–6.{" "}
          <Link href="/blog/mbbs-in-kyrgyzstan-fees-2025" className="text-accent underline underline-offset-2">Full Kyrgyzstan cost guide →</Link>
        </p>
      </div>

      {/* Uzbekistan */}
      <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">Best Value</p>
            <h3 className="mt-1 text-xl font-semibold text-foreground">🇺🇿 Uzbekistan — ₹20 to 30 Lakhs</h3>
          </div>
          <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">Best FMGE ROI</span>
        </div>
        <p>Slightly higher cost than Kyrgyzstan but significantly better FMGE outcomes. Tashkent Medical Academy achieved <strong className="text-foreground">100% FMGE pass rate</strong> in 2024 — the best of any country we track. That number changes the entire return-on-investment calculation.</p>
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="rounded-xl bg-secondary/60 p-3">
            <p className="font-semibold text-foreground">Annual tuition</p>
            <p>$3,500 – $6,000 (₹2.9L – ₹5L)</p>
          </div>
          <div className="rounded-xl bg-secondary/60 p-3">
            <p className="font-semibold text-foreground">Annual living</p>
            <p>$2,500 – $4,000 (₹2.1L – ₹3.3L)</p>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          ✅ Strong Indian community, Indian food available, modern campuses. September/October intake.
        </p>
      </div>

      {/* Armenia */}
      <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Hidden Gem</p>
            <h3 className="mt-1 text-xl font-semibold text-foreground">🇦🇲 Armenia — ₹22 to 30 Lakhs</h3>
          </div>
          <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-foreground">European Standards</span>
        </div>
        <p>Armenia offers European-standard medical education at Central Asian prices. Yerevan is a modern, safe city with a growing Indian student community. Often overlooked because consultants earn less commission here — which is exactly why we recommend it.</p>
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="rounded-xl bg-secondary/60 p-3">
            <p className="font-semibold text-foreground">Annual tuition</p>
            <p>$4,000 – $6,000 (₹3.3L – ₹5L)</p>
          </div>
          <div className="rounded-xl bg-secondary/60 p-3">
            <p className="font-semibold text-foreground">Annual living</p>
            <p>$2,800 – $4,000 (₹2.3L – ₹3.3L)</p>
          </div>
        </div>
      </div>

      {/* Russia */}
      <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Most Established</p>
            <h3 className="mt-1 text-xl font-semibold text-foreground">🇷🇺 Russia — ₹22 to 38 Lakhs</h3>
          </div>
          <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-foreground">30+ Years Track Record</span>
        </div>
        <p>Russia has the longest track record for Indian MBBS students — 30+ years, thousands of graduates, well-documented FMGE outcomes. Kazan, Volgograd, and Perm are the cities with the strongest Indian communities and highest FMGE rates. Wide fee range depending on university and city.</p>
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="rounded-xl bg-secondary/60 p-3">
            <p className="font-semibold text-foreground">Annual tuition</p>
            <p>$4,000 – $7,000 (₹3.3L – ₹5.8L)</p>
          </div>
          <div className="rounded-xl bg-secondary/60 p-3">
            <p className="font-semibold text-foreground">Annual living</p>
            <p>$3,000 – $5,000 (₹2.5L – ₹4.2L)</p>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          ⚠️ Currency risk: rouble fluctuations can affect INR costs. Moscow universities are significantly more expensive than regional ones.
        </p>
      </div>

      {/* Kazakhstan */}
      <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Strong Clinicals</p>
            <h3 className="mt-1 text-xl font-semibold text-foreground">🇰🇿 Kazakhstan — ₹25 to 38 Lakhs</h3>
          </div>
          <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-foreground">Modern Campuses</span>
        </div>
        <p>Kazakhstan offers modern university campuses, strong clinical training, and a 5+1 programme structure (5 years study, 1 year internship). KazNMU in Almaty and WKSMU in Aktobe are the two strongest NMC-approved options. Slightly higher cost than Russia but newer infrastructure.</p>
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="rounded-xl bg-secondary/60 p-3">
            <p className="font-semibold text-foreground">Annual tuition</p>
            <p>$4,500 – $7,500 (₹3.7L – ₹6.2L)</p>
          </div>
          <div className="rounded-xl bg-secondary/60 p-3">
            <p className="font-semibold text-foreground">Annual living</p>
            <p>$3,000 – $4,500 (₹2.5L – ₹3.7L)</p>
          </div>
        </div>
      </div>

      {/* Georgia */}
      <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Fastest Growing</p>
            <h3 className="mt-1 text-xl font-semibold text-foreground">🇬🇪 Georgia — ₹28 to 42 Lakhs</h3>
          </div>
          <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-foreground">European Standard</span>
        </div>
        <p>Georgia has become one of the most popular MBBS abroad destinations in the last 5 years — European academic standards, English medium, two intakes per year (September and February), and Tbilisi is a genuinely pleasant city to live in. Higher cost than Central Asian options but justified by academic quality at top universities.</p>
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="rounded-xl bg-secondary/60 p-3">
            <p className="font-semibold text-foreground">Annual tuition</p>
            <p>$5,000 – $8,000 (₹4.2L – ₹6.6L)</p>
          </div>
          <div className="rounded-xl bg-secondary/60 p-3">
            <p className="font-semibold text-foreground">Annual living</p>
            <p>$3,500 – $5,500 (₹2.9L – ₹4.6L)</p>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          ⚠️ Quality varies significantly between universities. David Tvildiani and University of Georgia have strong outcomes; not all Georgian universities are equal.
        </p>
      </div>

      {/* Bangladesh */}
      <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Closest to Home</p>
            <h3 className="mt-1 text-xl font-semibold text-foreground">🇧🇩 Bangladesh — ₹30 to 45 Lakhs</h3>
          </div>
          <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-foreground">Indian Curriculum</span>
        </div>
        <p>Bangladesh follows a curriculum very similar to Indian medical colleges — same subjects, same structure, same language of instruction. This directly translates to higher FMGE pass rates. Two intakes per year (January and July) provide flexibility. Cultural familiarity makes the transition easiest for Indian students.</p>
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="rounded-xl bg-secondary/60 p-3">
            <p className="font-semibold text-foreground">Annual tuition</p>
            <p>$5,000 – $8,000 (₹4.2L – ₹6.6L)</p>
          </div>
          <div className="rounded-xl bg-secondary/60 p-3">
            <p className="font-semibold text-foreground">Annual living</p>
            <p>$2,500 – $4,000 (₹2.1L – ₹3.3L)</p>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          ✅ Historically higher FMGE pass rates due to curriculum similarity. No language barrier. Lowest flight costs.
        </p>
      </div>

      {/* Nepal */}
      <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Indian Syllabus</p>
            <h3 className="mt-1 text-xl font-semibold text-foreground">🇳🇵 Nepal — ₹50 to 70 Lakhs</h3>
          </div>
          <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-foreground">Most Expensive</span>
        </div>
        <p>Nepal is the most expensive MBBS abroad destination on our list — and the one most similar to studying in India. Same curriculum, same language, familiar culture, easy travel. The premium is real. At ₹50–70 lakhs total, it still beats Indian private MBBS, but only just. Recommended only if proximity to India and cultural familiarity are non-negotiable priorities.</p>
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="rounded-xl bg-secondary/60 p-3">
            <p className="font-semibold text-foreground">Annual tuition</p>
            <p>$8,000 – $12,000 (₹6.6L – ₹10L)</p>
          </div>
          <div className="rounded-xl bg-secondary/60 p-3">
            <p className="font-semibold text-foreground">Annual living</p>
            <p>$3,500 – $5,000 (₹2.9L – ₹4.2L)</p>
          </div>
        </div>
      </div>

      <h2>Which Country Gives the Best Value for Money?</h2>
      <p>
        Cost alone is not the right metric. The right question is: <strong className="text-foreground">which country gives the best chance of your child practising medicine in India</strong> — at a cost your family can manage?
      </p>

      <div className="overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-secondary/60">
              <th className="px-4 py-3 text-left font-semibold text-foreground">Priority</th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">Best Country</th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">Why</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {[
              { priority: "Lowest total cost", country: "Kyrgyzstan", why: "₹18–28L all-in, NMC approved" },
              { priority: "Best FMGE pass rate", country: "Uzbekistan", why: "Tashkent Medical Academy: 100% FMGE 2024" },
              { priority: "Best cost vs FMGE balance", country: "Uzbekistan / Armenia", why: "Strong outcomes, affordable fees" },
              { priority: "European standard, mid budget", country: "Georgia / Armenia", why: "Modern education, ₹22–42L range" },
              { priority: "Established track record", country: "Russia", why: "30+ years, large Indian alumni network" },
              { priority: "Curriculum closest to India", country: "Bangladesh / Nepal", why: "Same syllabus, higher FMGE familiarity" },
              { priority: "Budget under ₹25L", country: "Kyrgyzstan", why: "Only NMC-approved option in this range" },
            ].map((row) => (
              <tr key={row.priority} className="hover:bg-secondary/40 transition-colors">
                <td className="px-4 py-3 font-medium text-foreground">{row.priority}</td>
                <td className="px-4 py-3 font-semibold text-accent">{row.country}</td>
                <td className="px-4 py-3">{row.why}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>The Country We Do Not Recommend — and Why</h2>
      <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-5 flex gap-4">
        <AlertTriangle className="size-5 shrink-0 text-amber-500 mt-0.5" />
        <div>
          <p className="font-semibold text-foreground mb-1">Philippines — excluded from our recommendations</p>
          <p className="text-sm text-muted-foreground">
            The NMC issued a compliance advisory in 2021 flagging Philippines medical universities for Indian students.
            Students have faced FMGE registration difficulties. Until this is formally resolved by NMC, we will not send
            any student to the Philippines — regardless of the commission we would earn. Your child's licence is not worth the risk.
          </p>
        </div>
      </div>

      <h2>NMC Eligibility — What Every Student Must Know</h2>
      <div className="rounded-2xl border border-success/30 bg-success/5 p-5 flex gap-4">
        <ShieldCheck className="size-5 shrink-0 text-success mt-0.5" />
        <div>
          <p className="font-semibold text-foreground mb-1">NEET qualification is mandatory from 2024</p>
          <p className="text-sm text-muted-foreground">
            To study MBBS abroad and be eligible to appear for FMGE / NExT in India, you must be NEET-qualified
            (minimum 50th percentile for general category, 40th for reserved). Every university in this guide accepts
            NEET-qualified students. There is no high score competition — qualification is the threshold, not the ranking.
          </p>
        </div>
      </div>

      <h2>Hidden Costs Most Families Discover Too Late</h2>
      <ul className="space-y-2 pl-4 list-none">
        {[
          "Exchange rate risk — fees fixed in USD; a 5% rupee depreciation adds ₹1–2L to your total",
          "FMGE coaching — serious students spend ₹50,000–₹1.5L on dedicated prep in years 5–6",
          "Repeat year costs — if a student fails a year, add one full year of tuition and living",
          "Internship year — some countries require a paid internship year (Kazakhstan, Bangladesh)",
          "Document attestation — ₹10,000–₹30,000 one-time for apostille and embassy attestation",
          "Travel insurance and health costs — budget ₹15,000–₹25,000 per year",
        ].map((point) => (
          <li key={point} className="flex items-start gap-2.5">
            <AlertTriangle className="size-4 shrink-0 text-amber-500 mt-0.5" />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <h2>Frequently Asked Questions</h2>

      <div className="space-y-4">
        {[
          {
            q: "Which is the cheapest country for MBBS abroad for Indian students in 2025?",
            a: "Kyrgyzstan is the most affordable NMC-approved MBBS destination in 2025, with a realistic all-inclusive total of ₹18–28 lakhs for the full 6-year programme. This includes tuition, hostel, food, visa, and living costs.",
          },
          {
            q: "What is the total cost of MBBS abroad including everything?",
            a: "Total all-inclusive costs range from ₹18 lakhs (Kyrgyzstan, budget option) to ₹70 lakhs (Nepal, most expensive). Most families choose destinations in the ₹20–38 lakh range — Uzbekistan, Armenia, Russia, and Kazakhstan — which offer the best balance of cost and FMGE outcomes.",
          },
          {
            q: "Is MBBS abroad cheaper than private MBBS in India?",
            a: "Yes, significantly. Private MBBS in India costs ₹80 lakh to ₹2 crore at management and deemed university seats. Even the most expensive MBBS abroad destination (Nepal at ₹50–70L) is cheaper than most Indian private seats — and the degree carries the same NMC recognition.",
          },
          {
            q: "Which country has the best FMGE pass rate for Indian students?",
            a: "Uzbekistan — specifically Tashkent Medical Academy — achieved 100% FMGE pass rate in 2024. Bangladesh also consistently performs above average due to curriculum similarity with India. Russia's top universities (Kazan, KSMU) have strong track records. Kyrgyzstan is affordable but has moderate FMGE rates.",
          },
          {
            q: "Can I get an education loan for MBBS abroad?",
            a: "Yes. Most nationalised banks in India (SBI, Bank of Baroda, Canara Bank) offer education loans for MBBS abroad at NMC-approved universities. Loan amounts of ₹20–40 lakhs are typically approved. A separate guide on education loans for MBBS abroad is coming shortly.",
          },
        ].map((faq) => (
          <div key={faq.q} className="rounded-2xl border border-border p-5 space-y-2">
            <p className="font-semibold text-foreground">{faq.q}</p>
            <p className="text-sm text-muted-foreground">{faq.a}</p>
          </div>
        ))}
      </div>

      <h2>Our Honest Recommendation</h2>
      <p>
        If your family's budget is under ₹25 lakhs, <strong className="text-foreground">Kyrgyzstan</strong> is the only viable NMC-approved route — and it is a legitimate one, provided you choose the right university and prepare seriously for FMGE.
      </p>
      <p>
        If your budget is ₹25–35 lakhs and FMGE outcome is your top priority, <strong className="text-foreground">Uzbekistan</strong> is the strongest recommendation we make. Tashkent Medical Academy's FMGE data is the best in our entire tracking record.
      </p>
      <p>
        If your budget extends to ₹35–42 lakhs and you want European-standard education, <strong className="text-foreground">Georgia or Armenia</strong> deliver genuine quality at a price that still beats India's private seats comfortably.
      </p>
      <p>
        Every family's situation is different. NEET score, budget, preferred culture, timeline — these all affect which destination fits. That's exactly what our free counselling call is for.
      </p>

      {/* CTA */}
      <div className="rounded-2xl border border-accent/30 bg-accent/5 p-6 text-center">
        <p className="font-display text-lg font-semibold text-foreground">
          Get a personalised cost breakdown for your child
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Share your NEET score and budget. We'll tell you exactly which countries and universities fit —
          with itemised cost tables, FMGE data, and honest pros and cons. Free. No pressure.
        </p>
      </div>

      <div id="counselling">
        <CounsellingForm />
      </div>
    </article>
  )
}
