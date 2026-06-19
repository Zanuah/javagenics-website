import { PageHero } from '@/components/layout/PageHero'
import { Card, FeatureList } from '@/components/ui/Card'
import { Section, SectionHeader } from '@/components/ui/Section'
import { projects, projectsIntro } from '@/content/projects'

export function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Software we build and ship"
        description={projectsIntro}
      />

      <Section ariaLabelledBy="projects-list-heading">
        <div className="space-y-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              title={project.title}
              description={project.description}
              badge={project.status}
            >
              <FeatureList items={project.highlights} />
            </Card>
          ))}
        </div>
      </Section>

      <Section className="border-t border-navy-700/60 bg-navy-900/30" ariaLabelledBy="more-heading">
        <SectionHeader
          id="more-heading"
          title="Have a project in mind?"
          description="We take on select engagements where our expertise can create outsized value. Tell us what you are building."
        />
      </Section>
    </>
  )
}
