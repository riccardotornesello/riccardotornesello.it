import React from "react"
import { Award } from "lucide-react"

interface CertificationCardProps {
  name: string
  issuingBody: string
  date?: string
  credentialUrl?: string
}

const CertificationCard: React.FC<CertificationCardProps> = ({
  name,
  issuingBody,
  date,
  credentialUrl,
}) => {
  return (
    <div className="p-6 border-3 border-brutalist-border shadow-brutalist bg-brutalist-background text-brutalist-foreground">
      <div className="flex items-center mb-3">
        <Award size={24} className="mr-3 text-brutalist-primary" />
        <h3 className="text-lg font-bold">{name}</h3>
      </div>
      <p className="text-md font-medium text-brutalist-accent mb-1">
        {issuingBody}
      </p>
      {date && <p className="text-sm text-muted-foreground mb-2">{date}</p>}
      {credentialUrl && (
        <a
          href={credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-brutalist-background bg-brutalist-accent hover:bg-opacity-80 px-3 py-1.5 border-2 border-brutalist-border shadow-brutalist-sm text-xs font-medium"
        >
          Vedi Credenziale
        </a>
      )}
    </div>
  )
}

export default CertificationCard
