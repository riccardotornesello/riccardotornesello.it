import * as React from 'react';
import moment from 'moment';
import { Card, Group, Text, ThemeIcon, Image } from '@mantine/core';
import { Status } from '../data/common';
import type { StudyDetails } from '../data/studies';
import CustomCard from './custom-card';

export type StudyCardOptions = {
  studyDetails: StudyDetails;
};

export function StudyCard({ studyDetails }: StudyCardOptions): JSX.Element {
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
        <Group mt='sm'>
          <Image maw={50} src={studyDetails.icon} />
          <Text color='dimmed' size='sm'>
            {studyDetails.description}
          </Text>
        </Group>
      }
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
