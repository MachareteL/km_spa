import "@/styles/globals.css";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Cotação de seguro gratuita</title>
        <meta
          name="description"
          content="Proteja seu veículo com a KM Proteção Veicular! Atendimento e suporte via WhatsApp e planos sem burocracia. Segurança e tranquilidade para você rodar sem preocupações!"
        />
      </Head>
      <GoogleAnalytics gaId="G-PPDLLHZ6B7" />
      <Component {...pageProps} />
      <GoogleTagManager gtmId="GTM-KTZLT7TC" />
    </>
  );
}
