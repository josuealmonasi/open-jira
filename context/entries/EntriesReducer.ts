import { EntriesProviderState } from 'context/entries'
import { Entry } from 'interfaces'

type EntriesActiontype = {
  type: '[Entry] - Add Entry' | '[Entry] - Update Entry'
  payload: Entry
}

export const EntriesReducer = (
  state: EntriesProviderState,
  action: EntriesActiontype,
): EntriesProviderState => {
  switch (action.type) {
    case '[Entry] - Add Entry':
      return { ...state, entries: [...state.entries, action.payload] }

    case '[Entry] - Update Entry':
      return {
        ...state,
        entries: state.entries.map(entry =>
          entry._id === action.payload._id ? action.payload : entry,
        ),
      }

    default:
      return state
  }
}
