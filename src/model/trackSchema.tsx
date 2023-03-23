import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Categories", Schema);