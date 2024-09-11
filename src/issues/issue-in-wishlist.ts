import { JiraWebhook } from "types/jira-webhook";
import { Issue } from "./issue";

export class IssueInWishlist extends Issue {
  constructor(key: string, fields: JiraWebhook['issue']['fields']) {
    super(key, `${fields.assignee.displayName} added ${fields.summary} to wishlist`);
  }
}
