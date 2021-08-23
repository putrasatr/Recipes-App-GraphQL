import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import queryType from './queries/index.js';
import mutations from './mutations/index.js';

export const recipeSchema = new GraphQLSchema({
    query: queryType,
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: mutations
    })
})