import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { DotsPattern } from "@/components/ui/shapes"
import { ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import { redirect } from "next/navigation"
import { getServiceById, services } from "@/lib/services"
import ServiceDetailClient from "@/components/services/service-detail-client"
import FAQAccordion from "../../../components/services/faq-accordion"
import TaxConsultingDetail from "@/components/services/tax-consulting-detail"
import TaxServicesDetail from "@/components/services/tax-services-detail"
import CorporateFinancialServicesDetail from "@/components/services/corporate-financial-services-detail"
import AuditAssuranceDetail from "@/components/services/audit-assurance-detail"
import CloudAccountingDetail from "@/components/services/cloud-accounting-detail"
import PayrollServicesDetail from "@/components/services/payroll-services-detail"
import TrainingDetail from "@/components/services/training-detail"
import AccountingSoftwareDetail from "@/components/services/accounting-software-detail"

type Props = {
  params: Promise<{ service: string }>
}

export async function generateStaticParams() {
  return services.map((s) => ({ service: s.id }))
}

export default async function ServiceDetailPage({ params }: Props) {
  const { service: serviceId } = await params
  if (!serviceId) {
    // Render a client-side fallback that can read params using useParams()
    return <ServiceDetailClient />
  }

  const service = getServiceById(String(serviceId))
  const isTaxConsulting = service?.id === "tax-consulting"
  const isTaxServices = service?.id === "tax-services"
  const isCorporateFinance = service?.id === "cfo-services"
  const isAuditAssurance = service?.id === "audit-assurance"
  const isCloudAccounting = service?.id === "cloud-accounting"
  const isPayrollServices = service?.id === "payroll-services"
  const isTraining = service?.id === "training"
  const isAccountingSoftware = service?.id === "accounting-software"
  // Redirect the reviews & training listing to insights (we have a dedicated solutions page)
  if (service?.id === "accounting-reviews-training") {
    redirect("/insights")
  }

  if (!service) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="mb-4 font-medium">Service not found.</div>
          <div className="text-sm text-muted-foreground">Requested id: <strong>{String(serviceId)}</strong></div>
        </div>
      </div>
    )
  }

  if (isTaxConsulting) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <TaxConsultingDetail serviceId={service.id} />
        </main>
        <Footer />
      </div>
    )
  }

  if (isTaxServices) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <TaxServicesDetail serviceId={service.id} />
        </main>
        <Footer />
      </div>
    )
  }

  if (isCorporateFinance) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <CorporateFinancialServicesDetail serviceId={service.id} />
        </main>
        <Footer />
      </div>
    )
  }

  if (isAuditAssurance) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <AuditAssuranceDetail serviceId={service.id} />
        </main>
        <Footer />
      </div>
    )
  }

  if (isCloudAccounting) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <CloudAccountingDetail serviceId={service.id} />
        </main>
        <Footer />
      </div>
    )
  }

  if (isPayrollServices) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <PayrollServicesDetail serviceId={service.id} />
        </main>
        <Footer />
      </div>
    )
  }

  if (isTraining) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <TrainingDetail serviceId={service.id} />
        </main>
        <Footer />
      </div>
    )
  }

  if (isAccountingSoftware) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <AccountingSoftwareDetail serviceId={service.id} />
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative bg-primary py-20 sm:py-24 overflow-hidden">
          <DotsPattern />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              {isTaxConsulting ? (
                <>
                  <p className="text-sm font-medium uppercase tracking-wide text-gold">Tax Consulting Services</p>
                  <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl text-balance">
                    Navigate Tax Complexity with <span className="text-gold">Confidence</span>
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-primary-foreground/80">Navigating tax legislation can be challenging, especially as regulations evolve and businesses grow. Our Tax Consulting services help individuals and organizations make informed tax decisions, reduce risk, and identify opportunities to improve tax efficiency.</p>
                </>
              ) : (
                <>
                  <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl text-balance">
                    {service.title}
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-primary-foreground/80">{service.description}</p>
                </>
              )}

              <div className="mt-8">
                <Button size="lg" className="bg-gold text-primary hover:bg-gold/90" asChild>
                  <Link href={`/contact?service=${service.id}`}>
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

              {isTaxConsulting ? (
                <TaxConsultingDetail serviceId={service.id} />
              ) : (
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
                  <div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary">
                      <service.icon className="h-7 w-7 text-gold" />
                    </div>
                    <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground">{service.title}</h2>
                    <p className="mt-4 text-lg leading-8 text-muted-foreground">{service.description}</p>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-8">
                    <h3 className="text-lg font-semibold text-foreground">What We Handle</h3>
                    <ul className="mt-6 space-y-4">
                      {service.features.map((feature: string) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
      </main>
      <Footer />
    </div>
  )
}
