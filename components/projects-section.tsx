import { ExternalLink, Github, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { type FC } from "react";
import { Section } from "./section";
import { data } from "@/lib/data";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  featured: boolean;
  github?: string;
  website?: string;
}

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  featured,
  github,
  website,
}) => (
  <div
    className={`brutal-box brutal-box-hover p-6 ${featured ? "md:col-span-2" : ""}`}
  >
    <div className="flex items-start justify-between mb-4">
      <h3 className="font-sans font-bold text-xl text-foreground">{title}</h3>
      <div className="flex gap-2">
        {github && (
          <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
            <Link href={github} target="_blank">
              <Github className="w-4 h-4" />
            </Link>
          </Button>
        )}

        {website && (
          <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
            <Link href={website} target="_blank">
              <ExternalLink className="w-4 h-4" />
            </Link>
          </Button>
        )}
      </div>
    </div>
    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
      {description}
    </p>
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

export const ProjectsSection: FC = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-secondary/30 relative">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <Section className="relative" title="PROJECTS" index="02">
        {data.github && (
          <div className="flex items-center gap-2 mb-8 text-muted-foreground font-mono text-sm">
            <Link
              href={data.github}
              target="_blank"
              className="brutal-box-hover p-3 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Github className="w-5 h-5" />
            </Link>

            <span>~/github $ view_all_my_projects</span>
            <span className="terminal-cursor">_</span>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t-2 border-primary/30">
          {data.projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </Section>
    </section>
  );
};
