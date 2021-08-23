import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString
} from 'graphql';


// contact Type
const recipeType = new GraphQLObjectType({
    name: 'recipes',
    fields: {
        id: {
            type: GraphQLID
        },
        _id: {
            type: GraphQLID
        },
        category: {
            type: GraphQLString
        },
        ingridients: {
            type: GraphQLString
        },
        image: {
            type: GraphQLString
        },
        origin: {
            type: GraphQLString
        },
        recipe: {
            type: GraphQLString
        },
    }
});

export default recipeType