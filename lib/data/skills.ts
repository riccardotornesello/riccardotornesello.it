import { SkillLevel, SkillsGroup } from "../types"

export const skills: SkillsGroup[] = [
  {
    name: "Cloud Platforms",
    skills: [
      {
        name: "Google Cloud Platform (GCP)",
        level: SkillLevel.Intermediate,
      },
      {
        name: "Amazon Web Services (AWS)",
        level: SkillLevel.Intermediate,
      },
    ],
  },
  {
    name: "DevOps & Automazione",
    skills: [
      { name: "Docker", level: SkillLevel.Advanced },
      { name: "Terraform", level: SkillLevel.Advanced },
      { name: "Jenkins / GitLab CI", level: SkillLevel.Intermediate },
      { name: "Ansible", level: SkillLevel.Intermediate },
      { name: "Kubernetes", level: SkillLevel.Basic },
    ],
  },
  {
    name: "Linguaggi di Programmazione & Scripting",
    skills: [
      { name: "Python", level: SkillLevel.Advanced },
      { name: "JavaScript/TypeScript", level: SkillLevel.Advanced },
      { name: "Go", level: SkillLevel.Intermediate },
      { name: "Bash", level: SkillLevel.Intermediate },
      { name: "C/C++", level: SkillLevel.Basic },
    ],
  },
  {
    name: "Database & Storage",
    skills: [
      { name: "PostgreSQL/MySQL", level: SkillLevel.Advanced },
      { name: "MongoDB", level: SkillLevel.Intermediate },
      {
        name: "AWS S3 / Azure Blob Storage",
        level: SkillLevel.Intermediate,
      },
    ],
  },
]
