import { IssueProps } from "types/jira-webhook";
import { Issue } from "./issue";

export class IssueInToPlay extends Issue {
  constructor(key: string, fields: IssueProps) {
    super(key, `${fields.name} wants to play ${fields.text}`);
  }
}
