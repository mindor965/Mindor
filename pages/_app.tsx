import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import {
  SITE_NAME,
  SITE_URL,
  defaultSEO,
  pageSEO,
} from "../lib/seo";

import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const rawPath = router.asPath.split("?")[0];
  const path = rawPath === "/" ? "/" : rawPath.replace(/\/$/, "");

  const seo = pageSEO[path] || defaultSEO;

  const absoluteImage =  `${SITE_URL}${seo.image}`;

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={`${SITE_URL}${path}`} />
        <meta property="og:image" content={absoluteImage} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={absoluteImage} />
      </Head>

      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

