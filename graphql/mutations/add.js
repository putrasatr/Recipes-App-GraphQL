import { GraphQLNonNull, GraphQLString, GraphQLID } from 'graphql';
import recipesType from '../types/recipes.js';
import { createRecipes } from '../../services/index.js';

export const add = {
    type: recipesType,
    args: {
        _id: {
            type: new GraphQLNonNull(GraphQLID),
        },
        recipe: {
            type: new GraphQLNonNull(GraphQLString),
        },
        origin: {
            type: new GraphQLNonNull(GraphQLString),
        },
        ingridients: {
            type: new GraphQLNonNull(GraphQLString),
        },
        image: {
            type: new GraphQLNonNull(GraphQLString),
        },
        category: {
            type: new GraphQLNonNull(GraphQLString),
        }
    },
    resolve(_, params) {
        return createRecipes(params);
    }
}