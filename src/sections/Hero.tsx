import Section from '../components/layout/Section'
import Container from '../components/layout/Container'

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 16,
    padding: '56px 0',
  },
  name: {
    fontSize: '2.75rem',
    fontWeight: 750,
    letterSpacing: '-0.03em',
    margin: 0,
    lineHeight: 1.1,
  },
  title: {
    fontSize: '1.25rem',
    fontWeight: 650,
    color: '#2b2b2b',
    margin: 0,
  },
  summary: {
    fontSize: '1.05rem',
    lineHeight: 1.65,
    color: '#3d3d3d',
    maxWidth: 760,
    margin: 0,
  },
  badges: {
    display: 'inline-flex',
    alignItems: 'center',
    flexWrap: 'wrap' as const,
    gap: 10,
    padding: '8px 14px',
    border: '1px solid #e6e6e6',
    borderRadius: 999,
    fontSize: '0.95rem',
    color: '#2b2b2b',
    backgroundColor: '#fafafa',
    width: 'fit-content',
  },
  badgeItem: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
  },
  dot: { opacity: 0.6 },
  ctas: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: 12,
    marginTop: 4,
  },
  primaryLink: {
    display: 'inline-block',
    padding: '10px 18px',
    borderRadius: 10,
    backgroundColor: '#111',
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 650,
  },
  secondaryLink: {
    display: 'inline-block',
    padding: '10px 18px',
    borderRadius: 10,
    border: '1px solid #d8d8d8',
    color: '#111',
    textDecoration: 'none',
    fontWeight: 650,
    backgroundColor: '#fff',
  },
}

const BADGES = ['3+ years', 'Java', 'Spring Boot', 'SQL', 'AWS']

function Hero() {
  return (
      <Section id="hero" title="">
        <Container>
          <div style={styles.wrapper}>
            <h1 style={styles.name}>Huỳnh Tiên (Fairy)</h1>
            <h2 style={styles.title}>Senior Java Backend Developer</h2>

            <p style={styles.summary}>
              Senior Java backend developer with 3+ years of experience building
              clear, stable, and scalable backend services.
              <br />
              Focused on long-term maintainability and systems that evolve cleanly
              as business needs change.
            </p>

            <div style={styles.badges} aria-label="Highlights">
              {BADGES.map((item, idx) => (
                  <span key={item} style={styles.badgeItem}>
                <span>{item}</span>
                    {idx < BADGES.length - 1 ? <span style={styles.dot}>•</span> : null}
              </span>
              ))}
            </div>

            <div style={styles.ctas}>
              <a href="#projects" style={styles.primaryLink}>
                View Projects
              </a>

              {/* If resume.pdf doesn't exist yet, consider linking to #contact temporarily */}
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
