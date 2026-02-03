import { Terminal, Cloud, Server, Database, GitBranch } from "lucide-react";

export const data = {
  websiteName: "Riccardo Tornesello",
  firstName: "Riccardo",
  lastName: "Tornesello",
  jobTitle: "Cloud Engineer & DevOps Architect",
  summary: "I build things for the web",
  linkedIn: "https://www.linkedin.com/in/riccardotornesello/",
  github: "https://github.com/riccardotornesello",
  email: null,
  cv: null,
  twitter: null,
  skills: [
    {
      name: "AWS",
      icon: Cloud,
      level: 70,
    },
    {
      name: "GCP",
      icon: Cloud,
      level: 70,
    },
    {
      name: "Docker",
      icon: Server,
      level: 90,
    },
    {
      name: "Kubernetes",
      icon: Server,
      level: 70,
    },
    {
      name: "Terraform",
      icon: Database,
      level: 65,
    },
    {
      name: "Linux",
      icon: Terminal,
      level: 85,
    },
    {
      name: "Python",
      icon: GitBranch,
      level: 90,
    },
    {
      name: "JS/TS",
      icon: GitBranch,
      level: 90,
    },
    {
      name: "Go",
      icon: GitBranch,
      level: 75,
    },
  ],
  projects: [
    {
      title: "Portainer CLI Deployer",
      description: "CLI tool to easily deploy a container stacks to Portainer",
      tags: ["Python", "Docker", "DevOps"],
      featured: true,
      github: "https://github.com/riccardotornesello/portainer-cli-deployer",
    },
    {
      title: "IaC Cyberrange Generator",
      description: "Infrastructure as Code cyberrange generation tool",
      tags: ["Terraform", "Ansible", "Python", "Cybersecurity"],
      featured: true,
      github: "https://github.com/riccardotornesello/iac-cyberrange-generator",
    },
    {
      title: "OS161 Demand Paging",
      description: "Operative system based on os161 with demand paging",
      tags: ["C", "Operating Systems"],
      featured: false,
      github: "https://github.com/riccardotornesello/os161-demand-paging",
    },
    {
      title: "ShareTelemetry iRacing Scraper",
      description:
        "Event-driven scraper for iRacing telemetry data to ShareTelemetry",
      tags: ["Go", "GCP"],
      featured: false,
      github:
        "https://github.com/riccardotornesello/sharetelemetry-iracing-scraper",
      website: "https://results.sharedtelemetry.com/",
    },
  ],
};
