if (process.env.USER) require('dotenv').config()

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const brutalRouter = require('./brutal/brutal.router')
const dailyRouter = require('./daily/daily.router')
const longtermRouter = require('./longterm/longterm.router')
const calendarRouter = require('./calendar/calendar.router')
const errorHandler = require('./errors/errorHandler')
const notFoundHandler = require('./errors/notFoundHandler')

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.use('/brutal', brutalRouter)
app.use('/daily', dailyRouter)
app.use('/longterm', longtermRouter)
app.use('/calendar', calendarRouter)

app.use(notFoundHandler)
app.use(errorHandler)

module.exports = app
