import { createContext } from 'react'

interface IUIContext {
  sideMenuOpen: boolean
  isAddingEntry: boolean
  isDragging: boolean
  /* Methods */
  closeSideMenu: () => void
  openSideMenu: () => void
  setIsAddingEntry: (isAddingEntry: boolean) => void
  startDragging: () => void
  endDragging: () => void
}

export const UIContext = createContext({} as IUIContext)
