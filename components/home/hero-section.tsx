import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { FloatingCircles, GeometricPattern } from "@/components/ui/shapes"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <FloatingCircles />
      <GeometricPattern />
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl text-center lg:max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl text-balance">
            Your Trusted Financial Partner
          </h1>
          <p className="mt-6 text-lg leading-8 text-primary-foreground/80">
            Tafy Tax Consultants - Leaders in Cloud Accounting, Corporate Finance Services, Tax Services, and Audit & Assurance. Your trusted partner for comprehensive financial solutions and strategic tax advisory across South Africa and beyond.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-gold text-primary hover:bg-gold/90" asChild>
              <Link href="https://calendly.com/tafytax/consultation" target="_blank" rel="noopener noreferrer">
                Book Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
