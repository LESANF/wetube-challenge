import mongoose from "mongoose";

let movies = [];

mongoose.connect("mongodb://localhost:27017/Youtube", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

const db = mongoose.connection;

const handleOpen = () => console.log("✅  Connected to DB !!!");
const handleError = error => console.log(`❌ Error on DB Connection:${error}`);

db.once("open", handleOpen);
db.on("error", handleError);

// This gives you one movie, don't forget to pass the ID
export const getMovieById = id => {
  if (!id) {
    throw Error("❌  YOU FORGOT TO PASS THE MOVIE ID TO THE FUNCTION  ❌ ");
  }
  return movies.find(m => m.id === parseInt(id, 10));
};

/*
This adds a movie to the DB.
Only ONE required argument, it should be an object containing
  title: string;
  synopsis: string;
  genres: Array of strings;
*/

export const addMovie = ({ title, synopsis, genres }) => {
  if (typeof title !== "string" || typeof synopsis !== "string") {
    throw Error("❌  title and synopsis should be strings  ❌");
  }
  if (!genres instanceof Array) {
    throw Error("❌  genres should be an array  ❌");
  }
  const id = Math.floor(Math.random() * (title.length + Date.now()));
  movies = [{ id, title, synopsis, genres }, ...movies];
};
