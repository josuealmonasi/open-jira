import { UIState } from 'context/ui'

type UIActiontype = {
  type: 'UI - Open Sidebar' | 'UI - Close Sidebar' | 'UI - Set isAddingEntry'
  payload: any
}

export const UIReducer = (state: UIState, action: UIActiontype): UIState => {
  switch (action.type) {
    case 'UI - Close Sidebar':
      return { ...state, sideMenuOpen: false }

    case 'UI - Open Sidebar':
      return { ...state, sideMenuOpen: true }

    case 'UI - Set isAddingEntry':
      return { ...state, isAddingEntry: action.payload }

    default:
      return state
  }
}
