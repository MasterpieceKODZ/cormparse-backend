import GraphQLJSON from "graphql-type-json";
import { DateScalar } from "../date.scaler.js";
import { commentResolver } from "./comment.js";
import { IssueResolver } from "./issue.js";
import { projectResolver } from "./project.js";
import { updateResolver } from "./update.js";
import { resolveProjects } from "./user.projects.js";
import { userResolver } from "./user.js";
import { resolveProjectsCount } from "./project.count.js";
import { resolveCreateProject } from "./create.project.js";
import resolveSearchProjectByName from "./search.project.by.name.js";

import { resolveUserRecentIssue } from "./recent.Issues.js";
import { resolveRecentProjects } from "./recent.projects.js";
import { resolveUserData } from "./user.data.js";

export const resolvers = {
	Query: {
		projects: resolveProjects,
		projectsCount: resolveProjectsCount,
		searchProjectByName: resolveSearchProjectByName,
		userRecentIssues: resolveUserRecentIssue,
		userRecentProjects: resolveRecentProjects,
		userData: resolveUserData,
	},

	Mutation: {
		createProject: resolveCreateProject,
	},

	User: userResolver,
	Project: projectResolver,
	Issue: IssueResolver,
	Comment: commentResolver,
	Update: updateResolver,
	DateScalar: DateScalar,
	JSON: GraphQLJSON,
};
