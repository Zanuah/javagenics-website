export type Project = {
  title: string
  status: string
  description: string
  highlights: string[]
}

export const projects: Project[] = [
  {
    title: 'AI-Powered Educational Ebook Generators',
    status: 'In development & publishing',
    description:
      'We are building AI ebook generators that produce educational material tailored to each learner — adapting to their knowledge level, pace, interests, and motivation to master the subject.',
    highlights: [
      'Personalized course books for future students',
      'Content adapted to individual learning styles',
      'Scalable generation for educational institutions',
    ],
  },
  {
    title: 'Ring Camera App Marketplace',
    status: 'First app launching July 2026',
    description:
      'We are developing and publishing applications to the Ring Camera App Marketplace — a new platform where we see significant opportunity to improve the customer experience through thoughtful software.',
    highlights: [
      'Consumer-facing apps for the Ring ecosystem',
      'First application expected in the store by July',
      'Focus on usability and real-world value',
    ],
  },
  {
    title: 'Proprietary Accounting Automation Platform',
    status: 'In production — highest revenue application',
    description:
      'Our highest-earning application is a proprietary platform that enables a client to run automations across their accounting practices — multiplying profits automatically while maintaining strict security, safety, and regulatory adherence.',
    highlights: [
      'Automated accounting workflow orchestration',
      'Security and regulatory compliance as core design principles',
      'Measurable profit impact for the client',
    ],
  },
]

export const projectsIntro =
  'We build software that solves real problems — from personalized education to smart home integrations and enterprise-grade automation. Here is a selection of what we are working on today.'
