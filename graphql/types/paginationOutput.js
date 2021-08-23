import { GraphQLList, GraphQLObjectType } from 'graphql';

const PaginatedListType = (ItemType) => new GraphQLObjectType({
  name: 'Paginated' + ItemType,
  fields: {
    items: { type: new GraphQLList(ItemType) }
  }
})

export default PaginatedListType;