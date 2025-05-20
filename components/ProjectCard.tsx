import React from "react"
import { Github, Link as LinkIcon } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  imageUrl?: string
  tags: string[]
  liveUrl?: string
  repoUrl?: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  tags,
  liveUrl,
  repoUrl,
}) => {
  return (
    <div className="bg-brutalist-background border-3 border-brutalist-border p-6 shadow-brutalist hover:shadow-brutalist-hover transition-shadow duration-200">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover mb-4 border-3 border-brutalist-border"
          onError={(e) =>
            (e.currentTarget.src =
              "https/images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80")
          } // Fallback
        />
      )}
      <h3 className="text-2xl font-bold mb-2 text-brutalist-foreground">
        {title}
      </h3>
      <p className="text-brutalist-foreground mb-4 text-sm leading-relaxed">
        {description}
      </p>
      <div className="mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-block bg-brutalist-secondary text-brutalist-background text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 border-2 border-brutalist-border shadow-brutalist-sm"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex space-x-4">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-brutalist-background bg-brutalist-primary hover:bg-opacity-80 px-4 py-2 border-3 border-brutalist-border shadow-brutalist-sm hover:shadow-brutalist-sm-hover transition-shadow duration-200 text-sm font-medium"
          >
            <LinkIcon size={16} className="mr-2" /> Live Demo
          </a>
        )}
        {repoUrl && (
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-brutalist-background bg-brutalist-accent hover:bg-opacity-80 px-4 py-2 border-3 border-brutalist-border shadow-brutalist-sm hover:shadow-brutalist-sm-hover transition-shadow duration-200 text-sm font-medium"
          >
            <Github size={16} className="mr-2" /> Repository
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
