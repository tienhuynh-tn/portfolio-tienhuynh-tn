import Section from '../components/layout/Section'
import useRevealOnScroll from '../hooks/useRevealOnScroll'

const SKILL_GROUPS = [
  {
    title: 'Backend',
    skills: ['Java', 'Spring Boot', 'REST APIs', 'Microservices'],
  },
  {
    title: 'Data',
    skills: ['SQL', 'PostgreSQL', 'Redis', 'Data Modeling'],
  },
  {
    title: 'Cloud & Delivery',
    skills: ['AWS', 'Docker', 'CI/CD', 'Monitoring'],
  },
]

function Skills() {
  const revealRef = useRevealOnScroll<HTMLDivElement>()

  return (
    <Section id="skills" title="Skills">
      <div className="list" ref={revealRef}>
        {SKILL_GROUPS.map((group, index) => (
          <article
            key={group.title}
            className="item reveal"
            style={{ ['--reveal-delay' as string]: `${index * 80}ms` }}
          >
            <h3 className="itemTitle">{group.title}</h3>
            <div className="pillRow">
              {group.skills.map((skill) => (
                <span key={skill} className="pill">
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}

export default Skills
