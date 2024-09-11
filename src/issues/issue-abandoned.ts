import { JiraWebhook } from "types/jira-webhook";
import { Issue } from "./issue";

export class IssueAbandoned extends Issue {
  constructor(key: string, fields: JiraWebhook['issue']['fields']) {
    super(key, `${fields.assignee.displayName} abandoned ${fields.summary}`);
  }
}
