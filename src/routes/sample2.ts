export const jiraReq1 = {
  timestamp: 1723232191659,
  webhookEvent: "jira:issue_created",
  issue_event_type_name: "issue_created",
  user: {
    self: "https://tbcl64.atlassian.net/rest/api/2/user?accountId=557058%3Ab2e19a89-93eb-479c-a287-d6943fe6b823",
    accountId: "557058:b2e19a89-93eb-479c-a287-d6943fe6b823",
    avatarUrls: {
      "48x48":
        "https://secure.gravatar.com/avatar/4b1b22217e4f747f3a0f1e3f94ba6a54?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FEB-2.png",
      "24x24":
        "https://secure.gravatar.com/avatar/4b1b22217e4f747f3a0f1e3f94ba6a54?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FEB-2.png",
      "16x16":
        "https://secure.gravatar.com/avatar/4b1b22217e4f747f3a0f1e3f94ba6a54?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FEB-2.png",
      "32x32":
        "https://secure.gravatar.com/avatar/4b1b22217e4f747f3a0f1e3f94ba6a54?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FEB-2.png",
    },
    displayName: "Erik Blenert",
    active: true,
    timeZone: "Europe/Bucharest",
    accountType: "atlassian",
  },
  issue: {
    id: "10705",
    self: "https://tbcl64.atlassian.net/rest/api/2/10705",
    key: "GBL-142",
    fields: {
      statuscategorychangedate: "2024-08-09T22:36:31.818+0300",
      issuetype: {
        self: "https://tbcl64.atlassian.net/rest/api/2/issuetype/10030",
        id: "10030",
        description:
          "Stories track functionality or features expressed as user goals.",
        iconUrl:
          "https://tbcl64.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
        name: "Story",
        subtask: false,
        avatarId: 10315,
        entityId: "1cd53f6c-79e0-4ea7-8801-b42fbf719a9b",
        hierarchyLevel: 0,
      },
      timespent: null,
      customfield_10030: null,
      project: {
        self: "https://tbcl64.atlassian.net/rest/api/2/project/10014",
        id: "10014",
        key: "GBL",
        name: "Gaming Backlog TBCL",
        projectTypeKey: "software",
        simplified: true,
        avatarUrls: {
          "48x48":
            "https://tbcl64.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10418",
          "24x24":
            "https://tbcl64.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10418?size=small",
          "16x16":
            "https://tbcl64.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10418?size=xsmall",
          "32x32":
            "https://tbcl64.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10418?size=medium",
        },
      },
      customfield_10031: null,
      fixVersions: [],
      aggregatetimespent: null,
      resolution: null,
      customfield_10035: null,
      customfield_10036: null,
      customfield_10037: null,
      customfield_10027: null,
      customfield_10028: null,
      customfield_10029: null,
      resolutiondate: null,
      workratio: -1,
      watches: {
        self: "https://tbcl64.atlassian.net/rest/api/2/issue/GBL-142/watchers",
        watchCount: 0,
        isWatching: true,
      },
      issuerestriction: { issuerestrictions: {}, shouldDisplay: true },
      lastViewed: null,
      created: "2024-08-09T22:36:31.386+0300",
      customfield_10020: null,
      customfield_10021: null,
      customfield_10022: null,
      priority: {
        self: "https://tbcl64.atlassian.net/rest/api/2/priority/3",
        iconUrl:
          "https://tbcl64.atlassian.net/images/icons/priorities/medium.svg",
        name: "Medium",
        id: "3",
      },
      customfield_10023: null,
      customfield_10024: null,
      customfield_10025: null,
      labels: [],
      customfield_10016: null,
      customfield_10017: null,
      customfield_10018: {
        hasEpicLinkFieldDependency: false,
        showField: false,
        nonEditableReason: {
          reason: "PLUGIN_LICENSE_ERROR",
          message: "The Parent Link is only available to Jira Premium users.",
        },
      },
      customfield_10019: "0|i002yv:",
      aggregatetimeoriginalestimate: null,
      timeestimate: null,
      versions: [],
      issuelinks: [],
      assignee: {
        self: "https://tbcl64.atlassian.net/rest/api/2/user?accountId=557058%3Ab2e19a89-93eb-479c-a287-d6943fe6b823",
        accountId: "557058:b2e19a89-93eb-479c-a287-d6943fe6b823",
        avatarUrls: {
          "48x48":
            "https://secure.gravatar.com/avatar/4b1b22217e4f747f3a0f1e3f94ba6a54?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FEB-2.png",
          "24x24":
            "https://secure.gravatar.com/avatar/4b1b22217e4f747f3a0f1e3f94ba6a54?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FEB-2.png",
          "16x16":
            "https://secure.gravatar.com/avatar/4b1b22217e4f747f3a0f1e3f94ba6a54?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FEB-2.png",
          "32x32":
            "https://secure.gravatar.com/avatar/4b1b22217e4f747f3a0f1e3f94ba6a54?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FEB-2.png",
        },
        displayName: "Erik Blenert",
        active: true,
        timeZone: "Europe/Bucharest",
        accountType: "atlassian",
      },
      updated: "2024-08-09T22:36:31.386+0300",
      status: {
        self: "https://tbcl64.atlassian.net/rest/api/2/status/10029",
        description: "",
        iconUrl: "https://tbcl64.atlassian.net/",
        name: "Wishlist",
        id: "10029",
        statusCategory: {
          self: "https://tbcl64.atlassian.net/rest/api/2/statuscategory/2",
          id: 2,
          key: "new",
          colorName: "blue-gray",
          name: "New",
        },
      },
      components: [],
      timeoriginalestimate: null,
      description: null,
      customfield_10010: null,
      customfield_10014: null,
      customfield_10015: null,
      timetracking: {},
      customfield_10005: null,
      customfield_10006: null,
      customfield_10007: null,
      security: null,
      customfield_10008: null,
      attachment: [],
      customfield_10009: null,
      aggregatetimeestimate: null,
      summary: "țâțe 1",
      creator: {
        self: "https://tbcl64.atlassian.net/rest/api/2/user?accountId=557058%3Ab2e19a89-93eb-479c-a287-d6943fe6b823",
        accountId: "557058:b2e19a89-93eb-479c-a287-d6943fe6b823",
        avatarUrls: {
          "48x48":
            "https://secure.gravatar.com/avatar/4b1b22217e4f747f3a0f1e3f94ba6a54?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FEB-2.png",
          "24x24":
            "https://secure.gravatar.com/avatar/4b1b22217e4f747f3a0f1e3f94ba6a54?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FEB-2.png",
          "16x16":
            "https://secure.gravatar.com/avatar/4b1b22217e4f747f3a0f1e3f94ba6a54?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FEB-2.png",
          "32x32":
            "https://secure.gravatar.com/avatar/4b1b22217e4f747f3a0f1e3f94ba6a54?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FEB-2.png",
        },
        displayName: "Erik Blenert",
        active: true,
        timeZone: "Europe/Bucharest",
        accountType: "atlassian",
      },
      subtasks: [],
      customfield_10040: null,
      reporter: {
        self: "https://tbcl64.atlassian.net/rest/api/2/user?accountId=557058%3Ab2e19a89-93eb-479c-a287-d6943fe6b823",
        accountId: "557058:b2e19a89-93eb-479c-a287-d6943fe6b823",
        avatarUrls: {
          "48x48":
            "https://secure.gravatar.com/avatar/4b1b22217e4f747f3a0f1e3f94ba6a54?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FEB-2.png",
          "24x24":
            "https://secure.gravatar.com/avatar/4b1b22217e4f747f3a0f1e3f94ba6a54?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FEB-2.png",
          "16x16":
            "https://secure.gravatar.com/avatar/4b1b22217e4f747f3a0f1e3f94ba6a54?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FEB-2.png",
          "32x32":
            "https://secure.gravatar.com/avatar/4b1b22217e4f747f3a0f1e3f94ba6a54?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FEB-2.png",
        },
        displayName: "Erik Blenert",
        active: true,
        timeZone: "Europe/Bucharest",
        accountType: "atlassian",
      },
      aggregateprogress: { progress: 0, total: 0 },
      customfield_10000: "{}",
      customfield_10001: null,
      customfield_10002: [],
      customfield_10003: null,
      customfield_10004: null,
      customfield_10039: null,
      environment: null,
      duedate: null,
      progress: { progress: 0, total: 0 },
      votes: {
        self: "https://tbcl64.atlassian.net/rest/api/2/issue/GBL-142/votes",
        votes: 0,
        hasVoted: false,
      },
    },
  },
  changelog: {
    id: "12888",
    items: [
      {
        field: "assignee",
        fieldtype: "jira",
        fieldId: "assignee",
        from: null,
        fromString: null,
        to: "557058:b2e19a89-93eb-479c-a287-d6943fe6b823",
        toString: "Erik Blenert",
        tmpFromAccountId: null,
        tmpToAccountId: "557058:b2e19a89-93eb-479c-a287-d6943fe6b823",
      },
      {
        field: "priority",
        fieldtype: "jira",
        fieldId: "priority",
        from: null,
        fromString: null,
        to: "3",
        toString: "Medium",
      },
      {
        field: "reporter",
        fieldtype: "jira",
        fieldId: "reporter",
        from: null,
        fromString: null,
        to: "557058:b2e19a89-93eb-479c-a287-d6943fe6b823",
        toString: "Erik Blenert",
        tmpFromAccountId: null,
        tmpToAccountId: "557058:b2e19a89-93eb-479c-a287-d6943fe6b823",
      },
      {
        field: "Status",
        fieldtype: "jira",
        fieldId: "status",
        from: null,
        fromString: null,
        to: "10029",
        toString: "Wishlist",
      },
      {
        field: "summary",
        fieldtype: "jira",
        fieldId: "summary",
        from: null,
        fromString: null,
        to: null,
        toString: "țâțe 1",
      },
    ],
  },
};

export const jiraReq2 = {
  timestamp: 1723232191880,
  webhookEvent: "jira:issue_updated",
  issue_event_type_name: "issue_generic",
  user: {
    self: "https://tbcl64.atlassian.net/rest/api/2/user?accountId=557058%3Ab2e19a89-93eb-479c-a287-d6943fe6b823",
    accountId: "557058:b2e19a89-93eb-479c-a287-d6943fe6b823",
    avatarUrls: {
      "48x48":
        "https://secure.gravatar.com/avatar/4b1b22217e4f747f3a0f1e3f94ba6a54?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FEB-2.png",
      "24x24":
        "https://secure.gravatar.com/avatar/4b1b22217e4f747f3a0f1e3f94ba6a54?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FEB-2.png",
      "16x16":
        "https://secure.gravatar.com/avatar/4b1b22217e4f747f3a0f1e3f94ba6a54?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FEB-2.png",
      "32x32":
        "https://secure.gravatar.com/avatar/4b1b22217e4f747f3a0f1e3f94ba6a54?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FEB-2.png",
    },
    displayName: "Erik Blenert",
    active: true,
    timeZone: "Europe/Bucharest",
    accountType: "atlassian",
  },
  issue: {
    id: "10705",
    self: "https://tbcl64.atlassian.net/rest/api/2/10705",
    key: "GBL-142",
    fields: {
      statuscategorychangedate: "2024-08-09T22:36:31.818+0300",
      issuetype: {
        self: "https://tbcl64.atlassian.net/rest/api/2/issuetype/10030",
        id: "10030",
        description:
          "Stories track functionality or features expressed as user goals.",
        iconUrl:
          "https://tbcl64.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10315?size=medium",
        name: "Story",
        subtask: false,
        avatarId: 10315,
        entityId: "1cd53f6c-79e0-4ea7-8801-b42fbf719a9b",
        hierarchyLevel: 0,
      },
      timespent: null,
      customfield_10030: null,
      project: {
        self: "https://tbcl64.atlassian.net/rest/api/2/project/10014",
        id: "10014",
        key: "GBL",
        name: "Gaming Backlog TBCL",
        projectTypeKey: "software",
        simplified: true,
        avatarUrls: {
          "48x48":
            "https://tbcl64.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10418",
          "24x24":
            "https://tbcl64.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10418?size=small",
          "16x16":
            "https://tbcl64.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10418?size=xsmall",
          "32x32":
            "https://tbcl64.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10418?size=medium",
        },
      },
      customfield_10031: null,
      fixVersions: [],
      aggregatetimespent: null,
      resolution: null,
      customfield_10035: null,
      customfield_10036: null,
      customfield_10037: null,
      customfield_10027: null,
      customfield_10028: null,
      customfield_10029: null,
      resolutiondate: null,
      workratio: -1,
      lastViewed: null,
      watches: {
        self: "https://tbcl64.atlassian.net/rest/api/2/issue/GBL-142/watchers",
        watchCount: 1,
        isWatching: true,
      },
      issuerestriction: { issuerestrictions: {}, shouldDisplay: true },
      created: "2024-08-09T22:36:31.386+0300",
      customfield_10020: null,
      customfield_10021: null,
      customfield_10022: null,
      priority: {
        self: "https://tbcl64.atlassian.net/rest/api/2/priority/3",
        iconUrl:
          "https://tbcl64.atlassian.net/images/icons/priorities/medium.svg",
        name: "Medium",
        id: "3",
      },
      customfield_10023: null,
      customfield_10024: null,
      customfield_10025: null,
      labels: [],
      customfield_10016: null,
      customfield_10017: null,
      customfield_10018: {
        hasEpicLinkFieldDependency: false,
        showField: false,
        nonEditableReason: {
          reason: "PLUGIN_LICENSE_ERROR",
          message: "The Parent Link is only available to Jira Premium users.",
        },
      },
      customfield_10019: "0|i002yv:",
      timeestimate: null,
      aggregatetimeoriginalestimate: null,
      versions: [],
      issuelinks: [],
      assignee: {
        self: "https://tbcl64.atlassian.net/rest/api/2/user?accountId=557058%3Ab2e19a89-93eb-479c-a287-d6943fe6b823",
        accountId: "557058:b2e19a89-93eb-479c-a287-d6943fe6b823",
        avatarUrls: {
          "48x48":
            "https://secure.gravatar.com/avatar/4b1b22217e4f747f3a0f1e3f94ba6a54?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FEB-2.png",
          "24x24":
            "https://secure.gravatar.com/avatar/4b1b22217e4f747f3a0f1e3f94ba6a54?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FEB-2.png",
          "16x16":
            "https://secure.gravatar.com/avatar/4b1b22217e4f747f3a0f1e3f94ba6a54?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FEB-2.png",
          "32x32":
            "https://secure.gravatar.com/avatar/4b1b22217e4f747f3a0f1e3f94ba6a54?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FEB-2.png",
        },
        displayName: "Erik Blenert",
        active: true,
        timeZone: "Europe/Bucharest",
        accountType: "atlassian",
      },
      updated: "2024-08-09T22:36:31.865+0300",
      status: {
        self: "https://tbcl64.atlassian.net/rest/api/2/status/10032",
        description: "",
        iconUrl: "https://tbcl64.atlassian.net/",
        name: "To Be Released",
        id: "10032",
        statusCategory: {
          self: "https://tbcl64.atlassian.net/rest/api/2/statuscategory/2",
          id: 2,
          key: "new",
          colorName: "blue-gray",
          name: "New",
        },
      },
      components: [],
      timeoriginalestimate: null,
      description: null,
      customfield_10010: null,
      customfield_10014: null,
      timetracking: {},
      customfield_10015: null,
      customfield_10005: null,
      customfield_10006: null,
      customfield_10007: null,
      security: null,
      customfield_10008: null,
      customfield_10009: null,
      attachment: [],
      aggregatetimeestimate: null,
      summary: "țâțe 1",
      creator: {
        self: "https://tbcl64.atlassian.net/rest/api/2/user?accountId=557058%3Ab2e19a89-93eb-479c-a287-d6943fe6b823",
        accountId: "557058:b2e19a89-93eb-479c-a287-d6943fe6b823",
        avatarUrls: {
          "48x48":
            "https://secure.gravatar.com/avatar/4b1b22217e4f747f3a0f1e3f94ba6a54?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FEB-2.png",
          "24x24":
            "https://secure.gravatar.com/avatar/4b1b22217e4f747f3a0f1e3f94ba6a54?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FEB-2.png",
          "16x16":
            "https://secure.gravatar.com/avatar/4b1b22217e4f747f3a0f1e3f94ba6a54?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FEB-2.png",
          "32x32":
            "https://secure.gravatar.com/avatar/4b1b22217e4f747f3a0f1e3f94ba6a54?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FEB-2.png",
        },
        displayName: "Erik Blenert",
        active: true,
        timeZone: "Europe/Bucharest",
        accountType: "atlassian",
      },
      subtasks: [],
      customfield_10040: null,
      reporter: {
        self: "https://tbcl64.atlassian.net/rest/api/2/user?accountId=557058%3Ab2e19a89-93eb-479c-a287-d6943fe6b823",
        accountId: "557058:b2e19a89-93eb-479c-a287-d6943fe6b823",
        avatarUrls: {
          "48x48":
            "https://secure.gravatar.com/avatar/4b1b22217e4f747f3a0f1e3f94ba6a54?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FEB-2.png",
          "24x24":
            "https://secure.gravatar.com/avatar/4b1b22217e4f747f3a0f1e3f94ba6a54?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FEB-2.png",
          "16x16":
            "https://secure.gravatar.com/avatar/4b1b22217e4f747f3a0f1e3f94ba6a54?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FEB-2.png",
          "32x32":
            "https://secure.gravatar.com/avatar/4b1b22217e4f747f3a0f1e3f94ba6a54?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FEB-2.png",
        },
        displayName: "Erik Blenert",
        active: true,
        timeZone: "Europe/Bucharest",
        accountType: "atlassian",
      },
      customfield_10000: "{}",
      aggregateprogress: { progress: 0, total: 0 },
      customfield_10001: null,
      customfield_10002: [],
      customfield_10003: null,
      customfield_10004: null,
      customfield_10039: null,
      environment: null,
      duedate: null,
      progress: { progress: 0, total: 0 },
      votes: {
        self: "https://tbcl64.atlassian.net/rest/api/2/issue/GBL-142/votes",
        votes: 0,
        hasVoted: false,
      },
    },
  },
  changelog: {
    id: "12889",
    items: [
      {
        field: "status",
        fieldtype: "jira",
        fieldId: "status",
        from: "10029",
        fromString: "Wishlist",
        to: "10032",
        toString: "To Be Released",
      },
    ],
  },
};
