import dPrismaClient from "../prisma.client.js";
/*model Comment {
  id Int @id @default(autoincrement())
   author String
  authorRef User @relation( fields: [author],references: [email], onDelete: Cascade)
  content String @db.Text
  postedAt DateTime
  isReply Boolean?
  replyTo Int?
  replyToRef Comment? @relation("commentReply",fields: [replyTo],references: [id], onDelete: Cascade)
  repliedBy Comment[] @relation("commentReply")
  likes Int @default(0)
  unlikes Int @default(0)
  issue Int
  issueRef Issue @relation(fields: [issue], references: [id], onDelete: Cascade)

}
*/

const comments = [
	// {
	// 	author: "grailmasterplanner@gmail.com",
	// 	content:
	// 		"<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora hic ratione tenetur fugit qui eius optio neque, nobis, laborum atque blanditiis labore recusandae deserunt est ipsam! Esse maiores aliquid numquam.</p>",
	// 	postedAt: new Date("2024-02-04"),
	// 	issue: 13,
	// },
	// {
	// 	author: "cormparseaws@gmail.com",
	// 	content:
	// 		"<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora hic ratione tenetur fugit qui eius optio neque, nobis, laborum atque blanditiis labore recusandae deserunt est ipsam! Esse maiores aliquid numquam.</p>",
	// 	postedAt: new Date("2024-02-05"),
	// 	issue: 13,
	// },
	{
		author: "cormparseaws@gmail.com",
		content:
			"<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora hic ratione tenetur fugit qui eius optio neque, nobis, laborum atque blanditiis labore recusandae deserunt est ipsam! Esse maiores aliquid numquam.</p>",
		postedAt: new Date("2024-02-07"),
		issue: 13,
		isReply: true,
		replyTo: 1,
		likes: 13,
	},
];

(async () => {
	comments.forEach(async (com) => {
		const commentsCreated = await dPrismaClient.comment.create({
			data: com,
		});

		console.log(commentsCreated);
	});
})();

export const c = 1;
