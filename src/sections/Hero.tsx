import Section from '../components/layout/Section'
import Container from '../components/layout/Container'

const BADGES = ['3+ years', 'Java', 'Spring Boot', 'SQL', 'AWS']

function Hero() {
  return (
    <Section id="hero">
      <Container>
        <div className="hero">
          <h1 className="heroTitle">Huỳnh Tiên (Fairy)</h1>
          <h2 className="heroSubtitle">Senior Java Backend Developer</h2>

          <p className="heroSummary">
            Senior Java backend developer with 3+ years of experience building
            clear, stable, and scalable backend services. Focused on long-term
            maintainability and systems that evolve cleanly as business needs
            change.
          </p>

          <div className="badgeRow" aria-label="Highlights">
            {BADGES.map((item, idx) => (
              <span key={item}>
                {item}
                {idx < BADGES.length - 1 ? (
                  <span className="badgeDot"> • </span>
                ) : null}
              </span>
            ))}
          </div>

          <div className="ctaRow">
            <a href="#projects" className="btn btnPrimary">
              View Projects
            </a>
            <a href="/resume.pdf" className="btn btnSecondary">
              Download Resume
            </a>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default Hero
