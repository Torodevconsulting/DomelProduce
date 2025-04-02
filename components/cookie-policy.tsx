"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function CookiePolicy() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Check if user has already made a choice
    const cookieChoice = localStorage.getItem('cookieChoice')
    if (cookieChoice) {
      setIsVisible(false)
      return
    }

    // Auto accept all cookies after 40 seconds
    const timer = setTimeout(() => {
      handleChoice('all')
    }, 40000)

    return () => clearTimeout(timer)
  }, [])

  const handleChoice = (choice: 'all' | 'essential' | 'reject') => {
    localStorage.setItem('cookieChoice', choice)
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 p-4 shadow-lg z-50">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-600 dark:text-gray-300">
            We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
            By clicking "Accept All", you consent to our use of cookies.
          </div>
          <div className="flex flex-wrap gap-2">
            <Button
              variant="default"
              size="sm"
              className="bg-green-600 hover:bg-green-700 text-white"
              onClick={() => handleChoice('all')}
            >
              Accept Cookies
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleChoice('essential')}
            >
              Essential Only
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleChoice('reject')}
            >
              Reject All
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}