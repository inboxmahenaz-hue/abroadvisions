import { CounsellingForm } from "@/components/counselling-form"
import { ShieldCheck, AlertTriangle, CheckCircle2, TrendingUp, XCircle, IndianRupee } from "lucide-react"

export function IsMbbsAbroadWorthIt2025() {
  return (
    <article className="space-y-10 text-sm leading-relaxed text-muted-foreground [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:font-display [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mt-6 [&_h3]:mb-3 [&_p]:mb-4 [&_p]:leading-relaxed">

      {/* Intro */}
      <p>
        Every year, over <strong className="text-foreground">22 lakh Indian students</strong> sit for NEET. Roughly 1.25 lakh
        MBBS seats exist in India. That means nearly 21 lakh students — many of them genuinely capable of becoming
        doctors — either give up or scramble for alternatives. MBBS abroad is the most common alternative. And the
        most common question their families ask is: <strong className="text-foreground">is it actually worth it?</strong>
      </p>
      <p>
        The honest answer is: it depends on three things — which country, which university, and how seriously the
        student prepares for FMGE. Get all three right and MBBS abroad is an excellent decision. Get them wrong
        and it is an expensive mistake. This guide gives you the framework to tell the difference.
      </p>

      {/* Reality check box */}
      <div className="rounded-2xl border border-accent/30 bg-accent/5 p-5 flex gap-4">
        <TrendingUp className="size-5 shrink-0 text-accent mt-0.5" />
        <div>
          <p className="font-semibold text-foreground mb-1">The supply-demand reality of Indian medical seats</p>
          <p className="text-sm text-muted-foreground">
            22,79,743 students registered for NEET UG 2026. Total MBBS seats in India: ~1.25–1.30 lakh.
            Government seats at ₹10–15 lakhs: ~60,000. Private/deemed seats at ₹50 lakhs to ₹1.6 crore: ~66,000.
            MBBS abroad at ₹25–40 lakhs all-inclusive: unlimited seats at NMC-approved universities.
          </p>
        </div>
      </div>

      <h2>The Real Cost Comparison: MBBS Abroad vs Private MBBS in India</h2>
      <p>
        Most families compare MBBS abroad against government college costs — which is the wrong comparison.
        If your child got a government seat, they wouldn't be reading this. The real comparison is
        MBBS abroad vs private/deemed colleges, which is where most students actually land.
      </p>

      <div className="overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-secondary/60">
              <th className="px-4 py-3 text-left font-semibold text-foreground">Option</th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">Total 6-Year Cost</th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">Seat Availability</th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">Exam After Degree</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {[
              {
                option: "Govt. MBBS India (merit)",
                cost: "₹10–15 Lakhs",
                seats: "~60,000 (very competitive)",
                exam: "No screening exam",
                highlight: false,
              },
              {
                option: "Private/Deemed India (management quota)",
                cost: "₹80L – ₹1.6 Crore+",
                seats: "Available but expensive",
                exam: "No screening exam",
                highlight: false,
              },
              {
                option: "MBBS Abroad (Kyrgyzstan / Uzbekistan)",
                cost: "₹22–40 Lakhs all-in",
                seats: "Open admission",
                exam: "FMGE / NExT",
                highlight: true,
              },
              {
                option: "MBBS Abroad (Russia / Georgia / Kazakhstan)",
                cost: "₹35–55 Lakhs all-in",
                seats: "Open admission",
                exam: "FMGE / NExT",
                highlight: false,
              },
            ].map((row) => (
              <tr key={row.option} className={`hover:bg-secondary/40 transition-colors ${row.highlight ? "bg-success/5" : ""}`}>
                <td className="px-4 py-3 font-semibold text-foreground">{row.option}</td>
                <td className="px-4 py-3 font-medium text-foreground">{row.cost}</td>
                <td className="px-4 py-3">{row.seats}</td>
                <td className="px-4 py-3">{row.exam}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-muted-foreground">
        * MBBS abroad costs are all-inclusive (tuition + hostel + food + visa + travel) over 6 years.
        Private India costs are tuition only; add living costs and you exceed ₹1 crore in most cases.
      </p>

      <p>
        Put plainly: MBBS abroad at ₹30–40 lakhs all-inclusive costs <strong className="text-foreground">less than half</strong> of a
        management quota seat at a private Indian college. The only additional requirement is clearing FMGE
        (or NExT from 2025 onwards) to practice in India.
      </p>

      <h2>What is FMGE — and Is It Really That Hard?</h2>
      <p>
        FMGE (Foreign Medical Graduate Examination) is the screening test Indian students must clear after
        completing MBBS abroad before they can practice medicine in India. It is conducted by NBEMS (National Board
        of Examinations in Medical Sciences) twice a year. From 2025 onwards, it is being replaced by NExT
        (National Exit Test), which all medical graduates — Indian and foreign — must clear.
      </p>

      <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5 flex gap-4">
        <AlertTriangle className="size-5 shrink-0 text-amber-500 mt-0.5" />
        <div>
          <p className="font-semibold text-foreground mb-1">FMGE pass rates: the honest picture</p>
          <p className="text-sm text-muted-foreground">
            The overall FMGE pass rate is approximately 15–25% in any given attempt. This sounds alarming —
            but it is heavily skewed by students from universities with poor clinical training and no FMGE
            preparation. Students from quality universities who prepare seriously clear FMGE at much higher rates.
            The exam is the filter, not the ceiling.
          </p>
        </div>
      </div>

      <p>
        The key insight: FMGE is not harder than NEET PG. It tests the same 19 subjects as Indian MBBS.
        Students who study at NMC-approved universities with proper clinical training and dedicate 6–9 months
        to FMGE preparation consistently clear it. Students who treat MBBS abroad as an easy route and do
        minimal preparation fail repeatedly. The exam is fair — it rewards preparation, not the location of study.
      </p>

      <h2>Country-Wise: Which Countries Are Worth It?</h2>
      <p>
        Not all MBBS abroad destinations are equal. Here is an honest assessment based on NMC approval status,
        clinical training quality, FMGE outcomes, and total cost.
      </p>

      <div className="space-y-3">
        {[
          {
            country: "🇷🇺 Russia",
            verdict: "Strong — with caveats",
            verdictColor: "text-success",
            detail: "One of the oldest MBBS abroad destinations. WHO and NMC recognised. Strong clinical training at established universities. Total cost ₹35–55 lakhs. Key caveat: choose universities in warmer western cities (Kazan, Perm, Orenburg). Avoid extreme-cold regions for comfort. Excellent FMGE outcomes from top-tier universities.",
          },
          {
            country: "🇬🇪 Georgia",
            verdict: "Excellent — highest FMGE outcomes",
            verdictColor: "text-success",
            detail: "EU-standard medical education. Safe, English-friendly, European lifestyle. Total cost ₹38–55 lakhs. Georgian universities consistently produce the highest FMGE pass rates among all MBBS abroad destinations. Slightly higher cost than CIS countries but significantly better outcomes.",
          },
          {
            country: "🇰🇬 Kyrgyzstan",
            verdict: "Good — budget option with conditions",
            verdictColor: "text-accent",
            detail: "Most affordable NMC-approved option at ₹22–35 lakhs all-in. WHO and NMC recognised universities exist (Osh State Medical University, KSMA, ISM). The concern: many low-quality institutions also operate here. University selection is critical. Do not choose a university based only on low fee.",
          },
          {
            country: "🇺🇿 Uzbekistan",
            verdict: "Emerging — promising but newer",
            verdictColor: "text-accent",
            detail: "Rapidly growing with government-backed universities. Total cost ₹22–32 lakhs. NMC approvals are in place for top institutions. Fewer FMGE batches have graduated yet, so long-term data is limited. Good option for cost-conscious families who choose established institutions.",
          },
          {
            country: "🇰🇿 Kazakhstan",
            verdict: "Strong — but higher cost",
            verdictColor: "text-success",
            detail: "High-quality medical education with strong infrastructure. Total cost ₹32–48 lakhs. Note: IELTS is required at most Kazakhstani universities, which adds preparation cost and time. Better suited for students with English proficiency certificates.",
          },
          {
            country: "🇦🇲 Armenia",
            verdict: "Affordable — smaller community",
            verdictColor: "text-accent",
            detail: "USD 3,000–6,500 per year tuition. NMC approved universities present. Smaller Indian student community than Russia or Kyrgyzstan. Good option for students seeking lower costs in a safe environment. FMGE data is growing as more batches graduate.",
          },
          {
            country: "🇧🇩 Bangladesh",
            verdict: "Closest — culturally familiar",
            verdictColor: "text-success",
            detail: "5+1 year programme (MBBS + internship). NMC-recognised colleges. Total cost ₹25–40 lakhs. Shared culture, language similarity, and no food adjustment issues. High demand means seats fill quickly. Two intakes per year (January and July).",
          },
          {
            country: "🇳🇵 Nepal",
            verdict: "Excellent — closest to India",
            verdictColor: "text-success",
            detail: "5.5 years including internship. No language barrier. NMC-recognised. Total cost ₹28–55 lakhs depending on university. Familiar environment, Indian food, no cultural adjustment. Higher demand means competitive seats — apply early.",
          },
        ].map((item) => (
          <div key={item.country} className="rounded-2xl border border-border bg-card p-4 space-y-1">
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <p className="font-semibold text-foreground">{item.country}</p>
              <span className={`text-xs font-semibold ${item.verdictColor}`}>{item.verdict}</span>
            </div>
            <p className="text-sm text-muted-foreground">{item.detail}</p>
          </div>
        ))}
      </div>

      <h2>When MBBS Abroad Is Absolutely Worth It</h2>
      <p>These are the situations where MBBS abroad is the right decision — not a compromise, but a smart choice.</p>

      <ul className="space-y-2 pl-4 list-none">
        {[
          "Your NEET score qualifies for private/deemed colleges but the fee is ₹80 lakhs or more — MBBS abroad saves ₹40–60 lakhs",
          "Your family cannot afford a management quota seat and a government seat is out of reach",
          "Your child is disciplined, academically motivated, and willing to prepare seriously for FMGE",
          "You choose an NMC-approved university with a track record of FMGE-clearing graduates",
          "You have a clear plan: right university + FMGE coaching + return timeline",
          "Your child wants the experience of independent living and global clinical exposure before practicing in India",
        ].map((point) => (
          <li key={point} className="flex items-start gap-2.5">
            <CheckCircle2 className="size-4 shrink-0 text-success mt-0.5" />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <h2>When MBBS Abroad Is the Wrong Choice</h2>
      <p>Equally important — the situations where MBBS abroad is likely to go wrong.</p>

      <ul className="space-y-2 pl-4 list-none">
        {[
          "You are choosing a university primarily because it is the cheapest option with no NMC verification",
          "Your child is looking for an easy alternative to NEET — FMGE is not easier than working hard in India",
          "You are relying on a consultant who cannot name the specific NMC approval status of the university",
          "The university has no graduating batches or cannot show FMGE pass data for its students",
          "Your child has no interest in medicine but is going 'just to get a degree' — FMGE will expose this",
          "You expect the degree to automatically allow practice in India without clearing FMGE/NExT",
        ].map((point) => (
          <li key={point} className="flex items-start gap-2.5">
            <XCircle className="size-4 shrink-0 text-destructive mt-0.5" />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <h2>The ROI Calculation: Does It Make Financial Sense?</h2>
      <p>
        Let's run the actual numbers for a family comparing MBBS abroad vs a private deemed college management quota seat.
      </p>

      <div className="rounded-2xl border border-border overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-secondary/60">
              <th className="px-4 py-3 text-left font-semibold text-foreground">Metric</th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">MBBS Abroad (Russia/Georgia)</th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">Private India (Mgmt Quota)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {[
              { metric: "Total 6-year cost", abroad: "₹35–55 Lakhs", india: "₹80L – ₹1.6 Crore+" },
              { metric: "Education loan required", abroad: "₹25–45 Lakhs", india: "₹70L – ₹1.4 Crore+" },
              { metric: "Monthly EMI (15 yr, 10.5%)", abroad: "₹28,000 – ₹50,000", india: "₹78,000 – ₹1.55L" },
              { metric: "Additional exam after degree", abroad: "FMGE / NExT", india: "None (but NEET PG for specialty)" },
              { metric: "Doctor salary (2–3 yrs post-degree)", abroad: "₹60,000 – ₹1.5L/month", india: "₹60,000 – ₹1.5L/month" },
              { metric: "Loan paid off by", abroad: "6–8 years post-practice", india: "12–18 years post-practice" },
            ].map((row) => (
              <tr key={row.metric} className="hover:bg-secondary/40 transition-colors">
                <td className="px-4 py-3 font-semibold text-foreground">{row.metric}</td>
                <td className="px-4 py-3 text-success font-medium">{row.abroad}</td>
                <td className="px-4 py-3">{row.india}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p>
        The financial case is clear. A doctor who completes MBBS abroad at ₹40 lakhs and clears FMGE
        pays off their loan in roughly 7–8 years of practice. A doctor who spends ₹1.2 crore on a
        management quota seat is still paying EMIs 15 years later — limiting their ability to invest,
        set up a clinic, or pursue a specialisation.
      </p>

      <h2>NMC Compliance: What You Must Verify Before Admission</h2>
      <p>
        The National Medical Commission of India has specific requirements for foreign MBBS degrees to be
        recognised. This is non-negotiable — a degree from a non-compliant university is worthless for
        practicing in India. Verify all of the following before paying any fees.
      </p>

      <div className="grid sm:grid-cols-2 gap-3">
        {[
          { item: "University is on NMC's approved list (check nmc.org.in)", required: true },
          { item: "Programme is English-medium throughout", required: true },
          { item: "Programme duration is 54 months + 1-year internship", required: true },
          { item: "No transfer allowed — must complete at same university", required: true },
          { item: "University has cadaver-based anatomy training", required: true },
          { item: "University follows UK standards (not US — US standards invalid for India)", required: true },
          { item: "University has 5+ graduating batches with FMGE data", required: false },
          { item: "University has structured FMGE coaching support", required: false },
        ].map((row) => (
          <div key={row.item} className="flex items-start gap-3 rounded-xl border border-border bg-card p-3">
            {row.required
              ? <ShieldCheck className="size-4 shrink-0 text-success mt-0.5" />
              : <CheckCircle2 className="size-4 shrink-0 text-accent mt-0.5" />
            }
            <span className="text-sm text-foreground">
              {row.item} {!row.required && <span className="text-muted-foreground">(strongly recommended)</span>}
            </span>
          </div>
        ))}
      </div>

      <h2>How to Select the Right University</h2>
      <p>
        University selection is where most families go wrong. The questions to ask are not "which is cheapest?"
        but "which will give my child the best chance of clearing FMGE and practicing in India?"
      </p>

      <div className="space-y-3">
        {[
          {
            q: "How many batches have graduated and what is the FMGE pass rate?",
            detail: "Ask for data, not promises. A university with 10+ graduating batches and documented FMGE outcomes is significantly lower risk than a newer institution.",
          },
          {
            q: "What is the local student ratio?",
            detail: "A high ratio of local (country-native) students signals academic quality. Universities that exist only to serve foreign students often have weaker academic standards.",
          },
          {
            q: "Is the university on WDOMS, FAIMER, and ECFMG lists?",
            detail: "These listings are required for USMLE, PLAB, and other international licensing exams. Even if your child plans to practice in India, global recognition indicates a university meeting international standards.",
          },
          {
            q: "Does the university provide cadaver-based anatomy training?",
            detail: "Real body dissection is mandatory for FMGE. Some universities use plastic models only. This is a red flag — FMGE anatomy questions assume cadaver-level understanding.",
          },
          {
            q: "What is the climate and safety situation?",
            detail: "Russia has universities in cities ranging from -10°C to -50°C winters. Georgia is mild. Kyrgyzstan has cold but manageable winters. These are not trivial — a student who is miserable is unlikely to study well.",
          },
        ].map((item, i) => (
          <div key={item.q} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                {i + 1}
              </div>
              {i < 4 && <div className="mt-1 w-px flex-1 bg-border" />}
            </div>
            <div className="pb-4">
              <p className="text-sm font-semibold text-foreground">{item.q}</p>
              <p className="mt-0.5 text-sm text-muted-foreground">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          {
            q: "Is MBBS abroad recognised in India?",
            a: "Yes — provided the university is on the NMC-approved list and the student clears FMGE (or NExT from 2025). The degree is not automatically valid; the screening exam is the final gate. This is non-negotiable and applies to all foreign MBBS graduates regardless of country.",
          },
          {
            q: "Which country has the highest FMGE pass rate?",
            a: "Georgia consistently produces the highest FMGE pass rates among MBBS abroad destinations, followed by Russia (top universities), and Nepal. Kyrgyzstan and Uzbekistan vary widely depending on which university the student attended — making university selection critical in these countries.",
          },
          {
            q: "Is NEET required for MBBS abroad?",
            a: "Yes. NEET qualification is mandatory for Indian students seeking admission to MBBS programmes abroad under NMC guidelines. Students must also qualify NEET to be eligible to appear for FMGE/NExT upon return. There is no legitimate pathway for Indian students to practice medicine in India without NEET.",
          },
          {
            q: "Can MBBS abroad students do PG in India?",
            a: "Yes. After clearing FMGE/NExT and completing the mandatory 1-year internship, foreign MBBS graduates are eligible to appear for NEET PG and pursue MD/MS specialisations in India. The pathway is identical to Indian MBBS graduates from that point onwards.",
          },
          {
            q: "What if my child doesn't clear FMGE?",
            a: "FMGE can be attempted multiple times (twice per year). Students who fail typically need structured coaching and 6–9 months of serious preparation. The exam tests clinical knowledge, not just factual recall. Most students who fail the first attempt clear within 2–3 attempts with proper preparation. Choosing a university with FMGE coaching support significantly reduces this risk.",
          },
          {
            q: "Is MBBS abroad safe for Indian students?",
            a: "Countries like Georgia, Armenia, Nepal, and Bangladesh have strong safety records for Indian students. Russia and Kazakhstan have well-established Indian student communities with embassy support. Kyrgyzstan and Uzbekistan are generally safe in major cities. All countries on the NMC-approved list have Indian embassies and established student support infrastructure.",
          },
        ].map((faq) => (
          <div key={faq.q} className="rounded-2xl border border-border p-5 space-y-2">
            <p className="font-semibold text-foreground">{faq.q}</p>
            <p className="text-sm text-muted-foreground">{faq.a}</p>
          </div>
        ))}
      </div>

      <h2>Our Verdict: Is MBBS Abroad Worth It in 2025?</h2>

      <div className="rounded-2xl border border-success/30 bg-success/5 p-5 flex gap-4">
        <IndianRupee className="size-5 shrink-0 text-success mt-0.5" />
        <div>
          <p className="font-semibold text-foreground mb-1">Yes — for the right student, at the right university, with the right plan.</p>
          <p className="text-sm text-muted-foreground">
            MBBS abroad is not a shortcut. It is an alternative pathway that works brilliantly for motivated
            students who cannot access affordable Indian seats. The cost savings vs private India are real.
            The clinical training at top universities is genuine. The FMGE is passable with preparation.
            The risk is not the pathway — the risk is choosing the wrong university or treating the FMGE as
            an afterthought.
          </p>
        </div>
      </div>

      <p>
        If your child got a government MBBS seat in India — take it. If they are looking at ₹80 lakhs to ₹1.6 crore
        for a private management quota seat, MBBS abroad at ₹30–45 lakhs with a serious FMGE plan is worth
        serious consideration. The families we counsel who get this right don't regret it. The ones who get it wrong
        — wrong university, no FMGE plan — do. The difference is in the decisions made before admission, not after.
      </p>

      {/* CTA */}
      <div className="rounded-2xl border border-accent/30 bg-accent/5 p-6 text-center">
        <p className="font-display text-lg font-semibold text-foreground">
          Want an honest assessment for your specific situation?
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          We review your child's NEET score, budget, and goals — and tell you honestly whether MBBS abroad
          makes sense, which country fits, and which universities to consider. Free counselling, no sales pitch.
        </p>
      </div>

      <div id="counselling">
        <CounsellingForm />
      </div>
    </article>
  )
}
