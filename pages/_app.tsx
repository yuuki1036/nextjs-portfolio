import "../styles/index.css";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import theme from "../styles/theme";
import { SITE_NAME } from "lib/constants";
import { GA_ID, pageview } from "lib/gtag";

const MyApp = ({
  Component,
  pageProps,
}: AppProps): JSX.Element => {
  const router = useRouter();
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector(
      "#jss-server-side",
    );
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }

    // Google Analytics
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

  return (
    <>
      <Head>
        <title>{SITE_NAME}</title>
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
