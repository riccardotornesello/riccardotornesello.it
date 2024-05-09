import TechnologiesTab from "@/components/TechnologiesTab";
import TechnologyIcon from "@/components/TechnologyIcon";

export default function Home() {
  return (
    <main>
      <TechnologiesTab color="red" label="Test1">
        <TechnologyIcon icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-plain.svg">
          Python
        </TechnologyIcon>
      </TechnologiesTab>
      <TechnologiesTab label="Test2" />
    </main>
  );
}
