import TechnologiesTab from "@/components/TechnologiesTab";
import TechnologyIcon from "@/components/TechnologyIcon";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main>
      <Header />

      <TechnologiesTab color="red" label="Test1">
        <TechnologyIcon icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-plain.svg">
          Python
        </TechnologyIcon>
      </TechnologiesTab>
      <TechnologiesTab label="Test2" />
    </main>
  );
}
