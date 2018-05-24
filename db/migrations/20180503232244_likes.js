
exports.up = function(knex, Promise) {
 return Promise.all([
    knex.schema.createTable('likes', function(table){   
    table.increments();
    table.integer('user_id').references('id').inTable('users_table');
    })
  ])
}
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('likes');
  
};
