import Section from '../components/layout/Section'
import ProjectCard from '../components/projects/ProjectCard'
import { projects } from '../data/projects'
import useRevealOnScroll from '../hooks/useRevealOnScroll'

function Projects() {
  const revealRef = useRevealOnScroll()

  return (
    <Section id="projects" title="Projects">
      <div className="projectsGrid" ref={revealRef}>
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="reveal"
            style={{ ['--reveal-delay' as string]: `${index * 80}ms` }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Projects
