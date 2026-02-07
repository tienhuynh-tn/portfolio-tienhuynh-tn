export type ExperienceItem = {
  id: string
  role: string
  company: string
  period: string
  location?: string
  highlights: string[]
  tech: string[]
  links?: {
    company?: string
    project?: string
  }
}

export const experienceItems: ExperienceItem[] = [
  {
    id: 'fpt-senior-java-backend',
    role: 'Senior Java Backend Developer',
    company: 'FPT Software',
    period: 'Mar 2024 — Present',
    location: 'Ho Chi Minh City, Vietnam',
    highlights: [
      'Led backend delivery for high-throughput APIs used by regional enterprise clients.',
      'Improved service reliability by introducing standardized observability and alerting baselines.',
      'Partnered with cross-functional teams to break down large initiatives into stable release milestones.',
    ],
    tech: ['Java', 'Spring Boot', 'Redis', 'Kafka', 'AWS'],
    links: {
      company: 'https://www.fpt-software.com',
    },
  },
  {
    id: 'sample-labs-backend-engineer',
    role: 'Backend Engineer',
    company: 'Sample Labs',
    period: 'Jan 2022 — Feb 2024',
    location: 'Ho Chi Minh City, Vietnam',
    highlights: [
      'Optimized critical APIs and reduced p95 latency through query tuning and caching strategies.',
      'Built data synchronization jobs and resilient third-party integrations for billing workflows.',
      'Supported CI/CD hardening and release automation across staging and production environments.',
    ],
    tech: ['Java', 'Spring', 'PostgreSQL', 'Docker', 'Jenkins'],
  },
  {
    id: 'startup-studio-junior-java',
    role: 'Junior Java Developer',
    company: 'Startup Studio',
    period: 'Jul 2020 — Dec 2021',
    location: 'Ho Chi Minh City, Vietnam',
    highlights: [
      'Implemented backend modules for customer and order management services.',
      'Contributed to bug-fix releases and production support during rapid feature delivery cycles.',
    ],
    tech: ['Java', 'Spring Boot', 'MySQL', 'Git'],
  },
]
