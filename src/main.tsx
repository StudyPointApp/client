import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalStyles from "./styles/GlobalStyles";
import {ApolloProvider} from "@apollo/client";
import {apolloClient} from "./services/graphql/apolloClient";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ApolloProvider client={apolloClient}>
        <GlobalStyles/>
        <App/>
        </ApolloProvider>
    </React.StrictMode>,
)
