import {
  getMovieById,
  getMovies,
  getMovieByMinimumRating,
  getMovieByMinimumYear
} from "../db";

export const home = async (req, res) => {
  const movies = await getMovies();
  res.render("home", { movies });
};
export const movieDetail = (req, res) => {
  res.render("movieDetail");
};
export const filterMovie = (req, res) => {
  res.render("filterMovie");
};
