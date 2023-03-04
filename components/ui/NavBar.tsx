import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import { Sidebar } from 'components/ui'
import { UIContext } from 'context/ui'
import { FC, useContext } from 'react'

interface NavBarProps {
  name?: string
}

export const NavBar: FC<NavBarProps> = ({ name = 'Open jira' }) => {
  const { sideMenuOpen, openSideMenu, closeSideMenu } = useContext(UIContext)

  const handleOnClose = (): void => {
    closeSideMenu()
  }

  const handleOpen = (): void => {
    openSideMenu()
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
            {name}
          </Typography>
        </Toolbar>
      </AppBar>
      <Sidebar isOpen={sideMenuOpen} onClose={handleOnClose} />
    </>
  )
}
