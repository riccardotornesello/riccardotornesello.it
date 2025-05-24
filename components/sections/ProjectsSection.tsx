import Section from "@/components/Section"
import { PersonalProject } from "@/lib/types"
import ProjectCard from "@/components/ProjectCard"

export interface ProjectsSectionProps {
  personalProjects: PersonalProject[]
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  personalProjects,
}) => {
  const getGridColumns = () => {
    if (personalProjects.length === 1) return "grid-cols-1"
    if (personalProjects.length === 2) return "grid-cols-2"
    return "grid-cols-3"
  }

  return (
    <Section
      id="projects"
      title="Personal Projects"
      className="bg-brutalist-accent text-brutalist-background"
    >
      <div className={`grid ${getGridColumns()} gap-8 justify-items-center`}>
        {personalProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  )
}
