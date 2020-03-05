import Moive from "./models/Movie";
import { addMovie } from "./db";

export const home = async (req, res) => {
  try {
    const movies = await Moive.find({});
    res.render("movies", { pageTitle: "Home", movies });
  } catch (error) {
    console.log(error);
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

    const newMovie = await Moive.create({
      title,
      year,
      rating,
      synopsis,
      genres: genresAry
    });

    console.log(newMovie.id);
    res.redirect(`/${newMovie.id}`);
  } catch (error) {
    console.log(error);
  }
};

export const movieDetail = async (req, res) => {
  const {
    params: { id }
  } = req;

  try {
    const movie = await Moive.findById(id);
    if (!movie) {
      res.render("404", { pageTitle: "Movie not found" });
    }
    return res.render("detail", { movie, pageTitle: movie.title });
  } catch (error) {
    console.log(error);
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
      const movies = await Moive.find({ rating: { $gte: getRating } });
      res.render("search", {
        movies,
        searchObj: "rating",
        value: getRating
      });
    } else {
      res.render("404");
    }
  } else if (checkYearBoolean === true) {
    if (isNaN(getYear) === false && getYear <= 2020) {
      const movies = await Moive.find({ year: { $gte: getYear } });
      res.render("search", { movies, searchObj: "year", value: getYear });
    } else {
      res.render("404");
    }
  } else {
    res.render("404");
  }
};
