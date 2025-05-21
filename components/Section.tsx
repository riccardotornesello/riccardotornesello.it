import { LucideProps } from "lucide-react"
import React, { ForwardRefExoticComponent, RefAttributes } from "react"

interface SectionProps {
  id: string
  title: string
  children: React.ReactNode
  className?: string
  titleClassName?: string
  iconClassName?: string
  icon?: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  children,
  className = "",
  titleClassName = "",
  iconClassName = "",
  icon: Icon,
}) => {
  return (
    <section
      id={id}
      className={`py-12 md:py-16 px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <div className="container mx-auto">
        <div className="flex justify-center mb-8 md:mb-12">
          {Icon && (
            <Icon
              size={30}
              className={`text-brutalist-primary mr-2 mt-0.5 md:mt-1 ${iconClassName}`}
            />
          )}
          <h2
            className={`text-3xl md:text-4xl font-bold text-center text-brutalist-foreground ${titleClassName}`}
          >
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  )
}

export default Section
