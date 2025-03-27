"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import Image from "next/image"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const toggleTheme = () => {
    // Theme toggle functionality disabled
    // setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/10">
      <div className="container mx-auto px-4 p-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <div className="relative w-56 h-20">
                <Image
                  src="/domelproducelogo.png"
                  alt="Domel Produce Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-10">
            <a
              href="/about"
              className="text-foreground/80 hover:text-foreground transition-colors text-sm font-medium"
            >
              Sobre Nosotros
            </a>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-foreground/80 hover:text-foreground transition-colors text-sm font-medium"
            >
              Nuestros Valores
            </button>
            <button
              onClick={() => scrollToSection("use-cases")}
              className="text-foreground/80 hover:text-foreground transition-colors text-sm font-medium"
            >
              Productos 
            </button>
            <Button
              onClick={() => scrollToSection("final-cta")}
              className="bg-green-300 hover:bg-green-400 text-black"
            >
              Contacto
            </Button>

            {/*
            {/*
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                aria-label="Toggle theme"
                disabled
                className="text-foreground opacity-50 cursor-not-allowed"
              >
                <Sun className="h-5 w-5" />
              </Button>
            )}
          */}
          
          </nav>

          <div className="flex items-center md:hidden space-x-4">
            {/*
            {/*
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                aria-label="Toggle theme"
                disabled
                className="text-foreground opacity-50 cursor-not-allowed"
              >
                <Sun className="h-5 w-5" />
              </Button>
            )}
          */}
          

            <button className="text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-6">
            <nav className="flex flex-col space-y-6">
              <a
                href="/about"
                className="text-foreground/80 hover:text-foreground transition-colors py-2 text-left text-lg"
              >
                Sobre Nosotros
              </a>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-foreground/80 hover:text-foreground transition-colors py-2 text-left text-lg"
              >
                Nuestros Valores
              </button>
              <button
                onClick={() => scrollToSection("use-cases")}
                className="text-foreground/80 hover:text-foreground transition-colors py-2 text-left text-lg"
              >
                Productos
              </button>
              <Button
                onClick={() => scrollToSection("final-cta")}
                className="bg-green-400 hover:bg-green-700 text-black w-full justify-center mt-4"
                size="lg"
              >
                Contacto
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

