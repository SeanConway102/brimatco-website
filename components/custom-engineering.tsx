import Image from "next/image"
import { Upload, FileText, Phone } from "lucide-react"

export function CustomEngineering() {
  return (
    <section
      id="custom-engineering"
      className="relative overflow-hidden bg-cast-iron py-16 lg:py-24"
    >
      {/* Blueprint texture overlay */}
      <div className="absolute inset-0 opacity-5">
        <Image
          src="/images/blueprint-bg.jpg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-20">
          {/* Left: Copy */}
          <div className="lg:w-1/2">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-ruby">
              Custom Solutions
            </span>
            <h2 className="mt-3 font-sans text-3xl font-bold uppercase tracking-tight text-vellum md:text-4xl lg:text-5xl">
              The Impossible Reach?
              <br />
              <span className="text-ruby">We Solve It.</span>
            </h2>
            <p className="mt-6 max-w-lg font-serif text-base leading-relaxed text-vellum/70">
              Send us your blueprint, your clearance problem, your &ldquo;impossible&rdquo;
              fastener access challenge. Our engineers in Cheshire, CT will
              design a custom gear-driven solution with a unique B-Series part
              number — re-orderable for life.
            </p>

            <div className="mt-10 flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-ruby/30">
                  <Upload className="h-4 w-4 text-ruby" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-sans text-sm font-bold uppercase tracking-wider text-vellum">
                    Upload Blueprints
                  </h4>
                  <p className="mt-1 font-serif text-sm text-vellum/50">
                    CAD files, PDFs, or napkin sketches. We work with what you
                    have.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-ruby/30">
                  <FileText className="h-4 w-4 text-ruby" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-sans text-sm font-bold uppercase tracking-wider text-vellum">
                    Receive Engineering Review
                  </h4>
                  <p className="mt-1 font-serif text-sm text-vellum/50">
                    Our metallurgists and tool designers evaluate feasibility
                    within 48 hours.
                  </p>
                </div>
              </div>
              <a href="tel:+12032720044" className="group flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-ruby/30 transition-colors group-hover:border-ruby group-hover:bg-ruby/10">
                  <Phone className="h-4 w-4 text-ruby" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-sans text-sm font-bold uppercase tracking-wider text-vellum transition-colors group-hover:text-ruby">
                    Direct Engineer Contact
                  </h4>
                  <p className="mt-1 font-serif text-sm text-vellum/50">
                    No sales reps. Talk directly with the team building your
                    tool. Call (203) 272-0044
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Right: RFQ Form */}
          <div className="lg:w-1/2">
            <div className="border border-vellum/10 bg-cast-iron/80 p-8 shadow-2xl backdrop-blur-sm lg:p-10">
              <h3 className="font-sans text-xl font-bold uppercase tracking-wider text-vellum">
                Request Custom Quote
              </h3>
              <p className="mt-2 font-mono text-xs uppercase tracking-wider text-vellum/40">
                Typical response within 48 hours
              </p>

              <form className="mt-8 flex flex-col gap-5">
                <div className="flex flex-col gap-5 sm:flex-row">
                  <div className="flex-1">
                    <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.2em] text-vellum/60">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full border border-vellum/20 bg-transparent px-4 py-3 font-mono text-sm text-vellum placeholder:text-vellum/30 focus:border-ruby focus:outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.2em] text-vellum/60">
                      Company
                    </label>
                    <input
                      type="text"
                      className="w-full border border-vellum/20 bg-transparent px-4 py-3 font-mono text-sm text-vellum placeholder:text-vellum/30 focus:border-ruby focus:outline-none"
                      placeholder="Acme Aerospace"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.2em] text-vellum/60">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full border border-vellum/20 bg-transparent px-4 py-3 font-mono text-sm text-vellum placeholder:text-vellum/30 focus:border-ruby focus:outline-none"
                    placeholder="john@acme.com"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.2em] text-vellum/60">
                    Application / Clearance Details
                  </label>
                  <textarea
                    rows={4}
                    className="w-full resize-none border border-vellum/20 bg-transparent px-4 py-3 font-mono text-sm text-vellum placeholder:text-vellum/30 focus:border-ruby focus:outline-none"
                    placeholder="Describe your clearance problem, torque requirements, and platform..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-ruby py-4 font-sans text-sm font-bold uppercase tracking-[0.15em] text-destructive-foreground transition-colors hover:bg-ruby-hover"
                >
                  Submit RFQ
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
