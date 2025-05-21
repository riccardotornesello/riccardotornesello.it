import Section from "@/components/Section"
import CertificationCard from "@/components/CertificationCard"
import { Award as AwardIcon } from "lucide-react"
import { Certification } from "@/lib/types"

export interface CertificationsSectionProps {
  certifications: Certification[]
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({
  certifications,
}) => {
  return (
    <Section id="certifications" title="Certificazioni">
      <div className="flex justify-center mb-4">
        <AwardIcon size={32} className="text-brutalist-primary" />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <CertificationCard key={index} certification={cert} />
        ))}
      </div>
    </Section>
  )
}
