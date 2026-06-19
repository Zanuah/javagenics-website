import type { ReactNode } from 'react'

type PageHeroProps = {
  title: string
  description?: string
  eyebrow?: string
  children?: ReactNode
}

export function PageHero({ title, description, eyebrow, children }: PageHeroProps) {
  return (
    <div className="gradient-fallback border-b border-navy-700/60">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-24">
        {eyebrow && (
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-teal-400">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-cream md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted md:text-xl">
            {description}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </div>
  )
}
