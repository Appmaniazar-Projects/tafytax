'use client'

import { useEffect } from 'react'

export function CalendlyWidget() {
  useEffect(() => {
    const initCalendly = () => {
      if (typeof window !== 'undefined' && (window as any).Calendly?.initBadgeWidget) {
        ;(window as any).Calendly.initBadgeWidget({
          url: 'https://calendly.com/dubetafy/30min',
          text: 'Schedule a call with me',
          color: '#0069ff',
          textColor: '#ffffff',
          branding: true,
        })
      }
    }

    const script = document.querySelector('script[src*="assets.calendly.com/assets/external/widget.js"]') as HTMLScriptElement | null
    if (!script) {
      const newScript = document.createElement('script')
      newScript.src = 'https://assets.calendly.com/assets/external/widget.js'
      newScript.async = true
      newScript.onload = initCalendly
      document.head.appendChild(newScript)
    } else {
      initCalendly()
    }

    const checkInterval = window.setInterval(() => {
      if (typeof window !== 'undefined' && (window as any).Calendly?.initBadgeWidget) {
        initCalendly()
        window.clearInterval(checkInterval)
      }
    }, 100)

    const timeoutId = window.setTimeout(() => window.clearInterval(checkInterval), 10000)

    return () => {
      window.clearInterval(checkInterval)
      window.clearTimeout(timeoutId)
    }
  }, [])

  return null
}
