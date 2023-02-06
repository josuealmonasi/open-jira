import Box from '@mui/material/Box'
import { NavBar } from 'components/ui'
import Head from 'next/head'
import { FC, ReactNode } from 'react'

interface ILayoutProps {
  title?: string
  children?: ReactNode | undefined
}

export const Layout: FC<ILayoutProps> = ({ title = 'Open - Jira', children }) => (
  <Box sx={{ flexGrow: 1 }}>
    <Head>
      <title>{title}</title>
    </Head>

    <NavBar />

    <Box sx={{ padding: '10px 20px' }}>{children}</Box>
  </Box>
)
