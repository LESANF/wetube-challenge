import express from "express";
import path from "path";
import "./db";
import movieRouter from "./routers/movieRouter";
import { localsMiddleware } from "./localsMiddleware";

const app = express();

app.set("view engine", "pug");

app.use(localsMiddleware);
app.use("/", movieRouter);

export default app;
