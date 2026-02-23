import Image from "next/image"
import { MapPin, Phone as PhoneIcon, Mail } from "lucide-react"

const footerLinks = {
  Products: [
    { label: "QCL Light Duty", href: "/products/qcl" },
    { label: "QCM Medium Duty", href: "/products/qcm" },
    { label: "QCH Heavy Duty", href: "/products/qch" },
    { label: "QCEH Extra Heavy", href: "/products/qceh" },
    { label: "QCEH-SP Special", href: "/products/qceh-sp" },
    { label: "Tube Nut Series", href: "/products/tube-nut" },
  ],
  Drives: [
    { label: "Internal Drives", href: "/drives" },
    { label: "External Drives", href: "/drives" },
    { label: "Blind Drives", href: "/drives#blind-drives" },
    { label: "All Products", href: "/products" },
  ],
  Company: [
    { label: "About Brimatco", href: "/about" },
    { label: "Quality & Service", href: "/about" },
    { label: "Flexible Adaptability", href: "/about#adaptability" },
    { label: "Contact Us", href: "/about#contact" },
  ],
}

interface FooterProps {
  siteSettings?: {
    companyName?: string
    footerDescription?: string
    certifications?: string[]
    phone?: string[]
    website?: string
  }
}

export function Footer({ siteSettings }: FooterProps) {
  const companyName = siteSettings?.companyName || "Brimatco"
  const description =
    siteSettings?.footerDescription ||
    "Precision gear-driven tooling solutions for aerospace, automotive, and industrial applications. Engineered in Cheshire, CT since 1973."
  const certifications = siteSettings?.certifications || ["ISO 9001", "AS9100D", "ITAR"]
  const phone = siteSettings?.phone?.[0] || "(203) 272-0044"
  const website = siteSettings?.website || "www.brimatco.com"

  return (
    <footer className="bg-cast-iron">
      {/* Trust bar */}
      <div className="border-b border-vellum/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 sm:flex-row lg:px-12">
          <div className="flex items-center gap-3">
            <MapPin className="h-4 w-4 text-ruby" strokeWidth={1.5} />
            <span className="font-mono text-xs tracking-wider text-vellum/60">
              Cheshire, Connecticut, USA
            </span>
          </div>
          <div className="flex items-center gap-3">
            <PhoneIcon className="h-4 w-4 text-ruby" strokeWidth={1.5} />
            <a href={`tel:${phone.replace(/[^+\d]/g, "")}`} className="font-mono text-xs tracking-wider text-vellum/60 transition-colors hover:text-ruby">
              {phone}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="h-4 w-4 text-ruby" strokeWidth={1.5} />
            <span className="font-mono text-xs tracking-wider text-vellum/60">
              {website}
            </span>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-12 lg:py-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">
          {/* Brand */}
          <div className="lg:w-1/3">
            <Image
              src="/images/brimatco-logo.png"
              alt={companyName}
              width={220}
              height={64}
              style={{ width: "auto", height: "auto" }}
              className="h-14"
            />
            <p className="mt-4 max-w-xs font-serif text-sm leading-relaxed text-vellum/50">
              {description}
            </p>
            <div className="mt-6 flex gap-4">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="border border-vellum/20 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-vellum/40"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid flex-1 grid-cols-2 gap-8 md:grid-cols-3">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-sans text-sm font-bold uppercase tracking-wider text-vellum/80">
                  {category}
                </h4>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="font-serif text-sm text-vellum/40 transition-colors hover:text-ruby"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-vellum/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row lg:px-12">
          <span className="font-mono text-[10px] uppercase tracking-wider text-vellum/30">
            &copy; 2026 Brimatco Manufacturing. All rights reserved.
          </span>
          <div className="flex gap-6">
            <a
              href="#"
              className="font-mono text-[10px] uppercase tracking-wider text-vellum/30 transition-colors hover:text-vellum"
            >
              Privacy
            </a>
            <a
              href="#"
              className="font-mono text-[10px] uppercase tracking-wider text-vellum/30 transition-colors hover:text-vellum"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
