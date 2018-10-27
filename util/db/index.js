const mongoose = require('mongoose')
const baseUri = 'mongodb://localhost'

const connection = mongoose.createConnection(baseUri, { useNewUrlParser: true })

const noteSchema = mongoose.Schema({
  category: String,
  title: String,
  content: String,
  createdDate: String
})

const NoteModel = connection.model('Note', noteSchema, 'notes')

/**
 *
 * @param {Note} note
 */
module.exports.addNote = note => {
  const model = new NoteModel({ title: note.title, content: note.content, category: note.category, createdDate: note.createdDate })

  return new Promise((resolve, reject) => {
    model.save((err, res) => {
      if (err) reject(err)
      else resolve(res)
    })
  })
}

/**
 * @typedef {Object} Note
 * @property {string} title
 * @property {string} content
 * @property {string} category
 * @property {string} createdDate
 */
