import React from "react"
import { Archive } from "lucide-react"
import { ExtraActivity } from "@/lib/types"

interface ExtraActivityCardProps {
  activity: ExtraActivity
}

const ExtraActivityCard: React.FC<ExtraActivityCardProps> = ({ activity }) => {
  return (
    <div className="p-6 border-3 border-brutalist-border shadow-brutalist bg-brutalist-background text-brutalist-foreground">
      <div className="flex items-center mb-3">
        <Archive size={24} className="mr-3 text-brutalist-primary" />
        <h3 className="text-lg font-bold">{activity.title}</h3>
      </div>

      <p className="text-md font-medium text-brutalist-accent">
        {activity.organization}
      </p>

      <p className="text-sm text-muted-foreground mb-2">{activity.period}</p>

      <p className="text-sm mb-3">{activity.description}</p>

      {activity.link && (
        <a
          href={activity.link}
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
