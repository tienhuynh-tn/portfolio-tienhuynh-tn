import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  title?: string
  children: ReactNode
}

function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="section">
      {title ? <h2 className="sectionTitle">{title}</h2> : null}
      <div className="sectionBody">{children}</div>
    </section>
  )
}

export default Section
