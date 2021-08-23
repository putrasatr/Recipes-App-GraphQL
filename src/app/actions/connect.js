import fetch from "node-fetch";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClientNode from 'apollo-client';
const { ApolloClient } = ApolloClientNode;

const API_URL = 'http://localhost:4000/graphql'

const httpLink = createHttpLink({
    uri: API_URL,
    fetch: fetch
})

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})


export default client;