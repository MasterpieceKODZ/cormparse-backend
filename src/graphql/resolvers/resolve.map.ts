import GraphQLJSON from "graphql-type-json";
import { DateScalar } from "../date.scaler.js";
import { commentResolver } from "./comment.resolve.js";
import { IssueResolver } from "./issue.js";
import { projectResolver } from "./project.js";
import { updateResolver } from "./update.js";
import { resolveProjects } from "./user.projects.js";
import { userResolver } from "./user.js";
import { resolveProjectsCount } from "./project.count.js";
import { resolveCreateProject } from "./create.project.js";
import searchProjectByName from "./search.project.by.name.js";
import { userRecentIssue } from "./recent.Issues.js";

export const resolvers = {
	Query: {
		projects: resolveProjects,
		projectsCount: resolveProjectsCount,
		searchProjectByName: searchProjectByName,
		userRecentIssues: userRecentIssue,
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
