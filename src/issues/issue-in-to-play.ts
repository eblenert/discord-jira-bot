import { Issue } from "./issue";

export class IssueInToPlay extends Issue {
  constructor(fields: any) {
    super(`Wants to play ${fields.summary}`, fields.asignee.displayName);
  }
}
