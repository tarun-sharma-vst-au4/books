const mongoose = require("mongoose");

const pokeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A pokemon must have a name"],
    unique: true,
  },
  height: {
    type: Number,
    default: 5,
  },
  weight: {
    type: Number,
    default: 50,
  },
});

//creating schema
const Poke = mongoose.model("Poke", pokeSchema);
