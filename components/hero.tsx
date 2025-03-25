"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const backgroundImages = [
    "/avocado.jpg",
    "/arandanos.jpg",
    "/uvas.jpg"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background image carousel */}
      {backgroundImages.map((image, index) => (
        <div 
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
        >
          <Image 
            src={image} 
            alt="Background" 
            fill 
            priority={index === 0}
            className="object-cover object-center"
          />
        </div>
      ))}
      
      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-green-950/50 z-[1]"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-4xl mx-auto backdrop-blur-md bg-background/40 p-8 md:p-12 rounded-xl border border-white/10 shadow-lg">
          <div className="flex items-center gap-2 mb-8">
            <div className="h-px w-12 bg-green-500"></div>
            <span className="text-green-500 font-medium">PREMIUM PRODUCE EXPORTER</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight tracking-tight">
            Fresh <span className="text-green-500">Quality</span> Produce from Farm to World
          </h1>

          <p className="text-xl md:text-2xl text-foreground/70 mb-12 leading-relaxed max-w-3xl">
            Domel Produce exports premium quality avocados, pineapples, and other fresh produce from the finest farms to global markets.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <Button
              size="lg"
              onClick={() => scrollToSection("final-cta")}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg h-auto"
            >
              Contact Us
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("how-it-works")}
              className="text-foreground border-green-500/20 hover:bg-green-500/5 px-8 py-6 text-lg h-auto group"
            >
              Our Products
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

