import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { FC } from 'react'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export const Sidebar: FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <Drawer anchor={'left'} open={isOpen} onClose={onClose}>
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>{index}</ListItemIcon>

                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  )
}
