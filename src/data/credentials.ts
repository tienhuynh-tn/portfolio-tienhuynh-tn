export type CredentialItem = {
  id: string
  name: string
  issuer: string
  year: string
}

export const allCredentials: CredentialItem[] = [
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
  {
    id: 'top-performer-backend-2024',
    name: 'Top Performer Award - Backend Engineering',
    issuer: 'FPT Software',
    year: '2024',
  },
  {
    id: 'engineering-excellence-api-2023',
    name: 'Engineering Excellence Recognition - API Reliability',
    issuer: 'Sample Labs',
    year: '2023',
  },
]

export const featuredCredentials = allCredentials.slice(0, 3)
