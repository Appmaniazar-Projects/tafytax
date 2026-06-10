"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import FAQAccordion from "./faq-accordion"
import {
  FileText,
  Wallet,
  BarChart,
  Users,
  Globe,
  Briefcase,
  CalendarCheck,
  ShieldCheck,
  Target,
  CheckCircle,
} from "lucide-react"

const tabSections = [
  {
    id: "bookkeeping",
    title: "Bookkeeping",
    label: "Bookkeeping Services",
    heading: "Maintain accurate, up-to-date financial records.",
    description:
      "Precise bookkeeping ensures your accounts are reliable, audit-ready and provide a clear basis for decision-making.",
    cards: [
      {
        icon: FileText,
        title: "Transaction Recording",
        points: [
          "Record daily transactions accurately.",
          "Classify accounts for clear reporting.",
          "Maintain books that support tax and audit requirements.",
        ],
      },
      {
        icon: Wallet,
        title: "Bank Reconciliation",
        points: [
          "Reconcile bank statements and identify discrepancies.",
          "Ensure cash positions are correct and up to date.",
          "Support month-end closing processes.",
        ],
      },
      {
        icon: Globe,
        title: "Accounts Payable & Receivable",
        points: [
          "Manage supplier payments and customer invoicing.",
          "Improve collections and cashflow visibility.",
          "Integrate processes with accounting systems.",
        ],
      },
    ],
    whyPoints: [
      {
        icon: ShieldCheck,
        title: "Reliable Records",
        description: "Accurate bookkeeping underpins confident decision-making and compliance.",
      },
      {
        icon: Target,
        title: "Timely Insights",
        description: "Regular reporting helps you act quickly on opportunities and issues.",
      },
      {
        icon: Users,
        title: "Less Admin",
        description: "We reduce the administrative burden so your team can focus on growth.",
      },
    ],
    faqs: [
      { q: "How often do you reconcile accounts?", a: "We reconcile accounts monthly or more frequently if required by the client." },
      { q: "Do you support multi-currency bookkeeping?", a: "Yes — we can manage multi-currency transactions and reporting." },
    ],
  },
  {
    id: "financial-analysis",
    title: "Financial Analysis",
    label: "Analysis & Reporting",
    heading: "Understand your financial health with clear reporting.",
    description:
      "Custom financial statements, cash flow analysis and forecasting to help you plan and measure performance.",
    cards: [
      { icon: BarChart, title: "Profit & Loss", points: ["Customized P&L to reflect your business drivers.", "Highlight revenue and cost trends.", "Compare performance across periods."] },
      { icon: CalendarCheck, title: "Cash Flow Management", points: ["Monitor inflows and outflows.", "Prepare cash forecasts and scenarios.", "Identify liquidity improvements."] },
      { icon: FileText, title: "Management Reporting", points: ["Dashboards and tailored reports.", "KPIs aligned to your business goals.", "Board-ready summaries and narratives."] },
    ],
    whyPoints: [
      { icon: Target, title: "Actionable Reports", description: "Reports focused on decisions, not just numbers." },
      { icon: ShieldCheck, title: "Audit-Ready", description: "Analyses prepared to support regulatory and lender requirements." },
      { icon: Users, title: "Stakeholder Clarity", description: "Clear reporting for owners, lenders and investors." },
    ],
    faqs: [
      { q: "Can you build custom dashboards?", a: "Yes — we design dashboards to surface the metrics you need." },
      { q: "Do you provide forecasting?", a: "We offer short and medium-term forecasting scenarios tailored to your plans." },
    ],
  },
  {
    id: "business-advisory",
    title: "Business Advisory",
    label: "Advisory & Growth",
    heading: "Strategy and operational advice to support growth.",
    description:
      "Our advisors help you improve operations, plan growth and make finance-led decisions that move the business forward.",
    cards: [
      { icon: Users, title: "Operational Efficiency", points: ["Identify process improvements.", "Reduce costs and waste.", "Improve controls and responsibilities."] },
      { icon: Globe, title: "Growth Planning", points: ["Market and financial planning.", "Capital requirements and funding readiness.", "Scenario modelling for expansion."] },
      { icon: Briefcase, title: "Performance Reviews", points: ["Evaluate business performance.", "Set targets and accountability.", "Support management reporting rhythms."] },
    ],
    whyPoints: [
      { icon: Target, title: "Strategic Clarity", description: "Align finance and operations around measurable goals." },
      { icon: ShieldCheck, title: "Risk-Aware", description: "Assess risks and mitigation for strategic initiatives." },
      { icon: Users, title: "Capacity Building", description: "Equip teams with skills to sustain improvements." },
    ],
    faqs: [
      { q: "Do you provide funding advice?", a: "We support funding readiness, valuation inputs and investor reporting." },
      { q: "Can you help with cost optimisation?", a: "Yes — we run targeted reviews to identify savings and efficiency gains." },
    ],
  },
  {
    id: "software-setup",
    title: "Software Setup & Support",
    label: "Software Setup & Training",
    heading: "Get the most from modern accounting systems.",
    description:
      "Setup, integrate and train your team on systems like QuickBooks, Xero and Sage to streamline finance operations.",
    cards: [
      { icon: Globe, title: "Software Selection", points: ["Recommend platforms that fit your business.", "Evaluate integrations and scaling needs.", "Provide total cost of ownership guidance."] },
      { icon: FileText, title: "Implementation & Migration", points: ["Data migration and mapping.", "Chart of accounts setup.", "System configuration and testing."] },
      { icon: CalendarCheck, title: "Training & Support", points: ["Role-based training sessions.", "Ongoing support and troubleshooting.", "Custom report and dashboard training."] },
    ],
    whyPoints: [
      { icon: ShieldCheck, title: "Secure Integrations", description: "We configure systems with control and security in mind." },
      { icon: Target, title: "Faster Close", description: "Automation and good setup reduce month-end effort." },
      { icon: Users, title: "Skilled Teams", description: "We train users so systems are used effectively." },
    ],
    faqs: [
      { q: "Which platforms do you implement?", a: "We implement QuickBooks, Xero, Sage and other common platforms." },
      { q: "Do you offer remote training?", a: "Yes — we provide virtual and on-site training options." },
    ],
  },
]

const bottomWhy = [
  { title: "Practical Outcomes", description: "Immediate improvements in reporting, control and financial clarity." },
  { title: "Modern Tools", description: "Leverage cloud systems to access real-time financial data." },
  { title: "Ongoing Support", description: "Continued support and training as your business grows." },
]

type ServiceDetailProps = {
  serviceId?: string
}

export default function AccountingSoftwareDetail({ serviceId }: ServiceDetailProps) {
  return (
    <div className="bg-[#F8F9FA] text-[#0F172A]">
      <section className="bg-[#0F172A] text-white">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-20">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.24em] text-[#94A3B8]">Services <span className="mx-2">›</span> Accounting Software Solutions</p>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Comprehensive Accounting Services for Your Business</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#CBD5E1]">
              At Tafy Tax Consultants, we provide reliable and efficient accounting solutions designed to help your business thrive. From accurate financial records to strategic insights, we offer services tailored to your needs, so you can focus on growing your business.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:gap-4">
              <Button
                size="lg"
                asChild
                className="rounded-[6px] bg-[#F5C518] px-6 py-4 font-semibold text-[#0F172A] shadow-sm shadow-[#0F172A]/10 hover:bg-[#e3b616]"
              >
                <Link href={`/contact?service=${serviceId || "accounting-software"}`}>
                  Get Started
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
                  {section.cards.map((card) => {
                    const Icon = card.icon
                    return (
                      <div key={card.title} className="rounded-[10px] border border-[#E5E7EB] bg-white p-6 shadow-sm">
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5C518]/15 text-[#0F172A]">
                          <Icon className="h-6 w-6" />
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
                    )
                  })}
                </div>

                <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
                  <div className="rounded-[10px] bg-[#0F172A] p-8 text-white">
                    <p className="text-sm uppercase tracking-[0.24em] text-[#F5C518]">Why Choose Us</p>
                    <h3 className="mt-4 text-3xl font-semibold">Practical accounting services that deliver value.</h3>
                    <p className="mt-4 text-base leading-7 text-[#CBD5E1]">
                      We combine professional accounting skills with modern systems to provide clarity, control and confidence for your business.
                    </p>
                  </div>
                  <div className="grid gap-4">
                    {section.whyPoints.map((item) => {
                      const WhyIcon = item.icon
                      return (
                        <div key={item.title} className="rounded-[10px] border border-[#E5E7EB] bg-white p-5 shadow-sm">
                          <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F5C518]/10 text-[#0F172A]">
                            <WhyIcon className="h-5 w-5" />
                          </div>
                          <h4 className="mt-5 text-lg font-semibold text-[#0F172A]">{item.title}</h4>
                          <p className="mt-3 text-sm leading-6 text-[#475569]">{item.description}</p>
                        </div>
                      )
                    })}
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
                      <h3 className="text-2xl font-semibold">Ready to improve your accounting and reporting?</h3>
                      <p className="mt-3 max-w-2xl text-base leading-7 text-[#21334A]">
                        Contact us to discuss bookkeeping, reporting, software setup and training for your team.
                      </p>
                    </div>
                    <div>
                      <Button
                        size="lg"
                        asChild
                        className="rounded-[6px] bg-[#0F172A] px-6 py-4 font-semibold text-white shadow-sm shadow-[#0F172A]/20 hover:bg-[#111827]"
                      >
                        <Link href={`/contact?service=${serviceId || "accounting-software"}`}>
                          Get Started
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
            <p className="text-sm uppercase tracking-[0.24em] text-[#64748B]">Accounting Services</p>
            <h2 className="mt-4 text-3xl font-bold text-[#0F172A] sm:text-4xl">Comprehensive accounting support for growing businesses</h2>
            <p className="mt-4 text-base leading-7 text-[#475569]">
              Partner with us for bookkeeping, reporting, advisory and software services that simplify finances and drive better decisions.
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
