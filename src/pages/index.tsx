import type { NextPage } from 'next';

import { Hero } from '../components/hero';
import { ExperiencesList } from '../components/experiences-list';
import { StudiesList } from '../components/studies-list';
import { SkillsList } from '../components/skills-list';

// import Counter from '../features/counter/Counter';

const IndexPage: NextPage = () => {
  return (
    <main>
      <Hero />
      <section id='content'>
        <ExperiencesList />
        <StudiesList />
        <SkillsList />
      </section>
    </main>
  );
};

export default IndexPage;
