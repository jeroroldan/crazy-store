import type { AppProps } from "next/app";
import { OfferProvider } from "../context/offerContext";

import "../styles/globals.css";




function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <OfferProvider>
        <Component {...pageProps} />
      </OfferProvider>
    </>
  );
}

export default MyApp;
