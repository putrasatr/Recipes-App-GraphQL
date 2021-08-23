import { GraphQLObjectType } from "graphql";
import RecipeQueryType from "./recipe.js";

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    ...RecipeQueryType,
  },
});

export default QueryType