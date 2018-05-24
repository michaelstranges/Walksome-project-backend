
exports.up = function(knex, Promise) {
 return Promise.all([
    knex.schema.createTable('pins', function(table){   
    table.increments();
    table.string('description');

    table.integer('user_id').references('id').inTable('users_table');
    })
  ])
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('pins');
  
};
