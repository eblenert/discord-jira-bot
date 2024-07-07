import createError from "http-errors";
import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";

import indexRouter from "./routes";
import { jiraHmacAuth } from "./middlewares/jira-hmac";
import { genericErrorHandler } from "./handlers/generic-error-handler";

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(cookieParser());

app.use(jiraHmacAuth);

app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(genericErrorHandler);

export default app;
