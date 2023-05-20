import * as React from 'react';
import { ActionIcon, ThemeIcon, createStyles } from '@mantine/core';
import { IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  linkedin: {
    backgroundColor: '#0e76a8',
  },

  github: {
    backgroundColor: '#333',
  },
}));

export type SocialButtonProps = {
  className: string;
  href: string;
  children: React.ReactNode;
};

export function SocialButton({
  className,
  href,
  children,
}: SocialButtonProps): JSX.Element {
  return (
    <a target='_blank' href={href}>
      <ThemeIcon
        size='3.5rem'
        radius='3.5rem'
        variant='filled'
        className={className}
      >
        {children}
      </ThemeIcon>
    </a>
  );
}

export function LinkedInButton(): JSX.Element {
  const { classes } = useStyles();

  return (
    <SocialButton
      className={classes.linkedin}
      href='https://www.linkedin.com/in/riccardotornesello/'
    >
      <IconBrandLinkedin size='2rem' />
    </SocialButton>
  );
}

export function GitHubButton(): JSX.Element {
  const { classes } = useStyles();

  return (
    <SocialButton
      className={classes.github}
      href='https://github.com/riccardotornesello'
    >
      <IconBrandGithub size='2rem' />
    </SocialButton>
  );
}
