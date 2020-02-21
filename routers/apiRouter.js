import express from "express";
import routes from "../routes";
import { api, documentation } from "../controllers/Controller";
import v1Router from "./v1Router";
import v2Router from "./v2Router";

const apiRouter = express.Router();

apiRouter.get(routes.home, api);
apiRouter.get(routes.documentation, documentation);

apiRouter.use(routes.v1, v1Router);
apiRouter.use(routes.v2, v2Router);

export default apiRouter;
