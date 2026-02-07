import type { Project } from '../../data/projects'

type ProjectCardProps = {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  const links = [
    { label: 'Live', href: project.links.live },
    { label: 'Source', href: project.links.source },
    { label: 'Case Study', href: project.links.caseStudy },
  ].filter((link): link is { label: string; href: string } => Boolean(link.href))

  return (
    <article className="skillsGroup projectCard">
      <div className="skillsGroupInner">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="h-44 w-full rounded-xl object-cover"
            loading="lazy"
          />
        ) : null}

        <h3 className="itemTitle">{project.title}</h3>

        <ul className="skillsBadges" aria-label={`${project.title} technology stack`}>
          {project.tags.map((tech) => (
            <li key={tech} className="skillBadge">
              <span>{tech}</span>
            </li>
          ))}
        </ul>

        <p className="cardDesc">{project.description}</p>

        {links.length > 0 ? (
          <div className="cardLinks">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="cardLink"
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  )
}

export default ProjectCard
