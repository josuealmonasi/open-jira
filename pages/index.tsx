import { Typography } from '@mui/material'
import { Layout } from 'components/layouts'
import { NextPage } from 'next'

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Typography variant='h1'>hola mundo</Typography>
    </Layout>
  )
}
export default HomePage
