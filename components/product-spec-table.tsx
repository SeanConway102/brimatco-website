import type { SpecRow, SpecRowInchLbs, TubeNutSpecRow } from "@/lib/product-data"
import { ImageLightbox } from "@/components/image-lightbox"

interface ProductSpecTableProps {
  product: {
    slug: string
    model: string
    torqueUnit: "FOOT/LBS" | "INCH/LBS"
    specs: SpecRow[] | SpecRowInchLbs[]
    tubeNutSpecs?: TubeNutSpecRow[]
  }
}

export function ProductSpecTable({ product }: ProductSpecTableProps) {
  // Tube Nut has a different table structure
  if (product.slug === "tube-nut" && product.tubeNutSpecs) {
    return <TubeNutTable specs={product.tubeNutSpecs} />
  }

  if (product.torqueUnit === "INCH/LBS") {
    return <InchLbsTable specs={product.specs as SpecRowInchLbs[]} model={product.model} />
  }

  return <FootLbsTable specs={product.specs as SpecRow[]} model={product.model} />
}

function FootLbsTable({ specs, model }: { specs: SpecRow[]; model: string }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-cast-iron text-vellum">
            <th className="border border-cast-iron px-3 py-3 text-left font-sans text-xs font-bold uppercase tracking-wider">
              Model Type
            </th>
            <th className="border border-cast-iron px-3 py-3 text-left font-sans text-xs font-bold uppercase tracking-wider">
              Socket Sizes
            </th>
            <th className="border border-cast-iron px-3 py-3 text-center font-sans text-xs font-bold uppercase tracking-wider">
              No. Idler Gears*
            </th>
            <th className="border border-cast-iron px-3 py-3 text-center font-sans text-xs font-bold uppercase tracking-wider">
              Sq. Dr.
            </th>
            <th className="border border-cast-iron px-3 py-3 text-center font-sans text-xs font-bold uppercase tracking-wider">
              Torque Max
              <br />
              <span className="text-[10px] font-normal text-vellum/60">FOOT/LBS</span>
            </th>
            <th className="border border-cast-iron px-3 py-3 text-center font-sans text-xs font-bold uppercase tracking-wider">
              Torque Max
              <br />
              <span className="text-[10px] font-normal text-vellum/60">N.M.</span>
            </th>
            <th className="border border-cast-iron px-3 py-3 text-center font-sans text-xs font-bold uppercase tracking-wider">
              {'"A"'}
            </th>
            <th className="border border-cast-iron px-3 py-3 text-center font-sans text-xs font-bold uppercase tracking-wider">
              {'"R"'}
            </th>
          </tr>
        </thead>
        <tbody>
          {specs.map((spec, rowIdx) =>
            spec.idlerGears.map((gear, gearIdx) => (
              <tr
                key={`${rowIdx}-${gearIdx}`}
                className={
                  rowIdx % 2 === 0 ? "bg-card" : "bg-muted"
                }
              >
                {/* Model - only on first gear row of first spec */}
                {gearIdx === 0 && rowIdx === 0 && (
                  <td
                    className="border border-border px-3 py-2 font-mono text-xs font-bold text-foreground"
                    rowSpan={specs.reduce((a, s) => a + s.idlerGears.length, 0)}
                  >
                    {model}
                  </td>
                )}
                {/* Socket Sizes - only on first gear row */}
                {gearIdx === 0 && (
                  <td
                    className="border border-border px-3 py-2 font-mono text-xs text-foreground"
                    rowSpan={spec.idlerGears.length}
                  >
                    {spec.socketSizes.split("\n").map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < spec.socketSizes.split("\n").length - 1 && <br />}
                      </span>
                    ))}
                  </td>
                )}
                <td className="border border-border px-3 py-2 text-center font-mono text-xs text-foreground">
                  {gear}
                </td>
                {/* Sq Drive - only on first gear row of first spec */}
                {gearIdx === 0 && rowIdx === 0 && (
                  <td
                    className="border border-border px-3 py-2 text-center font-mono text-xs text-foreground"
                    rowSpan={specs.reduce((a, s) => a + s.idlerGears.length, 0)}
                  >
                    {spec.sqDrive}
                  </td>
                )}
                <td className="border border-border px-3 py-2 text-center font-mono text-xs text-foreground">
                  {spec.torqueFtLbs[gearIdx]}
                </td>
                <td className="border border-border px-3 py-2 text-center font-mono text-xs text-foreground">
                  {spec.torqueNM[gearIdx]}
                </td>
                {/* Dims - only on first gear row */}
                {gearIdx === 0 && (
                  <>
                    <td
                      className="border border-border px-3 py-2 text-center font-mono text-xs text-foreground"
                      rowSpan={spec.idlerGears.length}
                    >
                      {spec.dimA.toFixed(3)}
                    </td>
                    <td
                      className="border border-border px-3 py-2 text-center font-mono text-xs text-foreground"
                      rowSpan={spec.idlerGears.length}
                    >
                      {spec.dimR.toFixed(3)}
                    </td>
                  </>
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

function InchLbsTable({ specs, model }: { specs: SpecRowInchLbs[]; model: string }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-cast-iron text-vellum">
            <th className="border border-cast-iron px-3 py-3 text-left font-sans text-xs font-bold uppercase tracking-wider">
              Model Type
            </th>
            <th className="border border-cast-iron px-3 py-3 text-left font-sans text-xs font-bold uppercase tracking-wider">
              Socket Sizes
            </th>
            <th className="border border-cast-iron px-3 py-3 text-center font-sans text-xs font-bold uppercase tracking-wider">
              No. Idler Gears*
            </th>
            <th className="border border-cast-iron px-3 py-3 text-center font-sans text-xs font-bold uppercase tracking-wider">
              Sq. Dr.
            </th>
            <th className="border border-cast-iron px-3 py-3 text-center font-sans text-xs font-bold uppercase tracking-wider">
              Torque Max
              <br />
              <span className="text-[10px] font-normal text-vellum/60">INCH/LBS</span>
            </th>
            <th className="border border-cast-iron px-3 py-3 text-center font-sans text-xs font-bold uppercase tracking-wider">
              Torque Max
              <br />
              <span className="text-[10px] font-normal text-vellum/60">N.M.</span>
            </th>
            <th className="border border-cast-iron px-3 py-3 text-center font-sans text-xs font-bold uppercase tracking-wider">
              {'"A"'}
            </th>
            <th className="border border-cast-iron px-3 py-3 text-center font-sans text-xs font-bold uppercase tracking-wider">
              {'"R"'}
            </th>
          </tr>
        </thead>
        <tbody>
          {specs.map((spec, rowIdx) =>
            spec.idlerGears.map((gear, gearIdx) => (
              <tr
                key={`${rowIdx}-${gearIdx}`}
                className={
                  rowIdx % 2 === 0 ? "bg-card" : "bg-muted"
                }
              >
                {gearIdx === 0 && rowIdx === 0 && (
                  <td
                    className="border border-border px-3 py-2 font-mono text-xs font-bold text-foreground"
                    rowSpan={specs.reduce((a, s) => a + s.idlerGears.length, 0)}
                  >
                    {model}
                  </td>
                )}
                {gearIdx === 0 && (
                  <td
                    className="border border-border px-3 py-2 font-mono text-xs text-foreground"
                    rowSpan={spec.idlerGears.length}
                  >
                    {spec.socketSizes.split("\n").map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < spec.socketSizes.split("\n").length - 1 && <br />}
                      </span>
                    ))}
                  </td>
                )}
                <td className="border border-border px-3 py-2 text-center font-mono text-xs text-foreground">
                  {gear}
                </td>
                {gearIdx === 0 && rowIdx === 0 && (
                  <td
                    className="border border-border px-3 py-2 text-center font-mono text-xs text-foreground"
                    rowSpan={specs.reduce((a, s) => a + s.idlerGears.length, 0)}
                  >
                    {spec.sqDrive}
                  </td>
                )}
                <td className="border border-border px-3 py-2 text-center font-mono text-xs text-foreground">
                  {spec.torqueInLbs[gearIdx]}
                </td>
                <td className="border border-border px-3 py-2 text-center font-mono text-xs text-foreground">
                  {spec.torqueNM[gearIdx]}
                </td>
                {gearIdx === 0 && (
                  <>
                    <td
                      className="border border-border px-3 py-2 text-center font-mono text-xs text-foreground"
                      rowSpan={spec.idlerGears.length}
                    >
                      {spec.dimA.toFixed(3)}
                    </td>
                    <td
                      className="border border-border px-3 py-2 text-center font-mono text-xs text-foreground"
                      rowSpan={spec.idlerGears.length}
                    >
                      {spec.dimR.toFixed(3)}
                    </td>
                  </>
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

function TubeNutTable({ specs }: { specs: TubeNutSpecRow[] }) {
  return (
    <div className="flex flex-col gap-8">
      {specs.map((spec, idx) => (
        <div key={idx} className="border border-border">
          <div className="bg-cast-iron px-4 py-3">
            <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-vellum">
              {spec.modelStyle}
            </h3>
          </div>
          {spec.diagramImage && (
            <div className="border-b border-border bg-card p-6">
              <ImageLightbox
                src={spec.diagramImage}
                alt={`${spec.modelStyle} technical diagram showing adapter plate, wrench blade side view, and bottom view with key dimensions`}
                width={540}
                height={400}
                className="mx-auto w-full max-w-sm"
              />
            </div>
          )}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border px-3 py-2 text-left font-sans text-xs font-bold uppercase tracking-wider text-foreground">
                    Socket Sizes
                  </th>
                  <th className="border border-border px-3 py-2 text-center font-sans text-xs font-bold uppercase tracking-wider text-foreground">
                    Sq. Dr.
                  </th>
                  <th className="border border-border px-3 py-2 text-center font-sans text-xs font-bold uppercase tracking-wider text-foreground">
                    Max Torque
                    <br />
                    <span className="text-[10px] font-normal text-drafting-grey">FT/LBS</span>
                  </th>
                  <th className="border border-border px-3 py-2 text-center font-sans text-xs font-bold uppercase tracking-wider text-foreground">
                    Max Torque
                    <br />
                    <span className="text-[10px] font-normal text-drafting-grey">N.M.</span>
                  </th>
                  <th className="border border-border px-3 py-2 text-center font-sans text-xs font-bold uppercase tracking-wider text-foreground">
                    {'"A"'}
                  </th>
                  <th className="border border-border px-3 py-2 text-center font-sans text-xs font-bold uppercase tracking-wider text-foreground">
                    {'"R"'}
                  </th>
                  <th className="border border-border px-3 py-2 text-center font-sans text-xs font-bold uppercase tracking-wider text-foreground">
                    {'"C"'}
                  </th>
                  <th className="border border-border px-3 py-2 text-center font-sans text-xs font-bold uppercase tracking-wider text-foreground">
                    {'"D"'}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-card">
                  <td className="border border-border px-3 py-2 font-mono text-xs text-foreground">
                    {spec.socketSizes.split("\n").map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < spec.socketSizes.split("\n").length - 1 && <br />}
                      </span>
                    ))}
                  </td>
                  <td className="border border-border px-3 py-2 text-center font-mono text-xs text-foreground">
                    {spec.sqDrive}
                  </td>
                  <td className="border border-border px-3 py-2 text-center font-mono text-xs text-foreground">
                    {spec.maxTorqueFtLbs}
                  </td>
                  <td className="border border-border px-3 py-2 text-center font-mono text-xs text-foreground">
                    {spec.maxTorqueNM}
                  </td>
                  <td className="border border-border px-3 py-2 text-center font-mono text-xs text-foreground">
                    {spec.dimA.toFixed(3)}
                  </td>
                  <td className="border border-border px-3 py-2 text-center font-mono text-xs text-foreground">
                    {spec.dimR.toFixed(3)}
                  </td>
                  <td className="border border-border px-3 py-2 text-center font-mono text-xs text-foreground">
                    {spec.dimC.toFixed(3)}
                  </td>
                  <td className="border border-border px-3 py-2 text-center font-mono text-xs text-foreground">
                    {spec.dimD.toFixed(3)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  )
}
