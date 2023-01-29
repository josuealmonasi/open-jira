import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import React, { FC, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { Sidebar } from 'components/ui'

export const NavBar: FC = () => {
  const [openSideBar, setOpenSideBar] = useState<boolean>(false)

  const handleOnClose = (): void => {
    setOpenSideBar(false)
  }

  const handleOpen = (): void => {
    setOpenSideBar(true)
  }

  return (
    <>
      <AppBar>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='open drawer'
            sx={{ mr: 2 }}
            onClick={handleOpen}
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
      <Sidebar isOpen={openSideBar} onClose={handleOnClose} />
    </>
  )
}
