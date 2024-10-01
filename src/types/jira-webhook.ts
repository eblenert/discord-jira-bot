export type JiraWebhook = {
  timestamp: number;
  webhookEvent: string;
  issue_event_type_name: string;
  user: JiraUser;
  issue: JiraIssue;
  changelog: JiraChangelog;
};
type AvatarURLs = {
  "48x48": string;
  "24x24": string;
  "16x16": string;
  "32x32": string;
};
type JiraIssue = {
  id: string;
  self: string;
  key: string;
  fields: JiraFields;
};

type JiraFields = {
  statuscategorychangedate: string;
  issuetype: {
    self: string;
    id: string;
    description: string;
    iconUrl: string;
    name: string;
    subtask: boolean;
    avatarId: number;
    entityId: string;
    hierarchyLevel: number;
  };
  timespent: number;
  project: {
    self: string;
    id: string;
    key: string;
    name: string;
    projectTypeKey: string;
    simplified: boolean;
    avatarUrls: AvatarURLs;
  };
  fixVersions: [];
  aggregatetimespent: null;
  resolution: null;
  resolutiondate: null;
  workratio: number;
  issuerestriction: {
    issuerestrictions: {};
    shouldDisplay: boolean;
  };
  lastViewed: null;
  watches: {
    self: string;
    watchCount: boolean;
    isWatching: boolean;
  };
  created: string;
  priority: {
    self: string;
    iconUrl: string;
    name: string;
    id: string;
  };
  labels: [];
  timeestimate: number;
  aggregatetimeoriginalestimate: null;
  versions: [];
  issuelinks: [];
  assignee: {
    self: string;
    accountId: string;
    avatarUrls: AvatarURLs;
    displayName: string;
    active: boolean;
    timeZone: string;
    accountType: string;
  };
  updated: string;
  status: {
    self: string;
    description: string;
    iconUrl: string;
    name: string;
    id: string;
    statusCategory: {
      self: string;
      id: number;
      key: string;
      colorName: string;
      name: string;
    };
  };
  components: [];
  timeoriginalestimate: null;
  description: null;
  timetracking: {};
  security: null;
  attachment: [];
  aggregatetimeestimate: null;
  summary: string;
  creator: JiraUser;
  subtasks: [];
  reporter: JiraUser;
  customfield_10000: "{}";
  aggregateprogress: {
    progress: 0;
    total: 0;
  };
  environment: null;
  duedate: null;
  progress: {
    progress: number;
    total: number;
  };
  votes: {
    self: string;
    votes: 0;
    hasVoted: boolean;
  };
};

type JiraUser = {
  self: string;
  accountId: string;
  avatarUrl: AvatarURLs;
  displayName: string;
  active: Boolean;
  timeZone: string;
  accountType: string;
};

type JiraChangelog = {
  id: string;
  items: Array<JiraChangelogItem>;
};

type JiraChangelogItem = {
  field: string;
  fieldType: string;
  fieldId: string;
  from: string;
  fromString: string;
  to: string;
  toString: string;
};

export type IssueProps = {
  name: string;
  text: string;
};
