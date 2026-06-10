"use client"

import Link from "next/link"
import { useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import FAQAccordion from "./faq-accordion"
import {
  BarChart,
  Briefcase,
  Calculator,
  CheckCircle,
  FileText,
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
    id: "strategic-financial-advisory",
    title: "Strategic Advisory",
    label: "Strategic Financial Advisory",
    heading: "Build a clear financial strategy for growth and stability.",
    description:
      "We help organisations optimise capital structure, financing, working capital and dividend policy through data-driven strategic guidance.",
    cards: [
      {
        icon: Briefcase,
        title: "Capital Structure",
        points: [
          "Optimize debt and equity mix",
          "Align financing strategy with growth goals",
          "Assess cost of capital for strategic decisions",
        ],
      },
      {
        icon: Target,
        title: "Financing Strategy",
        points: [
          "Evaluate long-term and short-term funding options",
          "Guide financing for acquisitions, expansions and working capital",
          "Support investor and lender discussions",
        ],
      },
      {
        icon: Sparkles,
        title: "Dividend & Capital Policy",
        points: [
          "Formulate dividend policy for shareholders",
          "Ensure cash flow supports return objectives",
          "Balance reinvestment with stakeholder expectations",
        ],
      },
      {
        icon: MapPin,
        title: "Working Capital",
        points: [
          "Improve cash conversion cycles",
          "Forecast liquidity requirements",
          "Enhance operating efficiency and resilience",
        ],
      },
    ],
    whyPoints: [
      {
        icon: Users,
        title: "Experienced Advisors",
        description: "Years of industry expertise across finance, strategy and capital markets.",
      },
      {
        icon: BarChart,
        title: "Data-Driven Insights",
        description: "Strategic recommendations backed by analytics and market intelligence.",
      },
      {
        icon: Lock,
        title: "Tailored Approach",
        description: "Solutions designed to align with your business goals and stage.",
      },
    ],
    faqs: [
      {
        q: "How can you help with our capital structure?",
        a: "We assess your business, funding needs and cost of capital to recommend the right mix of debt and equity.",
      },
      {
        q: "Do you assist with dividend policy?",
        a: "Yes. We help define a dividend approach that supports shareholder returns while preserving financial flexibility.",
      },
    ],
  },
  {
    id: "investment-appraisal",
    title: "Investment Appraisal",
    label: "Investment Appraisal & Budgeting",
    heading: "Make smarter capital decisions with robust appraisal frameworks.",
    description:
      "We evaluate investment opportunities using DCF, NPV, IRR and sensitivity analysis so every capital allocation decision supports long-term value.",
    cards: [
      {
        icon: Calculator,
        title: "DCF & Valuation",
        points: [
          "Build discounted cash flow models",
          "Assess project and business valuation drivers",
          "Support funding and investment discussions",
        ],
      },
      {
        icon: BarChart,
        title: "NPV, IRR & Payback",
        points: [
          "Calculate return metrics for investment options",
          "Compare alternatives through risk-adjusted scenarios",
          "Ensure decisions are supported by clear financial logic",
        ],
      },
      {
        icon: ShieldCheck,
        title: "Risk & Sensitivity",
        points: [
          "Conduct scenario and sensitivity analysis",
          "Stress-test returns under different conditions",
          "Identify downside and upside exposures",
        ],
      },
      {
        icon: Sparkles,
        title: "Capital Budgeting",
        points: [
          "Align investment plans with strategic goals",
          "Prioritise projects based on value and feasibility",
          "Track performance after deployment",
        ],
      },
    ],
    whyPoints: [
      {
        icon: Briefcase,
        title: "Objective Analysis",
        description: "Unbiased assessments to support confident capital allocation.",
      },
      {
        icon: BarChart,
        title: "Robust Methodology",
        description: "Proven frameworks that align with global best practices.",
      },
      {
        icon: Target,
        title: "End-to-End Support",
        description: "From initial appraisal to implementation and performance review.",
      },
    ],
    faqs: [
      {
        q: "What investment metrics do you use?",
        a: "We use DCF, NPV, IRR and payback analyses, together with sensitivity and risk-adjusted modelling.",
      },
      {
        q: "Can you help with project funding decisions?",
        a: "Yes — we evaluate funding options and the expected return on capital to support better financing choices.",
      },
    ],
  },
  {
    id: "business-valuation",
    title: "Business Valuation",
    label: "Business Valuation Services",
    heading: "Understand your business value for transactions, planning and compliance.",
    description:
      "We provide realistic, defensible valuations for M&A, succession, fundraising and legal or regulatory requirements across industries.",
    cards: [
      {
        icon: FileText,
        title: "Full-Scope Valuations",
        points: [
          "M&A, exit and succession valuations",
          "Investment readiness and shareholder dispute support",
          "Objective valuations for strategic decisions",
        ],
      },
      {
        icon: Sparkles,
        title: "Startup Valuations",
        points: [
          "Pre-revenue and growth-stage models",
          "VC, DCF and market approach analysis",
          "Fundraising and investor support",
        ],
      },
      {
        icon: ShieldCheck,
        title: "Legal & Compliance",
        points: [
          "Tax planning, estate and gift tax valuations",
          "Divorce settlements and buy-sell agreements",
          "Regulatory reporting and compliance valuations",
        ],
      },
      {
        icon: Users,
        title: "Industry Insights",
        points: [
          "Sector-specific value drivers",
          "Technology, healthcare, real estate and manufacturing focus",
          "Contextual benchmarks and comparable analysis",
        ],
      },
    ],
    whyPoints: [
      {
        icon: Target,
        title: "Defensible Outcomes",
        description: "Valuations built on rigorous analysis and documented assumptions.",
      },
      {
        icon: Briefcase,
        title: "Purpose-Built Reports",
        description: "Tailored for investors, acquirers, regulators and legal stakeholders.",
      },
      {
        icon: Users,
        title: "Sector Experience",
        description: "Deep knowledge of industry dynamics and value drivers.",
      },
    ],
    faqs: [
      {
        q: "Do you value startups as well as established businesses?",
        a: "Yes. We provide valuations for both early-stage companies and mature enterprises.",
      },
      {
        q: "Can valuations support legal proceedings?",
        a: "Our valuations are designed to be defensible for disputes, compliance and reporting purposes.",
      },
    ],
  },
  {
    id: "mergers-acquisitions",
    title: "M&A & Restructuring",
    label: "Mergers, Acquisitions & Restructuring",
    heading: "Navigate transactions with confidence and disciplined execution.",
    description:
      "From buy-side advisory to post-merger integration, our team supports every stage of corporate transactions and restructuring initiatives.",
    cards: [
      {
        icon: Layers,
        title: "M&A Advisory",
        points: [
          "Buy-side and sell-side strategy",
          "Target assessment and due diligence coordination",
          "Deal structuring and negotiation support",
        ],
      },
      {
        icon: Sparkles,
        title: "Divestitures & Spin-Offs",
        points: [
          "Carve-out planning and execution",
          "Separation and transitional services",
          "Stakeholder and regulatory management",
        ],
      },
      {
        icon: ShieldCheck,
        title: "Restructuring & Turnaround",
        points: [
          "Debt refinancing and covenant restructuring",
          "Operational turnaround planning",
          "Insolvency advisory and value preservation",
        ],
      },
      {
        icon: FileText,
        title: "Post-Merger Integration",
        points: [
          "Integration planning and program management",
          "Systems, culture and operations alignment",
          "Performance tracking and KPI development",
        ],
      },
    ],
    whyPoints: [
      {
        icon: Target,
        title: "Strategic Insight",
        description: "We focus on long-term value creation and transaction outcomes.",
      },
      {
        icon: Briefcase,
        title: "Cross-Functional Execution",
        description: "We coordinate finance, legal, operational and cultural considerations.",
      },
      {
        icon: Lock,
        title: "Confidentiality",
        description: "Trusted advisory for high-stakes, sensitive transactions.",
      },
    ],
    faqs: [
      {
        q: "Can you support a business sale?",
        a: "Yes. We help prepare, value and execute sell-side transactions with care.",
      },
      {
        q: "Do you assist with restructuring during distress?",
        a: "We provide turnaround planning, refinancing advice and stakeholder communication support.",
      },
    ],
  },
  {
    id: "risk-hedging",
    title: "Risk & Hedging",
    label: "Risk Management & Hedging",
    heading: "Protect value with disciplined risk management and hedging strategies.",
    description:
      "We identify and manage financial risks across markets, currencies, commodities and credit exposures while aligning risk strategy with your goals.",
    cards: [
      {
        icon: ShieldCheck,
        title: "Enterprise Risk",
        points: [
          "Risk identification and governance frameworks",
          "Compliance and regulatory risk assessment",
          "Reporting and oversight structures",
        ],
      },
      {
        icon: Lock,
        title: "Financial Risk",
        points: [
          "Interest rate, FX and commodity exposure analysis",
          "Credit and counterparty risk management",
          "Liquidity and cash flow risk assessment",
        ],
      },
      {
        icon: BarChart,
        title: "Hedging Strategies",
        points: [
          "Forwards, futures, options and swaps",
          "Natural hedging and cost-benefit analysis",
          "Hedge accounting and compliance support",
        ],
      },
      {
        icon: Sparkles,
        title: "Scenario Planning",
        points: [
          "Stress testing and contingency planning",
          "Liquidity and operational risk modelling",
          "Risk-adjusted decision support",
        ],
      },
    ],
    whyPoints: [
      {
        icon: Target,
        title: "Resilience",
        description: "Strategies that protect cash flow and preserve value in volatility.",
      },
      {
        icon: ShieldCheck,
        title: "Compliance",
        description: "Support for hedge accounting and governance requirements.",
      },
      {
        icon: Users,
        title: "Clear Reporting",
        description: "Actionable risk insights for management and boards.",
      },
    ],
    faqs: [
      {
        q: "What hedging instruments do you use?",
        a: "We work with forwards, futures, options, swaps and natural hedging approaches.",
      },
      {
        q: "Can you help with hedge accounting?",
        a: "Yes. We support the documentation and compliance requirements for hedge accounting frameworks.",
      },
    ],
  },
  {
    id: "modelling-treasury",
    title: "Modelling & Treasury",
    label: "Modelling, Forecasting & Treasury",
    heading: "Turn data into decisions with high-quality models and cash management.",
    description:
      "We deliver financial models, forecasts and treasury insights that provide clarity, support strategy, and improve liquidity management.",
    cards: [
      {
        icon: Calculator,
        title: "Financial Modelling",
        points: [
          "3-statement financial models and forecasts",
          "Scenario, sensitivity and valuation modelling",
          "Scalable models built for finance teams and investors",
        ],
      },
      {
        icon: FileText,
        title: "Forecasting & Budgeting",
        points: [
          "Rolling forecasts and variance analysis",
          "Revenue, cost and cash driver modelling",
          "Integrated planning tools for decision-makers",
        ],
      },
      {
        icon: MapPin,
        title: "Treasury Management",
        points: [
          "Cash flow forecasting and liquidity planning",
          "Bank account structuring and payment optimization",
          "FX exposure and working capital strategy",
        ],
      },
      {
        icon: Layers,
        title: "Model Review",
        points: [
          "Model integrity audits and logic checks",
          "Usability and transparency improvements",
          "Optimization for better decision support",
        ],
      },
    ],
    whyPoints: [
      {
        icon: Briefcase,
        title: "Clarity",
        description: "Models and forecasts that make complex decisions easier.",
      },
      {
        icon: Target,
        title: "Accuracy",
        description: "Rigorous validation and scenario testing for greater confidence.",
      },
      {
        icon: Sparkles,
        title: "Liquidity Focus",
        description: "Treasury planning that strengthens cash oversight and control.",
      },
    ],
    faqs: [
      {
        q: "Do you build custom financial models?",
        a: "Yes. We build bespoke models that reflect your business drivers and decision needs.",
      },
      {
        q: "Can you improve our existing models?",
        a: "We review, audit and optimize models to improve accuracy and usability.",
      },
    ],
  },
  {
    id: "governance-training-cfo",
    title: "Governance & CFO",
    label: "Governance, Training & CFO",
    heading: "Strengthen finance leadership, governance and SME capability.",
    description:
      "From governance structures and board advisory to financial literacy and interim CFO support, we help businesses build stronger financial leadership.",
    cards: [
      {
        icon: Target,
        title: "Governance Advisory",
        points: [
          "Board and governance framework reviews",
          "Risk oversight and compliance policies",
          "Investor and stakeholder communication support",
        ],
      },
      {
        icon: Users,
        title: "Financial Literacy",
        points: [
          "SME training for business owners and teams",
          "Accounting, budgeting and cash flow fundamentals",
          "Practical workshops with real-world examples",
        ],
      },
      {
        icon: Briefcase,
        title: "Freelance CFO Services",
        points: [
          "Interim or part-time CFO and finance director support",
          "Fundraising readiness and investor reporting",
          "Performance management and financial operations",
        ],
      },
      {
        icon: Lock,
        title: "Policy & Compliance",
        points: [
          "Internal control and compliance assessments",
          "Audit committee support and SOX readiness",
          "Governance policy development and documentation",
        ],
      },
    ],
    whyPoints: [
      {
        icon: Users,
        title: "Boardroom Experience",
        description: "Advisory informed by real governance and executive leadership work.",
      },
      {
        icon: Sparkles,
        title: "Practical Training",
        description: "Training that equips SMEs with usable financial skills.",
      },
      {
        icon: Briefcase,
        title: "Flexible Leadership",
        description: "Interim CFO support when you need it most.",
      },
    ],
    faqs: [
      {
        q: "Can you provide part-time CFO services?",
        a: "Yes. We offer flexible CFO and finance director support for growth and transition periods.",
      },
      {
        q: "Do you train non-finance teams?",
        a: "Absolutely. Our financial literacy programs are tailored for business owners and operational teams.",
      },
    ],
  },
]

const bottomWhy = [
  {
    title: "Strategic Financial Leadership",
    description: "Advisory that supports growth, transactions and governance with clarity.",
  },
  {
    title: "Robust Decision Support",
    description: "Models, valuations and risk analysis built for real-world execution.",
  },
  {
    title: "Fractional CFO Flexibility",
    description: "Senior finance expertise available on-demand to suit your business needs.",
  },
]

type ServiceDetailProps = {
  serviceId?: string
}

export default function CorporateFinancialServicesDetail({ serviceId }: ServiceDetailProps) {
  const sections = useMemo(() => tabSections, [])

  return (
    <div className="bg-[#F8F9FA] text-[#0D1B2E]">
      <section className="bg-[#0D1B2E] text-white">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-20">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.24em] text-[#BFCADE]">Services <span className="mx-2">›</span> Corporate Financial Services</p>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Corporate Financial Services</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#D1DCE7]">
              Strategic advice, valuation, transaction support, risk management and financial leadership to help your organisation make confident long-term decisions.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:gap-4">
              <Button
                size="lg"
                asChild
                className="rounded-[6px] bg-[#F5C518] px-6 py-4 font-semibold text-[#0D1B2E] shadow-sm shadow-[#0D1B2E]/10 hover:bg-[#e3b616]"
              >
                <Link href={`/contact?service=${serviceId || "cfo-services"}`}>
                  Schedule a Consultation
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
                    <h3 className="mt-4 text-3xl font-semibold">Practical finance advice you can act on.</h3>
                    <p className="mt-4 text-base leading-7 text-[#D1DCE7]">
                      We combine deep technical knowledge with a pragmatic focus on implementation, helping you move from strategy to results.
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
                      <h3 className="text-2xl font-semibold">Ready to shape your financial future?</h3>
                      <p className="mt-3 max-w-2xl text-base leading-7 text-[#21334A]">
                        Partner with our advisory team for strategic financial planning, valuation, risk management and executive finance leadership.
                      </p>
                    </div>
                    <div>
                      <Button
                        size="lg"
                        asChild
                        className="rounded-[6px] bg-[#0D1B2E] px-6 py-4 font-semibold text-white shadow-sm shadow-[#0D1B2E]/20 hover:bg-[#0b1727]"
                      >
                        <Link href={`/contact?service=${serviceId || "cfo-services"}`}>
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
            <p className="text-sm uppercase tracking-[0.24em] text-[#6B7280]">Comprehensive Corporate Finance</p>
            <h2 className="mt-4 text-3xl font-bold text-[#0D1B2E] sm:text-4xl">Financial support across advisory, transactions and operations</h2>
            <p className="mt-4 text-base leading-7 text-[#6B7280]">
              We deliver the advisory, modelling, transaction support and governance needed for confident decision-making and sustainable value creation.
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
