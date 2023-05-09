import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
// import dotenv from "dotenv";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

console.log(process.env.DB_URI);

// postRoutes
import postRoutes from "./routes/posts.js";

// initialize the app
const app = express();

// middleware
app.use("/posts", postRoutes);

// limit images to 30mb
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// connect to database
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.DB_URI)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));
