import {ApolloClient, ApolloLink, concat, createHttpLink, InMemoryCache} from "@apollo/client";
import {ApolloClient_URL} from "../../types/globalVariables";
import {getAccessToken} from "../auth";

const httpLink = createHttpLink({ uri: ApolloClient_URL });

const authLink = new ApolloLink((operation, forward) => {
    const accessToken = getAccessToken();
    if (accessToken) {
        operation.setContext({
            headers: { 'Authorization': `Bearer ${accessToken}` },
        });
    }
    return forward(operation);
});

export const apolloClient = new ApolloClient({
    link: concat(authLink, httpLink),
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