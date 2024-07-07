import { IssueAbandoned } from "./issue-abandoned";
import { IssueInPlaying } from "./issue-in-playing";
import { IssueInToPlay } from "./issue-in-to-play";
import { IssueInWishlist } from "./issue-in-wishlist";
import { IssuePaused } from "./issue-paused";
import { IssueDone } from "./issue.done";

export class IssueFactory {
  createIssue(input: any) {
    switch (input.issue.fields.status.name) {
      case "Wishlist": {
        return new IssueInWishlist(input.issue.fields);
      }

      case "To Play": {
        return new IssueInToPlay(input.issue.fields);
      }

      case "Playing": {
        return new IssueInPlaying(input.issue.fields);
      }

      case "Paused": {
        return new IssuePaused(input.issue.fields);
      }

      case "Abandoned": {
        return new IssueAbandoned(input.issue.fields);
      }

      case "Done": {
        return new IssueDone(input.issue.fields);
      }

      default: {
        console.log(`Issue type ${input.issue.fields.status.name} unknown`);
        return null;
      }
    }
  }
}
