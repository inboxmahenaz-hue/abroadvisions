import MBBSFinder from "@/components/MBBSFinder";

export const metadata = {
  title: "Course Finder | Abroad Visions",
  description: "Browse 70+ NMC-approved MBBS universities abroad. Filter by country, compare fees, and get free counselling.",
};

export default function CourseFinderPage() {
  return (
    <main style={{ paddingTop: 32, paddingBottom: 64, background: "#f7f9fc", minHeight: "100vh" }}>
      <MBBSFinder />
    </main>
  );
}