import { ChakraProvider } from '@chakra-ui/react'

import theme from '../theme'
import { AppProps } from 'next/app'

import { createClient, dedupExchange, fetchExchange, Provider } from 'urql';
import { cacheExchange, Cache, QueryInput } from '@urql/exchange-graphcache';

import { ConninfoDocument, ConninfoQuery, LoginMutation, LogoutMutation } from '../generated/graphql'

// custom wrapper for cacheExchange mutation types
// def find a better way to do urql cache updates
function altUpdateQuery<Result, Query>(
  cache: Cache,
  qi: QueryInput,
  result: any,
  fn: (r: Result, q: Query) => Query
) {
  return cache.updateQuery(qi, data => fn(result, data as any) as any);
}

const client = createClient({
  url: 'http://localhost:4000/graphql',
  fetchOptions: {
    credentials: "include",
  },
  exchanges: [
    dedupExchange, 
    cacheExchange({
      updates: {
        Mutation: {
          login: (_result, args, cache, info) => {
            // cache.updateQuery({ query: ConninfoDocument }, (data: ConninfoQuery) => {});
            altUpdateQuery<LoginMutation, ConninfoQuery>(
              cache, 
              { query: ConninfoDocument},
              _result,
              (result, query) => {
                if (result.login.errors) {
                  return query
                } else {
                  return {
                    conninfo: result.login.user,
                  }
                };
              }
            );
          },
          logout: (_result, args, cache, info) => {
            altUpdateQuery<LogoutMutation, ConninfoQuery>(
              cache,
              { query: ConninfoDocument },
              _result,
              (result, query) => ({ conninfo: null })
            )
          },
        },
      },
    }), 
    fetchExchange
  ],
  
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  )
}

export default MyApp
