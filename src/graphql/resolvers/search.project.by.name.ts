import dPrismaClient from "../../prisma.client.js";

export default async function resolveSearchProjectByName(_: any, args: any) {
	try {
		const projectsByName = await dPrismaClient.user.findFirst({
			where: {
				email: args.email,
			},
			select: {
				projectsAsMember: {
					where: {
						name: {
							contains: args.search,
						},
					},
				},
			},
		});

		console.log("projects with ", args.search, " in their name..");
		console.log(projectsByName);

		return projectsByName?.projectsAsMember;
	} catch (e) {
		console.log("error in search project by name resolver");
		console.error(e);

		return new Error("SEARCH_PROJECT_BY_NAME_ERROR");
	}
}
