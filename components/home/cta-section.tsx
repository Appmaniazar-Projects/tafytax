'use client'

import { Button } from "@/components/ui/button"
import { DotsPattern } from "@/components/ui/shapes"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <DotsPattern />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Ready to Optimize Your Tax Strategy?
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Schedule a consultation with our experts to discuss your business needs and discover how we can help you achieve your financial objectives.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Button size="lg" className="bg-gold text-primary hover:bg-gold/90" asChild>
              <Link href="/contact">
                Book Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
