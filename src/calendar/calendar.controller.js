const asyncErrorBoundary = require('../errors/asyncErrorBoundary')
const calendar = require('./calendar.service')

async function list(req, res) {
    const data = await calendar.list()
    res.json({ data })
}

module.exports = {
    list: asyncErrorBoundary(list),
}