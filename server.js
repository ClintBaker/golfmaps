import express from 'express'
import dotenv from 'dotenv'
import mongoConnect from './src/modules/db.js'
import courseRouter from './src/routes/courseRouter.js'
import morgan from 'morgan'
// use env variables
dotenv.config()

const app = express()

// connect to Mongo DB
mongoConnect(process.env.MONGO_URI)
  .then(() => {
    console.log('Succesfully connected to MongoDB Atlas')
  })
  .catch((err) => console.log(err))

// middleware
app.use(express.json())
app.use(morgan('dev'))

// routing
app.use('/course', courseRouter)

// errors
app.use((error, req, res, next) => {
  console.log(error)
  res.status(500).send('there was an error')
})

// instantiate app
const PORT = process.env.PORT
app.listen(process.env.PORT, () => {
  console.log(`App is now listening on port ${PORT}`)
})
