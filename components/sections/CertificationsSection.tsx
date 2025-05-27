import { Award as AwardIcon } from "lucide-react"
import Section from "@/components/Section"
import CertificationCard from "@/components/CertificationCard"
import { Certification } from "@/lib/types"
import { Link } from "@/components/ui/link"

export interface CertificationsSectionProps {
  certifications: Certification[]
  credlyUrl: string
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({
  certifications,
  credlyUrl,
}) => {
  return (
    <Section id="certifications" title="Skill badges" icon={AwardIcon}>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <CertificationCard key={index} certification={cert} />
        ))}
      </div>

      <div className="mt-6 text-center w-full">
        <Link href={credlyUrl}>Check on Credly</Link>
      </div>
    </Section>
  )
}
