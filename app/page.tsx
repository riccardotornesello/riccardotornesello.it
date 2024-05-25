import Header from "@/components/Header";
import Container from "@/components/Container";
import TechnologiesSection from "@/components/TechnologiesSection";
import { technologyGroups } from "@/data/technologies";

export default function Home() {
  return (
    <main>
      <Container maxWidth="1400px">
        <Header />
        <TechnologiesSection technologyGroups={technologyGroups} />
      </Container>
    </main>
  );
}
