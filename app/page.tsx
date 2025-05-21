"use client"

import React from "react"
import Footer from "@/components/Footer"
import { Hero } from "@/components/sections/Hero"
import { education } from "@/lib/data/education"
import { experience } from "@/lib/data/experience"
import { personalProjects } from "@/lib/data/projects"
import { extraActivities } from "@/lib/data/activities"
import { skills } from "@/lib/data/skills"
import { certifications } from "@/lib/data/certifications"
import { AboutSection } from "@/components/sections/AboutSection"
import { EducationSection } from "@/components/sections/EducationSection"
import { aboutMe, title, name, description } from "@/lib/data/about"
import { CertificationsSection } from "@/components/sections/CertificationsSection"
import { ExperienceSection } from "@/components/sections/ExperienceSection"
import { ProjectsSection } from "@/components/sections/ProjectsSection"
import { ActivitiesSection } from "@/components/sections/ActivitiesSection"
import { SkillsSection } from "@/components/sections/SkillsSection"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-brutalist-background">
      <main className="flex-grow">
        <Hero
          profileImageUrl="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80&h=150"
          title={title}
          name={name}
          description={description}
        />
        <AboutSection aboutMe={aboutMe} />
        <EducationSection education={education} />
        <CertificationsSection certifications={certifications} />
        <ExperienceSection experience={experience} />
        <ProjectsSection personalProjects={personalProjects} />
        <ActivitiesSection extraActivities={extraActivities} />
        <SkillsSection skills={skills} />
      </main>
      <Footer />
    </div>
  )
}
