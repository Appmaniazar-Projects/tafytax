import Link from "next/link"
import Image from "next/image"
import { Linkedin, Twitter, Mail } from "lucide-react"

const navigation = {
  services: [
    { name: "Bookkeeping", href: "/services#bookkeeping" },
    { name: "Financial Analysis", href: "/services#financial-analysis" },
    { name: "Business Advisory", href: "/services#business-advisory" },
    { name: "Software Setup", href: "/services#software-setup" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Software Reviews", href: "/insights" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "Email", href: "mailto:info@tafytax.com", icon: Mail },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.png"
                alt="Tafy Tax - Your trusted tax advisory firm"
                width={220}
                height={80}
                className="h-[70px] w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm leading-6 text-primary-foreground/70">
              Strategic tax and financial advisory services for businesses navigating complex regulations and cross-border operations.
            </p>
            <div className="flex gap-4">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-primary-foreground">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-primary-foreground">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-primary-foreground">Contact</h3>
              <ul role="list" className="mt-6 space-y-4">
                <li className="text-sm leading-6 text-primary-foreground/70">
                  info@tafytax.com
                </li>
                <li className="text-sm leading-6 text-primary-foreground/70">
                  +1 (555) 123-4567
                </li>
                <li className="text-sm leading-6 text-primary-foreground/70">
                  123 Financial District<br />
                  New York, NY 10004
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-primary-foreground/10 pt-8">
          <p className="text-xs leading-5 text-primary-foreground/50">
            &copy; {new Date().getFullYear()} Tafy Tax Consultants. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
