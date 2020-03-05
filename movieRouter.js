import express from "express";
import {
  home,
  getCreateMovie,
  postCreateMovie,
  movieDetail,
  search
} from "./movieController";

const movieRouter = express.Router();

movieRouter.get("/", home);

movieRouter.get("/create", getCreateMovie);
movieRouter.post("/create", postCreateMovie);

movieRouter.get("/search", search);

movieRouter.get("/:id", movieDetail);

export default movieRouter;
