const express = require('express')
const parser = require('body-parser')
const morgan = require('morgan')
const PORT = process.env.PORT || 3030

const app = express()

require('./app/routes')(app)

app.use(morgan('combined'))
app.use(parser.json())

app.listen(PORT, () => console.log(`Connor is running on port ${PORT}...`))
