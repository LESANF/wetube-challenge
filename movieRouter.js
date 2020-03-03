import express from "express";
import {
  home,
  movieDetail,
  createMovie,
  getCreateMovie,
  postCreateMovie
} from "./movieController";

const movieRouter = express.Router();

movieRouter.get("/", home);
movieRouter.get("/add", getCreateMovie);
movieRouter.post("/add", postCreateMovie);
/*
Here add a way to handle GET and POST requests to the "/add" URL
Make sure is ABOVE /:id or it WON'T work.
*/

movieRouter.get("/:id", movieDetail);

export default movieRouter;
