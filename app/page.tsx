"use client"

import React from "react"
import Footer from "@/components/Footer"
import Section from "@/components/Section"
import ProjectCard from "@/components/ProjectCard"
import SkillCategory from "@/components/SkillCategory"
import CertificationCard from "@/components/CertificationCard"
import ExtraActivityCard from "@/components/ExtraActivityCard"
import {
  Briefcase,
  Book,
  Award as AwardIcon,
  Archive as ArchiveIcon,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Home() {
  const profileImageUrl =
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80&h=150"
  const initials = "NC"

  const personalProjects = [
    {
      title: "Cloud Cost Optimizer",
      description:
        "Uno strumento CLI per analizzare e suggerire ottimizzazioni dei costi su AWS, Azure e GCP. Sviluppato in Python con SDK specifici per cloud.",
      imageUrl:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60",
      tags: ["Python", "AWS", "Azure", "GCP", "CLI"],
      repoUrl: "#",
    },
    {
      title: "Serverless Data Pipeline",
      description:
        "Pipeline di dati ETL serverless su AWS Lambda e Kinesis per l'elaborazione di dati di streaming in tempo reale.",
      imageUrl:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60",
      tags: ["AWS Lambda", "Kinesis", "Serverless", "ETL"],
      liveUrl: "#",
      repoUrl: "#",
    },
    {
      title: "Kubernetes Home Lab",
      description:
        "Configurazione di un cluster Kubernetes on-premise per sperimentazione e apprendimento, utilizzando Raspberry Pi.",
      imageUrl:
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60",
      tags: ["Kubernetes", "Raspberry Pi", "Networking", "DevOps"],
      repoUrl: "#",
    },
  ]

  const education = [
    {
      degree: "Laurea Magistrale in Ingegneria Informatica",
      institution: "Politecnico di Milano",
      year: "2018 - 2020",
      description:
        "Specializzazione in Cloud Computing e Big Data. Tesi sull'orchestrazione di microservizi.",
    },
    {
      degree: "Laurea Triennale in Ingegneria Informatica",
      institution: "Università degli Studi di Bologna",
      year: "2015 - 2018",
      description: "Focus su programmazione, algoritmi e sistemi operativi.",
    },
  ]

  const certifications = [
    {
      name: "AWS Certified Solutions Architect - Associate",
      issuingBody: "Amazon Web Services",
      date: "Luglio 2021",
      credentialUrl: "#",
    },
    {
      name: "Google Cloud Certified - Professional Cloud Architect",
      issuingBody: "Google Cloud",
      date: "Marzo 2022",
      credentialUrl: "#",
    },
    {
      name: "Microsoft Certified: Azure Administrator Associate",
      issuingBody: "Microsoft",
      date: "Gennaio 2023",
    },
  ]

  const experience = [
    {
      role: "Senior Cloud Engineer",
      company: "Tech Solutions Inc.",
      period: "2022 - Presente",
      description:
        "Progettazione e implementazione di architetture cloud scalabili e resilienti su AWS e Azure. Automazione di processi CI/CD e gestione infrastruttura come codice (Terraform, Ansible).",
    },
    {
      role: "Cloud Engineer",
      company: "Innovatech Ltd.",
      period: "2020 - 2022",
      description:
        "Migrazione di applicazioni on-premise verso il cloud. Gestione e monitoraggio di servizi cloud, focus su sicurezza e ottimizzazione dei costi.",
    },
  ]

  const extraActivities = [
    {
      title: "Membro Attivo & Speaker",
      organization: "Google Developer Group - Milano",
      period: "2019 - Presente",
      description:
        "Organizzazione di eventi, workshop e presentazioni su tecnologie Cloud e DevOps. Contributo alla crescita della community tech locale.",
      link: "#",
    },
    {
      title: "Contributor Progetto Open Source",
      organization: "Awesome Kubernetes Tools",
      period: "2021 - Presente",
      description:
        "Manutenzione e aggiunta di nuove funzionalità a una popolare lista curata di strumenti per Kubernetes.",
      link: "#",
    },
  ]

  const skills = [
    {
      categoryName: "Cloud Platforms",
      skills: [
        {
          name: "Amazon Web Services (AWS)",
          level: "Advanced" as const,
        },
        { name: "Microsoft Azure", level: "Advanced" as const },
        {
          name: "Google Cloud Platform (GCP)",
          level: "Intermediate" as const,
        },
      ],
    },
    {
      categoryName: "DevOps & Automazione",
      skills: [
        { name: "Kubernetes", level: "Basic" as const },
        { name: "Docker", level: "Advanced" as const },
        { name: "Terraform", level: "Advanced" as const },
        { name: "Ansible", level: "Intermediate" as const },
        { name: "Jenkins / GitLab CI", level: "Advanced" as const },
      ],
    },
    {
      categoryName: "Linguaggi di Programmazione & Scripting",
      skills: [
        { name: "Python", level: "Advanced" as const },
        { name: "Go", level: "Intermediate" as const },
        { name: "Bash", level: "Advanced" as const },
        { name: "JavaScript/TypeScript", level: "Intermediate" as const },
      ],
    },
    {
      categoryName: "Database & Storage",
      skills: [
        { name: "PostgreSQL/MySQL", level: "Intermediate" as const },
        { name: "MongoDB", level: "Intermediate" as const },
        {
          name: "AWS S3 / Azure Blob Storage",
          level: "Advanced" as const,
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-brutalist-background">
      <main className="flex-grow">
        {/* Hero Section */}
        <section
          id="hero"
          className="bg-brutalist-primary text-brutalist-background py-20 md:py-32 px-4 sm:px-6 lg:px-8 text-center border-b-3 border-brutalist-border"
        >
          <div className="container mx-auto">
            <div className="flex flex-col items-center mb-8">
              <Avatar className="h-24 w-24 md:h-32 md:w-32 border-3 border-brutalist-border shadow-brutalist-lg mb-4">
                <AvatarImage src={profileImageUrl} alt="Nome Cognome" />
                <AvatarFallback className="bg-brutalist-background text-brutalist-primary font-bold text-4xl">
                  {initials}
                </AvatarFallback>
              </Avatar>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brutalist-background">
                NOME COGNOME
              </h2>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Cloud Engineer & DevOps Enthusiast
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Costruisco infrastrutture cloud robuste, scalabili e automatizzate
              per accelerare l'innovazione.
            </p>
            <a
              href="#projects"
              className="bg-brutalist-accent text-white hover:bg-opacity-80 font-bold py-3 px-8 border-3 border-brutalist-border shadow-brutalist hover:shadow-brutalist-hover transition-shadow duration-200 text-lg"
            >
              Scopri i Miei Progetti
            </a>
          </div>
        </section>

        {/* About Section */}
        <Section id="about" title="Chi Sono">
          <div className="max-w-3xl mx-auto text-center text-md md:text-lg leading-relaxed space-y-6">
            <p>
              Sono un Cloud Engineer con una passione per l'automazione,
              l'infrastruttura come codice e le architetture serverless. Ho X
              anni di esperienza nella progettazione, implementazione e gestione
              di soluzioni cloud complesse su piattaforme come AWS, Azure e GCP.
            </p>
            <p>
              Il mio obiettivo è aiutare le aziende a sfruttare appieno il
              potenziale del cloud per migliorare l'efficienza, ridurre i costi
              e accelerare il time-to-market. Credo fermamente nella cultura
              DevOps e nell'importanza della collaborazione tra team di sviluppo
              e operations.
            </p>
            <p>
              Quando non sono immerso in console cloud o file YAML, mi piace
              esplorare nuove tecnologie, contribuire a progetti open-source e
              dedicarmi all'iRacing.
            </p>
          </div>
        </Section>

        {/* Education Section */}
        <Section
          id="education"
          title="Formazione"
          className="bg-brutalist-secondary text-brutalist-background"
        >
          <div className="max-w-3xl mx-auto space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="p-6 border-3 border-brutalist-border shadow-brutalist bg-brutalist-background text-brutalist-foreground"
              >
                {" "}
                {/* Testo foreground su background */}
                <div className="flex items-center mb-2">
                  <Book size={28} className="mr-3 text-brutalist-primary" />
                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                </div>
                <p className="text-lg font-medium text-brutalist-accent">
                  {edu.institution}
                </p>
                <p className="text-sm text-muted-foreground mb-2">{edu.year}</p>{" "}
                {/* Usiamo text-muted-foreground */}
                <p className="text-sm">{edu.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Certifications Section */}
        <Section id="certifications" title="Certificazioni">
          <div className="flex justify-center mb-4">
            <AwardIcon size={32} className="text-brutalist-primary" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <CertificationCard key={index} {...cert} />
            ))}
          </div>
        </Section>

        {/* Experience Section */}
        <Section id="experience" title="Esperienze Lavorative">
          <div className="max-w-3xl mx-auto space-y-8">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="p-6 border-3 border-brutalist-border shadow-brutalist"
              >
                <div className="flex items-center mb-2">
                  <Briefcase
                    size={28}
                    className="mr-3 text-brutalist-primary"
                  />
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                </div>
                <p className="text-lg font-medium text-brutalist-accent">
                  {exp.company}
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  {exp.period}
                </p>{" "}
                {/* Usiamo text-muted-foreground */}
                <p className="text-sm">{exp.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Projects Section */}
        <Section
          id="projects"
          title="Progetti Personali"
          className="bg-brutalist-accent text-brutalist-background"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {personalProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </Section>

        {/* Extra Activities Section */}
        <Section
          id="extra-activities"
          title="Attività e Community"
          className="bg-brutalist-secondary text-brutalist-background"
        >
          <div className="flex justify-center mb-4">
            <ArchiveIcon size={32} className="text-brutalist-accent" />{" "}
            {/* Icona per la sezione */}
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {extraActivities.map((activity, index) => (
              <ExtraActivityCard key={index} {...activity} />
            ))}
          </div>
        </Section>

        {/* Skills Section */}
        <Section id="skills" title="Tecnologie e Competenze">
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillCat) => (
              <SkillCategory key={skillCat.categoryName} {...skillCat} />
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
