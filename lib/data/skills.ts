import { SkillLevel, SkillsGroup } from "../types"

export const skills: SkillsGroup[] = [
  {
    name: "Cloud Platforms",
    skills: [
      {
        name: "Amazon Web Services (AWS)",
        level: SkillLevel.Advanced,
      },
      { name: "Microsoft Azure", level: SkillLevel.Advanced },
      {
        name: "Google Cloud Platform (GCP)",
        level: SkillLevel.Intermediate,
      },
    ],
  },
  {
    name: "DevOps & Automazione",
    skills: [
      { name: "Kubernetes", level: SkillLevel.Basic },
      { name: "Docker", level: SkillLevel.Advanced },
      { name: "Terraform", level: SkillLevel.Advanced },
      { name: "Ansible", level: SkillLevel.Intermediate },
      { name: "Jenkins / GitLab CI", level: SkillLevel.Advanced },
    ],
  },
  {
    name: "Linguaggi di Programmazione & Scripting",
    skills: [
      { name: "Python", level: SkillLevel.Advanced },
      { name: "Go", level: SkillLevel.Intermediate },
      { name: "Bash", level: SkillLevel.Advanced },
      { name: "JavaScript/TypeScript", level: SkillLevel.Intermediate },
    ],
  },
  {
    name: "Database & Storage",
    skills: [
      { name: "PostgreSQL/MySQL", level: SkillLevel.Intermediate },
      { name: "MongoDB", level: SkillLevel.Intermediate },
      {
        name: "AWS S3 / Azure Blob Storage",
        level: SkillLevel.Advanced,
      },
    ],
  },
]
