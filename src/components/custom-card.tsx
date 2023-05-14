import { useState, useEffect } from 'react';

import {
  Card,
  Badge,
  Flex,
  ThemeIcon,
  Group,
  Image,
  createStyles,
} from '@mantine/core';
import { Status } from '../data/common';
import { IconPointFilled } from '@tabler/icons-react';
import { useInterval } from '@mantine/hooks';

export type CustomCardProps = {
  header: JSX.Element;
  body: JSX.Element;
  status?: Status;
  icon?: string;
};

type StatusStyle = {
  color: string;
  text: string;
  animated?: boolean;
};

type StatusChipProps = {
  status: Status;
};

type DotIconProps = {
  animated?: boolean;
};

const statusStyle: Record<Status, StatusStyle> = {
  [Status.IN_PROGRESS]: {
    color: 'blue',
    text: 'Ongoing',
    animated: true,
  },
  [Status.FINISHED]: {
    color: 'green',
    text: 'Finished',
  },
};

const useStyles = createStyles((theme) => ({
  icon: {
    backgroundColor: 'white',
    borderRadius: '100%',
    padding: '3px',
  },
}));

export function CustomCard({
  header,
  body,
  status,
  icon,
}: CustomCardProps): JSX.Element {
  const { classes } = useStyles();

  return (
    <Card withBorder shadow='sm' radius='md'>
      <Card.Section withBorder inheritPadding py='xs'>
        <Group position='apart'>
          {header}
          {status && <StatusChip status={status} />}
        </Group>
      </Card.Section>

      <Group mt='sm'>
        {icon && <Image maw={70} src={icon} className={classes.icon} />}
        {body}
      </Group>
    </Card>
  );
}

function StatusChip({ status }: StatusChipProps): JSX.Element {
  return (
    <Badge
      color={statusStyle[status].color}
      variant='filled'
      pl={3}
      leftSection={<DotIcon animated={statusStyle[status].animated} />}
    >
      {statusStyle[status].text}
    </Badge>
  );
}

function DotIcon({ animated = false }: DotIconProps): JSX.Element {
  const [filled, setFilled] = useState(true);
  const interval = useInterval(() => setFilled((s) => !s), 1000);

  useEffect(() => {
    if (animated) {
      interval.start();
      return interval.stop;
    }
  }, []);

  return (
    <Flex justify='center' align='center'>
      <ThemeIcon size='xs' color='#ffffff' radius='xl' variant='transparent'>
        <IconPointFilled
          style={{ opacity: filled ? 1 : 0, transition: 'all 0.5s ease' }}
        />
      </ThemeIcon>
    </Flex>
  );
}

export default CustomCard;
