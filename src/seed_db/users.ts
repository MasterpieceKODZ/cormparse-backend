/*
  id Int @id @default(autoincrement())
  email String @unique @db.VarChar(100)
  firstname String @db.VarChar(50)
  lastname String @db.VarChar(50)
  username String @unique @db.VarChar(100)
  passwordHash String?
  salt String?
  photoUrl String?
  recentIssues Issue[] @relation("recentIssuesBtActivity")
  assignedIssues Issue[] @relation("issueAssignee")
  role String? @db.VarChar(50)
  dateCreated DateTime @default(now())
  projectsAsCreator Project[] @relation("projectCreator")
  projectsAsMember Project[] @relation("projectMember")
  projectsAsAdmin Project[] @relation("projectAdmin")
  projectsAsLead Project[] @relation("projectLead")
  projectsAsDefaultAssignee Project[] @relation("projectDefaultAssignee")
  reportedIssues Issue[] @relation("issueReported")
  comments Comment[]
  activities Update[]
*/

export const users = [
	{
		email: "grail.masterpiece@gmail.com", ///
		firstname: "Gideon",
		lastname: "Omorodion",
		username: "MasterpieceKODZ",
		password: null, //Oauth
		role: "Fullstack Developer",
		recentIssues: [],
		assignedIssues: [],
		projectsAsCreator: [],
		projectsAsMember: [],
		projectsAsAdmin: [],
		projectsAsLead: [],
		projectsAsDefaultAssignee: [],
		reportedIssues: [],
		comments: [],
		activities: [],
	},
	{
		email: "masterpiecekodz@gmail.com", ///
		firstname: "Gordon",
		lastname: "Willams",
		username: "ManOfValor",
		password: "IamaMasterpiece100%",
		role: "Scrum Master",
		recentIssues: [],
		assignedIssues: [],
		projectsAsCreator: [],
		projectsAsMember: [],
		projectsAsAdmin: [],
		projectsAsLead: [],
		projectsAsDefaultAssignee: [],
		reportedIssues: [],
		comments: [],
		activities: [],
	},
	{
		email: "grailmasterplanner@gmail.com", ///
		firstname: "Gideon",
		lastname: "Jimmy",
		username: "Faressy",
		password: null,
		role: "UI-UX Designer",
		recentIssues: [],
		assignedIssues: [],
		projectsAsCreator: [],
		projectsAsMember: [],
		projectsAsAdmin: [],
		projectsAsLead: [],
		projectsAsDefaultAssignee: [],
		reportedIssues: [],
		comments: [],
		activities: [],
	},
	{
		email: "grailwaretechnologies@gmail.com", ///
		firstname: "Grailware",
		lastname: "Technologies",
		username: "GrailTech",
		password: null,
		role: "Backend Engineer",
		recentIssues: [],
		assignedIssues: [],
		projectsAsCreator: [],
		projectsAsMember: [],
		projectsAsAdmin: [],
		projectsAsLead: [],
		projectsAsDefaultAssignee: [],
		reportedIssues: [],
		comments: [],
		activities: [],
	},
	{
		email: "manofvalor07@gmail.com", ///
		firstname: "Gideon",
		lastname: "Faith",
		username: "ValerieXO",
		password: null,
		role: "Data Analyst",
		recentIssues: [],
		assignedIssues: [],
		projectsAsCreator: [],
		projectsAsMember: [],
		projectsAsAdmin: [],
		projectsAsLead: [],
		projectsAsDefaultAssignee: [],
		reportedIssues: [],
		comments: [],
		activities: [],
	},
	{
		email: "valorawsdemo@gmail.com",
		firstname: "Anissa",
		lastname: "Samuel",
		username: "Annie",
		password: "IamaMasterpiece100%",
		role: "Cloud Architect",
		recentIssues: [],
		assignedIssues: [],
		projectsAsCreator: [],
		projectsAsMember: [],
		projectsAsAdmin: [],
		projectsAsLead: [],
		projectsAsDefaultAssignee: [],
		reportedIssues: [],
		comments: [],
		activities: [],
	},
	{
		email: "cormparse@gmail.com",
		firstname: "Caleb",
		lastname: "Ademola",
		username: "Prince",
		password: "IamaMasterpiece100%",
		role: "Backend Engineer",
		recentIssues: [],
		assignedIssues: [],
		projectsAsCreator: [],
		projectsAsMember: [],
		projectsAsAdmin: [],
		projectsAsLead: [],
		projectsAsDefaultAssignee: [],
		reportedIssues: [],
		comments: [],
		activities: [],
	},
	{
		email: "gideon.awsdemo.1@gmail.com",
		firstname: "Hillary",
		lastname: "Gabriel",
		username: "Hillary",
		password: "IamaMasterpiece100%",
		role: "Project Manager",
		recentIssues: [],
		assignedIssues: [],
		projectsAsCreator: [],
		projectsAsMember: [],
		projectsAsAdmin: [],
		projectsAsLead: [],
		projectsAsDefaultAssignee: [],
		reportedIssues: [],
		comments: [],
		activities: [],
	},
	{
		email: "cormparseaws@gmail.com",
		firstname: "Mariam",
		lastname: "Abdulazeez",
		username: "Mariam",
		password: "IamaMasterpiece100%",
		role: "Frontend Engineer",
		recentIssues: [],
		assignedIssues: [],
		projectsAsCreator: [],
		projectsAsMember: [],
		projectsAsAdmin: [],
		projectsAsLead: [],
		projectsAsDefaultAssignee: [],
		reportedIssues: [],
		comments: [],
		activities: [],
	},
];
