import client from './connect.js';
import gql from 'graphql-tag';

export const read = async ({ offset, limit, keyword }) => {
    const recipesQuery = gql`
        query($offset: Int!, $limit: Int!, $keyword: String!) {
            recipes(pagination: {offset: $offset, limit: $limit, keyword: $keyword}) {
                items {
                    _id
                    category
                    ingridients
                    image
                    recipe
                }
            }
        }`;
    return await client.query({
        query: recipesQuery,
        variables: {
            offset,
            limit,
            keyword
        }
    }).then(response => response.data.recipes)
        .catch(err => {
            throw err
        });
}