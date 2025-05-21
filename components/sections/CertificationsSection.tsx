import Section from "@/components/Section"
import CertificationCard from "@/components/CertificationCard"
import { Award as AwardIcon } from "lucide-react"
import { Certification } from "@/lib/types"
import { credlyUrl } from "@/lib/data/social"

export interface CertificationsSectionProps {
  certifications: Certification[]
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({
  certifications,
}) => {
  return (
    <Section id="certifications" title="Skill badges" icon={AwardIcon}>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <CertificationCard key={index} certification={cert} />
        ))}
      </div>

      <div className="mt-6 text-center w-full">
        <a
          href={credlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brutalist-accent text-white hover:bg-opacity-80 font-bold py-3 px-8 border-3 border-brutalist-border shadow-brutalist hover:shadow-brutalist-hover transition-shadow duration-200 text-sm"
        >
          Check on Credly
        </a>
      </div>
    </Section>
  )
}
