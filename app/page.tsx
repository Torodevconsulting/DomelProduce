"use client";

import { useState } from "react";
import { trackEvent, analyticsEvents } from '@/utils/analytics';
import Hero from "@/components/hero"
import ProblemStatement from "@/components/problem-statement"
import HowItWorks from "@/components/how-it-works"
import UseCases from "@/components/use-cases"
import Testimonials from "@/components/testimonials"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"
import ContactModal from "@/components/contact-modal"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleCatalogDownload = () => {
    trackEvent(analyticsEvents.CATALOG_DOWNLOAD);
    const link = document.createElement('a');
    link.href = '/brochuredomelproduce.pdf';
    link.download = 'brochuredomelproduce.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemStatement />
      <HowItWorks />
      <UseCases />
      <Testimonials />
      <ContactForm onClick={handleCatalogDownload} />
      <Footer />
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </main>
  )
}

