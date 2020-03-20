exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          description: "sign up",
          notes: "for classes",
          project_id: 1,
          completed: true
        },
        {
          description: "attend",
          notes: "lectures",
          project_id: 1,
          completed: true
        },
        {
          description: "git gud",
          notes: "git gud",
          project_id: 2,
          completed: false
        },
        {
          description: "???",
          notes: "???",
          project_id: 3,
          completed: false
        },
        {
          description: "???",
          notes: "profit",
          project_id: 3,
          completed: false
        }
      ]);
    });
};
