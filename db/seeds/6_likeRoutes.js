
exports.seed = function(knex, Promise) {
return knex('likes').del()
    .then(function () {
      return Promise.all([
        knex('likes').insert({id: 1, user_id: 1, route_id: 3}),
        knex('likes').insert({id: 2, user_id: 2, route_id: 3}),
        knex('likes').insert({id: 3, user_id: 3, route_id: 3})
      ])
    }).catch((err)=>{
      console.log("from the 6_likesRoutes", err)

    })
}