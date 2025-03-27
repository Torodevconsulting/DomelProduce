"use client";

import { useState } from "react";
import Hero from "@/components/hero"
import ProblemStatement from "@/components/problem-statement"
import HowItWorks from "@/components/how-it-works"
import UseCases from "@/components/use-cases"
import Testimonials from "@/components/testimonials"
import FinalCTA from "@/components/final-cta"
import Footer from "@/components/footer"
import ContactModal from "@/components/contact-modal"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemStatement />
      <HowItWorks />
      <UseCases />
      <Testimonials />
      <FinalCTA />
      <Footer />
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </main>
  )
}

