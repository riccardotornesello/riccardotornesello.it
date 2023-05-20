import React from 'react';
import { Container, MediaQuery } from '@mantine/core';
import { SectionTitle } from './section-title';
import { SectionCorners } from './section-corners';

export type SectionProps = {
  children: React.ReactNode;
  title: string;
  icon: (props: any) => React.ReactElement;
};

export function Section({ children, title, icon }: SectionProps): JSX.Element {
  return (
    <MediaQuery styles={{ marginBlock: '60px' }} largerThan='xs'>
      <Container
        size='lg'
        style={{
          position: 'relative',
          marginBlock: '20px',
        }}
      >
        <MediaQuery styles={{ display: 'none' }} smallerThan='xs'>
          <div>
            <SectionCorners />
          </div>
        </MediaQuery>
        <MediaQuery
          styles={{ paddingBlock: '40px', paddingInline: '20px' }}
          largerThan='xs'
        >
          <div>
            <SectionTitle title={title} icon={icon} />
            {children}
          </div>
        </MediaQuery>
      </Container>
    </MediaQuery>
  );
}
