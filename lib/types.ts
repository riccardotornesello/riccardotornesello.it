export enum SkillLevel {
  Advanced = "Advanced",
  Intermediate = "Intermediate",
  Basic = "Basic",
}

export interface PersonalProject {
  title: string
  description: string
  imageUrl: string
  tags: string[]
  repoUrl?: string
  liveUrl?: string
}

export interface Education {
  degree: string
  institution: string
  year: string
  description: string
}

export interface Certification {
  name: string
  issuingBody: string
  date?: string
  credentialUrl?: string
}

export interface Experience {
  role: string
  company: string
  period: string
  description: string
}

export interface ExtraActivity {
  title: string
  organization: string
  period: string
  description: string
  link?: string
}

export interface Skill {
  name: string
  level: SkillLevel
}

export interface SkillsGroup {
  name: string
  skills: Skill[]
}
