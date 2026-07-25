"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import HowItWorks from "@/components/HowItWorks";
import TrustSafety from "@/components/TrustSafety";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import SignUpModal from "@/components/SignUpModal";

export default function Home() {
  const [signUpOpen, setSignUpOpen] = useState(false);
  const openSignUp = () => setSignUpOpen(true);

  return (
    <>
      <Navbar onSignUp={openSignUp} />
      <main>
        <Hero onSignUp={openSignUp} />
        <Categories />
        <HowItWorks />
        <TrustSafety />
        <CTABanner onSignUp={openSignUp} />
      </main>
      <Footer />
      <SignUpModal open={signUpOpen} onClose={() => setSignUpOpen(false)} />
    </>
  );
}
