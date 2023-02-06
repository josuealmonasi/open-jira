import { EntriesContext, EntriesReducer } from 'context/entries'
import { FC, PropsWithChildren, useReducer } from 'react'

export interface EntriesProviderState {
  entries: []
}

const INITIAL_STATE: EntriesProviderState = {
  entries: [],
}

export const EntriesProviderProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(EntriesReducer, INITIAL_STATE)
  return (
    <EntriesContext.Provider value={{ ...state }}>{children}</EntriesContext.Provider>
  )
}
