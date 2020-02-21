import express from "express";
import routes from "../routes";
import { v2, remove, edit } from "../controllers/Controller";

const v2Router = express.Router();

v2Router.get(routes.remove, remove);
v2Router.get(routes.edit, edit);

export default v2Router;
