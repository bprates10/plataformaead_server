const { Router } = require('express')
const StudentController = require('../controllers/StudentController')
const CourseController = require('../controllers/CourseController')

const routes = Router()

routes.get('/students', StudentController.index)

routes.post('/students', StudentController.store)

routes.delete('/students', StudentController.destroy)

routes.get('/courses', CourseController.index)

routes.post('/course', CourseController.store)

routes.delete('/course', CourseController.destroy)

module.exports = routes