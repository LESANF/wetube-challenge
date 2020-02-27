import express from "express";
import path from "path";
import "./db";
import movieRouter from "./routers/movieRouter";

const app = express();

app.set("view engine", "pug");
app.use("/", movieRouter);

export default app;
