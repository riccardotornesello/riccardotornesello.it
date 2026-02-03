import type { FC } from "react";

export interface SectionHeaderProps {
  children: string;
  index?: string;
}

export const SectionHeader: FC<SectionHeaderProps> = ({ children, index }) => {
  return (
    <div className="mb-12">
      {index && (
        <span className="text-accent font-mono text-sm">{`// ${index}`}</span>
      )}
      <h2 className="brutal-heading text-4xl md:text-5xl mt-2 brutal-text-glow text-primary">
        {children}
      </h2>
    </div>
  );
};
