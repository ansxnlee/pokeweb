import { ChakraProvider } from '@chakra-ui/react'

import theme from '../theme'
import { AppProps } from 'next/app'

import { createClient, dedupExchange, fetchExchange, Provider } from 'urql';
import { cacheExchange } from '@urql/exchange-graphcache';

import { ConninfoDocument, ConninfoQuery, LoginMutation, LogoutMutation } from '../generated/graphql'
import { altUpdateQuery } from '../utility/altUpdateQuery';

const client = createClient({
  url: 'http://localhost:4000/graphql',
  fetchOptions: {
    credentials: "include",
  },
  exchanges: [
    dedupExchange, 
    cacheExchange({
      // these entities don't have keys of their own so they'll "inherit" the keys from their children ids 
      keys: {
        Item: () => null,
        FieldError: () => null,
        OrderResponse: () => null,
      },
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
