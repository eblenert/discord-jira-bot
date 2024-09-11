import type { ErrorRequestHandler } from "express";

export const genericErrorHandler: ErrorRequestHandler = (
  err,
  req,
  res,
  _next
) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.sendStatus(err.status || 500);
};
