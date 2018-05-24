
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all([
        knex('comments').insert({id: 1, comment: 'Wow, is it working??', user_id: 1}),
        knex('comments').insert({id: 2, comment: 'wow, I dont think so', user_id: 2}),
        knex('comments').insert({id: 3, comment: 'yeah... sooooooooooo', user_id: 3})
      ]);
    }).catch((err)=>{
      console.log("coming from 2215_comments ", err )
    })
};
