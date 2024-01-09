import e from "express";

const app = e();

app.get("/", async (req, res) => {
	res.send("Welcome To Cormparse Backend");
});

app.listen(3677, () => {
	console.log("cormparse backend started...");
	console.log("listening on port ", 3677);
});
