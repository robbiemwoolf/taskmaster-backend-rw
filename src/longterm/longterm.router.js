const router = require('express').Router({ mergeParams: true })
const controller = require('./longterm.controller')
const methodNotAllowed = require('../errors/methodNotAllowed')

router
    .route("/archived")
    .get(controller.listArchived)
    .post(controller.create)
    .all(methodNotAllowed)

router
    .route("/")
    .get(controller.list)
    .post(controller.create)
    .all(methodNotAllowed)

module.exports = router
