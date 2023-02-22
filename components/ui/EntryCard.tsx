import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'
import { DragEvent, FC, PropsWithChildren } from 'react'
import { Entry } from 'interfaces'

type EntryCardProps = {
  entry: Entry
} & PropsWithChildren

export const EntryCard: FC<EntryCardProps> = ({ entry }) => {
  const handleDragStart = (event: DragEvent): void =>
    event.dataTransfer.setData('text', entry._id)

  const handleOnDragEnd = () => {
    console.log('drag end')
  }

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
          <Typography variant='body2'>
            <strong>Modified: </strong>
            {new Date(entry.createdAt).toLocaleDateString()}
            <strong> at </strong>
            {new Date(entry.createdAt).toLocaleTimeString()}
          </Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}
