import { CssBaseline, ThemeProvider } from '@mui/material'
import { UIContextProvider } from 'context/ui'
import type { AppProps } from 'next/app'
import { lightTheme } from 'themes'
import '../styles/globals.css'

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
