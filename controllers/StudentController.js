const Student = require('../models/Student')

module.exports = {

  async index(req, res) {

    const student = await Student.find()

    return res.json(student)

  },

  async store(req, res) {

    const { name, mail, dateOfBirth, avatarUrl, action } = req.body

    let student = await Student.findOne({ mail })

    if (!student) {

      if (action === 'add') {

        student = await Student.create({
          name,
          mail,
          dateOfBirth,
          avatarUrl
        })

      }

      if (action === 'edit') {

        student = await Student.update({
          name,
          mail,
          dateOfBirth,
          avatarUrl
        })

      }

      return res.json(student)

    } else {

      return res.json({ msg: 'Já cadastrado!' })

    }

  },

  async update(req, res) {
    // todo...
  },

  async destroy(req, res) {

    const { mail } = req.body

    let student = await Student.findOne({ mail })

    if (student) {

      student = await Student.deleteMany({ mail: mail })

      return res.json({ msg: 'Excluído' })

    } else {

      return res.json({ msg: 'Deu xabu!' })

    }

  },

}