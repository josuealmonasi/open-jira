import { UIContext, UIReducer } from 'context/ui'
import { FC, PropsWithChildren, useReducer } from 'react'

export interface UIState {
  sideMenuOpen: boolean
}

const INITIAL_STATE: UIState = {
  sideMenuOpen: false,
}

export const UIContextProvider: FC<PropsWithChildren> = ({ children }) => {
  /* Closes sidemenu */
  const openSideMenu = (): void => dispatch({ type: 'UI - Open Sidebar', payload: state })
  /* Opens sidemenu */
  const closeSideMenu = (): void =>
    dispatch({ type: 'UI - Close Sidebar', payload: state })

  const [state, dispatch] = useReducer(UIReducer, INITIAL_STATE)

  return (
    <UIContext.Provider
      value={{
        ...state,
        /* Methods */
        closeSideMenu,
        openSideMenu,
      }}
    >
      {children}
    </UIContext.Provider>
  )
}
