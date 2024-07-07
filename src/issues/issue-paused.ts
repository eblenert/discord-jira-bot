import { Issue } from "./issue";

export class IssuePaused extends Issue {
  constructor(fields: any) {
    super(`${fields.assignee.displayName} paused ${fields.summary}`);
  }
}
