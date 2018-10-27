const status = require('../../util/StatusCodes')
const tools = new (require('../../util/tools'))()

const db = require('../../util/db/index')

let _title = 'TBD'
let _content = 'TBD'
let _category = 'TBD'
let _createdDate = tools.formatTime('YYYY/MM/DD')

/**
 * The POST method handler for the Notes endpoint. Handles everything necessary
 * when an authenticated POST request is received.
 *
 * @param {Request} req
 * @param {Response} res
 */
module.exports.post = (req, res) => {
  res.sendStatus(status.success.ok)

  if (req.query.title !== undefined) _title = req.query.title
  if (req.query.content !== undefined) _content = req.query.content
  if (req.query.category !== undefined) _category = req.query.category.toLowerCase()
  const note = {
    title: _title,
    content: _content,
    category: _category,
    createdDate: _createdDate
  }

  console.log(`Note...`)
  console.log(note)

  db.addNote(note).then(res => console.log(res)).catch(err => console.error(err))
}

/**
 * The GET method handler for the Notes endpoint. Handles everything necessary
 * for an authenticated GET request.
 *
 * @param {Request} req
 * @param {Response} res
 */
module.exports.get = (req, res) => {
  console.log(`Get notes.`)
  res.sendStatus(status.success.noContent)
}
