import mongoose from 'mongoose'

const courseSchema = new mongoose.Schema({
  name: String,
  location: String,
  city: String,
  state: String,
  public: Boolean,
  priceOfRound: Number,
  difficulty: Number,
  rating: Number,
})

const Course = mongoose.model('Course', courseSchema)
export default Course
