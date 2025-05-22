import React from "react"
import { Linkedin, Github, Mail } from "lucide-react"

interface FooterProps {
  name: string
  githubUrl: string
  linkedinUrl: string
  email: string
}

const Footer: React.FC<FooterProps> = ({
  name,
  githubUrl,
  linkedinUrl,
  email,
}) => {
  return (
    <footer
      id="contact"
      className="bg-brutalist-foreground text-brutalist-background py-12 px-4 sm:px-6 lg:px-8 border-t-3 border-brutalist-border mt-16"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">Mettiamoci in contatto!</h2>
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href={`mailto:${email}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
            className="hover:text-brutalist-primary"
          >
            <Mail size={32} />
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-brutalist-primary"
          >
            <Linkedin size={32} />
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-brutalist-primary"
          >
            <Github size={32} />
          </a>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} {name}. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Realized with <span className="text-brutalist-accent">♥</span> and
          code.
        </p>
      </div>
    </footer>
  )
}

export default Footer
