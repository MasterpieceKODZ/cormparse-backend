import dPrismaClient from "../../prisma.client.js";

export async function resolveProjects(_: any, args: any) {
	console.log(" projects resolver engaged...");
	console.log(args);

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
							id: "asc",
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

		console.log(`projects of user ${args.email} resolved...`);
		console.log(projects);

		return projects?.projectsAsMember;
	} catch (err) {
		console.log("projects query resolution failed...");
		console.error(err);

		return null;
	}
}
