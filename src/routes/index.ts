import express from "express";
import { environment } from "../environments";
import { IssueFactory } from "../issues/issue-factory";
const router = express.Router();

const issueFactory = new IssueFactory();

router.post("/", async function (req, res, next) {
  const issue = issueFactory.createIssue(req.body);

  if (issue) {
    await fetch(environment.DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(issue.getMessage()),
    });
  }

  res.sendStatus(200);
});

export default router;
