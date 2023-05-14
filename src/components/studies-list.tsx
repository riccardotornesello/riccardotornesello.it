import * as React from 'react';
import { IconBook } from '@tabler/icons-react';
import { StudyCard } from './study-card';
import { studies } from '../data/studies';
import { Section } from './section';
import { CardLink } from './card-link';

export function StudiesList(): JSX.Element {
  return (
    <Section title='Studies' icon={IconBook}>
      {studies.map((studyDetails, index) => (
        <div key={index}>
          <StudyCard studyDetails={studyDetails} key={index} />
          {index !== studies.length - 1 && <CardLink />}
        </div>
      ))}
    </Section>
  );
}
