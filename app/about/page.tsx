import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Award, Target, Eye, Users } from "lucide-react"
import { FloatingCircles, DotsPattern, WavePattern, TrianglePattern } from "@/components/ui/shapes"

export const metadata: Metadata = {
  title: "About Us | Tafy Tax Consultants",
  description: "Learn about Tafy Tax Consultants - our mission, expertise, and commitment to providing strategic tax and financial advisory services.",
}

const values = [
  {
    name: "Excellence",
    description: "We maintain the highest standards in everything we do, delivering exceptional service and expert guidance to every client.",
    icon: Award,
  },
  {
    name: "Integrity",
    description: "We operate with transparency and honesty, building trust through ethical practices and responsible advice.",
    icon: Target,
  },
  {
    name: "Innovation",
    description: "We continuously evolve our approaches to address the changing landscape of tax and financial regulations.",
    icon: Eye,
  },
  {
    name: "Partnership",
    description: "We work alongside our clients as true partners, invested in their success and committed to their goals.",
    icon: Users,
  },
]

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "500+", label: "Clients Served" },
  { value: "50+", label: "Countries Covered" },
  { value: "98%", label: "Client Retention" },
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-primary py-20 sm:py-24 overflow-hidden">
          <FloatingCircles />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl text-balance">
                About Tafy Tax
              </h1>
              <p className="mt-6 text-lg leading-8 text-primary-foreground/80">
                A trusted partner for businesses navigating the complexities of tax and financial management.
              </p>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="relative py-20 sm:py-24 overflow-hidden">
          <WavePattern />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Who We Are
              </h2>
              <div className="mt-6 space-y-6 text-lg leading-8 text-muted-foreground">
                <p>
                  Tafy Tax Consultants is a premier tax and financial advisory firm dedicated to helping businesses achieve their objectives through strategic guidance and practical solutions. Founded on the principles of excellence and integrity, we have grown to become a trusted partner for organizations across diverse industries.
                </p>
                <p>
                  Our team comprises seasoned professionals with deep expertise in tax law, financial management, and cross-border regulations. We combine technical knowledge with practical business acumen to deliver advice that is not only compliant but also strategically advantageous.
                </p>
                <p>
                  We understand that every business is unique, which is why we take a personalized approach to every engagement. Whether you are a growing enterprise navigating your first international expansion or an established corporation optimizing your global tax strategy, we have the expertise to guide you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-secondary py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-4xl font-bold text-primary sm:text-5xl">{stat.value}</div>
                    <div className="mt-2 text-sm font-medium text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl gap-16 lg:max-w-none lg:grid-cols-2">
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-sky-blue">Our Mission</h2>
                <p className="mt-4 text-2xl font-bold tracking-tight text-foreground">
                  Empowering Businesses Through Expert Advisory
                </p>
                <p className="mt-4 text-lg leading-8 text-muted-foreground">
                  To provide exceptional tax and financial advisory services that enable businesses to navigate complex regulations, optimize their positions, and achieve sustainable growth. We are committed to delivering practical, actionable guidance that creates real value for our clients.
                </p>
              </div>
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-sky-blue">Our Vision</h2>
                <p className="mt-4 text-2xl font-bold tracking-tight text-foreground">
                  The Trusted Partner for Global Business
                </p>
                <p className="mt-4 text-lg leading-8 text-muted-foreground">
                  To be recognized as the leading tax and financial advisory firm for businesses operating across borders, known for our expertise, integrity, and commitment to client success. We aspire to set the standard for excellence in professional advisory services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="relative bg-secondary py-20 sm:py-24 overflow-hidden">
          <DotsPattern />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-sky-blue">Our Values</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                What Guides Us
              </p>
            </div>
            <div className="relative mx-auto mt-16 max-w-2xl lg:max-w-none">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {values.map((value) => (
                  <div key={value.name} className="rounded-xl border border-border bg-card p-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                      <value.icon className="h-6 w-6 text-gold" />
                    </div>
                    <h3 className="mt-6 text-lg font-semibold text-foreground">{value.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative bg-primary py-20 sm:py-24 overflow-hidden">
          <TrianglePattern />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Let&apos;s Work Together
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Ready to partner with a team that understands your business? Contact us to start the conversation.
              </p>
              <div className="mt-10">
                <Button size="lg" className="bg-gold text-primary hover:bg-gold/90" asChild>
                  <Link href="/contact">
                    Get in Touch
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
