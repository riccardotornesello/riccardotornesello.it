import Section from "@/components/Section"
import { Experience } from "@/lib/types"
import { Briefcase } from "lucide-react"

export interface ExperienceSectionProps {
  experience: Experience[]
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  experience,
}) => {
  return (
    <Section id="experience" title="Esperienze Lavorative">
      <div className="max-w-3xl mx-auto space-y-8">
        {experience.map((exp, index) => (
          <div
            key={index}
            className="p-6 border-3 border-brutalist-border shadow-brutalist"
          >
            <div className="flex items-center mb-2">
              <Briefcase size={28} className="mr-3 text-brutalist-primary" />
              <h3 className="text-xl font-bold">{exp.role}</h3>
            </div>
            <p className="text-lg font-medium text-brutalist-accent">
              {exp.company}
            </p>
            <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
            <p className="text-sm">{exp.description}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
