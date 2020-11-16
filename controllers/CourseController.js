const Course = require('../models/Course')

module.exports = {

  async index(req, res) {

    const course = await Course.find()

    return res.json(course)

  },

  async store(req, res) {

    const { name, description, action } = req.body

    let course = await Course.findOne({ name })

    if (!course) {

      if (action === 'add') {

        course = await Course.create({
          name,
          description
        })

      }

      if (action === 'edit') {

        course = await Course.update({
          name,
          description
        })

      }

      return res.json(course)

    } else {

      return res.json({ msg: 'Já cadastrado!' })

    }

  },

  async update(req, res) {
    // todo...
  },

  async destroy(req, res) {

    const { name } = req.body

    let course = await Course.findOne({ name })

    if (course) {

      course = await Course.deleteMany({ name: name })

      return res.json({ msg: 'Excluído' })

    } else {

      return res.json({ msg: 'Deu xabu!' })

    }

  },

}