import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'
import { Entry } from 'interfaces'
import {
  DragEvent,
  FC,
  PropsWithChildren,
  ReactNode,
  useEffect,
  useState,
  useContext,
} from 'react'
import { UIContext } from '../../context/ui/uIContext'

type EntryCardProps = {
  entry: Entry
} & PropsWithChildren

export const EntryCard: FC<EntryCardProps> = ({ entry }) => {
  const { startDragging, endDragging, isDragging } = useContext(UIContext)

  const handleDragStart = (event: DragEvent): void => {
    startDragging()
    event.dataTransfer.setData('text', JSON.stringify(entry))
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
      sx={{
        marginTop: 1,
        marginBottom: 1,
        backgroundColor: isDragging ? '#bcb3fc' : '#e9e6ff',
        transition: 'backgroundColor 250ms ease-in-out',
      }}
      elevation={0}
      /* Drag Events */
      draggable
      onDragStart={handleDragStart}
      onDragEnd={() => endDragging()}
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
