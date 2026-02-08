export type CertificationItem = {
  id: string
  name: string
  issuer: string
  year: string
}

export const allCertifications: CertificationItem[] = [
  {
    id: 'oracle-java-ocp-17',
    name: 'Oracle Java OCP 17',
    issuer: 'Oracle',
    year: '2025',
  },
  {
    id: 'aws-certified-developer-associate',
    name: 'AWS Certified Developer – Associate',
    issuer: 'Amazon Web Services',
    year: '2025',
  },
  {
    id: 'google-cloud-fundamentals',
    name: 'Google Cloud Fundamentals',
    issuer: 'Google',
    year: '2024',
  },
]

export const featuredCertifications = allCertifications.slice(0, 3)
