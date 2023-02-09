import { Entry } from 'interfaces'
import { createContext } from 'react'

interface IEntriesContext {
  entries: Entry[]
}

export const EntriesContext = createContext({} as IEntriesContext)
