import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Disclaimer — Abroad Visions",
}

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-20">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-accent">
          ← Back to Abroad Visions
        </Link>
        <h1 className="mt-8 font-display text-4xl font-semibold text-foreground">Disclaimer</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: June 2025</p>
        <div className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground">
          <p>The information on this website is provided for general guidance only and does not constitute professional medical, legal, or financial advice.</p>
          <p><strong className="text-foreground">FMGE / NExT pass rates</strong> quoted on this site are based on publicly available historical data. They are indicative and do not guarantee future performance at any university.</p>
          <p><strong className="text-foreground">Fee estimates</strong> are indicative total-programme costs based on current information from partner universities. They exclude personal expenses such as entertainment, travel within the country, and unforeseen costs. Exchange rate fluctuations may affect actual costs.</p>
          <p><strong className="text-foreground">NMC recognition</strong> of universities can change. The NMC-approved list is updated periodically by the National Medical Commission of India. Always verify a university's recognition status on the official NMC website before enrolling.</p>
          <p><strong className="text-foreground">No affiliation:</strong> Abroad Visions is an independent advisory. We are not affiliated with, endorsed by, or acting as an agent of the NMC, any Indian government body, or any specific university.</p>
          <p>Any reliance you place on information from this website is strictly at your own risk. We recommend verifying all critical information — especially NMC approval status — through official sources before making any decision.</p>
        </div>
      </div>
    </div>
  )
}
