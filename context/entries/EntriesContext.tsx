import { createContext } from 'react'

interface IEntriesContext {
  entries: []
}

export const EntriesContext = createContext({} as IEntriesContext)
