import Image from "next/image"
import { Archive, Flame, Wrench } from "lucide-react"

const features = [
  {
    icon: Wrench,
    title: "Uni-Body Design",
    description:
      "Every housing is precision-machined from a solid billet of hardened steel. No casting, no welding, no weak points. This is the foundation of Brimatco's legendary durability — a single, seamless structure engineered for decades of service.",
  },
  {
    icon: Archive,
    title: "The B-Series Archive",
    description:
      "Every custom tool Brimatco builds is assigned a unique B-Series part number and archived for life. Need an exact replacement 15 years from now? One call, one part number, delivered.",
  },
  {
    icon: Flame,
    title: "In-House Heat Treating",
    description:
      "Our metallurgists control the entire hardening process — carburizing, quenching, tempering — under one roof. No outsourced guesswork. Precise Rockwell hardness for every application.",
  },
]

export function Features() {
  return (
    <section className="bg-vellum py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col gap-16 lg:flex-row lg:gap-20">
          {/* Left: Image */}
          <div className="relative lg:w-5/12">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/manufacturing.jpg"
                alt="Brimatco precision manufacturing facility in Cheshire, Connecticut"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-cast-iron/20" />
            </div>
            <div className="absolute -bottom-4 -right-4 border border-drafting-grey/30 bg-vellum p-4 shadow-lg lg:-bottom-6 lg:-right-6 lg:p-6">
              <span className="block font-mono text-4xl font-bold text-ruby lg:text-5xl">
                50+
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-drafting-grey">
                Years of precision
              </span>
            </div>
          </div>

          {/* Right: Features */}
          <div className="flex flex-col justify-center lg:w-7/12">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-drafting-grey">
              Engineering Heritage
            </span>
            <h2 className="mt-3 font-sans text-3xl font-bold uppercase tracking-tight text-cast-iron md:text-4xl lg:text-5xl">
              Built Different,
              <br />
              Since 1973
            </h2>
            <div className="mt-10 flex flex-col gap-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-drafting-grey/30 bg-muted">
                    <feature.icon className="h-5 w-5 text-ruby" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-sans text-base font-bold uppercase tracking-wider text-cast-iron">
                      {feature.title}
                    </h3>
                    <p className="mt-2 font-serif text-sm leading-relaxed text-steel">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
