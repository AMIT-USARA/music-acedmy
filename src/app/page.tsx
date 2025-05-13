import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import { MusicCardTestimonialCards } from "@/components/MusicCardTestimonialCards";
import WhyChooseUs from "@/components/WhyChooseUs";
import { main } from "motion/react-client";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection></HeroSection>
      <FeaturedCourses></FeaturedCourses>
      <WhyChooseUs/>
      <MusicCardTestimonialCards/>
    </main>
  );
}
