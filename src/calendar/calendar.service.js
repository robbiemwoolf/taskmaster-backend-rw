const knex = require('../db/connection')

function list() {
    return knex('task')
        .select('task_description')
        // TODO: filter tasks with the designated created_at date   
}

module.exports = {
    list,
}