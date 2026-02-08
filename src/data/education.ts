export type EducationItem = {
  id: string
  degree: string
  institution: string
  period: string
  description?: string
}

export const educationItems: EducationItem[] = [
  {
    id: 'university-of-technology-bsc-it',
    degree: 'B.Sc. in Information Technology',
    institution: 'University of Technology',
    period: '2016 — 2020',
    description:
      'Focused on software engineering, databases, and distributed systems.',
  },
]
