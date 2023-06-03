import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  password: { type: String },
  confirmPassword: { type: String },
  birthday: { type: Date, trim: true },
  id: { type: String },
});

const userModel = mongoose.model("userModel", userSchema);

export default userModel;
