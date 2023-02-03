import { Box } from '@mui/system'
import { NavBar } from 'components/ui'
import Head from 'next/head'
import { FC, ReactNode } from 'react'

interface LayoutProps {
  title?: 'string'
  children?: ReactNode | undefined
}

export const Layout: FC<LayoutProps> = ({ title = 'Open Jira', children }) => (
  <Box sx={{ flexGrow: 1 }}>
    <Head>
      <title>{title}</title>
    </Head>

    <NavBar />

    <Box sx={{ padding: '10px 20px' }}>{children}</Box>
  </Box>
)
