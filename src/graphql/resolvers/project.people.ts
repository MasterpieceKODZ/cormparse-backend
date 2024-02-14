import dPrismaClient from "../../prisma.client.js";

export async function projectPeopleResolver(_: any, args: any) {
	try {
		if (args.username) {
			//filter project people by username
			const projPpl = await dPrismaClient.project.findFirst({
				where: {
					AND: {
						key: args.projectKey,

						people: {
							some: {
								email: args.email,
							},
						},
					},
				},
				select: {
					people: {
						where: {
							username: {
								contains: args.username,
							},
						},
					},
				},
			});

			return projPpl?.people;
		} else {
			// return all users in the project
			const projPpl = await dPrismaClient.project.findFirst({
				where: {
					AND: {
						key: args.projectKey,

						people: {
							some: {
								email: args.email,
							},
						},
					},
				},
				select: {
					people: true,
				},
			});

			console.log(projPpl);

			return projPpl?.people;
		}
	} catch (error) {
		return new Error("ERROR");
	}
}
