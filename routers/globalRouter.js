import express from "express";
import routes from "../routes";
import { home, join, login, confirm } from "../controllers/Controller";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.confirm, confirm);

export default globalRouter;
