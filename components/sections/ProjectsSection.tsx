import Section from "@/components/Section"
import { PersonalProject } from "@/lib/types"
import ProjectCard from "@/components/ProjectCard"

export interface ProjectsSectionProps {
  personalProjects: PersonalProject[]
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  personalProjects,
}) => {
  return (
    <Section
      id="projects"
      title="Progetti Personali"
      className="bg-brutalist-accent text-brutalist-background"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {personalProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  )
}
