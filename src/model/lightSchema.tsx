import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  item: {
    type: String,
    required: true,
  },
  vision: {
    type: String,
    required: true,
  },
  distance: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Categories", Schema);
