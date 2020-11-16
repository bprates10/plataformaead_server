const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
  name: String,
  mail: String,
  dateOfBirth: String,
  avatarUrl: String,
  courses: []
})

module.exports = mongoose.model('Student', StudentSchema)