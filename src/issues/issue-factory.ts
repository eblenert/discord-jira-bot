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
    const key = this.getKey(input);

    switch (status) {
      case Status.ToBeReleased: {
        return new IssueToBeReleased(key, input.issue.fields);
      }
      case Status.Wishlist: {
        return new IssueInWishlist(key, input.issue.fields);
      }

      case Status.ToPlay: {
        return new IssueInToPlay(key, input.issue.fields);
      }

      case Status.Playing: {
        return new IssueInPlaying(key, input.issue.fields);
      }

      case Status.Paused: {
        return new IssuePaused(key, input.issue.fields);
      }

      case Status.Abandoned: {
        return new IssueAbandoned(key, input.issue.fields);
      }

      case Status.Done: {
        return new IssueDone(key, input.issue.fields);
      }

      default: {
        console.log(`Issue ${key} status ${status} unknown`);
        return null;
      }
    }
  }

  private getStatus(webhook: JiraWebhook): string {
    return webhook.issue.fields.status.name;
  }

  private getKey(webhook: JiraWebhook): string {
    return webhook.issue.key;
  }
}
