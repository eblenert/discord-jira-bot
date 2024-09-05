import { RequestHandler } from "express";

export const jiraEventTypeFilter: RequestHandler = (req, res, next) => {
  const issueType = req.body?.issue_event_type_name ?? null;

  switch (issueType) {
    case "issue_created":
    case "issue_generic":
      next();
      break;
    default:
      res.sendStatus(200);
      break;
  }
};
