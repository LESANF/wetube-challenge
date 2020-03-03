import { getMovieById, getMovies, addMovie } from "./db";

export const home = async (req, res) => {
  try {
    const movies = await getMovies();
    res.render("movies", { movies, pageTitle: "Movies!" });
  } catch (error) {
    console.log(error);
  }
};

export const movieDetail = async (req, res) => {
  const {
    params: { id }
  } = req;

  try {
    const movie = await getMovieById(id);
    if (!movie) {
      res.render("404", { pageTitle: "Movie not found" });
    }
    return res.render("detail", { movie, pageTitle: movie.title });
  } catch (error) {
    console.log(error);
  }
};

/*
Write the controller or controllers you need to render the form
and to handle the submission
*/

export const getCreateMovie = (req, res) => {
  res.render("add", { pageTitle: "Add Movie" });
};

export const postCreateMovie = async (req, res) => {
  const {
    body: { title, genres, synopsis }
  } = req;

  try {
    const movie = {
      title,
      synopsis,
      genres: genres.split(",")
    };

    addMovie(movie);

    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};
