import Section from "@/components/Section"

export interface AboutSectionProps {
  aboutMe: string[]
}

export const AboutSection: React.FC<AboutSectionProps> = ({ aboutMe }) => {
  return (
    <Section id="about" title="About me">
      <div className="max-w-3xl mx-auto text-center text-md md:text-lg leading-relaxed space-y-6">
        {aboutMe.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </Section>
  )
}
