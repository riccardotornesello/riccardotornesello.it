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
          <StartDateInfo startDate={experience.fromDate} />
          <EndDateInfo endDate={experience.toDate} />
        </Text>
      }
      body={
        <>
          <Text mt='sm' color='dimmed' size='sm'>
            {experience.description}
          </Text>

          <ExperienceTechnologiesList
            experienceTechnologies={experience.technologies}
          />
        </>
      }
    />
  );
}

export type StartDateInfoProps = {
  startDate?: string;
};

export function StartDateInfo({
  startDate,
}: StartDateInfoProps): JSX.Element | null {
  if (!startDate) {
    return null;
  }

  const formattedDate = moment(startDate).format('MMM YYYY');

  return (
    <Text span weight={400} size='sm'>
      {' '}
      - From {formattedDate}
    </Text>
  );
}

export type EndDateInfoProps = {
  endDate?: string;
};

export function EndDateInfo({ endDate }: EndDateInfoProps): JSX.Element | null {
  if (!endDate) {
    return null;
  }

  const formattedDate = moment(endDate).format('MMM YYYY');

  return (
    <Text span weight={400} size='sm'>
      {' '}
      - To {formattedDate}
    </Text>
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
