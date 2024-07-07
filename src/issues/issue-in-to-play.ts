import { Issue } from "./issue";

export class IssueInToPlay extends Issue {
  constructor(fields: any) {
    super(`${fields.asignee.displayName} wants to play ${fields.summary}`);
  }
}
