import { Drawer } from '@mui/material'
import React, { FC, useState } from 'react'

interface SidebarProps {}

export const Sidebar: FC<SidebarProps> = ({}) => {
  const [open, setOpen] = useState<boolean>(true)
  return (
    <>
      <Drawer anchor={'left'} open={open} onClose={() => setOpen(o => !o)}>
        list
      </Drawer>
    </>
  )
}
