import { EntriesContext, EntriesReducer } from 'context/entries'
import { Entry } from 'interfaces'
import { FC, PropsWithChildren, useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'

export interface EntriesProviderState {
  entries: Entry[]
}

const INITIAL_STATE: EntriesProviderState = {
  entries: [
    {
      _id: uuidv4(),
      description:
        'Mollit nostrud irure exercitation ad est voluptate nulla reprehenderit amet ipsum et ut duis ipsum.',
      status: 'pending',
      createdAt: 1676338569244,
    },
    {
      _id: uuidv4(),
      description:
        'Dolor veniam fugiat proident nostrud exercitation consequat pariatur ea Lorem incididunt qui ex.',
      status: 'in-progress',
      createdAt: 1676338569244 - 100000,
    },
    {
      _id: uuidv4(),
      description:
        'Incididunt fugiat consequat cupidatat mollit ex exercitation veniam eu tempor laboris.',
      status: 'completed',
      createdAt: 1676338569244 + 200000,
    },
  ],
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
  return (
    <EntriesContext.Provider
      value={{
        ...state,
        /* Methods */
        addNewEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  )
}
