import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";

import e from "express";
import { createServer } from "http";
import { typeDef } from "./graphql/schema.type.def.js";
import { resolvers } from "./graphql/resolvers/resolve.map.js";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";

const app = e();

const httpServer = createServer(app);

const apolloServer = new ApolloServer({
	typeDefs: typeDef,
	resolvers: resolvers,
	plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await apolloServer.start();

app.use(
	"/",
	e.json(),
	(req, res, next) => {
		console.log("new request received...");
		console.log(req.method);

		console.log(req.body);
		next();
	},
	expressMiddleware(apolloServer),
);

httpServer.listen(4030, () => {
	console.log(`backend service listening on ${4030}`);
});
