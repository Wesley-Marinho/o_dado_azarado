import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  difficulty: {
    type: String,
    required: true,
  },
  reaction: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Categories", Schema);