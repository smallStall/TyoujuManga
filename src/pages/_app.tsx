import type { AppProps } from "next/app";
import React from "react";
import "./global.scss"
import { StylesProvider } from "@mui/styles";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    jssStyles?.parentElement?.removeChild(jssStyles);
    //document.querySelector("body")!.classList.add("app-body");
    document.documentElement.setAttribute('timer', 'pause');

  }, []);

  return (
    <StylesProvider injectFirst>
      <React.StrictMode>
        <Component {...pageProps} />
      </React.StrictMode>
    </StylesProvider>
  );
}
