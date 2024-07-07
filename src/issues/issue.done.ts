import { Issue } from "./issue";

export class IssueDone extends Issue {
  constructor(fields: any) {
    super(`${fields.assignee.displayName} has finished ${fields.summary}`);
  }
}
