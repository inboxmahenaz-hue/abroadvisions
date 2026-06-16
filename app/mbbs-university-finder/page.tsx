import MBBSFinder from "@/components/MBBSFinder";
import { Navbar } from "@/components/navbar";

export const metadata = {
  title: 'MBBS University Finder - Compare NMC Approved Universities Abroad | Abroad Visions',
  description:
    'Find and compare 70+ NMC-approved MBBS universities abroad. Filter by country, compare real all-inclusive fees, FMGE pass rates, and get free counselling. Russia, Kyrgyzstan, Kazakhstan, Uzbekistan, Georgia, Armenia, Bangladesh, Nepal.',
  keywords: [
    'NMC approved MBBS universities abroad',
    'MBBS university finder',
    'compare MBBS universities abroad',
    'MBBS fees comparison',
    'FMGE pass rate university wise',
  ],
  alternates: { canonical: 'https://abroadvisions.com/mbbs-university-finder' },
};

export default function CourseFinderPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 96, paddingBottom: 64, background: "#f7f9fc", minHeight: "100vh" }}>
        <MBBSFinder />
      </main>
    </>
  );
}
