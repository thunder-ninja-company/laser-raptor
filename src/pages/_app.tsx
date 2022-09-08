import reportWebVitals from 'core/reportWebVitals';
import type { AppProps } from 'next/app';
import React from 'react';

export default function App(props : AppProps) {
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
