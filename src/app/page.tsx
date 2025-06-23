import AboutPreview from "@/sections/AboutPreview";
import Hero from "@/sections/Hero";
import ServicesOverview from "@/sections/ServicesOverview";
import WhyChooseUs from "@/sections/WhyChooseUs";


export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <Hero />
      <AboutPreview />
      <ServicesOverview />
      <WhyChooseUs />

    </main>
  );
}
