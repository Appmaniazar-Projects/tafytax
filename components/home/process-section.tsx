import { MessageSquare, Lightbulb, CheckCircle } from "lucide-react"
import { FloatingCircles, DotsPattern, TrianglePattern } from "@/components/ui/shapes"

const steps = [
  {
    id: "01",
    name: "Consultation",
    description: "We begin with a thorough understanding of your business, challenges, and objectives through in-depth discussions.",
    icon: MessageSquare,
  },
  {
    id: "02",
    name: "Strategy",
    description: "Our experts develop a tailored strategy addressing your specific tax and financial needs with actionable recommendations.",
    icon: Lightbulb,
  },
  {
    id: "03",
    name: "Implementation",
    description: "We work alongside you to implement solutions effectively, ensuring compliance and optimal outcomes.",
    icon: CheckCircle,
  },
]

export function ProcessSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <FloatingCircles />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-sky-blue">Our Process</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            How We Work With You
          </p>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            A structured approach to delivering value at every stage of our engagement.
          </p>
        </div>
        <div className="relative mx-auto mt-16 max-w-5xl">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-border lg:block" />
            <div className="space-y-12 lg:space-y-0">
              {steps.map((step, stepIdx) => (
                <div key={step.name} className="relative lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className={`${stepIdx % 2 === 0 ? "lg:text-right lg:pr-16" : "lg:col-start-2 lg:pl-16"}`}>
                    <div className={`flex items-start gap-4 ${stepIdx % 2 === 0 ? "lg:flex-row-reverse" : ""}`}>
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <step.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 text-sm font-semibold text-sky-blue">
                          <span>Step {step.id}</span>
                        </div>
                        <h3 className="mt-1 text-xl font-bold text-foreground">{step.name}</h3>
                        <p className="mt-2 text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                    {/* Center dot on desktop */}
                    <div className="absolute left-1/2 top-4 hidden h-4 w-4 -translate-x-1/2 rounded-full bg-gold ring-4 ring-background lg:block" />
                    {/* Add shapes to alternating steps */}
                    {stepIdx % 3 === 0 && (
                      <div className="absolute -bottom-8 -right-8">
                        <DotsPattern />
                      </div>
                    )}
                    {stepIdx % 3 === 1 && (
                      <div className="absolute -top-8 -left-8">
                        <TrianglePattern />
                      </div>
                    )}
                    {stepIdx % 3 === 2 && (
                      <div className="absolute -bottom-8 -left-8">
                        <DotsPattern />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
