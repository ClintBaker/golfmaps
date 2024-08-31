import mongoose from 'mongoose'

async function mongoConnect(uri) {
  await mongoose.connect(uri)
}

export default mongoConnect
