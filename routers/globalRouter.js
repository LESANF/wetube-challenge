import express from "express";
import routes from "../routes";
import { login, home, photos, profile } from "../controllers/Controller";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.login, login);
globalRouter.get(routes.photos, photos);
globalRouter.get(routes.profile, profile);

export default globalRouter;
