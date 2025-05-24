import { PersonalProject } from "../types"

export const personalProjects: PersonalProject[] = [
  {
    title: "This portfolio",
    description:
      "Sometimes I relax by checking new trends in frontend development. This portfolio is built with Next.js, TypeScript, and Tailwind CSS.",
    imageUrl:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    repoUrl: "https://github.com/riccardotornesello/riccardotornesello.it",
  },
  {
    title: "SharedTelemetry",
    description:
      "A platform that allows sim-racing organizers to show real time results for their events. Used by SimRacingLeague.it for their qualifying sessions.",
    imageUrl:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60",
    tags: ["Go", "Google Cloud", "Firestore"],
  },
]
