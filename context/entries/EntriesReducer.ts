import { EntriesProviderState } from 'context/entries'
import { Entry } from 'interfaces'

type EntriesActiontype = {
  type: '[Entry] - Add Entry'
  payload: Entry
}

export const EntriesReducer = (
  state: EntriesProviderState,
  action: EntriesActiontype,
): EntriesProviderState => {
  switch (action.type) {
    case '[Entry] - Add Entry':
      return { ...state, entries: [...state.entries, action.payload] }
    default:
      return state
  }
}
