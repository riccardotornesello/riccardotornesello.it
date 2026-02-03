import {
  Cloud,
  Server,
  Database,
  Shield,
  Terminal,
  GitBranch,
} from "lucide-react";
import { type FC } from "react";
import { Section } from "./section";
import { data } from "@/lib/data";

const SkillBar = ({
  name,
  level,
  icon: Icon,
}: {
  name: string;
  level: number;
  icon: typeof Cloud;
}) => (
  <div className="brutal-box brutal-box-hover p-4 bg-card">
    <div className="flex items-center gap-3 mb-3">
      <Icon className="w-5 h-5 text-accent" />
      <span className="font-bold text-sm uppercase tracking-wider">{name}</span>
      <span className="ml-auto text-primary font-mono text-sm">{level}%</span>
    </div>
    <div className="h-3 bg-secondary border-2 border-primary relative overflow-hidden">
      <div
        className="h-full bg-linear-to-r from-primary to-accent transition-all duration-500"
        style={{ width: `${level}%` }}
      />
    </div>
  </div>
);

export const SkillsSection: FC = () => {
  return (
    <section id="skills" className="py-20 px-6 relative">
      <Section title="SKILLS" index="03">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.skills.map((skill) => (
            <SkillBar key={skill.name} {...skill} />
          ))}
        </div>
      </Section>
    </section>
  );
};
