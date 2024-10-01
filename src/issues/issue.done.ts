import { IssueProps } from "types/jira-webhook";
import { Issue } from "./issue";

export class IssueDone extends Issue {
  constructor(key: string, fields: IssueProps) {
    super(key, `${fields.name} has finished ${fields.text}`);
  }
}
