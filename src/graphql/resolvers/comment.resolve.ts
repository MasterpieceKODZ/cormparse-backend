import { isErrored } from "stream";
import dPrismaClient from "../../prisma.client.js";
import { Comment } from "../db.types.js";

export const commentResolver = {
	id(parent: Comment) {
		return parent.id;
	},
	async author(parent: Comment) {
		try {
			const ath = await dPrismaClient.comment.findFirst({
				where: {
					id: parent.id,
				},
				select: {
					authorRef: true,
				},
			});

			console.log(`comment ${parent.id} author ---`);
			console.log(ath?.authorRef);

			return ath?.authorRef;
		} catch (err) {
			console.log("comment author resolution failed...");
			console.error(isErrored);
			return null;
		}
	},
	content(parent: Comment) {
		return parent.content;
	},
	postedAt(parent: Comment) {
		return parent.postedAt;
	},
	isReply(parent: Comment) {
		return parent.isReply;
	},
	async replyTo(parent: Comment) {
		try {
			const repTo = await dPrismaClient.comment.findFirst({
				where: {
					id: parent.id,
				},
				select: {
					replyToRef: true,
				},
			});

			console.log(`comment ${parent.id} replied to ---`);
			console.log(repTo?.replyToRef);

			return repTo?.replyToRef;
		} catch (err) {
			console.log("comment reply-to resolution failed...");
			console.error(err);

			return null;
		}
	},
	async repliedBy(parent: Comment) {
		try {
			const repBy = await dPrismaClient.comment.findFirst({
				where: {
					id: parent.id,
				},
				select: {
					repliedBy: true,
				},
			});

			console.log(`comment ${parent.id} replied to ---`);
			console.log(repBy?.repliedBy);

			return repBy?.repliedBy;
		} catch (err) {
			console.log("comment replied-by resolution failed...");
			console.error(err);
			return null;
		}
	},
	likes(parent: Comment) {
		return parent.likes;
	},
	unlikes(parent: Comment) {
		return parent.unlikes;
	},
	async issue(parent: Comment) {
		try {
			const iss = await dPrismaClient.comment.findFirst({
				where: {
					id: parent.id,
				},
				select: {
					issueRef: true,
				},
			});

			console.log(`comment ${parent.id} issue ---`);
			console.log(iss?.issueRef);

			return iss?.issueRef;
		} catch (err) {
			console.log("comment issue resolution failed...");
			console.log(err);
		}
	},
};
