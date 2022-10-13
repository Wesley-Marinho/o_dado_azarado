import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  armorClass: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Categories", Schema);
