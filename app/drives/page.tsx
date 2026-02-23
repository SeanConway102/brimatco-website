import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { internalDrives, externalDrives } from "@/lib/product-data"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { ImageLightbox } from "@/components/image-lightbox"

export const metadata = {
  title: "Internal & External Drives | Brimatco",
  description:
    "Explore Brimatco's full range of internal and external drive options, plus gear-driven blind drives for inaccessible fastening locations.",
}

export default function DrivesPage() {
  return (
    <main>
      <Header />

      {/* Breadcrumb */}
      <div className="border-b border-border bg-muted px-6 py-3 lg:px-12">
        <div className="mx-auto flex max-w-7xl items-center gap-2">
          <Link
            href="/products"
            className="font-mono text-xs uppercase tracking-wider text-drafting-grey hover:text-ruby"
          >
            Products
          </Link>
          <ChevronRight className="h-3 w-3 text-border" />
          <span className="font-mono text-xs uppercase tracking-wider text-foreground">
            Drives & Accessories
          </span>
        </div>
      </div>

      {/* Page Hero */}
      <section className="bg-cast-iron px-6 py-12 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-ruby">
            Drive Options
          </p>
          <h1 className="mt-4 font-sans text-4xl font-bold uppercase tracking-tight text-vellum md:text-5xl">
            Internal & External Drives
          </h1>
          <p className="mt-4 max-w-2xl font-serif text-base leading-relaxed text-vellum/60">
            Brimatco wrench blades are available with a full range of internal
            and external drive configurations. See page 12 of the catalogue for
            more options.
          </p>
        </div>
      </section>

      {/* Internal Drives */}
      <section className="bg-background px-6 py-16 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="inline-block bg-ruby px-4 py-2">
            <h2 className="font-sans text-lg font-bold uppercase tracking-wider text-destructive-foreground">
              Internal Drives
            </h2>
          </div>
          <p className="mt-6 max-w-xl font-serif text-base leading-relaxed text-steel">
            Internal drive sockets are designed for fasteners where the
            drive feature is recessed into the head. Available in multiple
            configurations to match your specific fastener requirements.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {internalDrives.map((drive) => (
              <div
                key={drive.name}
                className="flex flex-col border border-border bg-card"
              >
                <div className="flex flex-1 items-center justify-center p-4">
                  <ImageLightbox
                    src={drive.image}
                    alt={`${drive.name} internal drive diagram`}
                    width={200}
                    height={200}
                    className="h-40 w-auto object-contain"
                  />
                </div>
                <div className="border-t border-border px-5 py-4">
                  <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-foreground">
                    {drive.name}
                  </h3>
                  <p className="mt-1 font-serif text-sm text-steel">
                    {drive.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* External Drives */}
      <section className="border-t border-border bg-muted px-6 py-16 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="inline-block bg-ruby px-4 py-2">
            <h2 className="font-sans text-lg font-bold uppercase tracking-wider text-destructive-foreground">
              External Drives
            </h2>
          </div>
          <p className="mt-6 max-w-xl font-serif text-base leading-relaxed text-steel">
            External drives provide the output torque through a protruding drive
            feature. These are used for hex bolts, Torx fasteners, allen
            screws, and rotary tool applications.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {externalDrives.map((drive) => (
              <div
                key={drive.name}
                className="flex flex-col border border-border bg-card"
              >
                <div className="flex flex-1 items-center justify-center p-4">
                  <ImageLightbox
                    src={drive.image}
                    alt={`${drive.name} external drive diagram`}
                    width={200}
                    height={200}
                    className="h-40 w-auto object-contain"
                  />
                </div>
                <div className="border-t border-border px-5 py-4">
                  <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-foreground">
                    {drive.name}
                  </h3>
                  <p className="mt-1 font-serif text-sm text-steel">
                    {drive.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gear Driven Blind Drives */}
      <section
        id="blind-drives"
        className="border-t border-border bg-background px-6 py-16 lg:px-12 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
            <div className="flex-1">
              <div className="inline-block bg-ruby px-4 py-2">
                <h2 className="font-sans text-lg font-bold uppercase tracking-wider text-destructive-foreground">
                  Gear Driven Blind Drives - Manual
                </h2>
              </div>
              <div className="mt-6 border-l-4 border-ruby/30 bg-muted px-6 py-5">
                <p className="font-serif text-base leading-relaxed text-foreground">
                  {
                    "Brimatco's service to the aerospace industry has grown for more than a decade and has resulted in our development of numerous multi-extended gear drives designed to reach virtually inaccessible areas."
                  }
                </p>
              </div>
              <p className="mt-6 font-serif text-base leading-relaxed text-steel">
                These truly custom designed drives, either fixed or hand held,
                can be operated as shown by a knurled hand knob for starting
                fasteners or with a female square drive T-handle with capacity
                for torque wrench adaptability (angle of turn).
              </p>
              <div className="mt-8 border border-border bg-card p-6">
                <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-foreground">
                  Key Features
                </h3>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {[
                    "Multi-extended gear drives",
                    "Fixed or hand-held operation",
                    "Knurled hand knob for starting",
                    "Female square drive T-handle",
                    "Torque wrench compatible",
                    "Angle of turn measurement",
                    "Reaches inaccessible areas",
                    "Custom designed per application",
                  ].map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 font-serif text-sm text-steel"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-ruby" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <Link
                  href="/about#contact"
                  className="inline-flex items-center gap-2 bg-ruby px-6 py-3 font-sans text-sm font-bold uppercase tracking-wider text-destructive-foreground transition-colors hover:bg-ruby-hover"
                >
                  Request Custom Blind Drive
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-6 lg:w-96">
              <div className="border border-border bg-card p-4">
                <h3 className="mb-3 font-sans text-xs font-bold uppercase tracking-wider text-drafting-grey">
                  Cross-Section Diagram
                </h3>
                <ImageLightbox
                  src="/catalogue/blind-drives-diagram.png"
                  alt="Gear driven blind drive cross-section diagram showing internal mechanism with fastener engagement"
                  width={540}
                  height={540}
                  className="mx-auto w-full max-w-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
