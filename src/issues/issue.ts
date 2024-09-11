import { IIssue } from "../interfaces/issue";
import { DiscordMessage } from "../types/discord-message";

export abstract class Issue implements IIssue {
  constructor(
    protected readonly _key: string,
    protected readonly _content: string,
    protected readonly _avatarUrl?: string
  ) {}

  getMessage(): DiscordMessage {
    return {
      content: this._content,
      avatar_url: this._avatarUrl,
    };
  }

  get key(): string {
    return this._key;
  }
}
