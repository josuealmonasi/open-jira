import { FC } from 'react'
import { Store } from 'components/Store/Store'
import Stripe from 'stripe'
import { GetServerSideProps } from 'next'
import getConfig from 'next/config'
import { StoreItem } from 'interfaces/Store'

const { serverRuntimeConfig } = getConfig()

export interface StoreHomeProps {
  data: StoreItem[]
}

const StoreHome: FC<StoreHomeProps> = ({ data }) => {
  return <Store data={data} />
}

export const getServerSideProps: GetServerSideProps = async _ctx => {
  const stripe = new Stripe(serverRuntimeConfig.stripe, {
    apiVersion: '2022-11-15',
  })

  const proces = await stripe.prices.list({
    limit: 10,
    expand: ['data.product'],
  })

  const data = proces.data
    .filter(item => item.active)
    .map(item => ({
      id: item.id,
      price: item.unit_amount,
      currency: item.currency,
      product: {
        id: (item.product as Stripe.Product).id,
        name: (item.product as Stripe.Product).name,
        description: (item.product as Stripe.Product).description,
        images: (item.product as Stripe.Product).images,
        created: (item.product as Stripe.Product).created,
        updated: (item.product as Stripe.Product).updated,
      },
    }))

  return {
    props: {
      data,
    },
  }
}

export default StoreHome
