import "../styles/index.css";
import {
  Backdrop,
  CssBaseline,
  makeStyles,
  Theme,
} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import nProgress from "nprogress";
import { FC, useEffect, useState } from "react";
import theme from "../styles/theme";
import {
  META_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
} from "lib/constants";
import { GA_ID, pageview } from "lib/gtag";
import "../styles/nprogress.css";

nProgress.configure({ showSpinner: false });

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();

  // Remove the server-side injected CSS.
  useEffect(() => {
    const jssStyles = document.querySelector(
      "#jss-server-side",
    );
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  // Google Analytics
  useEffect(() => {
    if (!GA_ID) return;
    const handleRouteChange = (url: string) =>
      pageview(url);
    router.events.on("routeChangeStart", handleRouteChange);
    return () =>
      router.events.off(
        "routeChangeComplete",
        handleRouteChange,
      );
  }, [router.events]);

  // loading
  useEffect(() => {
    const handleStart = () => nProgress.start();
    const handleStop = () => nProgress.done();

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  return (
    <>
      <Head>
        <title>{SITE_TITLE}</title>
        <meta
          name="description"
          content={META_DESCRIPTION}
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
