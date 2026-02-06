import Section from '../components/layout/Section'
import useRevealOnScroll from '../hooks/useRevealOnScroll'

function Contact() {
  const revealRef = useRevealOnScroll<HTMLDivElement>()

  return (
    <Section id="contact" title="Contact">
      <div className="contact reveal" ref={revealRef}>
        <p className="contactText">
          Interested in collaborating or discussing backend systems? Reach out
          anytime.
        </p>

        <div className="contactLinks">
          <a href="mailto:tien.huynhlt.tn@gmail.com" className="cardLink">
            Email
          </a>
          <a
            href="https://github.com/tienhuynh-tn"
            className="cardLink"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/tienhuynh-tn/"
            className="cardLink"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <div className="contactFooter">
          © 2026 Tien Huynh - Fairy (
          <a
            href="https://github.com/tienhuynh-tn"
            className="contactFooterLink"
            target="_blank"
            rel="noreferrer"
          >
            tienhuynh-tn
          </a>
          ). Built with 💚 using React, TypeScript, and a little help from
          ChatGPT &amp; Codex - plus many late nights learning and milktea.
        </div>
      </div>
    </Section>
  )
}

export default Contact
