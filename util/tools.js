const moment = require('moment-timezone')

module.exports = class Tools {
  formatTime (format) {
    return moment.tz('UTC').format(format)
  }
}
