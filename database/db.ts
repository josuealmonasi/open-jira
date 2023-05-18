import mongoose from 'mongoose'

/* 
  0: disconnected
  1: connected
  2: connecting
  3: disconnecting
*/
const mongoConnection = {
  isConnected: 0,
}

export const connect = async () => {
  if (mongoConnection.isConnected) {
    console.log('=> using existing database connection')
    return
  }

  /* Checks if there is a connection alive already */
  if (mongoose.connections.length > 0) {
    mongoConnection.isConnected = mongoose.connections[0].readyState

    if (mongoConnection.isConnected === 1) {
      console.log('=> using existing database connection')
      return
    }

    await mongoose.disconnect()
  }

  console.log('=> using new database connection')
  await mongoose.connect('process.env.MONGODB_URI')

  mongoConnection.isConnected = 1
}

export const disconnect = async () => {
  if (!mongoConnection.isConnected) return
  await mongoose.disconnect()
  mongoConnection.isConnected = 0
  console.log('=> database disconnected')
}
