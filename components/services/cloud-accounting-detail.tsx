"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import FAQAccordion from "./faq-accordion"
import {
  CalendarCheck,
  CheckCircle,
  FileText,
  Globe,
  Layers,
  Lock,
  MapPin,
  Sparkles,
  ShieldCheck,
  Target,
  Users,
  Wallet,
} from "lucide-react"

const tabSections = [
  {
    id: "annual-financial-statements",
    title: "Annual Statements",
    label: "Annual Financial Statements",
    heading: "Ensure accuracy, compliance, and transparency every year.",
    description:
      "We prepare and review complete annual financial statements so you can meet reporting requirements and understand your company’s financial position.",
    cards: [
      {
        icon: FileText,
        title: "Balance Sheet Preparation",
        points: [
          "Present a clear snapshot of assets, liabilities, and equity.",
          "Assess financial stability and working capital requirements.",
          "Support decision-making with accurate year-end balances.",
        ],
      },
      {
        icon: Wallet,
        title: "Income Statement Compilation",
        points: [
          "Summarize revenues, expenses, and net profit or loss.",
          "Provide insights into profitability and cost drivers.",
          "Highlight trends across the financial year.",
        ],
      },
      {
        icon: Globe,
        title: "Cash Flow Statement Analysis",
        points: [
          "Track cash inflows and outflows to measure liquidity.",
          "Evaluate operational, investing, and financing cash movements.",
          "Identify cash management improvements for sustainability.",
        ],
      },
      {
        icon: MapPin,
        title: "Equity & Retained Earnings Reporting",
        points: [
          "Detail changes in shareholders’ equity and retained earnings.",
          "Clarify reinvestment, dividends, and ownership movements.",
          "Support strategic planning with equity transparency.",
        ],
      },
    ],
    whyPoints: [
      {
        icon: ShieldCheck,
        title: "Regulatory Confidence",
        description: "Reports prepared with compliance in mind, ready for regulators and tax authorities.",
      },
      {
        icon: Target,
        title: "Financial Clarity",
        description: "Gain a full view of profitability, liquidity, and year-end performance.",
      },
      {
        icon: Users,
        title: "Stakeholder Trust",
        description: "Annual statements that build confidence with investors, lenders, and partners.",
      },
    ],
    faqs: [
      {
        q: "What is included in annual financial statements?",
        a: "We prepare the balance sheet, income statement, cash flow statement, and statement of changes in equity with full year-end disclosure support.",
      },
      {
        q: "Can you prepare statements for different company structures?",
        a: "Yes. We support SMEs, corporates, non-profits and other entities with tailored year-end reporting.",
      },
    ],
  },
  {
    id: "ifrs-services",
    title: "IFRS Services",
    label: "IFRS Compliance & Adoption",
    heading: "Achieve global reporting standards and strengthen international credibility.",
    description:
      "We guide businesses through IFRS conversion, prepare IFRS-compliant statements, and deliver technical support for ongoing global financial reporting.",
    cards: [
      {
        icon: Layers,
        title: "IFRS Transition Support",
        points: [
          "Move smoothly from local GAAP to IFRS with expert guidance.",
          "Identify key accounting policy changes and disclosure requirements.",
          "Manage transition adjustments and opening balance reconciliations.",
        ],
      },
      {
        icon: Globe,
        title: "IFRS Financial Statement Preparation",
        points: [
          "Prepare statements in accordance with IFRS presentation and disclosure rules.",
          "Address complex areas like revenue, leases, and financial instruments.",
          "Help stakeholders understand IFRS impacts on performance.",
        ],
      },
      {
        icon: Users,
        title: "IFRS Advisory & Training",
        points: [
          "Provide technical interpretation and practical application of IFRS.",
          "Train finance teams on IFRS principles and reporting processes.",
          "Support ongoing adoption and standard updates.",
        ],
      },
      {
        icon: Lock,
        title: "Audit & Regulatory Support",
        points: [
          "Ensure reports meet IFRS disclosure requirements for audits and regulators.",
          "Prepare documentation and assist with inspection queries.",
          "Align reporting with investor and lender expectations.",
        ],
      },
    ],
    whyPoints: [
      {
        icon: Globe,
        title: "Global Consistency",
        description: "IFRS reporting that enhances comparability across borders and subsidiaries.",
      },
      {
        icon: ShieldCheck,
        title: "Investor Confidence",
        description: "Transparent financial statements that appeal to international investors and partners.",
      },
      {
        icon: Target,
        title: "Strategic Clarity",
        description: "Understand the impact of IFRS on your financial position and future decisions.",
      },
    ],
    faqs: [
      {
        q: "Do you help companies convert from local GAAP to IFRS?",
        a: "Yes. We support the full conversion process, including transition planning, accounting policy selection, and comparative reporting.",
      },
      {
        q: "Can you provide IFRS training for our team?",
        a: "Yes. We deliver training programs that build IFRS knowledge and practical reporting skills.",
      },
    ],
  },
  {
    id: "independent-reviews",
    title: "Independent Reviews",
    label: "Independent Financial Reviews",
    heading: "Build transparency and compliance with objective review reports.",
    description:
      "Our independent reviews provide limited assurance over financial statements, helping stakeholders trust your reports without the cost of a full audit.",
    cards: [
      {
        icon: ShieldCheck,
        title: "Objective Financial Analysis",
        points: [
          "Assess statement accuracy and consistency with accounting standards.",
          "Identify potential misstatements or reporting gaps.",
          "Deliver practical recommendations for improvement.",
        ],
      },
      {
        icon: FileText,
        title: "Limited Assurance Reporting",
        points: [
          "Provide review reports that highlight key findings and concerns.",
          "Improve confidence without full audit scope and cost.",
          "Help stakeholders understand financial reliability.",
        ],
      },
      {
        icon: Lock,
        title: "Compliance Guidance",
        points: [
          "Align reviews with IFRS or local GAAP requirements.",
          "Prepare statements for regulatory and tax inspections.",
          "Support governance and reporting policies.",
        ],
      },
      {
        icon: Target,
        title: "Risk Identification",
        points: [
          "Spot areas of financial risk and recommend corrective actions.",
          "Strengthen reporting controls and disclosure practices.",
          "Improve the quality of management information.",
        ],
      },
    ],
    whyPoints: [
      {
        icon: Users,
        title: "Credibility",
        description: "Independent review reports that strengthen trust with lenders and investors.",
      },
      {
        icon: ShieldCheck,
        title: "Cost-Effective Assurance",
        description: "A professional review option for businesses that do not require a full audit.",
      },
      {
        icon: Globe,
        title: "Regulatory Alignment",
        description: "Reports prepared with regulatory compliance and reporting standards in mind.",
      },
    ],
    faqs: [
      {
        q: "What is the benefit of an independent review compared to an audit?",
        a: "An independent review provides limited assurance at lower cost while still improving stakeholder confidence in your financial statements.",
      },
      {
        q: "Who should choose a review over a full audit?",
        a: "SMEs, nonprofits, and companies seeking compliance without the expense and scope of a full audit often benefit from a review.",
      },
    ],
  },
  {
    id: "bookkeeping-reporting",
    title: "Bookkeeping & Reporting",
    label: "Monthly Bookkeeping & Reporting",
    heading: "Keep your finances organized with accurate monthly records and insights.",
    description:
      "Our bookkeeping services ensure transactions are recorded correctly and financial reports are generated regularly to support decision-making and compliance.",
    cards: [
      {
        icon: FileText,
        title: "Transaction Recording",
        points: [
          "Capture income, expenses, and payments accurately each month.",
          "Classify transactions for clean financial statements.",
          "Support tax readiness with organised records.",
        ],
      },
      {
        icon: Wallet,
        title: "Bank Reconciliation",
        points: [
          "Match bank and credit card transactions to your books.",
          "Identify discrepancies and correct errors early.",
          "Maintain accurate cash position reporting.",
        ],
      },
      {
        icon: CalendarCheck,
        title: "Monthly Financial Statements",
        points: [
          "Generate income statements, balance sheets, and cash flow reports.",
          "Track performance trends month to month.",
          "Provide timely insights for business planning.",
        ],
      },
      {
        icon: MapPin,
        title: "Customized Reporting",
        points: [
          "Deliver reports aligned to your business needs.",
          "Provide easy-to-understand dashboards and summaries.",
          "Highlight key metrics for operations and growth.",
        ],
      },
    ],
    whyPoints: [
      {
        icon: ShieldCheck,
        title: "Accurate Records",
        description: "Reliable bookkeeping underpins financial control and compliant reporting.",
      },
      {
        icon: Target,
        title: "Better Decisions",
        description: "Timely reports help you act quickly on performance and cash flow issues.",
      },
      {
        icon: Users,
        title: "Less Admin",
        description: "Reduce the burden of day-to-day accounting so you can focus on running your business.",
      },
    ],
    faqs: [
      {
        q: "What does monthly bookkeeping include?",
        a: "We record transactions, reconcile accounts, manage payables and receivables, and prepare monthly financial reports.",
      },
      {
        q: "Can you support e-commerce and service businesses?",
        a: "Yes. We tailor bookkeeping and reporting to the needs of your industry and transaction volume.",
      },
    ],
  },
  {
    id: "payroll-services",
    title: "Payroll Services",
    label: "Payroll Management",
    heading: "Streamline payroll with accurate payments, tax compliance and year-end reporting.",
    description:
      "We manage payroll calculations, deductions, payslips, and statutory filings so your employees are paid correctly and your business stays compliant.",
    cards: [
      {
        icon: Users,
        title: "Payroll Processing",
        points: [
          "Calculate salaries, deductions, and net pay accurately.",
          "Prepare payslips and payroll summaries each period.",
          "Ensure timely salary payments and deductions.",
        ],
      },
      {
        icon: CheckCircle,
        title: "Tax Compliance",
        points: [
          "Manage PAYE, UIF, SDL and statutory filings.",
          "Keep payroll tax records audit-ready.",
          "Support year-end payroll reconciliations.",
        ],
      },
      {
        icon: ShieldCheck,
        title: "Leave & Benefits",
        points: [
          "Track leave, allowances, and deductions.",
          "Integrate payroll with employee benefits and retirement schemes.",
          "Provide clear reporting for management and staff.",
        ],
      },
      {
        icon: Globe,
        title: "Advisory Support",
        points: [
          "Advice on payroll structure and compliance risks.",
          "Support payroll system integration and automation.",
          "Help you stay current with labor and tax rules.",
        ],
      },
    ],
    whyPoints: [
      {
        icon: Users,
        title: "Reliable Payroll",
        description: "Avoid delays, errors, and compliance issues with accurate payroll management.",
      },
      {
        icon: Lock,
        title: "Tax Confidence",
        description: "We keep payroll taxes correct so you can avoid penalties and employee disputes.",
      },
      {
        icon: Target,
        title: "Simplified Operations",
        description: "Let our team handle payroll so you can focus on growing your business.",
      },
    ],
    faqs: [
      {
        q: "Do you manage payroll tax filings?",
        a: "Yes. We handle statutory payroll filings and year-end reconciliations on behalf of your business.",
      },
      {
        q: "Can you integrate payroll with accounting software?",
        a: "Yes. We support integration with cloud accounting systems to keep payroll and financial records aligned.",
      },
    ],
  },
]

const bottomWhy = [
  {
    title: "Accessible Accounting",
    description: "Cloud-based tools that let you work from anywhere while keeping your financial data secure.",
  },
  {
    title: "Accurate Reporting",
    description: "Timely statements, reviews and bookkeeping that support better financial decisions.",
  },
  {
    title: "Compliance Focused",
    description: "We combine cloud accounting with strong controls to keep your business audit-ready.",
  },
]

type ServiceDetailProps = {
  serviceId?: string
}

export default function CloudAccountingDetail({ serviceId }: ServiceDetailProps) {
  return (
    <div className="bg-[#F8F9FA] text-[#0F172A]">
      <section className="bg-[#0F172A] text-white">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-20">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.24em] text-[#94A3B8]">Services <span className="mx-2">›</span> Cloud Accounting</p>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Cloud Accounting & Financial Reporting</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#CBD5E1]">
              Cloud accounting services to keep your finances organised, compliant and insightful. From annual statements to IFRS, independent reviews, bookkeeping and payroll, we deliver clear financial control.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:gap-4">
              <Button
                size="lg"
                asChild
                className="rounded-[6px] bg-[#F5C518] px-6 py-4 font-semibold text-[#0F172A] shadow-sm shadow-[#0F172A]/10 hover:bg-[#e3b616]"
              >
                <Link href={`/contact?service=${serviceId || "cloud-accounting"}`}>
                  Book Consultation
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
                    <h3 className="mt-4 text-3xl font-semibold">Practical cloud accounting support that protects your business.</h3>
                    <p className="mt-4 text-base leading-7 text-[#CBD5E1]">
                      We help you use cloud accounting strategically, with reporting and compliance delivered through modern systems and skilled financial oversight.
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
                      <h3 className="text-2xl font-semibold">Ready to move your accounting into the cloud?</h3>
                      <p className="mt-3 max-w-2xl text-base leading-7 text-[#21334A]">
                        Let us help you build a modern financial foundation with cloud accounting, compliant reporting and transparent financial oversight.
                      </p>
                    </div>
                    <div>
                      <Button
                        size="lg"
                        asChild
                        className="rounded-[6px] bg-[#0F172A] px-6 py-4 font-semibold text-white shadow-sm shadow-[#0F172A]/20 hover:bg-[#111827]"
                      >
                        <Link href={`/contact?service=${serviceId || "cloud-accounting"}`}>
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
            <p className="text-sm uppercase tracking-[0.24em] text-[#64748B]">Cloud Accounting Coverage</p>
            <h2 className="mt-4 text-3xl font-bold text-[#0F172A] sm:text-4xl">A complete approach to financial reporting and compliance</h2>
            <p className="mt-4 text-base leading-7 text-[#475569]">
              We combine cloud accounting technology with professional services that keep your financial reports accurate, compliant and easy to act upon.
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
