interface SpecialOptionsProps {
  options: string[]
}

export function SpecialOptions({ options }: SpecialOptionsProps) {
  return (
    <div className="border border-border bg-card">
      <div className="border-b border-border bg-muted px-6 py-4">
        <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-foreground">
          Special Featured Options
        </h3>
      </div>
      <div className="px-6 py-5">
        <ol className="flex flex-col gap-4">
          {options.map((option, idx) => (
            <li key={idx} className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center bg-ruby font-mono text-xs font-bold text-destructive-foreground">
                {idx + 1}
              </span>
              <span className="font-serif text-sm leading-relaxed text-steel">
                {option}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
