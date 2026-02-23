interface Product {
  _id: string
  model: string
  homepageSummary?: {
    duty?: string
    torqueNm?: string
    torqueImperial?: string
    housing?: string
    heatTreat?: string
    compatibility?: string
  }
}

interface SpecsTableProps {
  products: Product[]
}

export function SpecsTable({ products }: SpecsTableProps) {
  const items = products || []

  return (
    <section className="bg-vellum py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-drafting-grey">
            Technical Data
          </span>
          <h2 className="mt-3 font-sans text-3xl font-bold uppercase tracking-tight text-cast-iron md:text-4xl lg:text-5xl">
            Specification Comparison
          </h2>
        </div>

        <div className="overflow-x-auto border border-border">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b border-border bg-cast-iron">
                {[
                  "Series",
                  "Duty Class",
                  "Torque (NM)",
                  "Torque (Imperial)",
                  "Housing",
                  "Heat Treat",
                  "Platform",
                ].map((header) => (
                  <th
                    key={header}
                    className="px-4 py-3 text-left font-mono text-[10px] uppercase tracking-[0.2em] text-vellum"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {items.map((product, index) => (
                <tr
                  key={product._id}
                  className={`border-b border-border transition-colors hover:bg-muted/60 ${
                    index % 2 === 0 ? "bg-vellum" : "bg-muted/30"
                  }`}
                >
                  <td className="px-4 py-3 font-sans text-sm font-bold uppercase tracking-wider text-cast-iron">
                    {product.model}
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-steel">
                    {product.homepageSummary?.duty || "—"}
                  </td>
                  <td className="px-4 py-3 font-mono text-sm font-semibold text-ruby">
                    {product.homepageSummary?.torqueNm || "—"}
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-steel">
                    {product.homepageSummary?.torqueImperial || "—"}
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-steel">
                    {product.homepageSummary?.housing || "Uni-Body"}
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-steel">
                    {product.homepageSummary?.heatTreat || "—"}
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-drafting-grey">
                    {product.homepageSummary?.compatibility || "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 font-mono text-[10px] uppercase tracking-wider text-drafting-grey">
          IR = Ingersoll Rand &middot; AC = Atlas Copco &middot; CP = Chicago
          Pneumatic &middot; All values nominal
        </p>
      </div>
    </section>
  )
}
