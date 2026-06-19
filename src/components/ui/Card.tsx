import type { ReactNode } from 'react'

type CardProps = {
  title: string
  description: string
  badge?: string
  children?: ReactNode
}

export function Card({ title, description, badge, children }: CardProps) {
  return (
    <article className="flex flex-col rounded-xl border border-navy-700 bg-navy-900/60 p-6 backdrop-blur-sm transition-colors hover:border-navy-700/80 hover:bg-navy-800/40">
      {badge && (
        <span className="mb-4 inline-block w-fit rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-xs font-medium text-teal-400">
          {badge}
        </span>
      )}
      <h3 className="text-xl font-semibold text-cream">{title}</h3>
      <p className="mt-3 flex-1 leading-relaxed text-muted">{description}</p>
      {children}
    </article>
  )
}

type FeatureListProps = {
  items: string[]
}

export function FeatureList({ items }: FeatureListProps) {
  return (
    <ul className="mt-4 space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-sm text-muted">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  )
}
