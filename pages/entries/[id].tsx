import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined'
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
  capitalize,
} from '@mui/material'
import { Layout } from 'components/layouts'
import { EntryStatus } from 'interfaces'
import { ChangeEvent, useMemo, useState } from 'react'

const validStatus: EntryStatus[] = ['pending', 'completed', 'in-progress']

const EntryPage = () => {
  const [inputValue, setInputValue] = useState('')
  const [status, setStatus] = useState<EntryStatus>('pending')
  const [touched, setTouched] = useState(false)
  const isNotValid = useMemo(() => !inputValue && touched, [inputValue, touched])

  const onTextFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const onChangeStatus = (event: ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value as EntryStatus)
  }

  const onSave = () => {
    if (!inputValue) return
    console.log('Save')
  }

  return (
    <Layout title='test'>
      <Grid container justifyContent={'center'} sx={{ marginTop: 2 }}>
        <Grid item xs={12} sm={8} md={6}>
          <Card>
            <CardHeader title={`Entry: ${inputValue}`} subheader='creado hace 3 min' />

            <CardContent>
              <TextField
                sx={{ marginTop: 2, marginBottom: 1 }}
                fullWidth
                placeholder='Escribe tu entrada'
                autoFocus
                multiline
                label='test'
                onChange={onTextFieldChange}
                value={inputValue}
                onBlur={() => setTouched(true)}
                error={isNotValid}
                helperText={isNotValid && 'Escribe algo'}
              />

              <FormControl>
                <FormLabel>Status:</FormLabel>

                <RadioGroup row onChange={onChangeStatus}>
                  {validStatus.map(status => (
                    <FormControlLabel
                      key={status}
                      value={status}
                      control={<Radio />}
                      label={capitalize(status)}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </CardContent>
            <CardActions>
              <Button
                disabled={!inputValue}
                startIcon={<SaveOutlinedIcon />}
                variant='contained'
                fullWidth
                onClick={onSave}
              >
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
