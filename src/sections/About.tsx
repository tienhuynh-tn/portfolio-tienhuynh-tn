import Section from '../components/layout/Section'
import useRevealOnScroll from '../hooks/useRevealOnScroll'

function About() {
  const revealRef = useRevealOnScroll<HTMLDivElement>()

  return (
    <Section id="about" title="About me">
      <article className="item reveal" ref={revealRef}>
        <p>
          I am a backend developer focused on building clear, reliable systems
          that are easy to evolve. I enjoy translating business ideas into
          maintainable APIs, clean data models, and pragmatic engineering
          decisions that help teams move faster.
        </p>
      </article>
    </Section>
  )
}

export default About
