import ThemeToggle from './ThemeToggle'

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbarInner">
        <div className="navbarBrand">Huỳnh Tiên</div>
        <nav className="navbarLinks" aria-label="Primary">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  )
}

export default Navbar
