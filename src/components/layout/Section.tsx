import type { ReactNode } from 'react'
import Container from './Container'

type SectionProps = {
  id: string
  title?: string
  variant?: 'default' | 'hero'
  children: ReactNode
  className?: string
}

function Section({
  id,
  title,
  variant = 'default',
  children,
  className = '',
}: SectionProps) {
  return (
    <section id={id} className={`section section--${variant} ${className}`.trim()}>
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
