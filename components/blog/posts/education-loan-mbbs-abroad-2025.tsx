import { CounsellingForm } from "@/components/counselling-form"
import { ShieldCheck, AlertTriangle, CheckCircle2, IndianRupee, FileText, Phone } from "lucide-react"

export function EducationLoanMbbsAbroad2025() {
  return (
    <article className="space-y-10 text-sm leading-relaxed text-muted-foreground [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:font-display [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mt-6 [&_h3]:mb-3 [&_p]:mb-4 [&_p]:leading-relaxed">

      {/* Intro */}
      <p>
        The most common reason Indian families delay or abandon an MBBS abroad plan is not eligibility — it's money.
        Specifically, the fear that ₹20–40 lakhs is simply not available upfront. What most families don't realise is
        that <strong className="text-foreground">education loans for MBBS abroad are available from nationalised Indian banks</strong> — and the process is more straightforward than most consultants let on.
      </p>
      <p>
        This guide covers every loan option available in 2025: which banks lend for MBBS abroad, how much they offer,
        what documents you need, interest rates, repayment terms, and the exact questions to ask before signing anything.
      </p>

      {/* Key stat box */}
      <div className="rounded-2xl border border-success/30 bg-success/5 p-5 flex gap-4">
        <IndianRupee className="size-5 shrink-0 text-success mt-0.5" />
        <div>
          <p className="font-semibold text-foreground mb-1">What most families don't know</p>
          <p className="text-sm text-muted-foreground">
            SBI, Bank of Baroda, and Canara Bank all offer education loans up to <strong className="text-foreground">₹1.5 crore</strong> for
            MBBS abroad at NMC-approved universities — with repayment starting only after your child
            completes the degree and finds employment. You do not pay EMIs while studying.
          </p>
        </div>
      </div>

      <h2>Can You Get an Education Loan for MBBS Abroad?</h2>
      <p>
        Yes — provided the university is on the NMC-approved list. All major Indian nationalised banks and
        several private banks offer education loans specifically for medical studies abroad. The key conditions are:
      </p>
      <ul className="space-y-2 pl-4 list-none">
        {[
          "University must be NMC-approved and WHO-recognised",
          "Student must be NEET-qualified (mandatory from 2024)",
          "Student must have a confirmed admission offer letter from the university",
          "Co-applicant required — typically a parent or guardian",
          "Collateral required for loans above ₹7.5 lakhs (property, FD, or insurance)",
        ].map((point) => (
          <li key={point} className="flex items-start gap-2.5">
            <CheckCircle2 className="size-4 shrink-0 text-success mt-0.5" />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <h2>Bank-Wise Education Loan Comparison (2025)</h2>
      <p>
        All figures below are for education loans for studying abroad. Interest rates are indicative and
        subject to change — always confirm directly with the bank before applying.
      </p>

      <div className="overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-secondary/60">
              <th className="px-4 py-3 text-left font-semibold text-foreground">Bank</th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">Max Loan Amount</th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">Interest Rate (approx.)</th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">Collateral Required</th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">Repayment Period</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {[
              {
                bank: "State Bank of India (SBI)",
                max: "₹1.5 Crore",
                rate: "10.15% – 11.15%",
                collateral: "Above ₹7.5L",
                repay: "Up to 15 years",
                highlight: true,
              },
              {
                bank: "Bank of Baroda",
                max: "₹1.5 Crore",
                rate: "9.70% – 11.20%",
                collateral: "Above ₹7.5L",
                repay: "Up to 15 years",
                highlight: false,
              },
              {
                bank: "Canara Bank",
                max: "₹1.5 Crore",
                rate: "10.00% – 11.50%",
                collateral: "Above ₹7.5L",
                repay: "Up to 15 years",
                highlight: false,
              },
              {
                bank: "Punjab National Bank",
                max: "₹1 Crore",
                rate: "10.40% – 11.75%",
                collateral: "Above ₹7.5L",
                repay: "Up to 15 years",
                highlight: false,
              },
              {
                bank: "Union Bank of India",
                max: "₹1.5 Crore",
                rate: "10.50% – 11.80%",
                collateral: "Above ₹7.5L",
                repay: "Up to 15 years",
                highlight: false,
              },
              {
                bank: "HDFC Credila",
                max: "₹75 Lakhs",
                rate: "11.00% – 13.50%",
                collateral: "Case by case",
                repay: "Up to 12 years",
                highlight: false,
              },
              {
                bank: "Avanse Financial",
                max: "₹75 Lakhs",
                rate: "11.50% – 14.00%",
                collateral: "Flexible",
                repay: "Up to 12 years",
                highlight: false,
              },
            ].map((row) => (
              <tr key={row.bank} className={`hover:bg-secondary/40 transition-colors ${row.highlight ? "bg-success/5" : ""}`}>
                <td className="px-4 py-3 font-semibold text-foreground">{row.bank}</td>
                <td className="px-4 py-3 font-medium text-foreground">{row.max}</td>
                <td className="px-4 py-3">{row.rate}</td>
                <td className="px-4 py-3">{row.collateral}</td>
                <td className="px-4 py-3">{row.repay}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-muted-foreground">
        * Interest rates as of mid-2025. Rates are subject to RBI repo rate changes. Nationalised banks
        typically offer lower rates than private NBFCs. Always compare the final sanction letter, not just the advertised rate.
      </p>

      <h2>What Expenses Does the Loan Cover?</h2>
      <p>
        Education loans for MBBS abroad are not limited to tuition. A well-structured loan application
        can cover the entire cost of the programme:
      </p>

      <div className="grid sm:grid-cols-2 gap-3">
        {[
          { item: "Tuition fees", covered: true },
          { item: "Hostel / accommodation", covered: true },
          { item: "Examination and library fees", covered: true },
          { item: "Travel expenses (to/from India)", covered: true },
          { item: "Study materials and books", covered: true },
          { item: "Medical insurance premium", covered: true },
          { item: "Visa and document fees", covered: true },
          { item: "Personal expenses / pocket money", covered: false },
        ].map((row) => (
          <div key={row.item} className="flex items-center gap-3 rounded-xl border border-border bg-card p-3">
            {row.covered
              ? <CheckCircle2 className="size-4 shrink-0 text-success" />
              : <AlertTriangle className="size-4 shrink-0 text-amber-500" />
            }
            <span className={`text-sm ${row.covered ? "text-foreground" : "text-muted-foreground"}`}>
              {row.item} {!row.covered && "(usually excluded)"}
            </span>
          </div>
        ))}
      </div>

      <h2>Documents Required for Education Loan Application</h2>
      <p>Prepare these before visiting the bank. Having everything ready in one folder cuts processing time significantly.</p>

      <h3>Student Documents</h3>
      <ul className="space-y-2 pl-4 list-none">
        {[
          "10th and 12th marksheets and passing certificates",
          "NEET scorecard and admit card",
          "Admission offer letter from the university (official, on letterhead)",
          "Valid passport (minimum 18 months validity)",
          "Visa approval letter (if already received)",
          "Fee structure from the university — official document showing year-wise costs",
          "Photographs (passport size)",
          "Aadhaar card and PAN card",
        ].map((doc) => (
          <li key={doc} className="flex items-start gap-2.5">
            <FileText className="size-4 shrink-0 text-accent mt-0.5" />
            <span>{doc}</span>
          </li>
        ))}
      </ul>

      <h3>Co-applicant (Parent/Guardian) Documents</h3>
      <ul className="space-y-2 pl-4 list-none">
        {[
          "Aadhaar card and PAN card",
          "Last 3 years ITR (Income Tax Returns)",
          "Last 6 months bank statements",
          "Salary slips (last 3 months) — for salaried co-applicants",
          "Business proof and P&L statement — for self-employed co-applicants",
          "Relationship proof with student (birth certificate or Aadhaar)",
        ].map((doc) => (
          <li key={doc} className="flex items-start gap-2.5">
            <FileText className="size-4 shrink-0 text-accent mt-0.5" />
            <span>{doc}</span>
          </li>
        ))}
      </ul>

      <h3>Collateral Documents (for loans above ₹7.5 lakhs)</h3>
      <ul className="space-y-2 pl-4 list-none">
        {[
          "Property documents — sale deed, property tax receipts, encumbrance certificate",
          "Latest property valuation report (bank arranges this)",
          "Fixed deposit certificates (if FD used as collateral)",
          "Life insurance policy documents (if LIC used as collateral)",
        ].map((doc) => (
          <li key={doc} className="flex items-start gap-2.5">
            <FileText className="size-4 shrink-0 text-accent mt-0.5" />
            <span>{doc}</span>
          </li>
        ))}
      </ul>

      <h2>How the Repayment Works</h2>
      <p>
        This is the part that relieves most families. Education loan repayment for MBBS abroad is structured
        around your child's career timeline — not your current income.
      </p>

      <div className="space-y-3">
        {[
          {
            phase: "During the degree (6 years)",
            detail: "Simple interest accrues on the disbursed amount. Most banks allow you to pay just the interest during this period — or defer it entirely. No EMI obligation while studying.",
            tone: "text-success",
          },
          {
            phase: "Moratorium period",
            detail: "After completing the degree, most banks give a 6–12 month grace period before EMIs begin — to allow time to clear FMGE and find employment.",
            tone: "text-accent",
          },
          {
            phase: "Repayment period",
            detail: "EMIs begin after the moratorium. Most banks offer up to 15 years to repay. On a ₹30 lakh loan at 10.5% over 15 years, the EMI is approximately ₹33,000/month — manageable on a doctor's salary.",
            tone: "text-foreground",
          },
        ].map((item, i) => (
          <div key={item.phase} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                {i + 1}
              </div>
              {i < 2 && <div className="mt-1 w-px flex-1 bg-border" />}
            </div>
            <div className="pb-4">
              <p className={`text-sm font-semibold ${item.tone}`}>{item.phase}</p>
              <p className="mt-0.5 text-sm text-muted-foreground">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>EMI Calculator — What Will You Actually Pay?</h2>
      <p>
        Rough EMI estimates after moratorium, based on a 15-year repayment at 10.5% interest.
        Use these as planning figures only — your actual rate will depend on the bank and your profile.
      </p>

      <div className="overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-secondary/60">
              <th className="px-4 py-3 text-left font-semibold text-foreground">Loan Amount</th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">Monthly EMI (approx.)</th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">Total Repayment</th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">Suits Which Country</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {[
              { loan: "₹20 Lakhs", emi: "₹22,000/month", total: "₹39.6L", country: "Kyrgyzstan / Uzbekistan" },
              { loan: "₹25 Lakhs", emi: "₹27,700/month", total: "₹49.8L", country: "Armenia / Russia (budget)" },
              { loan: "₹30 Lakhs", emi: "₹33,200/month", total: "₹59.7L", country: "Russia / Kazakhstan" },
              { loan: "₹38 Lakhs", emi: "₹42,100/month", total: "₹75.7L", country: "Georgia / Bangladesh" },
              { loan: "₹45 Lakhs", emi: "₹49,800/month", total: "₹89.6L", country: "Bangladesh / Nepal (lower)" },
            ].map((row) => (
              <tr key={row.loan} className="hover:bg-secondary/40 transition-colors">
                <td className="px-4 py-3 font-semibold text-foreground">{row.loan}</td>
                <td className="px-4 py-3 font-medium text-accent">{row.emi}</td>
                <td className="px-4 py-3">{row.total}</td>
                <td className="px-4 py-3 text-muted-foreground">{row.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-muted-foreground">
        * EMI calculated at 10.5% p.a. over 15 years. Actual EMI depends on sanctioned rate, disbursement schedule,
        and interest accumulated during moratorium. Total repayment includes interest over the full loan tenure.
      </p>

      <h2>Government Schemes and Subsidies</h2>

      <div className="rounded-2xl border border-success/30 bg-success/5 p-5 flex gap-4">
        <ShieldCheck className="size-5 shrink-0 text-success mt-0.5" />
        <div>
          <p className="font-semibold text-foreground mb-1">Central Sector Interest Subsidy (CSIS)</p>
          <p className="text-sm text-muted-foreground">
            Students from families with annual income below ₹4.5 lakhs are eligible for full interest subsidy
            during the moratorium period under the Central Sector Interest Subsidy scheme. This means zero
            interest accumulation while studying — significantly reducing total repayment. Apply through your
            bank — they handle the subsidy claim directly.
          </p>
        </div>
      </div>

      <p className="mt-4">
        Additionally, several state governments offer their own scholarship and subsidy schemes for students
        pursuing higher education abroad. Check with your state's education department — schemes vary by state
        and are updated annually.
      </p>

      <h2>Vidya Lakshmi Portal — Apply to Multiple Banks at Once</h2>
      <p>
        The Government of India's <strong className="text-foreground">Vidya Lakshmi Portal</strong> (vidyalakshmi.co.in)
        allows students to apply to multiple banks through a single application form. Over 40 banks are registered
        on the portal including SBI, Bank of Baroda, and Canara Bank. This saves significant time compared to
        visiting each bank separately.
      </p>
      <ul className="space-y-2 pl-4 list-none">
        {[
          "Register at vidyalakshmi.co.in with your Aadhaar-linked mobile number",
          "Fill the Common Education Loan Application Form (CELAF) once",
          "Apply to up to 3 banks simultaneously from the same form",
          "Track application status online — no need to visit branches repeatedly",
          "Banks contact you directly once they review your application",
        ].map((step) => (
          <li key={step} className="flex items-start gap-2.5">
            <CheckCircle2 className="size-4 shrink-0 text-accent mt-0.5" />
            <span>{step}</span>
          </li>
        ))}
      </ul>

      <h2>Common Mistakes Families Make with Education Loans</h2>
      <div className="space-y-3">
        {[
          {
            mistake: "Applying too late",
            fix: "Start the loan process the moment you have an offer letter. Bank processing takes 4–8 weeks. Visa applications need proof of funds. Don't leave this to the last month.",
          },
          {
            mistake: "Borrowing only for tuition",
            fix: "Borrow for the full programme cost — tuition, hostel, living, travel. It is far easier to borrow the full amount upfront than to apply for a top-up loan mid-degree.",
          },
          {
            mistake: "Not comparing the final sanction letter",
            fix: "Banks advertise attractive rates but sanction at higher rates based on your profile. Always compare the actual sanction letter rate — not the advertised starting rate.",
          },
          {
            mistake: "Ignoring the moratorium interest",
            fix: "Even if you don't pay during the degree, interest accumulates. On ₹30L at 10.5%, you accrue approximately ₹3.15L per year in interest. After 6 years, your principal grows significantly. Pay the interest during the degree if you can.",
          },
          {
            mistake: "Using NBFC loans without checking nationalised banks first",
            fix: "NBFCs like HDFC Credila and Avanse charge 11.5–14% vs 9.7–11% at nationalised banks. Always exhaust nationalised bank options first — the rate difference on ₹30L over 15 years is over ₹10 lakhs.",
          },
        ].map((item) => (
          <div key={item.mistake} className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-4 space-y-1">
            <p className="font-semibold text-foreground flex items-center gap-2">
              <AlertTriangle className="size-4 text-amber-500" />
              {item.mistake}
            </p>
            <p className="text-sm text-muted-foreground pl-6">{item.fix}</p>
          </div>
        ))}
      </div>

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          {
            q: "Can I get an education loan for MBBS abroad without collateral?",
            a: "Loans up to ₹7.5 lakhs are available without collateral at nationalised banks. Above that, most banks require property, FD, or insurance as security. Some NBFCs offer collateral-free loans up to ₹40–75 lakhs but at significantly higher interest rates.",
          },
          {
            q: "Which bank is best for education loan for MBBS abroad in India?",
            a: "SBI and Bank of Baroda consistently offer the most competitive rates for education loans for MBBS abroad. SBI's Scholar Loan scheme for premier institutions and their general abroad loan scheme both cover NMC-approved medical universities.",
          },
          {
            q: "Does the bank verify the university before sanctioning the loan?",
            a: "Yes. Banks verify NMC approval status before sanctioning loans for MBBS abroad. This is actually a useful filter — if a university is not on the NMC list, the bank will not lend, protecting you from a bad decision.",
          },
          {
            q: "Can I get an education loan if my parents don't have a high income?",
            a: "Yes. Income is one factor but not the only one. Collateral (property, FD) can compensate for lower income. Additionally, the CSIS subsidy scheme specifically targets families with income below ₹4.5L — lower income families may qualify for interest-free loans during the study period.",
          },
          {
            q: "When do I start repaying the loan?",
            a: "Repayment begins after the course ends plus a moratorium period of 6–12 months. In practice, for a 6-year MBBS, your first EMI is due approximately 6.5 to 7 years after disbursement — giving your child time to clear FMGE and begin earning.",
          },
        ].map((faq) => (
          <div key={faq.q} className="rounded-2xl border border-border p-5 space-y-2">
            <p className="font-semibold text-foreground">{faq.q}</p>
            <p className="text-sm text-muted-foreground">{faq.a}</p>
          </div>
        ))}
      </div>

      <h2>Our Honest Take on Education Loans for MBBS Abroad</h2>
      <p>
        An education loan for MBBS abroad is not a burden — it is an investment in a medical career with a
        defined repayment path. A doctor who clears FMGE and begins practicing in India earns ₹50,000–₹1.5 lakhs
        per month within 2–3 years of returning. The EMI on a ₹30 lakh loan is ₹33,000/month — less than one
        week's income for most practicing doctors.
      </p>
      <p>
        The families that struggle are those who borrow without planning — wrong university, poor FMGE prep,
        and a degree that doesn't lead to practice. Choose the right university, prepare for FMGE seriously,
        and the loan repays itself. That's exactly the conversation we have in our free counselling call.
      </p>

      {/* CTA */}
      <div className="rounded-2xl border border-accent/30 bg-accent/5 p-6 text-center">
        <p className="font-display text-lg font-semibold text-foreground">
          Need help planning the loan alongside university selection?
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          We help families plan the full financial picture — which university fits your budget,
          how much to borrow, and which bank to approach first. Free. No obligation.
        </p>
      </div>

      <div id="counselling">
        <CounsellingForm />
      </div>
    </article>
  )
}
