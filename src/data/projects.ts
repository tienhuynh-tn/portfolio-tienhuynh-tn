export type Project = {
  id: string
  title: string
  description: string
  tags: string[]
  featured: boolean
  links: {
    source?: string
    live?: string
    caseStudy?: string
  }
  image?: string
  period?: string
  role?: string
}

export const projects: Project[] = [
  {
    id: 'inventory-control-service',
    title: 'Inventory Control Service',
    description:
      'A resilient inventory backend that handles stock movements, forecasting inputs, and audit-safe change history for operations teams.',
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'AWS'],
    featured: true,
    image: 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1200&q=80',
    links: {
      live: 'https://tienhuynh-tn.github.io',
      source: 'https://github.com/tienhuynh-tn',
    },
  },
  {
    id: 'order-processing-pipeline',
    title: 'Order Processing Pipeline',
    description:
      'An event-driven pipeline that validates, enriches, and routes orders with retry policies and observability for high-throughput traffic.',
    tags: ['Java', 'Kafka', 'Redis', 'Docker'],
    featured: true,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    links: {
      live: 'https://tienhuynh-tn.github.io',
      source: 'https://github.com/tienhuynh-tn',
      caseStudy: '#',
    },
  },
  {
    id: 'customer-insights-platform',
    title: 'Customer Insights Platform',
    description:
      'A data-to-API platform for customer behavior insights, combining scheduled ingestion, domain services, and reporting endpoints.',
    tags: ['Java', 'Spring Batch', 'MySQL', 'OpenSearch'],
    featured: true,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    links: {
      live: 'https://tienhuynh-tn.github.io',
      source: 'https://github.com/tienhuynh-tn',
    },
  },
  {
    id: 'payments-reconciliation-tool',
    title: 'Payments Reconciliation Tool',
    description:
      'A reconciliation workflow that matches gateway transactions and ledger records with exception queues for manual review.',
    tags: ['Java', 'Spring Boot', 'MongoDB', 'Kubernetes'],
    featured: false,
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
    links: {
      live: 'https://tienhuynh-tn.github.io',
      source: 'https://github.com/tienhuynh-tn',
    },
  },
  {
    id: 'service-health-dashboard',
    title: 'Service Health Dashboard',
    description:
      'A frontend observability dashboard with service status views, incident timelines, and trend summaries for engineering teams.',
    tags: ['React', 'TypeScript', 'Vite', 'Charting'],
    featured: false,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    links: {
      live: 'https://tienhuynh-tn.github.io',
      source: 'https://github.com/tienhuynh-tn',
    },
  },
  {
    id: 'api-gateway-modernization',
    title: 'API Gateway Modernization',
    description:
      'A modernization effort that standardized API contracts, security policies, and release workflows across core backend services.',
    tags: ['Java', 'Spring Cloud', 'SQL', 'AWS'],
    featured: false,
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
    links: {
      live: 'https://tienhuynh-tn.github.io',
      source: 'https://github.com/tienhuynh-tn',
    },
  },
]

export const featuredProjects = projects.filter((project) => project.featured)

export const allProjects = [
  ...projects.filter((project) => project.featured),
  ...projects.filter((project) => !project.featured),
]
