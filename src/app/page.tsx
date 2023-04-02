// widgets import
import Hero from "@/components/widgets/Hero";
import CoreCourses from "@/components/widgets/CoreCourses";
import SpecializedTracks from "@/components/widgets/SpecializedTracks";

export default function Home() {
  return (
    <>
      <main>
        {/* Hero section */}
        <Hero />

        {/* Core Courses Section */}
        <CoreCourses />

        {/* Specialized Tracks */}

        <SpecializedTracks />
      </main>
    </>
  );
}
