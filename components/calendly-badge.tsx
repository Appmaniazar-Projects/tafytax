'use client'

import { useEffect } from 'react';

export function CalendlyBadge() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (typeof (window as any).Calendly === 'undefined') return

    ;(window as any).Calendly.initBadgeWidget({
      url: 'https://calendly.com/dubetafy/30min',
      text: 'Schedule time with me',
      color: '#0069ff',
      textColor: '#ffffff',
      branding: true,
    })
  }, [])

  return null
}
