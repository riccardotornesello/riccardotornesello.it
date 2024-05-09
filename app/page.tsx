import TechnologiesTab from "@/components/TechnologiesTab";
import TechnologyIcon from "@/components/TechnologyIcon";
import Circle from "@/components/Circle";
import Header from "@/components/Header";
import avatar from "@/assets/pictures/avatar.png";

export default function Home() {
  return (
    <main>
      <Header />

      <Circle
        radius={120}
        color="green"
        borderGap={20}
        picture={avatar}
        thickness={4}
      />

      <TechnologiesTab color="red" label="Test1">
        <TechnologyIcon icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-plain.svg">
          Python
        </TechnologyIcon>
      </TechnologiesTab>
      <TechnologiesTab label="Test2" />
    </main>
  );
}
