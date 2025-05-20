import React from "react"

interface SectionProps {
  id: string
  title: string
  children: React.ReactNode
  className?: string
  titleClassName?: string
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  children,
  className = "",
  titleClassName = "",
}) => {
  return (
    <section
      id={id}
      className={`py-12 md:py-16 px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <div className="container mx-auto">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-brutalist-foreground ${titleClassName}`}
        >
          {title}
        </h2>
        {children}
      </div>
    </section>
  )
}

export default Section
