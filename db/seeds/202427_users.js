
exports.seed = function(knex, Promise) {
  return knex('users_table').del()
    .then(function () {
    return Promise.all([
        knex('users_table').insert({id: 1, name: 'Mateus', password: '123'}),
        knex('users_table').insert({id: 2, name: 'Mike', password:'123'}),
        knex('users_table').insert({id: 3, name: 'Braga', password:'123'})
      ]);
    }).catch((err)=>{
      console.log("coming from 2024_users ", err )
    })
};
