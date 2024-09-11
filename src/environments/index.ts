export const environment = {
  DISCORD_WEBHOOK_URL: process.env.DISCORD_WEBHOOK_URL || "",
  JIRA_SECRET_KEY: process.env.JIRA_SECRET_KEY || "",
  IS_DEV: process.env.DEV?.toLowerCase() === "true" ?? false,
};
