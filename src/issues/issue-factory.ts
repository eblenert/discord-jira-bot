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

    const name = input.user.displayName;
    const text = input.issue.fields.summary;

    switch (status) {
      case Status.ToBeReleased: {
        return new IssueToBeReleased(key, {
          name,
          text,
        });
      }
      case Status.Wishlist: {
        return new IssueInWishlist(key, {
          name,
          text,
        });
      }

      case Status.ToPlay: {
        return new IssueInToPlay(key, {
          name,
          text,
        });
      }

      case Status.Playing: {
        return new IssueInPlaying(key, {
          name,
          text,
        });
      }

      case Status.Paused: {
        return new IssuePaused(key, {
          name,
          text,
        });
      }

      case Status.Abandoned: {
        return new IssueAbandoned(key, {
          name,
          text,
        });
      }

      case Status.Done: {
        return new IssueDone(key, {
          name,
          text,
        });
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
