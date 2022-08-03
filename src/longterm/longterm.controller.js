const asyncErrorBoundary = require('../errors/asyncErrorBoundary')
const longtermService = require('./longterm.service')

async function create(req, res, next) {
    const data = await longtermService.create(req.body.data)
    res.status(201).json({ data })
}

async function list(req, res) {
    const data = await longtermService.list()
    res.json({ data })
}

async function listArchived(req, res) {
    const data = await longtermService.listArchived()
    res.json({ data })
}

module.exports = {
    create: asyncErrorBoundary(create),
    list: asyncErrorBoundary(list),
    listArchived: asyncErrorBoundary(listArchived),
}
