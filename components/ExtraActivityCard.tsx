import React from "react"
import { Archive, LinkIcon } from "lucide-react"
import { ExtraActivity } from "@/lib/types"
import { Link } from "@/components/ui/link"

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
        <Link
          href={activity.link}
          size="xs"
          className="inline-flex items-center"
          variant="primary"
        >
          <LinkIcon size={16} className="mr-2" />
          More info
        </Link>
      )}
    </div>
  )
}

export default ExtraActivityCard
