import { List, Paper } from '@mui/material'
import { EntryCard } from 'components/ui'
import { EntriesContext } from 'context/entries'
import { EntryStatus } from 'interfaces'
import { FC, PropsWithChildren, useContext } from 'react'

type EntryListProps = {
  status: EntryStatus
} & PropsWithChildren

export const EntryList: FC<EntryListProps> = ({ status }) => {
  const { entries } = useContext(EntriesContext)

  const filteredEntries = entries.filter(e => e.status === status) || []

  return (
    <div>
      <Paper
        sx={{
          height: 'calc(100vh - 200px)',
          overflow: 'scroll',
          backgroundColor: 'transparent',
          boxShadow: 'none',
        }}
      >
        <List sx={{ opacity: 1 }}>
          {filteredEntries.map(e => (
            <EntryCard key={e._id} entry={e} />
          ))}
        </List>
      </Paper>
    </div>
  )
}
