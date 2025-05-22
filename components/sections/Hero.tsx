import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export interface HeroProps {
  profileImageUrl: string
  name: string
  title: string
  description: string
}

export const Hero: React.FC<HeroProps> = ({
  profileImageUrl,
  name,
  title,
  description,
}) => {
  const initials = name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .join("")

  return (
    <section
      id="hero"
      className="bg-brutalist-primary text-brutalist-background py-20 md:py-32 px-4 sm:px-6 lg:px-8 text-center border-b-3 border-brutalist-border"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-8">
          <Avatar className="h-32 w-32 md:h-42 md:w-42 border-3 border-brutalist-border shadow-brutalist-lg mb-4">
            <AvatarImage src={profileImageUrl} alt={name} />
            <AvatarFallback className="bg-brutalist-background text-brutalist-primary font-bold text-4xl">
              {initials}
            </AvatarFallback>
          </Avatar>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brutalist-background">
            {name}
          </h2>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          {title}
        </h1>

        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          {description}
        </p>
      </div>
    </section>
  )
}
