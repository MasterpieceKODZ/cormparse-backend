import dPrismaClient from "../../prisma.client.js";
import { Project } from "../db.types.js";

export const projectResolver = {
	id(parent: Project) {
		console.log("project id engaged ");
		console.log(parent.id);

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

			console.log(`project ${parent.key} creator --`);
			console.log(crt?.creatorRef);

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

			console.log(`project ${ppl?.people} people --`);
			console.log(ppl?.people);

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

			console.log(`project ${adm?.admins} admins --`);
			console.log(adm?.admins);

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

			console.log(`project ${led?.leadRef} lead --`);
			console.log(led?.leadRef);

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

			console.log(`project ${defAss?.defaultAssigneeRef} default assignee --`);
			console.log(defAss?.defaultAssigneeRef);

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

			console.log(`project ${iss?.issues} default assignee --`);
			console.log(iss?.issues);

			return iss?.issues;
		} catch (err) {
			console.log("project issues resolution failed..");
			console.error(err);
			return null;
		}
	},
};
