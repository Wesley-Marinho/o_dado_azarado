import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  level: {
    type: String,
    required: true,
  },
  effect: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Categories", Schema);