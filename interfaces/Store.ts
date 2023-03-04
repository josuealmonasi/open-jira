import Stripe from 'stripe'
export interface StoreItem {
  id: string
  price: string
  currency: string
  product: Stripe.Product
}
