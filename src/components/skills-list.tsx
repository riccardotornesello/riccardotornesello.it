import * as React from 'react';
import { Card, Grid } from '@mantine/core';
import { IconStar } from '@tabler/icons-react';
import { skills } from '../data/skills';
import { SkillRow } from './skill-row';
import { Section } from './section';

export function SkillsList(): JSX.Element {
  return (
    <Section title='Skills' icon={IconStar}>
      <Card withBorder shadow='sm' radius='md' my='sm'>
        <Grid gutter='xl'>
          {skills.map((skill, index) => (
            <SkillRow skill={skill} key={index} />
          ))}
        </Grid>
      </Card>
    </Section>
  );
}
