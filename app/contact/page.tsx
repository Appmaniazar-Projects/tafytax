import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact/contact-form"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { GeometricPattern, DotsPattern } from "@/components/ui/shapes"

export const metadata: Metadata = {
  title: "Contact Us | Tafy Tax Consultants",
  description: "Get in touch with Tafy Tax Consultants. Schedule a consultation or reach out with your tax and financial advisory questions.",
}

const contactInfo = [
  {
    name: "Email",
    description: "dubetafy@gmail.com",
    icon: Mail,
  },
  {
    name: "Phone",
    description: "079 7807 2032",
    icon: Phone,
  },
  {
    name: "Office",
    description: "Belhar, Cape Town, 65 St Vincent Drive",
    icon: MapPin,
  },
  {
    name: "Hours",
    description: "Mon - Fri: 9:00 AM - 6:00 PM",
    icon: Clock,
  },
]

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-primary py-20 sm:py-24 overflow-hidden">
          <GeometricPattern />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl text-balance">
                Contact Us
              </h1>
              <p className="mt-6 text-lg leading-8 text-primary-foreground/80">
                Ready to discuss your tax and financial needs? Get in touch with our team.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="relative py-20 sm:py-24 overflow-hidden">
          <DotsPattern />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="grid gap-16 lg:grid-cols-2">
                {/* Contact Form */}
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-foreground">
                    Book a Consultation
                  </h2>
                  <p className="mt-4 text-muted-foreground">
                    Fill out the form below and one of our advisors will get back to you within 24 hours to schedule a consultation.
                  </p>
                  <div className="mt-8">
                    <ContactForm />
                  </div>
                </div>

                {/* Contact Information */}
                <div className="lg:pl-8">
                  <h2 className="text-2xl font-bold tracking-tight text-foreground">
                    Get in Touch
                  </h2>
                  <p className="mt-4 text-muted-foreground">
                    Have a question or prefer to reach out directly? Here&apos;s how you can contact us.
                  </p>
                  <dl className="mt-8 space-y-6">
                    {contactInfo.map((item) => (
                      <div key={item.name} className="flex gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary">
                          <item.icon className="h-5 w-5 text-gold" />
                        </div>
                        <div>
                          <dt className="font-semibold text-foreground">{item.name}</dt>
                          <dd className="mt-1 text-muted-foreground">{item.description}</dd>
                        </div>
                      </div>
                    ))}
                  </dl>

                  {/* Map Placeholder */}
                  <div className="mt-12">
                    <h3 className="text-lg font-semibold text-foreground">Our Location</h3>
                    <div className="mt-4 aspect-video w-full overflow-hidden rounded-xl border border-border bg-secondary">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.6677456988686!2d-74.01248908429568!3d40.70550407933153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a197c06b7cb%3A0x40a06c78f79e5de6!2sFinancial%20District%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1647894652983!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Office Location"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
