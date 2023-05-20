import * as React from 'react';
import { Group, Text, ThemeIcon, Image } from '@mantine/core';
import { IconBriefcase } from '@tabler/icons-react';
import { experiences } from '../data/experiences';
import moment from 'moment';
import type { Experience } from '../data/experiences';
import { TechnologyName, technologies } from '../data/technologies';
import { Section } from './section';
import CustomCard from './custom-card';
import { CardLink } from './card-link';

export function ExperiencesList(): JSX.Element {
  return (
    <Section title='Experiences' icon={IconBriefcase}>
      {experiences.map((experience, index) => (
        <div key={index}>
          <ExperienceCard experience={experience} />
          {index !== experiences.length - 1 && <CardLink />}
        </div>
      ))}
    </Section>
  );
}

export type ExperienceCardOptions = {
  experience: Experience;
};

export function ExperienceCard({
  experience,
}: ExperienceCardOptions): JSX.Element {
  return (
    <CustomCard
      status={experience.status}
      header={
        <Text weight={500} size='lg'>
          {experience.title}
          {experience.dateInfo && (
            <Text span weight={400} size='sm'>
              {' '}
              - {experience.dateInfo}
            </Text>
          )}
        </Text>
      }
      body={
        <div>
          <Text color='dimmed' size='sm'>
            {experience.description &&
              experience.description
                .split('\n')
                .map((line, index) => <div key={index}>{line}</div>)}
          </Text>

          <ExperienceTechnologiesList
            experienceTechnologies={experience.technologies}
          />
        </div>
      }
    />
  );
}

export type ExperienceTechnologiesListProps = {
  experienceTechnologies?: TechnologyName[];
};

export function ExperienceTechnologiesList({
  experienceTechnologies,
}: ExperienceTechnologiesListProps): JSX.Element | null {
  if (!experienceTechnologies) {
    return null;
  }

  return (
    <Group position='left' spacing='xs' mt='sm'>
      {experienceTechnologies.map((technology, index) => (
        <ThemeIcon key={index} variant='transparent' ml='sm'>
          <Image src={technologies[technology].icon} />
        </ThemeIcon>
      ))}
    </Group>
  );
}
