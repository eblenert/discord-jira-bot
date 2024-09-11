import request from "supertest";
import app from "../app";
// import { jiraCard as playCard1 } from "../cards/straight-to-play-1";
// import { jiraCard as playCard2 } from "../cards/straight-to-play-2";
import { JiraWebhook } from "types/jira-webhook";
const playCard1 = {
  issue_event_type_name: "issue_created",
  issue: {
    key: "one",
    fields: {
      status: {
        name: "Wishlist",
      },
      assignee: {
        displayName: "John Travolta",
      },
      summary: "Content",
    },
  },
} as JiraWebhook;

const playCard2 = {
  issue_event_type_name: "issue_generic",
  issue: {
    key: "one",
    fields: {
      status: {
        name: "To Play",
      },
      assignee: {
        displayName: "John Travolta",
      },
      summary: "Content",
    },
  },
} as JiraWebhook;

function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

describe("Routes", () => {
  const fetchSpy = jest
    .spyOn(global, "fetch")
    .mockResolvedValue({} as Response);

  beforeEach(() => {
    fetchSpy.mockClear();
  });

  it("should call fetch only once, after 500ms", async () => {
    const res1 = await request(app).post("/").send(playCard1);
    expect(res1.statusCode).toEqual(200);
    const res2 = await request(app).post("/").send(playCard2);
    expect(res2.statusCode).toEqual(200);
    await sleep(1000);
    expect(fetchSpy).toHaveBeenCalledTimes(1);
  });
});
