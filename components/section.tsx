import type { FC, ReactNode } from "react";
import { SectionHeader } from "./section-header";
import { cn } from "@/lib/utils";

export interface SectionProps {
  children: ReactNode;
  title: string;
  className?: string;
  index?: string;
}

export const Section: FC<SectionProps> = ({
  children,
  title,
  className,
  index,
}) => {
  return (
    <div className={cn("max-w-6xl mx-auto", className)}>
      <SectionHeader index={index}>{title}</SectionHeader>
      {children}
    </div>
  );
};
