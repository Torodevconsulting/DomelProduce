"use client"
import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  return (
    <Button variant="outline" size="icon" disabled>
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100" />
      <span className="sr-only">Theme Toggle Disabled</span>
    </Button>
  )
}
