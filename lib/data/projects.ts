import { PersonalProject } from "../types"

export const personalProjects: PersonalProject[] = [
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
