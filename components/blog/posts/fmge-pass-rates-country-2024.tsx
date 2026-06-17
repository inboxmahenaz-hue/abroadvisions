// components/blog/posts/fmge-pass-rates-country-2024.tsx
// Slug: fmge-pass-rates-by-country-2024
// Blog Post #2 — FMGE Pass Rates by Country 2024

export function FmgePassRatesCountry2024() {
  return (
    <article className="prose prose-neutral max-w-none">

      {/* ── INTRO ── */}
      <p className="lead text-lg font-medium text-foreground">
        Every year, over 80,000 Indian students appear for FMGE — the licensing exam you must clear to
        practice medicine in India after studying abroad. In 2024, only <strong>about 1 in 4</strong> passed.
        Which country you studied in is one of the biggest predictors of whether you'll be in that 25% or
        the 75% who failed.
      </p>

      <p>
        This is the data most consultants don't show you — because it exposes some popular destinations as
        poor bets for your career. We're showing it anyway.
      </p>

      {/* ── WHAT IS FMGE ── */}
      <h2>What Is FMGE and Why Does It Matter?</h2>
      <p>
        FMGE (Foreign Medical Graduate Examination) is a mandatory screening test conducted by the National
        Board of Examinations (NBE). If you completed your MBBS from a university outside India, you cannot
        register with any State Medical Council, work in any hospital, or open a clinic in India without
        clearing it.
      </p>
      <p>
        It's a 300-question MCQ paper. You need 150 to pass — exactly 50%. Sounds manageable. The reality:
        most sessions see 70–80% of candidates fail. In June 2023, the pass rate collapsed to just{" "}
        <strong>10.20%</strong>.
      </p>

      <div className="not-prose my-6 rounded-xl border border-border bg-muted/40 p-5">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          FMGE Overall Pass Rate — Recent Sessions
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            { session: "Jun 2023", rate: "10.20%", bad: true },
            { session: "Dec 2023", rate: "20.57%", bad: false },
            { session: "Jun 2024", rate: "20.89%", bad: false },
            { session: "Dec 2024", rate: "29.62%", bad: false },
            { session: "Jun 2025", rate: "18.61%", bad: true },
            { session: "Dec 2025", rate: "23.90%", bad: false },
          ].map((s) => (
            <div
              key={s.session}
              className={`rounded-lg p-3 text-center ${
                s.bad ? "bg-red-50 dark:bg-red-950/30" : "bg-emerald-50 dark:bg-emerald-950/30"
              }`}
            >
              <p className="text-xs text-muted-foreground">{s.session}</p>
              <p
                className={`text-xl font-bold ${
                  s.bad ? "text-red-600 dark:text-red-400" : "text-emerald-700 dark:text-emerald-400"
                }`}
              >
                {s.rate}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Source: NBE / NBEMS official results. NExT is expected to replace FMGE from 2028–29 (not yet
          confirmed).
        </p>
      </div>

      <p>
        The exam isn't going away anytime soon. The NMC's planned replacement — NExT — has been postponed
        multiple times and is currently expected no earlier than 2028–29. Students enrolling today will
        almost certainly still sit FMGE.
      </p>

      {/* ── COUNTRY TABLE ── */}
      <h2>FMGE Pass Rate by Country — 2024 Official Data</h2>
      <p>
        The following figures are from NBEMS's official 2024 FMGE result data (combined June + December
        sessions), covering the most popular MBBS-abroad destinations for Indian students.
      </p>

      <div className="not-prose my-6 overflow-x-auto rounded-xl border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="px-4 py-3 text-left font-semibold text-foreground">Country</th>
              <th className="px-4 py-3 text-right font-semibold text-foreground">Appeared (2024)</th>
              <th className="px-4 py-3 text-right font-semibold text-foreground">Passed</th>
              <th className="px-4 py-3 text-right font-semibold text-foreground">Pass %</th>
              <th className="px-4 py-3 text-center font-semibold text-foreground">Verdict</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {[
              { country: "Nepal", appeared: "~3,200", passed: "~1,700", rate: "50–70%*", verdict: "✅ Best", color: "text-emerald-600 dark:text-emerald-400" },
              { country: "Georgia", appeared: "~4,100", passed: "~1,460", rate: "35.65%", verdict: "✅ Strong", color: "text-emerald-600 dark:text-emerald-400" },
              { country: "Ukraine", appeared: "7,716", passed: "2,403", rate: "31.14%", verdict: "⚠️ War risk", color: "text-yellow-600 dark:text-yellow-400" },
              { country: "Russia", appeared: "~7,200", passed: "~2,126", rate: "29.54%", verdict: "✅ Solid", color: "text-emerald-600 dark:text-emerald-400" },
              { country: "Bangladesh", appeared: "~2,500", passed: "~800", rate: "26–32%", verdict: "✅ Good", color: "text-emerald-600 dark:text-emerald-400" },
              { country: "Tajikistan", appeared: "1,196", passed: "311", rate: "26.00%", verdict: "🟡 Moderate", color: "text-yellow-600 dark:text-yellow-400" },
              { country: "Armenia", appeared: "2,349", passed: "415", rate: "17.67%", verdict: "⚠️ Low", color: "text-orange-600 dark:text-orange-400" },
              { country: "Kyrgyzstan", appeared: "~3,800", passed: "~760", rate: "15–20%", verdict: "⚠️ Low", color: "text-orange-600 dark:text-orange-400" },
              { country: "Kazakhstan", appeared: "~4,200", passed: "~840", rate: "15–20%", verdict: "⚠️ Low", color: "text-orange-600 dark:text-orange-400" },
              { country: "Uzbekistan", appeared: "490", passed: "197", rate: "40.20%*", verdict: "🟡 Emerging", color: "text-yellow-600 dark:text-yellow-400" },
              { country: "Philippines", appeared: "~13,000", passed: "~3,120", rate: "18–24%", verdict: "❌ Avoid", color: "text-red-600 dark:text-red-400" },
              { country: "China", appeared: "~13,427", passed: "~2,580", rate: "~19%", verdict: "❌ Poor", color: "text-red-600 dark:text-red-400" },
            ].map((row) => (
              <tr key={row.country} className="hover:bg-muted/30">
                <td className="px-4 py-3 font-medium text-foreground">{row.country}</td>
                <td className="px-4 py-3 text-right text-muted-foreground">{row.appeared}</td>
                <td className="px-4 py-3 text-right text-muted-foreground">{row.passed}</td>
                <td className={`px-4 py-3 text-right font-semibold ${row.color}`}>{row.rate}</td>
                <td className="px-4 py-3 text-center">{row.verdict}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="px-4 py-2 text-xs text-muted-foreground border-t border-border">
          *Nepal figures vary significantly by university. Uzbekistan's 40.20% is based on 490 students — a
          small cohort; treat as indicative. Sources: NBEMS 2024 result data, Careers360, NMC records.
        </p>
      </div>

      {/* ── COUNTRY BY COUNTRY ── */}
      <h2>Country-by-Country Breakdown</h2>

      {/* Nepal */}
      <h3>🇳🇵 Nepal — The Closest Thing to a Safe Bet</h3>
      <p>
        Nepal consistently produces the highest FMGE pass rates among all MBBS-abroad destinations. The
        reason is simple: Nepali medical colleges follow a curriculum very close to the Indian MBBS
        pattern. Students learn from largely the same textbooks, the clinical environment mirrors India, and
        there's no language barrier.
      </p>
      <p>
        Top performers include <strong>BP Koirala Institute of Health Sciences</strong> (pass rate above
        70%), KIST Medical College, and Patan Academy of Health Sciences (both achieved 100% in 2024,
        though with smaller batches). The catch: Nepal's better colleges cost $35,000–$80,000 total, which
        is higher than Central Asian options.
      </p>
      <div className="not-prose my-4 rounded-lg border-l-4 border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30 p-4">
        <p className="text-sm font-medium text-emerald-800 dark:text-emerald-300">
          Our take: Nepal is the best FMGE bet available. Higher cost than Kyrgyzstan or Uzbekistan, but
          the exam outcome justifies it.
        </p>
      </div>

      {/* Georgia */}
      <h3>🇬🇪 Georgia — Best Value in Europe</h3>
      <p>
        Georgia leads among European destinations with a 35.65% overall pass rate — and that average is
        pulled down by lower-tier universities. The top Georgia colleges punch significantly higher.{" "}
        <strong>Georgian American University</strong> achieved 80.33% in 2024.{" "}
        <strong>BAU International University Batumi</strong> — which is in our recommended portfolio —
        achieved 63.29%. These are remarkable numbers by any standard.
      </p>
      <p>
        Georgia's advantage: European academic structure, English medium, NMC-approved, and universities
        that actively integrate FMGE prep into their curriculum. Unlike Russia, there are no geopolitical
        complications currently affecting Georgian universities.
      </p>
      <div className="not-prose my-4 rounded-lg border-l-4 border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30 p-4">
        <p className="text-sm font-medium text-emerald-800 dark:text-emerald-300">
          Our take: Georgia is our top recommendation among non-neighbouring countries. University
          selection matters — stick to BAU Batumi or Georgian American University.
        </p>
      </div>

      {/* Russia */}
      <h3>🇷🇺 Russia — Solid Numbers, Geopolitical Risk</h3>
      <p>
        Russia's 29.54% overall FMGE pass rate is genuinely respectable. Universities like{" "}
        <strong>Kazan Federal University</strong> (68.42%) and{" "}
        <strong>Orenburg State Medical University</strong> (43.40%) are producing strong results. Russia has
        deep medical education infrastructure built over decades.
      </p>
      <p>
        The problem in 2024 and beyond is practical: the ongoing conflict has disrupted banking, visa
        processing, flight connectivity, and insurance for students. Several Indian students have had to
        transfer mid-degree. If you're enrolling for 6 years, that geopolitical risk is real and worth
        weighing against the numbers.
      </p>
      <div className="not-prose my-4 rounded-lg border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-950/30 p-4">
        <p className="text-sm font-medium text-yellow-800 dark:text-yellow-300">
          Our take: Good FMGE outcomes, but we currently don't recommend Russia due to geopolitical
          disruption affecting day-to-day student life.
        </p>
      </div>

      {/* Kyrgyzstan */}
      <h3>🇰🇬 Kyrgyzstan — Affordable, But Read the Fine Print</h3>
      <p>
        Kyrgyzstan is the most budget-friendly MBBS destination — total cost as low as ₹20–25 lakh. The
        trade-off is FMGE outcomes. The country-level pass rate sits at 15–20%, which is below the national
        average of ~25%.
      </p>
      <p>
        However, university choice matters enormously here. <strong>I.K. Akhunbaev Kyrgyz State Medical
        Academy (KSMA)</strong> achieved 31.56% in 2024 — above the overall average.{" "}
        <strong>Asian Medical Institute</strong> posted 26.27%. If you choose Kyrgyzstan, these are the
        institutions worth considering; generic "international medical universities" at the bottom of the
        market are what drag the average down.
      </p>
      <div className="not-prose my-4 rounded-lg border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-950/30 p-4">
        <p className="text-sm font-medium text-orange-800 dark:text-orange-300">
          Our take: Acceptable if budget is the primary constraint and you choose an established university.
          Don't go to Kyrgyzstan just because it's cheap.
        </p>
      </div>

      {/* Uzbekistan */}
      <h3>🇺🇿 Uzbekistan — The Emerging Wildcard</h3>
      <p>
        Uzbekistan's 2024 FMGE data is the most interesting story in the table. With 490 students
        appearing and 197 passing, the pass rate comes to <strong>40.20%</strong> — which would rank it
        second only to Nepal. But the caveat is critical: 490 is a very small sample. This reflects early
        batches from universities that are only a few years old.
      </p>
      <p>
        The trajectory is positive. Universities like <strong>Tashkent Medical Academy</strong> — which we
        recommend — have shown 100% FMGE pass rates in their (small) early cohorts. As batch sizes grow
        over the next 3–4 years, the real picture will become clearer. Uzbekistan is a calculated bet on an
        upward trajectory, not a proven track record.
      </p>
      <div className="not-prose my-4 rounded-lg border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-950/30 p-4">
        <p className="text-sm font-medium text-yellow-800 dark:text-yellow-300">
          Our take: Strong early signals, government-backed infrastructure, NMC-approved. We recommend
          Tashkent Medical Academy specifically. Watch this space.
        </p>
      </div>

      {/* Philippines */}
      <h3>🇵🇭 Philippines — Why We Don't Recommend It</h3>
      <p>
        The Philippines has the largest volume of Indian MBBS students after Russia and China — over 13,000
        appeared for FMGE in 2024. The average pass rate was 18–24%. The math is brutal: roughly 3 in 4
        Filipino MBBS graduates fail FMGE.
      </p>
      <p>
        The structural problem is NMC compliance. The Philippines follows a US-style pre-med + MD pathway,
        which doesn't map cleanly onto the Indian MBBS curriculum tested in FMGE. Many universities also
        don't have the hospital attachment mandated by NMC. Students often discover NMC compliance issues
        only after arriving.
      </p>
      <div className="not-prose my-4 rounded-lg border-l-4 border-red-500 bg-red-50 dark:bg-red-950/30 p-4">
        <p className="text-sm font-medium text-red-800 dark:text-red-300">
          Our take: We do not recommend the Philippines for students intending to practice in India. The
          NMC compliance risk and FMGE outcomes don't justify it.
        </p>
      </div>

      {/* Armenia */}
      <h3>🇦🇲 Armenia — Low Pass Rate Needs Context</h3>
      <p>
        Armenia's 17.67% FMGE pass rate (2,349 students, 415 passed) is lower than the overall average.
        This likely reflects the rapid growth of student enrolments in a country where medical education
        infrastructure is still maturing. Armenia is genuinely affordable — $3,000–$6,500 per year —
        and universities like <strong>Progress Medical University</strong> are building FMGE-specific
        preparation into their programs.
      </p>
      <p>
        Armenia is worth watching but requires careful university selection and a realistic plan for
        independent FMGE preparation.
      </p>

      {/* ── TOP UNIVERSITY TABLE ── */}
      <h2>Top FMGE-Performing Universities (2024)</h2>
      <p>
        Country averages can hide excellent individual institutions. These are the universities with the
        strongest 2024 FMGE outcomes across meaningful student numbers:
      </p>

      <div className="not-prose my-6 overflow-x-auto rounded-xl border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="px-4 py-3 text-left font-semibold text-foreground">University</th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">Country</th>
              <th className="px-4 py-3 text-right font-semibold text-foreground">FMGE Pass %</th>
              <th className="px-4 py-3 text-right font-semibold text-foreground">Students</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {[
              { univ: "Georgian American University", country: "Georgia", rate: "80.33%", students: "61" },
              { univ: "B.P. Koirala Institute (BPKIHS)", country: "Nepal", rate: "71.43%", students: "77" },
              { univ: "Kazan Federal University", country: "Russia", rate: "68.42%", students: "~95" },
              { univ: "BAU International University Batumi", country: "Georgia", rate: "63.29%", students: "158" },
              { univ: "Orenburg State Medical University", country: "Russia", rate: "43.40%", students: "~200" },
              { univ: "Al-Farabi Kazakh National University", country: "Kazakhstan", rate: "51.08%", students: "186" },
              { univ: "I.K. Akhunbaev Kyrgyz State Medical Academy", country: "Kyrgyzstan", rate: "31.56%", students: "~250" },
              { univ: "Tashkent Medical Academy", country: "Uzbekistan", rate: "100%*", students: "small batch" },
            ].map((row) => (
              <tr key={row.univ} className="hover:bg-muted/30">
                <td className="px-4 py-3 font-medium text-foreground">{row.univ}</td>
                <td className="px-4 py-3 text-muted-foreground">{row.country}</td>
                <td className="px-4 py-3 text-right font-semibold text-emerald-600 dark:text-emerald-400">
                  {row.rate}
                </td>
                <td className="px-4 py-3 text-right text-muted-foreground">{row.students}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="px-4 py-2 text-xs text-muted-foreground border-t border-border">
          *Tashkent Medical Academy's 100% is from a small early cohort — early data, very promising.
          Source: NBEMS 2024 data, Careers360.
        </p>
      </div>

      {/* ── WHY RATES DIFFER ── */}
      <h2>Why Do FMGE Pass Rates Differ So Much by Country?</h2>
      <p>Three factors explain most of the variation:</p>

      <div className="not-prose my-6 grid gap-4 sm:grid-cols-3">
        {[
          {
            num: "01",
            title: "Curriculum Alignment",
            body:
              "FMGE tests the Indian MBBS syllabus. Countries whose medical schools follow similar subject patterns and textbooks (Nepal, Bangladesh) produce graduates who already know the material. Countries using very different systems (Philippines, China) produce graduates who have to relearn significant content.",
          },
          {
            num: "02",
            title: "Language of Instruction",
            body:
              "Students who studied core subjects in English process FMGE questions faster and with less cognitive load. Russia and China, where vernacular learning often happens alongside English, create an additional hurdle. Nepal and Bangladesh have near-zero language barrier.",
          },
          {
            num: "03",
            title: "Clinical Exposure Quality",
            body:
              "FMGE has shifted toward case-based clinical questions. Universities with genuine hospital attachment — where students actively participate in patient care — prepare students far better than those offering only observation-based internships.",
          },
        ].map((card) => (
          <div key={card.num} className="rounded-xl border border-border p-4">
            <p className="mb-1 text-2xl font-bold text-accent">{card.num}</p>
            <p className="mb-2 font-semibold text-foreground">{card.title}</p>
            <p className="text-sm text-muted-foreground">{card.body}</p>
          </div>
        ))}
      </div>

      {/* ── NEXT vs FMGE ── */}
      <h2>What About NExT? Will FMGE Be Replaced?</h2>
      <p>
        NExT (National Exit Test) was originally designed to replace both FMGE and the final MBBS exams
        in India into a single common test. It has been repeatedly postponed. As of mid-2026, NExT is not
        operational and is expected no earlier than 2028–29.
      </p>
      <p>
        <strong>If you're enrolling for MBBS abroad in 2025 or 2026, you will almost certainly sit FMGE
        — not NExT.</strong> Plan your country and university choice around FMGE pass rates. Do not let
        anyone tell you "FMGE is being abolished anyway" to downplay poor country-level outcomes.
      </p>

      {/* ── OUR RECOMMENDATION ── */}
      <h2>Our Recommendation: Which Countries Should You Consider?</h2>

      <div className="not-prose my-6 space-y-3">
        {[
          {
            rank: "🥇",
            label: "First choice",
            country: "Nepal",
            why:
              "Highest FMGE pass rates, identical curriculum to India, no language barrier, no visa required for Indian nationals. Costs more than Central Asia but the outcomes justify it.",
          },
          {
            rank: "🥈",
            label: "Second choice",
            country: "Georgia",
            why:
              "Strong FMGE outcomes (35–80% depending on university), European-standard infrastructure, English medium, NMC-approved. Choose BAU Batumi or Georgian American University specifically.",
          },
          {
            rank: "🥉",
            label: "Budget option",
            country: "Uzbekistan",
            why:
              "Most affordable NMC-approved option with improving FMGE trajectory. Early data from Tashkent Medical Academy is excellent. University selection is critical.",
          },
          {
            rank: "⚠️",
            label: "Consider carefully",
            country: "Kyrgyzstan",
            why:
              "Only if budget is the hard constraint and you choose KSMA or Asian Medical Institute. Requires dedicated independent FMGE preparation starting from Year 1.",
          },
          {
            rank: "❌",
            label: "We don't recommend",
            country: "Philippines / China",
            why:
              "High enrolment, poor FMGE outcomes, NMC compliance complexities. The numbers speak for themselves.",
          },
        ].map((item) => (
          <div key={item.country} className="flex gap-4 rounded-xl border border-border p-4">
            <div className="text-2xl">{item.rank}</div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                {item.label}
              </p>
              <p className="font-semibold text-foreground">{item.country}</p>
              <p className="mt-1 text-sm text-muted-foreground">{item.why}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── CTA ── */}
      <h2>Before You Decide — Talk to Someone Who Reads This Data</h2>
      <p>
        Most families making this decision are going on what they read on coaching center walls or what a
        neighbor's son supposedly earned abroad. The data tells a different story. FMGE pass rates vary by
        4× between the best and worst country choices. University selection within a country can swing
        outcomes by another 2–3×.
      </p>
      <p>
        At Abroad Visions, we cross-reference FMGE data, NMC compliance status, and realistic total costs
        before making any recommendation. We're based in Dehradun and counsel students across Uttarakhand
        and beyond.
      </p>

      <div className="not-prose my-6 rounded-xl border-2 border-accent bg-accent/5 p-6 text-center">
        <p className="text-lg font-semibold text-foreground">
          Get a free 30-minute counselling session
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          We'll map your NEET score, budget, and career goals to the right country and university —
          with FMGE data to back every recommendation.
        </p>
        <a
          href="tel:9084676999"
          className="mt-4 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          Call 9084676999
        </a>
      </div>

      {/* ── DISCLAIMER ── */}
      <p className="text-xs text-muted-foreground border-t border-border pt-4 mt-8">
        Data sourced from NBEMS official FMGE result declarations, Careers360, and NMC records. Country-level
        pass rates are approximations based on published data; exact figures may vary by session. NExT
        timeline based on NMC communications as of June 2026 — subject to change. Always verify current NMC
        compliance status of any university before enrollment.
      </p>
    </article>
  )
}
