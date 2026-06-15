import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { WhySection } from "@/components/why-section"
import { CountryExplorer } from "@/components/country-explorer"
import { UniversityDirectory } from "@/components/university-directory"
import { EligibilityChecker } from "@/components/eligibility-checker"
import { Timeline } from "@/components/timeline"
import { FmgeSection } from "@/components/fmge-section"
import { FounderSection } from "@/components/founder-section"
import { OfficeSection } from "@/components/office-section"
import { SuccessStories } from "@/components/success-stories"
import { FaqSection } from "@/components/faq-section"
import { CounsellingForm } from "@/components/counselling-form"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { LeadPopup } from "@/components/lead-popup"
import { GuideStickyButton } from "@/components/guide-sticky-button"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhySection />
        <CountryExplorer />
        <UniversityDirectory />
        <EligibilityChecker />
        <Timeline />
        <FmgeSection />
        <FounderSection />
        <OfficeSection />
        <SuccessStories />
        <FaqSection />
        <CounsellingForm />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
      <LeadPopup />
      <GuideStickyButton />
    </>
  )
}
