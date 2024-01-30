import dPrismaClient from "../../prisma.client.js";
import { Issue } from "../db.types.js";

export const IssueResolver = {
	id(parent: Issue) {
		return parent.id;
	},
	summary(parent: Issue) {
		return parent.summary;
	},
	key(parent: Issue) {
		return parent.key;
	},
	description(parent: Issue) {
		return parent.description;
	},
	type(parent: Issue) {
		return parent.type;
	},
	priority(parent: Issue) {
		return parent.priority;
	},
	status(parent: Issue) {
		return parent.status;
	},
	tags(parent: Issue) {
		return parent.tags;
	},
	attachments(parent: Issue) {
		return parent.attachments;
	},
	async assignee(parent: Issue) {
		try {
			const ass = await dPrismaClient.issue.findFirst({
				where: {
					id: parent.id,
				},
				select: {
					assigneeRef: true,
				},
			});

			console.log("issue ", parent.key, " assigne --");
			console.log(ass?.assigneeRef);

			return ass?.assigneeRef;
		} catch (err) {
			console.log("issue assignee resolution faild...");
			console.error(err);
			return null;
		}
	},
	async reporter(parent: Issue) {
		try {
			const repo = await dPrismaClient.issue.findFirst({
				where: {
					id: parent.id,
				},
				select: {
					reporterRef: true,
				},
			});

			console.log("issue ", parent.key, " reporter --");
			console.log(repo?.reporterRef);

			return repo?.reporterRef;
		} catch (err) {
			console.log("issue reporter resolution failed...");
			console.error(err);

			return null;
		}
	},
	async project(parent: Issue) {
		try {
			const proj = await dPrismaClient.issue.findFirst({
				where: {
					id: parent.id,
				},
				select: {
					projectRef: true,
				},
			});

			console.log("issue ", parent.key, " project --");
			console.log(proj?.projectRef);

			return proj?.projectRef;
		} catch (err) {
			console.log("issue project resolution failed...");
			console.error(err);

			return null;
		}
	},
	async parentIssue(parent: Issue) {
		try {
			const prntIss = await dPrismaClient.issue.findFirst({
				where: {
					id: parent.id,
				},
				select: {
					parentIssueRef: true,
				},
			});

			console.log("issue ", parent.key, " parent issue --");
			console.log(prntIss?.parentIssueRef);

			return prntIss?.parentIssueRef;
		} catch (err) {
			console.log("issue parent-issue resolution failed...");
			console.error(err);

			return null;
		}
	},
	async childIssues(parent: Issue) {
		try {
			const chdIss = await dPrismaClient.issue.findFirst({
				where: {
					id: parent.id,
				},
				select: {
					childIssues: true,
				},
			});

			console.log("issue ", parent.key, " child issue --");
			console.log(chdIss?.childIssues);

			return chdIss?.childIssues;
		} catch (err) {
			console.log("issue child-issue resolution failed...");
			console.error(err);

			return null;
		}
	},
	async superIssue(parent: Issue) {
		try {
			const sprIss = await dPrismaClient.issue.findFirst({
				where: {
					id: parent.id,
				},
				select: {
					superIssueRef: true,
				},
			});

			console.log("issue ", parent.key, " super issue --");
			console.log(sprIss?.superIssueRef);

			return sprIss?.superIssueRef;
		} catch (err) {
			console.log("issue super-issue resolution failed...");
			console.error(err);

			return null;
		}
	},
	async subTasks(parent: Issue) {
		try {
			const sbTsks = await dPrismaClient.issue.findFirst({
				where: {
					id: parent.id,
				},
				select: {
					subTasks: true,
				},
			});

			console.log("issue ", parent.key, " sub-tasks --");
			console.log(sbTsks?.subTasks);

			return sbTsks?.subTasks;
		} catch (err) {
			console.log("issue sub-task resolution failed...");
			console.error(err);

			return null;
		}
	},
	reportedAt(parent: Issue) {
		return parent.reportedAt;
	},
	dueDate(parent: Issue) {
		return parent.dueDate;
	},
	updatedAt(parent: Issue) {
		return parent.updatedAt;
	},
	async comments(parent: Issue) {
		try {
			const comm = await dPrismaClient.issue.findFirst({
				where: {
					id: parent.id,
				},
				select: {
					comments: true,
				},
			});

			console.log("issue ", parent.key, " comments --");
			console.log(comm);

			return comm?.comments;
		} catch (err) {
			console.log("issue comments resolution failed...");
			console.error(err);

			return null;
		}
	},
	async activities(parent: Issue) {
		try {
			const act = await dPrismaClient.issue.findFirst({
				where: {
					id: parent.id,
				},
				select: {
					activities: true,
				},
			});

			console.log("issue ", parent.key, " activities --");
			console.log(act?.activities);

			return act?.activities;
		} catch (err) {
			console.log("issue activities resolution failed...");
			console.error(err);

			return null;
		}
	},
	async recentActors(parent: Issue) {
		try {
			const rntAct = await dPrismaClient.issue.findFirst({
				where: {
					id: parent.id,
				},
				select: {
					recentActors: true,
				},
			});

			console.log("issue ", parent.key, " recent actors --");
			console.log(rntAct?.recentActors);

			return rntAct?.recentActors;
		} catch (err) {
			console.log("issue recent-actors resolution failed...");
			console.error(err);

			return null;
		}
	},
};
