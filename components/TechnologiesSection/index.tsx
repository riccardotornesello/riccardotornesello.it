import TechnologiesTab from "@/components/TechnologiesTab";
import TechnologyIcon from "@/components/TechnologyIcon";
import Subtitle from "@/components/Subtitle";
import Highlight from "@/components/Highlight";

export type TechnologiesSectionProps = {
  readonly technologies: any; // TODO
};

export default function TechnologiesSection({
  technologies,
}: TechnologiesSectionProps) {
  return (
    <div style={{ marginTop: "40px" }}>
      <Subtitle>
        The <Highlight>technologies</Highlight> I master
      </Subtitle>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {technologies.map((tab) => (
          <TechnologiesTab
            key={tab.label}
            label={tab.label}
            color={tab.color}
            maxRowSize={tab.rowSize}
            size={tab.width}
          >
            {tab.technologies.map((technology) => (
              <TechnologyIcon
                key={technology.label}
                icon={technology.icon}
                color={technology.color}
              >
                {technology.label}
              </TechnologyIcon>
            ))}
          </TechnologiesTab>
        ))}
      </div>
    </div>
  );
}
