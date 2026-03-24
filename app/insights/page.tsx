import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Check, X } from "lucide-react"
import { FloatingCircles, DotsPattern, TrianglePattern, WavePattern } from "@/components/ui/shapes"

export const metadata: Metadata = {
  title: "Software Reviews | Tafy Tax Consultants",
  description: "Expert reviews of accounting software including FreshBooks, OnePay, Bean Counter, Quaderno, and Sage Cloud Accounting to help you find the right tool for your business.",
}

const softwareReviews = [
  {
    name: "FreshBooks",
    category: "Invoicing & Time Tracking",
    description: "A cloud-based accounting software known for its simplicity and user-friendly interface, making it an excellent choice for freelancers, small businesses, and service-based professionals.",
    bestFor: "Freelancers, small business owners, and service-based professionals who prioritize simplicity and invoicing efficiency.",
    keyFeatures: [
      "Professional, customizable invoices with recurring billing",
      "Expense tracking with automatic categorization",
      "Built-in time-tracking for billable hours",
      "Project management and collaboration",
      "Financial reporting and tax summaries",
      "Mobile app for on-the-go management",
    ],
    pros: [
      "Highly intuitive and easy-to-use interface",
      "Strong invoicing and payment collection features",
      "Integrated time tracking and project management",
      "Excellent customer support and resources",
    ],
    cons: [
      "Limited advanced accounting features",
      "Pricing increases as clients are added",
      "Inventory management is not built-in",
    ],
    featured: true,
  },
  {
    name: "Sage Cloud Accounting",
    category: "Small & Medium Business",
    description: "A powerful cloud-based accounting software designed to help small and medium-sized businesses streamline their financial management processes with robust features and flexibility.",
    bestFor: "Small and medium-sized businesses looking for a scalable, cloud-based solution with remote access capabilities.",
    keyFeatures: [
      "User-friendly dashboard with cash flow overview",
      "Professional invoicing with payment gateway integration",
      "Bank integration and automatic reconciliation",
      "Real-time collaboration for remote teams",
      "Automatic tax calculations and reporting",
      "Comprehensive financial analytics",
    ],
    pros: [
      "Accessible from any device with internet",
      "Automatic compliance updates",
      "Scalable plans for growing businesses",
      "Comprehensive customer support",
    ],
    cons: [
      "Some advanced features require additional fees",
      "Third-party integrations could be more extensive",
    ],
  },
  {
    name: "OnePay",
    category: "Accounting & Payments",
    description: "An innovative accounting and payment processing software that combines accounting features with integrated payment solutions for an all-in-one platform.",
    bestFor: "Small and medium-sized businesses looking for integrated accounting and payment processing in a single platform.",
    keyFeatures: [
      "Built-in payment processing for cards and transfers",
      "Customizable invoicing with recurring billing",
      "Real-time expense tracking and management",
      "Automatic bank reconciliation",
      "Multi-currency and tax management",
      "Role-based access and permissions",
    ],
    pros: [
      "Integrated payment processing",
      "Customizable invoices and recurring billing",
      "Automated bank reconciliation",
      "Multi-currency support with tax calculations",
    ],
    cons: [
      "Advanced accounting features may be limited",
      "Transaction fees may add to costs",
    ],
  },
  {
    name: "Quaderno",
    category: "Tax Compliance & Invoicing",
    description: "A cloud-based accounting and tax compliance software designed to simplify invoicing, tax calculation, and reporting for businesses operating in global markets.",
    bestFor: "E-commerce businesses, digital content creators, and SaaS companies that operate globally and need automated tax compliance.",
    keyFeatures: [
      "Automatic tax calculations for VAT, GST, and sales tax",
      "Professional, tax-compliant invoices",
      "Multi-currency support for international customers",
      "Comprehensive tax reporting and filing",
      "Integration with Stripe, PayPal, and Square",
      "Compliance alerts for tax thresholds",
    ],
    pros: [
      "Automatic real-time tax calculations",
      "Seamless payment processor integrations",
      "Multi-currency support",
      "Intuitive interface with easy tax reporting",
    ],
    cons: [
      "Limited general accounting features",
      "Higher pricing for large transaction volumes",
    ],
  },
  {
    name: "Bean Counter",
    category: "Basic Bookkeeping",
    description: "An accounting software solution designed for freelancers, small businesses, and self-employed professionals seeking a simple and affordable way to manage their finances.",
    bestFor: "Freelancers, solo entrepreneurs, and small business owners who need a straightforward and cost-effective accounting tool.",
    keyFeatures: [
      "Intuitive basic bookkeeping tools",
      "Professional invoicing with payment tracking",
      "Manual expense entry with categorization",
      "Bank account reconciliation",
      "Basic profit and loss statements",
      "Multi-currency support for global transactions",
    ],
    pros: [
      "Easy to use with minimal learning curve",
      "Affordable pricing for small businesses",
      "Simplified essential accounting features",
      "Multi-currency support",
    ],
    cons: [
      "Limited advanced accounting features",
      "Few third-party integrations",
      "Basic reporting capabilities",
    ],
  },
{
  name: "Professional Taxation Services",
  category: "Tax Advisory & Compliance",
  description: "Comprehensive taxation services for individuals and businesses designed to ensure compliance, minimize liabilities, and provide strategic tax guidance throughout the year.",
  
  bestFor: "Individuals, freelancers, small businesses, and corporations that need professional tax preparation, planning, and compliance support.",

  keyFeatures: [
    "Accurate tax preparation and filing for individuals and businesses",
    "Customized tax planning strategies to minimize liabilities",
    "Guidance on VAT/GST compliance and regulatory requirements",
    "Assistance with tax audits and disputes",
    "Representation before tax authorities",
    "Corporate tax solutions for startups, SMEs, and large enterprises"
  ],

  pros: [
    "Expert knowledge of current tax laws and regulations",
    "Customized tax strategies tailored to client needs",
    "Reliable year-round tax support",
    "Professional assistance with audits and tax disputes"
  ],

  cons: [
    "Professional services may require consultation fees",
    "Complex cases may require extended processing time",
    "Dependent on accurate financial information from clients"
  ],
},
{
  name: "True Point",
  category: "Comprehensive Accounting",
  description: "A comprehensive accounting and tax management software designed to streamline bookkeeping, tax preparation, and financial reporting for businesses and accounting professionals.",

  bestFor: "Small to medium-sized businesses, accounting firms, and tax professionals who need an all-in-one accounting and tax management solution.",

  keyFeatures: [
    "Complete accounting suite including general ledger, accounts payable and receivable",
    "Built-in tax preparation and compliance tools",
    "Custom invoicing with recurring billing options",
    "Expense tracking and budget management tools",
    "Customizable financial reporting and analytics",
    "Multi-user access with role-based permissions",
    "Integration with payroll, CRM systems, and banking platforms"
  ],

  pros: [
    "Comprehensive accounting and tax management features",
    "Automated tax updates for regulatory compliance",
    "Strong financial reporting and analytics tools",
    "Multi-user access for collaborative financial management",
    "Integration with various third-party business tools"
  ],

  cons: [
    "Steeper learning curve for beginners",
    "Advanced features may require higher pricing plans",
    "May be more complex than needed for very small businesses"
  ],
},
{
  name: "Xero",
  category: "Cloud Accounting",

  description: "A popular cloud-based accounting software designed to help small and medium-sized businesses manage financial operations, automate bookkeeping, and collaborate easily with accountants.",

  bestFor: "Small and medium-sized businesses looking for a modern cloud accounting solution with strong integrations and collaboration features.",

  keyFeatures: [
    "Clean and intuitive financial dashboard",
    "Professional invoicing with recurring billing and payment reminders",
    "Automatic bank feeds and smart bank reconciliation",
    "Expense tracking with receipt capture",
    "Inventory management with real-time stock updates",
    "Integrated payroll processing",
    "Comprehensive financial reporting tools",
    "Integration with over 1000 third-party business apps"
  ],

  pros: [
    "User-friendly and visually intuitive interface",
    "Automatic bank feeds and reconciliation",
    "Large ecosystem of third-party integrations",
    "Strong multi-currency support",
    "Powerful mobile app for accounting on the go"
  ],

  cons: [
    "Pricing may be expensive for very small businesses",
    "Limited phone support options",
    "Advanced features may require higher pricing tiers"
  ],
},
{
  name: "ZarMoney",
  category: "Cloud Accounting",

  description: "A cloud-based accounting software designed to simplify financial management with tools for bookkeeping, invoicing, inventory management, and financial reporting. ZarMoney focuses on affordability and a strong feature set for growing businesses.",

  bestFor: "Small and medium-sized businesses that need affordable accounting software with strong inventory management and customizable reporting tools.",

  keyFeatures: [
    "Customizable professional invoicing with recurring billing",
    "Expense and bill management with automatic bank transaction imports",
    "Built-in inventory tracking with real-time stock updates",
    "Bank reconciliation to ensure financial data accuracy",
    "Financial reporting including profit and loss, balance sheets, and cash flow summaries",
    "Multi-user access with role-based permissions",
    "Integration with payment gateways and third-party applications"
  ],

  pros: [
    "Affordable pricing with a strong feature set",
    "Comprehensive inventory management tools",
    "User-friendly interface suitable for non-accountants",
    "Multi-user access with customizable permissions",
    "Scalable for businesses of different sizes"
  ],

  cons: [
    "Fewer third-party integrations compared to competitors",
    "Mobile app functionality is limited",
    "Some advanced features may require higher-tier plans"
  ],
},
{
  name: "Zoho Books",
  category: "Cloud Accounting",

  description: "A cloud-based accounting software designed for small and medium-sized businesses, offering tools for invoicing, expense tracking, tax management, automation, and financial reporting within the Zoho ecosystem.",

  bestFor: "Small and medium-sized businesses looking for an integrated accounting solution, especially those already using other Zoho business tools.",

  keyFeatures: [
    "Clean and intuitive financial dashboard",
    "Customizable invoicing and estimates with payment reminders",
    "Expense tracking with receipt uploads and bank transaction syncing",
    "Automatic bank feeds with reconciliation tools",
    "Inventory management with real-time stock updates",
    "Project time tracking and billable hours management",
    "Multi-tax support and tax-ready reports",
    "Automation tools for recurring invoices, payments, and workflows"
  ],

  pros: [
    "Strong integration with the Zoho ecosystem",
    "Powerful mobile apps for managing finances on the go",
    "Affordable pricing with flexible plans",
    "Multi-language and multi-currency support",
    "Automation tools that reduce manual work"
  ],

  cons: [
    "Some advanced features are only available in higher pricing tiers",
    "Limited customization for certain reports",
    "Best experience when used with other Zoho products"
  ],
}

]

export default function InsightsPage() {
  const featuredReview = softwareReviews.find((review) => review.featured)
  const regularReviews = softwareReviews.filter((review) => !review.featured)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-primary py-20 sm:py-24 overflow-hidden">
          <FloatingCircles />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl text-balance">
                Accounting Software Reviews
              </h1>
              <p className="mt-6 text-lg leading-8 text-primary-foreground/80">
                Find the right accounting software for your needs. Our expert reviews help you compare features, pricing, and capabilities to make an informed decision.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Review */}
        {featuredReview && (
          <section className="relative py-16 sm:py-20 overflow-hidden">
            <WavePattern />
            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-sky-blue">Featured Review</h2>
              <Card className="mt-6 overflow-hidden border-border bg-card">
                <div className="lg:grid lg:grid-cols-2">
                  <div className="bg-secondary p-8 lg:p-12">
                    <div className="flex items-center gap-2">
                      <Star className="h-5 w-5 fill-gold text-gold" />
                      <span className="text-sm font-medium text-muted-foreground">{featuredReview.category}</span>
                    </div>
                    <h3 className="mt-4 text-3xl font-bold text-foreground">{featuredReview.name}</h3>
                    <p className="mt-4 text-muted-foreground">{featuredReview.description}</p>
                    <div className="mt-6">
                      <h4 className="text-sm font-semibold text-foreground">Best For:</h4>
                      <p className="mt-1 text-sm text-muted-foreground">{featuredReview.bestFor}</p>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12">
                    <h4 className="text-lg font-semibold text-foreground">Key Features</h4>
                    <ul className="mt-4 space-y-2">
                      {featuredReview.keyFeatures.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 grid gap-6 sm:grid-cols-2">
                      <div>
                        <h4 className="text-sm font-semibold text-foreground">Pros</h4>
                        <ul className="mt-2 space-y-1">
                          {featuredReview.pros.map((pro) => (
                            <li key={pro} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-green-600" />
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-foreground">Cons</h4>
                        <ul className="mt-2 space-y-1">
                          {featuredReview.cons.map((con) => (
                            <li key={con} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <X className="mt-0.5 h-3.5 w-3.5 shrink-0 text-red-500" />
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        )}

        {/* All Reviews Grid */}
        <section className="relative bg-secondary py-16 sm:py-20 overflow-hidden">
          <DotsPattern />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-sky-blue">All Software Reviews</h2>
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              {regularReviews.map((review, index) => (
                <Card key={review.name} className={`overflow-hidden border-border bg-card ${
                  index % 2 === 1 ? 'mt-8' : ''
                }`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-sky-blue">{review.category}</span>
                    </div>
                    <CardTitle className="mt-2 text-xl">{review.name}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {review.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-foreground">Best For:</h4>
                      <p className="mt-1 text-sm text-muted-foreground">{review.bestFor}</p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <h4 className="text-sm font-semibold text-foreground">Pros</h4>
                        <ul className="mt-2 space-y-1">
                          {review.pros.slice(0, 3).map((pro) => (
                            <li key={pro} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-green-600" />
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-foreground">Cons</h4>
                        <ul className="mt-2 space-y-1">
                          {review.cons.slice(0, 2).map((con) => (
                            <li key={con} className="flex items-start gap-2 text-xs text-muted-foreground">
                              <X className="mt-0.5 h-3.5 w-3.5 shrink-0 text-red-500" />
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>


        {/* CTA Section */}
        <section className="relative bg-primary py-16 sm:py-20 overflow-hidden">
          <TrianglePattern />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl text-balance">
                Need Help Choosing the Right Software?
              </h2>
              <p className="mt-4 text-lg leading-8 text-primary-foreground/80">
                Our team can help you select, set up, and master the accounting software that best fits your business needs.
              </p>
              <div className="mt-10">
                <Button size="lg" className="bg-gold text-primary hover:bg-gold/90" asChild>
                  <Link href="/contact">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
