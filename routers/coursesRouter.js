import express from "express";
import routes from "../routes";
import { courses, newCourses, mine } from "../controllers/Controller";

const coursesRouter = express.Router();

coursesRouter.get(routes.home, courses);
coursesRouter.get(routes.new, newCourses);
coursesRouter.get(routes.mine, mine);

export default coursesRouter;
