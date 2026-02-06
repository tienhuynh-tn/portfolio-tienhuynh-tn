import Section from '../components/layout/Section'
import Container from '../components/layout/Container'
import ProjectCard from '../components/projects/ProjectCard'
import { projects } from '../data/projects'

function Projects() {
  return (
    <Section id="projects" title="Projects">
      <Container>
        <div className="grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default Projects
