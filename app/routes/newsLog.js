const status = require('../../util/StatusCodes')

module.exports.post = (req, res) => {
  res.sendStatus(status.success.noContent)
}

module.exports.get = (req, res) => {
  res.sendStatus(status.success.noContent)
}
