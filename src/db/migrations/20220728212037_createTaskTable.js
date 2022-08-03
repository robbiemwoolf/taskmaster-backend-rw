exports.up = function(knex) {
    return knex.schema.createTable('task', (table) => {
        table.increments('supplier_id').primary()
        table.string('task_description').notNullable()
        table.boolean('task_archived_brutal')
        table.boolean('task_brutal')
        table.boolean('task_archived_daily')
        table.boolean('task_daily')
        table.boolean('task_archived_longterm')
        table.boolean('task_longterm')
        table.timestamps(true, true)
    })
}

exports.down = function(knex) {
    return knex.schema.dropTable('task')
}