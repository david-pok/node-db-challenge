exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          name: "join lambda",
          description: "attend course at lambda to leanr code",
          completed: true
        },
        {
          name: "git gud",
          description: "git gud",
          completed: false
        },
        {
          name: "profit",
          description: "???",
          completed: false
        }
      ]);
    });
};
