import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// import dotenv from "dotenv";
import dotenv from "dotenv";
dotenv.config();

import userModel from "../models/userModel";

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user is already in database
    const existingUser = await userModel.findOne({ email });
    if (!existingUser)
      return res.status(404).json({ message: "User doesn't exist." });

    //   Check if passwords are matching
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    //   Check if passwords are correct
    if (!isPasswordCorrect)
      return res
        .status(400)
        .json({ message: "Invalid credentials, password is incorect" });

    // Generate tokens
    const token = jwt.signin(
      {
        email: existingUser.email,
        id: existingUser._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Send token
    res.status(200).json({ result: expiresIn, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(err);
  }
};

export const signup = async (req, res) => {};
