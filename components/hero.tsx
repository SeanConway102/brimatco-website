import Image from "next/image"
import { urlFor } from "@/lib/sanity"

interface HeroProps {
  data: {
    heroHeading?: string
    heroSubheading?: string
    heroImage?: any
    heroCta1Label?: string
    heroCta1Href?: string
    heroCta2Label?: string
    heroCta2Href?: string
  }
}

export function Hero({ data }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-vellum">
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-12 lg:px-12 lg:pb-24 lg:pt-20">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
          {/* Left: Copy */}
          <div className="flex flex-col gap-6 lg:w-1/2 lg:pt-4">
            <h1 className="font-sans text-5xl font-bold uppercase leading-[0.95] tracking-tight text-cast-iron md:text-6xl lg:text-7xl xl:text-8xl">
              {data?.heroHeading || "Precision in\nTight Spaces"}
            </h1>
            <p className="max-w-lg font-serif text-lg leading-relaxed text-steel md:text-xl">
              {data?.heroSubheading ||
                "Custom-engineered gear-driven solutions for aerospace & automotive since 1973"}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={data?.heroCta1Href || "#custom-engineering"}
                className="inline-flex items-center justify-center bg-ruby px-8 py-4 font-sans text-sm font-bold uppercase tracking-[0.15em] text-destructive-foreground transition-colors hover:bg-ruby-hover"
              >
                {data?.heroCta1Label || "Request a Custom Quote"}
              </a>
              <a
                href={data?.heroCta2Href || "#products"}
                className="inline-flex items-center justify-center border-2 border-cast-iron px-8 py-4 font-sans text-sm font-bold uppercase tracking-[0.15em] text-cast-iron transition-colors hover:bg-cast-iron hover:text-vellum"
              >
                {data?.heroCta2Label || "View Products"}
              </a>
            </div>
          </div>

          {/* Right: Hero image */}
          <div className="relative flex items-center justify-center lg:w-1/2">
            <Image
              src={data?.heroImage ? urlFor(data.heroImage).url() : "/images/hero-gear.jpg"}
              alt="Precision machined steel gears — Brimatco gear-driven tool components"
              width={700}
              height={600}
              className="relative z-10 h-auto w-full max-w-lg object-contain lg:max-w-none"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
