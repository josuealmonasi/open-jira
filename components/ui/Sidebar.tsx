import { Drawer } from '@mui/material'
import React, { FC } from 'react'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export const Sidebar: FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <Drawer anchor={'left'} open={isOpen} onClose={onClose}>
        list
      </Drawer>
    </>
  )
}
