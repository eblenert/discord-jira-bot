import { Issue } from "./issue";

export class IssuePaused extends Issue {
  constructor(fields: any) {
    super(`${fields.asignee.displayName} paused ${fields.summary}`);
  }
}
