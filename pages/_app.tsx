import { ThemeProvider } from '@emotion/react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { lightTheme } from '@/themes'
import { CssBaseline } from '@mui/material'
import { AnimatePresence } from 'framer-motion'

export default function App({ Component, pageProps, router }: AppProps) {

    return (
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />

        <AnimatePresence mode='wait' initial={ false }>
          <Component {...pageProps} key={ router.asPath } />
        </AnimatePresence>
      
      
      </ThemeProvider>
    )
}
