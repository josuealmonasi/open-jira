import { CssBaseline, ThemeProvider } from '@mui/material'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { lightTheme } from 'themes'
import { UIContextProvider } from 'context/ui'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UIContextProvider>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </UIContextProvider>
  )
}
