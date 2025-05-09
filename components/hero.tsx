"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import Image from "next/image"
import { trackEvent, analyticsEvents } from '@/utils/analytics'

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const backgroundImages = [
    "/greenavocado.jpg",
    "/arandanos.jpg",
    "/tangerines.webp"
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
    <section id="hero" className="relative min-h-screen flex items-center pt-24 md:pt-32">
      {/* Background image carousel */}
      {backgroundImages.map((image, index) => (
        <div 
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
        >
          <Image 
            src={image} 
            alt={`Background ${index + 1}`} 
            fill 
            priority={index === 0}
            className="object-cover object-center"
            quality={85}
            sizes="100vw"
          />
          <div className="absolute inset-0 backdrop-blur-[3px] bg-black/20"></div>
        </div>
      ))}
      
      {/* Improved overlay gradient for better readability and light mode compatibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/50 z-[1]"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-10 md:py-20">
        <div className="backdrop-blur-md bg-white/50 dark:bg-background/40 p-6 md:p-8 lg:p-12 rounded-xl border border-white/10 max-w-[90%] md:max-w-[85%] lg:max-w-[80%] mx-auto">
          <div className="flex items-center gap-2 mb-4 md:mb-8">
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-black dark:text-foreground mb-4 md:mb-8 leading-tight tracking-tight">
          Global Flavors, <span className="text-green-300">Local</span> Roots.
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-black/70 dark:text-foreground/70 mb-8 md:mb-12 leading-relaxed max-w-4xl font-semibold">
          Peru's Valleys Nourishing the World: From the northern and southern Perú.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
            <Button
              size="lg"
              onClick={() => scrollToSection("final-cta")}
              className="bg-green-300 hover:bg-green-400 text-black px-8 py-6 text-lg h-auto"
            >
              Contact Us
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-black border hover:bg-white/5 px-8 py-6 text-lg h-auto group"
              onClick={() => {
                trackEvent(analyticsEvents.CATALOG_DOWNLOAD);
                const link = document.createElement('a');
                link.href = '/brochuredomelproduce.pdf';
                link.download = 'brochuredomelproduce.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              Download our Catalog
              <ArrowDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>

      {/* Simple decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
    </section>
  )
}