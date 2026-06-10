import { Calculator, LineChart, Monitor, Briefcase, CheckCircle, GraduationCap } from "lucide-react"

export const services = [
  {
    id: "tax-consulting",
    title: "Tax Consulting",
    description:
      "Navigate the complex world of tax regulations with expert guidance. We provide strategic tax advice to help you minimize liabilities and ensure compliance with ever-changing tax laws. Our consulting services focus on proactive tax planning and risk management.",
    icon: Calculator,
    features: [
      "Tax planning and strategy development",
      "Tax compliance and regulatory guidance",
      "Tax dispute resolution and representation",
      "International tax advisory services",
      "Tax risk assessment and management",
      "Strategic tax optimization for businesses",
    ],
  },
  {
    id: "tax-services",
    title: "Tax Services",
    description:
      "Corporate, provisional, dividend, payroll and cross-border tax services tailored for South African businesses and international taxpayers.",
    icon: LineChart,
    features: [
      "Corporate tax compliance and filing",
      "Provisional tax and dividend tax advisory",
      "VAT, PAYE, UIF and SDL support",
      "SARS audit support and dispute resolution",
      "Cross-border tax planning and DTA relief",
      "Offshore trust, CFC and expatriate tax guidance",
    ],
  },
  {
    id: "accounting-software",
    title: "Accounting Software Solutions",
    description:
      "Optimize your financial management with the right accounting software. We help you select, implement, and master accounting tools that fit your business needs. From setup to training, we ensure you get the most out of your investment.",
    icon: Monitor,
    features: [
      "Software selection and implementation",
      "Training and support for accounting software",
      "Integration with existing systems",
      "Ongoing technical support and troubleshooting",
      "Data migration and setup",
      "Custom reporting and dashboard configuration",
    ],
  },
  {
    id: "cfo-services",
    title: "Corporate Financial Services",
    description:
      "Strategic financial advisory, investment appraisal, valuations, transaction support, risk management and treasury services for growing businesses.",
    icon: Briefcase,
    features: [
      "Strategic financial advisory and capital structure planning",
      "Investment appraisal, valuation and capital budgeting",
      "M&A, restructuring and transaction support",
      "Risk management, hedging and treasury planning",
      "Financial modelling, forecasting and cash flow optimisation",
      "Interim CFO, governance and SME training services",
    ],
  },
  {
    id: "audit-assurance",
    title: "Audit & Assurance",
    description:
      "Independent internal audit, risk, governance, forensic and assurance services designed to protect your organisation and improve performance.",
    icon: CheckCircle,
    features: [
      "Internal audit & control reviews",
      "Risk management and corporate governance advisory",
      "Non-financial assurance and cyber controls",
      "Forensic accounting and fraud risk assessments",
      "Audit readiness, review engagements, and quality assurance",
      "Training, ethics and compliance capability building",
    ],
  },
  {
    id: "payroll-services",
    title: "Payroll Services",
    description:
      "Reliable monthly payroll processing, SARS tax filing, payslip delivery, reconciliation and payroll system setup to keep your staff paid and compliant.",
    icon: Calculator,
    features: [
      "Monthly payroll processing and salary calculations",
      "Payslip generation and secure distribution",
      "EMP201 and EMP501 filing support",
      "PAYE, UIF, SDL and tax compliance",
      "Leave tracking and benefit deductions",
      "Payroll system implementation and setup",
    ],
  },
  {
    id: "cloud-accounting",
    title: "Cloud Accounting",
    description:
      "Modern cloud-based accounting solutions that provide real-time financial insights and accessibility from anywhere. Transform your financial management with cutting-edge technology that scales with your business.",
    icon: Monitor,
    features: [
      "Annual financial statements preparation and review",
      "IFRS implementation and reporting support",
      "Independent financial statement review services",
      "Monthly bookkeeping, reconciliation and reporting",
      "Integrated payroll compliance and payslip support",
      "Cloud accounting system setup and training",
    ],
  },
  {
    id: "training",
    title: "Training & Development",
    description:
      "Practical financial literacy, capacity building, and accounting software training designed for SMEs, finance teams, and governance professionals.",
    icon: GraduationCap,
    features: [
      "SME financial literacy and business planning workshops",
      "Risk-based internal audit and governance training",
      "Accounting software onboarding and hands-on training",
      "Audit committee and leadership capability building",
      "Customized workshops with industry-specific case studies",
      "Ongoing support, refresher sessions and learning resources",
    ],
  },
  {
    id: "accounting-reviews-training",
    title: "Accounting Software Reviews & Training",
    description:
      "Find the right accounting software for your business, get expert reviews, and receive hands-on training to ensure your team uses it effectively.",
    icon: Monitor,
    features: [
      "Software comparison and review",
      "Implementation guidance and setup",
      "User onboarding and training",
      "Custom reporting and dashboard setup",
      "Integration with existing systems",
      "Ongoing support and optimization",
    ],
  },
]

function slugify(text: string) {
  return text
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9\-]/g, "")
}

export function getServiceById(id: string) {
  if (!id) return undefined
  const raw = String(id)
  const decoded = decodeURIComponent(raw)
  const norm = raw.toLowerCase()

  // Exact id match
  let found = services.find((s) => s.id === raw || s.id === decoded)
  if (found) return found

  // Try matching by normalized id
  found = services.find((s) => s.id.toLowerCase() === norm)
  if (found) return found

  // Try slugifying the title
  found = services.find((s) => slugify(s.title) === slugify(raw) || slugify(s.title) === slugify(decoded))
  if (found) return found

  return undefined
}

export default services
