"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import FAQAccordion from "./faq-accordion"
import {
  BarChart,
  BookOpen,
  Briefcase,
  CalendarCheck,
  CheckCircle,
  Globe,
  Layers,
  Lock,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react"

const tabSections = [
  {
    id: "financial-literacy",
    title: "SME Financial Literacy",
    label: "Training & Financial Literacy for SMEs",
    heading: "Empowering business owners with practical financial confidence.",
    description:
      "Our financial literacy training helps entrepreneurs and teams understand financial statements, budgeting, forecasting and tax principles in plain language.",
    cards: [
      {
        icon: BookOpen,
        title: "Financial Fundamentals",
        points: [
          "Read and interpret income statements, balance sheets and cash flow reports.",
          "Understand key financial ratios and cash flow management.",
          "Use budgeting and cost control techniques for day-to-day decisions.",
        ],
      },
      {
        icon: Layers,
        title: "Practical Accounting for Non-Finance Staff",
        points: [
          "Learn bookkeeping essentials and common accounting concepts.",
          "Understand how to work with accountants and financial software.",
          "Gain clarity on tax basics and compliance requirements.",
        ],
      },
      {
        icon: BarChart,
        title: "Planning & Forecasting",
        points: [
          "Turn strategic goals into practical business plans and forecasts.",
          "Build sales, cost and profit projections with confidence.",
          "Use break-even analysis and funding readiness tools effectively.",
        ],
      },
      {
        icon: Globe,
        title: "Customized Workshops",
        points: [
          "Tailor sessions to your industry, team and growth stage.",
          "Deliver interactive exercises, case studies and follow-up resources.",
          "Provide coaching for founder teams, managers and finance staff.",
        ],
      },
    ],
    whyPoints: [
      {
        icon: Target,
        title: "Practical Learning",
        description: "We simplify finance concepts so teams can make better decisions without jargon.",
      },
      {
        icon: Users,
        title: "SME Focused",
        description: "Training built around the realities of small businesses and growing companies.",
      },
      {
        icon: ShieldCheck,
        title: "Actionable Skills",
        description: "Participants leave with tools, templates and confidence to apply immediately.",
      },
    ],
    faqs: [
      {
        q: "Who should attend this training?",
        a: "SME owners, startup teams, non-finance managers and admin staff who need to understand business finances.",
      },
      {
        q: "Can you tailor the sessions for our industry?",
        a: "Yes. We customise workshops and case studies to reflect your business and sector.",
      },
    ],
  },
  {
    id: "capacity-building",
    title: "Capacity Building",
    label: "Training & Capacity Building",
    heading: "Strengthen governance, controls and audit capability across your organization.",
    description:
      "Our capacity building programs equip teams with internal audit, fraud prevention, governance and audit committee skills that support strong control environments.",
    cards: [
      {
        icon: ShieldCheck,
        title: "Risk-Based Internal Auditing",
        points: [
          "Develop risk-focused audit plans and procedures.",
          "Conduct effective audits aligned to business risk.",
          "Use practical case studies to build auditor confidence.",
        ],
      },
      {
        icon: Lock,
        title: "Internal Controls & Fraud Prevention",
        points: [
          "Design and assess controls using COSO principles.",
          "Identify common fraud schemes and red flags.",
          "Build monitoring and reporting tools for control owners.",
        ],
      },
      {
        icon: Briefcase,
        title: "Governance & Ethical Leadership",
        points: [
          "Clarify leadership roles in governance and culture.",
          "Strengthen tone at the top and stakeholder transparency.",
          "Use real-world dilemmas for practical boardroom learning.",
        ],
      },
      {
        icon: Globe,
        title: "Audit Committee Responsibilities",
        points: [
          "Define oversight expectations for audit committees.",
          "Improve engagement with external auditors.",
          "Monitor risk, compliance and internal audit performance.",
        ],
      },
    ],
    whyPoints: [
      {
        icon: Sparkles,
        title: "Stronger Controls",
        description: "Teams learn how to design and maintain governance and fraud prevention frameworks.",
      },
      {
        icon: BarChart,
        title: "Better Oversight",
        description: "Audit committees and leaders gain clarity on risk management and reporting.",
      },
      {
        icon: Users,
        title: "Team Confidence",
        description: "Practical capacity building helps your people execute with greater assurance.",
      },
    ],
    faqs: [
      {
        q: "Can you train internal audit teams?",
        a: "Yes. We deliver workshops that focus on risk-based audit planning, controls testing and reporting.",
      },
      {
        q: "Do you support audit committee members?",
        a: "We provide targeted training on oversight roles, governance responsibilities and external audit engagement.",
      },
    ],
  },
  {
    id: "software-training",
    title: "Software Training",
    label: "Accounting Software Training",
    heading: "Master accounting systems with hands-on training for modern software tools.",
    description:
      "Learn how to use popular accounting platforms efficiently with training tailored to business users, finance teams and software implementers.",
    cards: [
      {
        icon: Sparkles,
        title: "QuickBooks Training",
        points: [
          "Manage invoices, expenses and reporting in QuickBooks.",
          "Use automation and bank feeds for simpler bookkeeping.",
          "Get practical tips for growing businesses.",
        ],
      },
      {
        icon: Globe,
        title: "Xero Training",
        points: [
          "Master cloud accounting workflows and bank reconciliation.",
          "Generate real-time financial reports and dashboards.",
          "Learn collaboration tools for accountants and clients.",
        ],
      },
      {
        icon: ShieldCheck,
        title: "Sage Training",
        points: [
          "Streamline payroll, budgeting and inventory processes.",
          "Configure tax and compliance settings for South Africa.",
          "Improve data accuracy and reporting quality.",
        ],
      },
      {
        icon: CalendarCheck,
        title: "Zoho Books Training",
        points: [
          "Automate invoicing, expenses and project accounting.",
          "Use integrations to sync business tools and workflows.",
          "Create customised reports and dashboards for management.",
        ],
      },
    ],
    whyPoints: [
      {
        icon: BookOpen,
        title: "Expert Instruction",
        description: "Learn from certified software professionals with real-world accounting experience.",
      },
      {
        icon: Target,
        title: "Hands-On Learning",
        description: "Practical sessions use real examples to build confidence with software tools.",
      },
      {
        icon: Globe,
        title: "Flexible Delivery",
        description: "Choose in-person, virtual or hybrid training to suit your team and schedule.",
      },
    ],
    faqs: [
      {
        q: "Do you train both beginners and advanced users?",
        a: "Yes. Our courses are structured for beginners, intermediate users and advanced finance teams.",
      },
      {
        q: "Can you tailor training for our software setup?",
        a: "We customise sessions to your current systems, business workflows and reporting needs.",
      },
    ],
  },
]

const bottomWhy = [
  {
    title: "Practical Outcomes",
    description: "Teams gain useful skills they can apply immediately in their business operations.",
  },
  {
    title: "Better Financial Confidence",
    description: "Training helps leaders and staff make more informed financial decisions.",
  },
  {
    title: "Strong Organizational Capability",
    description: "Build internal skills that support governance, controls and financial performance.",
  },
]

type ServiceDetailProps = {
  serviceId?: string
}

export default function TrainingDetail({ serviceId }: ServiceDetailProps) {
  return (
    <div className="bg-[#F8F9FA] text-[#0F172A]">
      <section className="bg-[#0F172A] text-white">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-20">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.24em] text-[#94A3B8]">Services <span className="mx-2">›</span> Training & Development</p>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Training & Development</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#CBD5E1]">
              Practical financial training, capacity building, and accounting software workshops to help your team gain confidence, improve controls, and use modern systems effectively.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:gap-4">
              <Button
                size="lg"
                asChild
                className="rounded-[6px] bg-[#F5C518] px-6 py-4 font-semibold text-[#0F172A] shadow-sm shadow-[#0F172A]/10 hover:bg-[#e3b616]"
              >
                <Link href={`/contact?service=${serviceId || "training"}`}>
                  Book Training
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
                    <h3 className="mt-4 text-3xl font-semibold">Training that equips your team and strengthens your organization.</h3>
                    <p className="mt-4 text-base leading-7 text-[#CBD5E1]">
                      Our workshops and capacity building programs combine technical knowledge with real-world application so your people leave ready to improve financial performance and governance.
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
                      <h3 className="text-2xl font-semibold">Ready to build your team’s financial and governance skills?</h3>
                      <p className="mt-3 max-w-2xl text-base leading-7 text-[#21334A]">
                        Book a bespoke training session or workshop to upskill your people and improve financial confidence across your organisation.
                      </p>
                    </div>
                    <div>
                      <Button
                        size="lg"
                        asChild
                        className="rounded-[6px] bg-[#0F172A] px-6 py-4 font-semibold text-white shadow-sm shadow-[#0F172A]/20 hover:bg-[#111827]"
                      >
                        <Link href={`/contact?service=${serviceId || "training"}`}>
                          Book Training
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
            <p className="text-sm uppercase tracking-[0.24em] text-[#64748B]">Training Designed for Real Business Impact</p>
            <h2 className="mt-4 text-3xl font-bold text-[#0F172A] sm:text-4xl">Build skills, confidence and sustainable financial capability.</h2>
            <p className="mt-4 text-base leading-7 text-[#475569]">
              From SME financial literacy to audit committee training and software mastery, our programs are designed to strengthen your people and support long-term success.
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
