import dPrismaClient from "../../prisma.client.js";

export async function resolveUserData(_: any, args: any) {
	try {
		const user = await dPrismaClient.user.findFirst({
			where: {
				email: args.email,
			},
		});

		return user;
	} catch (err) {
		return new Error("ERROR");
	}
}
