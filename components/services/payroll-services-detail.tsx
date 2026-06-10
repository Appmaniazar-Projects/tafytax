"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import FAQAccordion from "./faq-accordion"
import {
  BarChart,
  CalendarCheck,
  CheckCircle,
  FileText,
  Globe,
  Lock,
  MapPin,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Wallet,
} from "lucide-react"

const tabSections = [
  {
    id: "monthly-payroll-processing",
    title: "Payroll Processing",
    label: "Monthly Payroll Processing & Reporting",
    heading: "Accurate monthly payroll, compliance, and reporting for South African businesses.",
    description:
      "We manage payroll calculations, payslips, statutory filings, and reconciliation so employees are paid correctly and your business remains SARS compliant.",
    cards: [
      {
        icon: Wallet,
        title: "Payroll Calculation & Processing",
        points: [
          "Calculate employee salaries, overtime, bonuses and commissions.",
          "Apply PAYE, UIF, SDL and benefit deductions accurately.",
          "Deliver consistent monthly payroll runs with secure handling.",
        ],
      },
      {
        icon: FileText,
        title: "Payslip Generation & Distribution",
        points: [
          "Issue electronic and printed payslips with clear earnings breakdowns.",
          "Customize payslips for your company’s payroll structure.",
          "Keep employee payroll data confidential and accessible.",
        ],
      },
      {
        icon: ShieldCheck,
        title: "Payroll Tax Filing & Compliance",
        points: [
          "Submit monthly EMP201 returns to SARS accurately.",
          "Calculate and pay PAYE, UIF and SDL on schedule.",
          "Ensure compliance with South African labor and tax laws.",
        ],
      },
      {
        icon: CalendarCheck,
        title: "Reconciliation & Year-End Reporting",
        points: [
          "Reconcile payroll with financial accounts every month.",
          "Prepare EMP501 reconciliations and IRP5 certificates.",
          "Support payroll audits and compliance reviews.",
        ],
      },
    ],
    whyPoints: [
      {
        icon: CheckCircle,
        title: "Accurate Payroll Operations",
        description: "Avoid payroll errors and ensure employees are paid on time every cycle.",
      },
      {
        icon: ShieldCheck,
        title: "SARS Compliance",
        description: "Keep your payroll filings and employee deductions aligned with SARS requirements.",
      },
      {
        icon: Users,
        title: "Secure Information",
        description: "Protect sensitive payroll data with confidential handling and clear reporting.",
      },
    ],
    faqs: [
      {
        q: "Can you handle EMP201 filings for my business?",
        a: "Yes. We prepare and submit monthly EMP201 returns, ensuring payroll taxes are calculated correctly.",
      },
      {
        q: "Do you issue IRP5 certificates?",
        a: "We support IRP5 preparation and submission as part of year-end payroll reporting.",
      },
    ],
  },
  {
    id: "payroll-setup-services",
    title: "Payroll Setup",
    label: "Payroll Setup Services",
    heading: "Implement a compliant payroll system tailored to your business needs.",
    description:
      "We help businesses set up payroll systems, register for SARS payroll taxes, and configure employee compensation so payroll runs smoothly from day one.",
    cards: [
      {
        icon: Globe,
        title: "Payroll System Implementation",
        points: [
          "Select and configure payroll software suited to your business.",
          "Integrate payroll with accounting and HR systems.",
          "Set up tax tables, earnings and deductions accurately.",
        ],
      },
      {
        icon: Lock,
        title: "Payroll Registration & Compliance",
        points: [
          "Register your business for PAYE, UIF and SDL with SARS.",
          "Ensure compliance with payroll tax and labor regulations.",
          "Provide guidance on ongoing reporting obligations.",
        ],
      },
      {
        icon: Users,
        title: "Employee Data Setup",
        points: [
          "Configure payroll for permanent, contract and temporary workers.",
          "Set up tax codes, benefits and retirement deductions.",
          "Build salary structures that support your business model.",
        ],
      },
      {
        icon: MapPin,
        title: "Payslip & Report Customization",
        points: [
          "Design payslips that meet SARS requirements and employee expectations.",
          "Generate management-ready payroll reports and summaries.",
          "Automate payroll processes for accuracy and efficiency.",
        ],
      },
    ],
    whyPoints: [
      {
        icon: Target,
        title: "Smooth Payroll Startup",
        description: "Launch payroll with solid setup and compliance from the start.",
      },
      {
        icon: Sparkles,
        title: "Tailored Payroll Structure",
        description: "Create a payroll system that fits your workforce and accounting processes.",
      },
      {
        icon: BarChart,
        title: "Ongoing Support",
        description: "We provide training and help your team manage payroll with confidence.",
      },
    ],
    faqs: [
      {
        q: "Do you set up payroll for small businesses?",
        a: "Yes. We implement payroll solutions for SMEs, startups and growing companies.",
      },
      {
        q: "Can you train our team on payroll processes?",
        a: "We offer payroll training and ongoing support so your staff can manage payroll accurately.",
      },
    ],
  },
]

const bottomWhy = [
  {
    title: "Trusted Payroll Expertise",
    description: "Expert payroll support that keeps your business compliant and employees satisfied.",
  },
  {
    title: "Regulatory Confidence",
    description: "SARS aligned payroll processes and filings to reduce compliance risk.",
  },
  {
    title: "Payroll Efficiency",
    description: "Automated reporting, accurate calculations and secure payroll handling.",
  },
]

type ServiceDetailProps = {
  serviceId?: string
}

export default function PayrollServicesDetail({ serviceId }: ServiceDetailProps) {
  return (
    <div className="bg-[#F8F9FA] text-[#0F172A]">
      <section className="bg-[#0F172A] text-white">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-20">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.24em] text-[#94A3B8]">Services <span className="mx-2">›</span> Payroll Services</p>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Monthly Payroll Processing & Setup</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#CBD5E1]">
              Accurate and efficient payroll management for South African businesses, including payroll processing, tax filing, payslip delivery and system setup.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:gap-4">
              <Button
                size="lg"
                asChild
                className="rounded-[6px] bg-[#F5C518] px-6 py-4 font-semibold text-[#0F172A] shadow-sm shadow-[#0F172A]/10 hover:bg-[#e3b616]"
              >
                <Link href={`/contact?service=${serviceId || "payroll-services"}`}>
                  Book Payroll Support
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <Tabs defaultValue={tabSections[0].id} className="space-y-6">
            <TabsList className="bg-white/90 border border-[#E5E7EB] shadow-sm">
              {tabSections.map((section) => (
                <TabsTrigger
                  key={section.id}
                  value={section.id}
                  className="text-[#0F172A] data-[state=active]:bg-[#F5C518] data-[state=active]:text-[#0F172A] data-[state=active]:shadow-sm"
                >
                  {section.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {tabSections.map((section) => (
              <TabsContent key={section.id} value={section.id} className="space-y-12">
                <div className="rounded-[10px] border border-[#E5E7EB] bg-white p-8 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#F5C518]">{section.label}</p>
                  <h2 className="mt-4 text-3xl font-bold text-[#0F172A] lg:text-4xl">{section.heading}</h2>
                  <p className="mt-4 max-w-2xl text-base leading-7 text-[#475569]">{section.description}</p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {section.cards.map((card) => (
                    <div key={card.title} className="rounded-[10px] border border-[#E5E7EB] bg-white p-6 shadow-sm">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5C518]/15 text-[#0F172A]">
                        <card.icon className="h-6 w-6" />
                      </div>
                      <h3 className="mt-6 text-xl font-semibold text-[#0F172A]">{card.title}</h3>
                      <ul className="mt-5 space-y-3 text-[#475569]">
                        {card.points.map((point) => (
                          <li key={point} className="flex gap-3">
                            <span className="mt-1 inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#F5C518]" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
                  <div className="rounded-[10px] bg-[#0F172A] p-8 text-white">
                    <p className="text-sm uppercase tracking-[0.24em] text-[#F5C518]">Why Choose Us</p>
                    <h3 className="mt-4 text-3xl font-semibold">Reliable payroll support designed for South African businesses.</h3>
                    <p className="mt-4 text-base leading-7 text-[#CBD5E1]">
                      We provide payroll services that help you stay compliant, reduce risk, and keep your employees paid correctly every month.
                    </p>
                  </div>
                  <div className="grid gap-4">
                    {section.whyPoints.map((item) => (
                      <div key={item.title} className="rounded-[10px] border border-[#E5E7EB] bg-white p-5 shadow-sm">
                        <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F5C518]/10 text-[#0F172A]">
                          <item.icon className="h-5 w-5" />
                        </div>
                        <h4 className="mt-5 text-lg font-semibold text-[#0F172A]">{item.title}</h4>
                        <p className="mt-3 text-sm leading-6 text-[#475569]">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[10px] border border-[#E5E7EB] bg-white p-8 shadow-sm">
                  <h3 className="text-2xl font-semibold text-[#0F172A]">Frequently Asked Questions</h3>
                  <div className="mt-6">
                    <FAQAccordion items={section.faqs} />
                  </div>
                </div>

                <div className="rounded-[10px] bg-[#F5C518] p-8 text-[#0F172A] shadow-sm">
                  <div className="grid gap-6 lg:grid-cols-[1.8fr_auto] lg:items-center">
                    <div>
                      <h3 className="text-2xl font-semibold">Ready for accurate payroll management?</h3>
                      <p className="mt-3 max-w-2xl text-base leading-7 text-[#21334A]">
                        Let us handle your monthly payroll and setup needs so you can focus on running your business without payroll risk.
                      </p>
                    </div>
                    <div>
                      <Button
                        size="lg"
                        asChild
                        className="rounded-[6px] bg-[#0F172A] px-6 py-4 font-semibold text-white shadow-sm shadow-[#0F172A]/20 hover:bg-[#111827]"
                      >
                        <Link href={`/contact?service=${serviceId || "payroll-services"}`}>
                          Book Payroll Support
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.24em] text-[#64748B]">Comprehensive Payroll Coverage</p>
            <h2 className="mt-4 text-3xl font-bold text-[#0F172A] sm:text-4xl">Payroll services with compliance, control, and confidence.</h2>
            <p className="mt-4 text-base leading-7 text-[#475569]">
              From monthly payroll processing and tax filings to system setup and reporting, we deliver payroll solutions built for South African businesses.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {bottomWhy.map((item) => (
              <div key={item.title} className="rounded-[10px] border border-[#E5E7EB] bg-[#F8FAFC] p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-[#0F172A]">{item.title}</h3>
                <p className="mt-4 text-[#475569]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
