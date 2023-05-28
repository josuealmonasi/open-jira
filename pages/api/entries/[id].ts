import { db } from 'database'
import { Entry, IEntry } from 'models'
import mongoose from 'mongoose'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data =
  | {
      message: string
    }
  | IEntry

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { id } = req.query
  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: 'Invalid id' })
  }

  switch (req.method) {
    case 'PUT':
      return updateEntry(req, res)

    case 'GET':
      return getEntry(req, res)

    default:
      return res.status(400).json({ message: 'Invalid method' })
  }
}

/**
 *
 * @param req
 * @param res
 * @returns
 */
const updateEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id } = req.query
  await db.connect()
  const entry = await Entry.findById(id)

  if (!entry) {
    await db.disconnect()
    return res.status(404).json({ message: 'Entry not found' })
  }

  const {
    description = entry.description,
    status = entry.status,
    createdAt = Date.now(),
  } = req.body

  try {
    const updatedEntry = await Entry.findByIdAndUpdate(
      id,
      { description, status, createdAt },
      { new: true, runValidators: true },
    )

    console.log('Entry updated successfully')
    await db.disconnect()

    return res.status(200).json(updatedEntry!)
  } catch (error: any) {
    await db.disconnect()

    return res.status(400).json({ message: error.message })
  }
}

/**
 *
 * @param req
 * @param res
 * @returns
 */
const getEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id } = req.query
  await db.connect()
  try {
    const entry = await Entry.findById(id)
    if (!entry) {
      await db.disconnect()
      return res.status(404).json({ message: 'Entry not found' })
    }
    console.log('Entry fetched successfully')
    await db.disconnect()

    return res.status(200).json(entry!)
  } catch (error: any) {
    await db.disconnect()

    return res.status(400).json({ message: error.message })
  }
}
