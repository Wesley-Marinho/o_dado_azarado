import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  classes: {
    type: String,
    required: true,
  },
  descripion: {
    type: String,
    required: true,
  },
  level: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  }
});

export default mongoose.model("Categories", Schema);
