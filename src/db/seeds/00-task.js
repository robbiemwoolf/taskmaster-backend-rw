const task = require('../fixtures/task')

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex
    .raw('TRUNCATE TABLE task RESTART IDENTITY CASCADE')
    .then(function () {
      return knex("task").insert(task)
    })
}