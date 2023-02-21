import { createTheme } from '@mui/material'
import { red } from '@mui/material/colors'

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#ffffff',
    },
    primary: {
      main: '#4a148c',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },

  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        position: 'sticky',
      },
    },
  },
})
