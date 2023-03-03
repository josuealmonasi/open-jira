import { UIState } from 'context/ui'

type UIActiontype = {
  type:
    | 'UI - Open Sidebar'
    | 'UI - Close Sidebar'
    | 'UI - Set isAddingEntry'
    | 'UI - Start Dragging'
    | 'UI - End Dragging'
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

    case 'UI - Start Dragging':
      return { ...state, isDragging: true }

    case 'UI - End Dragging':
      return { ...state, isDragging: false }

    default:
      return state
  }
}
