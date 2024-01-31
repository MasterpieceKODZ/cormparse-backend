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

		console.log("user recent issues are ");
		console.log(issues);

		return issues;
	} catch (err) {
		console.log("error resolving user recent issues");
		return new Error("ERROR");
	}
}
