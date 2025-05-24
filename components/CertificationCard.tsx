import React from "react"
import { Award } from "lucide-react"
import { Certification } from "@/lib/types"
import { Link } from "@/components/ui/link"

interface CertificationCardProps {
  certification: Certification
}

const CertificationCard: React.FC<CertificationCardProps> = ({
  certification,
}) => {
  return (
    <div className="p-6 border-3 border-brutalist-border shadow-brutalist bg-white text-brutalist-foreground">
      <div className="flex items-center mb-3">
        {certification.pictureUrl ? (
          <img
            src={certification.pictureUrl}
            alt={certification.name}
            className="w-20 mr-2"
          />
        ) : (
          <Award size={24} className="mr-3 text-brutalist-primary" />
        )}
        <h3 className="text-lg font-bold">{certification.name}</h3>
      </div>

      <p className="text-md font-medium text-brutalist-accent mb-1">
        {certification.issuingBody}
      </p>

      {certification.date && (
        <p className="text-sm text-muted-foreground mb-2">
          {certification.date}
        </p>
      )}

      {certification.credentialUrl && (
        <Link href={certification.credentialUrl} size="xs">
          See credential
        </Link>
      )}
    </div>
  )
}

export default CertificationCard
