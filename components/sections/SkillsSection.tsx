import Section from "@/components/Section"
import { SkillsGroup } from "@/lib/types"
import SkillCategory from "@/components/SkillCategory"

export interface SkillsSectionProps {
  skills: SkillsGroup[]
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  return (
    <Section id="skills" title="Tecnologie e Competenze">
      <div className="grid md:grid-cols-2 gap-8">
        {skills.map((skillCat) => (
          <SkillCategory key={skillCat.name} skillsGroup={skillCat} />
        ))}
      </div>
    </Section>
  )
}
