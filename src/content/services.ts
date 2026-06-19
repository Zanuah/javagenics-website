export type Service = {
  title: string
  description: string
  highlights: string[]
}

export const services: Service[] = [
  {
    title: 'Agentic Software Development',
    description:
      'We design and build intelligent, agent-driven software that automates complex workflows, adapts to context, and reduces manual overhead for your team.',
    highlights: [
      'Custom AI agents tailored to your business processes',
      'Integration with existing tools and data sources',
      'Human-in-the-loop controls where accountability matters',
    ],
  },
  {
    title: 'Local Business Software',
    description:
      'Purpose-built applications that help local businesses compete with enterprise-grade tools — without enterprise-grade complexity or cost.',
    highlights: [
      'Point-of-sale and operations integrations',
      'Customer-facing web and mobile experiences',
      'Workflow automation for small teams',
    ],
  },
  {
    title: 'Cloud Infrastructure & Support',
    description:
      'Reliable cloud architecture, ongoing support, and infrastructure that scales with your business — designed for uptime and maintainability.',
    highlights: [
      'Architecture design and review',
      'Cost optimization and performance tuning',
      '24/7 monitoring options under low-cost contracts',
    ],
  },
  {
    title: 'Migration & Deployment',
    description:
      'Smooth transitions from legacy systems to modern platforms, with minimal downtime and clear rollback strategies.',
    highlights: [
      'Data migration planning and execution',
      'CI/CD pipeline setup',
      'Zero-downtime deployment strategies',
    ],
  },
  {
    title: 'Accessibility Compliance',
    description:
      'All front-end web applications, GUIs, and customer-facing interfaces we build adhere to accessibility regulations — protecting your users and reducing legal risk.',
    highlights: [
      'WCAG-aligned design and development',
      'Screen reader and keyboard navigation testing',
      'Accessibility audit documentation',
    ],
  },
  {
    title: 'Security Scanning & Monitoring',
    description:
      'Security is not an afterthought. Our applications undergo security reports and scans, and under monitoring contracts we keep your systems protected over time.',
    highlights: [
      'Pre-deployment vulnerability scanning',
      'Ongoing security monitoring at low cost',
      'Compliance-aware implementation for regulated industries',
    ],
  },
]

export const serviceIntro =
  'From agentic AI systems to cloud migrations, we deliver end-to-end software services with the rigor of a seasoned engineering team and the personal attention of a boutique firm.'
