import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  rhythm: {
    type: String,
    required: true,
  },
  hour: {
    type: String,
    required: true,
  },
  day: {
    type: String,
    required: true,
  },
  effect: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Categories", Schema);