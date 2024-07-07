import { Issue } from "./issue";

export class IssueAbandoned extends Issue {
  constructor(fields: any) {
    super(`${fields.assignee.displayName} abandoned ${fields.summary}`);
  }
}
