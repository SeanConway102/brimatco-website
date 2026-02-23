import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { products } from "@/lib/product-data"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react"
import { ProductSpecTable } from "@/components/product-spec-table"
import { SpecialOptions } from "@/components/special-options"
import { ImageLightbox } from "@/components/image-lightbox"

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  if (!product) return { title: "Product Not Found" }
  return {
    title: `${product.model} - ${product.name} | Brimatco`,
    description: product.description,
  }
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  if (!product) notFound()

  const currentIndex = products.findIndex((p) => p.slug === slug)
  const prevProduct = currentIndex > 0 ? products[currentIndex - 1] : null
  const nextProduct =
    currentIndex < products.length - 1 ? products[currentIndex + 1] : null

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
            {product.model}
          </span>
        </div>
      </div>

      {/* Product Header */}
      <section className="bg-cast-iron px-6 py-12 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="inline-block border border-ruby/40 bg-ruby/10 px-3 py-1">
                <span className="font-mono text-xs uppercase tracking-wider text-ruby">
                  {product.model}
                </span>
              </div>
              <h1 className="mt-4 font-sans text-3xl font-bold uppercase tracking-tight text-vellum md:text-5xl">
                {product.name}
              </h1>
              <p className="mt-4 max-w-2xl font-serif text-base leading-relaxed text-vellum/60">
                {product.description}
              </p>
            </div>
            <div className="flex flex-col items-start gap-3 lg:items-end">
              <div className="flex items-center gap-3">
                <span className="border border-vellum/20 px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-vellum/60">
                  {product.sqDrive === "varies"
                    ? "Multiple Drives"
                    : `${product.sqDrive}" SQ. DRIVE`}
                </span>
              </div>
              <p className="font-mono text-sm text-ruby">{product.tagline}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-background px-6 py-12 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-12 xl:flex-row xl:gap-16">
            {/* Left: Spec Table */}
            <div className="flex-1">
              {/* Part Number Guide */}
              {product.partNumberExample && (
                <div className="mb-10 border border-border bg-muted p-6">
                  <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-foreground">
                    Part Number Guide
                  </h3>
                  <p className="mt-3 font-mono text-base text-foreground">
                    Sample: <strong>{product.partNumberExample}</strong>
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {product.partNumberBreakdown.map((part, i) => (
                      <div
                        key={i}
                        className="border border-border bg-card px-3 py-2"
                      >
                        <span className="block font-mono text-[10px] uppercase tracking-wider text-drafting-grey">
                          {part.label}
                        </span>
                        <span className="font-sans text-sm font-bold text-foreground">
                          {part.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technical Diagram */}
              {"diagramImage" in product && product.diagramImage && (
                <div className="mb-10 border border-border bg-card p-6">
                  <h3 className="mb-4 font-sans text-sm font-bold uppercase tracking-wider text-foreground">
                    Technical Drawing
                  </h3>
                  <ImageLightbox
                    src={product.diagramImage as string}
                    alt={`${product.model} technical diagram showing adapter plate, wrench blade side view, and bottom view with key dimensions`}
                    width={540}
                    height={540}
                    className="mx-auto w-full max-w-md"
                  />
                </div>
              )}

              {/* Specifications Table */}
              <h2 className="font-sans text-lg font-bold uppercase tracking-wider text-foreground">
                Specifications
              </h2>
              <p className="mt-2 font-mono text-xs text-drafting-grey">
                * More than 3 idler gears available per customer request
              </p>
              <div className="mt-6">
                <ProductSpecTable product={product} />
              </div>
            </div>

            {/* Right: Special Options & Catalogue Image */}
            <div className="w-full xl:w-96">
              <SpecialOptions options={product.specialOptions} />

              {/* Socket Drive Choices */}
              <div className="mt-8 border border-border bg-card p-6">
                <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-foreground">
                  Socket Drive Choices
                </h3>
                <ul className="mt-4 flex flex-col gap-1.5">
                  {[
                    "Fractional Hex",
                    "Fractional 12 point",
                    "Millimeter Hex",
                    "Shouldered",
                    "Thru",
                    "Threaded",
                    "Spline",
                    "Allen Drives",
                    "Square Drives",
                    "Male Drives",
                    "Hex Key",
                    "Solid Core Magnetic",
                  ].map((choice) => (
                    <li
                      key={choice}
                      className="font-serif text-sm text-steel"
                    >
                      {choice}
                    </li>
                  ))}
                </ul>
              </div>


            </div>
          </div>
        </div>
      </section>

      {/* Navigation between products */}
      <section className="border-t border-border bg-muted px-6 py-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {prevProduct ? (
            <Link
              href={`/products/${prevProduct.slug}`}
              className="flex items-center gap-2 text-drafting-grey transition-colors hover:text-ruby"
            >
              <ArrowLeft className="h-4 w-4" />
              <div>
                <span className="block font-mono text-[10px] uppercase tracking-wider">
                  Previous
                </span>
                <span className="font-sans text-sm font-bold uppercase">
                  {prevProduct.model}
                </span>
              </div>
            </Link>
          ) : (
            <div />
          )}
          <Link
            href="/products"
            className="font-mono text-xs uppercase tracking-wider text-drafting-grey hover:text-ruby"
          >
            All Products
          </Link>
          {nextProduct ? (
            <Link
              href={`/products/${nextProduct.slug}`}
              className="flex items-center gap-2 text-right text-drafting-grey transition-colors hover:text-ruby"
            >
              <div>
                <span className="block font-mono text-[10px] uppercase tracking-wider">
                  Next
                </span>
                <span className="font-sans text-sm font-bold uppercase">
                  {nextProduct.model}
                </span>
              </div>
              <ArrowRight className="h-4 w-4" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
