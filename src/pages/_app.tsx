import { MantineProvider } from "@mantine/core"
import { AppProps } from "next/app"
import Head from "next/head"
import React from "react"
import { Provider } from "react-redux"

import reportWebVitals from "../reportWebVitals"
import { store } from "../store"

export default function App(props: AppProps) {
  const { Component, pageProps } = props

  return (
    <React.StrictMode>
      <Provider store={store}>
        <Head>
          <title>Page title</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>

        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            /** Put your mantine theme override here */
            colorScheme: "light"
          }}>
          <Component {...pageProps} />
        </MantineProvider>
      </Provider>
    </React.StrictMode>
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
