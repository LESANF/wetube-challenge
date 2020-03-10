import express from "express";
import path from "path";
import multer from "multer";
import fs from "fs";
import bodyParser from "body-parser";
import movieRouter from "./movieRouter";
import { localsMiddleware } from "./middlewares";

const app = express();

app.set("view engine", "pug");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(localsMiddleware);
app.use("/", movieRouter);

export default app;
