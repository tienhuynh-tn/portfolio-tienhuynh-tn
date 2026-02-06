import Section from '../components/layout/Section'
import useRevealOnScroll from '../hooks/useRevealOnScroll'

const ACTIVITIES = [
  'Mentoring junior developers on backend design and debugging practices.',
  'Sharing engineering notes and practical lessons from production incidents.',
  'Contributing to team documentation and onboarding guides.',
]

function Activity() {
  const revealRef = useRevealOnScroll<HTMLDivElement>()

  return (
    <Section id="activity" title="Activity">
      <article className="item reveal" ref={revealRef}>
        <ul className="bullets">
          {ACTIVITIES.map((activity) => (
            <li key={activity}>{activity}</li>
          ))}
        </ul>
      </article>
    </Section>
  )
}

export default Activity
