import type { ReactNode } from 'react'
import Container from './Container'

type SectionProps = {
  id: string
  title?: string
  variant?: 'default' | 'hero'
  children: ReactNode
}

function Section({ id, title, variant = 'default', children }: SectionProps) {
  return (
    <section id={id} className={`section section--${variant}`}>
      <Container>
        {title ? (
          <header className="sectionHeader">
            <h2 className="sectionTitle">{title}</h2>
          </header>
        ) : null}
        <div className="sectionBody">{children}</div>
      </Container>
    </section>
  )
}

export default Section
