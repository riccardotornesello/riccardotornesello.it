import * as React from 'react';
import {
  createStyles,
  Container,
  Title,
  Text,
  Button,
  rem,
  ThemeIcon,
  Group,
} from '@mantine/core';
import { UserCard } from './user-card';
import server from '../images/generic/server.jpg';
import profile from '../images/profile.jpeg';
import { IconChevronsDown } from '@tabler/icons-react';
import { StatusCard } from './status-card';
import { LinkedInButton, GitHubButton } from './social-buttons';

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: '#11284b',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: `linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%), url(${server.src})`,
    paddingTop: `calc(${theme.spacing.xl} * 3)`,
    paddingBottom: `calc(${theme.spacing.xl} * 3)`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    [theme.fn.smallerThan('md')]: {
      flexDirection: 'column',
    },
  },

  content: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan('md')]: {
      marginRight: 0,
    },
  },

  title: {
    color: theme.white,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    maxWidth: rem(600),
    fontSize: rem(48),

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      fontSize: rem(34),
      lineHeight: 1.15,
    },
  },

  description: {
    color: theme.white,
    opacity: 0.75,
    maxWidth: rem(500),

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
    },
  },

  control: {
    paddingLeft: rem(50),
    paddingRight: rem(50),
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(22),

    [theme.fn.smallerThan('md')]: {
      width: '100%',
    },
  },

  socials: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: theme.spacing.md,
    backgroundColor: '#373A4033',
    padding: theme.spacing.md,
    borderRadius: theme.radius.md,
    border: `1px solid ${theme.colors.dark[4]}`,

    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  socialsMobile: {
    display: 'none',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    gap: theme.spacing.md,
    marginTop: theme.spacing.lg,

    [theme.fn.smallerThan('md')]: {
      display: 'flex',
    },
  },
}));

export function Hero(): JSX.Element {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <Container size='lg'>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>Hello 👋</Title>
            <Title className={classes.title}>
              I'm{' '}
              <Text
                component='span'
                inherit
                variant='gradient'
                gradient={{ from: 'pink', to: 'yellow' }}
              >
                Riccardo Tornesello
              </Text>
            </Title>

            <Text className={classes.description} mt={30}>
              A young developer from Italy, I'm currently a full-stack web
              developer and DevOps engineer.
            </Text>

            <div className={classes.socialsMobile}>
              <LinkedInButton />
              <GitHubButton />
            </div>

            <Button
              variant='gradient'
              gradient={{ from: 'pink', to: 'yellow' }}
              size='xl'
              className={classes.control}
              mt={40}
              component='a'
              href='#content'
            >
              <Text>Discover more</Text>
              <ThemeIcon variant='transparent' ml='sm'>
                <IconChevronsDown size={50} />
              </ThemeIcon>
            </Button>
          </div>
          <div className={classes.socials}>
            <LinkedInButton />
            <GitHubButton />
          </div>
          {/* <div style={{ position: 'relative' }}>
            <StatusCard />
            <UserCard
              avatar={profile}
              name='Riccardo Tornesello'
              job='Developer'
            />
          </div> */}
        </div>
      </Container>
    </div>
  );
}
