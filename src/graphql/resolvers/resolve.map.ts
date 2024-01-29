import GraphQLJSON from "graphql-type-json";
import { DateScalar } from "../date.scaler.js";
import { commentResolver } from "./comment.resolve.js";
import { IssueResolver } from "./issue.resolve.js";
import { projectResolver } from "./project.resolve.js";
import { updateResolver } from "./update.resolve.js";
import { resolveProjects } from "./user.projects.js";
import { userResolver } from "./user.resolve.js";
import { resolveProjectsCount } from "./project.count.js";
import { resolveCreateProject } from "./create.project.js";

export const resolvers = {
	Query: {
		projects: resolveProjects,
		projectsCount: resolveProjectsCount,
	},

	Mutation: { createProject: resolveCreateProject },

	User: userResolver,
	Project: projectResolver,
	Issue: IssueResolver,
	Comment: commentResolver,
	Update: updateResolver,
	DateScalar: DateScalar,
	JSON: GraphQLJSON,
};
