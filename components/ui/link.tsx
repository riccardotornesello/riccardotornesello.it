import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "hover:bg-opacity-80 border-brutalist-border shadow-brutalist hover:shadow-brutalist-hover transition-shadow duration-200",
  {
    variants: {
      variant: {
        accent: "bg-brutalist-accent text-white",
        primary: "bg-brutalist-primary text-white",
      },
      size: {
        default: "text-md font-bold py-3 px-8 border-3",
        sm: "text-sm font-medium py-2 px-4 border-3",
        xs: "text-xs font-medium py-1.5 px-3 border-2",
      },
    },
    defaultVariants: {
      variant: "accent",
      size: "default",
    },
  }
)

function Link({
  href,
  children,
  className,
  variant,
  size,
  rel = "noopener noreferrer",
  target = "_blank",
  ...props
}: React.ComponentProps<"a"> & VariantProps<typeof buttonVariants>) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </a>
  )
}

export { Link }
