const specRows = [
  {
    series: "QCL",
    duty: "Light",
    torqueNm: "16",
    torqueInLbs: "140 in-lbs",
    housing: "Uni-Body",
    heatTreat: "Case Hardened",
    compatibility: "IR / AC / CP",
  },
  {
    series: "QCM",
    duty: "Medium",
    torqueNm: "26",
    torqueInLbs: "19 ft-lbs",
    housing: "Uni-Body",
    heatTreat: "Through Hardened",
    compatibility: "IR / AC / CP",
  },
  {
    series: "QCH",
    duty: "Heavy",
    torqueNm: "31",
    torqueInLbs: "23 ft-lbs",
    housing: "Uni-Body",
    heatTreat: "Through Hardened",
    compatibility: "IR / AC / CP",
  },
  {
    series: "QCEH",
    duty: "Extra Heavy",
    torqueNm: "45",
    torqueInLbs: "33 ft-lbs",
    housing: "Uni-Body",
    heatTreat: "Carburized",
    compatibility: "IR / AC / CP",
  },
  {
    series: "QCEH-SP",
    duty: "Special",
    torqueNm: "100",
    torqueInLbs: "74 ft-lbs",
    housing: "Uni-Body",
    heatTreat: "Custom",
    compatibility: "Universal",
  },
  {
    series: "B578/B529",
    duty: "Tube Nut",
    torqueNm: "83",
    torqueInLbs: "61 ft-lbs",
    housing: "Uni-Body",
    heatTreat: "Case Hardened",
    compatibility: "Universal",
  },
]

export function SpecsTable() {
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
              {specRows.map((row, index) => (
                <tr
                  key={row.series}
                  className={`border-b border-border transition-colors hover:bg-muted/60 ${
                    index % 2 === 0 ? "bg-vellum" : "bg-muted/30"
                  }`}
                >
                  <td className="px-4 py-3 font-sans text-sm font-bold uppercase tracking-wider text-cast-iron">
                    {row.series}
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-steel">
                    {row.duty}
                  </td>
                  <td className="px-4 py-3 font-mono text-sm font-semibold text-ruby">
                    {row.torqueNm}
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-steel">
                    {row.torqueInLbs}
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-steel">
                    {row.housing}
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-steel">
                    {row.heatTreat}
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-drafting-grey">
                    {row.compatibility}
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
