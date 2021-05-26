const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const Restaurant = require("./models/restaurant");

mongoose.connect("mongodb://localhost:27017/yelp-camp", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/makerestaurant", async (req, res) => {
  const restaurant = new Restaurant({ title: "Boga", description: "gohood" });
  await restaurant.save();
  res.send(restaurant);
});

app.listen(3000, () => {
  console.log("Serving on port 3000");
});
