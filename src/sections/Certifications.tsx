import Section from '../components/layout/Section'
import { featuredCertifications } from '../data/certifications'
import useRevealOnScroll from '../hooks/useRevealOnScroll'

function Certifications() {
  const revealRef = useRevealOnScroll<HTMLDivElement>()

  return (
    <Section id="certifications" title="Honors & Certifications">
      <div className="reveal" ref={revealRef}>
        <ul className="bullets experienceBullets certificationsList">
          {featuredCertifications.map((certification) => (
            <li key={certification.id} className="certificationItem">
              <strong>{certification.name}</strong>
              <span className="itemMeta certificationMeta">
                {certification.issuer} · {certification.year}
              </span>
            </li>
          ))}
        </ul>

        <div className="ctaRow">
          <a
            href="/certifications"
            className="btn btnSecondary"
            aria-label="View all certifications"
          >
            View all certifications
          </a>
        </div>
      </div>
    </Section>
  )
}

export default Certifications
