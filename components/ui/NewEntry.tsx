import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined'
import SaveIcon from '@mui/icons-material/Save'
import { Button, TextField } from '@mui/material'
import Box from '@mui/material/Box'
import { EntriesContext } from 'context/entries'
import { ChangeEvent, FC, PropsWithChildren, useContext, useState } from 'react'
import { UIContext } from '../../context/ui/uIContext'

interface INewEntryProps extends PropsWithChildren {}

export const NewEntry: FC<INewEntryProps> = ({}) => {
  const { addNewEntry } = useContext(EntriesContext)
  const { setIsAddingEntry, isAddingEntry } = useContext(UIContext)

  const [inputValue, setInputValue] = useState<string>('')
  const [touched, setTouched] = useState<boolean>(false)

  const handleOnChangeText = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value)
  }

  const handleCancel = (): void => {
    setTouched(false)
    setInputValue('')
    setIsAddingEntry(false)
  }

  const handleOnSave = () => {
    addNewEntry(inputValue)
    setTouched(false)
    setInputValue('')
    setIsAddingEntry(false)
  }

  return (
    <Box padding={1}>
      {isAddingEntry ? (
        <>
          <TextField
            fullWidth
            sx={{ marginTop: 2, marginBottom: 1 }}
            autoFocus
            multiline
            placeholder='New Entry'
            label='New Entry'
            helperText={inputValue.length <= 0 && touched && 'Enter a value'}
            error={inputValue.length <= 0 && touched}
            value={inputValue}
            onChange={handleOnChangeText}
            onBlur={() => setTouched(true)}
          />

          <Box display={'flex'} justifyContent={'space-between'}>
            <Button
              variant='outlined'
              color='success'
              startIcon={<SaveIcon />}
              disabled={inputValue.length <= 0}
              onClick={handleOnSave}
            >
              Save
            </Button>

            <Button
              variant='outlined'
              color='error'
              startIcon={<CancelOutlinedIcon />}
              onClick={handleCancel}
            >
              Cancel
            </Button>
          </Box>
        </>
      ) : (
        <Button
          variant='outlined'
          color='info'
          fullWidth
          startIcon={<AddCircleOutlineRoundedIcon />}
          onClick={() => setIsAddingEntry(true)}
        >
          Add task
        </Button>
      )}
    </Box>
  )
}
