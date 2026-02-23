import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { sanityFetch } from "@/lib/sanity"
import { allProductsQuery } from "@/lib/queries"
import { ArrowRight, Gauge } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Products | Brimatco Quick Connect Wrench Blades",
  description:
    "Browse Brimatco's full line of production-grade gear-driven quick connect wrench blades: QCL, QCM, QCH, QCEH, QCEH-SP, and Tube Nut series.",
}

export default async function ProductsPage() {
  const { data: products } = await sanityFetch({ query: allProductsQuery })

  return (
    <main>
      <Header />

      {/* Page Hero */}
      <section className="bg-cast-iron px-6 py-16 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-ruby">
            Product Catalog
          </p>
          <h1 className="mt-4 font-sans text-4xl font-bold uppercase tracking-tight text-vellum md:text-6xl">
            Quick Connect
            <br />
            Wrench Blades
          </h1>
          <p className="mt-6 max-w-2xl font-serif text-lg leading-relaxed text-vellum/60">
            Brimatco has been serving aerospace, automotive, and a variety of
            other domestic and international manufacturers for over 35 years.
            Our production-grade gear-driven wrenches are compatible with
            virtually all air or electric tools.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="bg-background px-6 py-16 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Link
                key={product.slug.current}
                href={`/products/${product.slug.current}`}
                className="group flex flex-col border border-border bg-card transition-all hover:border-ruby/40 hover:shadow-lg"
              >
                {/* Model badge header */}
                <div className="flex items-center justify-between bg-cast-iron px-6 py-4">
                  <span className="font-sans text-2xl font-bold tracking-wider text-vellum">
                    {product.model}
                  </span>
                  <ArrowRight className="h-5 w-5 text-vellum/40 transition-transform group-hover:translate-x-1 group-hover:text-ruby" />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col px-6 py-6">
                  <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-foreground">
                    {product.name}
                  </h3>
                  <p className="mt-3 flex-1 font-serif text-sm leading-relaxed text-steel">
                    {product.description}
                  </p>

                  {/* Key specs */}
                  <div className="mt-6 flex items-center gap-4 border-t border-border pt-4">
                    <div className="flex items-center gap-2">
                      <Gauge className="h-4 w-4 text-ruby" />
                      <span className="font-mono text-xs text-drafting-grey">
                        {product.tagline}
                      </span>
                    </div>
                  </div>

                  {/* Square drive */}
                  <div className="mt-3">
                    <span className="inline-block border border-border px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-drafting-grey">
                      {product.sqDrive === "varies"
                        ? "Multiple sq. drives"
                        : `${product.sqDrive}" sq. drive`}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Additional product lines */}
      <section className="border-t border-border bg-muted px-6 py-16 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-sans text-2xl font-bold uppercase tracking-tight text-foreground">
                Additional Product Lines
              </h2>
              <p className="mt-4 font-serif text-base leading-relaxed text-steel">
                Beyond our Quick Connect wrench blades, Brimatco offers a full
                range of drive options and specialized tooling solutions.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Link
                href="/drives"
                className="flex flex-col border border-border bg-card px-6 py-5 transition-all hover:border-ruby/40 hover:shadow-md"
              >
                <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-foreground">
                  Internal & External Drives
                </h3>
                <p className="mt-2 font-serif text-sm text-steel">
                  Square thru, threaded, spline, hex, torx, allen, and more.
                </p>
              </Link>
              <Link
                href="/drives#blind-drives"
                className="flex flex-col border border-border bg-card px-6 py-5 transition-all hover:border-ruby/40 hover:shadow-md"
              >
                <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-foreground">
                  Gear Driven Blind Drives
                </h3>
                <p className="mt-2 font-serif text-sm text-steel">
                  Custom multi-extended gear drives for inaccessible areas.
                </p>
              </Link>
              <Link
                href="/about#adaptability"
                className="flex flex-col border border-border bg-card px-6 py-5 transition-all hover:border-ruby/40 hover:shadow-md"
              >
                <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-foreground">
                  Power Source Adaptability
                </h3>
                <p className="mt-2 font-serif text-sm text-steel">
                  Compatible with angle nutrunners, screwdrivers, stall bars,
                  drills, and pulse tools.
                </p>
              </Link>
              <Link
                href="/about#b-series"
                className="flex flex-col border border-border bg-card px-6 py-5 transition-all hover:border-ruby/40 hover:shadow-md"
              >
                <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-foreground">
                  {'"B" Series Wrench Blades'}
                </h3>
                <p className="mt-2 font-serif text-sm text-steel">
                  Total custom designs for your unique application requirements.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
