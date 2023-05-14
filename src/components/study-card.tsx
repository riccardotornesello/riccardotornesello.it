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
          {StartDateInfo(studyDetails.fromDate)}
          {EndDateInfo(studyDetails.toDate)}
        </Text>
      }
      body={
        <Text color='dimmed' size='sm'>
          {studyDetails.description}
        </Text>
      }
      icon={studyDetails.icon}
    />
  );
}

export function StartDateInfo(startDate?: string): JSX.Element | null {
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

export function EndDateInfo(endDate?: string): JSX.Element | null {
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
