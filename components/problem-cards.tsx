import { Crosshair, Shield, Cog } from "lucide-react"

const problems = [
  {
    icon: Crosshair,
    title: "THE CLEARANCE PROBLEM",
    description:
      "Standard tools can't reach fasteners in confined aerospace assemblies. Our gear-driven offset design accesses spaces where straight-line tools fail.",
    stat: "0.5\"",
    statLabel: "minimum clearance reach",
  },
  {
    icon: Shield,
    title: "THE DURABILITY GAP",
    description:
      "Cast housings crack under repeated high-torque cycles. Brimatco's uni-body design machines each housing from a single solid block — zero weld points, zero failure seams.",
    stat: "100%",
    statLabel: "uni-body machined",
  },
  {
    icon: Cog,
    title: "SEAMLESS INTEGRATION",
    description:
      "Universal compatibility with Ingersoll Rand, Atlas Copco, Chicago Pneumatic, and all major pneumatic platforms. Drop-in, zero-downtime deployment.",
    stat: "4+",
    statLabel: "platform compatibility",
  },
]

export function ProblemCards() {
  return (
    <section className="bg-drafting-grey py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-12 text-center lg:mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-vellum/60">
            Why Brimatco
          </span>
          <h2 className="mt-3 font-sans text-3xl font-bold uppercase tracking-tight text-vellum md:text-4xl lg:text-5xl">
            Engineered for the Impossible
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="group flex flex-col justify-between border border-vellum/10 bg-cast-iron/40 p-8 transition-all hover:border-ruby/40 hover:bg-cast-iron/60"
            >
              <div>
                <problem.icon className="mb-6 h-8 w-8 text-ruby" strokeWidth={1.5} />
                <h3 className="mb-4 font-sans text-lg font-bold uppercase tracking-wider text-vellum">
                  {problem.title}
                </h3>
                <p className="font-serif text-sm leading-relaxed text-vellum/70">
                  {problem.description}
                </p>
              </div>
              <div className="mt-8 border-t border-vellum/10 pt-6">
                <span className="font-mono text-3xl font-semibold text-ruby">
                  {problem.stat}
                </span>
                <span className="ml-2 font-mono text-xs uppercase tracking-wider text-vellum/50">
                  {problem.statLabel}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
