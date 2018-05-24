

exports.up = function(knex, Promise) {
 return Promise.all([
    knex.schema.createTableIfNotExists('users_table', function(table){   
    table.increments();
    table.string('name');
    table.string('password');
    })
  ])
}

exports.down = function(knex, Promise) {
};
