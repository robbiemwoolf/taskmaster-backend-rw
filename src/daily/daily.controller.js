const asyncErrorBoundary = require('../errors/asyncErrorBoundary')
const dailyService = require('./daily.service')

async function create(req, res, next) {
    const data = await dailyService.create(req.body.data)
    res.status(201).json({ data })
}

async function list(req, res) {
    const data = await dailyService.list()
    res.json({ data })
}

async function listArchived(req, res) {
    const data = await dailyService.listArchived()
    res.json({ data })
}

module.exports = {
    create: asyncErrorBoundary(create),
    list: asyncErrorBoundary(list),
    listArchived: asyncErrorBoundary(listArchived),
}
