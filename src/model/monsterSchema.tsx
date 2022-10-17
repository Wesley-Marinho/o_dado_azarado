import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  armor: {
    type: Number,
    required: true,
  },
  attacks: {
    type: String,
    required: true,
  },
  car: {
    type: String,
    required: true,
  },
  con: {
    type: String,
    required: true,
  },
  des: {
    type: String,
    required: true,
  },
  for: {
    type: String,
    required: true,
  },
  inte: {
    type: String,
    required: true,
  },
  sabe: {
    type: String,
    required: true,
  },
  chanllengeLevel: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  displacement: {
    type: String,
    required: true,
  },
  exp: {
    type: Number,
    required: true,
  },
  healhPoints: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Categories", Schema);
