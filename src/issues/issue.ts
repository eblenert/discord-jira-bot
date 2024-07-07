import { IIssue } from "../interfaces/issue";
import { DiscordMessage } from "../types/discord-message";

export abstract class Issue implements IIssue {
  constructor(
    protected readonly content: string,
    protected readonly avatarUrl?: string
  ) {}

  getMessage(): DiscordMessage {
    return {
      content: this.content,
      avatar_url: this.avatarUrl,
    };
  }
}
