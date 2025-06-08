import { Movies } from "../Models/Movie.js";

//  add movie
export const addMovie = async (req, res) => {
  let newMovie = await Movies.create(req.body);
  res.json({ message: " Movie Added Successfully", newMovie });
};

// get movies
export const getMovies = async (req, res) => {
  let movies = await Movies.find();
  res.json({ message: "Movies Fetched Successfully", movies });
};
// get movie by id
export const getMovieById = async (req, res) => {
  let movie = await Movies.findById(req.params.id);
  if (!movie) {
    return res.status(404).json({ message: "Movie not Found" });
  }
  res.json({ message: "Movie Fetched Successfully", movie });
};

// update movie by id
export const updateMovieById = async (req, res) => {
  let movie = await Movies.findById(req.params.id);
  if (!movie) {
    return res.status(404).json({ message: "Movie Not Found" });
  }
  res.json({ message: "Movie Updated Successfully", movie });
};

// delete movie by id
export const deleteMovieById = async (req, res) => {
  let movie = await Movies.findByIdAndDelete(req.params.id);
  if (!movie) {
    return res.status(404).json({ message: "Movie Not Found" });
  }
  res.json({ message: "Movie Deleted Successfully", movie });
};
