import { MantineProvider } from "@mantine/core";
import reportWebVitals from "core/reportWebVitals";
import { store } from "core/store";
import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import { Provider } from "react-redux";

export default function App(props: AppProps) {
    const { Component, pageProps } = props;

    return (
        <React.StrictMode>
            <Component {...pageProps} />
        </React.StrictMode>
    );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
