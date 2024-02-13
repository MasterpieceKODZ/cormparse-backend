import dPrismaClient from "../../prisma.client.js";

export async function resolveCreateProject(_: any, args: any) {
	try {
		// fetch creator id

		const creator = await dPrismaClient.user.findFirst({
			where: {
				email: args.email,
			},
			select: {
				id: true,
			},
		});

		if (creator?.id) {
			const project = await dPrismaClient.project.create({
				data: {
					name: args.name,
					key: args.key,
					creator: args.email,
					lead: args.email,
					defaultAssignee: args.email,
					people: {
						connect: [{ id: creator?.id }],
					},
					admins: {
						connect: [
							{
								id: creator.id,
							},
						],
					},
				},
			});

			return project;
		} else {
			console.log("error in create project resolver...");
			console.error("failed to fetch creator...");

			return new Error("UNKNOWN_CREATOR");
		}
	} catch (err: any) {
		console.log("error in create project resolver...");
		console.error("error code = ", err.code);
		console.error("error message = ", err.message);

		if (err.code == "P2002") return new Error("DUPLICATE_KEY_OR_NAME");
		else return new Error("CREATE_PROJECT_ERROR");
	}
}
