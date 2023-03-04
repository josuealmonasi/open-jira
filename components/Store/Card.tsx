import { Button, CardActionArea, CardActions } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { StoreItem } from 'interfaces'
import { FC } from 'react'

interface ItemCardProps {
  item: StoreItem
}

export const ItemCard: FC<ItemCardProps> = ({ item }) => {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia
          component='img'
          height='250'
          image={item.product.images[0]}
          alt={item.product.name}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {item.product.name}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {item.product.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          Agregar
        </Button>
      </CardActions>
    </Card>
  )
}
