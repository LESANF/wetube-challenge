import express from "express";
import {
  home,
  getCreateMovie,
  postCreateMovie,
  movieDetail,
  search,
  getMovieEdit,
  postMovieEdit,
  deleteMovie
} from "./movieController";

const movieRouter = express.Router();

movieRouter.get("/", home);

movieRouter.get("/create", getCreateMovie);
movieRouter.post("/create", postCreateMovie);

movieRouter.get("/search", search);

movieRouter.get("/:id", movieDetail);

movieRouter.get("/:id/edit", getMovieEdit);
movieRouter.post("/:id/edit", postMovieEdit);

movieRouter.get("/:id/delete", deleteMovie);

export default movieRouter;
