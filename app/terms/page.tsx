import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms & Conditions — Abroad Visions",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-20">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-accent">
          ← Back to Abroad Visions
        </Link>
        <h1 className="mt-8 font-display text-4xl font-semibold text-foreground">Terms & Conditions</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: June 2025</p>
        <div className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:mt-8 [&_h2]:mb-2">
          <p>By using the Abroad Visions website and services, you agree to these terms.</p>

          <h2>1. Advisory Services</h2>
          <p>Abroad Visions provides education advisory services. All counselling is free and without obligation. We make recommendations based on the information you provide. Final admission decisions rest with the universities.</p>

          <h2>2. Accuracy of Information</h2>
          <p>We strive to keep FMGE data, fees, and university information accurate and current. However, this information changes and we cannot guarantee accuracy at all times. Always verify critical facts — particularly NMC recognition status — directly before making admission decisions.</p>

          <h2>3. No Guarantee of Admission</h2>
          <p>Abroad Visions facilitates the application process. We cannot and do not guarantee admission to any university. Admission decisions are made solely by the respective institutions.</p>

          <h2>4. No Guarantee of FMGE/NExT Outcome</h2>
          <p>Past FMGE pass rates we share are historical data points, not predictions of future outcomes. FMGE/NExT performance depends on the student's own preparation and effort.</p>

          <h2>5. Fees and Payments</h2>
          <p>Counselling is free. Where service fees apply (for application processing or documentation support), these will be clearly communicated and agreed upon in writing before any payment is requested.</p>

          <h2>6. Limitation of Liability</h2>
          <p>Abroad Visions shall not be liable for any loss or damage arising from reliance on information provided on this website or through our counselling services, except where required by law.</p>

          <h2>7. Contact</h2>
          <p>Questions about these terms: WhatsApp +91 9084676999 or visit abroadvisions.com.</p>
        </div>
      </div>
    </div>
  )
}
