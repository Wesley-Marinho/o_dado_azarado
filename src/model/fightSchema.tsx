import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  bonus: {
    type: String,
    required: true,
  },
  damage: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Categories", Schema);