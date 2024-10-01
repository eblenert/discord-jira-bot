import { IssueProps } from "types/jira-webhook";
import { Issue } from "./issue";

export class IssueInPlaying extends Issue {
  constructor(key: string, fields: IssueProps) {
    super(key, `${fields.name} started playing ${fields.text}`);
  }
}
