
exports.up = function(knex, Promise) {
 return Promise.all([
    knex.schema.createTable('routes', function(table){   
    table.increments();
    table.string('name');
    table.string('description');
    table.integer('walk_time');

    table.integer('user_id').references('id').inTable('users_table');
    })
  ])
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('routes');
  
};
