import { createContext } from 'react'

interface IUIContext {
  sideMenuOpen: boolean
  isAddingEntry: boolean
  /* Methods */
  closeSideMenu: () => void
  openSideMenu: () => void
  setIsAddingEntry: (isAddingEntry: boolean) => void
}

export const UIContext = createContext({} as IUIContext)
