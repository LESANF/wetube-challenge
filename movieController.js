import Movie from "./models/Movie";
import { addMovie } from "./db";

export const home = async (req, res) => {
  try {
    const movies = await Movie.find({});
    res.render("movies", { pageTitle: "Home", movies });
  } catch (error) {
    res.render("movies", { pageTitle: "Home", movies: [] });
  }
};

/*
Write the controller or controllers you need to render the form
and to handle the submission
*/

export const getCreateMovie = (req, res) => {
  res.render("create", { pageTitle: "Create" });
};

export const postCreateMovie = async (req, res) => {
  const {
    body: { title, year, rating, synopsis, genres }
  } = req;

  try {
    const genresAry = genres.split(",");

    if (title.length < 3) {
      res.render("404Two", { pageTitle: "ERROR PAGE !" });
    } else {
      const newMovie = await Movie.create({
        title,
        year,
        rating,
        synopsis,
        genres: genresAry
      });
      res.redirect(`/${newMovie.id}`);
    }
  } catch (error) {
    res.render("404", { pageTitle: "ERROR PAGE !" });
  }
};

export const movieDetail = async (req, res) => {
  const {
    params: { id }
  } = req;

  try {
    const movie = await Movie.findById(id);
    if (!movie) {
      res.render("404", { pageTitle: "ERROR PAGE !" });
    }
    return res.render("detail", { movie, pageTitle: movie.title });
  } catch (error) {
    res.render("404", { pageTitle: "ERROR PAGE !" });
  }
};

export const search = async (req, res) => {
  const url = req.url;
  const getYear = url.split("=")[1];
  const getRating = url.split("=")[1];

  const checkYearBoolean = url.includes("year");
  const checkRatingBoolean = url.includes("rating");

  if (checkRatingBoolean === true) {
    if (isNaN(getRating) === false && getRating <= 10) {
      const movies = await Movie.find({ rating: { $gte: getRating } });
      res.render("search", {
        movies,
        searchObj: "rating",
        value: getRating,
        pageTitle: `Filtering by rating: ${getRating}`
      });
    } else {
      res.render("404", { pageTitle: "ERROR PAGE !" });
    }
  } else if (checkYearBoolean === true) {
    if (isNaN(getYear) === false && getYear <= 2020) {
      const movies = await Movie.find({ year: { $gte: getYear } });
      res.render("search", {
        movies,
        searchObj: "year",
        value: getYear,
        pageTitle: `Filtering by rating: ${getYear}`
      });
    } else {
      res.render("404", { pageTitle: "ERROR PAGE !" });
    }
  } else {
    res.render("404", { pageTitle: "ERROR PAGE !" });
  }
};

export const getMovieEdit = async (req, res) => {
  const {
    params: { id }
  } = req;

  try {
    const movie = await Movie.findById(id);
    const genres = movie.genres.toString();

    res.render("edit", { movie, pageTitle: movie.title, genres });
  } catch (error) {
    res.render("404", { pageTitle: "ERROR PAGE !" });
  }
};

export const postMovieEdit = async (req, res) => {
  const {
    params: { id },
    body: { title, year, rating, synopsis, genres }
  } = req;

  const genresAry = genres.split(",");

  try {
    await Movie.findOneAndUpdate(
      { _id: id },
      { title, year, rating, synopsis, genres: genresAry }
    );
    res.redirect(`/${id}`);
  } catch (error) {
    res.render("404", { pageTitle: "ERROR PAGE !" });
  }
};

export const deleteMovie = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    await Movie.findOneAndRemove({ _id: id });
  } catch (error) {
    res.render("404", { pageTitle: "ERROR PAGE !" });
  }
  res.redirect("/");
};
