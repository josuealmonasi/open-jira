import { Typography } from '@mui/material'
import { Layout } from 'components/layouts'
import { Sidebar } from 'components/ui'
import { NextPage } from 'next'

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Sidebar></Sidebar>
      <Typography variant='h1'>hola mundo</Typography>
    </Layout>
  )
}
export default HomePage
