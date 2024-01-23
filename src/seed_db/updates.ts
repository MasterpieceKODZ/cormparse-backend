import dPrismaClient from "../prisma.client.js";
/*id Int @id @default(autoincrement())
  description String @db.Text
  actor String
  actorRef User @relation(fields: [actor], references: [email], onDelete: Cascade)
  issue Int
  issueRef Issue @relation(fields: [issue],references: [id], onDelete: Cascade)*/

const updates = [
	{
		description: `<p><strong>MasterpieceKODZ</strong> changed the status from  <strong class="tw-text-gray-400 dark:tw-text-gray-600">to-do</strong>  to  <strong class="tw-text-blue-600">in-progress</strong></p>`,
		actor: "grail.masterpiece@gmail.com",
		issue: 13,
	},
	{
		description: `<p><strong>Mariam</strong> changed the status from  <strong class="tw-text-blue-600">in-progress</strong>  to  <strong class="tw-text-green-600">done</strong></p>`,
		actor: "cormparseaws@gmail.com",
		issue: 13,
	},
];

(async () => {
	const updatesCreated = await dPrismaClient.update.createMany({
		data: updates,
	});
	console.log(updatesCreated);
})();

export const u = 1;
