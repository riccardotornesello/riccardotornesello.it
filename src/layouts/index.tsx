import React, { useEffect } from 'react';
import { PageProps } from 'gatsby';
import { MantineProvider } from '@mantine/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './style.css';

const Layout: React.FC<PageProps> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <MantineProvider
      theme={{
        // fontFamily: 'Fira Code, monospace',
        colorScheme: 'dark',
        globalStyles: (theme) => ({
          html: {
            scrollBehavior: 'smooth',
          },
        }),
      }}
      withCSSVariables
      withGlobalStyles
      withNormalizeCSS
    >
      {children}
    </MantineProvider>
  );
};

export default Layout;
