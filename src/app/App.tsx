import { useEffect, type ReactElement } from 'react'
import Navbar from '../components/layout/Navbar'
import ScrollToTop from '../components/layout/ScrollToTop'
import { NAV_ITEMS, type NavItemId } from './navItems'
import Activity from '../sections/Activity'
import About from '../sections/About'
import Contact from '../sections/Contact'
import Credentials from '../sections/Credentials'
import Education from '../sections/Education'
import Experience from '../sections/Experience'
import Hero from '../sections/Hero'
import Projects from '../sections/Projects'
import Skills from '../sections/Skills'
import CredentialsPage from './CredentialsPage'
import ProjectsPage from './ProjectsPage'

const SECTION_COMPONENTS: Record<NavItemId, ReactElement> = {
  home: <Hero />,
  about: <About />,
  skills: <Skills />,
  projects: <Projects />,
  experience: <Experience />,
  education: <Education />,
  credentials: <Credentials />,
  activity: <Activity />,
  contact: <Contact />,
}

function App() {
  useEffect(() => {
    // Hard unlock once in case previous runs left inline scroll lock styles.
    document.documentElement.style.overflow = ''
    document.body.style.overflow = ''
    document.body.style.position = ''
    document.body.style.top = ''
    document.body.style.left = ''
    document.body.style.right = ''
    document.body.style.width = ''
    document.body.style.height = ''
  }, [])

  const pathname = window.location.pathname.replace(/\/+$/, '') || '/'

  if (pathname === '/projects') {
    return <ProjectsPage />
  }

  if (pathname === '/credentials' || pathname === '/certifications') {
    return <CredentialsPage />
  }

  return (
    <>
      <Navbar />
      <main>
        {NAV_ITEMS.map((item) => (
          <div key={item.id}>{SECTION_COMPONENTS[item.id]}</div>
        ))}
      </main>
      <ScrollToTop />
    </>
  )
}

export default App
