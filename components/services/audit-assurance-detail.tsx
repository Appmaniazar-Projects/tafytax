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
    id: "internal-audit-controls",
    title: "Internal Audit & Controls",
    label: "Internal Audit & Control Reviews",
    heading: "Strengthen controls, detect risk, and improve performance.",
    description:
      "We provide objective internal audit and control reviews that identify risks, improve operational efficiency, and support better decision-making.",
    cards: [
      {
        icon: FileText,
        title: "Comprehensive Internal Audits",
        points: [
          "Independent audits tailored to your business model",
          "Detailed reviews of operational and financial processes",
          "Actionable findings and improvement plans",
        ],
      },
      {
        icon: ShieldCheck,
        title: "Control Effectiveness Reviews",
        points: [
          "Evaluate design and operation of internal controls",
          "Review compliance with COSO and internal frameworks",
          "Identify control gaps and remediation opportunities",
        ],
      },
      {
        icon: Target,
        title: "Risk Identification & Process Evaluation",
        points: [
          "Assess process risks and control breakdowns",
          "Spot fraud vulnerabilities and compliance exposures",
          "Provide practical, risk-based recommendations",
        ],
      },
      {
        icon: CalendarCheck,
        title: "Audit Program Development",
        points: [
          "Design risk-based internal audit plans",
          "Create policies, procedures, and templates",
          "Train internal audit staff and monitor progress",
        ],
      },
    ],
    whyPoints: [
      {
        icon: ShieldCheck,
        title: "Independent Insight",
        description: "Objective evaluations that protect your stakeholders and improve confidence.",
      },
      {
        icon: Target,
        title: "Operational Improvement",
        description: "We translate findings into practical actions that reduce waste and strengthen controls.",
      },
      {
        icon: Users,
        title: "Governance Support",
        description: "Our reviews align with board, audit committee and regulatory expectations.",
      },
    ],
    faqs: [
      {
        q: "What is the difference between an internal audit and a control review?",
        a: "Internal audits assess risk and process performance, while control reviews focus on the design and operation of specific controls.",
      },
      {
        q: "Do you help build internal audit programs?",
        a: "Yes. We assist with planning, manual development, templates and team capability-building.",
      },
    ],
  },
  {
    id: "risk-governance",
    title: "Risk & Governance",
    label: "Risk Management & Governance",
    heading: "Build resilience with strong risk frameworks and governance practices.",
    description:
      "We help organizations design risk management, governance and ethics programs that support accountability, compliance and sustainable growth.",
    cards: [
      {
        icon: Lock,
        title: "Risk Framework Design",
        points: [
          "Develop ERM frameworks aligned to ISO 31000 and COSO",
          "Create risk registers and mitigation plans",
          "Implement early warning systems and dashboards",
        ],
      },
      {
        icon: Briefcase,
        title: "Corporate Governance Advisory",
        points: [
          "Review governance structures and board effectiveness",
          "Support audit, risk and remuneration committees",
          "Strengthen SME and family business governance",
        ],
      },
      {
        icon: Globe,
        title: "Ethics & Tone at the Top",
        points: [
          "Assess leadership culture and ethical risks",
          "Review codes of conduct and whistleblower programs",
          "Promote accountability across the organisation",
        ],
      },
      {
        icon: MapPin,
        title: "Compliance System Design",
        points: [
          "Develop compliance frameworks and monitoring tools",
          "Create reporting protocols for regulators and stakeholders",
          "Align ethics, governance and risk processes",
        ],
      },
    ],
    whyPoints: [
      {
        icon: Target,
        title: "Stronger Oversight",
        description: "Governance and risk frameworks that improve leadership decision-making.",
      },
      {
        icon: ShieldCheck,
        title: "Ethical Culture",
        description: "We help embed the right tone and accountability from the top down.",
      },
      {
        icon: Layers,
        title: "Regulatory Readiness",
        description: "Frameworks designed for compliance, reporting and stakeholder trust.",
      },
    ],
    faqs: [
      {
        q: "Can you support family business governance?",
        a: "Yes. We tailor governance models for family-owned and privately held businesses.",
      },
      {
        q: "What is a risk register?",
        a: "It is a documented log of identified risks, their impact, likelihood and assigned mitigation actions.",
      },
    ],
  },
  {
    id: "assurance-services",
    title: "Assurance Services",
    label: "Non-Financial & Assurance Services",
    heading: "Demonstrate transparency with trusted assurance over your data and controls.",
    description:
      "Our assurance services cover ESG reporting, KPI validation, cybersecurity controls and third-party readiness to help you meet stakeholder expectations.",
    cards: [
      {
        icon: Sparkles,
        title: "ESG & Sustainability Assurance",
        points: [
          "Validate sustainability disclosures and metrics",
          "Review climate, social and governance reporting",
          "Support assurance statements for stakeholder communications",
        ],
      },
      {
        icon: FileText,
        title: "KPI & Analytics Review",
        points: [
          "Confirm accuracy of management dashboards",
          "Assess internal performance reporting processes",
          "Ensure non-financial metrics are reliable and consistent",
        ],
      },
      {
        icon: Lock,
        title: "Cybersecurity & IT Controls",
        points: [
          "Review IT general controls and cybersecurity practices",
          "Assess access, change management and data protection",
          "Align controls with NIST, ISO 27001 or industry standards",
        ],
      },
      {
        icon: Globe,
        title: "Third-Party Assurance Preparation",
        points: [
          "Prepare documentation for external reviewers",
          "Support audits of suppliers, partners and service providers",
          "Provide gap analysis and remediation support",
        ],
      },
    ],
    whyPoints: [
      {
        icon: ShieldCheck,
        title: "Trustworthy Reporting",
        description: "We help ensure that your non-financial disclosures are credible and defensible.",
      },
      {
        icon: Target,
        title: "Improved Data Quality",
        description: "Reliable metrics and controls support better internal and external decision-making.",
      },
      {
        icon: Users,
        title: "Stakeholder Confidence",
        description: "Assurance over non-financial information strengthens reputation with investors and regulators.",
      },
    ],
    faqs: [
      {
        q: "Do you provide ESG assurance?",
        a: "Yes. We review your sustainability disclosures and support assurance aligned to established reporting standards.",
      },
      {
        q: "What does cybersecurity assurance cover?",
        a: "It includes evaluation of IT controls, access management and incident readiness practices.",
      },
    ],
  },
  {
    id: "forensic-audit-readiness",
    title: "Forensic & Audit Readiness",
    label: "Forensic, Fraud & Audit Readiness",
    heading: "Prepare for audits and investigate risk with confidence.",
    description:
      "We offer forensic accounting, fraud risk assessments, audit readiness support and quality assurance services so you stay prepared and protected.",
    cards: [
      {
        icon: ShieldCheck,
        title: "Forensic Accounting",
        points: [
          "Investigate suspected fraud and financial irregularities",
          "Provide defensible analysis for disputes and litigation",
          "Trace complex transaction records and asset movements",
        ],
      },
      {
        icon: Lock,
        title: "Fraud Risk Assessments",
        points: [
          "Identify fraud exposures across people, processes and systems",
          "Design prevention controls and whistleblower channels",
          "Build awareness through training and monitoring",
        ],
      },
      {
        icon: CheckCircle,
        title: "Audit Readiness Support",
        points: [
          "Prepare first-time and recurring audit clients",
          "Organize documentation, reconciliations and walkthroughs",
          "Run mock audits and pre-audit reviews",
        ],
      },
      {
        icon: Users,
        title: "Training & Capacity Building",
        points: [
          "Deliver audit, risk and governance training",
          "Equip teams with control and fraud prevention skills",
          "Coach audit committees and leadership teams",
        ],
      },
    ],
    whyPoints: [
      {
        icon: ShieldCheck,
        title: "Preparedness",
        description: "We help you enter audits with confidence and fewer surprises.",
      },
      {
        icon: Lock,
        title: "Fraud Protection",
        description: "Proactive assessments reduce the risk of financial loss and reputation damage.",
      },
      {
        icon: Briefcase,
        title: "Quality Assurance",
        description: "Independent reviews improve process quality and reporting reliability.",
      },
    ],
    faqs: [
      {
        q: "Can you support a first-time audit?",
        a: "Yes. We help clients understand audit requirements, prepare documentation and run mock walkthroughs.",
      },
      {
        q: "Do you offer fraud awareness training?",
        a: "We provide role-based training to help staff recognize and report fraud risks.",
      },
    ],
  },
]

const bottomWhy = [
  {
    title: "Independent Assurance",
    description: "Objective evaluations that protect stakeholders and build credibility.",
  },
  {
    title: "Risk-Focused Advice",
    description: "Insightful guidance across controls, governance and fraud prevention.",
  },
  {
    title: "Audit Readiness",
    description: "Prepare your business for audits, reviews and assurance engagements with confidence.",
  },
]

type ServiceDetailProps = {
  serviceId?: string
}

export default function AuditAssuranceDetail({ serviceId }: ServiceDetailProps) {
  const sections = useMemo(() => tabSections, [])

  return (
    <div className="bg-[#F8F9FA] text-[#0D1B2E]">
      <section className="bg-[#0D1B2E] text-white">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-20">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.24em] text-[#BFCADE]">Services <span className="mx-2">›</span> Audit & Assurance</p>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Audit & Assurance Services</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#D1DCE7]">
              Independent internal audit, risk, governance, and assurance services that help businesses control risk, improve performance, and stay audit-ready.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:gap-4">
              <Button
                size="lg"
                asChild
                className="rounded-[6px] bg-[#F5C518] px-6 py-4 font-semibold text-[#0D1B2E] shadow-sm shadow-[#0D1B2E]/10 hover:bg-[#e3b616]"
              >
                <Link href={`/contact?service=${serviceId || "audit-assurance"}`}>
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
                    <h3 className="mt-4 text-3xl font-semibold">Trusted assurance and risk expertise.</h3>
                    <p className="mt-4 text-base leading-7 text-[#D1DCE7]">
                      We bring deep assurance experience, practical recommendations, and a compliance-first mindset so your business can operate with confidence.
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
                      <h3 className="text-2xl font-semibold">Ready for stronger controls and assurance?</h3>
                      <p className="mt-3 max-w-2xl text-base leading-7 text-[#21334A]">
                        Schedule a consultation and let us help you build reliable internal controls, manage risk, and prepare for audits with greater confidence.
                      </p>
                    </div>
                    <div>
                      <Button
                        size="lg"
                        asChild
                        className="rounded-[6px] bg-[#0D1B2E] px-6 py-4 font-semibold text-white shadow-sm shadow-[#0D1B2E]/20 hover:bg-[#0b1727]"
                      >
                        <Link href={`/contact?service=${serviceId || "audit-assurance"}`}>
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
            <p className="text-sm uppercase tracking-[0.24em] text-[#6B7280]">Complete Assurance Coverage</p>
            <h2 className="mt-4 text-3xl font-bold text-[#0D1B2E] sm:text-4xl">A full suite of audit and assurance services</h2>
            <p className="mt-4 text-base leading-7 text-[#6B7280]">
              From internal audit and risk consulting to non-financial assurance, forensic accounting and audit readiness, we help you manage risk and improve trust.
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
