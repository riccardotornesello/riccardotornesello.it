import Section from "@/components/Section"
import { ExtraActivity } from "@/lib/types"
import ExtraActivityCard from "@/components/ExtraActivityCard"
import { Archive as ArchiveIcon } from "lucide-react"

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
    >
      <div className="flex justify-center mb-4">
        <ArchiveIcon size={32} className="text-brutalist-accent" />
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {extraActivities.map((activity, index) => (
          <ExtraActivityCard key={index} activity={activity} />
        ))}
      </div>
    </Section>
  )
}
