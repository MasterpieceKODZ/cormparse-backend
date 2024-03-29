import dPrismaClient from "../../prisma.client.js";
import { User } from "../db.types.js";

export const userResolver = {
	id(parent: User) {
		return parent.id;
	},
	email(parent: User) {
		return parent.email;
	},
	firstname(parent: User) {
		return parent.firstname;
	},
	lastname(parent: User) {
		return parent.lastname;
	},
	username(parent: User) {
		return parent.username;
	},
	passwordHash(parent: User) {
		return parent.passwordHash;
	},
	salt(parent: User) {
		return parent.salt;
	},
	photoUrl(parent: User) {
		return parent.photoUrl;
	},
	role(parent: User) {
		return parent.role;
	},
	async recentIssues(parent: User) {
		try {
			const recentIss = await dPrismaClient.user.findFirst({
				where: {
					id: parent.id,
				},
				select: {
					recentIssues: true,
				},
			});

			return recentIss?.recentIssues;
		} catch (err) {
			console.log("user recent-issues resolution failed");
			console.error(err);
			return null;
		}
	},
	async assignedIssues(parent: User) {
		try {
			const assignedIss = await dPrismaClient.user.findFirst({
				where: {
					id: parent.id,
				},
				select: {
					assignedIssues: true,
				},
			});

			return assignedIss?.assignedIssues;
		} catch (err) {
			console.log("user assingned-issues resolution failed.");
			console.error(err);
			return null;
		}
	},
	async reportedIssues(parent: User) {
		try {
			const reportedIss = await dPrismaClient.user.findFirst({
				where: {
					id: parent.id,
				},
				select: {
					reportedIssues: true,
				},
			});
			return reportedIss?.reportedIssues;
		} catch (err) {
			console.log("user reported-issue resolution failed...");
			console.error(err);
			return null;
		}
	},
	async projectsAsCreator(parent: User) {
		try {
			const projCreated = await dPrismaClient.user.findFirst({
				where: {
					id: parent.id,
				},
				select: {
					projectsAsCreator: true,
				},
			});

			return projCreated?.projectsAsCreator;
		} catch (err) {
			console.log("user projects-as-creator resolution failed...");
			console.error(err);
			return null;
		}
	},
	async projectsAsMember(parent: User) {
		try {
			const projAsMem = await dPrismaClient.user.findFirst({
				where: {
					id: parent.id,
				},
				select: {
					projectsAsMember: true,
				},
			});

			return projAsMem?.projectsAsMember;
		} catch (err) {
			console.log("user project-as-member resolution failed...");
			console.error(err);
			return null;
		}
	},
	async projectsAsAdmin(parent: User) {
		try {
			const projAsAdmin = await dPrismaClient.user.findFirst({
				where: {
					id: parent.id,
				},
				select: {
					projectsAsAdmin: true,
				},
			});

			return projAsAdmin?.projectsAsAdmin;
		} catch (err) {
			console.log("issue project-as-admin resolution failed..");
			console.error(err);
			return null;
		}
	},
	async projectsAsLead(parent: User) {
		try {
			const projAsLead = await dPrismaClient.user.findFirst({
				where: {
					id: parent.id,
				},
				select: {
					projectsAsLead: true,
				},
			});

			return projAsLead?.projectsAsLead;
		} catch (err) {
			console.log("user projects-as-lead resolution failed ...");
			console.error(err);
			return null;
		}
	},
	async projectsAsDefaultAssignee(parent: User) {
		try {
			const projAsDefAss = await dPrismaClient.user.findFirst({
				where: {
					id: parent.id,
				},
				select: {
					projectsAsDefaultAssignee: true,
				},
			});

			return projAsDefAss?.projectsAsDefaultAssignee;
		} catch (err) {
			console.log("user project-as-default-assignee resolution failed...");
			console.error(err);
			return null;
		}
	},
	async comments(parent: User) {
		try {
			const comm = await dPrismaClient.user.findFirst({
				where: {
					id: parent.id,
				},
				select: {
					comments: true,
				},
			});

			return comm?.comments;
		} catch (err) {
			console.log("user comments resolution failed...");
			console.error(err);
			return null;
		}
	},
	async activities(parent: User) {
		try {
			const act = await dPrismaClient.user.findFirst({
				where: {
					id: parent.id,
				},
				select: {
					activities: true,
				},
			});

			return act?.activities;
		} catch (err) {
			console.log("user activities resolution failed...");
			console.error(err);
			return null;
		}
	},
	dateCreated(parent: User) {
		return parent.dateCreated;
	},
};
