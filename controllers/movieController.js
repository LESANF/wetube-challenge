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

  res.render("movieDetail", { pagetitle: detail.title, detail });
};

export const filterMovie = async (req, res) => {
  const checkYear = "year";
  const checkRating = "rating";
  const checkUrl = req.url;
  const year = req.url.split("=")[1];
  const rating = req.url.split("=")[1];

  const checkYearBoolean = checkUrl.includes(checkYear);
  const checkRatingBoolean = checkUrl.includes(checkRating);

  const parseYear = parseInt(year);
  const parseRating = parseFloat(rating);

  if (checkYearBoolean) {
    if (parseYear < 2021 && Number.isInteger(parseYear)) {
      console.log(Number.isInteger(parseYear));
      const movies = await getMovieByMinimumYear(parseYear);
      res.render("home", {
        pagetitle: `Searching by year: ${parseYear}`,
        movies
      });
    } else {
      res.render("errorPage");
    }
  } else if (checkRatingBoolean) {
    if (parseRating <= 10) {
      const movies = await getMovieByMinimumRating(parseRating);
      res.render("home", {
        pagetitle: `Searching by rating: ${parseRating}`,
        movies
      });
    } else {
      res.render("errorPage");
    }
  } else {
    res.render("errorPage");
  }
};
