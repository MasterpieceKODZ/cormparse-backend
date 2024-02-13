import dPrismaClient from "../../prisma.client.js";

export async function resolveUserRecentIssue(_: any, args: any) {
	try {
		const issues = await dPrismaClient.issue.findMany({
			where: {
				AND: [
					{
						status: { not: "done" },
					},
					{
						OR: [
							{
								reporter: args.email,
							},
							{
								assignee: args.email,
							},
						],
					},
				],
			},
			take: 5,
			orderBy: {
				updatedAt: "desc",
			},
		});

		return issues;
	} catch (err) {
		console.log("error resolving user recent issues");
		console.log(err);

		return new Error("ERROR");
	}
}
