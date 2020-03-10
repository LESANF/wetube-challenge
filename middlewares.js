import multer from "multer";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteTitle = "Nomad Movies";
  next();
};

const multerText = multer({ dest: "text/" });

export const uploadText = multerText.single("textFile");
