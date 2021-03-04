import { setContext } from 'apollo-link-context';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error';
import { GraphQLErrorHandler } from './GrahpError';

const httpLink = createHttpLink({
    uri: 'https://vue-ts.hasura.app/v1/graphql',
});
const errorHandlers: GraphQLErrorHandler = {
    TokenExpiredError: () => {
        console.log('Token , ...logging out...');
    },
    InvalidTokenError: (message: string) =>
        console.log(`[Token error]: Message: ${message}`),
    default: (message: string, locations: string, path: string) => {
        console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        );
    },
};
const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
        graphQLErrors.map((args: any) =>
            (errorHandlers[args.code] || errorHandlers.default)(args.message)
        );
    }
    graphQLErrors.map((args: any) => console.log(args));
    console.log(networkError);
    if (networkError) {
        console.log(`[Network error]: ${networkError}`);
    }
});
const authLink = setContext((_, { headers }) => ({
    headers: {
        'x-hasura-admin-secret': `WPbrm7vaTKB2FcD5uf4RXrWEEvbduHkPN27HX9T0JqLL20dNKvr2EKI53m8qyhm4`,
        ...headers,
    },
}));
const apolloClient = new ApolloClient({
    link: errorLink.concat(authLink.concat(httpLink)),
    cache: new InMemoryCache(),
    connectToDevTools: true,
});

export default apolloClient;
