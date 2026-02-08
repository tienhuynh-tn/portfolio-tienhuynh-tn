import ScrollToTop from '../components/layout/ScrollToTop'
import Section from '../components/layout/Section'
import { allCredentials } from '../data/credentials'
import useRevealOnScroll from '../hooks/useRevealOnScroll'

function CredentialsPage() {
  const revealRef = useRevealOnScroll<HTMLDivElement>()

  return (
    <>
      <main>
        <Section id="all-credentials" title="Certifications & Awards">
          <div className="reveal" ref={revealRef}>
            <ul className="bullets experienceBullets certificationsList">
              {allCredentials.map((credential) => (
                <li key={credential.id} className="certificationItem">
                  <strong>{credential.name}</strong>
                  <span className="itemMeta certificationMeta">
                    {credential.issuer} · {credential.year}
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

export default CredentialsPage
