import { JiraWebhook } from "types/jira-webhook";
import { Issue } from "./issue";

export class IssueDone extends Issue {
  constructor(key: string, fields: JiraWebhook['issue']['fields']) {
    super(key, `${fields.assignee.displayName} has finished ${fields.summary}`);
  }
}
