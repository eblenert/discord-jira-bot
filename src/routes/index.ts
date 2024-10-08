import express from "express";
import { environment } from "../environments";
import { IssueFactory } from "../issues/issue-factory";
const router = express.Router();

const issueFactory = new IssueFactory();
const delayedItems = new Map<string, NodeJS.Timeout>();

router.post("/", async function (req, res, next) {
  const issue = issueFactory.createIssue(req.body);

  if (!issue) {
    res.sendStatus(200);
    return;
  }

  if (delayedItems.has(issue?.key)) {
    clearTimeout(delayedItems.get(issue.key));
  }

  const id = setTimeout(async () => {
    await fetch(environment.DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(issue.getMessage()),
    });
  }, 1000);

  delayedItems.set(issue.key, id);

  res.sendStatus(200);
});

export default router;
