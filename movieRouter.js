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

movieRouter.get("/read", getUpload);
movieRouter.post("/read", uploadText, postUpload);

export default movieRouter;
