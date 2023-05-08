import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

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

// connection string
const CONNECTION_URL =
  "mongodb+srv://millertom815:DbncdyNNuAVsiFq6@cluster0.qtw5fbr.mongodb.net/?retryWrites=true&w=majority";

// connect to database
const PORT = process.env.PORT || 5000;
mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));
