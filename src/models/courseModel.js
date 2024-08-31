import mongoose from 'mongoose'

const courseSchema = new mongoose.Schema({
  name: String,
  lat: Number,
  lng: Number,
  city: String,
  state: String,
  public: Boolean,
  priceOfRound: Number,
  difficulty: Number,
  rating: Number,
})

const Course = mongoose.model('Course', courseSchema)
export default Course
