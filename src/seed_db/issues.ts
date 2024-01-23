import dPrismaClient from "../prisma.client.js";

/*id Int @id @default(autoincrement())
  summary String @db.VarChar(150)
  key String @db.VarChar(15)
  description String @db.Text
  type IssueType
  priority Priority
  status String
  tags String[]
  attachments Json[]
  assignee String
  assigneeRef User @relation("issueAssignee", fields: [assignee], references: [email])
  reporter String
  reporterRef User @relation("issueReported", fields: [reporter], references: [email])
  project Int
  projectRef Project @relation(fields: [project], references: [id])
  parentIssue Int
  parentIssueRef Issue @relation("linkedIssue", fields: [parentIssue], references: [id])
  childIssues Issue[] @relation("linkedIssue")
  superIssue Int
  superIssueRef Issue @relation("issuesSubtask", fields: [superIssue], references: [id])
  subTasks Issue[] @relation("issuesSubtask")
  reportedAt DateTime @default(now()) 
  dueDate DateTime
  updatedAt DateTime
  comments Comment[]
  activities Update[]
  recentActors User[] @relation("recentIssuesBtActivity")*/

const issue = [
	{
		summary:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non minus nisi ullam",
		key: "ZZXCW-1",
		description:
			"<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus sit id voluptatum esse possimus dolores laboriosam ea repellat maiores voluptas eum ipsam ut dicta praesentium, ipsum debitis excepturi facere quos eaque est tempora? Asperiores nisi voluptate ducimus mollitia itaque doloremque!</p>",
		type: "bug",
		priority: "high",
		status: "done",
		tags: ["quick", "look", "fast"],
		attachments: [
			{
				url: "https://firebasestorage.googleapis.com/v0/b/cormparse-issue-tracker.appspot.com/o/issue_attachments%2F04c35783d129d2d3a282ec3e6e092069.mp4?alt=media&token=2d505a88-4d42-4804-8b10-bad674ef381c",
				name: "04c35783d129d2d3a282ec3e6e092069.mp4",
				format: "video/mp4",
			},
			{
				url: "https://firebasestorage.googleapis.com/v0/b/cormparse-issue-tracker.appspot.com/o/issue_attachments%2FSQL_cheatsheat4.pdf?alt=media&token=acb425b9-0485-4028-adec-bb40f2854146",
				name: "SQL_cheatsheat4.pdf",
				format: "application/pdf",
			},
			{
				url: "https://firebasestorage.googleapis.com/v0/b/cormparse-issue-tracker.appspot.com/o/issue_attachments%2Fvalor_brand2.png?alt=media&token=f193dd44-4f63-4fae-b6c9-774e10aaff53",
				name: "valor_brand2.png",
				format: "image/png",
			},
		],
		assignee: "grail.masterpiece@gmail.com",
		reporter: "grailwaretechnologies@gmail.com",
		project: 1,
		reportedAt: new Date("2024-01-02"),
		dueDate: new Date("2024-02-10"),
	}, // no parent. no super
	{
		summary:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non minus nisi ullam",
		key: "ZZXCW-2",
		description:
			"<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus sit id voluptatum esse possimus dolores laboriosam ea repellat maiores voluptas eum ipsam ut dicta praesentium, ipsum debitis excepturi facere quos eaque est tempora? Asperiores nisi voluptate ducimus mollitia itaque doloremque!</p>",
		type: "task",
		priority: "mid",
		status: "to-do",
		tags: ["man", "benz", "beamer"],
		attachments: [
			{
				url: "https://firebasestorage.googleapis.com/v0/b/cormparse-issue-tracker.appspot.com/o/issue_attachments%2F04c35783d129d2d3a282ec3e6e092069.mp4?alt=media&token=2d505a88-4d42-4804-8b10-bad674ef381c",
				name: "04c35783d129d2d3a282ec3e6e092069.mp4",
				format: "video/mp4",
			},
			{
				url: "https://firebasestorage.googleapis.com/v0/b/cormparse-issue-tracker.appspot.com/o/issue_attachments%2FSQL_cheatsheat4.pdf?alt=media&token=acb425b9-0485-4028-adec-bb40f2854146",
				name: "SQL_cheatsheat4.pdf",
				format: "application/pdf",
			},
			{
				url: "https://firebasestorage.googleapis.com/v0/b/cormparse-issue-tracker.appspot.com/o/issue_attachments%2Fvalor_brand2.png?alt=media&token=f193dd44-4f63-4fae-b6c9-774e10aaff53",
				name: "valor_brand2.png",
				format: "image/png",
			},
		],
		assignee: "manofvalor07@gmail.com",
		reporter: "cormparseaws@gmail.com",
		project: 1,
		reportedAt: new Date("2024-01-03"),
		dueDate: new Date("2024-02-28"),
	}, // no parent, no super
];

const linkedIssue = [
	{
		summary:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non minus nisi ullam",
		key: "ZZXCW-5",
		description:
			"<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus sit id voluptatum esse possimus dolores laboriosam ea repellat maiores voluptas eum ipsam ut dicta praesentium, ipsum debitis excepturi facere quos eaque est tempora? Asperiores nisi voluptate ducimus mollitia itaque doloremque!</p>",
		type: "improvement",
		priority: "mid",
		status: "to-do",
		tags: ["only", "broke", "rich"],
		attachments: [
			{
				url: "https://firebasestorage.googleapis.com/v0/b/cormparse-issue-tracker.appspot.com/o/issue_attachments%2F04c35783d129d2d3a282ec3e6e092069.mp4?alt=media&token=2d505a88-4d42-4804-8b10-bad674ef381c",
				name: "04c35783d129d2d3a282ec3e6e092069.mp4",
				format: "video/mp4",
			},
			{
				url: "https://firebasestorage.googleapis.com/v0/b/cormparse-issue-tracker.appspot.com/o/issue_attachments%2FSQL_cheatsheat4.pdf?alt=media&token=acb425b9-0485-4028-adec-bb40f2854146",
				name: "SQL_cheatsheat4.pdf",
				format: "application/pdf",
			},
			{
				url: "https://firebasestorage.googleapis.com/v0/b/cormparse-issue-tracker.appspot.com/o/issue_attachments%2Fvalor_brand2.png?alt=media&token=f193dd44-4f63-4fae-b6c9-774e10aaff53",
				name: "valor_brand2.png",
				format: "image/png",
			},
		],
		assignee: "manofvalor07@gmail.com",
		reporter: "gideon.awsdemo.1@gmail.com",
		project: 1,
		reportedAt: new Date("2024-01-23"),
		dueDate: new Date("2024-01-21"),
	},
]; //***has parent. no super}

const dSubTasks = [
	{
		summary: "Consectetur adipisicing elit. Non minus nisi ullam",
		key: "ZZXCW-3",
		description:
			"<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus sit id voluptatum esse possimus dolores laboriosam ea repellat maiores voluptas eum ipsam ut dicta praesentium, ipsum debitis excepturi facere quos eaque est tempora? Asperiores nisi voluptate ducimus mollitia itaque doloremque!</p>",
		type: "sub_task",
		priority: "low",
		status: "in-progress",
		tags: ["zion", "trick", "xavi"],
		attachments: [],
		assignee: "valorawsdemo@gmail.com",
		reporter: "manofvalor07@gmail.com",
		project: 1,
		reportedAt: new Date("2024-02-02"),
		dueDate: new Date("2024-02-09"),
	},
	{
		summary: "Consectetur adipisicing elit. Non minus nisi ullam",
		key: "ZZXCW-4",
		description:
			"<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus sit id voluptatum esse possimus dolores laboriosam ea repellat maiores voluptas eum ipsam ut dicta praesentium, ipsum debitis excepturi facere quos eaque est tempora? Asperiores nisi voluptate ducimus mollitia itaque doloremque!</p>",
		type: "bug",
		priority: "highest",
		status: "done",
		tags: ["zion", "trick", "xavi"],
		attachments: [],
		assignee: "grailmasterplanner@gmail.com",
		reporter: "manofvalor07@gmail.com",
		project: 1,
		reportedAt: new Date("2024-02-07"),
		dueDate: new Date("2024-02-17"),
	},
];

(() => {
	issue.forEach(async (iss, index) => {
		const issueCreated = await dPrismaClient.issue.create({
			data:
				index > 0
					? {
							summary: iss.summary,
							key: iss.key,
							description: iss.description,
							type: iss.type,
							priority: iss.priority,
							status: iss.status,
							tags: iss.tags,
							attachments: iss.attachments,
							assignee: iss.assignee,
							reporter: iss.reporter,
							project: iss.project,
							reportedAt: iss.reportedAt,
							dueDate: iss.dueDate,
					  }
					: {
							summary: iss.summary,
							key: iss.key,
							description: iss.description,
							type: iss.type,
							priority: iss.priority,
							status: iss.status,
							tags: iss.tags,
							attachments: iss.attachments,
							assignee: iss.assignee,
							reporter: iss.reporter,
							project: iss.project,
							reportedAt: iss.reportedAt,
							dueDate: iss.dueDate,
							childIssues: {
								create: [...linkedIssue],
							},
							subTasks: { create: [...dSubTasks] },
					  },
		});

		console.log(issueCreated);
	});
})();

export const i = 1;
