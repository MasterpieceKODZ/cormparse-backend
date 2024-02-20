import dPrismaClient from "../../prisma.client.js";

export async function projectIssueCountResolver(_: any, args: any) {
	console.log("project issues count args =");
	console.log(args);

	try {
		let projIssuesCount;

		const props = JSON.parse(args.props);

		console.log("args props ===================================");
		console.log(props);

		// fetch issues without properties filter
		if (props.length < 1) {
			console.log("fetching issues count without properties filter...");

			switch ((args.category as string).toUpperCase()) {
				case "ALL":
					projIssuesCount = await dPrismaClient.project.findFirst({
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
							_count: {
								select: { issues: true },
							},
						},
					});
					break;
				case "PENDING":
					projIssuesCount = await dPrismaClient.project.findFirst({
						where: {
							key: args.projectKey,
							people: {
								some: {
									email: args.email,
								},
							},
						},
						select: {
							_count: {
								select: {
									issues: {
										where: {
											assignee: args.email,
											AND: {
												NOT: { status: "done" },
											},
										},
									},
								},
							},
						},
					});
					break;
				case "REPORTEDBYME":
					projIssuesCount = await dPrismaClient.project.findFirst({
						where: {
							key: args.projectKey,
							people: {
								some: {
									email: args.email,
								},
							},
						},
						select: {
							_count: {
								select: {
									issues: {
										where: {
											reporter: args.email,
										},
									},
								},
							},
						},
					});
					break;
				case "DONE":
					projIssuesCount = await dPrismaClient.project.findFirst({
						where: {
							key: args.projectKey,
							people: {
								some: {
									email: args.email,
								},
							},
						},
						select: {
							_count: {
								select: {
									issues: {
										where: {
											status: "done",
										},
									},
								},
							},
						},
					});
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
				issueProp = {
					...issueProp,
					dueDate: { lte: new Date(props.dueDate) },
				};
			}

			console.log("fetching issues count with property filter...");
			console.log(issueProp);

			projIssuesCount = await dPrismaClient.project.findFirst({
				where: {
					key: args.projectKey,
					people: {
						some: {
							email: args.email,
						},
					},
				},
				select: {
					_count: {
						select: {
							issues: {
								where: {
									AND: { ...issueProp },
								},
							},
						},
					},
				},
			});
		}

		return projIssuesCount?._count.issues;
	} catch (err) {
		console.log("error on project issues resolver");
		console.log(err);

		return new Error("ERROR");
	}
}
