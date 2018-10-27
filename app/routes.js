const token = require('../util/config.json').authToken
const status = require('../util/StatusCodes')

const routeHandlers = require('./routes/index')

const routes = {
  index: '/',
  notes: '/notes',
  newsLog: '/newsLog',
  videos: '/videos'
}

/**
 * Default route handler for Kyle.
 *
 * @param {App} app
 */
module.exports = app => {
  // #region Index Route
  // GET /
  app.get(routes.index, (req, res) => {
    if (req.headers.token !== token) return res.sendStatus(status.clientError.unauthorized)

    res.sendStatus(status.success.ok)
  })

  // POST /
  app.post(routes.index, (req, res) => {
    if (req.headers.token !== token) return res.sendStatus(status.clientError.unauthorized)

    console.log()

    res.sendStatus(status.success.noContent)
  })
  // #endregion Index route

  // #region Notes Route
  // GET /notes
  app.get(routes.notes, (req, res) => {
    if (req.headers.token !== token) return res.sendStatus(status.clientError.unauthorized)
    else routeHandlers.notes.get(req, res)
  })

  // POST /notes
  app.post(routes.notes, (req, res) => {
    if (req.headers.token !== token) return res.sendStatus(status.clientError.unauthorized)
    else routeHandlers.notes.post(req, res)
  })
  // #endregion Notes Route

  // #region News Log Route
  // GET /newsLog
  app.get(routes.newsLog, (req, res) => {
    if (req.headers.token !== token) return res.sendStatus(status.clientError.unauthorized)
    else routeHandlers.newsLog.get(req, res)
  })

  // POST /newsLog
  app.post(routes.newsLog, (req, res) => {
    if (req.headers.token !== token) return res.sendStatus(status.clientError.unauthorized)
    else routeHandlers.newsLog.post(req, res)
  })
  // #endregion News Log Route

  // #region Videos Route
  // GET /videos
  app.get(routes.videos, (req, res) => {
    if (req.headers.token !== token) return res.sendStatus(status.clientError.unauthorized)
  })

  // POST /videos
  app.post(routes.videos, (req, res) => {
    if (req.headers.token !== token) return res.sendStatus(status.clientError.unauthorized)

    if (req.query.action.toLowerCase() === 'download') {
      let videoId = req.query.videoId
      if (videoId !== undefined) console.log(`Request received to download video with id ${videoId}`)
    }

    res.sendStatus(status.success.noContent)
  })
  // #endregion Videos Route
}

// #region JSDoc Info
const App = require('express')()
// #endregion JSDoc Info
