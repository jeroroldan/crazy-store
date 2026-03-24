import type { AppProps } from "next/app";
import { OfferProvider } from "../context/offerContext";
import { Roboto } from 'next/font/google'

import '../styles/globals.css'

const outfit = Roboto({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-outfit: ${outfit.style.fontFamily};
        }
      `}</style>
      <div className={outfit.className}>
        <OfferProvider>
          <Component {...pageProps} />
        </OfferProvider>
      </div>
    </>
  );
}

export default MyApp;
