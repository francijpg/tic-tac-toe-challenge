import { Schema, model } from "mongoose";

const GameSchema = new Schema(
  {
    winner: {
      type: String,
      required: true,
      maxLength: [30, "name can not be more than 30 characters"],
      trim: true
    },
    result: {
      type: Array,
      required: true,
      trim: true
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model("Game", GameSchema);