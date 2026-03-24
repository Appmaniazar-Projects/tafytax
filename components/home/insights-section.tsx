import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Check } from "lucide-react"

const softwareReviews = [
  {
    name: "FreshBooks",
    category: "Invoicing & Time Tracking",
    description: "Cloud-based accounting software known for its simplicity and user-friendly interface, ideal for freelancers and small businesses.",
    highlights: ["Professional invoicing", "Time tracking", "Expense management"],
    href: "/insights",
  },
  {
    name: "Sage Cloud Accounting",
    category: "Small & Medium Business",
    description: "Powerful cloud-based software designed to help SMBs streamline their financial management with robust features.",
    highlights: ["Bank integration", "Tax management", "Real-time collaboration"],
    href: "/insights",
  },
  {
    name: "OnePay",
    category: "Accounting & Payments",
    description: "Innovative all-in-one platform that combines accounting features with integrated payment processing solutions.",
    highlights: ["Payment processing", "Multi-currency", "Bank reconciliation"],
    href: "/insights",
  },
]

export function InsightsSection() {
  return (
    <section className="bg-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-center justify-between gap-4 lg:max-w-none lg:flex-row">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-sky-blue">Software Reviews</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Find the Right Accounting Software
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/insights">
              View All Reviews
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-6 lg:max-w-none lg:grid-cols-3">
          {softwareReviews.map((review) => (
            <Card key={review.name} className="group flex flex-col overflow-hidden border-border bg-card transition-all hover:border-accent/50 hover:shadow-lg">
              <CardHeader className="flex-1">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Star className="h-4 w-4 text-gold" />
                  <span className="font-medium text-sky-blue">{review.category}</span>
                </div>
                <CardTitle className="mt-3 text-xl leading-snug group-hover:text-sky-blue transition-colors">
                  <Link href={review.href}>{review.name}</Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {review.description}
                </CardDescription>
                <ul className="mt-4 space-y-1">
                  {review.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-gold" />
                      {highlight}
                    </li>
                  ))}
                </ul>
                <Link
                  href={review.href}
                  className="mt-4 inline-flex items-center text-sm font-medium text-sky-blue hover:text-sky-blue/80 transition-colors"
                >
                  Read full review
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
