import { Card, CardContent, CardHeader, Grid } from '@mui/material'
import { Layout } from 'components/layouts'
import { NextPage } from 'next'

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='Pending' />

            <CardContent>text</CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='In Progress' />

            <CardContent>text</CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='Done' />

            <CardContent>text</CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  )
}
export default HomePage
