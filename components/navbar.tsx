"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { Moon, Sun, Brain } from "lucide-react"

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
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-foreground flex items-center">
              <span className="bg-purple-600 dark:bg-purple-500 w-10 h-10 rounded-md mr-3 flex items-center justify-center">
                <Brain size={24} className="text-white" />
              </span>
              MindSync
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-10">
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-foreground/80 hover:text-foreground transition-colors text-sm font-medium"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("use-cases")}
              className="text-foreground/80 hover:text-foreground transition-colors text-sm font-medium"
            >
              Use Cases
            </button>
            <Button
              onClick={() => scrollToSection("final-cta")}
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              Get Early Access
            </Button>

            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                aria-label="Toggle theme"
                onClick={toggleTheme}
                className="text-foreground"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            )}
          </nav>

          <div className="flex items-center md:hidden space-x-4">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                aria-label="Toggle theme"
                onClick={toggleTheme}
                className="text-foreground"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            )}

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
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-foreground/80 hover:text-foreground transition-colors py-2 text-left text-lg"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("use-cases")}
                className="text-foreground/80 hover:text-foreground transition-colors py-2 text-left text-lg"
              >
                Use Cases
              </button>
              <Button
                onClick={() => scrollToSection("final-cta")}
                className="bg-purple-600 hover:bg-purple-700 text-white w-full justify-center mt-4"
                size="lg"
              >
                Get Early Access
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

