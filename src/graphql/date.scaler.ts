import { GraphQLError, GraphQLScalarType, Kind } from "graphql";

export const DateScalar = new GraphQLScalarType({
	name: "DateScalar",
	description: "my graphql date scaler type.",
	serialize: (value) => {
		if (value instanceof Date) return value.getTime();
		else
			throw Error(
				`Graphql Date serializer expected a date type but got ${typeof value}`,
			);
	},
	parseValue: (value) => {
		if (typeof value === "number") return new Date(value);
		else throw new GraphQLError("GraphQL Date parser expected a number");
	},
	parseLiteral: (ast) => {
		if (ast.kind === Kind.INT) {
			return new Date(parseInt(ast.value));
		}

		return null;
	},
});
