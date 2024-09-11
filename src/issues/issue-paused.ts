import { JiraWebhook } from "types/jira-webhook";
import { Issue } from "./issue";

export class IssuePaused extends Issue {
  constructor(key: string, fields: JiraWebhook['issue']['fields']) {
    super(key, `${fields.assignee.displayName} paused ${fields.summary}`);
  }
}
