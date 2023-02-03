import { createContext } from 'react'

export interface UIContextType {
  sideMenuOpen: boolean
  /* Methods */
  closeSideMenu: () => void
  openSideMenu: () => void
}

export const UIContext = createContext({} as UIContextType)
