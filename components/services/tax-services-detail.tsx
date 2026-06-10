"use client"

import Link from "next/link"
import { useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import FAQAccordion from "./faq-accordion"
import {
  BarChart,
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
    id: "corporate-tax-services",
    title: "Corporate Tax Services",
    label: "Corporate Tax Services",
    heading: "Secure compliance while improving corporate tax efficiency.",
    description:
      "From corporate income tax filing to VAT and transfer pricing, we help South African businesses manage their tax obligations with precision and strategic insight.",
    cards: [
      {
        icon: FileText,
        title: "Corporate Tax Compliance",
        points: [
          "Preparation and submission of CIT returns",
          "Ensuring compliance with SARS regulations",
          "Electronic filing and assistance with tax assessments",
        ],
      },
      {
        icon: Sparkles,
        title: "Tax Planning & Strategy",
        points: [
          "Structuring to optimize corporate tax liabilities",
          "Maximizing deductions, incentives, and allowances",
          "Tailored strategies for SMEs, large corporations, and multinationals",
        ],
      },
      {
        icon: ShieldCheck,
        title: "VAT & Payroll Tax",
        points: [
          "VAT registration, filing, and compliance support",
          "PAYE, UIF and payroll tax reconciliation",
          "Assistance with SARS payroll submissions",
        ],
      },
      {
        icon: MapPin,
        title: "Audit Support & Dispute Resolution",
        points: [
          "Representation during SARS audits and disputes",
          "Objection, appeal, and settlement support",
          "Tax risk assessment and compliance checks",
        ],
      },
    ],
    whyPoints: [
      {
        icon: Users,
        title: "SARS Compliance Expertise",
        description: "We ensure your business meets regulatory tax requirements across corporate, VAT, payroll, and audit workflows.",
      },
      {
        icon: Target,
        title: "Tax Optimization",
        description: "Proactive planning helps reduce liabilities while keeping your business fully compliant.",
      },
      {
        icon: ShieldCheck,
        title: "Dedicated Support",
        description: "Year-round advisory support helps manage your corporate tax obligations effectively.",
      },
    ],
    faqs: [
      {
        q: "What corporate tax returns do you prepare?",
        a: "We prepare and file corporate income tax returns, provisional tax returns, VAT returns, and payroll tax filings with SARS.",
      },
      {
        q: "How can you help with SARS audits?",
        a: "We represent you during SARS audits, prepare documentation, and support objections or appeals as needed.",
      },
    ],
  },
  {
    id: "provisional-dividend-tax",
    title: "Provisional & Dividend Tax",
    label: "Provisional & Dividend Tax",
    heading: "Avoid penalties with accurate provisional and dividend tax management.",
    description:
      "We help businesses and shareholders calculate provisional payments correctly, manage dividend withholding tax, and use DTAs to reduce exposure.",
    cards: [
      {
        icon: CalendarCheck,
        title: "Provisional Tax Returns",
        points: [
          "Calculation and submission of bi-annual provisional tax payments",
          "Accurate estimates to avoid penalties and interest",
          "Assistance with overpayments and SARS refunds",
        ],
      },
      {
        icon: BarChart,
        title: "Dividend Tax Compliance",
        points: [
          "Compliance with South African DWT rules",
          "Calculation and submission of dividend tax payments",
          "Advice on tax-efficient dividend distributions",
        ],
      },
      {
        icon: Globe,
        title: "DTA Relief",
        points: [
          "Applying double taxation agreements for reduced withholding rates",
          "Claiming treaty benefits for dividends and interest",
          "Supporting international distribution planning",
        ],
      },
      {
        icon: ShieldCheck,
        title: "Tax Advisory",
        points: [
          "Review of corporate restructuring and transaction tax plans",
          "Guidance for mergers, acquisitions and CGT events",
          "Advice on maintaining cash flow while remaining compliant",
        ],
      },
    ],
    whyPoints: [
      {
        icon: Target,
        title: "Penalty Prevention",
        description: "We calculate provisional and dividend obligations precisely so you avoid unnecessary interest and fines.",
      },
      {
        icon: Globe,
        title: "International Relief",
        description: "DTAs and foreign withholding tax planning reduce cross-border tax leakage.",
      },
      {
        icon: BarChart,
        title: "Strategic Decision Making",
        description: "We help you choose the right timing and structure for taxes linked to dividends, mergers, and capital events.",
      },
    ],
    faqs: [
      {
        q: "Do I need to file provisional tax when I pay dividends?",
        a: "Provisional tax is separate from dividend tax, but we can manage both together to ensure total compliance and accurate cash flow planning.",
      },
      {
        q: "Can DTAs reduce dividend withholding tax?",
        a: "Yes. Where a relevant treaty applies, we can help secure reduced rates and ensure the correct documentation is submitted to SARS.",
      },
    ],
  },
  {
    id: "payroll-tax-services",
    title: "Payroll Tax Services",
    label: "Payroll Tax Services",
    heading: "Keep payroll tax accurate, compliant, and stress-free.",
    description:
      "We manage PAYE, UIF, SDL, and employee-related tax obligations so your payroll runs smoothly and your workforce stays protected.",
    cards: [
      {
        icon: Users,
        title: "PAYE Compliance",
        points: [
          "Accurate PAYE calculation and salary deductions",
          "Monthly EMP201 return submission",
          "Annual EMP501 reconciliation support",
        ],
      },
      {
        icon: FileText,
        title: "UIF & SDL Management",
        points: [
          "UIF contributions and employer compliance",
          "SDL calculation and statutory filing",
          "Submission of UIF and SDL payments with PAYE filings",
        ],
      },
      {
        icon: ShieldCheck,
        title: "Registration & Compliance",
        points: [
          "PAYE, UIF, and SDL registration with SARS",
          "Ongoing compliance with payroll tax laws",
          "Guidance on exemptions and deductions",
        ],
      },
      {
        icon: Sparkles,
        title: "Payroll Advisory",
        points: [
          "Structuring salary packages tax-efficiently",
          "Advice on benefits, allowances and fringe benefits",
          "Support for medical aid, retirement and travel allowances",
        ],
      },
    ],
    whyPoints: [
      {
        icon: ShieldCheck,
        title: "Error-Free Filing",
        description: "We minimize payroll tax risk with accurate submissions and reconciliations.",
      },
      {
        icon: Users,
        title: "Employee Protection",
        description: "Correct UIF and PAYE handling keeps both your business and employees compliant.",
      },
      {
        icon: Sparkles,
        title: "Simplified Administration",
        description: "We remove the burden of ongoing payroll tax management so you can focus on running your business.",
      },
    ],
    faqs: [
      {
        q: "What is the difference between PAYE and UIF?",
        a: "PAYE is employee income tax withheld, while UIF is a separate statutory contribution for unemployment benefits.",
      },
      {
        q: "Can you help with EMP501 reconciliation?",
        a: "Yes. We support annual reconciliations and review SARS payroll queries to ensure the figures agree.",
      },
    ],
  },
  {
    id: "expat-cross-border-tax",
    title: "Expat & Cross-Border Tax",
    label: "Expat & Cross-Border Tax",
    heading: "Manage South African tax residency, foreign credits, and international compliance.",
    description:
      "From expat tax returns to tax residency assessments and foreign tax credit claims, we help individuals and businesses navigate cross-border SARS requirements.",
    cards: [
      {
        icon: Globe,
        title: "Residency Assessments",
        points: [
          "Review SA residency status under SARS tests",
          "Advice on ordinary residence and physical presence",
          "Support for tax emigration and non-resident declarations",
        ],
      },
      {
        icon: Lock,
        title: "Foreign Tax Credits",
        points: [
          "Assessment of foreign tax credit eligibility",
          "Application of DTAs and treaty relief",
          "Calculation of allowable credits against SA tax",
        ],
      },
      {
        icon: Layers,
        title: "Expat Tax Returns",
        points: [
          "Preparation of SARS ITR12 returns for expatriates",
          "Correct treatment of foreign income and exemptions",
          "Claiming foreign income exclusions and relief",
        ],
      },
      {
        icon: GitGraph,
        title: "Cross-Border Structuring",
        points: [
          "Advice on offshore operations and transfer pricing",
          "Support for global entity and fund structures",
          "Alignment with SARS and overseas tax rules",
        ],
      },
    ],
    whyPoints: [
      {
        icon: Globe,
        title: "Global Compliance",
        description: "We ensure you remain compliant with SARS and foreign tax authorities across jurisdictions.",
      },
      {
        icon: Lock,
        title: "Double Taxation Relief",
        description: "We leverage DTAs and foreign credits to prevent duplicate taxation.",
      },
      {
        icon: Sparkles,
        title: "Clear Expat Guidance",
        description: "We make cross-border tax filing straightforward for individuals and businesses.",
      },
    ],
    faqs: [
      {
        q: "Do expats still need to file SARS returns?",
        a: "If you remain a SA tax resident or earn South African sourced income, you may still have SARS filing obligations.",
      },
      {
        q: "How can I avoid double taxation?",
        a: "We apply tax treaties and foreign tax credits to minimize your total tax burden across borders.",
      },
    ],
  },
  {
    id: "offshore-trusts-cfcs",
    title: "Offshore Trusts & CFCs",
    label: "Offshore Trusts & CFCs",
    heading: "Understand and comply with South Africa’s offshore disclosure rules.",
    description:
      "We help clients with foreign trusts, controlled foreign companies, offshore accounts, and exchange control reporting to avoid penalties and maintain transparency.",
    cards: [
      {
        icon: Lock,
        title: "Foreign Trust Compliance",
        points: [
          "Disclosure of beneficial interests and distributions",
          "Interpretation of anti-avoidance provisions",
          "Advice on donations and income attribution rules",
        ],
      },
      {
        icon: Globe,
        title: "CFC Tax Planning",
        points: [
          "Determine CFC status under Section 9D",
          "Calculate net imputed income for SA shareholders",
          "Apply exemptions for high-taxed and foreign business establishments",
        ],
      },
      {
        icon: ShieldCheck,
        title: "Offshore Asset Disclosure",
        points: [
          "Report foreign bank accounts, investments and property",
          "Comply with exchange control and SARS reporting rules",
          "Support voluntary disclosure and remediation",
        ],
      },
      {
        icon: FileText,
        title: "Remediation Support",
        points: [
          "VDP submissions for historic non-compliance",
          "Rectifying disclosures before audits arise",
          "Ongoing compliance reviews for offshore structures",
        ],
      },
    ],
    whyPoints: [
      {
        icon: Globe,
        title: "Transparent Reporting",
        description: "Our advice helps you meet SARS offshore disclosure rules while retaining compliant structure efficiency.",
      },
      {
        icon: ShieldCheck,
        title: "Penalty Avoidance",
        description: "We help regularize past issues before enforcement escalates.",
      },
      {
        icon: Lock,
        title: "Offshore Protection",
        description: "Build compliant offshore policies for trusts, CFCs, accounts and foreign asset holdings.",
      },
    ],
    faqs: [
      {
        q: "Do I need to declare foreign trusts to SARS?",
        a: "Yes. South African tax residents must disclose foreign trusts, offshore accounts, and related income.",
      },
      {
        q: "Can I regularize historic offshore non-compliance?",
        a: "We support VDP submissions and remediation to address prior reporting gaps before audit action.",
      },
    ],
  },
]

const bottomWhy = [
  {
    title: "SARS Expertise",
    description: "Deep knowledge of South African income, payroll, provisional, and international tax law.",
  },
  {
    title: "Tailored Solutions",
    description: "Services designed for your business structure, industry, and cross-border needs.",
  },
  {
    title: "Full-Service Support",
    description: "From compliance and filings to dispute resolution and strategic planning.",
  },
]

type ServiceDetailProps = {
  serviceId?: string
}

export default function TaxServicesDetail({ serviceId }: ServiceDetailProps) {
  const sections = useMemo(() => tabSections, [])

  return (
    <div className="bg-[#F8F9FA] text-[#0D1B2E]">
      <section className="bg-[#0D1B2E] text-white">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-20">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.24em] text-[#BFCADE]">Services <span className="mx-2">›</span> Tax Services</p>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Tax Services</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#D1DCE7]">
              Expert tax solutions for South African businesses and cross-border taxpayers, tailored to corporate, provisional, dividend, payroll, and international compliance needs.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:gap-4">
              <Button
                size="lg"
                asChild
                className="rounded-[6px] bg-[#F5C518] px-6 py-4 font-semibold text-[#0D1B2E] shadow-sm shadow-[#0D1B2E]/10 hover:bg-[#e3b616]"
              >
                <Link href={`/contact?service=${serviceId || "tax-services"}`}>
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
                    <h3 className="mt-4 text-3xl font-semibold">Expert tax support built for South African businesses.</h3>
                    <p className="mt-4 text-base leading-7 text-[#D1DCE7]">
                      We combine practical tax knowledge, strong SARS experience, and a client-focused approach to keep your business compliant and tax efficient.
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
                      <h3 className="text-2xl font-semibold">Ready to secure your tax compliance?</h3>
                      <p className="mt-3 max-w-2xl text-base leading-7 text-[#21334A]">
                        Schedule a consultation and let us help you navigate corporate tax, payroll obligations, expat filing, and offshore compliance with confidence.
                      </p>
                    </div>
                    <div>
                      <Button
                        size="lg"
                        asChild
                        className="rounded-[6px] bg-[#0D1B2E] px-6 py-4 font-semibold text-white shadow-sm shadow-[#0D1B2E]/20 hover:bg-[#0b1727]"
                      >
                        <Link href={`/contact?service=${serviceId || "tax-services"}`}>
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

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.24em] text-[#6B7280]">Complete Tax Services</p>
            <h2 className="mt-4 text-3xl font-bold text-[#0D1B2E] sm:text-4xl">A full suite of South African tax solutions</h2>
            <p className="mt-4 text-base leading-7 text-[#6B7280]">
              We support corporate, provisional, dividend, payroll, expat, and offshore tax needs so you can focus on your business while we manage the tax complexity.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {bottomWhy.map((item) => (
              <div key={item.title} className="rounded-[10px] border border-[#E5E7EB] bg-[#F8FAFC] p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-[#0D1B2E]">{item.title}</h3>
                <p className="mt-4 text-[#6B7280]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
