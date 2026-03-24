import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { ServicesSection } from "@/components/home/services-section"
import { WhyUsSection } from "@/components/home/why-us-section"
import { ProcessSection } from "@/components/home/process-section"
import { InsightsSection } from "@/components/home/insights-section"
import { CTASection } from "@/components/home/cta-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <WhyUsSection />
        <ProcessSection />
        <InsightsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
