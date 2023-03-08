const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please input a valid name."]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  score: 8,
  review: "Refreshing and crisp!",
});

// fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const Person = mongoose.model("Person", personSchema);
const person = new Person({
  name: "John",
  age: 37,
});

person.save();

const kiwi = new Fruit({
  name: "Kiwi",
  score: 9,
  review: "Sour goodness!",
});

const orange = new Fruit({
  name: "Orange",
  score: 6,
  review: "Tangy and slightly sour.",
});

const banana = new Fruit({
  name: "Banana",
  score: 7,
  review: "Potassium!",
});

Fruit.insertMany([kiwi, orange, banana])
  .then(function(){
    console.log("Successfully saved all the fruits to fruitsDB.");
  })
  .catch(function(err){
    console.log(err);
  })

Fruit.find()
.then(function(fruits){
  fruits.forEach((fruits) => {
    console.log(fruits.id, ":", fruits.name);
  })
})
.catch(function  (err) {
  console.log(err);
});
