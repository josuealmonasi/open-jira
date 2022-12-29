import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import React, { FC } from 'react'
import MenuIcon from '@mui/icons-material/Menu'

export const NavBar: FC = () => {
  return (
    <AppBar>
      <Toolbar>
        <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='open drawer'
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant='h6'
          noWrap
          component='div'
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
          OpenJira
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
