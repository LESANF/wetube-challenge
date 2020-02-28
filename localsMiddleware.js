export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Challenge";
  res.locals.pagetitle = "Challenge";
  next();
};
