import dPrismaClient from "../../prisma.client.js";

export async function resolveProjectsCount(_: any, args: any) {
	try {
		const count = await dPrismaClient.user.findFirst({
			where: {
				email: args.email,
			},
			select: {
				_count: {
					select: { projectsAsMember: true },
				},
			},
		});

		console.log("projects count => ", count);

		return count?._count.projectsAsMember;
	} catch (err) {
		console.log("projects resolution failed...");
		console.error(err);

		return null;
	}
}
