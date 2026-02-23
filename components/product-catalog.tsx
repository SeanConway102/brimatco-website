"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const products = [
  {
    series: "QCL",
    duty: "Light Duty",
    torqueNm: "16",
    torqueImperial: "140 in-lbs",
    description:
      "Ideal for delicate avionics fasteners and precision electronics assembly where controlled, low-torque application is critical.",
    applications: ["Avionics", "Electronics", "Instrumentation"],
  },
  {
    series: "QCM",
    duty: "Medium Duty",
    torqueNm: "26",
    torqueImperial: "19 ft-lbs",
    description:
      "The workhorse of airframe maintenance. Handles structural fasteners in confined wing and fuselage sections.",
    applications: ["Airframe", "Structural", "General Assembly"],
  },
  {
    series: "QCH",
    duty: "Heavy Duty",
    torqueNm: "31",
    torqueImperial: "23 ft-lbs",
    description:
      "Built for high-cycle industrial applications demanding sustained torque output without fatigue failure.",
    applications: ["Industrial", "Automotive", "Heavy Assembly"],
  },
  {
    series: "QCEH",
    duty: "Extra Heavy",
    torqueNm: "45",
    torqueImperial: "33 ft-lbs",
    description:
      "Maximum torque density for large-diameter aerospace fasteners and critical structural joints.",
    applications: ["Aerospace Structural", "Defense", "Landing Gear"],
  },
  {
    series: "QCEH-SP",
    duty: "Special",
    torqueNm: "100",
    torqueImperial: "74 ft-lbs",
    description:
      "Custom-engineered for mission-critical applications exceeding standard duty classifications. Built to your exact specification.",
    applications: ["Custom", "Mission-Critical", "Specialized"],
  },
  {
    series: "B578/B529",
    duty: "Tube Nut",
    torqueNm: "83",
    torqueImperial: "61 ft-lbs",
    description:
      "Purpose-built for fluid line connections in hydraulic and pneumatic systems. Eliminates tube damage from over-torque.",
    applications: ["Hydraulic Lines", "Pneumatic", "Fluid Systems"],
  },
]

export function ProductCatalog() {
  const [activeProduct, setActiveProduct] = useState(0)

  return (
    <section id="products" className="bg-muted py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-12 lg:mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-drafting-grey">
            Product Line
          </span>
          <h2 className="mt-3 font-sans text-3xl font-bold uppercase tracking-tight text-cast-iron md:text-4xl lg:text-5xl">
            Duty Class Catalog
          </h2>
          <p className="mt-4 max-w-2xl font-serif text-base leading-relaxed text-steel">
            Six precision-graded duty classes engineered for every torque
            requirement — from delicate avionics to mission-critical structural
            applications.
          </p>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          {/* Left: Series tabs */}
          <div className="flex flex-row gap-2 overflow-x-auto lg:w-1/4 lg:flex-col lg:gap-1">
            {products.map((product, index) => (
              <button
                key={product.series}
                onClick={() => setActiveProduct(index)}
                className={`flex shrink-0 items-center gap-3 px-4 py-3 text-left font-sans text-sm font-medium uppercase tracking-wider transition-all ${
                  activeProduct === index
                    ? "border-l-2 border-ruby bg-vellum text-cast-iron"
                    : "border-l-2 border-transparent text-drafting-grey hover:border-drafting-grey/40 hover:text-cast-iron"
                }`}
              >
                <span className="font-mono text-xs text-drafting-grey">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {product.series}
              </button>
            ))}
          </div>

          {/* Right: Product detail */}
          <div className="lg:w-3/4">
            <div className="border border-border bg-vellum">
              <div className="flex flex-col gap-8 p-8 lg:flex-row lg:p-10">
                {/* Product image placeholder */}
                <div className="relative flex items-center justify-center bg-muted lg:w-5/12">
                  <div className="relative aspect-square w-full overflow-hidden">
                    <Image
                      src="/images/offset-wrench.jpg"
                      alt={`Brimatco ${products[activeProduct].series} gear-driven offset wrench`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Specs */}
                <div className="flex flex-col justify-between lg:w-7/12">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs uppercase tracking-[0.2em] text-ruby">
                        {products[activeProduct].duty}
                      </span>
                    </div>
                    <h3 className="mt-2 font-sans text-2xl font-bold uppercase tracking-tight text-cast-iron md:text-3xl">
                      {products[activeProduct].series} Series
                    </h3>
                    <p className="mt-4 font-serif text-sm leading-relaxed text-steel">
                      {products[activeProduct].description}
                    </p>

                    {/* Torque specs */}
                    <div className="mt-6 border border-border">
                      <div className="flex border-b border-border">
                        <div className="w-1/2 border-r border-border bg-muted/50 px-4 py-3">
                          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-drafting-grey">
                            Max Torque (Metric)
                          </span>
                          <p className="mt-1 font-mono text-xl font-semibold text-cast-iron">
                            {products[activeProduct].torqueNm}{" "}
                            <span className="text-sm text-drafting-grey">NM</span>
                          </p>
                        </div>
                        <div className="w-1/2 bg-muted/50 px-4 py-3">
                          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-drafting-grey">
                            Max Torque (Imperial)
                          </span>
                          <p className="mt-1 font-mono text-xl font-semibold text-cast-iron">
                            {products[activeProduct].torqueImperial}
                          </p>
                        </div>
                      </div>
                      <div className="px-4 py-3">
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-drafting-grey">
                          Applications
                        </span>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {products[activeProduct].applications.map((app) => (
                            <span
                              key={app}
                              className="bg-cast-iron/5 px-3 py-1 font-mono text-xs text-cast-iron"
                            >
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <a
                    href="#custom-engineering"
                    className="mt-6 inline-flex items-center gap-2 font-sans text-sm font-bold uppercase tracking-wider text-ruby transition-colors hover:text-ruby-hover"
                  >
                    Request Quote for {products[activeProduct].series}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
