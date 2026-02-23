import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Phone, Mail, MapPin, ChevronRight } from "lucide-react"
import { ImageLightbox } from "@/components/image-lightbox"

export const metadata = {
  title: "About Brimatco | Quality & Service Since 1973",
  description:
    "Learn about Brimatco Corporation's commitment to quality, our patented Quick-Connect technology, testing & service, and our Cheshire, CT manufacturing facility.",
}

export default function AboutPage() {
  return (
    <main>
      <Header />

      {/* Page Hero */}
      <section className="bg-cast-iron px-6 py-16 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-ruby">
            About Brimatco
          </p>
          <h1 className="mt-4 font-sans text-4xl font-bold uppercase tracking-tight text-vellum md:text-6xl">
            Brimatco Quality
          </h1>
          <p className="mt-6 max-w-2xl font-serif text-lg leading-relaxed text-vellum/60">
            Production-grade gear-driven wrenches engineered and manufactured in
            Cheshire, Connecticut since 1973. Patent No. 4171651 & D255090.
          </p>
        </div>
      </section>

      {/* The Best Choice */}
      <section className="bg-background px-6 py-16 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <div className="border-l-4 border-ruby pl-6">
              <h2 className="font-sans text-3xl font-extrabold uppercase tracking-tight text-foreground md:text-4xl">
                The Best Choice
              </h2>
            </div>
            <div className="mt-10 flex flex-col gap-6 font-serif text-lg leading-relaxed text-steel md:text-xl">
              <p>
                There is substantial proof that gear drive is the most
                consistent, durable and precise method of torque delivery
                employed and is widely preferred over other methods. To insure
                the highest quality and product control, we design and
                manufacture all of our own components in-house.
              </p>
              <p>
                Our years of experience and metallurgical expertise allow us
                to select the best materials for any given application. Our
                design skills result in sophisticated yet uncomplicated
                components. As an example, all Brimatco tool housings utilize
                uni-body design.
              </p>
              <p>
                When you buy a Brimatco tool, you invest in a tool that lasts
                longer, performs better and is extraordinarily cost-efficient.
              </p>
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
                  Quick - Connect
                </h2>
              </div>
              <p className="mt-8 font-serif text-lg leading-relaxed text-steel md:text-xl">
                Brimatco blades are compatible with virtually all air or
                electric tools. Our patented Quick-Connect feature allows you to
                carry out more operations per work station by greatly
                simplifying wrench changing.
              </p>
            </div>

            {/* Testing & Service */}
            <div>
              <div className="border-l-4 border-ruby pl-6">
                <h2 className="font-sans text-3xl font-extrabold uppercase tracking-tight text-foreground md:text-4xl">
                  Testing & Service
                </h2>
              </div>
              <p className="mt-8 font-serif text-lg leading-relaxed text-steel md:text-xl">
                All Brimatco wrenches are functionally tested after assembly.
                Our materials and design assure extended service life. We
                provide complete in-house service in the event that it is needed
                and can advise customers of up-grades or new models.
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
                {[
                  "Angle Nutrunners",
                  "Screwdrivers",
                  "Stall Bar Nutrunners",
                  "Fixtured Nutrunners",
                  "Drills",
                  "Pulse Tools",
                ].map((tool) => (
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
                <ImageLightbox
                  src="/catalogue/flexible-adaptability.png"
                  alt="Brimatco wrench blade adaptability to various pneumatic and DC tools including inline, pistol grip, angle nutrunners, and pulse tools"
                  width={500}
                  height={700}
                  className="mx-auto w-full max-w-sm"
                />
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
            {'"B" Series Wrench Blades'}
          </h2>
          <p className="mt-6 max-w-2xl font-serif text-base leading-relaxed text-vellum/60">
            Total custom designs tailored to your unique application
            requirements. Over the years, we have maintained a policy of
            expanding our product line as new markets occur and new wrenches are
            continually being introduced. We cannot catalog every variation so
            we hope you will accept our invitation to call with your particular
            specifications.
          </p>
          <p className="mt-4 max-w-2xl font-serif text-base leading-relaxed text-vellum/60">
            Even if you {"don't"} see an appropriate tool illustrated in these
            pages, chances are good the solution to your problem already exists.
          </p>
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
                For questions on applications, deliveries, costs or technical
                data. {"We're"} often able to suggest solutions to problems that
                you may have thought you had to live with. We love challenges.
                The best way to find out how much help we can be is to just pick
                up the phone.
              </p>
            </div>
            <div className="lg:w-96">
              <div className="border border-border bg-card p-8">
                <h3 className="font-sans text-lg font-bold uppercase tracking-wider text-foreground">
                  Brimatco Corporation
                </h3>
                <div className="mt-6 flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ruby" />
                    <div className="font-serif text-sm leading-relaxed text-steel">
                      <p>P.O. Box 88</p>
                      <p>1486 Highland Avenue</p>
                      <p>Cheshire, CT 06410</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 shrink-0 text-ruby" />
                    <div className="font-mono text-sm text-foreground">
                      <a href="tel:+12032720044" className="transition-colors hover:text-ruby">(203) 272-0044</a>
                      <p><a href="tel:+12032721859" className="transition-colors hover:text-ruby">272-1859</a> or <a href="tel:+12032721850" className="transition-colors hover:text-ruby">272-1850</a></p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 shrink-0 text-ruby" />
                    <p className="font-mono text-sm text-foreground">
                      Fax: (203) 272-2256
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 shrink-0 text-ruby" />
                    <p className="font-mono text-sm text-foreground">
                      www.brimatco.com
                    </p>
                  </div>
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
