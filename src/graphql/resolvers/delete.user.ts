import dPrismaClient from "../../prisma.client.js";

export async function deleteUserResolver(_: any, args: any) {
	try {
		const deletedUser = await dPrismaClient.user.delete({
			where: {
				email: args.email,
			},
		});

		return deletedUser;
	} catch (err: any) {
		console.log("error on delete user");
		console.log(err);

		if (err.code == "P2003") {
			return new Error("NOT_ALLOWED");
		}

		return new Error("ERROR");
	}
}
