import dPrismaClient from "../../prisma.client.js";

export async function resolveRecentProjects(_: any, args: any) {
	try {
		const recentProjects = await dPrismaClient.user.findFirst({
			where: {
				email: args.email,
			},
			select: {
				projectsAsMember: {
					take: 4,
					orderBy: {
						updatedAt: "desc",
					},
				},
			},
		});

		return recentProjects?.projectsAsMember;
	} catch (err) {
		console.log(err);

		return new Error("ERROR");
	}
}
