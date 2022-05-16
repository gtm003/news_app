import { AppProps } from "next/dist/next-server/lib/router/router";
import React from "react";
import Head from "next/head";
import "../styles/index.scss";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>News App</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
