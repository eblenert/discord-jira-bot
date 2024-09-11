import { JiraWebhook } from "types/jira-webhook";
import { Issue } from "./issue";

export class IssueInPlaying extends Issue {
  constructor(key: string, fields: JiraWebhook['issue']['fields']) {
    super(key, `${fields.assignee.displayName} started playing ${fields.summary}`);
  }
}
