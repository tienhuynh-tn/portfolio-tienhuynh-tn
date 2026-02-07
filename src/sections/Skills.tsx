import Section from '../components/layout/Section'
import useRevealOnScroll from '../hooks/useRevealOnScroll'

const SKILL_CATEGORIES = [
  {
    title: 'Backend',
    skills: ['Java', 'Spring Boot', '.NET', 'C#', 'PHP', 'Laravel'],
  },
  {
    title: 'Databases',
    skills: [
      'Microsoft SQL Server',
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Amazon DynamoDB',
    ],
  },
  {
    title: 'Cloud & Infrastructure',
    skills: ['AWS', 'Azure', 'Docker', 'Kubernetes'],
  },
  {
    title: 'CI/CD & DevOps',
    skills: [
      'Git',
      'GitHub',
      'Bitbucket',
      'GitHub Actions',
      'CircleCI',
      'Travis CI',
    ],
  },
  {
    title: 'Messaging & Streaming',
    skills: ['Apache Kafka', 'RabbitMQ', 'ActiveMQ'],
  },
  {
    title: 'Collaboration & Work Tools',
    skills: ['Jira', 'Confluence'],
  },
  {
    title: 'Front-end',
    skills: ['JavaScript', 'React', 'Sass', 'Bootstrap'],
  },
]

function Skills() {
  const revealRef = useRevealOnScroll<HTMLDivElement>()

  return (
    <Section id="skills" className="skillsSection">
      <div className="skillsBody" ref={revealRef}>
        <h2 className="mb-8 text-center text-5xl font-bold tracking-tight text-[color:var(--primary)] reveal">
          Some Languages and Tools
        </h2>

        <div className="skillsIntro reveal">
          <p className="skillsSubtitle">
            Core technologies I work with across backend, data, cloud, and
            delivery.
          </p>
          <span className="skillsDivider" aria-hidden="true" />
        </div>

        <div className="skillsGrid">
          {SKILL_CATEGORIES.map((group, index) => (
            <article
              key={group.title}
              className="skillsGroup item reveal"
              style={{ ['--reveal-delay' as string]: `${index * 80}ms` }}
            >
              <h3 className="itemTitle">{group.title}</h3>
              <ul className="skillsBadges" aria-label={`${group.title} skills`}>
                {group.skills.map((skill) => (
                  <li key={skill} className="skillBadge">
                    <span className="skillBadgeIcon" aria-hidden="true" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Skills
