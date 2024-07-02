const Dish = require("../models/dishModel");

const findAll = async () => {
  try {
    const result = await Dish.find({});
    return result;
  } catch (err) {
    return console.log(err);
  }
};

const findById = async (parent, args, contextValue, info) => {
  try {
    const id = args.id;
    const result = await Dish.findOne({ _id: id });

    return result;
  } catch (err) {
    return console.log(err);
  }
};

const save = async (parent, args, contextValue, info) => {
  try {
    const { name, price, type, description, image } = args;
    const dish = new Dish({ name, price, type, description, image });
    await dish.save();

    return dish;
  } catch (err) {
    return console.log(err);
  }
};

const erase = async (parent, args, contextValue, info) => {
  const { id } = args;
  try {
    const dish = await Dish.findOne({ _id: id });

    if (dish) {
      await Dish.deleteOne(dish._id);
      console.log("eliminado");
      return dish;
    } else {
      return console.log("Plano no existe");
    }
  } catch (error) {
    return console.log(err);
  }
};

const update = async (parent, args, contextValue, info) => {
  try {
    const { id, name, price, type, description, image } = args;

    const dish = await Dish.findOne({ _id: id });

    if (dish) {
      dish.name = name;
      dish.price = price;
      dish.type = type;
      (dish.description = description), (dish.image = image);

      await dish.save();

      return dish;
    } else {
      return console.log("Plato no existe");
    }
  } catch (err) {
    return console.log(err);
  }
};

module.exports = { findAll, findById, save, erase, update };
