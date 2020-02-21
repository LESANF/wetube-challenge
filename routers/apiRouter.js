import express from "express";
import routes from "../routes";
import { api, documentation } from "../controllers/Controller";

const apiRouter = express.Router();

apiRouter.get(routes.api, api);
apiRouter.get(routes.documentation, documentation);

export default apiRouter;
