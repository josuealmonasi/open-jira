import { Entry } from 'interfaces'
import { createContext } from 'react'

interface IEntriesContext {
  entries: Entry[]
  addNewEntry: (description: string) => void
}

export const EntriesContext = createContext({} as IEntriesContext)
