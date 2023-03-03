import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'
import { Entry } from 'interfaces'
import { DragEvent, FC, PropsWithChildren, ReactNode, useEffect, useState } from 'react'

type EntryCardProps = {
  entry: Entry
} & PropsWithChildren

export const EntryCard: FC<EntryCardProps> = ({ entry }) => {
  const handleDragStart = (event: DragEvent): void =>
    event.dataTransfer.setData('text', entry._id)

  const handleOnDragEnd = () => {
    console.log('drag end')
  }

  /* Prevents hydration problems */
  const [date, setDate] = useState<ReactNode>(null)
  const parsedDate = (ms: number): ReactNode => (
    <Typography variant='body2'>
      <strong>Modified: </strong>
      {new Date(ms).toLocaleDateString()}
      <strong> at </strong>
      {new Date(ms).toLocaleTimeString()}
    </Typography>
  )

  useEffect(() => {
    setDate(parsedDate(entry.createdAt))
  }, [entry.createdAt])

  return (
    <Card
      sx={{ marginTop: 1, marginBottom: 1, backgroundColor: '#e9e6ff' }}
      elevation={0}
      /* Drag Events */
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleOnDragEnd}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }}>{entry.description}</Typography>
        </CardContent>

        <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 1.5 }}>
          {date}
        </CardActions>
      </CardActionArea>
    </Card>
  )
}
