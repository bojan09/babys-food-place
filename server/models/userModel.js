import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  confirmPassword: { type: String, required: true },
  birthday: { type: Date, required: true, trim: true },
  id: { type: String },
});

export default mongoose.model("userModel", userSchema);