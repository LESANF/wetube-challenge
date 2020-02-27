import {
  getMovieById,
  getMovies,
  getMovieByMinimumRating,
  getMovieByMinimumYear
} from "../db";

export const home = async (req, res) => {
  const movies = await getMovies();
  res.render("home", { pagetitle: "movies !", movies });
};

export const movieDetail = async (req, res) => {
  const {
    params: { id }
  } = req;

  const detail = await getMovieById(id);

  res.render("movieDetail", { detail });
};
export const filterMovie = (req, res) => {
  res.render("filterMovie");
};
