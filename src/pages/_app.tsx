import "@/styles/globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics gaId="G-PPDLLHZ6B7" />
      <Component {...pageProps} />
    </>
  );
}
