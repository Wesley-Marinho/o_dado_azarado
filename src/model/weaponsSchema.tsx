import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  damage: {
    type: String,
    required: true,
  },
  properties: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Categories", Schema);
