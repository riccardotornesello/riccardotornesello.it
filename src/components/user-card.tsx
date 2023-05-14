import * as React from 'react';
import {
  createStyles,
  Card,
  Avatar,
  Text,
  Group,
  rem,
  Center,
  ThemeIcon,
} from '@mantine/core';
import { LinkedInButton, GitHubButton } from './social-buttons';
import { IconMail } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    width: rem(400),
  },

  avatar: {
    border: `${rem(2)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white
    }`,
  },
}));

interface UserCardImageProps {
  image: string;
  avatar: string;
  name: string;
  job: string;
  children?: React.ReactNode;
}

export function UserCard({ avatar, name, job, children }: UserCardImageProps) {
  const { classes } = useStyles();

  return (
    <Card withBorder padding='xl' radius='md' className={classes.card}>
      <Avatar
        src={avatar}
        size={120}
        radius={120}
        mx='auto'
        className={classes.avatar}
      />
      <Text ta='center' fz='lg' fw={500} mt='sm'>
        {name}
      </Text>
      <Text ta='center' fz='sm' c='dimmed'>
        {job}
      </Text>

      <Group position='center' mt='sm'>
        <LinkedInButton />
        <GitHubButton />
      </Group>

      <Center>
        <Group mt='sm' spacing='xs'>
          <ThemeIcon size='2rem' radius='xl' variant='filled' color='white'>
            <IconMail color='black' size='1.5rem' />
          </ThemeIcon>
          <Text>riccardo.tornesello@gmail.com</Text>
        </Group>
      </Center>
      {children}
    </Card>
  );
}
