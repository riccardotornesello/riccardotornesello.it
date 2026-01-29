import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Cloud Migration Platform",
    description: "Automated multi-cloud migration tool with zero-downtime deployment capabilities. Built with Terraform, Ansible, and custom Python orchestration.",
    tags: ["AWS", "Terraform", "Python", "Docker"],
    featured: true,
  },
  {
    title: "Kubernetes Cluster Manager",
    description: "Self-healing K8s infrastructure with auto-scaling, monitoring, and GitOps workflows for enterprise deployments.",
    tags: ["Kubernetes", "Helm", "ArgoCD", "Prometheus"],
    featured: true,
  },
  {
    title: "Infrastructure as Code Framework",
    description: "Modular IaC framework supporting AWS, Azure, and GCP with unified configuration language and state management.",
    tags: ["Terraform", "Pulumi", "Go", "TypeScript"],
    featured: false,
  },
  {
    title: "Security Compliance Scanner",
    description: "Automated cloud security posture management tool scanning for misconfigurations and compliance violations.",
    tags: ["Python", "AWS Security Hub", "Azure Sentinel"],
    featured: false,
  },
];

const ProjectCard = ({ 
  title, 
  description, 
  tags, 
  featured 
}: { 
  title: string; 
  description: string; 
  tags: string[]; 
  featured: boolean;
}) => (
  <div className={`brutal-box brutal-box-hover p-6 ${featured ? 'md:col-span-2' : ''}`}>
    <div className="flex items-start justify-between mb-4">
      <h3 className="font-sans font-bold text-xl text-foreground">{title}</h3>
      <div className="flex gap-2">
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Github className="w-4 h-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <ExternalLink className="w-4 h-4" />
        </Button>
      </div>
    </div>
    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span 
          key={tag}
          className="px-3 py-1 text-xs font-mono uppercase tracking-wider border-2 border-accent text-accent bg-accent/10"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-secondary/30 relative">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="max-w-6xl mx-auto relative">
        <div className="mb-12">
          <span className="text-accent font-mono text-sm">{"// 03"}</span>
          <h2 className="brutal-heading text-4xl md:text-5xl mt-2 brutal-text-glow text-primary">
            PROJECTS
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
