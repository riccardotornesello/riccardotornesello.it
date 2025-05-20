import React from "react"
import { Archive } from "lucide-react"

interface ExtraActivityCardProps {
  title: string
  organization: string
  period: string
  description: string
  link?: string
}

const ExtraActivityCard: React.FC<ExtraActivityCardProps> = ({
  title,
  organization,
  period,
  description,
  link,
}) => {
  return (
    <div className="p-6 border-3 border-brutalist-border shadow-brutalist bg-brutalist-background text-brutalist-foreground">
      <div className="flex items-center mb-3">
        <Archive size={24} className="mr-3 text-brutalist-primary" />
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
      <p className="text-md font-medium text-brutalist-accent">
        {organization}
      </p>
      <p className="text-sm text-muted-foreground mb-2">{period}</p>
      <p className="text-sm mb-3">{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-brutalist-background bg-brutalist-primary hover:bg-opacity-80 px-3 py-1.5 border-2 border-brutalist-border shadow-brutalist-sm text-xs font-medium"
        >
          Maggiori Info
        </a>
      )}
    </div>
  )
}

export default ExtraActivityCard
