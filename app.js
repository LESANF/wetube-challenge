import express from "express";

import globalRouter from "./routers/globalRouter";
import routes from "./routes";
import { localsMiddleware } from "./localsMiddleware";

const app = express();

app.set("view engine", "pug");
app.use(localsMiddleware);
app.use(routes.home, globalRouter);

export default app;
