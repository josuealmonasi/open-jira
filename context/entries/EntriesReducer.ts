import { EntriesProviderState } from 'context/entries'
import { Entry } from 'interfaces'

type EntriesActionType =
  | { type: '[Entry] - Add Entry'; payload: Entry }
  | { type: '[Entry] - Update Entry'; payload: Entry }
  | { type: '[Entry] - Refresh Entries'; payload: Entry[] }

export const EntriesReducer = (
  state: EntriesProviderState,
  action: EntriesActionType,
): EntriesProviderState => {
  switch (action.type) {
    case '[Entry] - Add Entry':
      return { ...state, entries: [action.payload, ...state.entries] }

    case '[Entry] - Update Entry':
      return {
        ...state,
        entries: state.entries.map(entry =>
          entry._id === action.payload._id ? action.payload : entry,
        ),
      }

    case '[Entry] - Refresh Entries':
      return { ...state, entries: [...action.payload] }

    default:
      return state
  }
}
