import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  category: [String],
  shortDescription: String,
  recipeDescription: String,
  recipeAuthor: String,
  preperationTime: Number,
  persons: Number,
  starsCount: { type: Number, default: 0 },
  recipeImage: String,
  createdAt: { type: Date, default: new Date() },
});

const postModel = mongoose.model("postModel", postSchema);

export default postModel;
