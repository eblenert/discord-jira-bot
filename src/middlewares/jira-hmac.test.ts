import { environment } from "../environments";
jest.mock("../environments");
import { jiraHmacAuth } from "./jira-hmac";
import type { Request, Response, NextFunction } from "express";

describe("jira-hmac-middleware", () => {
  it("should fail if header is empty", () => {
    const request = {
      headers: {
        "x-hub-signature":
          "e8cbe6198cf83d3793b420b7c1b87b4946f566ab85b4326db21b4912a4917593",
      } as Request["headers"],
    } as Request;

    expect(() =>
      jiraHmacAuth(request, {} as Response, {} as NextFunction)
    ).toThrow("Access denied.");
  });

  it("should not throw if hashes match", () => {
    environment.JIRA_SECRET_KEY = "my-super-secret";
    const request = {
      body: {
        field1: 1,
        field2: "one",
      },
      headers: {
        "x-hub-signature":
          "sha256=e8cbe6198cf83d3793b420b7c1b87b4946f566ab85b4326db21b4912a4917593",
      } as Request["headers"],
    } as Request;

    const next = jest.fn();

    expect(() => jiraHmacAuth(request, {} as Response, next)).not.toThrow();
    expect(next).toHaveBeenCalledTimes(1);
  });
});
