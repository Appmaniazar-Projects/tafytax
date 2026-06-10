"use client"

import React, { useState } from "react"
import { ChevronDown } from "lucide-react"

const items = [
  {
    q: "Who can benefit from tax consulting?",
    a: "Our services are suitable for individuals, SMEs, startups, corporations, and organizations operating across multiple jurisdictions.",
  },
  {
    q: "Do you assist with tax audits?",
    a: "Yes. We provide audit preparation, representation, and support throughout the audit process.",
  },
  {
    q: "Can you help with international tax matters?",
    a: "Yes. We assist businesses and individuals with cross-border taxation, foreign income reporting, and international compliance requirements.",
  },
]

type FAQItem = {
  q: string
  a: string
}

type FAQAccordionProps = {
  items?: FAQItem[]
}

const defaultItems: FAQItem[] = [
  {
    q: "Who can benefit from tax consulting?",
    a: "Our services are suitable for individuals, SMEs, startups, corporations, and organizations operating across multiple jurisdictions.",
  },
  {
    q: "Do you assist with tax audits?",
    a: "Yes. We provide audit preparation, representation, and support throughout the audit process.",
  },
  {
    q: "Can you help with international tax matters?",
    a: "Yes. We assist businesses and individuals with cross-border taxation, foreign income reporting, and international compliance requirements.",
  },
]

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const faqItems = items ?? defaultItems

  return (
    <div className="space-y-3">
      {faqItems.map((it, idx) => {
        const open = openIndex === idx
        return (
          <div key={idx} className="rounded-lg border border-border bg-card overflow-hidden">
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : idx)}
              className="w-full flex items-center justify-between p-4 text-left"
            >
              <span className="font-medium text-foreground">{it.q}</span>
              <ChevronDown className={`h-5 w-5 text-muted-foreground transform transition-transform ${open ? "rotate-180" : "rotate-0"}`} />
            </button>
            {open && (
              <div className="p-4 text-muted-foreground border-t border-border">
                {it.a}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
