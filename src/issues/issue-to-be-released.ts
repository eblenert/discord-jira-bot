import { IssueProps } from "types/jira-webhook";
import { Issue } from "./issue";

export class IssueToBeReleased extends Issue {
  constructor(key: string, fields: IssueProps) {
    super(key, `${fields.name} added ${fields.text} in To Be Released`);
  }
}
