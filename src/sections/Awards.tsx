import Section from '../components/layout/Section'
import useRevealOnScroll from '../hooks/useRevealOnScroll'

const AWARDS = [
  'Top Performer Award - Backend Engineering, 2024',
  'Engineering Excellence Recognition - API Reliability, 2023',
]

function Awards() {
  const revealRef = useRevealOnScroll<HTMLDivElement>()

  return (
    <Section id="awards" title="Awards">
      <article className="item reveal" ref={revealRef}>
        <ul className="bullets">
          {AWARDS.map((award) => (
            <li key={award}>{award}</li>
          ))}
        </ul>
      </article>
    </Section>
  )
}

export default Awards
