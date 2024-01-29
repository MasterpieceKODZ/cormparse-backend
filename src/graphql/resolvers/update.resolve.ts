import dPrismaClient from "../../prisma.client.js";
import { Update } from "../db.types.js";

export const updateResolver = {
	id(parent: Update) {
		return parent.id;
	},
	description(parent: Update) {
		return parent.description;
	},
	async actor(parent: Update) {
		try {
			const act = await dPrismaClient.update.findFirst({
				where: {
					id: parent.id,
				},
				select: {
					actor: true,
				},
			});

			console.log(`update ${parent.id} actor --`);
			console.log(act?.actor);

			return act?.actor;
		} catch (error) {
			console.log("db error while resolving update actor");
			console.error(error);
			return null;
		}
	},
	async issue(parent: Update) {
		try {
			const iss = await dPrismaClient.update.findFirst({
				where: {
					id: parent.id,
				},
				select: {
					issueRef: true,
				},
			});

			console.log(`update ${parent.id} actor --`);
			console.log(iss?.issueRef);

			return iss?.issueRef;
		} catch (error) {
			console.log("error while resolving update actor");
			console.error(error);

			return null;
		}
	},
};
