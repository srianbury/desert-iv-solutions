import Head from "next/head";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  const title: string = "Desert IV Solutions";
  const longTitle: string = "IV Drip Therapy in Arizona - Desert IV Solutions";
  const description: string =
    "Mobile IV therapy delivered to your Home, Office, or anywhere in the Valley!  Get relief from Hangovers, Migraines, Food Poisoning, Morning Sickness or just give your Immune System a Boost!";
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta key="description" name="description" content={description} />
        <meta key="og:title" property="og:title" content={longTitle} />
        <meta
          key="og:description"
          property="og:description"
          content={description}
        />
        <meta
          key="og:url"
          property="og:url"
          content="https://www.desertivsolutions.com/"
        />
        <meta key="og:type" property="og:type" content="website" />
        <meta
          key="og:image"
          property="og:image"
          content="/images/color-logo-no-bg.png"
        />
        <meta
          key="og:site_name"
          property="og:site_name"
          content="desertivsolutions"
        />
        <meta
          key="twitter:card"
          name="twitter:card"
          content="summary_large_image"
        />
        <meta key="twitter:title" name="twitter:title" content={longTitle} />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={description}
        />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
