import { entriesApi } from 'apis'
import { EntriesContext, EntriesReducer } from 'context/entries'
import { Entry } from 'interfaces'
import { FC, PropsWithChildren, useEffect, useReducer } from 'react'

export interface EntriesProviderState {
  entries: Entry[]
}

const INITIAL_STATE: EntriesProviderState = {
  entries: [],
}

export const EntriesProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(EntriesReducer, INITIAL_STATE)

  const addNewEntry = async (description: string) => {
    const { data } = await entriesApi.post<Entry>('/entries', { description })
    dispatch({ type: '[Entry] - Add Entry', payload: data })
  }

  const updateEntry = async ({ _id, description, status }: Entry) => {
    try {
      const { data } = await entriesApi.put<Entry>(`/entries/${_id}`, {
        description,
        status,
        createdAt: Date.now(),
      })
      dispatch({ type: '[Entry] - Update Entry', payload: data })
    } catch (error) {
      console.log({ error })
    }
  }

  const refreshEntries = async () => {
    try {
      const { data } = await entriesApi.get<Entry[]>('/entries')
      dispatch({ type: '[Entry] - Refresh Entries', payload: data })
    } catch (error) {
      console.log({ error })
    }
  }

  useEffect(() => {
    refreshEntries()
  }, [])

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
