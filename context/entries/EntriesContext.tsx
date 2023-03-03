import { Entry } from 'interfaces'
import { createContext } from 'react'

interface IEntriesContext {
  entries: Entry[]
  addNewEntry: (description: string) => void
  updateEntry: (entry: Entry) => void
}

export const EntriesContext = createContext({} as IEntriesContext)
