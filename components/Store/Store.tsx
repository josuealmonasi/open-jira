import React, { FC } from 'react'
import { Layout } from 'components/layouts'
import { StoreItem } from 'interfaces'
import { ItemCard } from './Card'

interface StoreProps {
  data: StoreItem[]
}

export const Store: FC<StoreProps> = ({ data }) => {
  return (
    <Layout title='Coni shop' appName='Coni Shop'>
      {data.map(item => (
        <ItemCard key={item.id} item={item} />
      ))}
    </Layout>
  )
}
