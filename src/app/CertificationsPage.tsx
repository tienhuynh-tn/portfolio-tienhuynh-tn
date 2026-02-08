import ScrollToTop from '../components/layout/ScrollToTop'
import Section from '../components/layout/Section'
import { allCertifications } from '../data/certifications'
import useRevealOnScroll from '../hooks/useRevealOnScroll'

function CertificationsPage() {
  const revealRef = useRevealOnScroll<HTMLDivElement>()

  return (
    <>
      <main>
        <Section id="all-certifications" title="All Certifications">
          <div className="reveal" ref={revealRef}>
            <ul className="bullets experienceBullets certificationsList">
              {allCertifications.map((certification) => (
                <li key={certification.id} className="certificationItem">
                  <strong>{certification.name}</strong>
                  <span className="itemMeta certificationMeta">
                    {certification.issuer} · {certification.year}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      </main>
      <ScrollToTop />
    </>
  )
}

export default CertificationsPage
