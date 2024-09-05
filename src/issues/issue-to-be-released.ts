import { Issue } from "./issue";

export class IssueToBeReleased extends Issue {
  constructor(fields: any) {
    super(
      `${fields.assignee.displayName} added ${fields.summary} in To Be Released`
    );
  }
}
