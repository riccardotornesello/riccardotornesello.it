import React from 'react';
import { Title, Group, ThemeIcon } from '@mantine/core';

export type SectionTitleOptions = {
  title: string;
  icon: (props: any) => JSX.Element;
};

export function SectionTitle({
  title,
  icon,
}: SectionTitleOptions): JSX.Element {
  const Icon = icon;

  return (
    <Group mb='sm' align='center'>
      <ThemeIcon variant='transparent'>
        <Icon style={{ strokeWidth: '1.5px' }} />
      </ThemeIcon>
      <Title order={3}>{title}</Title>
      {/* TODO: <TitleDivider /> */}
    </Group>
  );
}

export function TitleDivider(): JSX.Element {
  return (
    <div
      style={{
        width: '350px',
        maxWidth: '80%',
        height: '0px',
        borderTop: '1px solid #bbb',
        marginTop: '5px',
      }}
    ></div>
  );
}
