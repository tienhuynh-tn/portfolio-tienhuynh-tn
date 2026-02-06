import Section from '../components/layout/Section'
import Container from '../components/layout/Container'

const EXPERIENCE_ITEMS = [
  {
    role: 'Senior Java Backend Developer',
    company: 'Placeholder Corp',
    dates: '2023 — Present',
    bullets: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Built resilient services with clear ownership and observability.',
      'Partnered with product teams to deliver scalable backend systems.',
    ],
  },
  {
    role: 'Backend Engineer',
    company: 'Sample Labs',
    dates: '2021 — 2023',
    bullets: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Improved API performance and reduced latency across core services.',
      'Maintained data pipelines and integrations with third-party systems.',
    ],
  },
  {
    role: 'Junior Java Developer',
    company: 'Startup Studio',
    dates: '2020 — 2021',
    bullets: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Implemented new features and supported production releases.',
    ],
  },
]

function Experience() {
  return (
    <Section id="experience" title="Experience">
      <Container>
        <div className="list">
          {EXPERIENCE_ITEMS.map((item) => (
            <article key={`${item.role}-${item.company}`} className="item">
              <div className="itemHeader">
                <div>
                  <h3 className="itemTitle">{item.role}</h3>
                  <p className="itemMeta">{item.company}</p>
                </div>
                <span className="itemDates">{item.dates}</span>
              </div>
              <ul className="bullets">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default Experience
