import * as React from 'react';
import moment from 'moment';
import { Group, Text, Image, createStyles } from '@mantine/core';
import type { StudyDetails } from '../data/studies';
import CustomCard from './custom-card';

export type StudyCardOptions = {
  studyDetails: StudyDetails;
};

const useStyles = createStyles((theme) => ({
  icon: {
    backgroundColor: 'white',
    borderRadius: '100%',
    padding: '3px',
  },
}));

export function StudyCard({ studyDetails }: StudyCardOptions): JSX.Element {
  const { classes } = useStyles();

  return (
    <CustomCard
      status={studyDetails.status}
      header={
        <Text weight={500} size='lg'>
          {studyDetails.title}
          {studyDetails.dateInfo && (
            <Text span weight={400} size='sm'>
              {' '}
              - {studyDetails.dateInfo}
            </Text>
          )}
        </Text>
      }
      body={
        <Text color='dimmed' size='sm'>
          {studyDetails.description &&
            studyDetails.description
              .split('\n')
              .map((line, index) => <div key={index}>{line}</div>)}
        </Text>
      }
      icon={studyDetails.icon}
    />
  );
}
