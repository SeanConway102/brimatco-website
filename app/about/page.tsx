import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Phone, Mail, MapPin, ChevronRight } from "lucide-react"
import { ImageLightbox } from "@/components/image-lightbox"
import { sanityFetch, urlFor } from "@/lib/sanity"
import { aboutPageQuery, siteSettingsQuery } from "@/lib/queries"

export const metadata = {
  title: "About Brimatco | Quality & Service Since 1973",
  description:
    "Learn about Brimatco Corporation's commitment to quality, our patented Quick-Connect technology, testing & service, and our Cheshire, CT manufacturing facility.",
}

export default async function AboutPage() {
  const [{ data: about }, { data: settings }] = await Promise.all([
    sanityFetch({ query: aboutPageQuery }),
    sanityFetch({ query: siteSettingsQuery }),
  ])

  return (
    <main>
      <Header />

      {/* Page Hero */}
      <section className="bg-cast-iron px-6 py-16 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-ruby">
            {about.heroTagline}
          </p>
          <h1 className="mt-4 font-sans text-4xl font-bold uppercase tracking-tight text-vellum md:text-6xl">
            {about.heroHeading}
          </h1>
          <p className="mt-6 max-w-2xl font-serif text-lg leading-relaxed text-vellum/60">
            {about.heroDescription}
          </p>
        </div>
      </section>

      {/* The Best Choice */}
      <section className="bg-background px-6 py-16 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <div className="border-l-4 border-ruby pl-6">
              <h2 className="font-sans text-3xl font-extrabold uppercase tracking-tight text-foreground md:text-4xl">
                {about.bestChoiceHeading}
              </h2>
            </div>
            <div className="mt-10 flex flex-col gap-6 font-serif text-lg leading-relaxed text-steel md:text-xl">
              {about.bestChoiceParagraphs?.map((paragraph: string, index: number) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick-Connect & Testing */}
      <section className="border-t border-border bg-muted px-6 py-16 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Quick-Connect */}
            <div>
              <div className="border-l-4 border-ruby pl-6">
                <h2 className="font-sans text-3xl font-extrabold uppercase tracking-tight text-foreground md:text-4xl">
                  {about.quickConnectHeading}
                </h2>
              </div>
              <p className="mt-8 font-serif text-lg leading-relaxed text-steel md:text-xl">
                {about.quickConnectBody}
              </p>
            </div>

            {/* Testing & Service */}
            <div>
              <div className="border-l-4 border-ruby pl-6">
                <h2 className="font-sans text-3xl font-extrabold uppercase tracking-tight text-foreground md:text-4xl">
                  {about.testingHeading}
                </h2>
              </div>
              <p className="mt-8 font-serif text-lg leading-relaxed text-steel md:text-xl">
                {about.testingBody}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Flexible Adaptability */}
      <section
        id="adaptability"
        className="border-t border-border bg-background px-6 py-16 lg:px-12 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
            <div className="flex-1">
              <div className="inline-block bg-ruby px-4 py-2">
                <h2 className="font-sans text-lg font-bold uppercase tracking-wider text-destructive-foreground">
                  Flexible Adaptability
                </h2>
              </div>
              <div className="mt-8 flex flex-col gap-4 font-serif text-base leading-relaxed text-steel">
                <p>
                  {
                    "Today's world market offers a variety of pneumatic and D.C. tooling too numerous to list. Keeping production nut-running systems operator friendly and ergonomically feasible are of utmost importance."
                  }
                </p>
                <p>
                  Brimatco can adapt its product line of gear driven wrench
                  blades to fit all major {"manufacturer's"} pneumatic and D.C.
                  tools including:
                </p>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {about.adaptabilityTools?.map((tool: string) => (
                  <div
                    key={tool}
                    className="border border-border bg-card px-4 py-3"
                  >
                    <span className="font-sans text-xs font-bold uppercase tracking-wider text-foreground">
                      {tool}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-6 font-mono text-xs text-drafting-grey">
                Extended barrel assemblies and adapters available.
              </p>
            </div>
            <div className="lg:w-96">
              <div className="border border-border bg-card p-4">
                <h3 className="mb-3 font-sans text-xs font-bold uppercase tracking-wider text-drafting-grey">
                  Power Source Compatibility
                </h3>
                {about.adaptabilityImage ? (
                  <ImageLightbox
                    src={urlFor(about.adaptabilityImage).url()}
                    alt="Brimatco wrench blade adaptability to various pneumatic and DC tools including inline, pistol grip, angle nutrunners, and pulse tools"
                    width={500}
                    height={700}
                    className="mx-auto w-full max-w-sm"
                  />
                ) : (
                  <ImageLightbox
                    src="/catalogue/flexible-adaptability.png"
                    alt="Brimatco wrench blade adaptability to various pneumatic and DC tools including inline, pistol grip, angle nutrunners, and pulse tools"
                    width={500}
                    height={700}
                    className="mx-auto w-full max-w-sm"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B-Series */}
      <section
        id="b-series"
        className="border-t border-border bg-cast-iron px-6 py-16 lg:px-12 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-ruby">
            Custom Solutions
          </p>
          <h2 className="mt-4 font-sans text-3xl font-bold uppercase tracking-tight text-vellum md:text-4xl">
            {about.bSeriesHeading}
          </h2>
          {(Array.isArray(about.bSeriesBody) ? about.bSeriesBody : [about.bSeriesBody]).filter(Boolean).map((paragraph: string, index: number) => (
            <p
              key={index}
              className={`${index === 0 ? "mt-6" : "mt-4"} max-w-2xl font-serif text-base leading-relaxed text-vellum/60`}
            >
              {paragraph}
            </p>
          ))}
          <div className="mt-8">
            <Link
              href="/about#contact"
              className="inline-flex items-center gap-2 bg-ruby px-6 py-3 font-sans text-sm font-bold uppercase tracking-wider text-destructive-foreground transition-colors hover:bg-ruby-hover"
            >
              Request Custom Design
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call Us / Contact */}
      <section
        id="contact"
        className="border-t border-border bg-background px-6 py-16 lg:px-12 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">
            <div className="flex-1">
              <div className="inline-block bg-ruby px-4 py-2">
                <h2 className="font-sans text-lg font-bold uppercase tracking-wider text-destructive-foreground">
                  Call Us
                </h2>
              </div>
              <p className="mt-6 font-serif text-base leading-relaxed text-steel">
                {about.contactBody}
              </p>
            </div>
            <div className="lg:w-96">
              <div className="border border-border bg-card p-8">
                <h3 className="font-sans text-lg font-bold uppercase tracking-wider text-foreground">
                  {settings.companyName}
                </h3>
                <div className="mt-6 flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ruby" />
                    <div className="font-serif text-sm leading-relaxed text-steel">
                      <p>{settings.address?.line1}</p>
                      <p>{settings.address?.line2}</p>
                      <p>{settings.address?.city}, {settings.address?.state} {settings.address?.zip}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 shrink-0 text-ruby" />
                    <div className="font-mono text-sm text-foreground">
                      {settings.phone?.map((num: string, index: number) => (
                        <p key={index}>
                          <a href={`tel:${num.replace(/[^+\d]/g, "")}`} className="transition-colors hover:text-ruby">
                            {num}
                          </a>
                        </p>
                      ))}
                    </div>
                  </div>
                  {settings.fax && (
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 shrink-0 text-ruby" />
                      <p className="font-mono text-sm text-foreground">
                        Fax: {settings.fax}
                      </p>
                    </div>
                  )}
                  {settings.website && (
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 shrink-0 text-ruby" />
                      <p className="font-mono text-sm text-foreground">
                        {settings.website}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
