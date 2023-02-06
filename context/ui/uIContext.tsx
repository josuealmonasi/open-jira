import { createContext } from 'react'

interface IUIContext {
  sideMenuOpen: boolean
  /* Methods */
  closeSideMenu: () => void
  openSideMenu: () => void
}

export const UIContext = createContext({} as IUIContext)
