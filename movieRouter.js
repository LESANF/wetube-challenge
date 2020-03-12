import express from "express";
import {
  home,
  getCreateMovie,
  postCreateMovie,
  movieDetail,
  search,
  getMovieEdit,
  postMovieEdit,
  deleteMovie,
  test,
  getTest,
  getUpload,
  postUpload
} from "./movieController";

import { uploadText } from "./middlewares";

const movieRouter = express.Router();

movieRouter.get("/", home);

export default movieRouter;
