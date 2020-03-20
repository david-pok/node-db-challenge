exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("resources").insert([
        { name: "PC", description: "most important tool for coding" },
        { name: "elite skills", description: "needed to get good" },
        { name: "???", description: "???" }
      ]);
    });
};
