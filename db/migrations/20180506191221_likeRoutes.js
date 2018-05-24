
exports.up = function(knex, Promise) {
 return Promise.all([
    knex.schema.table('likes', function(table){   
    table.integer('route_id').references('id').inTable('routes');
      
    })
  ])
}

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('likes', function(table){
      table.dropColumn('route_id')
    })
  ])
}