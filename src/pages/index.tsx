import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Hero } from '../components/hero';
import { ExperiencesList } from '../components/experiences-list';
import { StudiesList } from '../components/studies-list';
import { SkillsList } from '../components/skills-list';

const IndexPage: React.FC<PageProps> = () => {
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

export const Head: HeadFC = () => <title>Riccardo Tornesello</title>;
