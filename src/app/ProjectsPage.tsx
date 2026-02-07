import ScrollToTop from '../components/layout/ScrollToTop'
import Section from '../components/layout/Section'
import ProjectCard from '../components/projects/ProjectCard'
import { allProjects } from '../data/projects'
import useRevealOnScroll from '../hooks/useRevealOnScroll'

function ProjectsPage() {
  const revealRef = useRevealOnScroll<HTMLDivElement>()

  return (
    <>
      <main>
        <Section id="all-projects" title="All Projects">
          <div className="skillsIntro reveal" ref={revealRef}>
            <p className="skillsSubtitle">
              Featured work first, followed by additional projects across backend,
              data, and frontend delivery.
            </p>
            <span className="skillsDivider" aria-hidden="true" />
          </div>

          <div className="projectsGrid">
            {allProjects.map((project, index) => (
              <div
                key={project.id}
                className="reveal"
                style={{ ['--reveal-delay' as string]: `${index * 80}ms` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </Section>
      </main>
      <ScrollToTop />
    </>
  )
}

export default ProjectsPage
