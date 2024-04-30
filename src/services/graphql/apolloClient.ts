import {ApolloClient, createHttpLink, InMemoryCache} from "@apollo/client";
import {ApolloClient_URL} from "../../types/globalVariables";

const httpLink = createHttpLink({ uri: ApolloClient_URL });


export const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    defaultOptions: {
        query: { // default options for query
            fetchPolicy: "network-only"
        },
        watchQuery: { // default options for watchQuery
            fetchPolicy: "network-only"
        }
    }
});