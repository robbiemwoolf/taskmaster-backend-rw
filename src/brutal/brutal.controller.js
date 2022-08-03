const asyncErrorBoundary = require('../errors/asyncErrorBoundary')
const brutalService = require('./brutal.service')

async function create(req, res, next) {
    const data = await brutalService.create(req.body.data)
    res.status(201).json({ data })
}

async function list(req, res) {
    const data = await brutalService.list()
    res.json({ data })
}

async function listArchived(req, res) {
    const data = await brutalService.listArchived()
    res.json({ data })
}

module.exports = {
    create: asyncErrorBoundary(create),
    list: asyncErrorBoundary(list),
    listArchived: asyncErrorBoundary(listArchived),
}
