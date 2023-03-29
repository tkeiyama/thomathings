import "../styles/global.css";
import "../styles/prism.css";
import "../styles/rehype.css";

import { Analytics } from "@vercel/analytics/react";
import { AppProps } from "next/app";
import Head from "next/head";
import { ReactElement } from "react";

import { Pwa } from "../components/Pwa";

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

        <Pwa />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
