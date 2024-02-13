import dPrismaClient from "../../prisma.client.js";

export async function resolveProjects(_: any, args: any) {
	let projects;
	try {
		if (args.offset && args.offset > 0) {
			// use offset-based pagination
			projects = await dPrismaClient.user.findFirst({
				where: {
					email: args.email,
				},
				select: {
					projectsAsMember: {
						skip: args.offset * 10,
						take: 10,
						orderBy: {
							name: "asc",
						},
					},
				},
			});
		} else {
			// no pagination

			projects = await dPrismaClient.user.findFirst({
				where: {
					email: args.email,
				},
				select: {
					projectsAsMember: {
						take: 10,
						orderBy: {
							id: "asc",
						},
					},
				},
			});
		}

		return projects?.projectsAsMember;
	} catch (err) {
		console.log("projects query resolution failed...");
		console.error(err);

		return null;
	}
}
