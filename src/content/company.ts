export const company = {
  name: 'Java Genics LLC',
  tagline: 'Software built with precision. Delivered with integrity.',
  email: 'requests@javagenics.org',
  location: 'San Antonio, Texas',
  ceo: {
    name: 'Kevin Cleveland',
    title: 'CEO & Lead Engineer',
    experience: '22 years of professional software development',
  },
  mission:
    'We build agentic software and custom applications that help businesses operate smarter, scale confidently, and deliver exceptional experiences to their customers — without the overhead of a traditional software firm.',
  values: [
    {
      title: 'Requirements-first delivery',
      description:
        'We use agile planning and constant client communication to capture requirements precisely, so the finished product matches what you asked for and what you expected.',
    },
    {
      title: 'Engineers, not salespeople',
      description:
        'We have no sales team. Our work speaks for itself — and we aim for every solution to be worth far more than you pay for it.',
    },
    {
      title: 'Accessibility by default',
      description:
        'Every frontend, web application, and GUI we build follows accessibility standards to protect your users and your business.',
    },
    {
      title: 'Security you can trust',
      description:
        'Our applications undergo security scans and reporting. Under monitoring contracts — typically very low cost — we keep your systems protected over time.',
    },
  ],
  process: [
    {
      step: '01',
      title: 'Discover',
      description:
        'We open a direct dialog with your team — in person when it matters — to understand goals, constraints, and success criteria.',
    },
    {
      step: '02',
      title: 'Define',
      description:
        'Requirements are documented collaboratively. Nothing moves forward until we are aligned on scope, timeline, and deliverables.',
    },
    {
      step: '03',
      title: 'Develop',
      description:
        'Agile sprints with regular check-ins keep you informed. You see progress early and often, not just at the finish line.',
    },
    {
      step: '04',
      title: 'Deliver & support',
      description:
        'Deployment, migration, and ongoing monitoring — we stay engaged so your investment continues to perform.',
    },
  ],
  about: {
    intro:
      'Java Genics LLC is a software company specializing in agentic software, tools for local businesses, cloud infrastructure support, migration, deployment, and custom application development.',
    team:
      'Led by Kevin Cleveland, a coder with 22 years of experience, our extended network of developers and testers brings decades of combined expertise to every engagement. We operate like a focused engineering team — agile, communicative, and obsessed with getting the details right.',
    travel:
      'Based in San Antonio, Texas, we frequently travel to meet clients in person, gather requirements on-site, and maintain the open dialog that keeps projects on track.',
  },
} as const

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
  { to: '/support', label: 'Support' },
] as const

export const footerLinks = [
  { to: '/privacy', label: 'Privacy Policy' },
  { to: '/terms', label: 'Terms of Service' },
  { to: '/support', label: 'Support' },
  { to: '/contact', label: 'Contact' },
] as const
