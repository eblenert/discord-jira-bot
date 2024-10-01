import { IssueProps } from "types/jira-webhook";
import { Issue } from "./issue";

export class IssueAbandoned extends Issue {
  constructor(key: string, fields: IssueProps) {
    super(key, `${fields.name} abandoned ${fields.text}`);
  }
}
