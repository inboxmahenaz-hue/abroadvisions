import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy — Abroad Visions",
  description: "How Abroad Visions collects, uses, and protects your personal information.",
}

export default function PrivacyPage() {
  const updated = "June 2025"

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
        >
          ← Back to Abroad Visions
        </Link>

        <h1 className="mt-8 font-display text-4xl font-semibold text-foreground">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: {updated}</p>

        <div className="prose prose-sm mt-10 max-w-none text-foreground [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mt-8 [&_h2]:mb-3 [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:text-muted-foreground [&_ul]:space-y-1.5 [&_li]:leading-relaxed">

          <p>
            Abroad Visions ("we", "our", or "us") is committed to protecting the privacy of students, parents,
            and families who contact us for MBBS abroad guidance. This Privacy Policy explains what information
            we collect, how we use it, and your rights.
          </p>

          <h2>1. Information We Collect</h2>
          <p>We may collect the following information when you:</p>
          <ul>
            <li>Submit the counselling form on our website</li>
            <li>Contact us via WhatsApp, phone, or email</li>
            <li>Use interactive tools (fee calculator, eligibility checker)</li>
          </ul>
          <p>Information collected includes:</p>
          <ul>
            <li>Name (student or parent)</li>
            <li>Phone number / WhatsApp number</li>
            <li>NEET score and academic background</li>
            <li>Budget and country preferences</li>
          </ul>
          <p>
            We do not collect payment information on this website. Fee transactions, if any, are handled separately
            and governed by a separate agreement.
          </p>

          <h2>2. How We Use Your Information</h2>
          <ul>
            <li>To provide personalised MBBS abroad counselling</li>
            <li>To prepare a university shortlist relevant to your NEET score and budget</li>
            <li>To respond to your enquiries via WhatsApp, phone, or email</li>
            <li>To send relevant updates about admission timelines or university changes (only with your consent)</li>
          </ul>
          <p>
            We do not use your information for unrelated marketing. We do not sell, rent, or share your personal
            information with any third party, except our partner universities — and only when you have indicated
            interest in applying.
          </p>

          <h2>3. WhatsApp Communication</h2>
          <p>
            Our counselling form pre-fills a WhatsApp message with your details and opens WhatsApp. By submitting
            the form, you consent to us receiving this WhatsApp message and responding to it. WhatsApp communications
            are subject to{" "}
            <a
              href="https://www.whatsapp.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              WhatsApp's own Privacy Policy
            </a>
            .
          </p>

          <h2>4. Data Retention</h2>
          <p>
            We retain your information for as long as necessary to provide our services to you. If you ask us to
            delete your information, we will do so within 30 days, except where we are required by law to retain it.
          </p>

          <h2>5. Cookies and Analytics</h2>
          <p>
            This website may use basic analytics (e.g. page views) to understand how visitors use our site.
            We do not use advertising cookies or track you across other websites. You can disable cookies
            in your browser settings.
          </p>

          <h2>6. Children's Privacy</h2>
          <p>
            Our services are directed to students and their parents. We do not knowingly collect information
            from anyone under the age of 16 without parental consent. In practice, most enquiries are made
            by parents on behalf of their children.
          </p>

          <h2>7. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Withdraw consent to receive communications from us</li>
          </ul>
          <p>
            To exercise any of these rights, contact us via WhatsApp at +91 9084676999 or visit{" "}
            <a href="https://abroadvisions.com" className="text-accent hover:underline">
              abroadvisions.com
            </a>
            .
          </p>

          <h2>8. Changes to This Policy</h2>
          <p>
            We may update this policy from time to time. The "last updated" date at the top of this page will
            reflect any changes. Continued use of our services after a change constitutes acceptance of the
            updated policy.
          </p>

          <h2>9. Contact</h2>
          <p>
            For any privacy-related questions, contact Abroad Visions at:
          </p>
          <ul>
            <li>WhatsApp / Phone: +91 9084676999</li>
            <li>Website: abroadvisions.com</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
