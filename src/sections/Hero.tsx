import Section from '../components/layout/Section'
import Container from '../components/layout/Container'

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '16px',
    padding: '48px 0',
  },
  name: {
    fontSize: '2.5rem',
    fontWeight: 700,
    letterSpacing: '-0.02em',
    margin: 0,
  },
  title: {
    fontSize: '1.25rem',
    fontWeight: 600,
    color: '#333',
    margin: 0,
  },
  summary: {
    fontSize: '1rem',
    lineHeight: 1.6,
    color: '#444',
    maxWidth: '720px',
    margin: 0,
  },
  badges: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    flexWrap: 'wrap' as const,
    padding: '6px 12px',
    border: '1px solid #e3e3e3',
    borderRadius: '999px',
    fontSize: '0.95rem',
    color: '#333',
    backgroundColor: '#fafafa',
    width: 'fit-content',
  },
  ctas: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '12px',
  },
  primaryLink: {
    display: 'inline-block',
    padding: '10px 18px',
    borderRadius: '8px',
    backgroundColor: '#111',
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 600,
  },
  secondaryLink: {
    display: 'inline-block',
    padding: '10px 18px',
    borderRadius: '8px',
    border: '1px solid #d0d0d0',
    color: '#111',
    textDecoration: 'none',
    fontWeight: 600,
    backgroundColor: '#fff',
  },
}

function Hero() {
  return (
    <Section id="hero" title="Hero">
      <Container>
        <div style={styles.wrapper}>
          <h1 style={styles.name}>Huỳnh Tiên (Fairy)</h1>
          <p style={styles.title}>Senior Java Backend Developer</p>
          <p style={styles.summary}>
            Senior Java backend developer with 3+ years of experience building
            clear, stable, and scalable backend services. Focused on long-term
            maintainability and systems that evolve cleanly as business needs
            change.
          </p>
          <div style={styles.badges}>
            <span>3+ years</span>
            <span>•</span>
            <span>Java</span>
            <span>•</span>
            <span>Spring Boot</span>
            <span>•</span>
            <span>SQL</span>
            <span>•</span>
            <span>AWS</span>
          </div>
          <div style={styles.ctas}>
            <a href="#projects" style={styles.primaryLink}>
              View Projects
            </a>
            <a href="/resume.pdf" style={styles.secondaryLink}>
              Download Resume
            </a>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default Hero
