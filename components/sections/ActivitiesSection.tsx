import { Archive as ArchiveIcon } from "lucide-react"
import Section from "@/components/Section"
import { ExtraActivity } from "@/lib/types"
import ExtraActivityCard from "@/components/ExtraActivityCard"

export interface ActivitiesSectionProps {
  extraActivities: ExtraActivity[]
}

export const ActivitiesSection: React.FC<ActivitiesSectionProps> = ({
  extraActivities,
}) => {
  return (
    <Section
      id="extra-activities"
      title="Attività e Community"
      className="bg-brutalist-secondary text-brutalist-background"
      icon={ArchiveIcon}
    >
      <div className="grid md:grid-cols-2 gap-8">
        {extraActivities.map((activity, index) => (
          <ExtraActivityCard key={index} activity={activity} />
        ))}
      </div>
    </Section>
  )
}
