import { EntriesContext, EntriesReducer } from 'context/entries'
import { Entry } from 'interfaces'
import { FC, PropsWithChildren, useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'

export interface EntriesProviderState {
  entries: Entry[]
}

const INITIAL_STATE: EntriesProviderState = {
  entries: [],
}

export const EntriesProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(EntriesReducer, INITIAL_STATE)

  const addNewEntry = (description: string): void => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description,
      createdAt: Date.now(),
      status: 'pending',
    }
    dispatch({ type: '[Entry] - Add Entry', payload: newEntry })
  }

  const updateEntry = (entry: Entry) => {
    dispatch({ type: '[Entry] - Update Entry', payload: entry })
  }
  return (
    <EntriesContext.Provider
      value={{
        ...state,
        /* Methods */
        addNewEntry,
        updateEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  )
}
