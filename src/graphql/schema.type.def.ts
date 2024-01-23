export const typeDef = `#graphql

type Query{
    projects(email: String!,offset: Int): [Project]
	projectsCount(email: String!): Int
}

type User {
	id: Int!
	email: String!
	firstname: String!
	lastname: String!
	username: String!
	passwordHash: String
	salt: String 
	photoUrl: String 
	role: String
	recentIssues: [Issue]
	assignedIssues: [Issue]
	reportedIssues: [Issue]
	projectsAsCreator: [Project]
	projectsAsMember: [Project]
	projectsAsAdmin: [Project]
	projectsAsLead: [Project]
	projectsAsDefaultAssignee: [Project]
	comments: [Comment]
	activities: [Update]
	dateCreated: DateScalar!
}

type Issue {
	id: Int!
	summary: String!
	key: String!
	description: String
	type: String!
	priority: String!
	status: String!
	tags: [String]
	attachments: [JSON]
	assignee: User!
	reporter: User!
	project: Project
	parentIssue: Issue
	childIssues: [Issue]
	superIssue: Issue
	subTasks: [Issue]
	reportedAt: DateScalar!
	dueDate: DateScalar
	updatedAt: DateScalar
	comments: [Comment]
	activities: [Update]
	recentActors: [User]
}

type Project {
	id: Int!
	name: String!
	description: String
	key: String!
	url: String
	creator: User!
	people: [User]
	admins: [User]
	lead: User!
	defaultAssignee: User!
	createdAt: DateScalar!
	updatedAt: DateScalar
	issues: [Issue]
}

type Comment {
	id: Int!
	author: User!
	content: String!
	postedAt: DateScalar!
	isReply: Boolean
	replyTo: Comment
	repliedBy: [Comment]
	likes: Int
	unlikes: Int
	issue: Issue
}

type Update {
	id: Int!
	description: String!
	actor: User!
	issue: Issue!
}

scalar DateScalar

scalar JSON

`;
