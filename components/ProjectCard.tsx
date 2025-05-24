import React from "react"
import { Github, Link as LinkIcon } from "lucide-react"
import { PersonalProject } from "@/lib/types"
import { Link } from "@/components/ui/link"

interface ProjectCardProps {
  project: PersonalProject
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-brutalist-background border-3 border-brutalist-border p-6 shadow-brutalist hover:shadow-brutalist-hover transition-shadow duration-200">
      {project.imageUrl && (
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-48 object-cover mb-4 border-3 border-brutalist-border"
        />
      )}

      <h3 className="text-2xl font-bold mb-2 text-brutalist-foreground">
        {project.title}
      </h3>

      <p className="text-brutalist-foreground mb-4 text-sm leading-relaxed">
        {project.description}
      </p>

      <div className="mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="inline-block bg-brutalist-secondary text-brutalist-background text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 border-2 border-brutalist-border shadow-brutalist-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex space-x-4">
        {project.liveUrl && (
          <Link
            size="sm"
            className="inline-flex items-center"
            variant="primary"
            href={project.liveUrl}
          >
            <LinkIcon size={16} className="mr-2" /> Live Demo
          </Link>
        )}
        {project.repoUrl && (
          <Link
            size="sm"
            className="inline-flex items-center"
            variant="accent"
            href={project.repoUrl}
          >
            <Github size={16} className="mr-2" /> Repository
          </Link>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
