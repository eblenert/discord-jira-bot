import { IssueProps, JiraWebhook } from "types/jira-webhook";
import { Issue } from "./issue";

export class IssuePaused extends Issue {
  constructor(key: string, fields: IssueProps) {
    super(key, `${fields.name} paused ${fields.text}`);
  }
}
