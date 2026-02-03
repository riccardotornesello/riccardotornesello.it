import { Mail, Github, Linkedin, Twitter, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { type FC } from "react";
import Link from "next/link";
import { Section } from "./section";

export const ContactSection: FC = () => {
  return (
    <section id="contact" className="py-20 px-6 relative">
      <Section title="GET IN TOUCH" index="04">
        <div className="brutal-box p-8 md:p-12">
          <div className="flex items-center gap-2 mb-6 text-muted-foreground font-mono text-sm">
            <Terminal className="w-4 h-4 text-accent" />
            <span>~/contact $ ready_to_collaborate</span>
            <span className="terminal-cursor">_</span>
          </div>

          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            Pronto a portare la tua infrastruttura cloud al livello successivo?
            Parliamo di come posso aiutarti a costruire sistemi scalabili,
            sicuri e automatizzati.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <Button variant="default" size="lg">
              <Mail className="w-5 h-5 mr-2" />
              Contattami
            </Button>
            <Button variant="outline" size="lg">
              Scarica CV
            </Button>
          </div>

          <div className="flex gap-4 pt-6 border-t-2 border-primary/30">
            <Link
              href="#"
              className="brutal-box-hover p-3 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="brutal-box-hover p-3 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="brutal-box-hover p-3 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </Link>
          </div>
        </div>

        <footer className="mt-12 text-center">
          <p className="text-muted-foreground font-mono text-sm">
            {"</"} Built with passion & caffeine {"/>"}
          </p>
          <p className="text-muted-foreground/50 font-mono text-xs mt-2">
            © 2026 — All rights reserved
          </p>
        </footer>
      </Section>
    </section>
  );
};
