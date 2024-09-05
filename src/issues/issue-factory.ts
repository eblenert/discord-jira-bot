import { JiraWebhook } from "../types/jira-webhook";
import { Status } from "../types/status";
import { IssueAbandoned } from "./issue-abandoned";
import { IssueInPlaying } from "./issue-in-playing";
import { IssueInToPlay } from "./issue-in-to-play";
import { IssueInWishlist } from "./issue-in-wishlist";
import { IssuePaused } from "./issue-paused";
import { IssueToBeReleased } from "./issue-to-be-released";
import { IssueDone } from "./issue.done";

export class IssueFactory {
  createIssue(input: JiraWebhook) {
    const status = this.getStatus(input);
    switch (status) {
      case Status.ToBeReleased: {
        return new IssueToBeReleased(input.issue.fields);
      }
      case Status.Wishlist: {
        return new IssueInWishlist(input.issue.fields);
      }

      case Status.ToPlay: {
        return new IssueInToPlay(input.issue.fields);
      }

      case Status.Playing: {
        return new IssueInPlaying(input.issue.fields);
      }

      case Status.Paused: {
        return new IssuePaused(input.issue.fields);
      }

      case Status.Abandoned: {
        return new IssueAbandoned(input.issue.fields);
      }

      case Status.Done: {
        return new IssueDone(input.issue.fields);
      }

      default: {
        console.log(`Issue status ${status} unknown`);
        return null;
      }
    }
  }

  private getStatus(webhook: JiraWebhook): string {
    const statusObj = webhook.changelog.items.find(
      (item) => item.field.toLowerCase() === "status"
    );

    return statusObj ? statusObj.toString : webhook.issue.fields.status.name;
  }
}
