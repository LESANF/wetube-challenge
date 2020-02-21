import express from "express";
import routes from "../routes";
import { v1, buy, refund } from "../controllers/Controller";

const v1Router = express.Router();

v1Router.get(routes.v1, v1);
v1Router.get(routes.buy, buy);
v1Router.get(routes.refund, refund);

export default v1Router;
