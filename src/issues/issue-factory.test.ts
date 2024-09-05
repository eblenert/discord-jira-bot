import { JiraWebhook } from "../types/jira-webhook";
import { IssueFactory } from "./issue-factory";

describe("Issue factory", () => {
  const issueFactory = new IssueFactory();
  it("should return the right object", () => {
    const input = {
      issue: {
        fields: {
          assignee: {
            displayName: "E",
          },
          summary: "IssueOne",
        },
      },
      changelog: {
        items: [
          {
            field: "status",
            toString: "To Be Released",
          },
        ],
      },
    } as JiraWebhook;
    const issue = issueFactory.createIssue(input);
    expect(issue).not.toBeNull();
    expect(issue!.getMessage().content).toBe(
      "E added IssueOne in To Be Released"
    );
  });
});
