import React from "react"
import Footer from "@/components/Footer"
import { Hero } from "@/components/sections/Hero"
import { education } from "@/lib/data/education"
import { experience } from "@/lib/data/experience"
import { personalProjects } from "@/lib/data/projects"
import { extraActivities } from "@/lib/data/activities"
import { skills } from "@/lib/data/skills"
import { AboutSection } from "@/components/sections/AboutSection"
import { EducationSection } from "@/components/sections/EducationSection"
import {
  aboutMe,
  title,
  name,
  description,
  credlyUrl,
  githubUrl,
  linkedinUrl,
  email,
} from "@/lib/data/about"
import { CertificationsSection } from "@/components/sections/CertificationsSection"
import { ExperienceSection } from "@/components/sections/ExperienceSection"
import { ProjectsSection } from "@/components/sections/ProjectsSection"
import { ActivitiesSection } from "@/components/sections/ActivitiesSection"
import { SkillsSection } from "@/components/sections/SkillsSection"
import { parseCredlyCertifications } from "@/lib/credly"
import Avatar from "@/lib/assets/avatar.webp"

export default async function Home() {
  const credlyBadges = await parseCredlyCertifications()

  return (
    <div className="min-h-screen flex flex-col bg-brutalist-background">
      <main className="flex-grow">
        <Hero
          profileImageUrl={Avatar.src}
          title={title}
          name={name}
          description={description}
        />
        {aboutMe.length > 0 && <AboutSection aboutMe={aboutMe} />}
        <EducationSection education={education} />
        <CertificationsSection
          certifications={credlyBadges}
          credlyUrl={credlyUrl}
        />
        <ExperienceSection experience={experience} />
        <ProjectsSection personalProjects={personalProjects} />
        <ActivitiesSection extraActivities={extraActivities} />
        <SkillsSection skills={skills} />
      </main>
      <Footer
        name={name}
        githubUrl={githubUrl}
        linkedinUrl={linkedinUrl}
        email={email}
      />
    </div>
  )
}
