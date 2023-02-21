import { UIContext, UIReducer } from 'context/ui'
import { FC, PropsWithChildren, useReducer } from 'react'

export type UIState = {
  sideMenuOpen: boolean
  isAddingEntry: boolean
}

const INITIAL_STATE: UIState = {
  sideMenuOpen: false,
  isAddingEntry: false,
}

export const UIContextProvider: FC<PropsWithChildren> = ({ children }) => {
  /* Closes sidemenu */
  const openSideMenu = (): void => dispatch({ type: 'UI - Open Sidebar', payload: state })
  /* Opens sidemenu */
  const closeSideMenu = (): void =>
    dispatch({ type: 'UI - Close Sidebar', payload: state })
  /* Adding entry */
  const setIsAddingEntry = (isAdding: boolean) => {
    dispatch({
      type: 'UI - Set isAddingEntry',
      payload: isAdding,
    })
  }
  const [state, dispatch] = useReducer(UIReducer, INITIAL_STATE)

  return (
    <UIContext.Provider
      value={{
        ...state,
        /* Methods */
        closeSideMenu,
        openSideMenu,
        setIsAddingEntry,
      }}
    >
      {children}
    </UIContext.Provider>
  )
}
