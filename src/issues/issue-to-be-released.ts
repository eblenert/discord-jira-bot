import { JiraWebhook } from "types/jira-webhook";
import { Issue } from "./issue";

export class IssueToBeReleased extends Issue {
  constructor(key: string, fields: JiraWebhook['issue']['fields']) {
    super(key,
      `${fields.assignee.displayName} added ${fields.summary} in To Be Released`
    );
  }
}
