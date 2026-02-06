import Section from '../components/layout/Section'
import ProjectCard from '../components/projects/ProjectCard'
import { projects } from '../data/projects'

function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="projectsGrid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  )
}

export default Projects
