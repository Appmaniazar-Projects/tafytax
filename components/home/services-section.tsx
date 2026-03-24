import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calculator, FileText, ShieldCheck, GraduationCap, Monitor, ArrowRight } from "lucide-react"

const services = [
  {
    title: "Cloud Accounting Solutions",
    description: "Modern cloud-based accounting with real-time insights and automated workflows for scalable business growth.",
    icon: Calculator,
    href: "/services#cloud-accounting",
  },
  {
    title: "Corporate Finance Services",
    description: "Strategic CFO services, financial planning, and business analysis to drive your company's financial success.",
    icon: GraduationCap,
    href: "/services#cfo-services",
  },
  {
    title: "Tax Services & Consulting",
    description: "Expert tax planning, compliance, and advisory services to minimize liabilities and maximize savings.",
    icon: FileText,
    href: "/services#tax-services",
  },
  {
    title: "Audit & Assurance",
    description: "Comprehensive audit services and financial assurance to ensure compliance and business integrity.",
    icon: ShieldCheck,
    href: "/services#audit-assurance",
  },
  {
    title: "Training & Development",
    description: "Gain skills to take control of your financial processes with our expert-led training programs.",
    icon: GraduationCap,
    href: "/services#training",
  },
  {
    title: "Accounting Software Reviews and Training",
    description: "Find the right software for your needs and learn to use it like a pro.",
    icon: Monitor,
    href: "/insights",
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-sky-blue">Our Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Simplifying Your Financial Management
          </p>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Whether you're looking to grow your business, streamline your processes, or stay ahead of tax deadlines, we're here to help you every step of the way.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="group relative overflow-hidden border-border bg-card transition-all hover:border-accent/50 hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                  <service.icon className="h-6 w-6 text-gold" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
                <div className="mt-4">
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-sm font-medium text-sky-blue hover:text-sky-blue/80 transition-colors"
                  >
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
