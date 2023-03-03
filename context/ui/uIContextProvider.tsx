import { UIContext, UIReducer } from 'context/ui'
import { FC, PropsWithChildren, useReducer } from 'react'

export type UIState = {
  sideMenuOpen: boolean
  isAddingEntry: boolean
  isDragging: boolean
}

const INITIAL_STATE: UIState = {
  sideMenuOpen: false,
  isAddingEntry: false,
  isDragging: false,
}

export const UIContextProvider: FC<PropsWithChildren> = ({ children }) => {
  /* Closes sidemenu */
  const openSideMenu = (): void => dispatch({ type: 'UI - Open Sidebar', payload: state })

  /* Opens sidemenu */
  const closeSideMenu = (): void =>
    dispatch({ type: 'UI - Close Sidebar', payload: state })

  /* Adding entry */
  const setIsAddingEntry = (isAdding: boolean): void =>
    dispatch({
      type: 'UI - Set isAddingEntry',
      payload: isAdding,
    })

  /* Start dragging */
  const startDragging = (): void =>
    dispatch({
      type: 'UI - Start Dragging',
      payload: state,
    })

  /* End dragging */
  const endDragging = (): void =>
    dispatch({
      type: 'UI - End Dragging',
      payload: state,
    })

  const [state, dispatch] = useReducer(UIReducer, INITIAL_STATE)

  return (
    <UIContext.Provider
      value={{
        ...state,
        /* Methods */
        closeSideMenu,
        openSideMenu,
        setIsAddingEntry,
        startDragging,
        endDragging,
      }}
    >
      {children}
    </UIContext.Provider>
  )
}
