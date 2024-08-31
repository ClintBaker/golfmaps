import express from 'express'
import Course from '../models/courseModel.js'

const courseRouter = express.Router()

courseRouter.get('/', async (req, res, next) => {
  try {
    const courses = await Course.find()
    res.status(200).send(courses)
  } catch (e) {
    next(e)
  }
})
courseRouter.get('/:courseId', async (req, res, next) => {
  try {
    const course = await Course.findById(req.params.courseId)
    res.status(200).send(course)
  } catch (e) {
    next(e)
  }
})
courseRouter.post('/', async (req, res, next) => {
  try {
    const newCourse = new Course({ ...req.body })
    await newCourse.save()
    res.status(201).send(newCourse)
  } catch (e) {
    res.next(e)
  }
})
courseRouter.put('/:courseId', async (req, res, next) => {
  try {
    const editedCourse = await Course.findByIdAndUpdate(
      req.params.courseId,
      req.body,
      { new: true }
    )
    res.status(200).send(editedCourse)
  } catch (e) {
    next(e)
  }
})
courseRouter.delete('/:courseId', async (req, res, next) => {
  try {
    const deletedCourse = await Course.findByIdAndDelete(req.params.courseId)
    res.status(200).send(deletedCourse)
  } catch (e) {
    next(e)
  }
})

export default courseRouter
