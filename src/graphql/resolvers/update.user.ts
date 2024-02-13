import dPrismaClient from "../../prisma.client.js";

export async function updateUserResolver(_: any, args: any) {
	try {
		// fetch current user data
		const currentUserData = await dPrismaClient.user.findFirst({
			where: {
				email: args.email,
			},
		});

		// update user data
		const updatUsereData = await dPrismaClient.user.update({
			where: {
				email: args.email,
			},
			data: {
				username: args.username ?? currentUserData?.username,
				role: args.role ?? currentUserData?.role,
				photoUrl: args.photoUrl ?? currentUserData?.photoUrl,
			},
		});

		return updatUsereData;
	} catch (err) {
		console.log("error on update-user resolver..");
		console.error(err);

		return new Error("RESOLVER_ERROR");
	}
}
