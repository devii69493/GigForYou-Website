import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Categories from "@/components/Categories";
import FeaturedGigs from "@/components/FeaturedGigs";
import HowItWorks from "@/components/HowItWorks";
import TrustSafety from "@/components/TrustSafety";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import StickyFloatingCTA from "@/components/StickyFloatingCTA";
import SocialProofToast from "@/components/SocialProofToast";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Categories />
        <FeaturedGigs />
        <HowItWorks />
        <TrustSafety />
        <Testimonials />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
      <StickyFloatingCTA />
      <SocialProofToast />
    </>
  );
}
