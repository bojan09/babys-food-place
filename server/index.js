import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
// postRoutes
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";
// import dotenv from "dotenv";
import dotenv from "dotenv";
dotenv.config();
// initialize the app
const app = express();

// limit images to 30mb
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// middleware / routes
app.use("/posts", postRoutes);
app.use("/user", userRoutes);

// connect to database
const PORT = process.env.PORT || PORT;
mongoose
  .connect(process.env.DB_URI)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));
