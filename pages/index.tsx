import { Card, CardContent, CardHeader, Grid } from '@mui/material'
import { Layout } from 'components/layouts'
import { EntryList, NewEntry } from 'components/ui'
import { NextPage } from 'next'

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              height: 'calc(100vh - 100px)',
              backgroundColor: 'transparent',
              padding: 0,
            }}
            elevation={0}
          >
            <CardHeader title='Pending' />

            <CardContent sx={{ margin: 0, padding: 0 }}>
              <NewEntry />

              <EntryList status='pending' />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              height: 'calc(100vh - 100px)',
              backgroundColor: 'transparent',
              padding: 0,
            }}
            elevation={0}
          >
            <CardHeader title='In Progress' />

            <CardContent sx={{ margin: 0, padding: 0 }}>
              <EntryList status='in-progress' />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              height: 'calc(100vh - 100px)',
              backgroundColor: 'transparent',
              padding: 0,
            }}
            elevation={0}
          >
            <CardHeader title='Done' />

            <CardContent sx={{ margin: 0, padding: 0 }}>
              <EntryList status='completed' />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  )
}
export default HomePage
