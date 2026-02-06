import Navbar from '../components/layout/Navbar'
import Hero from '../sections/Hero'
import Projects from '../sections/Projects'
import Experience from '../sections/Experience'
import Contact from '../sections/Contact'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </>
  )
}

export default App
