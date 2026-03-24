import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { DotsPattern, TrianglePattern, WavePattern } from "@/components/ui/shapes"
import { ArrowRight, Briefcase, Calculator, CheckCircle, LineChart, Monitor } from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Services | Tafy Tax Consultants",
  description: "Comprehensive tax and accounting services including tax consulting, tax services, accounting software solutions, CFO services, payroll services, and cloud accounting.",
}

const services = [
  {
    id: "tax-consulting",
    title: "Tax Consulting",
    description: "Navigate the complex world of tax regulations with expert guidance. We provide strategic tax advice to help you minimize liabilities and ensure compliance with ever-changing tax laws. Our consulting services focus on proactive tax planning and risk management.",
    icon: Calculator,
    features: [
      "Tax planning and strategy development",
      "Tax compliance and regulatory guidance",
      "Tax dispute resolution and representation",
      "International tax advisory services",
      "Tax risk assessment and management",
      "Strategic tax optimization for businesses",
    ],
  },
  {
    id: "tax-services",
    title: "Tax Services",
    description: "Comprehensive tax preparation and filing services for individuals and businesses. We ensure accurate, timely submissions while maximizing your deductions and credits. From personal income tax to corporate tax compliance, we handle it all with precision.",
    icon: LineChart,
    features: [
      "Personal and corporate tax preparation",
      "VAT/GST filing and compliance",
      "Provisional tax calculations",
      "Tax clearance certificates",
      "Tax return amendments and corrections",
      "Annual tax compliance reviews",
    ],
  },
  {
    id: "accounting-software",
    title: "Accounting Software Solutions",
    description: "Optimize your financial management with the right accounting software. We help you select, implement, and master accounting tools that fit your business needs. From setup to training, we ensure you get the most out of your investment.",
    icon: Monitor,
    features: [
      "Software selection and implementation",
      "Training and support for accounting software",
      "Integration with existing systems",
      "Ongoing technical support and troubleshooting",
      "Data migration and setup",
      "Custom reporting and dashboard configuration",
    ],
  },
  {
    id: "cfo-services",
    title: "Corporate Financial Services",
    description: "Access expert financial leadership without the cost of a full-time CFO. We provide strategic financial guidance to help your business grow and thrive. Our services include working capital management, business analysis, and cost structuring.",
    icon: Briefcase,
    features: [
      "Financial strategy and planning",
      "Working capital cycle management",
      "Cash flow management and optimization",
      "Business performance analysis",
      "Cost structuring and optimization",
      "Strategic growth advisory",
    ],
  },
  {
    id: "audit-assurance",
    title: "Audit & Assurance",
    description: "Strengthen control, reduce risk, and build stakeholder confidence with expert audit and assurance solutions tailored to your business and compliance needs.",
    icon: CheckCircle,
    features: [
      "Internal audit & control reviews",
      "Risk management and governance advisory",
      "ESG, cybersecurity, and non-financial assurance",
      "Audit readiness, mock walkthroughs, and documentation support",
      "Forensic accounting, fraud risk assessments, and fraud prevention",
      "Quality assurance and review engagement support",
    ],
  },
  {
    id: "payroll-services",
    title: "Payroll Services",
    description: "Efficient and accurate payroll processing that ensures your employees are paid correctly and on time while maintaining compliance with payroll regulations. We handle everything from payroll calculations to statutory filings.",
    icon: Calculator,
    features: [
      "Payroll processing and administration",
      "Employee tax calculations and filings",
      "Payslip generation and distribution",
      "PAYE and SDL compliance",
      "Annual payroll tax certificates",
      "Leave management and tracking",
    ],
  },
  {
    id: "cloud-accounting",
    title: "Cloud Accounting",
    description: "Modern cloud-based accounting solutions that provide real-time financial insights and accessibility from anywhere. Transform your financial management with cutting-edge technology that scales with your business.",
    icon: Monitor,
    features: [
      "Cloud accounting software setup",
      "Real-time financial reporting",
      "Multi-user access and collaboration",
      "Automated bank feeds and reconciliation",
      "Mobile access for on-the-go management",
      "Data security and backup solutions",
    ],
  },
]

const whyChooseUs = [
  {
    title: "Experienced Professionals",
    description: "Our team brings extensive expertise in managing financial systems across various industries with years of hands-on experience.",
  },
  {
    title: "Tailored Solutions",
    description: "Services customized to fit the specific needs of your business, ensuring optimal results and satisfaction.",
  },
  {
    title: "Efficient Processes",
    description: "We use advanced tools and technologies to ensure accuracy, timeliness, and cost-effectiveness in all our services.",
  },
  {
    title: "Comprehensive Services",
    description: "From tax consulting to software implementation, we offer end-to-end solutions for all your financial needs.",
  },
  {
    title: "Client-Focused Approach",
    description: "Your success is our priority. We build long-term relationships based on trust, transparency, and results.",
  },
  {
    title: "Regulatory Compliance",
    description: "Stay compliant with all relevant laws and regulations with our up-to-date knowledge and proactive approach.",
  },
]

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-primary py-20 sm:py-24 overflow-hidden">
          <DotsPattern />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl text-balance">
                Comprehensive Tax & Financial Services
              </h1>
              <p className="mt-6 text-lg leading-8 text-primary-foreground/80">
                At Tafy Tax Consultants, we provide reliable and efficient tax and financial solutions designed to help your business thrive. From expert tax consulting to modern accounting software, we offer comprehensive services tailored to your needs.
              </p>
            </div>
          </div>
        </section>

        {/* Services Detail Sections */}
        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className={`relative py-20 sm:py-24 overflow-hidden ${index % 2 === 1 ? "bg-secondary" : "bg-background"}`}
          >
            {index % 2 === 0 && <WavePattern />}
            {index % 2 === 1 && <DotsPattern />}
            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:max-w-none">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
                  <div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary">
                      <service.icon className="h-7 w-7 text-gold" />
                    </div>
                    <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-muted-foreground">
                      {service.description}
                    </p>
                    <div className="mt-8">
                      <Button asChild>
                        <Link href="https://calendly.com/tafytax/consultation" target="_blank" rel="noopener noreferrer">
                          Get Started
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-8">
                    <h3 className="text-lg font-semibold text-foreground">What We Handle</h3>
                    <ul className="mt-6 space-y-4">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Why Choose Us Section */}
        <section className="bg-secondary py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-sky-blue">Why Choose Us</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Partner with Experts You Can Trust
              </p>
            </div>
            <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
              {whyChooseUs.map((item) => (
                <div key={item.title} className="text-center">
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative bg-primary py-20 sm:py-24 overflow-hidden">
          <TrianglePattern />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl text-balance">
                Get Started Today
              </h2>
              <p className="mt-4 text-lg leading-8 text-primary-foreground/80">
                Partner with us for reliable accounting services that simplify your finances and support your success. Contact us today for a free consultation.
              </p>
              <div className="mt-10">
                <Button size="lg" className="bg-gold text-primary hover:bg-gold/90" asChild>
                  <Link href="https://calendly.com/tafytax/consultation" target="_blank" rel="noopener noreferrer">
                    Book Consultation
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
