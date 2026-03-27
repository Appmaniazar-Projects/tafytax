'use client'

import { useEffect } from 'react';

export function CalendlyBadge() {
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;
    
    // Wait for Calendly script to load
    const checkCalendly = () => {
      if (typeof (window as any).Calendly !== 'undefined') {
        (window as any).Calendly.initBadgeWidget({
          url: 'https://calendly.com/dubetafy/30min',
          text: 'Schedule time with me',
          color: '#0069ff',
          textColor: '#ffffff',
          branding: true,
        });
      } else {
        // If Calendly is not loaded yet, check again after a short delay
        setTimeout(checkCalendly, 100);
      }
    };

    checkCalendly();
  }, []);

  return null;
}
