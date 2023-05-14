import React from 'react';
import { Card, Badge, Flex, ThemeIcon, Group } from '@mantine/core';
import { Status } from '../data/common';
import { IconPoint } from '@tabler/icons-react';

export type CustomCardProps = {
  header: JSX.Element;
  body: JSX.Element;
  status?: Status;
};

type StatusStyle = {
  color: string;
  text: string;
};

type StatusChipProps = {
  status: Status;
};

const statusStyle: Record<Status, StatusStyle> = {
  [Status.IN_PROGRESS]: {
    color: 'orange',
    text: 'In progress',
  },
  [Status.FINISHED]: {
    color: 'green',
    text: 'Finished',
  },
};

export function CustomCard({
  header,
  body,
  status,
}: CustomCardProps): JSX.Element {
  return (
    <Card withBorder shadow='sm' radius='md'>
      <Card.Section withBorder inheritPadding py='xs'>
        <Group position='apart'>
          {header}
          {status && <StatusChip status={status} />}
        </Group>
      </Card.Section>

      {body}
    </Card>
  );
}

function StatusChip({ status }: StatusChipProps): JSX.Element {
  return (
    <Badge
      color={statusStyle[status].color}
      variant='filled'
      pl={3}
      leftSection={<DotIcon />}
    >
      {statusStyle[status].text}
    </Badge>
  );
}

function DotIcon(): JSX.Element {
  return (
    <Flex justify='center' align='center'>
      <ThemeIcon size='xs' color='#ffffff' radius='xl' variant='transparent'>
        <IconPoint />
      </ThemeIcon>
    </Flex>
  );
}

export default CustomCard;
