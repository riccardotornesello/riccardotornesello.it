import * as React from 'react';
import { ActionIcon, createStyles } from '@mantine/core';
import { IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  linkedin: {
    backgroundColor: '#0e76a8',
  },

  github: {
    backgroundColor: '#333',
  },
}));

export function LinkedInButton(): JSX.Element {
  const { classes } = useStyles();

  return (
    <ActionIcon
      size='3.5rem'
      radius='3.5rem'
      variant='filled'
      component='a'
      href='/asd'
      className={classes.linkedin}
    >
      <IconBrandLinkedin size='2rem' />
    </ActionIcon>
  );
}

export function GitHubButton(): JSX.Element {
  const { classes } = useStyles();

  return (
    <ActionIcon
      size='3.5rem'
      radius='3.5rem'
      variant='filled'
      component='a'
      href='/asda'
      className={classes.github}
    >
      <IconBrandGithub size='2rem' />
    </ActionIcon>
  );
}
