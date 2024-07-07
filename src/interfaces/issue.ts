import { DiscordMessage } from "../types/discord-message";

export interface IIssue {
  getMessage(): DiscordMessage;
}
