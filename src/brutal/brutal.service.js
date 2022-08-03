const knex = require('../db/connection')

function create(task) {
    return knex('task')
        .insert(task)
        .returning('task_description')
        .then((createdTasks) => createdTasks)
}

function list() {
    return knex('task').select('task_description').where({ task_brutal: true })
}

function listArchived() {
    return knex('task').select('task_description').where({ task_archived_brutal: true })
}

module.exports = {
    create,
    list,
    listArchived
}
