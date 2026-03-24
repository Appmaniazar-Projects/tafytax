import { Award, Users, Target, Shield } from "lucide-react"

const features = [
  {
    name: "Deep Expertise",
    description: "Our team brings decades of combined experience in tax law, financial advisory, and cross-border regulations.",
    icon: Award,
  },
  {
    name: "Client-Centric Approach",
    description: "We work closely with you to understand your unique challenges and deliver tailored solutions that drive results.",
    icon: Users,
  },
  {
    name: "Practical Solutions",
    description: "We focus on actionable strategies that can be implemented effectively, not just theoretical recommendations.",
    icon: Target,
  },
  {
    name: "Compliance Assurance",
    description: "Stay confident with our thorough approach to regulatory compliance and risk management.",
    icon: Shield,
  },
]

export function WhyUsSection() {
  return (
    <section className="bg-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-sky-blue">Why Choose Us</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            A Partner You Can Trust
          </p>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            We combine technical expertise with a practical advisory approach to deliver real value for your business.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-foreground">
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                    <feature.icon className="h-6 w-6 text-gold" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-sm leading-7 text-muted-foreground">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
