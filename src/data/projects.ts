export type Project = {
  title: string
  description: string
  techStack: string[]
}

export const projects: Project[] = [
  {
    title: 'Inventory Control Service',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod libero at sem luctus, vitae scelerisque lorem pulvinar.',
    techStack: ['Java', 'Spring Boot', 'PostgreSQL', 'AWS'],
  },
  {
    title: 'Order Processing Pipeline',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut aliquet justo, non tincidunt purus.',
    techStack: ['Java', 'Kafka', 'Redis', 'Docker'],
  },
  {
    title: 'Customer Insights Platform',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consequat, ligula a volutpat gravida, ipsum velit placerat nulla.',
    techStack: ['Java', 'Spring Batch', 'MySQL', 'Terraform'],
  },
  {
    title: 'Payments Reconciliation Tool',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.',
    techStack: ['Java', 'Spring Boot', 'MongoDB', 'Kubernetes'],
  },
  {
    title: 'Service Health Dashboard',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel nibh sed lectus viverra fermentum.',
    techStack: ['React', 'TypeScript', 'Vite', 'Charting'],
  },
  {
    title: 'API Gateway Modernization',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at lorem nec turpis vulputate tristique vel at ipsum.',
    techStack: ['Java', 'Spring Cloud', 'SQL', 'AWS'],
  },
]
