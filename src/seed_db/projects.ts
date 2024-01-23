import dPrismaClient from "../prisma.client.js";
import { faker } from "@faker-js/faker";
import { users } from "./users.js";

/*
 id Int @id @default(autoincrement())
  name String @db.VarChar(30)
  description String? @db.Text
  key String @db.VarChar(10)
  url String? @db.VarChar(150)
  creator String >+
  creatorRef User @relation( "projectCreator", fields: [creator],references: [email]) >+
  people User[] @relation("projectMember") >+
  admins User[] @relation("projectAdmin") >+
  lead String >+
  leadRef User @relation("projectLead", fields: [lead], references: [email]) >+
  defaultAssignee String >+
  defaultAssigneeRef User @relation("projectDefaultAssignee", fields: [defaultAssignee], references: [email]) >+
  createdAt DateTime @default(now())
  updatedAt DateTime
  issues Issue[] >
  */

//const projects = [
// {
// 	name: "Gang Buster",
// 	description:
// 		"<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas rem in ipsum fugit cumque fugiat, optio doloribus tenetur corporis unde adipisci. Illum, dolores hic accusamus maxime dignissimos nihil aperiam nobis?</p>",
// 	key: "ZZXCW",
// 	url: "www.amazon.com",
// 	creator: "grail.masterpiece@gmail.com",
// 	lead: "grail.masterpiece@gmail.com",
// 	defaultAssignee: "grail.masterpiece@gmail.com",

// 	people: [2, 4, 3, 5, 6],

// 	admin: [7, 8, 9, 1],
// },
// {
// 	name: "Major Change",
// 	description:
// 		"<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas rem in ipsum fugit cumque fugiat, optio doloribus tenetur corporis unde adipisci. Illum, dolores hic accusamus maxime dignissimos nihil aperiam nobis?</p>",
// 	key: "HUHJ",
// 	creator: "grail.masterpiece@gmail.com",
// 	lead: "grailmasterplanner@gmail.com",
// 	defaultAssignee: "grailmasterplanner@gmail.com",
// 	people: [2, 8, 4, 5, 6, 7, 8, 9],
// 	admin: [1, 3],
// },

//];

const randomUserId = (): number => {
	return Math.floor(Math.random() * 9);
};

for (let index = 0; index < 10; index++) {
	const mainAdmins = {
		creator: randomUserId(),
		lead: randomUserId(),
		defaultAss: randomUserId(),
	};

	dPrismaClient.project
		.create({
			data: {
				name:
					faker.word.noun({ length: { min: 3, max: 10 } }) +
					" " +
					faker.word.noun({ length: { min: 3, max: 10 } }),
				description: `<p>${faker.lorem.paragraph(4)}</p>`,
				key: faker.lorem.word({ length: { min: 3, max: 10 } }).toUpperCase(),
				creator: users[mainAdmins.creator].email,
				lead: users[mainAdmins.lead].email,
				defaultAssignee: users[mainAdmins.defaultAss].email,
				people: {
					connect: [
						{ id: 1 },
						{ id: 2 },
						{ id: 3 },
						{ id: 4 },
						{ id: 5 },
						{ id: 6 },
						{ id: 7 },
						{ id: 8 },
						{ id: 9 },
					],
				},
				admins: {
					connect: [
						{ id: mainAdmins.creator + 1 },
						{ id: mainAdmins.lead + 1 },
						{ id: mainAdmins.defaultAss + 1 },
					],
				},
			},
		})
		.then((prj) => {
			console.log(prj);
		});
}

// seed projects table
// (() => {
// 	projects.forEach(async (proj) => {
// 		const projectCreated = await dPrismaClient.project.create({
// 			data: {
// 				name: proj.name,
// 				description: proj.description,
// 				key: proj.key,
// 				creator: proj.creator,
// 				lead: proj.lead,
// 				defaultAssignee: proj.defaultAssignee,
// 				people: {
// 					connect: proj.people.map((id) => {
// 						return { id };
// 					}),
// 				},
// 				admins: {
// 					connect: proj.admin.map((id) => {
// 						return { id };
// 					}),
// 				},
// 			},
// 		});

// 		console.log(projectCreated);
// 	});
// })();

// export const projects = {
// 	1: [
// 		{
// 			name: "Gang Buster",
// 			description:
// 				"<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas rem in ipsum fugit cumque fugiat, optio doloribus tenetur corporis unde adipisci. Illum, dolores hic accusamus maxime dignissimos nihil aperiam nobis?</p>",
// 			key: "ZZXCW",
// 			url: "www.amazon.com",
// 			creator: "grail.masterpiece@gmail.com",
// 			lead: "grail.masterpiece@gmail.com",
// 			defaultAssignee: "grail.masterpiece@gmail.com",

// 			people: [
// 				"grail.masterpiece@gmail.com",
// 				"masterpiecekodz@gmail.com",
// 				"gideon.awsdemo.1@gmail.com",
// 				"grailwaretechnologies@gmail.com",
// 				"grailmasterplanner@gmail.com",
// 				"manofvalor07@gmail.com",
// 				"valorawsdemo@gmail.com",
// 				"cormparse@gmail.com",
// 				"gideon.awsdemo.1@gmail.com",
// 				"cormparseaws@gmail.com",
// 			],
// 		},
// 		{
// 			name: "Major Change",
// 			description:
// 				"<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas rem in ipsum fugit cumque fugiat, optio doloribus tenetur corporis unde adipisci. Illum, dolores hic accusamus maxime dignissimos nihil aperiam nobis?</p>",
// 			key: "HUHJ",
// 			url: "www.google.com",
// 			creator: "grail.masterpiece@gmail.com",
// 			lead: "grailmasterplanner@gmail.com",
// 			defaultAssignee: "grailmasterplanner@gmail.com",
// 		},
// 	],
// 	2: [
// 		{
// 			name: "Desert Water",
// 			description:
// 				"<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas rem in ipsum fugit cumque fugiat, optio doloribus tenetur corporis unde adipisci. Illum, dolores hic accusamus maxime dignissimos nihil aperiam nobis?</p>",
// 			key: "ZZXCW",
// 			url: "www.amazon.com",
// 			creator: "masterpiecekodz@gmail.com",
// 			lead: "grail.masterpiece@gmail.com",
// 			defaultAssignee: "grail.masterpiece@gmail.com",
// 		},
// 		{
// 			name: "Swift Movement",
// 			description:
// 				"<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas rem in ipsum fugit cumque fugiat, optio doloribus tenetur corporis unde adipisci. Illum, dolores hic accusamus maxime dignissimos nihil aperiam nobis?</p>",
// 			key: "JASW",
// 			url: "www.google.com",
// 			creator: "masterpiecekodz@gmail.com",
// 			lead: "masterpiecekodz@gmail.com",
// 			defaultAssignee: "masterpiecekodz@gmail.com",
// 		},
// 	],
// 	3: [
// 		{
// 			name: "Morning Glow",
// 			description:
// 				"<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas rem in ipsum fugit cumque fugiat, optio doloribus tenetur corporis unde adipisci. Illum, dolores hic accusamus maxime dignissimos nihil aperiam nobis?</p>",
// 			key: "ASSE",
// 			url: "www.amazon.com",
// 			creator: "grailmasterplanner@gmail.com",
// 			lead: "grailmasterplanner@gmail.com",
// 			defaultAssignee: "grailmasterplanner@gmail.com",
// 		},
// 		{
// 			name: "Swift Movement",
// 			description:
// 				"<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas rem in ipsum fugit cumque fugiat, optio doloribus tenetur corporis unde adipisci. Illum, dolores hic accusamus maxime dignissimos nihil aperiam nobis?</p>",
// 			key: "JASW",
// 			url: "www.google.com",
// 			creator: "grailmasterplanner@gmail.com",
// 			lead: "masterpiecekodz@gmail.com",
// 			defaultAssignee: "masterpiecekodz@gmail.com",
// 		},
// 	],
// 	4: [
// 		{
// 			name: "Bouncing Castle",
// 			description:
// 				"<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas rem in ipsum fugit cumque fugiat, optio doloribus tenetur corporis unde adipisci. Illum, dolores hic accusamus maxime dignissimos nihil aperiam nobis?</p>",
// 			key: "FFRT",
// 			url: "www.amazon.com",
// 			creator: "grailwaretechnologies@gmail.com",
// 			lead: "gideon.awsdemo.1@gmail.com",
// 			defaultAssignee: "grailmasterplanner@gmail.com",
// 		},
// 		{
// 			name: "Swift Movement",
// 			description:
// 				"<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas rem in ipsum fugit cumque fugiat, optio doloribus tenetur corporis unde adipisci. Illum, dolores hic accusamus maxime dignissimos nihil aperiam nobis?</p>",
// 			key: "JASW",
// 			url: "www.google.com",
// 			creator: "grailwaretechnologies@gmail.com",
// 			lead: "grailwaretechnologies@gmail.com",
// 			defaultAssignee: "grailwaretechnologies@gmail.com",
// 		},
// 	],
// 	5: [
// 		{
// 			name: "Men Mount Guard",
// 			description:
// 				"<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas rem in ipsum fugit cumque fugiat, optio doloribus tenetur corporis unde adipisci. Illum, dolores hic accusamus maxime dignissimos nihil aperiam nobis?</p>",
// 			key: "HHJU",
// 			url: "www.amazon.com",
// 			creator: "manofvalor07@gmail.com",
// 			lead: "gideon.awsdemo.1@gmail.com",
// 			defaultAssignee: "manofvalor07@gmail.com",
// 		},
// 		{
// 			name: "Swift Movement",
// 			description:
// 				"<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas rem in ipsum fugit cumque fugiat, optio doloribus tenetur corporis unde adipisci. Illum, dolores hic accusamus maxime dignissimos nihil aperiam nobis?</p>",
// 			key: "JASW",
// 			url: "www.google.com",
// 			creator: "manofvalor07@gmail.com",
// 			lead: "manofvalor07@gmail.com",
// 			defaultAssignee: "manofvalor07@gmail.com",
// 		},
// 	],
// 	6: [
// 		{
// 			name: "Father Brother Uncle",
// 			description:
// 				"<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas rem in ipsum fugit cumque fugiat, optio doloribus tenetur corporis unde adipisci. Illum, dolores hic accusamus maxime dignissimos nihil aperiam nobis?</p>",
// 			key: "AAHH",
// 			url: "www.amazon.com",
// 			creator: "valorawsdemo@gmail.com",
// 			lead: "gideon.awsdemo.1@gmail.com",
// 			defaultAssignee: "valorawsdemo@gmail.com",
// 		},
// 		{
// 			name: "Swift Movement",
// 			description:
// 				"<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas rem in ipsum fugit cumque fugiat, optio doloribus tenetur corporis unde adipisci. Illum, dolores hic accusamus maxime dignissimos nihil aperiam nobis?</p>",
// 			key: "JASW",
// 			url: "www.google.com",
// 			creator: "valorawsdemo@gmail.com",
// 			lead: "valorawsdemo@gmail.com",
// 			defaultAssignee: "manofvalor07@gmail.com",
// 		},
// 	],
// 	7: [
// 		{
// 			name: "Father Brother Uncle",
// 			description:
// 				"<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas rem in ipsum fugit cumque fugiat, optio doloribus tenetur corporis unde adipisci. Illum, dolores hic accusamus maxime dignissimos nihil aperiam nobis?</p>",
// 			key: "OOPU",
// 			url: "www.amazon.com",
// 			creator: "cormparse@gmail.com",
// 			lead: "cormparse@gmail.com",
// 			defaultAssignee: "valorawsdemo@gmail.com",
// 		},
// 		{
// 			name: "Mother Board",
// 			description:
// 				"<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas rem in ipsum fugit cumque fugiat, optio doloribus tenetur corporis unde adipisci. Illum, dolores hic accusamus maxime dignissimos nihil aperiam nobis?</p>",
// 			key: "MNJJ",
// 			url: "www.google.com",
// 			creator: "cormparse@gmail.com",
// 			lead: "grailwaretechnologies@gmail.com",
// 			defaultAssignee: "grailwaretechnologies@gmail.com",
// 		},
// 	],
// 	8: [
// 		{
// 			name: "Nickle Dime And Penny",
// 			description:
// 				"<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas rem in ipsum fugit cumque fugiat, optio doloribus tenetur corporis unde adipisci. Illum, dolores hic accusamus maxime dignissimos nihil aperiam nobis?</p>",
// 			key: "IUYTTR",
// 			url: "www.amazon.com",
// 			creator: "gideon.awsdemo.1@gmail.com",
// 			lead: "cormparse@gmail.com",
// 			defaultAssignee: "valorawsdemo@gmail.com",
// 		},
// 		{
// 			name: "Century Millenium",
// 			description:
// 				"<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas rem in ipsum fugit cumque fugiat, optio doloribus tenetur corporis unde adipisci. Illum, dolores hic accusamus maxime dignissimos nihil aperiam nobis?</p>",
// 			key: "CTMIL",
// 			url: "www.google.com",
// 			creator: "gideon.awsdemo.1@gmail.com",
// 			lead: "grailwaretechnologies@gmail.com",
// 			defaultAssignee: "grailwaretechnologies@gmail.com",
// 		},
// 	],
// 	9: [
// 		{
// 			name: "Japan Korea China",
// 			description:
// 				"<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas rem in ipsum fugit cumque fugiat, optio doloribus tenetur corporis unde adipisci. Illum, dolores hic accusamus maxime dignissimos nihil aperiam nobis?</p>",
// 			key: "JPKRCH",
// 			url: "www.amazon.com",
// 			creator: "cormparseaws@gmail.com",
// 			lead: "cormparseaws@gmail.com",
// 			defaultAssignee: "cormparseaws@gmail.com",
// 		},
// 		{
// 			name: "After Party Vibes",
// 			description:
// 				"<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas rem in ipsum fugit cumque fugiat, optio doloribus tenetur corporis unde adipisci. Illum, dolores hic accusamus maxime dignissimos nihil aperiam nobis?</p>",
// 			key: "AFPTVB",
// 			url: "www.google.com",
// 			creator: "cormparseaws@gmail.com",
// 			lead: "grailwaretechnologies@gmail.com",
// 			defaultAssignee: "grailwaretechnologies@gmail.com",
// 		},
// 	],
// };
export const p = 1;
