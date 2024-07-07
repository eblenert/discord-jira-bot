import { Issue } from "./issue";

export class IssueInPlaying extends Issue {
  constructor(fields: any) {
    super(`${fields.assignee.displayName} started playing ${fields.summary}`);
  }
}
