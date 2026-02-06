import type { Project } from '../../data/projects'

const LINK_LABELS = ['GitHub', 'Live', 'Case Study']

type ProjectCardProps = {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="card">
      <h3 className="cardTitle">{project.title}</h3>
      <p className="cardDesc">{project.description}</p>
      <div className="tags">
        {project.techStack.map((tech) => (
          <span key={tech} className="tag">
            {tech}
          </span>
        ))}
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
