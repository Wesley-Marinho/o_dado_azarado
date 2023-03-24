import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Categories", Schema);