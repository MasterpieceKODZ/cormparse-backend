import dPrismaClient from "../../prisma.client.js";
import { Project } from "../db.types.js";

export const projectResolver = {
	id(parent: Project) {
		return parent.id;
	},
	name(parent: Project) {
		return parent.name;
	},
	description(parent: Project) {
		return parent.description;
	},
	key(parent: Project) {
		return parent.key;
	},
	url(parent: Project) {
		return parent.url;
	},
	async creator(parent: Project) {
		try {
			const crt = await dPrismaClient.project.findFirst({
				where: {
					id: parent.id,
				},
				select: {
					creatorRef: true,
				},
			});

			return crt?.creatorRef;
		} catch (err) {
			console.log("project creator resolution failed...");
			console.error(err);
			return null;
		}
	},
	async people(parent: Project) {
		try {
			const ppl = await dPrismaClient.project.findFirst({
				where: {
					id: parent.id,
				},
				select: {
					people: true,
				},
			});

			return ppl?.people;
		} catch (err) {
			console.log("project people resolution failed...");
			console.error(err);
			return null;
		}
	},
	async admins(parent: Project) {
		try {
			const adm = await dPrismaClient.project.findFirst({
				where: {
					id: parent.id,
				},
				select: {
					admins: true,
				},
			});

			return adm?.admins;
		} catch (err) {
			console.log("project admins resolution failed...");
			console.error(err);
			return null;
		}
	},
	async lead(parent: Project) {
		try {
			const led = await dPrismaClient.project.findFirst({
				where: {
					id: parent.id,
				},
				select: {
					leadRef: true,
				},
			});

			return led?.leadRef;
		} catch (err) {
			console.log("project lead resolution failed...");
			console.error(err);
			return null;
		}
	},
	async defaultAssignee(parent: Project) {
		try {
			const defAss = await dPrismaClient.project.findFirst({
				where: {
					id: parent.id,
				},
				select: {
					defaultAssigneeRef: true,
				},
			});

			return defAss?.defaultAssigneeRef;
		} catch (err) {
			console.log("project default-assignee resolution failed");
			console.error(err);
			return null;
		}
	},
	createdAt(parent: Project) {
		return parent.createdAt;
	},
	updatedAt(parent: Project) {
		return parent.updatedAt;
	},
	async issues(parent: Project) {
		try {
			const iss = await dPrismaClient.project.findFirst({
				where: {
					id: parent.id,
				},
				select: {
					issues: true,
				},
			});

			return iss?.issues;
		} catch (err) {
			console.log("project issues resolution failed..");
			console.error(err);
			return null;
		}
	},
};
