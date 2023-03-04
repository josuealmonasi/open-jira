import { List, Paper } from '@mui/material'
import { EntryCard } from 'components/ui'
import { EntriesContext } from 'context/entries'
import { EntryStatus } from 'interfaces'
import { DragEvent, FC, PropsWithChildren, useContext, useMemo } from 'react'
import { UIContext } from '../../context/ui/uIContext'

type EntryListProps = {
  status: EntryStatus
} & PropsWithChildren

export const EntryList: FC<EntryListProps> = ({ status }) => {
  const { entries, updateEntry } = useContext(EntriesContext)
  const { isDragging, endDragging } = useContext(UIContext)

  const handleOnDropEvent = (event: DragEvent) => {
    const entry = JSON.parse(event.dataTransfer.getData('entry'))
    entry.status = status
    updateEntry(entry)
    endDragging()
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
          boxShadow: 'none',
          border: isDragging ? 'dashed #cacaca 1px' : 'none',
        }}
      >
        <List
          sx={{
            opacity: isDragging ? 0.4 : 1,
            padding: 1,
            transition: 'all 250ms',
          }}
        >
          {filteredEntries.map(e => (
            <EntryCard key={e._id} entry={e} />
          ))}
        </List>
      </Paper>
    </div>
  )
}
