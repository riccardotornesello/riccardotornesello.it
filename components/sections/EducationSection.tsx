import Section from "@/components/Section"
import { Education } from "@/lib/types"
import { EducationCard } from "../EducationCard"

export interface EducationSectionProps {
  education: Education[]
}

export function EducationSection({ education }: EducationSectionProps) {
  return (
    <Section
      id="education"
      title="Formazione"
      className="bg-brutalist-secondary text-brutalist-background"
    >
      <div className="max-w-3xl mx-auto space-y-8">
        {education.map((edu, index) => (
          <EducationCard key={index} education={edu} />
        ))}
      </div>
    </Section>
  )
}
