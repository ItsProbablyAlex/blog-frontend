import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://achapman-blog-cms.herokuapp.com/graphql",
    cache: new InMemoryCache(),
});

export default client;
