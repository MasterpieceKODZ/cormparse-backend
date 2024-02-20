import dPrismaClient from "../../prisma.client.js";

export async function projectIssuesResolver(_: any, args: any) {
	console.log("project issues args =");
	console.log(args);

	try {
		let projIssues;

		const props = JSON.parse(args.props);

		console.log("args props ===================================");
		console.log(props);

		const projID = await dPrismaClient.project.findFirst({
			where: {
				key: args.projectKey,
				people: {
					some: {
						email: args.email,
					},
				},
			},

			select: {
				id: true,
			},
		});

		// fetch issues without properties filter
		if (props.length < 1) {
			console.log("fetching issues without properties filter...");

			switch ((args.category as string).toUpperCase()) {
				case "ALL":
					if (projID?.id) {
						projIssues = await dPrismaClient.issue.findMany({
							where: {
								project: projID.id,
							},
							skip: (args.offset - 1) * 10,
							take: 10,
						});
					} else {
						return [];
					}

					break;
				case "PENDING":
					if (projID?.id) {
						projIssues = await dPrismaClient.issue.findMany({
							where: {
								assignee: args.email,
								project: projID.id,
								AND: {
									NOT: { status: "done" },
								},
							},
							skip: (args.offset - 1) * 10,
							take: 10,
						});
					} else {
						return [];
					}
					break;
				case "REPORTEDBYME":
					if (projID?.id) {
						projIssues = await dPrismaClient.issue.findMany({
							where: {
								project: projID.id,
								reporter: args.email,
							},
							skip: (args.offset - 1) * 10,
							take: 10,
						});
					} else {
						return [];
					}
					break;
				case "DONE":
					if (projID?.id) {
						projIssues = await dPrismaClient.issue.findMany({
							where: {
								project: projID.id,
								status: "done",
							},
							skip: (args.offset - 1) * 10,
							take: 10,
						});
					} else {
						return [];
					}
					break;

				default:
					return new Error("NO_ISSUE_CATEGORY");
			}
		} else {
			// filter issues by properties
			let issueProp = {};

			if (props.type) {
				issueProp = { ...issueProp, type: props.type.toLowerCase() };
			}

			if (props.status) {
				issueProp = { ...issueProp, status: props.status.toLowerCase() };
			}

			if (props.assignee) {
				issueProp = {
					...issueProp,
					assigneeRef: {
						username: {
							contains: props.assignee,
						},
					},
				};
			}

			if (props.dueDate) {
				issueProp = { ...issueProp, dueDate: { lte: new Date(props.dueDate) } };
			}

			console.log("fetching issues with property filter...");
			console.log(issueProp);

			projIssues = await dPrismaClient.project.findFirst({
				where: {
					key: args.projectKey,
					people: {
						some: {
							email: args.email,
						},
					},
				},

				select: {
					issues: {
						where: {
							AND: { ...issueProp },
						},
						skip: (args.offset - 1) * 10,
						take: 10,
					},
				},
			});

			//  ************************
			if (projID?.id) {
				projIssues = await dPrismaClient.issue.findMany({
					where: {
						project: projID.id,
						AND: { ...issueProp },
					},
					skip: (args.offset - 1) * 10,
					take: 10,
				});
			} else {
				return [];
			}
		}

		return projIssues;
	} catch (err) {
		console.log("error on project issues resolver");
		console.log(err);

		return new Error("ERROR");
	}
}
