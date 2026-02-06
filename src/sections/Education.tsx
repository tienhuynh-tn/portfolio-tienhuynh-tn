import Section from '../components/layout/Section'
import useRevealOnScroll from '../hooks/useRevealOnScroll'

const EDUCATION_ITEMS = [
  {
    degree: 'B.Sc. in Information Technology',
    school: 'University of Technology',
    dates: '2016 - 2020',
    details: 'Focused on software engineering, databases, and distributed systems.',
  },
]

function Education() {
  const revealRef = useRevealOnScroll<HTMLDivElement>()

  return (
    <Section id="education" title="Education">
      <div className="list" ref={revealRef}>
        {EDUCATION_ITEMS.map((item, index) => (
          <article
            key={item.degree}
            className="item reveal"
            style={{ ['--reveal-delay' as string]: `${index * 80}ms` }}
          >
            <div className="itemHeader">
              <div>
                <h3 className="itemTitle">{item.degree}</h3>
                <p className="itemMeta">{item.school}</p>
              </div>
              <span className="itemDates">{item.dates}</span>
            </div>
            <p>{item.details}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}

export default Education
