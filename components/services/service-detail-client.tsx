"use client"

import React, { useEffect } from "react"
import { useParams, useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle, ArrowRight } from "lucide-react"
import FAQAccordion from "./faq-accordion"
import TaxConsultingDetail from "./tax-consulting-detail"
import TaxServicesDetail from "./tax-services-detail"
import CorporateFinancialServicesDetail from "./corporate-financial-services-detail"
import AuditAssuranceDetail from "./audit-assurance-detail"
import CloudAccountingDetail from "./cloud-accounting-detail"
import PayrollServicesDetail from "./payroll-services-detail"
import TrainingDetail from "./training-detail"
import AccountingSoftwareDetail from "./accounting-software-detail"
import { getServiceById, services } from "@/lib/services"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ServiceDetailClient() {
  const params = useParams()
  const search = useSearchParams()
  const id = params?.service || search?.get("service") || undefined

  let service = id ? getServiceById(String(id)) : undefined

  // If still not found, try extracting last path segment from pathname
  if (!service && typeof window !== "undefined") {
    try {
      const path = window.location.pathname || ""
      const parts = path.split("/").filter(Boolean)
      const last = parts[parts.length - 1]
      if (last) {
        service = getServiceById(String(last))
      }
    } catch (e) {
      // ignore
    }
  }

  const router = useRouter()
  const isTaxConsulting = service?.id === "tax-consulting"
  const isTaxServices = service?.id === "tax-services"
  const isCorporateFinance = service?.id === "cfo-services"
  const isAuditAssurance = service?.id === "audit-assurance"
  const isCloudAccounting = service?.id === "cloud-accounting"
  const isPayrollServices = service?.id === "payroll-services"
  const isTraining = service?.id === "training"
  const isAccountingSoftware = service?.id === "accounting-software"
  const isAccountingReviews = service?.id === "accounting-reviews-training"

  useEffect(() => {
    if (isAccountingReviews) {
      router.push("/insights")
    }
  }, [isAccountingReviews, router])

  if (!service) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="mb-4 font-medium">Service not found.</div>
          <div className="text-sm text-muted-foreground">Requested id: <strong>{String(id)}</strong></div>
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
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              {isTaxConsulting ? (
                <>
                  <p className="text-sm font-medium uppercase tracking-wide text-gold">Tax Consulting Services</p>
                  <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl text-balance">Navigate Tax Complexity with <span className="text-gold">Confidence</span></h1>
                  <p className="mt-6 text-lg leading-8 text-muted-foreground">Navigating tax legislation can be challenging, especially as regulations evolve and businesses grow. Our Tax Consulting services help individuals and organizations make informed tax decisions, reduce risk, and identify opportunities to improve tax efficiency.</p>
                </>
              ) : (
                <>
                  <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl text-balance">
                    {service.title}
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-muted-foreground">{service.description}</p>
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

        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              {isTaxConsulting ? (
                <div className="space-y-16">
                  <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-semibold text-foreground">Tax Consulting</h2>
                    <p className="mt-4 text-2xl font-bold text-primary-foreground">Strategic Tax Advice for Businesses and Individuals</p>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                      Navigating tax legislation can be challenging, especially as regulations evolve and businesses grow. Our Tax Consulting services help individuals and organizations make informed tax decisions, reduce risk, and identify opportunities to improve tax efficiency.
                    </p>
                  </div>

                  <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
                    <div className="lg:col-span-2">
                      <h3 className="text-lg font-semibold text-foreground">Overview</h3>
                      <p className="mt-4 text-lg leading-8 text-muted-foreground">
                        Whether you require support with corporate tax compliance, international taxation, tax planning, or risk management, our consultants provide practical solutions tailored to your circumstances.
                      </p>
                    </div>
                    <div className="hidden lg:block" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Our Tax Consulting Services</h3>
                    <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                      <div className="rounded-2xl border border-border bg-card p-6">
                        <h4 className="font-semibold">Corporate Tax Compliance</h4>
                        <p className="mt-2 text-sm text-muted-foreground">Preparation, compliance reviews and optimization to keep you compliant.</p>
                      </div>
                      <div className="rounded-2xl border border-border bg-card p-6">
                        <h4 className="font-semibold">Cross-Border Taxation</h4>
                        <p className="mt-2 text-sm text-muted-foreground">International tax planning, reporting and treaty guidance.</p>
                      </div>
                      <div className="rounded-2xl border border-border bg-card p-6">
                        <h4 className="font-semibold">Tax Planning & Strategy</h4>
                        <p className="mt-2 text-sm text-muted-foreground">Tax-efficient structuring and year-round advisory.</p>
                      </div>
                      <div className="rounded-2xl border border-border bg-card p-6">
                        <h4 className="font-semibold">Tax Risk Management</h4>
                        <p className="mt-2 text-sm text-muted-foreground">Assessments, audit readiness and dispute support.</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Benefits</h3>
                    <div className="mt-6 grid gap-6 sm:grid-cols-2">
                      <div className="rounded-xl border border-border bg-card p-6">
                        <h4 className="font-semibold">Corporate Tax Compliance</h4>
                        <ul className="mt-3 text-muted-foreground space-y-2 list-disc list-inside">
                          <li>Reduced compliance risks</li>
                          <li>Improved tax efficiency</li>
                          <li>Timely and accurate filings</li>
                          <li>Professional audit support</li>
                        </ul>
                      </div>
                      <div className="rounded-xl border border-border bg-card p-6">
                        <h4 className="font-semibold">Cross-Border Taxation</h4>
                        <ul className="mt-3 text-muted-foreground space-y-2 list-disc list-inside">
                          <li>Minimized international tax exposure</li>
                          <li>Improved compliance across jurisdictions</li>
                          <li>Optimized global tax structures</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Why Choose Tafy Tax Consultants?</h3>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      <div className="rounded-xl border border-border bg-card p-6">
                        <h5 className="font-semibold">Industry Expertise</h5>
                        <p className="mt-2 text-sm text-muted-foreground">Our team stays up to date with changing tax legislation and regulatory requirements.</p>
                      </div>
                      <div className="rounded-xl border border-border bg-card p-6">
                        <h5 className="font-semibold">Tailored Solutions</h5>
                        <p className="mt-2 text-sm text-muted-foreground">Every client receives recommendations based on their specific circumstances and objectives.</p>
                      </div>
                      <div className="rounded-xl border border-border bg-card p-6">
                        <h5 className="font-semibold">Proactive Support</h5>
                        <p className="mt-2 text-sm text-muted-foreground">We focus on prevention and planning rather than reacting to issues.</p>
                      </div>
                      <div className="rounded-xl border border-border bg-card p-6">
                        <h5 className="font-semibold">Long-Term Partnership</h5>
                        <p className="mt-2 text-sm text-muted-foreground">We support clients throughout the year, not only during filing periods.</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Frequently Asked Questions</h3>
                    <div className="mt-6">
                      <FAQAccordion />
                    </div>
                  </div>

                  <div className="rounded-2xl border border-border bg-primary/5 p-8 text-center">
                    <h3 className="text-lg font-semibold text-foreground">Speak to a Tax Consultant</h3>
                    <p className="mt-4 text-muted-foreground">Whether you need assistance with tax planning, compliance, or international taxation, our team can help you develop a strategy that supports your financial goals.</p>
                    <div className="mt-6">
                      <Button size="lg" className="bg-gold text-primary hover:bg-gold/90" asChild>
                        <Link href={`/contact?service=${service.id}`}>
                          Book a Consultation Today
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
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
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
