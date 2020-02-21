import express from "express";

import globalRouter from "./routers/globalRouter";
import apiRouter from "./routers/apiRouter";
import coursesRouter from "./routers/coursesRouter";
import v1Router from "./routers/v1Router";
import v2Router from "./routers/v2Router";
import routes from "./routes";

const app = express();

app.use(routes.home, globalRouter);
app.use(routes.courses, coursesRouter);
app.use(routes.api, apiRouter);
app.use(routes.v1, v1Router);
app.use(routes.v2, v2Router);

export default app;
