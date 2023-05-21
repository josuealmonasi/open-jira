import { db, seedData } from 'database'
import Entry from 'models/Entry'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(_req: NextApiRequest, res: NextApiResponse<Data>) {
  if (process.env.NODE_ENV === 'production') {
    return res.status(401).json({ name: 'Unauthorized' })
  }

  await db.connect()
  await Entry.deleteMany()
  await Entry.insertMany(seedData.entries)
  await db.disconnect()

  res.status(200).json({ name: 'Example' })
}
