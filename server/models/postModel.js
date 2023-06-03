import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  shortDescription: String,
  recipeDescription: String,
  recipeAuthor: String,
  preperationTime: Number,
  persons: Number,
  category: [String],
  likes: {
    type: [String],
    default: [],
  },
  recipeImage: String,
  createdAt: { type: Date },
});

const postModel = mongoose.model("postModel", postSchema);

export default postModel;
