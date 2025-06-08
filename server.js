import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import { config } from "dotenv";
import {
  addMovie,
  getMovies,
  getMovieById,
  updateMovieById,
  deleteMovieById,
} from "./Controllers/movie.js";
const app = express();

app.use(cors());
app.use(bodyParser.json());

// .env setup
config({ path: ".env" });

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "Movie_API",
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

const port = process.env.PORT || 3000;

// movie get
app.get("/movies", getMovies);

// get movie by id
app.get("/movies/:id", getMovieById);

// movie add
app.post("/movies/add", addMovie);

// update movie by id
app.put("/movies/update/:id", updateMovieById);

// delete movie by id
app.delete("/movies/delete/:id,", deleteMovieById);

app.listen(port, () => console.log(`Server Is Running On Port ${port}`));
