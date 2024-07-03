import type { RequestHandler } from "express";
import crypto from "crypto";
import { environment } from "../environments";

const hmacHeader = "x-hub-signature";

export const jiraHmacAuth: RequestHandler = (req, res, next) => {
  if (!req.headers[hmacHeader] || req.headers[hmacHeader] === "") {
    throw new Error("Access denied.");
  }

  if (!req.body) {
    throw new Error("Access denied.");
  }

  console.log(req.body, "BODY");
  console.log(JSON.stringify(req.body), "STRING BODY");
  const computedHmac =
    "sha256=" +
    crypto
      .createHmac("sha256", environment.JIRA_SECRET_KEY)
      .update(JSON.stringify(req.body))
      .digest("hex");
  const receivedHmac = req.headers[hmacHeader] as string;

  console.log(computedHmac, "computed hmac");
  console.log(receivedHmac, "received hmac");
  if (computedHmac !== receivedHmac) {
    throw new Error("Access denied.");
  }

  next();
};
