import "@/styles/globals.css";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics gaId="G-PPDLLHZ6B7" />
      <GoogleTagManager gtmId="GTM-KTZLT7TC" />
      <Component {...pageProps} />
    </>
  );
}
