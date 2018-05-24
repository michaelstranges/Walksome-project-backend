
exports.up = function(knex, Promise) {
 return Promise.all([
    knex.schema.createTable('comments', function(table){   
    table.increments();
    table.string('comment');
    table.integer('user_id').references('id').inTable('users_table');
    })
  ])
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments');
};
