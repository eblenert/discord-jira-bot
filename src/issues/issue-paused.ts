import { Issue } from "./issue";

export class IssuePaused extends Issue {
  constructor(fields: any) {
    super(`Paused ${fields.summary}`, fields.asignee.displayName);
  }
}
