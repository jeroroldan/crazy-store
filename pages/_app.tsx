import { ThemeProvider } from '@emotion/react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { lightTheme } from '@/themes'
import { CssBaseline } from '@mui/material'
import { OfferProvider } from '@/context/offerContext'

export default function App({ Component, pageProps }: AppProps) {

    return (
      <OfferProvider>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </OfferProvider>
    )
}
