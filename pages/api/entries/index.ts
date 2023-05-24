import { db } from 'database'
import { Entry, IEntry } from 'models'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data =
  | {
      message: string
    }
  | IEntry[]
  | IEntry

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case 'GET':
      return getEntries(res)
    case 'POST':
      return postEntry(req, res)

    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

/**
 *
 * @param res
 */
const getEntries = async (res: NextApiResponse<Data>) => {
  await db.connect()
  const entries = await Entry.find().sort({ createdAt: 'desc' })
  await db.disconnect()

  res.status(200).json(entries)
}

/**
 *
 * @param req
 * @param res
 */
const postEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { description = '' } = req.body
  const newEntry = new Entry({
    description,
    createdAt: Date.now(),
  })
  try {
    await db.connect()
    await newEntry.save()
    console.log('Entry created successfully')
    await db.disconnect()

    res.status(201).json(newEntry)
  } catch (error) {
    await db.disconnect()
    console.log(error)

    res.status(500).json({ message: 'Something went wrong' })
  }
}
