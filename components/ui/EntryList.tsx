import { List, Paper } from '@mui/material'
import { EntryCard } from 'components/ui'
import { EntriesContext } from 'context/entries'
import { EntryStatus } from 'interfaces'
import { DragEvent, FC, PropsWithChildren, useContext, useMemo } from 'react'

type EntryListProps = {
  status: EntryStatus
} & PropsWithChildren

export const EntryList: FC<EntryListProps> = ({ status }) => {
  const { entries } = useContext(EntriesContext)

  const handleOnDropEvent = (event: DragEvent) => {
    const id = event.dataTransfer.getData('text')
    console.log({ id })
  }

  const filteredEntries = useMemo(
    () => entries.filter(e => e.status === status) || [],
    [entries, status],
  )

  return (
    <div
      onDrop={handleOnDropEvent}
      onDragOver={(e: DragEvent) => {
        e.preventDefault()
      }}
    >
      <Paper
        sx={{
          height: 'calc(100vh - 200px)',
          overflow: 'scroll',
          backgroundColor: 'transparent',
          boxShadow: 'none',
        }}
      >
        <List sx={{ opacity: 1, padding: 1 }}>
          {filteredEntries.map(e => (
            <EntryCard key={e._id} entry={e} />
          ))}
        </List>
      </Paper>
    </div>
  )
}
