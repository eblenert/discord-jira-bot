import { JiraWebhook } from "types/jira-webhook";
import { Issue } from "./issue";

export class IssueInToPlay extends Issue {
  constructor(key: string, fields: JiraWebhook['issue']['fields']) {
    super(key, `${fields.assignee.displayName} wants to play ${fields.summary}`);
  }
}
