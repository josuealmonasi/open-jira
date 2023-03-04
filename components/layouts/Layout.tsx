import Box from '@mui/material/Box'
import { NavBar } from 'components/ui'
import Head from 'next/head'
import { FC, ReactNode } from 'react'

interface ILayoutProps {
  title?: string
  children?: ReactNode | undefined
  appName?: string
}

export const Layout: FC<ILayoutProps> = ({
  title = 'Open - Jira',
  appName,
  children,
}) => (
  <Box sx={{ flexGrow: 1 }}>
    <Head>
      <title>{title}</title>
    </Head>

    <NavBar name={appName} />

    <Box sx={{ padding: '10px 20px', backgroundColor: '#FFFFFF' }}>{children}</Box>
  </Box>
)
