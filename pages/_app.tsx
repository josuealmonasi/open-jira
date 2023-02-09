import { CssBaseline, ThemeProvider } from '@mui/material'
import { EntriesProvider } from 'context/entries'
import { UIContextProvider } from 'context/ui'
import type { AppProps } from 'next/app'
import 'styles/globals.css'
import { lightTheme } from 'themes'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <EntriesProvider>
      <UIContextProvider>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </UIContextProvider>
    </EntriesProvider>
  )
}
