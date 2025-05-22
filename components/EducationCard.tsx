import { Education } from "@/lib/types"
import { Book } from "lucide-react"

export interface EducationCardProps {
  education: Education
}

export const EducationCard: React.FC<EducationCardProps> = ({ education }) => {
  return (
    <div className="p-6 border-3 border-brutalist-border shadow-brutalist bg-brutalist-background text-brutalist-foreground">
      <div className="flex items-center mb-2">
        <Book size={28} className="mr-3 text-brutalist-primary" />
        <h3 className="text-xl font-bold">{education.degree}</h3>
      </div>

      <p className="text-lg font-medium text-brutalist-accent">
        {education.institution}
      </p>

      <p className="text-sm text-muted-foreground mb-2">{education.year}</p>

      {education.description && (
        <p className="text-sm">{education.description}</p>
      )}
    </div>
  )
}
