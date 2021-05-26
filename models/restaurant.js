const mongoose = require("mongoose");
const Schema = mongoose.Schema; //used to write less

const RestaurantSchema = new Schema({
  title: String,
  price: String,
  description: String,
  location: String,
});

module.exports = mongoose.model("Restaurant", RestaurantSchema);
