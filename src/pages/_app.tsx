import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import Head from 'next/head';

import store from '../store';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Riccardo Tornesello | Engineer</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Provider store={store}>
        <MantineProvider
          theme={{
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
          <Component {...pageProps} />
        </MantineProvider>
      </Provider>
    </>
  );
}
