"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, ArrowRight } from "lucide-react"
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
    <section id="hero" className="relative min-h-screen flex items-center pt-24 md:pt-32">
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
      
      {/* Improved overlay gradient for better readability and light mode compatibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/50 z-[1]"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-10 md:py-20">
        <div className="backdrop-blur-md bg-white/30 dark:bg-background/40 p-6 md:p-8 lg:p-12 rounded-xl border border-white/10 max-w-[90%] md:max-w-[85%] lg:max-w-[80%] mx-auto">
          <div className="flex items-center gap-2 mb-4 md:mb-8">
            <div className="h-px w-12 bg-white"></div>
            <span className="text-white font-medium text-sm md:text-base">PRODUCTOS FRUTÍCOLAS PREMIUM</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-black dark:text-foreground mb-4 md:mb-8 leading-tight tracking-tight">
            Domel Produce: Productos Frescos de <span className="text-white">Calidad</span> de los mejores productores.
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-black/70 dark:text-foreground/70 mb-8 md:mb-12 leading-relaxed max-w-3xl">
            Domel Produce exporta aguacates, piñas y otros productos calidad premium desde las mejores granjas a mercados globales.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
            <Button
              size="lg"
              onClick={() => scrollToSection("final-cta")}
              className="bg-green-300 hover:bg-green-400 text-black px-8 py-6 text-lg h-auto"
            >
              Contáctanos
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-black border hover:bg-white/5 px-8 py-6 text-lg h-auto group"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/cvtest.pdf';
                link.download = 'cvtest.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              Descarga Nuestro Catálogo
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