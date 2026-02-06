import type { Project } from '../../data/projects'

const LINK_LABELS = ['GitHub', 'Live', 'Case Study']

const TYPE_LABELS = ['Backend System', 'Platform', 'Service']

type ProjectCardProps = {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  const typeLabel = TYPE_LABELS[project.title.length % TYPE_LABELS.length]

  return (
    <article className="card projectCard">
      <div className="cardHeader">
        <div className="cardIcon" aria-hidden="true" />
        <span className="cardType">{typeLabel}</span>
      </div>

      <div className="cardContent">
        <h3 className="cardTitle">{project.title}</h3>
        <p className="cardDesc">{project.description}</p>
        <div className="tags">
          {project.techStack.map((tech) => (
            <span key={tech} className="tag">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="cardLinks">
        {LINK_LABELS.map((label) => (
          <a key={label} href="#" className="cardLink">
            {label}
          </a>
        ))}
      </div>
    </article>
  )
}

export default ProjectCard
