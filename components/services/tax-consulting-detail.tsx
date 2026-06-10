"use client"

import Link from "next/link"
import { useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import FAQAccordion from "./faq-accordion"
import {
  Briefcase,
  CalendarCheck,
  CheckCircle,
  FileText,
  Globe,
  GitGraph,
  Layers,
  Lock,
  MapPin,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react"

const tabSections = [
  {
    id: "corporate-tax-compliance",
    title: "Corporate Tax Compliance",
    label: "Corporate Tax Compliance",
    heading: "Stay compliant. Reduce risk. Optimize taxes.",
    description:
      "Navigating corporate tax regulations can be complex, but we simplify compliance while helping you minimize liabilities and maintain strong reporting practices.",
    cards: [
      {
        icon: FileText,
        title: "Preparation & Filing",
        points: [
          "Accurate and timely tax return preparation",
          "Compliance with federal, state, and local tax laws",
          "Electronic filing for faster processing",
        ],
      },
      {
        icon: ShieldCheck,
        title: "Risk Management",
        points: [
          "Ensuring adherence to corporate tax laws",
          "Identifying potential compliance risks",
          "Audit preparation and representation",
        ],
      },
      {
        icon: Sparkles,
        title: "Deductions & Credits",
        points: [
          "Maximizing available tax deductions",
          "Identifying and applying for tax credits",
          "Strategic planning to reduce tax liability",
        ],
      },
      {
        icon: MapPin,
        title: "Multi-State & Payroll Tax",
        points: [
          "Tax compliance for businesses operating in multiple states",
          "Payroll tax calculations and filings",
          "Employer reporting and penalty prevention",
        ],
      },
    ],
    whyPoints: [
      {
        icon: Users,
        title: "Expert Knowledge",
        description: "Our team stays current on corporate tax law updates and changes.",
      },
      {
        icon: ShieldCheck,
        title: "Risk Reduction",
        description: "We help you avoid costly penalties by keeping compliance front of mind.",
      },
      {
        icon: Target,
        title: "Tax Efficiency",
        description: "We don't just file returns — we optimize your tax position.",
      },
    ],
    faqs: [
      {
        q: "How does corporate tax compliance help reduce risk?",
        a: "We monitor federal, state, and payroll tax rules to catch gaps early and keep your filings aligned with current legislation.",
      },
      {
        q: "Can you manage payroll and multi-state tax obligations?",
        a: "Yes. We coordinate payroll tax filings, employer reporting, and multi-jurisdiction compliance for growing businesses.",
      },
    ],
  },
  {
    id: "cross-border-taxation",
    title: "Cross-Border Taxation",
    label: "Cross-Border Taxation",
    heading: "Navigate international tax complexity with confidence.",
    description:
      "Expanding beyond borders brings opportunity, but also complex tax obligations. We help businesses and individuals stay compliant while optimizing their global tax strategy.",
    cards: [
      {
        icon: Globe,
        title: "International Compliance",
        points: [
          "Ensuring compliance with U.S. and international tax laws",
          "Preparation of foreign income tax returns",
          "FATCA & FBAR reporting assistance",
        ],
      },
      {
        icon: Layers,
        title: "Multinational Planning",
        points: [
          "Structuring global operations for tax efficiency",
          "Transfer pricing strategies",
          "Cross-border M&A tax planning",
        ],
      },
      {
        icon: MapPin,
        title: "Expatriate Tax",
        points: [
          "Tax planning for expatriates and foreign nationals",
          "U.S. tax return preparation for non-residents",
          "Foreign tax credit and exclusion optimization",
        ],
      },
      {
        icon: GitGraph,
        title: "VAT & Treaties",
        points: [
          "VAT, GST and indirect tax advisory",
          "Cross-border e-commerce tax compliance",
          "Treaty planning to reduce withholding taxes",
        ],
      },
    ],
    whyPoints: [
      {
        icon: Globe,
        title: "Global Expertise",
        description: "We understand the complexities of multinational tax regulations.",
      },
      {
        icon: Lock,
        title: "Regulatory Compliance",
        description: "We keep your operations aligned with international reporting requirements.",
      },
      {
        icon: Sparkles,
        title: "Optimized Strategies",
        description: "We minimize liabilities while maximizing treaty and credit benefits.",
      },
    ],
    faqs: [
      {
        q: "Do you assist with FATCA and FBAR reporting?",
        a: "Yes. We prepare foreign income disclosures and support all required offshore reporting.",
      },
      {
        q: "How do you reduce double taxation for global operations?",
        a: "We apply treaty benefits, foreign tax credits, and cross-border structure planning to limit duplicate tax exposure.",
      },
    ],
  },
  {
    id: "tax-planning-strategy",
    title: "Tax Planning & Strategy",
    label: "Tax Planning & Strategy",
    heading: "Maximize savings and minimize liabilities with proactive planning.",
    description:
      "We deliver strategic tax planning for individuals, businesses, freelancers and investors, helping you stay ahead of tax changes year-round.",
    cards: [
      {
        icon: Users,
        title: "Individual Planning",
        points: [
          "Customized strategies to reduce personal tax liability",
          "Retirement and estate tax planning",
          "Investment tax optimization",
        ],
      },
      {
        icon: Briefcase,
        title: "Business Strategies",
        points: [
          "Tax-efficient business structuring",
          "Corporate tax planning and compliance",
          "Maximizing deductions and credits",
        ],
      },
      {
        icon: Sparkles,
        title: "Small Business Support",
        points: [
          "Freelancer and consultant tax planning",
          "Strategic expense deductions",
          "Self-employment tax strategies",
        ],
      },
      {
        icon: CalendarCheck,
        title: "Year-Round Advisory",
        points: [
          "Ongoing strategy sessions throughout the year",
          "IRS compliance and audit readiness",
          "Updates for tax law changes",
        ],
      },
    ],
    whyPoints: [
      {
        icon: Sparkles,
        title: "Expert Guidance",
        description: "Our professionals stay current on the latest tax rules and opportunities.",
      },
      {
        icon: Target,
        title: "Tailored Solutions",
        description: "We design strategies that align with your personal and business goals.",
      },
      {
        icon: GitGraph,
        title: "Maximized Savings",
        description: "We identify every available deduction and credit to keep more money in your pocket.",
      },
    ],
    faqs: [
      {
        q: "What makes proactive tax planning more effective?",
        a: "Planning ahead allows us to structure transactions and decisions before year-end, rather than reacting after the fact.",
      },
      {
        q: "Can you support freelancers and small businesses?",
        a: "Absolutely — we create tailored tax strategies for self-employed clients and small business owners.",
      },
    ],
  },
  {
    id: "tax-risk-management",
    title: "Tax Risk Management",
    label: "Tax Risk Management",
    heading: "Identify risk, ensure compliance, and protect your business.",
    description:
      "Tax regulations are always changing. We help you assess risk, prepare for audits, and keep your business protected from tax exposure.",
    cards: [
      {
        icon: ShieldCheck,
        title: "Risk Assessment",
        points: [
          "Comprehensive review of tax processes",
          "Identification of compliance gaps",
          "Recommendations to mitigate exposure",
        ],
      },
      {
        icon: ShieldCheck,
        title: "Audit Support",
        points: [
          "Preparation for IRS and regulatory audits",
          "Representation during investigations",
          "Resolution of disputes and appeals",
        ],
      },
      {
        icon: Lock,
        title: "Regulatory Compliance",
        points: [
          "Adherence to federal, state, and international tax laws",
          "Implementation of compliance best practices",
          "Timely and accurate reporting",
        ],
      },
      {
        icon: Layers,
        title: "Transaction & M&A Risk",
        points: [
          "Due diligence for deals and reorganizations",
          "Identifying tax implications of transactions",
          "Structuring deals to reduce risk",
        ],
      },
    ],
    whyPoints: [
      {
        icon: Lock,
        title: "Expert Insight",
        description: "Our team has deep experience with complex, evolving tax rules.",
      },
      {
        icon: ShieldCheck,
        title: "Proactive Management",
        description: "We help prevent issues before they become costly problems.",
      },
      {
        icon: Users,
        title: "Audit Support",
        description: "We stand by you during audits, disputes, and regulatory reviews.",
      },
    ],
    faqs: [
      {
        q: "What kind of audit support do you offer?",
        a: "We prepare documentation, represent you during the process, and help resolve audit issues efficiently.",
      },
      {
        q: "How can you reduce tax risk in transactions?",
        a: "We analyze deals for tax exposure and structure agreements to limit future liabilities.",
      },
    ],
  },
]

type ServiceDetailProps = {
  serviceId?: string
}

export default function TaxConsultingDetail({ serviceId }: ServiceDetailProps) {
  const sections = useMemo(() => tabSections, [])

  return (
    <div className="bg-[#F8F9FA] text-[#0D1B2E]">
      <section className="bg-[#0D1B2E] text-white">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-20">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.24em] text-[#BFCADE]">Services <span className="mx-2">›</span> Tax Consulting</p>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Tax Consulting</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#D1DCE7]">
              Navigate the complexities of tax compliance, international planning, risk management, and strategic advisory with a single, dependable partner.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:gap-4">
              <Button
                size="lg"
                asChild
                className="rounded-[6px] bg-[#F5C518] px-6 py-4 font-semibold text-[#0D1B2E] shadow-sm shadow-[#0D1B2E]/10 hover:bg-[#e3b616]"
              >
                <Link href={`/contact?service=${serviceId || "tax-consulting"}`}>
                  Book Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <Tabs defaultValue={sections[0].id} className="space-y-6">
            <TabsList className="bg-white/90 border border-[#E5E7EB] shadow-sm">
              {sections.map((section) => (
                <TabsTrigger
                  key={section.id}
                  value={section.id}
                  className="text-[#0D1B2E] data-[state=active]:bg-[#F5C518] data-[state=active]:text-[#0D1B2E] data-[state=active]:shadow-sm"
                >
                  {section.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {sections.map((section) => (
              <TabsContent key={section.id} value={section.id} className="space-y-12">
                <div className="rounded-[10px] border border-[#E5E7EB] bg-white p-8 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#F5C518]">{section.label}</p>
                  <h2 className="mt-4 text-3xl font-bold text-[#0D1B2E] lg:text-4xl">{section.heading}</h2>
                  <p className="mt-4 max-w-2xl text-base leading-7 text-[#6B7280]">{section.description}</p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {section.cards.map((card) => (
                    <div key={card.title} className="rounded-[10px] border border-[#E5E7EB] bg-white p-6 shadow-sm">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5C518]/15 text-[#0D1B2E]">
                        <card.icon className="h-6 w-6" />
                      </div>
                      <h3 className="mt-6 text-xl font-semibold text-[#0D1B2E]">{card.title}</h3>
                      <ul className="mt-5 space-y-3 text-[#6B7280]">
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
                  <div className="rounded-[10px] bg-[#0D1B2E] p-8 text-white shadow-lg">
                    <p className="text-sm uppercase tracking-[0.24em] text-[#F5C518]">Why Choose Us</p>
                    <h3 className="mt-4 text-3xl font-semibold">Expert tax support with measurable results.</h3>
                    <p className="mt-4 text-base leading-7 text-[#D1DCE7]">
                      We bring deep technical tax experience, practical risk controls, and clear guidance so you can make informed decisions and stay compliant with confidence.
                    </p>
                  </div>
                  <div className="grid gap-4">
                    {section.whyPoints.map((item) => (
                      <div key={item.title} className="rounded-[10px] border border-[#E5E7EB] bg-white p-5 shadow-sm">
                        <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F5C518]/10 text-[#0D1B2E]">
                          <item.icon className="h-5 w-5" />
                        </div>
                        <h4 className="mt-5 text-lg font-semibold text-[#0D1B2E]">{item.title}</h4>
                        <p className="mt-3 text-sm leading-6 text-[#6B7280]">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[10px] border border-[#E5E7EB] bg-white p-8 shadow-sm">
                  <h3 className="text-2xl font-semibold text-[#0D1B2E]">Frequently Asked Questions</h3>
                  <div className="mt-6">
                    <FAQAccordion items={section.faqs} />
                  </div>
                </div>

                <div className="rounded-[10px] bg-[#F5C518] p-8 text-[#0D1B2E] shadow-sm">
                  <div className="grid gap-6 lg:grid-cols-[1.8fr_auto] lg:items-center">
                    <div>
                      <h3 className="text-2xl font-semibold">Ready to move forward with tax consulting?</h3>
                      <p className="mt-3 max-w-2xl text-base leading-7 text-[#21334A]">
                        Book a consultation with our tax consulting team and let us help you protect your business, reduce risk, and capture every opportunity.
                      </p>
                    </div>
                    <div>
                      <Button
                        size="lg"
                        asChild
                        className="rounded-[6px] bg-[#0D1B2E] px-6 py-4 font-semibold text-white shadow-sm shadow-[#0D1B2E]/20 hover:bg-[#0b1727]"
                      >
                        <Link href={`/contact?service=${serviceId || "tax-consulting"}`}>
                          Book Consultation
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
    </div>
  )
}
