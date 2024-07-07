import { Issue } from "./issue";

export class IssueInWishlist extends Issue {
  constructor(fields: any) {
    super(`${fields.assignee.displayName} added ${fields.summary} to wishlist`);
  }
}
