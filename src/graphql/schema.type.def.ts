export const typeDef = `#graphql

type Query{
    projects(email: String!,offset: Int): [Project]
	projectsCount(email: String!): Int
	searchProjectByName(email: String!,search: String!): [Project]
	userRecentIssues(email: String!): [Issue]
	userRecentProjects(email: String!): [Project]
	userData(email: String!): User
	projectIssues(email: String!,projectKey: String!, category: String!, props: String!, offset: Int ): [Issue]
	projectPeople(email: String!,projectKey: String!,username: String): [User]
	projectIssuesCount(email: String!,projectKey: String!,category: String! ,props: String): Int
	
}

type Mutation {
	createProject(email: String!,name: String!,key: String!): Project
	updateUser(email: String!,username: String,role: String,photoUrl: String): User
	deleteUser(email: String!): User
	
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
