export type User = {
	id: number;
	email: string;
	firstname: string;
	lastname: string;
	username: string;
	passwordHash: string;
	salt: string;
	photoUrl: string;
	role: string;
	recentIssues: Issue[];
	assignedIssues: Issue[];
	reportedIssues: Issue[];
	projectsAsCreator: Project[];
	projectsAsMember: Project[];
	projectsAsAdmin: Project[];
	projectsAsLead: Project[];
	projectsAsDefaultAssignee: Project[];
	comments: Comment[];
	activities: Update[];
	dateCreated: Date;
};
export type Issue = {
	id: number;
	summary: string;
	key: string;
	description: string;
	type: string;
	priority: string;
	status: string;
	tags: string[];
	attachments: {}[];
	assignee: User;
	reporter: User;
	project: Project;
	parentIssue: Issue;
	childIssues: Issue[];
	superIssue: Issue;
	subTasks: Issue[];
	reportedAt: Date;
	dueDate: Date;
	updatedAt: Date;
	comments: Comment[];
	activities: Update[];
	recentActors: User[];
};

export type Project = {
	id: number;
	name: string;
	description: string;
	key: string;
	url: string;
	creator: User;
	people: User[];
	admins: User[];
	lead: User;
	defaultAssignee: User;
	createdAt: Date;
	updatedAt: Date;
	issues: Issue[];
};

export type Comment = {
	id: number;
	author: string;
	content: string;
	postedAt: Date;
	isReply: boolean;
	repliedBy: Comment[];
	likes: number;
	unlikes: number;
	issue: Issue;
};

export type Update = {
	id: number;
	description: string;
	actor: User;
	issue: Issue;
};
