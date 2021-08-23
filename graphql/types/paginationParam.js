import { GraphQLInputObjectType, GraphQLInt,GraphQLString} from 'graphql';

const PaginationArgType = new GraphQLInputObjectType({
  name: 'PaginationArg',
  fields: {
    offset: {
      type: GraphQLInt,
      description: "Skip n rows."
    },
    limit: {
      type: GraphQLInt,
      description: "total data"
    },
    keyword: {
      type: GraphQLString,
      description: "search keyword."
    }
  }
})

export default PaginationArgType