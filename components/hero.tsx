"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-purple-950/20"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <div className="h-px w-12 bg-purple-500"></div>
            <span className="text-purple-500 font-medium">AI-POWERED EXPERTISE</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight tracking-tight">
            Scaling Human <span className="text-purple-500">Expertise</span> with Artificial Intelligence
          </h1>

          <p className="text-xl md:text-2xl text-foreground/70 mb-12 leading-relaxed max-w-3xl">
            MindSync transforms specialized knowledge into AI-driven solutions, making expertise accessible, scalable,
            and efficient.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <Button
              size="lg"
              onClick={() => scrollToSection("final-cta")}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg h-auto"
            >
              Get Early Access
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("how-it-works")}
              className="text-foreground border-foreground/20 hover:bg-foreground/5 px-8 py-6 text-lg h-auto group"
            >
              See How It Works
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>

      {/* Simple decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
    </section>
  )
}

