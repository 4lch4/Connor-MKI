const mongoose = require('mongoose')

const noteSchema = mongoose.Schema({
  category: String,
  title: String,
  content: String,
  createdDate: String
})

module.exports.model = connection => {
  return connection.model('Note', noteSchema, 'notes')
}
