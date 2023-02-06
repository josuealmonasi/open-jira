import { EntriesProviderState } from 'context/entries'

type EntriesActiontype = {
  type: 'test'
}

export const EntriesReducer = (
  state: EntriesProviderState,
  action: EntriesActiontype,
): EntriesProviderState => {
  switch (action.type) {
    case 'test':
      return { ...state }
    default:
      return state
  }
}
