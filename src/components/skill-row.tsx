import React, { useEffect } from 'react';
import {
  Group,
  Text,
  ThemeIcon,
  Image,
  Grid,
  createStyles,
  useMantineTheme,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconStar, IconStarFilled, IconTrendingUp } from '@tabler/icons-react';
import type { Skill } from '../data/skills';
import { technologies } from '../data/technologies';

const useStyles = createStyles((theme) => ({
  icon: {
    width: '20px',
    height: '20px',
    color: theme.colors.yellow[7],
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  smallRow: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: '10px',
  },
}));

export type SkillRowOptions = {
  skill: Skill;
};

export function SkillRow({ skill }: SkillRowOptions): JSX.Element {
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();
  const isSmall = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
    <Grid.Col xs={12} sm={6} px='xl'>
      <div className={cx(classes.row, { [classes.smallRow]: isSmall })}>
        <Group>
          <ThemeIcon variant='transparent'>
            <Image src={technologies[skill.name].icon} />
          </ThemeIcon>
          <Text weight={400} size='lg'>
            {technologies[skill.name].name}
          </Text>
        </Group>
        <Group style={{ flexDirection: isSmall ? 'row-reverse' : 'row' }}>
          {skill.improving && (
            <ThemeIcon
              color='green'
              size='sm'
              variant='outline'
              radius='xl'
              mr='xxs'
            >
              <IconTrendingUp />
            </ThemeIcon>
          )}
          <Stars level={skill.level} />
        </Group>
      </div>
    </Grid.Col>
  );
}

export function Stars({ level }: { level: number }) {
  const { classes } = useStyles();

  return (
    <div style={{ lineHeight: 0 }}>
      {[...Array(level)].map((e, i) => (
        <IconStarFilled key={i} className={classes.icon} />
      ))}
      {[...Array(5 - level)].map((e, i) => (
        <IconStar key={i} className={classes.icon} />
      ))}
    </div>
  );
}
