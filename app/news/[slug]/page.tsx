import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FloatingCircles, TrianglePattern } from "@/components/ui/shapes"
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { additionalArticles } from "./additional-articles"

const articles = {
  "training-capacity-building": {
    title: "Training & Capacity Building",
    category: "Training Services",
    author: "Tafy Tax Team",
    date: "July 15, 2025",
    readTime: "5 min read",
    content: `
# Training & Capacity Building

At Tafy Tax Consultants, we believe in empowering businesses through knowledge and skills development. Our comprehensive training programs are designed to enhance your team's financial literacy and operational capabilities.

## Why Training Matters

In today's complex financial landscape, having a well-trained team is crucial for business success. Our capacity building programs ensure your staff can:

- **Make informed financial decisions** with confidence
- **Maintain accurate records** and compliance
- **Utilize accounting software** effectively
- **Understand tax obligations** and requirements

## Our Training Programs

### Financial Literacy for SMEs
This program focuses on building foundational financial knowledge for small and medium enterprise owners and their teams. We cover:

- Basic bookkeeping principles
- Understanding financial statements
- Budgeting and cash flow management
- Tax compliance basics

### Advanced Accounting Software Training
Get hands-on experience with popular accounting platforms including:

- QuickBooks setup and optimization
- Xero advanced features
- Sage Cloud Accounting mastery
- Custom reporting and analytics

### Tax Compliance Workshops
Stay up-to-date with the latest tax regulations through our specialized workshops covering:

- VAT/GST compliance
- Payroll tax requirements
- Corporate tax obligations
- International tax considerations

## Training Delivery Methods

We offer flexible training options to suit your business needs:

### On-Site Training
Our experts come to your location for personalized, hands-on training sessions tailored to your specific business context.

### Virtual Training Sessions
Interactive online sessions that allow your team to learn from anywhere while maintaining engagement and practical application.

### Self-Paced Learning Modules
Comprehensive digital resources that your team can access anytime, perfect for ongoing reference and skill reinforcement.

## Benefits of Our Training Programs

- **Improved Financial Management**: Better decision-making through enhanced financial understanding
- **Increased Efficiency**: Streamlined processes and reduced errors
- **Compliance Assurance**: Reduced risk of non-compliance penalties
- **Cost Savings**: Optimized operations and better resource utilization
- **Team Empowerment**: Confident, capable staff members

## Who Should Attend?

Our training programs are ideal for:

- **Business Owners** who want to understand their finances better
- **Accounting Staff** seeking to enhance their skills
- **Administrative Personnel** handling financial tasks
- **Managers** responsible for budget oversight
- **Start-up Teams** establishing financial processes

## Get Started Today

Invest in your team's capabilities and watch your business thrive. Contact us to discuss your training needs and develop a customized program for your organization.

Our expert trainers are ready to help you build the financial capacity your business needs to succeed in today's competitive environment.
    `,
    relatedArticles: [
      "master-accounting-software",
      "expat-tax-returns",
      "sme-global-operations"
    ]
  },
  "master-accounting-software": {
    title: "Master the Use of Accounting Software with Our Expert Training",
    category: "Training Services",
    author: "Tafy Tax Team",
    date: "July 15, 2025",
    readTime: "4 min read",
    content: `
# Master the Use of Accounting Software with Our Expert Training

In the digital age, accounting software has become essential for efficient financial management. Our expert training programs help you leverage these powerful tools to their full potential.

## The Importance of Software Proficiency

Modern accounting software offers incredible capabilities, but only when used correctly. Proper training ensures you can:

- **Maximize ROI** on your software investment
- **Reduce errors** and improve accuracy
- **Save time** through automation and efficiency
- **Gain insights** from powerful reporting features
- **Ensure compliance** with automated checks

## Popular Accounting Software Platforms

### QuickBooks Training
Master the world's most popular accounting software with our comprehensive QuickBooks training:

- **Setup and Configuration**: Proper initial setup for your business type
- **Daily Operations**: Invoicing, expense tracking, and bank reconciliation
- **Reporting**: Generating and interpreting financial reports
- **Advanced Features**: Inventory, payroll, and multi-currency management

### Xero Expertise
Learn to harness Xero's cloud-based capabilities:

- **Cloud Collaboration**: Multi-user access and permissions
- **Bank Feeds**: Automated transaction imports and reconciliation
- **Mobile Access**: Managing finances on the go
- **Integration**: Connecting with other business applications

### Sage Cloud Accounting
Optimize your use of Sage's powerful features:

- **Dashboard Customization**: Tailoring your view for quick insights
- **Compliance Tools**: Automated tax calculations and reporting
- **Multi-Entity Management**: Handling multiple business entities
- **Advanced Reporting**: Custom reports and business intelligence

## Training Modules

### Beginner Level
Perfect for those new to accounting software:

- **Navigation and Interface**: Getting comfortable with the software
- **Basic Transactions**: Recording sales, purchases, and expenses
- **Bank Reconciliation**: Matching transactions with bank statements
- **Simple Reports**: Generating basic financial statements

### Intermediate Training
For users with basic knowledge looking to advance:

- **Advanced Transactions**: Complex journal entries and adjustments
- **Inventory Management**: Stock tracking and valuation
- **Payroll Integration**: Employee payments and tax calculations
- **Budgeting and Forecasting**: Planning and variance analysis

### Advanced Mastery
Expert-level training for power users:

- **Custom Reporting**: Building tailored reports and dashboards
- **System Integration**: Connecting with CRM, e-commerce, and other systems
- **Multi-Currency Operations**: International business transactions
- **Audit Trail Management**: Compliance and internal controls

## Hands-On Learning Approach

Our training methodology emphasizes practical application:

### Real-World Scenarios
Work through actual business situations you'll encounter in daily operations.

### Step-by-Step Guidance
Detailed instructions with visual aids for complex processes.

### Practice Exercises
Apply what you learn with guided practice sessions.

### Q&A Sessions
Get your specific questions answered by expert trainers.

## Custom Training Solutions

Every business is unique. We offer:

### Industry-Specific Training
Tailored content for retail, manufacturing, services, and other sectors.

### Role-Based Training
Different modules for owners, accountants, and administrative staff.

### Business Size Adaptation
Content appropriate for sole proprietors, SMEs, and larger enterprises.

## Ongoing Support

Training doesn't end when the session does. We provide:

- **Reference Materials**: Comprehensive guides and cheat sheets
- **Video Tutorials**: On-demand refreshers for specific tasks
- **Help Desk Access**: Ongoing support for implementation questions
- **Advanced Workshops**: Regular sessions on new features and best practices

## Measurable Results

Our clients report significant improvements after training:

- **40% reduction** in processing time
- **60% decrease** in data entry errors
- **80% improvement** in reporting accuracy
- **90% confidence** in software utilization

## Get Started

Transform your financial management with expert software training. Contact us to schedule a consultation and develop a customized training plan for your team.

Master your accounting software and unlock your business's full potential.
    `,
    relatedArticles: [
      "training-capacity-building",
      "foreign-trusts-tax",
      "capital-gains-advisory"
    ]
  },
  "foreign-trusts-tax": {
    title: "Tax obligations on foreign trusts, CFCs, and offshore assets",
    category: "Tax Services",
    author: "Tafy Tax Team",
    date: "July 15, 2025",
    readTime: "8 min read",
    content: `
# Tax obligations on foreign trusts, CFCs, and offshore assets

Understanding and managing tax obligations for foreign trusts, Controlled Foreign Corporations (CFCs), and offshore assets is crucial for South African taxpayers with international interests.

## Understanding Foreign Trusts

### What Constitutes a Foreign Trust?
A foreign trust is a trust established outside South Africa that may have tax implications for South African residents. Key considerations include:

- **Creation and Administration**: Where the trust is legally established
- **Trustee Location**: Nationality and residence of trustees
- **Asset Location**: Where trust assets are held
- **Beneficiary Residency**: Tax residency status of beneficiaries

### Tax Implications for South African Residents
South African tax residents may face tax obligations on:

- **Distributions received** from foreign trusts
- **Deemed distributions** under certain circumstances
- **Capital gains** on trust asset disposals
- **Income attribution** based on beneficial ownership

## Controlled Foreign Corporations (CFCs)

### CFC Definition and Rules
A CFC is a foreign company where South African residents control more than 50% of participation rights. Key aspects:

- **Control Threshold**: More than 50% participation rights
- **Attribution Rules**: Income attribution to controlling residents
- **Deemed Dividends**: CFC income treated as dividends
- **Exemption Thresholds**: Small CFC exemptions may apply

### CFC Tax Compliance Requirements
Compliance involves:

- **Annual CFC Returns**: Separate from individual tax returns
- **Income Calculation**: Specific CFC income attribution methods
- **Foreign Tax Credits**: Claiming taxes paid to foreign jurisdictions
- **Documentation**: Maintaining proper records and calculations

## Offshore Assets and Investments

### Types of Offshore Assets
Common offshore assets include:

- **Foreign Bank Accounts**: Savings and current accounts
- **Investment Portfolios**: Foreign stocks, bonds, and mutual funds
- **Real Estate**: Property owned outside South Africa
- **Business Interests**: Shares in foreign companies

### Reporting Requirements
South African residents must disclose:

- **Foreign Income**: All worldwide income regardless of source
- **Foreign Assets**: Specified foreign assets above certain thresholds
- **Foreign Accounts**: Bank and investment account details
- **Foreign Interests**: Beneficial ownership in foreign entities

## Tax Planning Strategies

### Structuring Considerations
Proper structuring can optimize tax efficiency:

- **Trust Jurisdiction**: Choosing tax-efficient trust locations
- **CFC Optimization**: Structuring foreign company ownership
- **Asset Location**: Strategic placement of investments
- **Residency Planning**: Understanding tax residency implications

### Compliance Optimization
Ensure compliance while minimizing tax burden:

- **Double Taxation Agreements**: Leveraging DTAs between countries
- **Foreign Tax Credits**: Maximizing credits for taxes paid abroad
- **Exemptions and Deductions**: Utilizing available tax benefits
- **Timing Strategies**: Optimizing income recognition timing

## Common Pitfalls to Avoid

### Non-Compliance Risks
Failure to comply can result in:

- **Substantial Penalties**: Up to 200% of tax owed
- **Interest Charges**: Accumulated interest on unpaid taxes
- **Criminal Prosecution**: Willful non-compliance consequences
- **Reputational Damage**: Impact on business and personal reputation

### Documentation Issues
Inadequate documentation often leads to:

- **Disallowed Deductions**: Claims rejected without proper proof
- **Audit Triggers**: Incomplete returns attract SARS attention
- **Double Taxation**: Inability to claim foreign tax credits
- **Compliance Delays**: Processing issues with tax authorities

## Recent Regulatory Changes

### Updated Legislation
Recent changes affecting foreign structures include:

- **Enhanced Reporting**: Expanded disclosure requirements
- **Stricter Definitions**: Broader CFC and trust definitions
- **Increased Penalties**: Higher fines for non-compliance
- **International Cooperation**: Enhanced information sharing between countries

### Compliance Deadlines
Key dates to remember:

- **Individual Tax Returns**: Typically due by October/November
- **CFC Returns**: Separate filing deadlines
- **Foreign Asset Disclosures**: Specific reporting windows
- **Estimated Tax Payments**: Quarterly payment requirements

## Professional Guidance

### When to Seek Expert Advice
Consider professional help for:

- **Complex Structures**: Multi-jurisdictional holdings
- **Large Values**: Significant foreign asset values
- **Business Operations**: Active foreign business interests
- **Compliance Concerns**: Uncertainty about requirements

### Our Services
We provide comprehensive support for:

- **Structure Analysis**: Evaluating current arrangements
- **Compliance Reviews**: Ensuring all obligations are met
- **Tax Planning**: Optimizing structure for tax efficiency
- **Representation**: Dealing with tax authorities on your behalf

## Practical Steps

### Immediate Actions
Take these steps now:

1. **Inventory Foreign Assets**: List all offshore holdings
2. **Review Structures**: Examine trust and company arrangements
3. **Assess Compliance**: Determine current filing requirements
4. **Seek Professional Advice**: Consult with tax experts

### Ongoing Management
Maintain compliance through:

- **Regular Reviews**: Annual structure assessments
- **Documentation Updates**: Keep records current
- **Monitoring Changes**: Track legislative developments
- **Proactive Planning**: Anticipate and address issues

## Conclusion

Managing foreign trusts, CFCs, and offshore assets requires careful attention to both South African and international tax laws. Proper planning and compliance can help you optimize your tax position while avoiding costly penalties.

Contact our expert team to ensure your international structures are compliant and tax-efficient.
    `,
    relatedArticles: [
      "cross-border-operations",
      "tax-residency-ceasing",
      "foreign-tax-credits"
    ]
  },
  ...additionalArticles
}

// Generate static params for all articles
export async function generateStaticParams() {
  const slugs = Object.keys(articles)
  return slugs.map((slug) => ({
    slug: slug,
  }))
}

// Generate metadata for each article
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params
  const article = articles[resolvedParams.slug as keyof typeof articles]
  
  if (!article) {
    return {
      title: "Article Not Found | Tafy Tax Consultants",
    }
  }

  return {
    title: `${article.title} | Tafy Tax Consultants`,
    description: `Expert insights on ${article.title} from Tafy Tax Consultants - ${article.category}`,
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const article = articles[resolvedParams.slug as keyof typeof articles]

  if (!article) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Article Header */}
        <section className="relative bg-primary py-20 sm:py-24 overflow-hidden">
          <FloatingCircles />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl text-balance">
                {article.title}
              </h1>
              <div className="mt-6 flex items-center justify-center gap-6 text-sm text-primary-foreground/80">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {article.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {article.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {article.readTime}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              {article.content.split('\n').map((line, index) => {
                if (line.startsWith('# ')) {
                  return <h1 key={index} className="text-4xl font-bold text-foreground mt-8 mb-4">{line.slice(2)}</h1>
                } else if (line.startsWith('## ')) {
                  return <h2 key={index} className="text-3xl font-bold text-foreground mt-8 mb-4">{line.slice(3)}</h2>
                } else if (line.startsWith('### ')) {
                  return <h3 key={index} className="text-2xl font-bold text-foreground mt-6 mb-3">{line.slice(4)}</h3>
                } else if (line.startsWith('#### ')) {
                  return <h4 key={index} className="text-xl font-bold text-foreground mt-4 mb-2">{line.slice(5)}</h4>
                } else if (line.startsWith('- **') && line.endsWith('**')) {
                  return <li key={index} className="font-semibold text-foreground mt-2">{line.slice(5, -2)}</li>
                } else if (line.startsWith('- ')) {
                  return <li key={index} className="text-muted-foreground mt-1">{line.slice(2)}</li>
                } else if (line.startsWith('**') && line.endsWith('**')) {
                  return <p key={index} className="font-semibold text-foreground mt-4">{line.slice(2, -2)}</p>
                } else if (line.trim() === '') {
                  return <br key={index} className="block h-4" />
                } else if (line.trim() !== '') {
                  return <p key={index} className="text-muted-foreground mt-4">{line}</p>
                }
                return null
              })}
            </div>

            {/* Article Actions */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Button asChild className="flex-1">
                <Link href="/contact">
                  Book Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild className="flex-1">
                <Link href="/news">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to News
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="bg-secondary py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">Related Articles</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              {article.relatedArticles.map((relatedSlug) => {
                const relatedArticle = articles[relatedSlug as keyof typeof articles]
                if (!relatedArticle) return null
                
                return (
                  <Card key={relatedSlug} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="mb-3">
                        <span className="text-xs font-medium text-sky-blue">{relatedArticle.category}</span>
                      </div>
                      <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                        {relatedArticle.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {relatedArticle.date} • {relatedArticle.readTime}
                      </p>
                      <Button variant="ghost" asChild className="p-0 h-auto">
                        <Link href={`/news/${relatedSlug}`} className="text-sky-blue hover:text-sky-blue/80">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative bg-primary py-16 sm:py-20 overflow-hidden">
          <TrianglePattern />
          <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl text-balance">
                Need Help with Your Tax Situation?
              </h2>
              <p className="mt-4 text-lg leading-8 text-primary-foreground/80">
                Our expert team is here to provide personalized guidance for your specific tax and financial needs.
              </p>
              <div className="mt-10">
                <Button size="lg" className="bg-gold text-primary hover:bg-gold/90" asChild>
                  <Link href="/contact">
                    Schedule Consultation
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
