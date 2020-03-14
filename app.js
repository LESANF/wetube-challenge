import express, { response } from "express";
import path from "path";
import multer from "multer";
import fs from "fs";
import bodyParser from "body-parser";
import movieRouter from "./movieRouter";
import { localsMiddleware } from "./middlewares";
import request from "request";

const app = express();

app.set("view engine", "pug");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// request Challenge

const test = {
  a: "up!",
  b: "down!"
};

const b = "kimminsu";
const c = "hansueng";

app.get("/", (req, res) => {
  const checkUrl = req.url.split("=")[1];
  console.log(checkUrl);

  if (checkUrl) {
    request(`https://${checkUrl}`, function(error, response, body) {
      if (response && response.statusCode <= 445) {
        res.send(b);
      } else if (error) {
        res.json(c);
      }
    });
  } else {
    res.send();
  }
});

// const getRequset = async (req, res) => {
//   await request.get({ uri: "https://nomadcoders.co/" }, function(
//     error,
//     response,
//     body
//   ) {
//     console.log(body);
//   });
// };
export default app;
