const { findAll, findById, save, erase, update } = require("./dishController");

const resolvers = {
  Query: {
    getAllDishes: findAll,
    getDishById: findById,
  },
  Mutation: {
    addDish: save,
    updateDish: update,
    deleteDish: erase,
  },
};

module.exports = { resolvers };
