import MBBSFinder from "@/components/MBBSFinder";
import { Navbar } from "@/components/navbar";

export const metadata = {
  title: "Course Finder | Abroad Visions",
  description: "Browse 70+ NMC-approved MBBS universities abroad. Filter by country, compare fees, and get free counselling.",
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