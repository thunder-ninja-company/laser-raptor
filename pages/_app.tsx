import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import React from 'react';
import { store } from '../src/app/store';



export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <React.StrictMode>
        <Provider store={store}>

            <Head>
              <title>Page title</title>
              <meta
                name='viewport'
                content='minimum-scale=1, initial-scale=1, width=device-width' />
            </Head>

            <MantineProvider
              withGlobalStyles
              withNormalizeCSS
              theme={{
                /** Put your mantine theme override here */
                colorScheme: 'light',
              }}
            >
              <Component {...pageProps} />
            </MantineProvider>
        </Provider>
    </React.StrictMode>
  );
}