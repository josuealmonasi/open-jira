import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material'
import { Layout } from 'components/layouts'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined'
import React from 'react'
import { EntryStatus } from 'interfaces'

const validStatus: EntryStatus[] = ['pending', 'completed', 'in-progress']

const EntryPage = () => {
  return (
    <Layout title='test'>
      <Grid container justifyContent={'center'} sx={{ marginTop: 2 }}>
        <Grid item xs={12} sm={8} md={6}>
          <Card>
            <CardHeader title='test' subheader='creado hace 3 min' />
            <CardContent>
              <TextField
                sx={{ marginTop: 2, marginBottom: 1 }}
                fullWidth
                placeholder='Escribe tu entrada'
                autoFocus
                multiline
                label='test'
              ></TextField>
              <FormControl>
                <FormLabel>Status:</FormLabel>
                <RadioGroup>
                  {validStatus.map(status => (
                    <FormControlLabel
                      key={status}
                      value={status}
                      control={<Radio />}
                      label={status}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </CardContent>
            <CardActions>
              <Button startIcon={<SaveOutlinedIcon />} variant='contained' fullWidth>
                Save
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default EntryPage
