import { Cloud, Server, Database, ArrowDown, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { type FC } from "react";

export const HeroSection: FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-pattern" />

      {/* Floating elements */}
      <div className="absolute top-32 left-10 brutal-box p-4 animate-float opacity-20 hidden lg:block">
        <Cloud className="w-8 h-8 text-primary" />
      </div>
      <div
        className="absolute bottom-40 right-16 brutal-box-accent p-4 animate-float opacity-20 hidden lg:block"
        style={{ animationDelay: "1s" }}
      >
        <Server className="w-8 h-8 text-accent" />
      </div>
      <div
        className="absolute top-1/2 right-32 brutal-box p-4 animate-float opacity-20 hidden lg:block"
        style={{ animationDelay: "2s" }}
      >
        <Database className="w-8 h-8 text-primary" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Terminal-style intro */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 brutal-box text-sm font-mono">
          <Terminal className="w-4 h-4 text-accent" />
          <span className="text-muted-foreground">~/portfolio $</span>
          <span className="text-primary">whoami</span>
          <span className="terminal-cursor">_</span>
        </div>

        <h1 className="brutal-heading text-5xl md:text-7xl lg:text-8xl mb-4">
          <span className="text-foreground">MARCO</span>
          <br />
          <span className="text-gradient-primary brutal-text-glow">ROSSI</span>
        </h1>

        <div className="brutal-box inline-block px-6 py-3 mb-8">
          <p className="font-mono text-lg md:text-xl uppercase tracking-widest text-primary">
            Cloud Engineer & DevOps Architect
          </p>
        </div>

        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Progetto e costruisco infrastrutture cloud scalabili, automatizzate e
          sicure. 5+ anni di esperienza con{" "}
          <span className="text-accent">AWS</span>,{" "}
          <span className="text-accent">Kubernetes</span>, e{" "}
          <span className="text-accent">Terraform</span>.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button variant="default" size="lg">
            Vedi Progetti
          </Button>
          <Button variant="outline" size="lg">
            Contattami
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-primary" />
      </div>
    </section>
  );
};
