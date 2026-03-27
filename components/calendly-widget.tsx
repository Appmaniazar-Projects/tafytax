'use client'

import { useEffect } from 'react'

export function CalendlyWidget() {
  useEffect(() => {
    // Load Calendly script if not already loaded
    if (!document.querySelector('script[src*="calendly"]')) {
      const script = document.createElement('script')
      script.src = 'https://assets.calendly.com/assets/external/widget.js'
      script.async = true
      document.head.appendChild(script)
    }

    // Initialize Calendly when script is loaded
    const initCalendly = () => {
      if (typeof window !== 'undefined' && (window as any).Calendly) {
        (window as any).Calendly.initBadgeWidget({
          url: 'https://calendly.com/dubetafy/30min',
          text: 'Schedule time with me',
          color: '#0069ff',
          textColor: '#ffffff',
          branding: true
        })
      }
    }

    // Try to initialize immediately if script is already loaded
    initCalendly()

    // If not loaded, wait for it
    const checkInterval = setInterval(() => {
      if (typeof window !== 'undefined' && (window as any).Calendly) {
        initCalendly()
        clearInterval(checkInterval)
      }
    }, 100)

    // Cleanup interval after 10 seconds
    setTimeout(() => clearInterval(checkInterval), 10000)

    return () => clearInterval(checkInterval)
  }, [])

  return null
}
