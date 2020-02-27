import express from "express";
<<<<<<< HEAD
import path from "path";
import "./db";
import movieRouter from "./routers/movieRouter";
=======

import globalRouter from "./routers/globalRouter";
import routes from "./routes";
import { localsMiddleware } from "./localsMiddleware";
>>>>>>> eb81f6b41c2bf1e52c745311aff183dadc19a888

const app = express();

app.set("view engine", "pug");
<<<<<<< HEAD
app.use("/", movieRouter);
=======
app.use(localsMiddleware);
app.use(routes.home, globalRouter);
>>>>>>> eb81f6b41c2bf1e52c745311aff183dadc19a888

export default app;
